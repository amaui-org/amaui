import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';
import { IType } from '../Type/Type';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-ModalText' });

export interface IModalText extends IType {

}

const ModalText = React.forwardRef((props_: IModalText, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalText?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    <Line
      ref={ref}

      align='center'

      version='b2'

      id='amaui-modal-text'

      Component={Type}

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
    </Line>
  );
});

ModalText.displayName = 'amaui-ModalText';

export default ModalText;
