import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TypeElement from '../Type';
import { IType } from '../Type/Type';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-ModalText' });

export interface IModalText extends IType {

}

const ModalText: React.FC<IModalText> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalText?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    className,

    children,

    ...other
  } = props;

  return (
    <Type
      ref={ref}

      version='b2'

      align='center'

      id='amaui-modal-text'

      className={classNames([
        staticClassName('ModalText', theme) && [
          'amaui-ModalText-root'
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

ModalText.displayName = 'amaui-ModalText';

export default ModalText;
