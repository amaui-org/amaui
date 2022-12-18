import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: theme.methods.space.value('md', 'px')
  }
}), { name: 'amaui-ModalFooter' });

export interface IModalFooter extends IBaseElement {

}

const ModalFooter = React.forwardRef((props_: IModalFooter, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalFooter?.props?.default, ...props_ }), [props_]);

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
        staticClassName('ModalFooter', theme) && [
          'amaui-ModalFooter-root'
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

ModalFooter.displayName = 'amaui-ModalFooter';

export default ModalFooter;
