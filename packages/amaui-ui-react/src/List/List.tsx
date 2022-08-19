import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';
import useMediaQuery from '../useMediaQuery';

const useStyle = style(theme => ({
  root: {
    // Reset
    margin: 0,
    listStyle: 'none',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: `${theme.shape.radius.unit / 2}px`,

    background: theme.palette.background.default.primary
  },

  // Color
  default: { background: theme.palette.background.default.primary },

  neutral: { background: theme.palette.color.neutral.main },

  primary: { background: theme.palette.color.primary.main },

  secondary: { background: theme.palette.color.secondary.main },

  tertiary: { background: theme.palette.color.tertiary.main },

  quaternary: { background: theme.palette.color.quaternary.main },

  info: { background: theme.palette.color.info.main },

  success: { background: theme.palette.color.success.main },

  warning: { background: theme.palette.color.warning.main },

  error: { background: theme.palette.color.error.main },

  // Tonal
  tonal_neutral: { background: theme.palette.color.neutral[theme.palette.light ? 95 : 10] },

  tonal_primary: { background: theme.palette.color.primary[theme.palette.light ? 95 : 10] },

  tonal_secondary: { background: theme.palette.color.secondary[theme.palette.light ? 95 : 10] },

  tonal_tertiary: { background: theme.palette.color.tertiary[theme.palette.light ? 95 : 10] },

  tonal_quaternary: { background: theme.palette.color.quaternary[theme.palette.light ? 95 : 10] },

  tonal_info: { background: theme.palette.color.info[theme.palette.light ? 95 : 10] },

  tonal_success: { background: theme.palette.color.success[theme.palette.light ? 95 : 10] },

  tonal_warning: { background: theme.palette.color.warning[theme.palette.light ? 95 : 10] },

  tonal_error: { background: theme.palette.color.error[theme.palette.light ? 95 : 10] },

  shadow_0: { boxShadow: theme.shadows.values.neutral[0] },

  shadow_1: { boxShadow: theme.shadows.values.neutral[1] },

  shadow_2: { boxShadow: theme.shadows.values.neutral[2] },

  shadow_3: { boxShadow: theme.shadows.values.neutral[3] },

  shadow_4: { boxShadow: theme.shadows.values.neutral[4] },

  shadow_6: { boxShadow: theme.shadows.values.neutral[6] },

  shadow_8: { boxShadow: theme.shadows.values.neutral[8] },

  shadow_9: { boxShadow: theme.shadows.values.neutral[9] },

  shadow_12: { boxShadow: theme.shadows.values.neutral[12] },

  shadow_16: { boxShadow: theme.shadows.values.neutral[16] },

  shadow_24: { boxShadow: theme.shadows.values.neutral[24] },

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
    size = mobile ? 'small' : 'regular',
    noMaxWidth = true,
    color = 'default',
    tonal = true,
    shadow = props.menu ? 2 : 0,
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

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('List', theme) && [
          'AmauiList-root',
          `AmauiList-padding-horizontal-${paddingHorizontal}`,
          `AmauiList-padding-vertical-${paddingVertical}`,
          `AmauiList-shadow-${shadow}`,
          `AmauiBadge-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          tonal && `AmauiList-tonal`,
          menu && `AmauiList-menu`,
          noMaxWidth && `AmauiList-noMaxWidth`
        ],

        className,
        classes.root,
        classes[`padding_vertical_${paddingVertical}`],
        classes[`padding_horizontal_${paddingHorizontal}`],
        classes[`shadow_${shadow}`],
        classes[color],
        tonal && classes[`tonal_${color}`],
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

          color,
          tonal,
          size,

          ...other,

          ...item.props
        } : {})
      }))}
    </Component>
  );
});

List.displayName = 'AmauiList';

export default List;
