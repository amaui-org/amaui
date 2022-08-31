import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface'
import useMediaQuery from '../useMediaQuery';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    // Reset
    margin: 0,
    listStyle: 'none',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: `${theme.shape.radius.unit / 2}px`
  },

  padding_vertical_both: {
    paddingBlock: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_start: {
    paddingBlockStart: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_end: {
    paddingBlockEnd: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_none: {
    paddingBlock: 0
  },

  padding_horizontal_both: {
    paddingInline: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_start: {
    paddingInlineStart: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_end: {
    paddingInlineEnd: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_none: {
    paddingInline: 0
  },

  menu: {
    width: 'auto',
    minWidth: '112px',
    maxWidth: '280px'
  },

  noMaxWidth: {
    maxWidth: 'unset'
  }
}), { name: 'AmauiList' });

const List = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiList?.props?.default }), [props_]);

  const mobile = useMediaQuery('(max-width: 767px)');

  const { classes } = useStyle(props);

  const {
    menu,
    menuOpen,
    size = mobile ? 'small' : 'regular',
    noMaxWidth = true,
    color = 'default',
    tonal = true,
    elevation = props.menu ? 2 : 0,
    indent = 0,
    paddingHorizontal = 'none',
    paddingVertical = 'both',
    Component = 'ul',

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  if (!theme.palette.color[color] && color !== 'default') {
    const palette = theme.methods.color(color);

    styles.root.background = !tonal ? palette.main : palette[theme.palette.light ? 95 : 10];
  }

  if (menu && color === 'default') {
    if (!theme.palette.light) styles.root.background = theme.palette.color.neutral[10];
  }

  if (indent !== undefined) styles.root.paddingInlineStart = `${indent * theme.space.unit}px`;

  return (
    <Surface
      ref={ref}

      Component={Component}

      elevation={elevation}

      color={color}

      tonal={tonal}

      className={classNames([
        staticClassName('List', theme) && [
          'AmauiList-root',
          `AmauiList-padding-horizontal-${paddingHorizontal}`,
          `AmauiList-padding-vertical-${paddingVertical}`,
          menu && `AmauiList-menu`,
          noMaxWidth && `AmauiList-noMaxWidth`
        ],

        className,
        classes.root,
        classes[`padding_vertical_${paddingVertical}`],
        classes[`padding_horizontal_${paddingHorizontal}`],
        menu && classes.menu,
        noMaxWidth && classes.noMaxWidth
      ])}

      style={{
        ...style,

        ...styles.root
      }}
    >
      {React.Children.toArray(children).map((item: any, index: number) => React.cloneElement(item, {
        ...(['AmauiListItem'].includes(item.type?.displayName) ? {
          key: index,

          menuItem: menu,
          menuOpen,

          color,
          tonal,
          size,

          ...other,

          ...item.props
        } : {})
      }))}
    </Surface>
  );
});

List.displayName = 'AmauiList';

export default List;
