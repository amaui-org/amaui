import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, IVersion, IElevation } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    padding: theme.methods.space.value(3, 'px')
  }
}), { name: 'amaui-CardMain' });

export interface ICardMain extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  elevation?: IElevation;
}

const CardMain: React.FC<ICardMain> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCardMain?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    tonal = true,
    color,
    version,
    elevation,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  return (
    <Line
      ref={ref}

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('CardMain', theme) && [
          `amaui-CardMain-root`
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

CardMain.displayName = 'amaui-CardMain';

export default CardMain;
