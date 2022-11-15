import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    flex: '1 1 auto'
  }
}), { name: 'AmauiModalMain' });

export interface IModalMain extends IBaseElement {

}

const ModalMain = React.forwardRef((props_: IModalMain, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiModalMain?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {

    }
  };

  if (React.Children.toArray(children).length > 1) styles.root.alignItems = 'center';

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('ModalMain', theme) && [
          'AmauiModalMain-root'
        ],

        className,
        classes.root
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </div>
  );
});

ModalMain.displayName = 'AmauiModalMain';

export default ModalMain;
