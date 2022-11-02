import React from 'react';

import { style as styleMethod, classNames, useAmauiTheme, className as classNameMethod } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
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

    className,

    children,

    ...other
  } = props;

  return (
    <Component
      ref={ref}

      className={classNameMethod(styles, props, classNames([
        staticClassName('Box', theme) && [
          'AmauiBox-root'
        ],

        className,
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
