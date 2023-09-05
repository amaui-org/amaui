import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';
import { IType } from '../Type/Type';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

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
    <Line
      ref={ref}

      align='flex-start'

      version='t1'

      id='amaui-modal-title'

      Component={Type}

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
    </Line>
  );
});

ModalTitle.displayName = 'amaui-ModalTitle';

export default ModalTitle;
