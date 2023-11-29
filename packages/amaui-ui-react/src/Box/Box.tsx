import React from 'react';

import { TValue } from '@amaui/style';
import { style as styleMethod, classNames, useAmauiTheme, className as classNameMethod } from '@amaui/style-react';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-Box' });

export interface IBox extends IBaseElement {
  styles?: string | TValue;
}

const Box: React.FC<IBox> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBox?.props?.default, ...props_ }), [props_]);

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

      className={classNameMethod(styles as any, props, classNames([
        staticClassName('Box', theme) && [
          'amaui-Box-root'
        ],

        className,
        classes.root
      ]), { name: 'amaui-BoxClassNameRoot' })}

      {...other}
    >
      {children}
    </Component>
  );
});

Box.displayName = 'amaui-Box';

export default Box;
