import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconButtonElement from '../IconButton';
import { IIconButton } from '../IconButton/IconButton';
import { iconSizeToFontSize, staticClassName } from '../utils';
import { IRef, IColor } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',

    '& *': {
      boxSizing: 'border-box'
    }
  },

  input: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    cursor: 'inherit',
    zIndex: '1'
  },

  icon: {
    zIndex: '1',
    pointerEvents: 'none'
  },

  iconBox: {
    width: '1em',
    height: '1em',
    border: '0.12em solid currentColor',
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.75em)`
  },

  iconDot: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    background: 'currentColor',
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.75em)`,
    zIndex: '3',
    transform: 'scale(0)',
    transition: theme.methods.transitions.make('transform', { duration: 'xxs' })
  },

  checked: {
    transform: 'scale(0.5)'
  },

  disabled: {
    cursor: 'default'
  }
}), { name: 'amaui-Radio' });

const IconItem = (props: any) => {
  const {
    size,

    Component = 'span',

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {

    }
  };

  const fontSize = iconSizeToFontSize(size);

  styles.root.fontSize = `calc(${fontSize} / 1.2)`;

  return (
    <Component
      className={className}

      style={{
        ...style,

        ...styles.root
      }}

      size={size}
    >
      {children && React.cloneElement(children, { ...other })}
    </Component>
  );
};

export interface IRadio extends IIconButton {
  inputRef?: IRef;

  colorUnchecked?: IColor;

  valueDefault?: boolean;
  checkedDefault?: boolean;

  value?: boolean;
  checked?: boolean;

  render?: (value: boolean, props: any) => any;

  onChange?: (value: boolean, event: React.ChangeEvent<any>) => any;

  disabled?: boolean;
}

const Radio: React.FC<IRadio> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiRadio?.props?.default, ...props_ }), [props_]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    version = 'text',

    render,

    inputRef,

    colorUnchecked = 'default',

    valueDefault: valueDefault_,
    checkedDefault: checkedDefault_,

    value: value_,
    checked: checked_,

    onChange,

    disabled,

    Component = 'span',

    className,

    children,

    ...other
  } = props;

  const checkedDefault = valueDefault_ !== undefined ? valueDefault_ : checkedDefault_;
  const checked = value_ !== undefined ? value_ : checked_;

  const [value, setValue] = React.useState((checkedDefault !== undefined ? checkedDefault : checked) || false);

  const refs = {
    value: React.useRef<any>(),
    input: React.useRef<any>()
  };

  refs.value.current = value;

  const { classes } = useStyle();

  const styles: any = {
    iconBox: {}
  };

  React.useEffect(() => {
    if (checked !== undefined && checked !== refs.value.current) setValue(checked);
  }, [checked]);

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      // Inner controlled checkbox
      if (!props.hasOwnProperty('checked')) setValue(event.target.checked);

      if (is('function', onChange)) onChange(event.target.checked, event);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<any>) => {
    switch (event.key) {
      case 'Enter':
        if (refs.input.current) refs.input.current.click();

        break;

      default:
        break;
    }
  };

  let palette: any;

  if (!theme.palette.color[color]) palette = theme.methods.color(color);

  if (tonal) {
    // Text
    // Outlined
    if (['text', 'outlined', undefined].includes(version)) {
      styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color, 30, true, palette);
    }

    // Outlined
    if (version === 'outlined') styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color, 50, true, palette);
  }

  let colorValue = color;

  if (!value) colorValue = colorUnchecked;

  return (
    <IconButton
      ref={ref}

      tabIndex={!disabled ? 0 : -1}

      tonal={tonal}

      color={colorValue}

      version={version}

      onKeyDown={onKeyDown}

      firstLevelChildren={(
        <input
          ref={item => {
            if (inputRef) inputRef.current = item;

            refs.input.current = item;
          }}

          tabIndex={-1}

          type='checkbox'

          checked={value}

          onChange={onUpdate}

          className={classNames([
            staticClassName('Radio', theme) && [
              'amaui-Radio-input'
            ],

            classes.input
          ])}

          disabled={disabled}
        />
      )}

      role='radio'

      aria-checked={value}

      aria-disabled={disabled}

      disabled={disabled}

      Component={Component}

      className={classNames([
        staticClassName('Radio', theme) && [
          'amaui-Radio-root',
          `amaui-Radio-version-${version}`,
          value && `amaui-Radio-checked`,
          disabled && `amaui-Radio-disabled`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}
    >
      {is('function', render) ? render(value, { ...props, ...other, tonal, color, version }) : <>
        <IconItem
          Component='div'

          className={classNames([
            staticClassName('Radio', theme) && [
              'amaui-Radio-icon',
              'amaui-Radio-icon-box'
            ],

            classes.icon,
            classes.iconBox,
            classes[version],
            disabled && classes.disabled
          ])}

          style={styles.iconBox}
        />

        <IconItem
          Component='div'

          className={classNames([
            staticClassName('Radio', theme) && [
              'amaui-Radio-icon',
              'amaui-Radio-icon-dot'
            ],

            classes.icon,
            classes.iconDot,
            value && classes.checked
          ])}
        />
      </>}
    </IconButton>
  );
});

Radio.displayName = 'amaui-Radio';

export default Radio;
