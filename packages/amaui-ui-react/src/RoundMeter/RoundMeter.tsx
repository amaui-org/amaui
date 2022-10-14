import React from 'react';

import { clamp, parse, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { angleToCoordinates, staticClassName } from '../utils';

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

  boundary_1: {
    aspectRatio: '1'
  },

  boundary_075: {
    aspectRatio: '1'
  },

  boundary_05: {
    aspectRatio: '3 / 2'
  },

  boundary_025: {
    aspectRatio: '3 / 2'
  },

  label: {
    ...theme.typography.values.b2,

    textAnchor: 'middle',
    alignmentBaseline: 'central',
    dominantBaseline: 'central'
  },

  svg: {
    width: '100%',
    height: 'auto'
  }
}), { name: 'AmauiRoundMeter' });

// to do

// marks, labels outside the circle?

// pointer/s
// they are just array of pointers
// where their value, rotate is normalized based on the boundary with valueFromPercentageWithinRange
// and then it's added to the ui

// render pointer, and render pointers methods

// value only be pre, equal or post available marks

// mouse move controll

// keyboard focus and arrow up, down move value y

// option to add any other object into the svg
// maybe with children value y

// Arc progress, or progress per each part
// animate value y

const RoundMeter = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRoundMeter?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    size = 'regular',

    parts: parts_ = 1,

    lineCap,

    padding: outsidePadding = 0,

    gap: gap_ = 0,

    background = false,

    border = false,

    boundary: boundary_ = 1,
    boundaryWidth = 1,

    marksVisible = true,
    labelsVisible = true,

    marks: marks_ = [],

    markHeight = 4,
    markWidth = 1,

    labels: labels_ = [],

    textProps,
    pathProps,

    MarksProps,
    LabelsProps,
    BackgroundProps,
    BorderProps,
    ArcProps,

    Component = 'div',

    className,
    style,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const styles: any = {
    root: {}
  };

  const boundary = parse(boundary_);

  const width = 240;

  const height = [0.5, 0.25].includes(boundary) ? width * 0.6666 : width;

  let gap = ['round', 'square'].includes(lineCap) ? gap_ + (boundaryWidth / 2) : gap_;

  const parts = clamp(parts_, 1, 180);

  if (!['small', 'regular', 'large'].includes(size)) styles.root.maxWidth = size;

  const marks = React.useMemo(() => {
    const values = [];

    if (marks_.length) {
      // Minus the inner thickness + padding
      const padding = 0;

      const center = width / 2;

      const radius = (width / 2) - (boundaryWidth + padding) - outsidePadding;

      let min = 0;
      let max = 360;

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
      }

      // 0.5
      if (boundary === 0.5) {
        // 0 is left
        // ie. 180 degreese
        min = 180;
        max = 180 + 180;
      }

      // 0.25
      if (boundary === 0.25) {
        // 0 is angle top left
        // ie. 225 degreese
        min = 225;
        max = 225 + 90;
      }

      marks_.forEach((mark: any) => {
        const {
          height,

          padding: markPadding = 0,

          position,

          ...other
        } = mark;

        const angle = valueFromPercentageWithinRange(position, min, max);

        const start = angleToCoordinates(angle, center, center, radius - markPadding);

        const end = angleToCoordinates(angle, center, center, radius - (height !== undefined ? height : markHeight) - markPadding);

        values.push({
          d: [
            'M', start.x, start.y,

            'L', end.x, end.y
          ].join(' '),

          ...other
        });
      });
    }

    return values;
  }, [width, height, parts, marks_, markWidth, markHeight, boundary, boundaryWidth, lineCap, outsidePadding, gap]);

  const labels = React.useMemo(() => {
    const values = [];

    if (labels_.length) {
      // Minus the inner thickness + padding
      const padding = 0;

      const center = width / 2;

      const marksPadding = marks_?.length ? (marks_ || []).sort((a, b) => b.height - a.height)[0]?.height || markHeight : 0;

      const radius = (width / 2) - (boundaryWidth + padding) - marksPadding - outsidePadding;

      let min = 0;
      let max = 360;

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
      }

      // 0.5
      if (boundary === 0.5) {
        // 0 is left
        // ie. 180 degreese
        min = 180;
        max = 180 + 180;
      }

      // 0.25
      if (boundary === 0.25) {
        // 0 is angle top left
        // ie. 225 degreese
        min = 225;
        max = 225 + 90;
      }

      labels_.forEach((label: any) => {
        const {
          value,

          padding: labelPadding = 0,

          position,

          ...other
        } = label;

        const fontSize = label.style?.fontSize !== undefined ? label.style.fontSize : 14;

        const angle = valueFromPercentageWithinRange(position, min, max);

        const start = angleToCoordinates(angle, center, center, radius - (fontSize / 2) - padding - labelPadding);

        values.push({
          x: start.x,
          y: start.y,

          value,

          ...other
        });
      });
    }

    return values;
  }, [width, height, parts, marks_, markWidth, markHeight, boundary, boundaryWidth, lineCap, outsidePadding, gap]);

  const arcs = React.useMemo(() => {
    const values = [];

    let value = [];

    let offset = outsidePadding;

    // 1
    if (boundary === 1) {
      const padding = 0;

      if (parts === 1) {
        const radius = ((width / 2) - (boundaryWidth / 2) - padding) - offset;

        values.push(
          {
            d: [
              // Move
              'M', offset + ((boundaryWidth / 2) + padding), (width / 2) + 0.001,

              // Arc
              'A', radius, radius, 0, 1, 0, offset + ((boundaryWidth / 2) + padding), (width / 2)
            ].join(' ')
          }
        );
      }
      else {
        const center = width / 2;

        const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

        const total = 360;

        let part = (total - (parts * gap)) / parts;

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

          let angleEnd = anglePrevious + part;

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

      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

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

        let part = (total - ((parts - 1) * gap)) / parts;

        const angles: any = {
          0: angleToCoordinates(135, center, center, radius)
        };

        let anglePrevious = 135;

        for (let i = 0; i < parts; i++) {
          // Move to 135 deg
          if (i === 0) value.push(
            // Move to 0 deg
            'M', angles[0].x, angles[0].y
          );

          let angleEnd = anglePrevious + part;

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

    // 0.5
    if (boundary === 0.5) {
      value = [];

      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

      const total = 180;

      let part = (total - ((parts - 1) * gap)) / parts;

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

        let angleEnd = anglePrevious + part;

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

      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

      const total = 90;

      let part = clamp((total - ((parts - 1) * gap)) / parts, 0.01);

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

        let angleEnd = anglePrevious + part;

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
      const padding = 0;

      const radius = ((width / 2) - (boundaryWidth / 2) - padding) - offset;

      values.push(
        // Move
        'M', offset + ((boundaryWidth / 2) + padding), (width / 2) + 0.001,

        // Arc
        'A', radius, radius, 0, 1, 0, offset + ((boundaryWidth / 2) + padding), (width / 2)
      );
    }

    // 0.75
    if (boundary === 0.75) {
      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

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
      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

      const total = 180;

      let part = (total - ((parts - 1) * gap)) / parts;

      const angles: any = {
        start: angleToCoordinates(180, center, center, radius)
      };

      let anglePrevious = 180;

      let angleEnd = anglePrevious + part;

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
      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

      const total = 90;

      let part = clamp((total - ((parts - 1) * gap)) / parts, 0.01);

      gap = clamp(gap, 0, ((total - (part * parts)) / (parts - 1)));

      const angles: any = {
        start: angleToCoordinates(225, center, center, radius)
      };

      let anglePrevious = 225;

      let angleEnd = anglePrevious + part;

      angles.end = angleToCoordinates(angleEnd, center, center, radius);

      angles.move = angleToCoordinates(angleEnd + gap, center, center, radius);

      values.push(
        // Move
        'M', center, ((width / 2) - (boundaryWidth + padding)),

        // Line middle bottom, top quarter left
        'L', angles.start.x, angles.start.y,

        // Arc
        'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y,

        // Line top quarter right, middle bottom
        'L', center, ((width / 2) - (boundaryWidth + padding)),

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
      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

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
      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

      const angles: any = {
        start: angleToCoordinates(180, center, center, radius)
      };

      values.push(
        // Move
        'M', angles.start.x, angles.start.y,

        // Line
        'L', (width - ((boundaryWidth / 2) + padding)) - offset, angles.start.y
      );
    }

    // 0.25
    if (boundary === 0.25) {
      const padding = 0;

      const center = width / 2;

      const radius = ((width / 2) - ((boundaryWidth / 2) + padding)) - offset;

      const total = 90;

      let part = clamp((total - ((parts - 1) * gap)) / parts, 0.01);

      gap = clamp(gap, 0, ((total - (part * parts)) / (parts - 1)));

      const angles: any = {
        start: angleToCoordinates(225, center, center, radius),
        end: angleToCoordinates(315, center, center, radius)
      };

      values.push(
        // Move middle bottom, top quarter left
        'M', angles.start.x, angles.start.y,

        // Line middle bottom
        'L', center, ((width / 2) - (boundaryWidth + padding)),

        // Arc  top quarter right, middle bottom
        'L', angles.end.x, angles.end.y
      );
    }

    return values.join(' ');
  }, [width, height, boundary, boundaryWidth, outsidePadding]);

  return (
    <Component
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('RoundMeter', theme) && [
          'AmauiRoundMeter-root',
          `AmauiRoundMeter-boundary-${String(boundary).replace('.', '')}`,
          `AmauiRoundMeter-size-${size}`
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
      <Surface
        tonal={tonal}

        color={color}
      >
        {({ color, backgroundColor }) => (
          <svg
            xmlns='http://www.w3.org/2000/svg'

            viewBox={`0 0 ${width || 0} ${height || 0}`}

            className={classNames([
              staticClassName('RoundMeter', theme) && [
                'AmauiRoundMeter-svg'
              ],

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

            {/* Arcs */}
            <g
              className={classNames([
                staticClassName('RoundMeter', theme) && [
                  'AmauiRoundMeter-arcs'
                ],

                classes.arcs
              ])}
            >
              {(arcs.map((item: any, index: number) => (
                <path
                  key={index}

                  d={item.d}

                  fill='none'

                  stroke={color}

                  strokeWidth={boundaryWidth}

                  strokeLinecap={lineCap}

                  {...pathProps}

                  {...ArcProps}
                />
              )))}
            </g>

            {/* Marks */}
            {marksVisible && !!marks_.length && (
              <g
                className={classNames([
                  staticClassName('RoundMeter', theme) && [
                    'AmauiRoundMeter-marks'
                  ],

                  classes.marks
                ])}
              >
                {(marks.map((item: any, index: number) => (
                  <path
                    key={index}

                    d={item.d}

                    fill='none'

                    stroke={color}

                    strokeWidth={item.width !== undefined ? item.width : markWidth}

                    strokeLinecap={lineCap}

                    {...pathProps}

                    {...MarksProps}
                  />
                )))}
              </g>
            )}

            {/* Labels */}
            {labelsVisible && !!labels_.length && (
              <g
                className={classNames([
                  staticClassName('RoundMeter', theme) && [
                    'AmauiRoundMeter-labels'
                  ],

                  classes.labels
                ])}
              >
                {(labels.map((item: any, index: number) => {
                  const { x, y, value, ...other } = item;

                  return (
                    <text
                      key={index}

                      x={x}

                      y={y}

                      {...other}

                      {...textProps}

                      {...LabelsProps}

                      className={classNames([
                        staticClassName('RoundMeter', theme) && [
                          'AmauiRoundMeter-label'
                        ],

                        other?.className,
                        textProps?.className,
                        LabelsProps?.className,
                        classes.label
                      ])}

                      style={{
                        fill: color,

                        ...other.style,

                        ...textProps?.style,

                        ...LabelsProps?.style
                      }}
                    >
                      {value}
                    </text>
                  );
                }))}
              </g>
            )}
          </svg>
        )}
      </Surface>
    </Component>
  );
});

RoundMeter.displayName = 'AmauiRoundMeter';

export default RoundMeter;
