import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

const useStyle = style(theme => ({
  root: {
    userSelect: 'none',
    display: 'inline-block',
    flexShrink: '0',
    color: 'inherit',
    fill: 'currentcolor',

    // Make width and height in em unit
    // means it will scale based on parent's font-size
    // so entire svg will scale based on font-size only
    width: '1em',
    height: '1em',

    transition: theme.methods.transitions.make('fill', { duration: 'small', timing_function: 'standard' })
  }
}));

const Svg = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle(props);

  const amauiTheme = useAmauiTheme();

  const {
    className,
    viewBox = '0 0 24 24',
    size: size_,
    color: color_,
    style,
    children,
    ...other
  } = props;

  const color = (amauiTheme.palette.color[color_] as any)?.main || color_ || 'inherit';

  let fontSize = '24px';

  if (size_ === 'very small') fontSize = '12px';
  else if (size_ === 'small') fontSize = '18px';
  else if (size_ === 'regular') fontSize = '24px';
  else if (size_ === 'medium') fontSize = '36px';
  else if (size_ === 'large') fontSize = '48px';
  else if (size_ === 'very large') fontSize = '60px';
  else if (size_ !== undefined) fontSize = size_;

  return (
    <svg
      ref={ref}

      className={classNames([classes.root, className])}

      // Default '0 0 24 24' for material icons
      viewBox={viewBox}

      // Prevents svg oversize on load
      width='1em'
      height='1em'

      style={{
        // Prevents svg fill update on load
        fill: 'currentcolor',

        color,
        fontSize,

        // Let styles override preset style
        ...style,
      }}

      {...other}
    >
      {children}
    </svg>
  );
});

export default Svg;
