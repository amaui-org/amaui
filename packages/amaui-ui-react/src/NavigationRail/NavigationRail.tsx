import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';
import Divider from '../Divider';
import NavigationBar from '../NavigationBar';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    height: '100vh',
    width: '80px',
    padding: '40px 0',
    overflow: 'auto'
  },

  size_small: { width: '72px' },

  size_regular: { width: '80px' },

  size_large: { width: '88px' },

  fixed: {
    position: 'fixed',
    insetBlock: 0,
    insetInlineStart: 0
  },

  header: {
    marginBottom: '70px'
  },

  main: {
    width: '100%',
    flex: '1 1 auto',

    '&.AmauiNavigationBar-root': {
      background: 'transparent'
    }
  },

  divider: {
    position: 'absolute',
    height: '100%',
    insetBlock: 0,
    insetInlineEnd: 0,
    margin: '0 !important'
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
    size = 'regular',
    alignment = 'center',
    border,
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
    <Surface
      ref={ref}

      Component={Line}

      color={color}

      tonal={tonal}

      direction='column'

      align='initial'

      justify='initial'

      noBorderRadius

      gap={0}

      className={classNames([
        staticClassName('NavigationRail', theme) && [
          'AmauiNavigationRail-root',
          `AmauiNavigationRail-color-${!theme.palette.color[color] && !['inherit', 'default'].includes(color) ? 'new' : color}`,
          `AmauiNavigationRail-version-${version}`,
          `AmauiNavigationRail-alignment-${alignment}`,
          `AmauiNavigationRail-size-${size}`,
          tonal && `NavigationRail-tonal`,
          fixed && `NavigationRail-fixed`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        classes[`size_${size}`],
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

      {border && (
        <Divider

          className={classNames([
            staticClassName('NavigationRail', theme) && [
              'AmauiNavigationRail-divider'
            ],

            classes.divider
          ])}

          color={color}
          tonal={tonal}

          orientation='vertical'
        />
      )}
    </Surface>
  );
});

NavigationRail.displayName = 'AmauiNavigationRail';

export default NavigationRail;
