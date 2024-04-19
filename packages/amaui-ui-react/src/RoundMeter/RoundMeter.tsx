import React from 'react';

import { clamp, is, parse, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SurfaceElement from '../Surface';
import { angleToCoordinates, staticClassName } from '../utils';
import { IBaseElement, ITonal, IColor, ISize, IStyle, IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100vw'
  },

  size_small: {
    maxWidth: '180px'
  },

  size_regular: {
    maxWidth: '240px'
  },

  size_large: {
    maxWidth: '300px'
  },

  boundary_1: {
    aspectRatio: '1'
  },

  boundary_075: {
    aspectRatio: '1'
  },

  boundary_05: {
    aspectRatio: '1'
  },

  boundary_025: {
    aspectRatio: '1'
  },

  label: {
    ...theme.typography.values.b2,

    textAnchor: 'middle',
    alignmentBaseline: 'central',
    dominantBaseline: 'central'
  },

  svg: {
    position: 'relative',
    width: '100%',
    height: 'auto'
  }
}), { name: 'amaui-RoundMeter' });

export interface IRoundMeter extends IBaseElement {
  tonal?: ITonal;
  color?: IColor;
  size?: ISize;

  // in how many parts boundary is separated in
  parts?: number;

  lineCap?: 'inherit' | 'round' | 'square' | 'butt';

  padding?: number;

  gap?: number;

  border?: boolean;

  background?: boolean;

  // 0.25, 0.5, 0.75 and 1
  boundary?: number;

  boundaryWidth?: number;

  arcProgress?: boolean;

  arcsVisible?: boolean;
  marksVisible?: boolean;
  labelsVisible?: boolean;

  marks?: Array<{
    size?: number;
    position?: number;
    padding?: number;

    [property: string]: any;
  }>;

  markSize?: number;
  markWidth?: number;

  labels?: Array<{
    value?: number;
    position?: number;
    padding?: number;
    style?: IStyle;

    [property: string]: any;
  }>;

  renderLabel?: (x: number, y: number, value: number, otherProps: any) => React.ReactNode;

  childrenPosition?: 'pre' | 'pre-marks' | 'pre-labels' | 'post';

  additional?: IElement;

  textProps?: IPropsAny;
  pathProps?: IPropsAny;

  SvgProps?: IPropsAny;
  MarkProps?: IPropsAny;
  LabelProps?: IPropsAny;
  BackgroundProps?: IPropsAny;
  BorderProps?: IPropsAny;
  ArcProps?: IPropsAny;
  ArcMainProps?: IPropsAny;
  ArcsProgressProps?: IPropsAny;
  ArcProgressProps?: IPropsAny;
}

const RoundMeter: React.FC<IRoundMeter> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiRoundMeter?.props?.default, ...props_ }), [props_]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',

    parts: parts_ = 1,

    lineCap,

    padding: outsidePadding = 0,

    gap: gap_ = 0,

    border = false,

    background = false,

    boundary: boundary_ = 1,

    boundaryWidth = 1,

    arcProgress = false,

    arcsVisible = true,
    marksVisible = true,
    labelsVisible = true,

    marks: marks_ = [],

    markSize = 4,
    markWidth = 1,

    labels: labels_ = [],

    renderLabel,

    childrenPosition = 'post',

    additional,

    textProps,
    pathProps,

    SvgProps,
    MarkProps,
    LabelProps,
    BackgroundProps,
    BorderProps,
    ArcProps,
    ArcMainProps,
    ArcsProgressProps,
    ArcProgressProps,

    Component = 'div',

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>()
  };

  const styles: any = {
    root: {

    }
  };

  let radius: number;

  const boundary = parse(boundary_);

  const width = 240;

  const height = width;

  let gap = ['round', 'square'].includes(lineCap) ? gap_ + (boundaryWidth / 2) : gap_;

  const parts = clamp(parse(parts_), 1, 180);

  let min = 0;
  let max = 360;

  let yViewBox = 0;

  // 1
  if (boundary === 1) {
    // 0 is middle top
    // ie. 270 degreese
    min = 270;
    max = 270 + 360;
  }

  // 0.75
  if (boundary === 0.75) {
    // 0 is angle bottom left
    // ie. 270 degreese
    min = 135;
    max = 135 + 270;

    yViewBox = -15;
  }

  // 0.5
  if (boundary === 0.5) {
    // 0 is left
    // ie. 180 degreese
    min = 180;
    max = 180 + 180;

    yViewBox = -50;
  }

  // 0.25
  if (boundary === 0.25) {
    // 0 is angle top left
    // ie. 225 degreese
    min = 225;
    max = 225 + 90;

    yViewBox = -60;
  }

  if (!['small', 'regular', 'large'].includes(size)) styles.root.maxWidth = size;

  const marks = React.useMemo(() => {
    const values = [];

    if (marks_.length) {
      const center = width / 2;

      radius = (width / 2) - boundaryWidth - outsidePadding;

      let marksValues = marks_;

      if (!is('array', marksValues[0])) marksValues = [marksValues];

      marksValues.forEach((marksValue: any, index: number) => {
        values[index] = [];

        marksValue.forEach((mark: any) => {
          const {
            size: size_,

            padding: markPadding = 0,

            position,

            ...other_
          } = mark;

          const angle = valueFromPercentageWithinRange(position, min, max);

          const start = angleToCoordinates(angle, center, center, radius - markPadding);

          const end = angleToCoordinates(angle, center, center, radius - (size_ !== undefined ? size_ : markSize) - markPadding);

          values[index].push({
            d: [
              'M', start.x, start.y,

              'L', end.x, end.y
            ].join(' '),

            ...other_
          });
        });
      });
    }

    return values;
  }, [width, height, parts, marks_, markSize, boundary, boundaryWidth, lineCap, outsidePadding, gap]);

  const labels = React.useMemo(() => {
    const values = [];

    if (labels_.length) {
      const center = width / 2;

      const marksPadding = marks_?.length ? (marks_ || []).sort((a, b) => b.size - a.size)[0]?.size || markSize : 0;

      radius = (width / 2) - boundaryWidth - marksPadding - outsidePadding;

      let labelsValues = labels_;

      if (!is('array', labelsValues[0])) labelsValues = [labelsValues];

      labelsValues.forEach((labelsValue: any, index: number) => {
        values[index] = [];

        labelsValue.forEach((label: any) => {
          const {
            value,

            padding: labelPadding = 0,

            position,

            ...other_
          } = label;

          const fontSize = label.style?.fontSize !== undefined ? label.style.fontSize : 14;

          const angle = valueFromPercentageWithinRange(position, min, max);

          const start = angleToCoordinates(angle, center, center, radius - (fontSize / 2) - labelPadding);

          values[index].push({
            x: start.x,
            y: start.y,

            value,

            ...other_
          });
        });
      });
    }

    return values;
  }, [width, height, parts, marks_, markSize, boundary, boundaryWidth, lineCap, outsidePadding, gap]);

  const arcs = React.useMemo(() => {
    const values = [];

    let value = [];

    const offset = outsidePadding;

    // 1
    if (boundary === 1) {
      if (parts === 1) {
        radius = ((width / 2) - (boundaryWidth / 2)) - offset;

        values.push(
          {
            d: [
              // Move
              'M', offset + (boundaryWidth / 2), (width / 2) + 0.001,

              // Arc
              'A', radius, radius, 0, 1, 0, offset + (boundaryWidth / 2), (width / 2)
            ].join(' ')
          }
        );
      }
      else {
        const center = width / 2;

        radius = (width / 2) - (boundaryWidth / 2) - offset;

        const total = 360;

        const part = (total - (parts * gap)) / parts;

        const angles: any = {
          start: angleToCoordinates(0, center, center, radius)
        };

        let anglePrevious = 0;

        for (let i = 0; i < parts; i++) {
          // Move to 0 deg
          if (i === 0) value.push(
            // Move to 0 deg
            'M', angles.start.x, angles.start.y
          );

          const angleEnd = anglePrevious + part;

          angles.end = angleToCoordinates(angleEnd, center, center, radius);

          angles.move = angleToCoordinates(angleEnd + gap, center, center, radius);

          // Arc
          value.push(
            'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y
          );

          // Move the gap if there's a gap
          if (gap > 0 && i < parts - 1) {
            value.push(
              'M', angles.move.x, angles.move.y
            );

            anglePrevious = angleEnd + gap;
          }
          else anglePrevious = angleEnd;

          values.push({ d: value.join(' ') });

          // Move for the next value
          if (i < parts - 1) {
            value = [
              'M', angles.move.x, angles.move.y
            ];
          }
        }
      }
    }

    // 0.75
    if (boundary === 0.75) {
      value = [];

      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const angles = {
        end: angleToCoordinates(45, center, center, radius),
        start: angleToCoordinates(135, center, center, radius)
      };

      if (parts === 1) {
        values.push(
          {
            d: [
              // Line middle bottom
              'M', angles.start.x, angles.start.y,

              // Arc
              'A', radius, radius, 0, 1, 1, angles.end.x, angles.end.y
            ].join(' ')
          }
        );
      }
      else {
        const total = 270;

        const part = (total - ((parts - 1) * gap)) / parts;

        const angles_: any = {
          0: angleToCoordinates(135, center, center, radius)
        };

        let anglePrevious = 135;

        for (let i = 0; i < parts; i++) {
          // Move to 135 deg
          if (i === 0) value.push(
            // Move to 0 deg
            'M', angles_[0].x, angles_[0].y
          );

          const angleEnd = anglePrevious + part;

          angles_.end = angleToCoordinates(angleEnd, center, center, radius);

          angles_.move = angleToCoordinates(angleEnd + gap, center, center, radius);

          // Arc
          value.push(
            'A', radius, radius, 0, 0, 1, angles_.end.x, angles_.end.y
          );

          // Move the gap if there's a gap
          if (gap > 0 && i < parts - 1) {
            value.push(
              'M', angles_.move.x, angles_.move.y
            );

            anglePrevious = angleEnd + gap;
          }
          else anglePrevious = angleEnd;

          values.push({ d: value.join(' ') });

          // Move for the next value
          if (i < parts - 1) {
            value = [
              'M', angles_.move.x, angles_.move.y
            ];
          }
        }
      }
    }

    // 0.5
    if (boundary === 0.5) {
      value = [];

      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const total = 180;

      const part = (total - ((parts - 1) * gap)) / parts;

      const angles: any = {
        start: angleToCoordinates(180, center, center, radius)
      };

      let anglePrevious = 180;

      for (let i = 0; i < parts; i++) {
        // Move to 180 deg
        if (i === 0) value.push(
          // Move to 0 deg
          'M', angles.start.x, angles.start.y
        );

        const angleEnd = anglePrevious + part;

        angles.end = angleToCoordinates(angleEnd, center, center, radius);

        angles.move = angleToCoordinates(angleEnd + gap, center, center, radius);

        // Arc
        value.push(
          'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y
        );

        // Move the gap if there's a gap
        if (gap > 0 && i < parts - 1) {
          value.push(
            'M', angles.move.x, angles.move.y
          );

          anglePrevious = angleEnd + gap;
        }
        else anglePrevious = angleEnd;

        values.push({ d: value.join(' ') });

        // Move for the next value
        if (i < parts - 1) {
          value = [
            'M', angles.move.x, angles.move.y
          ];
        }
      }
    }

    // 0.25
    if (boundary === 0.25) {
      value = [];

      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const total = 90;

      const part = clamp((total - ((parts - 1) * gap)) / parts, 0.01);

      gap = clamp(gap, 0, ((total - (part * parts)) / (parts - 1)));

      const angles: any = {
        start: angleToCoordinates(225, center, center, radius)
      };

      let anglePrevious = 225;

      for (let i = 0; i < parts; i++) {
        // Move to 225 deg
        if (i === 0) value.push(
          // Move to 0 deg
          'M', angles.start.x, angles.start.y
        );

        const angleEnd = anglePrevious + part;

        angles.end = angleToCoordinates(angleEnd, center, center, radius);

        angles.move = angleToCoordinates(angleEnd + gap, center, center, radius);

        // Arc
        value.push(
          'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y
        );

        // Move the gap if there's a gap
        if (gap > 0 && i < parts - 1) {
          value.push(
            'M', angles.move.x, angles.move.y
          );

          anglePrevious = angleEnd + gap;
        }
        else anglePrevious = angleEnd;

        values.push({ d: value.join(' ') });

        // Move for the next value
        if (i < parts - 1) {
          value = [
            'M', angles.move.x, angles.move.y
          ];
        }
      }
    }

    return values;
  }, [width, height, parts, boundary, boundaryWidth, lineCap, outsidePadding, gap, gap_]);

  const pathBackground = React.useMemo(() => {
    const values = [];

    const offset = outsidePadding;

    // 1
    if (boundary === 1) {
      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      values.push(
        // Move
        'M', offset + (boundaryWidth / 2), (width / 2) + 0.001,

        // Arc
        'A', radius, radius, 0, 1, 0, offset + (boundaryWidth / 2), (width / 2)
      );
    }

    // 0.75
    if (boundary === 0.75) {
      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const angles = {
        end: angleToCoordinates(45, center, center, radius),
        start: angleToCoordinates(135, center, center, radius)
      };

      values.push(
        // Move
        'M', center, center,

        // Line middle bottom
        'L', angles.start.x, angles.start.y,

        // Arc
        'A', radius, radius, 0, 1, 1, angles.end.x, angles.end.y,

        // Line bottom middle
        'L', center, center,

        'Z'
      );
    }

    // 0.5
    if (boundary === 0.5) {
      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const total = 180;

      const part = (total - ((parts - 1) * gap)) / parts;

      const angles: any = {
        start: angleToCoordinates(180, center, center, radius)
      };

      const anglePrevious = 180;

      const angleEnd = anglePrevious + part;

      angles.end = angleToCoordinates(angleEnd, center, center, radius);

      angles.move = angleToCoordinates(angleEnd + gap, center, center, radius);

      values.push(
        // Move
        'M', angles.start.x, angles.start.y,

        // Arc
        'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y,

        'Z'
      );
    }

    // 0.25
    if (boundary === 0.25) {
      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const total = 90;

      const part = clamp((total - ((parts - 1) * gap)) / parts, 0.01);

      gap = clamp(gap, 0, ((total - (part * parts)) / (parts - 1)));

      const angles: any = {
        start: angleToCoordinates(225, center, center, radius)
      };

      const anglePrevious = 225;

      const angleEnd = anglePrevious + part;

      angles.end = angleToCoordinates(angleEnd, center, center, radius);

      angles.move = angleToCoordinates(angleEnd + gap, center, center, radius);

      values.push(
        // Move
        'M', center, ((width / 2) - boundaryWidth),

        // Line middle bottom, top quarter left
        'L', angles.start.x, angles.start.y,

        // Arc
        'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y,

        // Line top quarter right, middle bottom
        'L', center, ((width / 2) - boundaryWidth),

        'Z'
      );
    }

    return values.join(' ');
  }, [width, height, boundary, boundaryWidth, outsidePadding]);

  const pathBorder = React.useMemo(() => {
    const values = [];

    const offset = outsidePadding;

    // 0.75
    if (boundary === 0.75) {
      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const angles = {
        end: angleToCoordinates(45, center, center, radius),
        start: angleToCoordinates(135, center, center, radius)
      };

      values.push(
        // Move bottom angle left
        'M', angles.start.x, angles.start.y,

        // Line middle
        'L', center, center,

        // Line bottom angle right
        'L', angles.end.x, angles.end.y
      );
    }

    // 0.5
    if (boundary === 0.5) {
      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const angles: any = {
        start: angleToCoordinates(180, center, center, radius)
      };

      values.push(
        // Move
        'M', angles.start.x, angles.start.y,

        // Line
        'L', (width - (boundaryWidth / 2)) - offset, angles.start.y
      );
    }

    // 0.25
    if (boundary === 0.25) {
      const center = width / 2;

      radius = ((width / 2) - (boundaryWidth / 2)) - offset;

      const total = 90;

      const part = clamp((total - ((parts - 1) * gap)) / parts, 0.01);

      gap = clamp(gap, 0, ((total - (part * parts)) / (parts - 1)));

      const angles: any = {
        start: angleToCoordinates(225, center, center, radius),
        end: angleToCoordinates(315, center, center, radius)
      };

      values.push(
        // Move middle bottom, top quarter left
        'M', angles.start.x, angles.start.y,

        // Line middle bottom
        'L', center, ((width / 2) - boundaryWidth),

        // Arc  top quarter right, middle bottom
        'L', angles.end.x, angles.end.y
      );
    }

    return values.join(' ');
  }, [width, height, boundary, boundaryWidth, outsidePadding]);

  const children_ = children && (
    <g
      className={classNames([
        staticClassName('RoundMeter', theme) && [
          'amaui-RoundMeter-children'
        ],

        classes.children
      ])}
    >
      {React.Children.toArray(children).map((item: any, index: number) => {

        return (
          React.cloneElement(item, {
            key: index,

            fill: item.props.fill !== undefined ? item.props.fill : color,

            stroke: item.props.stroke !== undefined ? item.props.stroke : color,

            // clean up
            value: undefined,

            style: {
              ...(item.props.value !== undefined ? {
                transform: `rotate(${valueFromPercentageWithinRange(item.props.value, min, max)}deg)`
              } : undefined),

              ...item.props.style
            }
          })
        );
      })}
    </g>
  );

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('RoundMeter', theme) && [
          'amaui-RoundMeter-root',
          `amaui-RoundMeter-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        classes[`boundary_${String(boundary).replace('.', '')}`]
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      {additional}

      <Surface
        tonal={tonal}

        color={color}
      >
        {({ color: color_, backgroundColor }) => (
          <svg
            xmlns='http://www.w3.org/2000/svg'

            viewBox={`0 ${yViewBox} ${width || 0} ${height || 0}`}

            {...SvgProps}

            className={classNames([
              staticClassName('RoundMeter', theme) && [
                'amaui-RoundMeter-svg'
              ],

              SvgProps?.className,
              classes.svg
            ])}
          >
            {/* Children */}
            {childrenPosition === 'pre' && children_}

            {/* Background */}
            {background && (
              <path
                d={pathBackground}

                fill={backgroundColor}

                stroke='none'

                {...pathProps}

                {...BackgroundProps}
              />
            )}

            {/* Border */}
            {border && (
              <path
                d={pathBorder}

                fill='none'

                stroke={color_}

                strokeWidth={boundaryWidth}

                {...pathProps}

                {...BorderProps}
              />
            )}

            {/* Arcs */}
            {arcsVisible && (
              <g
                className={classNames([
                  staticClassName('RoundMeter', theme) && [
                    'amaui-RoundMeter-arcs'
                  ],

                  classes.arcs
                ])}
              >
                {(arcs.map((item: any, index: number) => (
                  <path
                    key={index}

                    d={item.d}

                    fill='none'

                    stroke={color_}

                    strokeWidth={boundaryWidth}

                    strokeLinecap={lineCap}

                    {...pathProps}

                    {...ArcProps}

                    {...ArcMainProps}
                  />
                )))}
              </g>
            )}

            {/* Arcs progress */}
            {arcsVisible && arcProgress && (
              <g
                {...ArcsProgressProps}

                className={classNames([
                  staticClassName('RoundMeter', theme) && [
                    'amaui-RoundMeter-arcs-progress'
                  ],

                  ArcsProgressProps?.className,
                  classes.arcs_progress
                ])}
              >
                {(arcs.map((item: any, index: number) => (
                  <path
                    key={index}

                    d={item.d}

                    fill='none'

                    stroke={color_}

                    strokeWidth={boundaryWidth}

                    strokeLinecap={lineCap}

                    {...pathProps}

                    {...ArcProps}

                    {...ArcProgressProps}
                  />
                )))}
              </g>
            )}

            {/* Children */}
            {childrenPosition === 'pre-marks' && children_}

            {/* Marks */}
            {marksVisible && !!marks_.length && (
              marks.map((marksValue: any, index: number) => (
                <g
                  key={index}

                  className={classNames([
                    staticClassName('RoundMeter', theme) && [
                      'amaui-RoundMeter-marks'
                    ],

                    classes.marks
                  ])}
                >
                  {(marksValue.map((item: any, index_: number) => (
                    <path
                      key={index_}

                      d={item.d}

                      fill='none'

                      stroke={color_}

                      strokeWidth={item.width !== undefined ? item.width : markWidth}

                      strokeLinecap={lineCap}

                      {...pathProps}

                      {...MarkProps}
                    />
                  )))}
                </g>
              ))
            )}

            {/* Children */}
            {childrenPosition === 'pre-labels' && children_}

            {/* Labels */}
            {labelsVisible && !!labels_.length && (
              labels.map((labelsValue: any, index: number) => {

                return (
                  <g
                    key={index}

                    className={classNames([
                      staticClassName('RoundMeter', theme) && [
                        'amaui-RoundMeter-labels'
                      ],

                      classes.labels
                    ])}
                  >
                    {(labelsValue.map((item: any, index_: number) => {
                      const { x, y, value, ...other_ } = item;

                      const propsLabel = {
                        ...other_,

                        ...textProps,

                        ...LabelProps,

                        style: {
                          fill: color_,

                          ...other_.style,

                          ...textProps?.style,

                          ...LabelProps?.style
                        }
                      };

                      if (is('function', renderLabel)) return renderLabel(x, y, value, propsLabel);

                      return (
                        <text
                          key={index_}

                          x={x}

                          y={y}

                          {...propsLabel}

                          className={classNames([
                            staticClassName('RoundMeter', theme) && [
                              'amaui-RoundMeter-label'
                            ],

                            other_?.className,
                            textProps?.className,
                            LabelProps?.className,
                            classes.label
                          ])}
                        >
                          {value}
                        </text>
                      );
                    }))}
                  </g>
                );
              })
            )}

            {/* Children */}
            {childrenPosition === 'post' && children_}
          </svg>
        )}
      </Surface>
    </Component>
  );
});

RoundMeter.displayName = 'amaui-RoundMeter';

export default RoundMeter;
