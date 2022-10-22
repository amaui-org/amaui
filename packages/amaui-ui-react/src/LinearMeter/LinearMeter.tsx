import React from 'react';

import { clamp, is, parse } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%'
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
}), { name: 'AmauiLinearMeter' });

const LinearMeter = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiLinearMeter?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    size = 'regular',

    parts: parts_ = 1,

    lineCap,

    // vertical, horizontal
    orientation = 'horizontal',

    // start, center, end
    linePosition = 'end',

    width: width_,
    height: height_,

    padding: outsidePadding = 0,
    paddingVertical,
    paddingHorizontal,

    gap = 0,

    background = false,

    border = false,

    boundaryWidth = 1,

    lineProgress = false,

    linesVisible = true,
    marksVisible = true,
    labelsVisible = true,

    marks: marks_ = [],

    markSize = 4,
    markWidth = 1,

    labels: labels_ = [],

    additional,

    textProps,
    pathProps,

    SvgProps,
    MarkProps,
    LabelProps,
    BackgroundProps,
    BorderProps,
    LineProps,
    LineMainProps,
    LinesProgressProps,
    LineProgressProps,

    Component = 'div',

    className,
    style,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const styles: any = {
    root: {}
  };

  let width = width_ !== undefined ? width_ : size === 'regular' ? 240 : size === 'large' ? 300 : 180;

  let height = height_ !== undefined ? height_ : 100;

  if (orientation === 'vertical') {
    height = height_ !== undefined ? height_ : size === 'regular' ? 240 : size === 'large' ? 300 : 180;

    width = width_ !== undefined ? width_ : 100;

    styles.root.maxWidth = width;
  }
  else {
    styles.root.height = height;
  }

  const parts = clamp(parse(parts_), 1, 1000);

  const paddings = {
    x: paddingHorizontal !== undefined ? paddingHorizontal : outsidePadding || 0,
    y: paddingVertical !== undefined ? paddingVertical : outsidePadding || 0
  };

  if (!['small', 'regular', 'large'].includes(size)) styles.root.maxWidth = size;

  const marks = React.useMemo(() => {
    const values = [];

    if (marks_.length) {

      let marksValues = marks_;

      if (!is('array', marksValues[0])) marksValues = [marksValues];

      marksValues.forEach((marksValue: any, index: number) => {
        values[index] = [];

        marksValue.forEach((mark: any) => {
          const {
            size,

            padding: markPadding = 0,

            position,

            ...other
          } = mark;

          if (orientation === 'horizontal') {
            const total = width - (paddings.x * 2);

            let x = total * (position / 100);
            let y = height - paddings.y - boundaryWidth - markPadding;
            let yl = y - size;

            if (linePosition === 'start') {
              y = paddings.y + boundaryWidth + markPadding;
              yl = y + size;
            }

            if (linePosition === 'center') {
              y = (height / 2) - (boundaryWidth / 2) - markPadding;
              yl = y - size;
            }

            if (linePosition === 'end') {
              y = height - paddings.y - boundaryWidth - markPadding;
              yl = y - size;
            }

            values.push({
              d: [
                'M', x + paddings.x, y,

                'L', x + paddings.x, yl
              ].join(' '),

              ...other
            });
          }

          if (orientation === 'vertical') {
            const total = height - (paddings.y * 2);

            let y = total * (position / 100);
            let x = width - paddings.x - boundaryWidth - markPadding;
            let xl = x - size;

            if (linePosition === 'start') {
              x = paddings.x + boundaryWidth + markPadding;
              xl = x + size;
            }

            if (linePosition === 'center') {
              x = (width / 2) + (boundaryWidth / 2) + markPadding;
              xl = x + size;
            }

            if (linePosition === 'end') {
              x = width - paddings.y - boundaryWidth - markPadding;
              xl = x - size;
            }

            values.push({
              d: [
                'M', x, y + paddings.y,

                'L', xl, y + paddings.y
              ].join(' '),

              ...other
            });
          }
        });
      });
    }

    return values;
  }, [orientation, linePosition, width, height, parts, marks_, markWidth, markSize, boundaryWidth, lineCap, paddingVertical, paddingHorizontal, outsidePadding, gap]);

  const labels = React.useMemo(() => {
    const values = [];

    if (labels_.length) {
      const marksPadding = marks_?.length ? (marks_ || []).sort((a, b) => b.size - a.size)[0]?.size || markSize : 0;

      let labelsValues = labels_;

      if (!is('array', labelsValues[0])) labelsValues = [labelsValues];

      labelsValues.forEach((labelsValue: any, index: number) => {
        values[index] = [];

        labelsValue.forEach((label: any) => {
          const {
            value,

            padding: labelPadding = 0,

            position,

            ...other
          } = label;

          const fontSize = label.style?.fontSize !== undefined ? label.style.fontSize : 14;

          if (orientation === 'horizontal') {
            const total = width - (paddings.x * 2);

            let x = total * (position / 100);
            let y = height - paddings.y - boundaryWidth - labelPadding;

            if (linePosition === 'start') {
              y = paddings.y + boundaryWidth + labelPadding + (fontSize / 2) + marksPadding;
            }

            if (linePosition === 'center') {
              y = (height / 2) - (boundaryWidth / 2) - labelPadding - (fontSize / 2) - marksPadding;
            }

            if (linePosition === 'end') {
              y = height - paddings.y - boundaryWidth - labelPadding - (fontSize / 2) - marksPadding;
            }

            values.push({
              x: x + paddings.x,
              y,

              value,

              ...other
            });
          }

          if (orientation === 'vertical') {
            const total = height - (paddings.y * 2);

            let y = total * (position / 100);
            let x = width - paddings.x - boundaryWidth - labelPadding;

            if (linePosition === 'start') {
              x = paddings.x + boundaryWidth + labelPadding + (fontSize / 2) + marksPadding;
            }

            if (linePosition === 'center') {
              x = (width / 2) + (boundaryWidth / 2) + labelPadding + (fontSize / 2) + marksPadding;
            }

            if (linePosition === 'end') {
              x = width - paddings.y - boundaryWidth - labelPadding - (fontSize / 2) - marksPadding;
            }

            values.push({
              x,
              y: y + paddings.y,

              value,

              ...other
            });
          }
        });
      });
    }

    return values;
  }, [orientation, linePosition, width, height, parts, marks_, markWidth, markSize, boundaryWidth, lineCap, outsidePadding, gap]);

  const lines = React.useMemo(() => {
    const values = [];

    let value = [];

    if (orientation === 'horizontal') {
      let lineCapOffset = ['round', 'square'].includes(lineCap) ? boundaryWidth / 2 : 0;

      let offset = (paddings.x * 2) + (lineCapOffset ? boundaryWidth * parts : 0);

      const total = width;

      let part = (total - ((parts - 1) * gap) - offset) / parts;

      let previousValue = 0;

      const x = 0 + lineCapOffset + paddings.x;
      let y = height - (boundaryWidth / 2);

      if (linePosition === 'start') {
        y = boundaryWidth / 2;

        y += paddings.y;
      }

      if (linePosition === 'center') y = height / 2;

      if (linePosition === 'end') {
        y = height - (boundaryWidth / 2);

        y -= paddings.y;
      }

      for (let i = 0; i < parts; i++) {
        // move to bottom left
        if (i === 0) value.push(
          // Move to bottom left
          'm', x, y
        );

        // line
        value.push(
          'l', part, 0
        );

        // Previous value with/out the gap value
        if (gap > 0 && i < parts - 1) previousValue += part + gap + (lineCapOffset ? boundaryWidth : 0);
        else previousValue += part + (lineCapOffset ? boundaryWidth : 0);

        values.push({ d: value.join(' ') });

        if (i === 0) previousValue += lineCapOffset + paddings.x;

        // move for the next value
        if (i < parts - 1) {
          value = [
            'm', previousValue, y
          ];
        }
      }
    }

    if (orientation === 'vertical') {
      let lineCapOffset = ['round', 'square'].includes(lineCap) ? boundaryWidth / 2 : 0;

      let offset = (paddings.y * 2) + (lineCapOffset ? boundaryWidth * parts : 0);

      const total = height;

      let part = (total - ((parts - 1) * gap) - offset) / parts;

      let previousValue = 0;

      let x = width - (boundaryWidth / 2);
      const y = 0 + lineCapOffset + paddings.y;

      if (linePosition === 'start') {
        x = boundaryWidth / 2;

        x += paddings.x;
      }

      if (linePosition === 'center') x = width / 2;

      if (linePosition === 'end') {
        x = width - (boundaryWidth / 2);

        x -= paddings.x;
      }

      for (let i = 0; i < parts; i++) {
        // move to bottom left
        if (i === 0) value.push(
          // Move to bottom left
          'm', x, y
        );

        // line
        value.push(
          'l', 0, part
        );

        // Previous value with/out the gap value
        if (gap > 0 && i < parts - 1) previousValue += part + gap + (lineCapOffset ? boundaryWidth : 0);
        else previousValue += part + (lineCapOffset ? boundaryWidth : 0);

        values.push({ d: value.join(' ') });

        if (i === 0) previousValue += lineCapOffset + paddings.y;

        // move for the next value
        if (i < parts - 1) {
          value = [
            'm', x, previousValue
          ];
        }
      }
    }

    return values;
  }, [width, height, parts, boundaryWidth, lineCap, orientation, linePosition, paddingVertical, paddingHorizontal, outsidePadding, gap]);

  const pathBackground = React.useMemo(() => {
    const values = [];

    if (orientation === 'horizontal') {
      values.push(
        // Move
        'M', paddings.x, height - paddings.y,

        'L', paddings.x, paddings.y,

        'L', width - paddings.x, paddings.y,

        'L', width - paddings.x, height - paddings.y,

        'Z'
      );
    }

    if (orientation === 'vertical') {
      values.push(
        // Move
        'M', width - paddings.x, paddings.y,

        'L', paddings.x, paddings.y,

        'L', paddings.x, height - paddings.y,

        'L', width - paddings.x, height - paddings.y,

        'Z'
      );
    }

    return values.join(' ');
  }, [orientation, linePosition, width, height, boundaryWidth, outsidePadding, paddingVertical, paddingHorizontal]);

  const pathBorder = React.useMemo(() => {
    const values = [];

    if (orientation === 'horizontal') {
      if (linePosition === 'start') {
        values.push(
          // Move
          'M', paddings.x, paddings.y,

          'L', paddings.x, height - paddings.y,

          'L', width - paddings.x, height - paddings.y,

          'L', width - paddings.x, paddings.y
        );
      }

      if (linePosition === 'center') {
        values.push(
          // Move
          'M', paddings.x, height - paddings.y,

          'L', paddings.x, paddings.y,

          'L', width - paddings.x, paddings.y,

          'L', width - paddings.x, height - paddings.y,

          'Z'
        );
      }

      if (linePosition === 'end') {
        values.push(
          // Move
          'M', paddings.x, height - paddings.y,

          'L', paddings.x, paddings.y,

          'L', width - paddings.x, paddings.y,

          'L', width - paddings.x, height - paddings.y
        );
      }
    }

    if (orientation === 'vertical') {
      if (linePosition === 'start') {
        values.push(
          // Move
          'M', paddings.x, height - paddings.y,

          'L', width - paddings.x, height - paddings.y,

          'L', width - paddings.x, paddings.y,

          'L', paddings.x, paddings.y
        );
      }

      if (linePosition === 'center') {
        values.push(
          // Move
          'M', width - paddings.x, paddings.y,

          'L', paddings.x, paddings.y,

          'L', paddings.x, height - paddings.y,

          'L', width - paddings.x, height - paddings.y,

          'Z'
        );
      }

      if (linePosition === 'end') {
        values.push(
          // Move
          'M', width - paddings.x, paddings.y,

          'L', paddings.x, paddings.y,

          'L', paddings.x, height - paddings.y,

          'L', width - paddings.x, height - paddings.y
        );
      }
    }

    return values.join(' ');
  }, [orientation, linePosition, width, height, boundaryWidth, outsidePadding, paddingVertical, paddingHorizontal]);

  return (
    <Component
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('LinearMeter', theme) && [
          'AmauiLinearMeter-root',
          `AmauiLinearMeter-orientation-${orientation}`,
          `AmauiLinearMeter-line-position-${linePosition}`,
          `AmauiLinearMeter-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
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
        {({ color, backgroundColor }) => (
          <svg
            xmlns='http://www.w3.org/2000/svg'

            viewBox={`0 0 ${width || 0} ${height || 0}`}

            {...SvgProps}

            className={classNames([
              staticClassName('LinearMeter', theme) && [
                'AmauiLinearMeter-svg'
              ],

              SvgProps?.className,
              classes.svg
            ])}
          >
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

                stroke={color}

                strokeWidth={boundaryWidth}

                {...pathProps}

                {...BorderProps}
              />
            )}

            {/* Lines */}
            {linesVisible && (
              <g
                className={classNames([
                  staticClassName('LinearMeter', theme) && [
                    'AmauiLinearMeter-arcs'
                  ],

                  classes.arcs
                ])}
              >
                {(lines.map((item: any, index: number) => (
                  <path
                    key={index}

                    d={item.d}

                    fill='none'

                    stroke={color}

                    strokeWidth={boundaryWidth}

                    strokeLinecap={lineCap}

                    {...pathProps}

                    {...LineProps}

                    {...LineMainProps}
                  />
                )))}
              </g>
            )}

            {/* Lines progress */}
            {linesVisible && lineProgress && (
              <g
                {...LinesProgressProps}

                className={classNames([
                  staticClassName('LinearMeter', theme) && [
                    'AmauiLinearMeter-lines-progress'
                  ],

                  LinesProgressProps?.className,
                  classes.lines_progress
                ])}
              >
                {(lines.map((item: any, index: number) => (
                  <path
                    key={index}

                    d={item.d}

                    fill='none'

                    stroke={color}

                    strokeWidth={boundaryWidth}

                    strokeLinecap={lineCap}

                    {...pathProps}

                    {...LineProps}

                    {...LineProgressProps}
                  />
                )))}
              </g>
            )}

            {/* Children */}
            {children && (
              <g
                className={classNames([
                  staticClassName('LinearMeter', theme) && [
                    'AmauiLinearMeter-children'
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
                          transform: orientation === 'horizontal' ?
                            `translate3d(${paddings.x + (((item.props.value / 100) || 0) * (width - (paddings.x * 2)))}px, 0, 0)` :
                            `translate3d(0, ${paddings.y + (((item.props.value / 100) || 0) * (height - (paddings.y * 2)))}px, 0)`
                        } : undefined),

                        ...item.props.style
                      }
                    })
                  );
                })}
              </g>
            )}

            {/* Marks */}
            {marksVisible && !!marks_.length && (
              marks.map((markValue: any, index: number) => (
                <g
                  key={index}

                  className={classNames([
                    staticClassName('LinearMeter', theme) && [
                      'AmauiLinearMeter-marks'
                    ],

                    classes.marks
                  ])}
                >
                  {(markValue.map((item: any, index: number) => (
                    <path
                      key={index}

                      d={item.d}

                      fill='none'

                      stroke={color}

                      strokeWidth={item.width !== undefined ? item.width : markWidth}

                      strokeLinecap={lineCap}

                      {...pathProps}

                      {...MarkProps}
                    />
                  )))}
                </g>
              ))
            )}

            {/* Labels */}
            {labelsVisible && !!labels_.length && (
              labels.map((labelValue: any, index: number) => (
                <g
                  key={index}

                  className={classNames([
                    staticClassName('LinearMeter', theme) && [
                      'AmauiLinearMeter-labels'
                    ],

                    classes.labels
                  ])}
                >
                  {(labelValue.map((item: any, index: number) => {
                    const { x, y, value, ...other } = item;

                    return (
                      <text
                        key={index}

                        x={x}

                        y={y}

                        {...other}

                        {...textProps}

                        {...LabelProps}

                        className={classNames([
                          staticClassName('LinearMeter', theme) && [
                            'AmauiLinearMeter-label'
                          ],

                          other?.className,
                          textProps?.className,
                          LabelProps?.className,
                          classes.label
                        ])}

                        style={{
                          fill: color,

                          ...other.style,

                          ...textProps?.style,

                          ...LabelProps?.style
                        }}
                      >
                        {value}
                      </text>
                    );
                  }))}
                </g>
              ))
            )}
          </svg>
        )}
      </Surface>
    </Component>
  );
});

LinearMeter.displayName = 'AmauiLinearMeter';

export default LinearMeter;
