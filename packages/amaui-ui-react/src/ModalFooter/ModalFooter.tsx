import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    paddingTop: theme.methods.space.value('md', 'px')
  }
}), { name: 'amaui-ModalFooter' });

export interface IModalFooter extends ILine {

}

const ModalFooter: React.FC<IModalFooter> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiModalFooter?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    className,
    style,

    children,

    ...other
  } = props;

  return (
    <Line
      ref={ref}

      direction='row'

      align='center'

      justify='space-between'

      fullWidth

      className={classNames([
        staticClassName('ModalFooter', theme) && [
          'amaui-ModalFooter-root'
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

ModalFooter.displayName = 'amaui-ModalFooter';

export default ModalFooter;
