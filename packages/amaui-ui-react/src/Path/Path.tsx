import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'AmauiPath' });

export interface IPath extends IBaseElement {
  value?: any;
}

const Path = React.forwardRef((props_: IPath, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiPath?.props?.default, ...props_ }), [props_]);

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
