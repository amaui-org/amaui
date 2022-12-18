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
}), { name: 'amaui-ModalTitle' });

export interface IModalTitle extends IType {

}

const ModalTitle = React.forwardRef((props_: IModalTitle, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalTitle?.props?.default, ...props_ }), [props_]);

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
