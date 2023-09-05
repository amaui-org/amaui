import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line, { ILine, TLineAlign } from '../Line/Line';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    paddingBottom: '16px'
  }
}), { name: 'amaui-ModalHeader' });

export interface IModalHeader extends ILine {
  align?: TLineAlign;
}

const ModalHeader = React.forwardRef((props_: IModalHeader, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalHeader?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    <Line
      ref={ref}

      gap={2}

      direction='column'

      align='center'

      justify='center'

      fullWidth

      className={classNames([
        staticClassName('ModalHeader', theme) && [
          'amaui-ModalHeader-root'
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

ModalHeader.displayName = 'amaui-ModalHeader';

export default ModalHeader;
