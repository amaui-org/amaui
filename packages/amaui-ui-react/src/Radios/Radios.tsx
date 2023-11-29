import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TElement, TPropsAny, TSize, TTonal, TVersion } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  label_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  disabled: {
    cursor: 'default',
    userSelect: 'none'
  }
}), { name: 'amaui-Radios' });

export interface IRadios extends ILine {
  tonal?: TTonal;
  color?: TColor;
  colorUnchecked?: TColor;
  version?: TVersion;
  size?: TSize;

  label?: TElement;

  uncheck?: boolean;

  valueDefault?: any;
  value?: any;
  onChange?: (value: any) => any;

  disabled?: boolean;

  LabelProps?: TPropsAny;
}

const Radios: React.FC<IRadios> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiRadios?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',
    colorUnchecked,
    version = 'text',
    size = 'regular',

    label,

    uncheck = true,

    direction = 'column',
    align = 'center',
    justify = 'center',

    valueDefault,
    value: value_,
    onChange,

    disabled,

    LabelProps,

    Component = 'div',

    className,

    children: children_,

    ...other
  } = props;

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    value: React.useRef<any>(),
    ids: {
      label: React.useId()
    }
  };

  refs.value.current = value;

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  const children: any[] = React.Children.toArray(children_);

  const onUpdate = React.useCallback((valueNew_: any) => {
    let valueNew = valueNew_;

    if (uncheck && refs.value.current === valueNew) valueNew = '';

    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  }, [uncheck]);

  return (
    <Line
      ref={ref}

      gap={1}

      direction={direction}

      align={props.align !== undefined ? props.align : props.direction === 'row' ? 'center' : 'flex-start'}

      justify={justify}

      role='radiogroup'

      aria-labelledby={refs.ids.label}

      Component={Component}

      className={classNames([
        staticClassName('Radios', theme) && [
          'amaui-Radios-root',
          disabled && `amaui-Radios-disabled`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}
    >
      <Type
        version={size === 'regular' ? 'l2' : size === 'large' ? 'l1' : 'l3'}

        id={refs.ids.label}

        {...LabelProps}

        className={classNames([
          staticClassName('Radios', theme) && [
            'amaui-Radios-label'
          ],

          LabelProps?.className,
          classes.label,
          disabled && classes.label_disabled
        ])}
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

Radios.displayName = 'amaui-Radios';

export default Radios;
