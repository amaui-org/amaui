import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    overflowY: 'auto'
  }
}), { name: 'amaui-ModalMain' });

export interface IModalMain extends IBaseElement {

}

const ModalMain = React.forwardRef((props_: IModalMain, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalMain?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    children,

    ...other
  } = props;

  let align = 'flex-start';

  if (React.Children.toArray(children).length > 1) align = 'center';

  return (
    <Line
      ref={ref}

      align={align}

      className={classNames([
        staticClassName('ModalMain', theme) && [
          'amaui-ModalMain-root'
        ],

        className,
        classes.root
      ])}

      flex

      {...other}
    >
      {children}
    </Line>
  );
});

ModalMain.displayName = 'amaui-ModalMain';

export default ModalMain;
