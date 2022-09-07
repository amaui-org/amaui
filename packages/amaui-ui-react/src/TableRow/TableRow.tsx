import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'table-row',
    position: 'relative',

    '&::before': {
      content: "''",
      position: 'absolute',
      inset: 0,
      background: 'currentColor',
      opacity: 0,
      transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),
      zIndex: 0
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

const TableRow = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTableRow?.props?.default }), [props_]);

  const {
    tonal,
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

      Component={Component}

      className={classNames([
        staticClassName('TableRow', theme) && [
          `AmauiTableRow-root`,
          `AmauiTableRow-position-${position}`,
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
