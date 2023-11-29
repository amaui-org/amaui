import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { ILine, TLineAlign } from '../Line/Line';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    // overflowY: 'auto',
    // // important
    // // using flex: 1 1 auto, with overflowY: auto
    // // it will properly make it overflow auto
    // height: '0px'
  }
}), { name: 'amaui-ModalMain' });

export interface IModalMain extends ILine {

}

const ModalMain: React.FC<IModalMain> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalMain?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    children,

    ...other
  } = props;

  let align: TLineAlign = 'flex-start';

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

      fullWidth

      {...other}
    >
      {children}
    </Line>
  );
});

ModalMain.displayName = 'amaui-ModalMain';

export default ModalMain;
