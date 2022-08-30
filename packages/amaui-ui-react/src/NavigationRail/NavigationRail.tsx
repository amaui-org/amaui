import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { staticClassName } from '../utils';
import NavigationBar from '../NavigationBar';

const useStyle = style(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    height: '100vh',
    width: '80px',
    padding: '40px 0',
    overflow: 'auto'
  },

  fixed: {
    position: 'fixed',
    insetBlock: 0,
    insetInlineStart: 0
  },

  // Color
  color_default: { backgroundColor: theme.palette.background.default.primary },

  color_neutral: { backgroundColor: theme.palette.color.neutral.main },

  color_primary: { backgroundColor: theme.palette.color.primary.main },

  color_secondary: { backgroundColor: theme.palette.color.secondary.main },

  color_tertiary: { backgroundColor: theme.palette.color.tertiary.main },

  color_quaternary: { backgroundColor: theme.palette.color.quaternary.main },

  color_info: { backgroundColor: theme.palette.color.info.main },

  color_success: { backgroundColor: theme.palette.color.success.main },

  color_warning: { backgroundColor: theme.palette.color.warning.main },

  color_error: { backgroundColor: theme.palette.color.error.main },

  // Tonal
  tonal_color_neutral: { backgroundColor: theme.methods.palette.color.value('neutral', 95) },

  tonal_color_primary: { backgroundColor: theme.methods.palette.color.value('primary', 95) },

  tonal_color_secondary: { backgroundColor: theme.methods.palette.color.value('secondary', 95) },

  tonal_color_tertiary: { backgroundColor: theme.methods.palette.color.value('tertiary', 95) },

  tonal_color_quaternary: { backgroundColor: theme.methods.palette.color.value('quaternary', 95) },

  tonal_color_info: { backgroundColor: theme.methods.palette.color.value('info', 95) },

  tonal_color_success: { backgroundColor: theme.methods.palette.color.value('success', 95) },

  tonal_color_warning: { backgroundColor: theme.methods.palette.color.value('warning', 95) },

  tonal_color_error: { backgroundColor: theme.methods.palette.color.value('error', 95) },

  header: {
    marginBottom: '70px'
  },

  main: {
    width: '100%',
    flex: '1 1 auto'
  }
}), { name: 'AmauiNavigationRail' });

const NavigationRail = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNavigationRail?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    color = 'primary',
    tonal = true,
    version = 'regular',
    alignment = 'center',
    header: header_,
    fixed,
    value,
    valueDefault,
    onChange,
    NavigationBarProps = {},

    className,
    style,

    children: children_,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [selected, setSelected] = React.useState(() => {
    const valueNew = valueDefault !== undefined ? valueDefault : value;

    return valueNew !== undefined ? is('array', valueNew) ? valueNew : [valueNew] : [];
  });

  const styles: any = {
    root: {},
    icon: {}
  };

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init && value !== selected) setSelected(is('array', value) ? value : [value]);
  }, [value]);

  const onSelect = (itemProps: any) => {
    // Only one item at the time is selectable,
    // and it cannot be unselected by clicking on the same item
    const valueNew = [itemProps.value];

    if (valueNew !== undefined) {
      // Update inner or controlled
      if (props.hasOwnProperty('value')) {
        if (is('function', onChange)) onChange(valueNew);
      }
      else setSelected(valueNew);
    }
  };

  let palette: any;

  if (!theme.palette.color[color] && !['inherit', 'default'].includes(color)) {
    palette = theme.methods.color(color);
  }

  if (!theme.palette.color[color] && !['inherit', 'default'].includes(color)) {
    if (tonal) styles.root.backgroundColor = theme.methods.palette.color.value(undefined, 95, true, palette);
    else styles.root.backgroundColor = palette.main;
  }

  if (!tonal) {
    let background = (theme.palette.color[color] as any)?.main;

    if (color === 'default') background = theme.palette.background.default.primary;

    styles.icon.color = theme.methods.palette.color.text(palette?.main || background, true, 'light');
  }
  else {
    styles.icon.color = theme.methods.palette.color.value(color, 5, true, palette);
  }

  const header = React.Children
    .toArray(header_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      color: item.props.color !== undefined ? item.props.color : styles.icon.color,

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal
    }));

  const children = React.Children
    .toArray(children_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      ...(['AmauiNavigationItem'].includes(item.type?.displayName) ? {
        vertical: true
      } : {}),

      selected: selected.includes(item.props.value),

      onClick: () => {
        if (!item.props.disabled) {
          onSelect(item.props);

          // Invoke items on click method
          if (is('function', item.props.onClick)) item.props.onClick();
        }
      }
    }));

  return (
    <Line
      ref={ref}

      direction='column'

      align='initial'

      justify='initial'

      gap={0}

      className={classNames([
        staticClassName('NavigationRail', theme) && [
          'AmauiNavigationRail-root',
          `AmauiNavigationRail-color-${!theme.palette.color[color] && !['inherit', 'default'].includes(color) ? 'new' : color}`,
          `AmauiNavigationRail-version-${version}`,
          `AmauiNavigationRail-alignment-${alignment}`,
          tonal && `NavigationRail-tonal`,
          fixed && `NavigationRail-fixed`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        tonal && classes[`tonal_color_${color}`],
        fixed && classes.fixed
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {header && (
        <Line
          align='center'

          className={classNames([
            staticClassName('NavigationRail', theme) && [
              'AmauiNavigationRail-header'
            ],

            classes.header
          ])}
        >
          {header}
        </Line>
      )}

      {children && (
        <NavigationBar
          version={version}

          direction='column'

          justify={alignment}

          gap={2}

          color={color}

          tonal={tonal}

          className={classNames([
            staticClassName('NavigationRail', theme) && [
              'AmauiNavigationRail-main'
            ],

            classes.main
          ])}

          {...NavigationBarProps}
        >
          {children}
        </NavigationBar>
      )}
    </Line>
  );
});

NavigationRail.displayName = 'AmauiNavigationRail';

export default NavigationRail;
