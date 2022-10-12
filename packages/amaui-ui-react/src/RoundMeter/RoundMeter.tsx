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
    aspectRatio: '4 / 3'
  },

  boundary_05: {
    aspectRatio: '2 / 1'
  },

  boundary_025: {
    aspectRatio: '3 / 4'
  }
}), { name: 'AmauiRoundMeter' });

// to do

// arc, background
// for each boundary

// make 2 paths, one is for arcs
// another is for only background

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
    // M 1.5 120 A 1 1 0 0 1 238.5 120 A 1 1 0 0 1 1.5 120
    const values = [];

    if (rect) {
      const padding = 1;

      if (boundary === 1) {
        // Move
        values.push('M', ((boundaryWidth / 2) + padding), rect.height / 2);

        // Arc top
        values.push('A', 1, 1, 0, 0, 1, (rect.width - (boundaryWidth / 2) - padding), rect.height / 2);

        // Arc bottom
        values.push('A', 1, 1, 0, 0, 1, ((boundaryWidth / 2) + padding), rect.height / 2);
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
