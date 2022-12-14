import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';
import Divider from '../Divider';
import NavigationBar from '../NavigationBar';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TElement, TPropsAny, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    height: '100%',
    width: '80px',
    padding: '40px 0',
    overflow: 'auto'
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

    '&.AmauiNavigationBar-root': {
      background: 'transparent'
    }
  },

  divider: {
    position: 'absolute',
    height: '100%',
    insetBlock: '0',
    insetInlineEnd: '0',

    '&.AmauiDivider-root': {
      margin: '0',
      opacity: theme.palette.light ? '0.07' : '0.11'
    }
  }
}), { name: 'AmauiNavigationRail' });

export interface INavigationRail extends ISurface {
  size?: TSize;

  value?: any;
  valueDefault?: any;

  onChange?: (value: any) => any;

  justify?: 'start' | 'center' | 'end';

  border?: boolean;

  header?: TElement;

  fixed?: boolean;

  NavigationBarProps?: TPropsAny;
  DividerProps?: TPropsAny;
}

const NavigationRail = React.forwardRef((props_: INavigationRail, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiNavigationRail?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

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

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal && ['AmauiFab'].includes(item.type?.displayName) ? 'secondary' : tonal
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

      gap={0}

      className={classNames([
        staticClassName('NavigationRail', theme) && [
          'AmauiNavigationRail-root'
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

          justify={justify}

          gap={2}

          color={color}

          tonal={tonal}

          {...NavigationBarProps}

          className={classNames([
            staticClassName('NavigationRail', theme) && [
              'AmauiNavigationRail-main'
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
              'AmauiNavigationRail-divider'
            ],

            DividerProps?.className,
            classes.divider
          ])}
        />
      )}
    </Surface>
  );
});

NavigationRail.displayName = 'AmauiNavigationRail';

export default NavigationRail;
