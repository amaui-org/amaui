import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TElevation, TTonal, TVersion } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    margin: '24px'
  }
}), { name: 'amaui-CardMain' });

export interface ICardMain extends ILine {
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;
  elevation?: TElevation;
}

const CardMain = React.forwardRef((props_: ICardMain, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCardMain?.props?.default, ...props_ }), [props_]);

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

  const { classes } = useStyle(props);

  return (
    <Line
      ref={ref}

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
