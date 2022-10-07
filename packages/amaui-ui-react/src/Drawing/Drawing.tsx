import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '340px',
    height: '140px'
  }
}), { name: 'AmauiDrawing' });

const Drawing = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDrawing?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color = 'default',

    viewBox = '0 0 340 140',

    strokeColor = '#000000',
    strokeWidth = '1px',

    svgRef,

    valueDefault,
    value: value_,
    onChange,

    Component = 'div',

    className,

    ...other
  } = props;

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    svg: React.useRef<any>(),
    value: React.useRef<any>(),
    path: React.useRef<any>(),
    strokeColor: React.useRef<any>(),
    strokeWidth: React.useRef<any>()
  };

  refs.value.current = value;

  refs.strokeColor.current = strokeColor;

  refs.strokeWidth.current = strokeWidth;

  React.useEffect(() => {
    if (value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  const valueNew = (is('array', value) ? value : [value]).filter(Boolean);

  return (
    <Component
      ref={ref}

      tonal={tonal}

      color={color}

      Component={Surface}

      className={classNames([
        staticClassName('Drawing', theme) && [
          'AmauiDrawing-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <svg
        ref={refs.svg}

        viewBox={viewBox}
      >
        {valueNew.map((item: any, index: number) => (
          <path
            key={index}

            {...item}
          />
        ))}
      </svg>
    </Component>
  );
});

Drawing.displayName = 'AmauiDrawing';

export default Drawing;
