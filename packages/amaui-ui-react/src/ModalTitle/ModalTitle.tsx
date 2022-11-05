import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import { IType } from '../Type/Type';

import { staticClassName } from '../utils';

const useStyle = styleMethod((theme: AmauiTheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}), { name: 'AmauiModalTitle' });

export interface IModalTitle extends IType {

}

const ModalTitle = React.forwardRef((props_: IModalTitle, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalTitle?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    <Type
      ref={ref}

      version='t1'

      className={classNames([
        staticClassName('ModalTitle', theme) && [
          'AmauiModalTitle-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Type>
  );
});

ModalTitle.displayName = 'AmauiModalTitle';

export default ModalTitle;
