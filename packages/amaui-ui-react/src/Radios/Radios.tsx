import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    cursor: 'pointer'
  },

  label_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'AmauiRadios' });

const Radios = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRadios?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color = 'primary',
    colorUnchecked,
    version = 'text',

    size = 'regular',

    label,

    empty = false,

    direction = 'column',
    align = 'center',
    justify = 'center',

    valueDefault,
    checked,
    onChange,

    disabled,

    Component = 'div',

    LabelProps,

    className,

    children: children_,

    ...other
  } = props;

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : checked);

  const refs = {
    value: React.useRef<any>()
  };

  refs.value.current = value;

  React.useEffect(() => {
    if (checked !== undefined && checked !== refs.value.current) setValue(checked);
  }, [checked]);

  const children: any[] = React.Children.toArray(children_);

  const onUpdate = React.useCallback((valueNew: any) => {
    if (!empty && refs.value.current === valueNew) return;

    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  }, [empty]);

  return (
    <Line
      ref={ref}

      gap={1}

      direction={direction}

      align={props.align !== undefined ? props.align : props.direction === 'row' ? 'center' : 'flex-start'}

      justify={justify}

      Component={Component}

      className={classNames([
        staticClassName('Radios', theme) && [
          'AmauiRadios-root',
          disabled && `AmauiRadios-disabled`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Type
        version={size === 'regular' ? 'l2' : size === 'large' ? 'l1' : 'l3'}

        className={classNames([
          staticClassName('Radios', theme) && [
            'AmauiRadios-label'
          ],

          classes.label,
          disabled && classes.label_disabled
        ])}

        {...LabelProps}
      >
        {label}
      </Type>

      <Line
        gap={0}

        direction={direction}

        align={props.align !== undefined ? props.align : props.direction === 'row' ? 'center' : 'flex-start'}

        justify={justify}
      >
        {children.map((item: any, index: number) => (
          React.cloneElement(item, {
            key: index,

            checked: item.props.value === value,

            onChange: () => onUpdate(item.props.value),

            tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

            color: item.props.color !== undefined ? item.props.color : color,

            colorUnchecked: item.props.colorUnchecked !== undefined ? item.props.colorUnchecked : colorUnchecked,

            version: item.props.version !== undefined ? item.props.version : version,

            size: item.props.size !== undefined ? item.props.size : size,

            disabled: item.props.disabled !== undefined ? item.props.disabled : disabled
          })
        ))}
      </Line>
    </Line>
  );
});

Radios.displayName = 'AmauiRadios';

export default Radios;
