import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: theme.methods.space.value('md', 'px')
  }
}), { name: 'AmauiModalFooter' });

export interface IModalFooter extends IBaseElement {

}

const ModalFooter = React.forwardRef((props_: IModalFooter, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalFooter?.props?.default }), [props_]);

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
          'AmauiModalFooter-root'
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

ModalFooter.displayName = 'AmauiModalFooter';

export default ModalFooter;
