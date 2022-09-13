import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    minHeight: '44px',
    overflow: 'hidden'
  },

  tabs: {
    width: '100%',
    height: '100%'
  },

  tabs_orientation_horizontal: {
    overflowX: 'auto'
  },

  tabs_orientation_vertical: {
    overflowY: 'auto'
  }
}), { name: 'AmauiTabs' });

const Tabs = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTabs?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    value: value_ = 0,
    valueDefault,

    onChange: onChange_,

    orientation = 'horizontal',

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  React.useEffect(() => {
    if (value_ !== value) setValue(value_);
  }, [value_]);

  const onChange = (value__: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(value__);

    if (is('function', onChange_)) onChange_(value__);
  };

  const direction = orientation === 'horizontal' ? 'row' : 'column';

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      Component={Component}

      className={classNames([
        staticClassName('Tabs', theme) && [
          'AmauiTabs-root',
          `AmauiTabs-orientation-horizontal`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={0}

        direction={direction}

        align='flex-start'

        justify='flex-start'

        className={classNames([
          staticClassName('Tabs', theme) && [
            'AmauiTabs-tabs'
          ],

          classes.tabs,
          classes[`tabs_orientation_${orientation}`]
        ])}
      >
        {React.Children.toArray(children).map((item: any, index: number) => {
          const valueItem = item.props.value !== undefined ? item.props.value : index;

          return (
            React.cloneElement(item, {
              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

              color: item.props.color !== undefined ? item.props.color : color,

              active: valueItem === value,

              onClick: (event: React.MouseEvent<any>) => {
                onChange(valueItem);

                if (is('function', item.props.onClick)) item.props.onClick(event);
              }
            })
          );
        })}
      </Line>
    </Surface>
  );
});

Tabs.displayName = 'AmauiTabs';

export default Tabs;
