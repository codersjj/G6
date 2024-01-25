import { DisplayObject, Group, IAnimation, Line, Path, Polyline } from '@antv/g';
import { isString, uniq } from '@antv/util';
import { AnimateTiming, IAnimate, IAnimates } from '../types/animate';
import { ItemShapeStyles, ShapeStyle } from '../types/item';
import { isArrayOverlap, replaceElements } from './array';
import { cloneJSON } from './data';
import { getDescendantShapes } from './shape';

/**
 * Initial(timing = show) shape animation start from init shape styles, and end to the shape's style config.
 * @param shape
 */
export const getShapeAnimateBeginStyles = (shape) => {
  if (!shape) return {};
  const shapeType = shape.nodeName;
  const commonStyles = {
    opacity: 0,
    strokeOpacity: 0,
    lineWidth: 1,
    offsetDistance: 0,
  };
  if (['line', 'polyline', 'path'].includes(shapeType)) {
    return {
      lineDash: [0, '100%'],
      ...commonStyles,
    };
  } else if (shapeType === 'circle') {
    return {
      r: 0,
      ...commonStyles,
    };
  } else if (shapeType === 'ellipse') {
    return {
      rx: 0,
      ry: 0,
      ...commonStyles,
    };
  } else if (shapeType === 'text') {
    return {
      fontSize: 0,
      opacity: 0,
      strokeOpacity: 0,
      offsetDistance: 0,
      fill: '#000',
    };
  }
  return {
    width: 0,
    height: 0,
    ...commonStyles,
  };
};
/**
 * Initial(timing = show) group animation start from GROUP_ANIMATE_STYLES[0], and end to GROUP_ANIMATE_STYLES[1].
 */
export const GROUP_ANIMATE_STYLES = [
  {
    opacity: 0,
    transform: 'scale(0)',
  },
  {
    opacity: 1,
    transform: 'scale(1)',
  },
];

/**
 * Default animate options for different timing.
 */
export const DEFAULT_ANIMATE_CFG = {
  buildIn: {
    duration: 500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    iterations: 1,
    fill: 'both',
  },
  show: {
    duration: 500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    iterations: 1,
    fill: 'both',
  },
  update: {
    duration: 500,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    iterations: 1,
    fill: 'both',
  },
  zoom: {
    duration: 200,
    easing: 'linear',
    iterations: 1,
    delay: 0,
    fill: 'both',
  },
};

/**
 * Get different key value map between style1 and style2.
 * @param style1
 * @param style2
 * @returns
 */
const getStyleDiff = (style1: ShapeStyle, style2: ShapeStyle) => {
  const diff = [{}, {}];
  Object.keys(style1).forEach((key) => {
    if (style2[key] !== style1[key]) {
      diff[0][key] = style1[key];
      diff[1][key] = style2[key];
    }
  });
  return diff;
};

/**
 * Grouping the animates at a timing by order.
 * @param animates
 * @param segmentedTiming
 * @param changedStates
 * @returns
 */
const groupTimingAnimates = (
  animates: IAnimates,
  segmentedTiming: AnimateTiming | 'stateUpdate',
  changedStates: string[],
) => {
  const timingAnimateGroups = {};
  const isStateUpdate = segmentedTiming === 'stateUpdate';
  animates[isStateUpdate ? 'update' : segmentedTiming].forEach((item: any) => {
    const { order = 0, states } = item;
    if (states?.length) {
      if (!isArrayOverlap(states, changedStates)) return;
    }
    timingAnimateGroups[order] = timingAnimateGroups[order] || [];
    timingAnimateGroups[order].push(item);
  });
  return timingAnimateGroups;
};

/**
 * Execute animations in order at a timing.
 * @param shapeMap
 * @param shapeIds
 * @param groups
 * @param timingAnimates
 * @param targetStylesMap
 * @param timing
 * @param onfinish
 * @param cancelAnimations
 * @param canceled
 */
const runAnimateGroupOnShapes = (
  shapeMap: { [shapeId: string]: DisplayObject },
  shapeIds: string[] = undefined,
  groups: Group[],
  timingAnimates: IAnimate[],
  targetStylesMap: ItemShapeStyles,
  timing: AnimateTiming,
  onfinish: Function,
  cancelAnimations: Function,
  canceled: boolean,
) => {
  let maxDuration = -Infinity;
  let maxDurationIdx = -1;
  let hasCanceled = canceled;
  const isOut = timing === 'buildOut' || timing === 'hide';
  const shapeIdsToAnimate = shapeIds ? shapeIds : Object.keys(shapeMap);
  const animations = timingAnimates
    .map((animateOptions: any) => {
      const { fields, shapeId, order, states, ...animateCfg } = animateOptions;
      const animateConfig = {
        ...DEFAULT_ANIMATE_CFG[timing],
        ...animateCfg,
      };
      const { iterations } = animateConfig;
      if (iterations === Infinity && animateCfg.fill == undefined) {
        animateConfig.fill = 'auto';
      }

      let animates = [];
      if (!shapeId || shapeId === 'group') {
        // animate on group
        const usingFields = [];
        let hasOpacity = false;
        fields?.forEach((field) => {
          if (field === 'size') usingFields.push('transform');
          else if (field !== 'opacity') usingFields.push(field);
          else hasOpacity = true;
        });
        const targetStyle = targetStylesMap.group || GROUP_ANIMATE_STYLES[isOut ? 0 : 1];
        if (hasCanceled) {
          Object.keys(targetStyle).forEach((key) => {
            groups.forEach((group) => (group.style[key] = targetStyle[key]));
          });
        } else {
          if (hasOpacity) {
            // opacity on group, animate on all shapes
            shapeIdsToAnimate.forEach((sid) => {
              if (!shapeMap[sid]) return;
              const { opacity: targetOpacity = isOut ? 0 : 1 } =
                targetStylesMap[sid] || targetStylesMap.otherShapes?.[sid] || {};
              animates.push(
                runAnimateOnShape(
                  shapeMap[sid],
                  ['opacity'],
                  { opacity: targetOpacity },
                  getShapeAnimateBeginStyles(shapeMap[sid]),
                  animateConfig,
                ),
              );
            });
          }
          if (usingFields.length) {
            animates = animates.concat(
              groups.map((group) =>
                runAnimateOnShape(group, usingFields, targetStyle, GROUP_ANIMATE_STYLES[isOut ? 1 : 0], animateConfig),
              ),
            );
          }
        }
      } else {
        const shape = shapeMap[shapeId];
        if (shape && shape.style.display !== 'none' && shape.style.visibility !== 'hidden') {
          const targetStyle = targetStylesMap[shapeId] || targetStylesMap.otherShapes?.[shapeId] || {};
          if (hasCanceled) {
            Object.keys(targetStyle).forEach((key) => {
              shape.style[key] = targetStyle[key];
            });
          } else {
            animates.push(
              runAnimateOnShape(shape, fields, targetStyle, getShapeAnimateBeginStyles(shape), animateConfig),
            );
          }
        }
      }
      return animates;
    })
    .flat()
    .filter(Boolean);
  animations.forEach((animation, i) => {
    const { duration } = animation.effect.timing;
    if (maxDuration < duration) {
      maxDuration = duration;
      maxDurationIdx = i;
    }
    if (animation) {
      animation.onManualCancel = () => {
        hasCanceled = true;
        cancelAnimations();
      };
    }
  });
  if (maxDurationIdx > -1) {
    const selfOnfinish = animations[maxDurationIdx].onfinish;
    animations[maxDurationIdx].onfinish = () => {
      selfOnfinish?.();
      onfinish?.();
    };
  }
  return animations;
};

/**
 * Execute one animation.
 * @param shape
 * @param fields
 * @param targetStyle
 * @param beginStyle
 * @param animateConfig
 * @returns
 */
const runAnimateOnShape = (
  shape: DisplayObject,
  fields: string[],
  targetStyle: ShapeStyle,
  beginStyle: ShapeStyle,
  animateConfig,
) => {
  let animateArr;
  let percentLineDash = false;
  if (!fields?.length) {
    animateArr = getStyleDiff(shape.attributes, targetStyle);
  } else {
    animateArr = [{}, {}];
    fields.forEach((key) => {
      animateArr[0][key] = shape.style[key] === undefined ? cloneJSON(beginStyle[key]) : cloneJSON(shape.style[key]);
      if (targetStyle[key] === undefined) return;
      animateArr[1][key] = cloneJSON(targetStyle[key]);
      if (key === 'lineDash') {
        const beginPercents = uniq(animateArr[0][key].filter((val) => isString(val) && val.includes('%')));
        const targetPercents = uniq(animateArr[1][key].filter((val) => isString(val) && val.includes('%')));
        if (beginPercents.length || targetPercents.length) {
          percentLineDash = cloneJSON(animateArr[0].lineDash);
          const totalLength = (shape as Line | Polyline | Path).getTotalLength();
          beginPercents.forEach((percent, i) => {
            replaceElements(animateArr[0][key], percent, (Number(percent.replace('%', '')) / 100) * totalLength);
          });
          targetPercents.forEach((percent, i) => {
            replaceElements(animateArr[1][key], percent, (Number(percent.replace('%', '')) / 100) * totalLength);
          });
        }
      } else if (key === 'offsetDistance') {
        animateArr[1][key] = animateArr[1][key] || 1;
      }
    });
  }
  if (!checkFrames(animateArr, shape)) return;
  if (!shape.isVisible()) {
    // Invisible, do not apply animate. Directly assign the target style instead.
    Object.keys(animateArr[1]).forEach((field) => (shape.style[field] = animateArr[1][field]));
    return;
  }
  if (animateConfig.iterations === -1 || animateConfig.iterations === null) animateConfig.iterations = Infinity;
  const animation = shape.animate(animateArr, animateConfig);
  if (percentLineDash) {
    animation.onfinish = () => {
      shape.style.lineDash = percentLineDash;
    };
  }
  return animation;
};

/**
 * Handle shape and group animations.
 * Should be called after canvas ready and shape appended.
 * @param animates
 * @param mergedStyles
 * @param shapeMap
 * @param shapeIds
 * @param groups
 * @param timing
 * @param changedStates
 * @param onAnimatesFrame
 * @param onAnimatesEnd
 * @returns
 */
export const animateShapes = (
  animates: IAnimates,
  mergedStyles: ItemShapeStyles,
  shapeMap: { [shapeId: string]: DisplayObject },
  shapeIds: string[] = undefined,
  groups: Group[],
  timing: AnimateTiming = 'buildIn',
  changedStates: string[] = [],
  onAnimatesFrame: Function = () => {},
  onAnimatesEnd: Function = () => {},
): IAnimation[] => {
  if (!animates?.[timing]) {
    onAnimatesEnd(false);
    return;
  }
  const segmentedTiming = timing === 'update' && changedStates?.length ? 'stateUpdate' : timing;
  const timingAnimateGroups = groupTimingAnimates(animates, segmentedTiming, changedStates);
  let i = 0;
  const groupKeys = Object.keys(timingAnimateGroups);
  if (!groupKeys.length) return;
  const animations = [];
  let canceled = false;
  const onfinish = () => {
    if (i >= groupKeys.length) {
      !canceled && onAnimatesEnd(canceled);
      return;
    }
    const groupAnimations = runAnimateGroupOnShapes(
      shapeMap,
      shapeIds,
      groups,
      timingAnimateGroups[groupKeys[i]],
      mergedStyles,
      timing,
      onfinish, // execute next order group
      () => {
        canceled = true;
        onAnimatesEnd(canceled);
      },
      canceled,
    ).filter(Boolean);
    groupAnimations.forEach((animation) => {
      animation.onframe = onAnimatesFrame;
      animations.push(animation);
    });
    i++;
  };
  onfinish();
  // only animations with order 0 will be returned
  return animations;
};

export const getAnimatesExcludePosition = (animates) => {
  if (!animates.update) return animates;
  const isGroupId = (id) => !id || id === 'group';
  const excludedAnimates = [];
  animates.update.forEach((animate) => {
    const { shapeId, fields } = animate;
    const newFields = [...fields];
    if (!isGroupId(shapeId)) {
      excludedAnimates.push({
        ...animate,
        fields: newFields,
      });
      return;
    }
    let isGroupPosition = false;
    if (fields.includes('x')) {
      const xFieldIdx = newFields.indexOf('x');
      newFields.splice(xFieldIdx, 1);
      isGroupPosition = true;
    }
    if (fields.includes('y')) {
      const yFieldIdx = newFields.indexOf('y');
      newFields.splice(yFieldIdx, 1);
      isGroupPosition = true;
    }

    if (isGroupPosition) {
      if (newFields.length !== 0) {
        // group animation but not on x and y
        excludedAnimates.push({
          ...animate,
          fields: newFields,
        });
      }
    } else {
      excludedAnimates.push({
        ...animate,
        fields: newFields,
      });
    }
  });
  return {
    ...animates,
    update: excludedAnimates,
  };
};

/**
 * Make the animation to the end frame and clear it from the target shape.
 * @param animation
 */
export const stopAnimate = (animation: IAnimation): Promise<any> => {
  const timing = animation.effect.getTiming();
  animation.currentTime = Number(timing.duration) + Number(timing.delay || 0);
  animation.finish();
  return animation.finished;
};

/**
 * <zh/> 对图形执行动画
 *
 * <en/> Animate the shape
 * @param shape - <zh/> 待执行动画的图形 | <en/> the shape to be animated
 * @param keyframes - <zh/> 动画关键帧 | <en/> keyframes of the animation
 * @param options - <zh/> 动画配置项 | <en/> animation options
 * @returns <zh/> 动画对象 | <en/> animation object
 * @description
 * <zh/> 在设置 enableCSSParsing 为 false 后，复合图形无法继承父属性，因此对于一些需要继承父属性的动画，需要对所有子图形执行相同的动画
 *
 * <en/> After setting enableCSSParsing to false, the compound shape cannot inherit the parent attribute, so for some animations that need to inherit the parent attribute, the same animation needs to be performed on all child shapes
 */
export function executeAnimate<T extends DisplayObject>(
  shape: T,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
) {
  const inheritedAttrs = ['opacity'];

  const needInheritAnimation = keyframes.some((keyframe) =>
    Object.keys(keyframe).some((attr) => inheritedAttrs.includes(attr)),
  );

  if (!needInheritAnimation) return shape.animate(keyframes, options);
  const inheritAttrsKeyframes = keyframes.map((keyframe) => {
    const newKeyframe: Keyframe = {};
    Object.entries(keyframe).forEach(([attr, value]) => {
      if (inheritedAttrs.includes(attr)) {
        newKeyframe[attr] = value;
      }
    });
    return newKeyframe;
  });

  const descendants = getDescendantShapes(shape);

  const keyShapeAnimation = shape.animate(keyframes, options);
  const descendantAnimations = descendants.map((descendant) => descendant.animate(inheritAttrsKeyframes, options));
  return createAnimationsProxy(keyShapeAnimation, descendantAnimations);
}

/**
 * <zh/> 创建动画代理，对一个动画实例的操作同步到多个动画实例上
 *
 * <en/> create animation proxy, synchronize animation to multiple animation instances
 * @param sourceAnimation - <zh/> 源动画实例 | <en/> source animation instance
 * @param targetAnimations - <zh/> 目标动画实例 | <en/> target animation instance
 * @returns <zh/> 动画代理 | <en/> animation proxy
 */
export function createAnimationsProxy(sourceAnimation: IAnimation, targetAnimations: IAnimation[]): IAnimation {
  return new Proxy(sourceAnimation, {
    get(target, propKey) {
      if (typeof target[propKey] === 'function') {
        return (...args: unknown[]) => {
          target[propKey](...args);
          targetAnimations.forEach((animation) => animation[propKey]?.(...args));
        };
      }
      return Reflect.get(target, propKey);
    },
    set(target, propKey, value) {
      targetAnimations.forEach((animation) => (animation[propKey] = value));
      return Reflect.set(target, propKey, value);
    },
  });
}
