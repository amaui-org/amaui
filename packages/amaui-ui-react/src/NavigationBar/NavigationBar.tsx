import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    padding: 0
  },

  fixed: {
    position: 'fixed',
    insetInline: 0,
    bottom: 0
  }
}), { name: 'AmauiNavigationBar' });

const NavigationBar = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNavigationBar?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    color = 'primary',
    tonal = true,
    version = 'regular',
    fixed,
    value,
    valueDefault,
    onChange,

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
      if (!props.hasOwnProperty('value')) setSelected(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  };

  let palette: any;

  if (!theme.palette.color[color] && !['themed', 'inverse', 'default', 'inherit'].includes(color)) {
    palette = theme.methods.color(color);
  }

  if (!theme.palette.color[color] && !['themed', 'inverse', 'default', 'inherit'].includes(color)) {
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

  const children = React.Children
    .toArray(children_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      ...(['AmauiNavigationItem'].includes(item.type?.displayName) ? {
        ...other,

        version
      } : {}),

      color: item.props.color !== undefined ? item.props.color : (['AmauiNavigationItem'].includes(item.type?.displayName) ? color : styles.icon.color),
      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

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

      noBorderRadius

      Component={Line}

      color={color}

      tonal={tonal}

      direction='row'

      align='center'

      justify='initial'

      gap={1}

      className={classNames([
        staticClassName('NavigationBar', theme) && [
          'AmauiNavigationBar-root',
          `AmauiNavigationBar-version-${version}`,
          fixed && `AmauiNavigationBar-fixed`
        ],

        className,
        classes.root,
        fixed && classes.fixed
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </Surface>
  );
});

NavigationBar.displayName = 'AmauiNavigationBar';

export default NavigationBar;
