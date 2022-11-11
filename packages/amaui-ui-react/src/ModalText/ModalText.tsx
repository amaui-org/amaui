import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import { IType } from '../Type/Type';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}), { name: 'AmauiModalText' });

export interface IModalText extends IType {

}

const ModalText = React.forwardRef((props_: IModalText, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalText?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    <Type
      ref={ref}

      className={classNames([
        staticClassName('ModalText', theme) && [
          'AmauiModalText-root'
        ],

        className,
        classes.root
      ])}

      version='b2'

      {...other}
    >
      {children}
    </Type>
  );
});

ModalText.displayName = 'AmauiModalText';

export default ModalText;
