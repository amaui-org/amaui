import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'table-row',
    transition: theme.methods.transitions.make('background')
  },

  hover: {
    '&:hover': {
      backgroundImage: [`linear-gradient(${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.visual_contrast.default.opacity.hover)} 100%, ${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.visual_contrast.default.opacity.hover)} 100%)`, '!important']
    }
  },

  selected: {
    backgroundImage: [`linear-gradient(${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.visual_contrast.default.opacity.selected)} 100%, ${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.visual_contrast.default.opacity.selected)} 100%)`, '!important']
  }
}), { name: 'AmauiTableRow' });

const TableRow = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTableRow?.props?.default }), [props_]);

  const {
    tonal,
    color = 'themed',
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

          align: index === 0 ? 'flex-start' : 'flex-end',

          position: (index === 0 && position === 'body') ? 'head' : position,

          noWeight: (index === 0 && position === 'body')
        })
      ))}
    </Surface>
  );
});

TableRow.displayName = 'AmauiTableRow';

export default TableRow;
