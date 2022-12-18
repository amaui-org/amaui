import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';

import { staticClassName } from '../utils';
import { ISurface } from '../Surface/Surface';

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    padding: '0'
  },

  fixed: {
    position: 'fixed',
    insetInline: '0',
    bottom: '0'
  }
}), { name: 'amaui-NavigationBar' });

export type TNavigationBarValue = Array<string>;

export interface INavigationBar extends ISurface {
  value?: TNavigationBarValue;
  valueDefault?: TNavigationBarValue;
  onChange?: (value: TNavigationBarValue) => any;

  fixed?: boolean;
}

const NavigationBar = React.forwardRef((props_: INavigationBar, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiNavigationBar?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    color = 'primary',
    tonal = true,
    version = 'regular',

    value,
    valueDefault,
    onChange,

    fixed,

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
    root: {

    },
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

  if (!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color)) {
    palette = theme.methods.color(color);
  }

  if (!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color)) {
    if (tonal) styles.root.backgroundColor = theme.methods.palette.color.value(undefined, 95, true, palette);
    else styles.root.backgroundColor = palette.main;
  }

  if (!tonal) {
    let background = (theme.palette.color[color] as any)?.main;

    if (color === 'default') background = theme.palette.background.default.primary;

    styles.icon.color = theme.methods.palette.color.text(palette?.main || background, true, 'light');
  }
  else {
    styles.icon.color = theme.methods.palette.color.value(color as any, 5, true, palette);
  }

  const children = React.Children
    .toArray(children_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      ...(['amaui-NavigationItem'].includes(item.type?.displayName) ? {
        ...other,

        version
      } : {}),

      color: item.props.color !== undefined ? item.props.color : (['amaui-NavigationItem'].includes(item.type?.displayName) ? color : styles.icon.color),

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

      Component={Line}

      color={color}

      tonal={tonal}

      direction='row'

      align='center'

      justify='initial'

      gap={1}

      className={classNames([
        staticClassName('NavigationBar', theme) && [
          'amaui-NavigationBar-root'
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

NavigationBar.displayName = 'amaui-NavigationBar';

export default NavigationBar;
