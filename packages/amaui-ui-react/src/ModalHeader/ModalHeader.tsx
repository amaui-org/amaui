import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    paddingBottom: '16px'
  }
}), { name: 'AmauiModalHeader' });

const ModalHeader = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalHeader?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    align,

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {

    }
  };

  if (React.Children.toArray(children).length > 1) styles.root.alignItems = align !== undefined ? align : 'center';

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('ModalHeader', theme) && [
          'AmauiModalHeader-root',
          align && `AmauiModalHeader-align-${align}`
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

ModalHeader.displayName = 'AmauiModalHeader';

export default ModalHeader;
