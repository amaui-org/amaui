import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiPath' });

const Path = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiPath?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    value,

    className,

    ...other
  } = props;

  return (
    <path
      ref={ref}

      className={classNames([
        staticClassName('Path', theme) && [
          'AmauiPath-root'
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
