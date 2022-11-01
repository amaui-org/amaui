import React from 'react';

import { classNames, style, useAmauiTheme, className } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },
}), { name: 'AmauiBox' });

const Box = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBox?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    styles,

    Component = 'div',

    className: className_,

    children,

    ...other
  } = props;

  return (
    <Component
      ref={ref}

      className={className(styles, props, classNames([
        staticClassName('Box', theme) && [
          'AmauiBox-root'
        ],

        className_,
        classes.root
      ]), { name: 'AmauiBoxClassNameRoot' })}

      {...other}
    >
      {children}
    </Component>
  );
});

Box.displayName = 'AmauiBox';

export default Box;
