import React from 'react';

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
    aspectRatio: '3 / 4'
  }
}), { name: 'AmauiRoundMeter' });

// to do

// make more paths
// 1 arc, 1 bottom border, 1 background
// and add prop options which ones is visible
// a default only arc

// try various boundary thickness's on all boundaries and multiple sizes

// multiple parts

// padding between parts

// parts being rounded as well

// parts and any boundary thickness

// add marks
// by default marks go from 1, 60
// to fit a clock by default

// add labels

// add pointers

// value only be pre, equal or post available marks

const RoundMeter = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRoundMeter?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    size = 'regular',

    boundary = 1,

    boundaryWidth = 1,

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

  const make = React.useCallback(() => {
    const values = [];

    if (rect) {
      // 1
      if (boundary === 1) {
        const padding = 0;

        // 0 0 100 100
        // M 0.5 50.01 A 49.5 49.5 0 1 0 0.5 50 Z

        values.push(
          // Move
          'M', ((boundaryWidth / 2) + padding), (rect.width / 2) + 0.01,

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
          'A', (rect.height - ((boundaryWidth / 2) + padding)) + 0.04, (rect.height - ((boundaryWidth / 2) + padding)) + 0.04, 0, 0, 1, (rect.width - ((boundaryWidth / 2) + padding)), (rect.height - ((boundaryWidth / 2) + padding)),

          'Z'
        );
      }

      // 0.25
      if (boundary === 0.25) {
        const padding = 1;

        // 0 0 100 133.3333
        // M 50 100 L 0 25 A 50 50  0 0 1 100 25 L 50 100 Z
        // M 50 131.8333 L 1.5 25 A 61.5 61.5 0 0 1 98.5 25 L 50 131.8333 Z

        values.push(
          // Move
          'M', rect.width / 2, (rect.height - ((boundaryWidth / 2) + padding)),

          // Line middle bottom, top quarter left
          'L', (boundaryWidth / 2) + padding, rect.width * 0.25,

          // Arc
          'A', ((rect.height * 0.4687) + ((boundaryWidth / 2) + padding)), ((rect.height * 0.4687) + ((boundaryWidth / 2) + padding)), 0, 0, 1, (rect.width - ((boundaryWidth / 2) + padding)), rect.width * 0.25,

          // Line top quarter right, middle bottom
          'L', rect.width / 2, (rect.height - ((boundaryWidth / 2) + padding)),

          'Z'
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
            <path
              d={make()}

              fill={backgroundColor}

              stroke={color}

              strokeWidth={boundaryWidth}
            />
          </svg>
        )}
      </Surface>
    </Component>
  );
});

RoundMeter.displayName = 'AmauiRoundMeter';

export default RoundMeter;
