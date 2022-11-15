import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line, { ILine, TLineAlign } from '../Line/Line';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    paddingBottom: '16px'
  }
}), { name: 'AmauiModalHeader' });

export interface IModalHeader extends ILine {
  align?: TLineAlign;
}

const ModalHeader = React.forwardRef((props_: IModalHeader, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiModalHeader?.props?.default, ...props_ }), [props_]);

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
    <Line
      ref={ref}

      gap={0}

      direction='column'

      align='flex-start'

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
    </Line>
  );
});

ModalHeader.displayName = 'AmauiModalHeader';

export default ModalHeader;
