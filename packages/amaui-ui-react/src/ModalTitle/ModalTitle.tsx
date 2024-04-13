import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TypeElement from '../Type';
import { IType } from '../Type/Type';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-ModalTitle' });

export interface IModalTitle extends IType {

}

const ModalTitle: React.FC<IModalTitle> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalTitle?.props?.default, ...props_ }), [props_]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Type
      ref={ref}

      version='t2'

      align='center'

      id='amaui-modal-title'

      className={classNames([
        staticClassName('ModalTitle', theme) && [
          'amaui-ModalTitle-root'
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

ModalTitle.displayName = 'amaui-ModalTitle';

export default ModalTitle;
