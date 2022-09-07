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
    padding: '16px'
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

    position = 'body',
    align = 'flex-end',
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
          `AmauiTableCell-align-${align}`,
          `AmauiTableCell-position-${position}`,
          noWeight && `AmauiTableCell-noWeight`
        ],

        className,
        classes.root,
        classes[`align_${align}`],
        position === 'head' ? classes.head : classes.body,
        noWeight && classes.noWeight
      ])}

      {...other}
    >
      <Line
        direction='row'

        justify={align}

        className={classNames([
          staticClassName('TableCell', theme) && [
            `AmauiTableCell-data`
          ],

          classes.data
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
