import React from 'react';

import { clamp } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { angleToCoordinates, staticClassName } from '../utils';

const useStyle = style(theme => ({
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
    aspectRatio: '2 / 1'
  },

  boundary_025: {
    aspectRatio: '4 / 3'
  }
}), { name: 'AmauiRoundMeter' });

// to do

// add marks
// by default marks go from 1, 60
// to fit a clock by default

// add labels

// add pointers

// value only be pre, equal or post available marks

// mouse move controll

// keyboard focus and arrow up, down move value y

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

    gap: gap_ = 0,

    background = false,

    border = false,

    boundary = 1,
    boundaryWidth = 1,

    pathProps,

    BackgroundProps,
    BorderProps,
    ArcProps,

    Component = 'div',

    className,
    style,

    ...other
  } = props;

  const [rect, setRect] = React.useState<DOMRect>();

  const refs = {
    root: React.useRef<any>()
  };

  const styles: any = {
    root: {}
  };

  const gap = ['round', 'square'].includes(lineCap) ? gap_ + (boundaryWidth / 2) : gap_;

  const parts = clamp(parts_, 1, 180);

  React.useEffect(() => {
    const method = () => setRect(refs.root.current.getBoundingClientRect());

    const observer = new ResizeObserver(method);

    method();

    observer.observe(refs.root.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!['small', 'regular', 'large'].includes(size)) styles.root.maxWidth = size;

  const arcs = React.useMemo(() => {
    const values = [];

    let value = [];

    if (rect) {
      // 1
      if (boundary === 1) {
        const padding = 0;

        // 0 0 100 100
        // M 0.5 50.001 A 49.5 49.5 0 1 0 0.5 50 Z

        if (parts === 1) {
          values.push(
            {
              d: [
                // Move
                'M', ((boundaryWidth / 2) + padding), (rect.width / 2) + 0.001,

                // Arc
                'A', ((rect.width / 2) - (boundaryWidth / 2) - padding), ((rect.width / 2) - (boundaryWidth / 2) - padding), 0, 1, 0, ((boundaryWidth / 2) + padding), rect.width / 2
              ].join(' ')
            }
          );
        }
        else {
          const center = rect.width / 2;

          const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding));

          const total = 360;

          const part = (total / parts) - gap;

          const angles: any = {
            0: angleToCoordinates(0, center, center, radius)
          };

          for (let i = 0; i < parts; i++) {
            // Move to 0 deg
            if (i === 0) value.push(
              // Move to 0 deg
              'M', angles[0].x, angles[0].y
            );

            angles.end = angleToCoordinates((i * (part + gap)) + part, center, center, radius);

            angles.move = angleToCoordinates((i * (part + gap)) + part + gap, center, center, radius);

            // Arc
            value.push(
              'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y
            );

            // Move the gap if there's a gap
            if (gap > 0 && i < parts - 1) {
              value.push(
                'M', angles.move.x, angles.move.y
              );
            }

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

        const center = rect.width / 2;

        const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding));

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
          const center = rect.width / 2;

          const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding));

          const total = 270;

          const gapPerPart = (((parts - 1) * gap) / parts);

          const part = (total / parts) - gapPerPart;

          const angles: any = {
            0: angleToCoordinates(135, center, center, radius)
          };

          for (let i = 0; i < parts; i++) {
            // Move to 135 deg
            if (i === 0) value.push(
              // Move to 0 deg
              'M', angles[0].x, angles[0].y
            );

            angles.end = angleToCoordinates(135 + (i * (part + gap)) + part, center, center, radius);

            angles.move = angleToCoordinates(135 + (i * (part + gap)) + part + gap, center, center, radius);

            // Arc
            value.push(
              'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y
            );

            // Move the gap if there's a gap
            if (gap > 0 && i < parts - 1) {
              value.push(
                'M', angles.move.x, angles.move.y
              );
            }

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

        // 0 0 100 100
        // M 0.5 49.5 A 49.54 49.54 0 0 1 99.5 49.5 Z
        // round
        // M 8 42 A 43.01 43.01 0 0 1 92 42

        const center = rect.width / 2;

        const lineCapAdjustment = ['round', 'square'].includes(lineCap) ? boundaryWidth / 2 : 0;

        const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding)) - ((lineCapAdjustment / 2) / parts);

        const total = 180;

        const gapPerPart = (((parts - 1) * gap) / parts);

        let part = (total / parts) - gapPerPart;

        // if (lineCapAdjustment) {
        //   if (parts === 1) part -= lineCapAdjustment / 4;
        //   else part -= (lineCapAdjustment / 3) / (parts - 1);
        // }

        console.log(1, part, parts, gap, center, radius);
        const angles: any = {
          0: angleToCoordinates(180, center, center, radius)
        };

        for (let i = 0; i < parts; i++) {
          // Move to 180 + lineCapAdjustment deg
          if (i === 0) value.push(
            'M', angles[0].x - (lineCapAdjustment / 2), angles[0].y - lineCapAdjustment
          );

          angles.end = angleToCoordinates(180 + (i * (part + gap)) + part, center, center, radius);

          angles.move = angleToCoordinates(180 + (i * (part + gap)) + part + gap, center, center, radius);

          // Arc
          value.push(
            'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y
          );

          // Move the gap if there's a gap
          if (gap > 0 && i < parts - 1) {
            value.push(
              'M', angles.move.x, angles.move.y
            );
          }

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

        // 0 0 100 133.3333
        // M 50 100 L 0 25 A 50 50  0 0 1 100 25 L 50 100 Z
        // M 50 131.8333 L 1.5 25 A 61.5 61.5 0 0 1 98.5 25 L 50 131.8333 Z

        const center = rect.width / 2;

        const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding));

        const total = 90;

        const gapPerPart = (((parts - 1) * gap) / parts);

        const part = (total / parts) - gapPerPart;

        const angles: any = {
          0: angleToCoordinates(225, center, center, radius)
        };

        for (let i = 0; i < parts; i++) {
          // Move to 225 deg
          if (i === 0) value.push(
            // Move to 0 deg
            'M', angles[0].x, angles[0].y
          );

          angles.end = angleToCoordinates(225 + (i * (part + gap)) + part, center, center, radius);

          angles.move = angleToCoordinates(225 + (i * (part + gap)) + part + gap, center, center, radius);

          // Arc
          value.push(
            'A', radius, radius, 0, 0, 1, angles.end.x, angles.end.y
          );

          // Move the gap if there's a gap
          if (gap > 0 && i < parts - 1) {
            value.push(
              'M', angles.move.x, angles.move.y
            );
          }

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

    return values;
  }, [rect, parts, boundary, boundaryWidth, lineCap, gap]);

  const pathBackground = React.useMemo(() => {
    const values = [];

    if (rect) {
      // 1
      if (boundary === 1) {
        const padding = 0;

        // 0 0 100 100
        // M 0.5 50.001 A 49.5 49.5 0 1 0 0.5 50 Z

        values.push(
          // Move
          'M', ((boundaryWidth / 2) + padding), (rect.width / 2) + 0.001,

          // Arc
          'A', ((rect.width / 2) - (boundaryWidth / 2) - padding), ((rect.width / 2) - (boundaryWidth / 2) - padding), 0, 1, 0, ((boundaryWidth / 2) + padding), rect.width / 2
        );
      }

      // 0.75
      if (boundary === 0.75) {
        const padding = 0;

        const center = rect.width / 2;

        const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding));

        const angles = {
          45: angleToCoordinates(45, center, center, radius),
          135: angleToCoordinates(135, center, center, radius)
        };

        values.push(
          // Move
          'M', center, center,

          // Line middle bottom
          'L', angles[135].x, angles[135].y,

          // Arc
          'A', radius, radius, 0, 1, 1, angles[45].x, angles[45].y,

          // Line bottom middle
          'L', center, center,

          'Z'
        );
      }

      // 0.5
      if (boundary === 0.5) {
        const padding = 0;

        // 0 0 100 100
        // M 0.5 49.5 A 49.54 49.54 0 0 1 99.5 49.5 Z

        values.push(
          // Move
          'M', (boundaryWidth / 2) + padding, (rect.height - ((boundaryWidth / 2) + padding)),

          // Arc
          'A', (rect.height - ((boundaryWidth / 2) + padding)) + 0.1, (rect.height - ((boundaryWidth / 2) + padding)) + 0.1, 0, 0, 1, (rect.width - ((boundaryWidth / 2) + padding)), (rect.height - ((boundaryWidth / 2) + padding)),

          'Z'
        );
      }

      // 0.25
      if (boundary === 0.25) {
        const padding = 0;

        // 0 0 100 133.3333
        // M 50 100 L 0 25 A 50 50  0 0 1 100 25 L 50 100 Z
        // M 50 131.8333 L 1.5 25 A 61.5 61.5 0 0 1 98.5 25 L 50 131.8333 Z

        const center = rect.width / 2;

        const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding));

        const angles = {
          225: angleToCoordinates(225, center, center, radius),
          315: angleToCoordinates(315, center, center, radius)
        };

        values.push(
          // Move
          'M', center, (rect.height - (boundaryWidth + padding)),

          // Line middle bottom, top quarter left
          'L', angles[315].x, angles[315].y,

          // Arc
          'A', radius, radius, 0, 0, 0, angles[225].x, angles[225].y,

          // Line top quarter right, middle bottom
          'L', center, (rect.height - (boundaryWidth + padding)),

          'Z'
        );
      }
    }

    return values.join(' ');
  }, [rect, boundary, boundaryWidth]);

  const pathBorder = React.useMemo(() => {
    const values = [];

    if (rect) {
      // 0.75
      if (boundary === 0.75) {
        const padding = 0;

        const center = rect.width / 2;

        const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding));

        const angles = {
          45: angleToCoordinates(45, center, center, radius),
          135: angleToCoordinates(135, center, center, radius)
        };

        values.push(
          // Move bottom angle left
          'M', angles[135].x, angles[135].y,

          // Line middle
          'L', center, center,

          // Line bottom angle right
          'L', angles[45].x, angles[45].y
        );
      }

      // 0.5
      if (boundary === 0.5) {
        const padding = 0;

        // 0 0 100 100
        // M 0.5 49.5 A 49.54 49.54 0 0 1 99.5 49.5 Z

        values.push(
          // Move
          'M', (boundaryWidth / 2) + padding, (rect.height - ((boundaryWidth / 2) + padding)),

          // Line
          'L', (rect.width - ((boundaryWidth / 2) + padding)), (rect.height - ((boundaryWidth / 2) + padding))
        );
      }

      // 0.25
      if (boundary === 0.25) {
        const padding = 0;

        // 0 0 100 133.3333
        // M 50 100 L 0 25 A 50 50  0 0 1 100 25 L 50 100 Z
        // M 50 131.8333 L 1.5 25 A 61.5 61.5 0 0 1 98.5 25 L 50 131.8333 Z

        const center = rect.width / 2;

        const radius = ((rect.width / 2) - ((boundaryWidth / 2) + padding));

        const angles = {
          225: angleToCoordinates(225, center, center, radius),
          315: angleToCoordinates(315, center, center, radius)
        };

        values.push(
          // Move middle bottom, top quarter left
          'M', angles[315].x, angles[315].y,

          // Line middle bottom
          'L', center, (rect.height - (boundaryWidth + padding)),

          // Arc  top quarter right, middle bottom
          'L', angles[225].x, angles[225].y
        );
      }
    }

    return values.join(' ');
  }, [rect, boundary, boundaryWidth]);

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

            viewBox={`0 0 ${rect?.width || 0} ${rect?.height || 0}`}
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
          </svg>
        )}
      </Surface>
    </Component>
  );
});

RoundMeter.displayName = 'AmauiRoundMeter';

export default RoundMeter;
