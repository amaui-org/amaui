import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import DividerElement from '../Divider';
import NavigationBarElement from '../NavigationBar';
import { ISurface } from '../Surface/Surface';
import { INavigationItemVersion } from '../NavigationItem/NavigationItem';
import { staticClassName } from '../utils';
import { ISize, IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    height: '100%',
    width: '80px',
    padding: `${theme.methods.space.value(5, 'px')} 0`,
    overflow: 'auto',
    zIndex: theme.z_index.app_bar
  },

  size_small: { width: '72px' },

  size_regular: { width: '80px' },

  size_large: { width: '88px' },

  fixed: {
    position: 'fixed',
    insetBlock: '0',
    insetInlineStart: '0'
  },

  header: {
    marginBottom: '70px'
  },

  main: {
    width: '100%',
    flex: '1 1 auto',

    '&.amaui-NavigationBar-root': {
      background: 'transparent'
    }
  },

  divider: {
    position: 'absolute',
    height: '100%',
    insetBlock: '0',
    insetInlineEnd: '0',

    '&.amaui-Divider-root': {
      margin: '0',
      opacity: theme.palette.light ? '0.07' : '0.11'
    }
  }
}), { name: 'amaui-NavigationRail' });

export interface INavigationRail extends Omit<ISurface, 'version'> {
  size?: ISize;

  value?: any;
  valueDefault?: any;

  onChange?: (value: any) => any;

  version?: INavigationItemVersion;

  justify?: 'start' | 'center' | 'end';

  border?: boolean;

  header?: IElement;

  fixed?: boolean;

  NavigationBarProps?: IPropsAny;
  DividerProps?: IPropsAny;
}

const NavigationRail: React.FC<INavigationRail> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiNavigationRail?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const NavigationBar = React.useMemo(() => theme?.elements?.NavigationBar || NavigationBarElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    version = 'regular',
    size = 'regular',

    value,
    valueDefault,
    onChange,

    justify = 'center',

    border,

    header: header_,

    fixed,

    NavigationBarProps,
    DividerProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

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

  const header = React.Children
    .toArray(header_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      color: item.props.color !== undefined ? item.props.color : color,

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal && ['amaui-Fab'].includes(item.type?.displayName) ? 'secondary' : tonal
    }));

  const children = React.Children
    .toArray(children_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      ...(['amaui-NavigationItem'].includes(item.type?.displayName) ? {
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

      gap={0}

      className={classNames([
        staticClassName('NavigationRail', theme) && [
          'amaui-NavigationRail-root',
          `amaui-NavigationRail-version-${version}`,
          `amaui-NavigationRail-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
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
              'amaui-NavigationRail-header'
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

          justify={justify}

          gap={2}

          color={color}

          tonal={tonal}

          {...NavigationBarProps}

          className={classNames([
            staticClassName('NavigationRail', theme) && [
              'amaui-NavigationRail-main'
            ],

            NavigationBarProps?.className,
            classes.main
          ])}
        >
          {children}
        </NavigationBar>
      )}

      {border && (
        <Divider
          orientation='vertical'

          {...DividerProps}

          className={classNames([
            staticClassName('NavigationRail', theme) && [
              'amaui-NavigationRail-divider'
            ],

            DividerProps?.className,
            classes.divider
          ])}
        />
      )}
    </Surface>
  );
});

NavigationRail.displayName = 'amaui-NavigationRail';

export default NavigationRail;
