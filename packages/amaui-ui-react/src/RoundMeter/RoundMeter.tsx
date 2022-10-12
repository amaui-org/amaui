import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

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

// account for any boundary thickness

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
        const padding = 1;

        // 0 0 100 100
        // M 0 50 A 1 1 0 0 1 100 50 A 1 1 0 0 1 0 50
        // M 1.5 50 A 1 1 0 0 1 98.5 50 A 1 1 0 0 1 1.5 50

        values.push(
          // Move
          'M', ((boundaryWidth / 2) + padding), rect.height / 2,

          // Arc top
          'A', 1, 1, 0, 0, 1, (rect.width - (boundaryWidth / 2) - padding), rect.height / 2,

          // Arc bottom
          'A', 1, 1, 0, 0, 1, ((boundaryWidth / 2) + padding), rect.height / 2
        );
      }

      // 0.75
      if (boundary === 0.75) {
        const padding = 1;

        // 0 0 100 100
        // M 50 50 L 25 93.25 A 50 50 0 1 1 75 93.25 L 50 50
        // M 50 50 L 25 91.5 A 48.5 48.5 0 1 1 75 91.5 L 50 50

        values.push(
          // Move
          'M', rect.height / 2, rect.height / 2,

          // Line middle bottom
          'L', rect.height / 4, ((rect.width * 0.9325) - ((boundaryWidth / 2) + padding)),

          // Arc
          'A', ((rect.width / 2) - ((boundaryWidth / 2) + padding)), ((rect.width / 2) - ((boundaryWidth / 2) + padding)), 0, 1, 1, rect.width * 0.75, ((rect.width * 0.9325) - ((boundaryWidth / 2) + padding)),

          // Line bottom middle
          'L', rect.width / 2, rect.width / 2,

          'Z'
        );
      }

      // 0.5
      if (boundary === 0.5) {
        const padding = 1;

        // 0 0 100 100
        // M 0 100 A 1 1 0 0 1 100 100 Z
        // M 1.5 88.5 A 88.51 88.51 0 0 1 178.5 88.5 Z

        values.push(
          // Move
          'M', (boundaryWidth / 2) + padding, (rect.height - ((boundaryWidth / 2) + padding)),

          // Arc
          'A', (rect.height - ((boundaryWidth / 2) + padding)) + 0.075, (rect.height - ((boundaryWidth / 2) + padding)) + 0.075, 0, 0, 1, (rect.width - ((boundaryWidth / 2) + padding)), (rect.height - ((boundaryWidth / 2) + padding)),

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
