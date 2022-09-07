import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Divider from '../Divider';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'table-cell',

    ...theme.typography.values.b2,

    '& .AmauiDivider-root': {
      margin: '0px'
    }
  },

  data: {

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
    fontWeight: 500
  },

  body: {

  },

  noWeight: {
    fontWeight: 400
  }
}), { name: 'AmauiTableCell' });

const TableCell = React.forwardRef((props_: any, ref: any) => {
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
          noWeight && `AmauiTableCell-noWeight`
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
            `AmauiTableCell-data`
          ],

          classes.data,
          classes[`size_${size}`]
        ])}
      >
        {children}
      </Line>

      <Divider
        tonal={tonal}

        color='inherit'

        {...DividerProps}
      />
    </Component>
  );
});

TableCell.displayName = 'AmauiTableCell';

export default TableCell;
