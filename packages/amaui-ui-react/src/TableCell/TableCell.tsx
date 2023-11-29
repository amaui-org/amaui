import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Divider from '../Divider';
import { TLineAlign, TLineJustify } from '../Line/Line';

import { IBaseElement, staticClassName, TColor, TPropsAny, TSize, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-cell',
    position: 'relative',
    zIndex: '1',

    ...theme.typography.values.b2
  },

  value: {

  },

  size_small: {
    padding: '8px 16px'
  },

  size_regular: {
    padding: '16px'
  },

  size_large: {
    padding: '24px'
  },

  head: {
    fontWeight: 'bold'
  },

  body: {

  },

  divider: {
    '&.amaui-Divider-root': {
      position: 'absolute',
      left: '0px',
      bottom: '0px',
      margin: '0px'
    }
  },

  noWeight: {
    fontWeight: '400'
  }
}), { name: 'amaui-TableCell' });

export interface ITableCell extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;
  size?: TSize;

  position?: 'head' | 'body';
  align?: TLineAlign;
  justify?: TLineJustify;
  noWeight?: boolean;

  DividerProps?: TPropsAny;
}

const TableCell: React.FC<ITableCell> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTableCell?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color,
    size = 'regular',

    position = 'body',
    align = 'center',
    justify = 'flex-end',
    noWeight,

    DividerProps,

    Component = props.position === 'head' ? 'th' : 'td',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Component
      ref={ref}

      role='cell'

      className={classNames([
        staticClassName('TableCell', theme) && [
          `amaui-TableCell-root`
        ],

        className,
        classes.root,
        position === 'head' ? classes.head : classes.body,
        noWeight && classes.noWeight
      ])}

      {...other}
    >
      <Line
        direction='row'

        align={align}

        justify={justify}

        className={classNames([
          staticClassName('TableCell', theme) && [
            `amaui-TableCell-value`
          ],

          classes.value,
          classes[`size_${size}`]
        ])}
      >
        {children}
      </Line>

      <Divider
        color='inherit'

        {...DividerProps}

        className={classNames([
          DividerProps?.className,
          classes.divider
        ])}
      />
    </Component>
  );
});

TableCell.displayName = 'amaui-TableCell';

export default TableCell;
