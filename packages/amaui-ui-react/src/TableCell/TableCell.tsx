import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Divider from '../Divider';
import { TLineAlign, TLineJustify } from '../Line/Line';

import { IBaseElement, staticClassName, TColor, TPropsAny, TSize, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-cell',
    position: 'relative',
    zIndex: '1',
    ...theme.typography.values.b2,

    '& .AmauiDivider-root': {
      margin: '0px'
    }
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
    fontWeight: '500'
  },

  body: {

  },

  noWeight: {
    fontWeight: '400'
  }
}), { name: 'AmauiTableCell' });

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

const TableCell = React.forwardRef((props_: ITableCell, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTableCell?.props?.default }), [props_]);

  const {
    tonal,
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

      className={classNames([
        staticClassName('TableCell', theme) && [
          `AmauiTableCell-root`,
          `AmauiTableCell-position-${position}`,
          `AmauiTableCell-size-${size}`,
          noWeight && `AmauiTableCell-no-weight`
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
            `AmauiTableCell-value`
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
      />
    </Component>
  );
});

TableCell.displayName = 'AmauiTableCell';

export default TableCell;
