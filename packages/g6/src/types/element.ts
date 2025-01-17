import type { DisplayObject } from '@antv/g';
import { BaseShapeStyleProps } from '../elements/shapes';
import type { RuntimeContext } from '../runtime/types';
import type { ComboOptions, EdgeOptions, NodeOptions } from '../spec';
import type { Point, Port } from '../types';

/**
 * <zh/> 节点类型
 *
 * <en/> Node type
 */
export interface Node extends DisplayObject, ElementHooks, ElementMethods {
  /**
   * <zh/> 获取连接桩
   *
   * <en/> Get the ports
   */
  getPorts(): Record<string, Port>;

  /**
   * <zh/> 获取节点中心位置
   *
   * <en/> Get the center position of the node
   */
  getCenter(): Point;

  /**
   * <zh/> 获取交点位置
   *
   * <en/> Get the intersection point
   * @param point - <zh/> 外部位置 | <en/> external position
   * @returns <zh/> 交点位置 | <en/> intersection point
   * @description
   * <zh/> 给定一个外部位置，返回当前节点与该位置的连边与节点的交点位置
   *
   * <en/> Given an external position, return the intersection point of the edge between the current node and the position and the node
   */
  getIntersectPoint(point: Point): Point;
}

/**
 * <zh/> 边类型
 *
 * <en/> Edge type
 */
export interface Edge extends DisplayObject, ElementHooks, ElementMethods {}

/**
 * <zh/> 组合类型
 *
 * <en/> Combo type
 */
export interface Combo extends Node {
  /**
   * <zh/> 获取组合的位置
   *
   * <en/> Get the position of the combo
   * @param attributes - <zh/> 组合属性 | <en/> combo attributes
   */
  getComboPosition(attributes: Record<string, unknown>): Point;
}

export type Element = Node | Edge | Combo;

export type ElementType = 'node' | 'edge' | 'combo';

export type ElementOptions = NodeOptions | EdgeOptions | ComboOptions;

export interface BaseElementStyleProps extends BaseShapeStyleProps {
  /**
   * @internal
   */
  context?: RuntimeContext;
}

/**
 * <zh/> 元素方法
 *
 * <en/> Element methods
 */
export interface ElementMethods {
  /**
   * <zh/> 获取当前元素内的子图形
   *
   * <en/> Get the subgraph in the current element
   * @param shapeID - <zh/> 子图形 ID | <en/> Subgraph ID
   * @returns <zh/> 子图形 | <en/> Subgraph
   */
  getShape<T extends DisplayObject = DisplayObject>(shapeID: string): T;
}

/**
 * <zh/> 元素钩子方法
 *
 * <en/> Element hooks
 */
export interface ElementHooks {
  /**
   * <zh/> 在元素完成创建并执行完入场动画后调用
   *
   * <en/> Called after the element is created and the entrance animation is completed
   * @override
   */
  onCreate?: () => void;

  /**
   * <zh/> 在元素更新并执行完过渡动画后调用
   *
   * <en/> Called after the element is updated and the transition animation is completed
   * @override
   */
  onUpdate?: () => void;

  /**
   * <zh/> 在元素完成退场动画并销毁后调用
   *
   * <en/> Called after the element completes the exit animation and is destroyed
   * @override
   */
  onDestroy?: () => void;
}
