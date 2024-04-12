import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IElevation, ITonal, IVersion } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    padding: theme.methods.space.value(3, 'px')
  }
}), { name: 'amaui-CardHeader' });

export interface ICardHeader extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  elevation?: IElevation;
}

const CardHeader: React.FC<ICardHeader> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCardHeader?.props?.default, ...props_ }), [props_]);

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

      direction='row'

      align='center'

      justify='center'

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('CardHeader', theme) && [
          `amaui-CardHeader-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {React.cloneElement(children as any, {
        tonal: (children as any).props.tonal !== undefined ? (children as any).props.tonal : tonal,

        version: (children as any).props.version !== undefined ? (children as any).props.version : version,

        elevation: (children as any).props.elevation !== undefined ? (children as any).props.elevation : elevation,

        color: (children as any).props.color !== undefined ? (children as any).props.color : color
      })}
    </Line>
  );
});

CardHeader.displayName = 'amaui-CardHeader';

export default CardHeader;
