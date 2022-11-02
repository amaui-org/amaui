import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'AmauiPath' });

const Path = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiPath?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    value,

    Component = 'path',

    className,

    ...other
  } = props;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Path', theme) && [
          'AmauiPath-root',
          `AmauiPath-component-${Component}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

Path.displayName = 'AmauiPath';

export default Path;
