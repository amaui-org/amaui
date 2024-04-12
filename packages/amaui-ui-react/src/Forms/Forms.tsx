import React from 'react';

import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-Forms' });

export interface IForms extends ILine {
  divider?: boolean;
}

const Forms: React.FC<IForms> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiForms?.props?.default, ...props_ }), [props_]);

  const {
    divider,

    Component = Line,

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const children = React.Children.toArray(children_);

  return (
    <Component
      ref={ref}

      gap={4}

      direction='column'

      justify='unset'

      align='unset'

      fullWidth

      className={classNames([
        staticClassName('Forms', theme) && [
          'amaui-Forms-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children.map((form: any, index: number) => React.cloneElement(form, {
        key: index,

        divider: index < children.length - 1
      }))}
    </Component>
  );
});

Forms.displayName = 'amaui-Forms';

export default Forms;
