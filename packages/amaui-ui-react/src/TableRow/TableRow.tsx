import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-row',
    position: 'relative',

    '&::before': {
      content: "''",
      position: 'absolute',
      inset: '0',
      background: 'currentColor',
      opacity: '0',
      transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),
      zIndex: '0'
    }
  },

  hover: {
    '&:hover': {
      '&::before': {
        opacity: theme.palette.visual_contrast.default.opacity.hover
      }
    }
  },

  selected: {
    '&::before': {
      opacity: [theme.palette.visual_contrast.default.opacity.selected, '!important']
    }
  }
}), { name: 'AmauiTableRow' });

export interface ITableRow extends ISurface {
  size?: TSize;

  hover?: boolean;
  selected?: boolean;
  position?: 'head' | 'body';
}

const TableRow = React.forwardRef((props_: ITableRow, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiTableRow?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    hover = true,
    selected,
    position = 'body',

    Component = 'tr',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      role='row'

      Component={Component}

      className={classNames([
        staticClassName('TableRow', theme) && [
          `AmauiTableRow-root`,
          `AmauiTableRow-position-${position}`,
          `AmauiTableRow-size-${size}`,
          (hover && position === 'body') && `AmauiTableRow-hover`,
          selected && `AmauiTableRow-selected`
        ],

        className,
        classes.root,
        (hover && position === 'body') && classes.hover,
        selected && classes.selected
      ])}

      {...other}
    >
      {React.Children.toArray(children).map((item: any, index: number) => (
        React.cloneElement(item, {
          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          justify: item.props.justify !== undefined ? item.props.justify : index === 0 ? 'flex-start' : 'flex-end',

          position: (index === 0 && position === 'body') ? 'head' : position,

          noWeight: (index === 0 && position === 'body')
        })
      ))}
    </Surface>
  );
});

TableRow.displayName = 'AmauiTableRow';

export default TableRow;
