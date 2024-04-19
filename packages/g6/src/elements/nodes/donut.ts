import { Path } from '@antv/g';
import { deepMix, isNumber, isString } from '@antv/util';
import { getPaletteColors } from '../../utils/palette';
import { subStyleProps } from '../../utils/prefix';
import { parseSize } from '../../utils/size';
import { Circle } from './circle';

import type { BaseStyleProps, DisplayObjectConfig, Group } from '@antv/g';
import type { PrefixObject } from '../../types';
import type { CircleStyleProps } from './circle';

interface Round extends BaseStyleProps {
  /**
   * <zh/> 数值，用于计算比例
   *
   * <en/> Numerical value used to calculate the scale.
   */
  value: number;
  /**
   * <zh/> 颜色
   *
   * <en/> Color.
   */
  color?: string;
}

export interface DonutStyleProps extends CircleStyleProps, PrefixObject<BaseStyleProps, 'donut'> {
  /**
   * <zh/> 内环半径，使用百分比或者像素值
   *
   * <en/> Inner ring radius, using percentage or pixel value.
   */
  innerRadius?: string | number;
  /**
   * <zh/> 圆环数据
   *
   * <en/> Donut data.
   */
  donuts?: number[] | Round[];
  /**
   * <zh/> 颜色或者色板名
   *
   * <en/> Color or palette.
   */
  colors?: string | string[];
}

export class Donut extends Circle {
  static defaultStyleProps: Partial<DonutStyleProps> = {
    innerRadius: '50%',
    donuts: [],
    colors: 'tableau',
  };

  constructor(options: DisplayObjectConfig<DonutStyleProps>) {
    super(deepMix({}, { style: Donut.defaultStyleProps }, options));
  }

  protected drawDonutShape(attributes: Required<DonutStyleProps>, container: Group): void {
    const { donuts, innerRadius = 0, size } = attributes;
    if (!donuts?.length) return;

    const parsedDonuts = donuts.map((round) => (isNumber(round) ? { value: round } : round) as Round);

    const style = subStyleProps<BaseStyleProps>(this.getGraphicStyle(attributes), 'donut');

    const colors = getPaletteColors(attributes.colors);
    if (!colors) return;

    const sum = parsedDonuts.reduce((acc, cur) => acc + (cur.value ?? 0), 0);

    let start = 0;
    parsedDonuts.forEach((round, index) => {
      const { value = 0, color = colors[index % colors.length], ...roundStyle } = round;
      const outerR = parseSize(size)[0] / 2;
      const innerR = isString(innerRadius) ? (outerR * parseInt(innerRadius)) / 100 : innerRadius;
      const angle = (sum === 0 ? 1 / parsedDonuts.length : value / sum) * 360;

      this.upsert(
        `round${index}`,
        Path,
        {
          ...style,
          path: arc(outerR, innerR, start, start + angle),
          fill: color,
          ...roundStyle,
        },
        container,
      );

      start += angle;
    });
  }

  public render(attributes: Required<DonutStyleProps>, container: Group = this) {
    super.render(attributes, container);
    this.drawDonutShape(attributes, container);
  }
}

const point = (x: number, y: number, r: number, angel: number) => [x + Math.sin(angel) * r, y - Math.cos(angel) * r];

const full = (x: number, y: number, R: number, r: number) => {
  if (r <= 0 || R <= r) {
    return [['M', x - R, y], ['A', R, R, 0, 1, 1, x + R, y], ['A', R, R, 0, 1, 1, x - R, y], ['Z']];
  }
  return [
    ['M', x - R, y],
    ['A', R, R, 0, 1, 1, x + R, y],
    ['A', R, R, 0, 1, 1, x - R, y],
    ['Z'],
    ['M', x + r, y],
    ['A', r, r, 0, 1, 0, x - r, y],
    ['A', r, r, 0, 1, 0, x + r, y],
    ['Z'],
  ];
};

const part = (x: number, y: number, R: number, r: number, start: number, end: number) => {
  const [s, e] = [(start / 360) * 2 * Math.PI, (end / 360) * 2 * Math.PI];
  const P = [point(x, y, r, s), point(x, y, R, s), point(x, y, R, e), point(x, y, r, e)];
  const flag = e - s > Math.PI ? 1 : 0;
  return [
    ['M', P[0][0], P[0][1]],
    ['L', P[1][0], P[1][1]],
    ['A', R, R, 0, flag, 1, P[2][0], P[2][1]],
    ['L', P[3][0], P[3][1]],
    ['A', r, r, 0, flag, 0, P[0][0], P[0][1]],
    ['Z'],
  ];
};

const arc = (R = 0, r = 0, start: number, end: number) => {
  const [x, y] = [0, 0];
  if (Math.abs(start - end) % 360 < 0.000001) return full(x, y, R, r);
  return part(x, y, R, r, start, end);
};
