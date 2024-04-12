import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IconDoneAnimated } from '../Buttons/Buttons';
import IconButton from '../IconButton';
import Icon from '../Icon';
import { IIconButton } from '../IconButton/IconButton';
import { staticClassName } from '../utils';
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
    border: '0.125em solid currentColor',
    background: 'transparent',
    transition: theme.methods.transitions.make('background', { duration: 0, delay: 'xxs' }),
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.11em)`
  },

  iconBox_checked: {
    background: 'currentColor',
    transition: theme.methods.transitions.make('background', { duration: 0 })
  },

  iconBox_checked_version_filled: {
    border: 'none'
  },

  iconBox_checked_version_outlined: {
    border: 'none'
  },

  iconBox_checked_disabled: {
    background: 'currentColor',
    border: 'none'
  },

  iconBox_indeterminate: {
    background: 'currentColor',
    transition: theme.methods.transitions.make('background', { duration: 0 })
  },

  iconBox_indeterminate_version_filled: {
    border: 'none'
  },

  iconBox_indeterminate_version_outlined: {
    border: 'none'
  },

  iconBox_indeterminate_disabled: {
    background: 'currentColor',
    border: 'none'
  },

  iconItem: {
    position: 'absolute',
    width: 'calc(100% - 0.3em)',
    height: 'calc(100% - 0.3em)',
    insetInline: '0',
    insetInlineStart: '0.16em',
    top: '0.15em',
    zIndex: '2',
    pointerEvents: 'none',

    '&::before': {
      content: "''",
      display: 'inline-flex',
      width: '100%',
      height: '100%',
      position: 'absolute',
      inset: '0',
      background: 'currentColor',
      transform: 'scale(1)',
      opacity: '0',
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0, delay: 'xxs' })}`
    }
  },

  iconItem_checked: {
    '&::before': {
      transform: 'scale(0)',
      opacity: '1',
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0 })}`
    }
  },

  'iconItem_checked_disabled': {
    '&::before': {
      display: 'none'
    }
  },

  iconItem_indeterminate: {
    '&::before': {
      transform: 'scale(0)',
      opacity: '1',
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0 })}`
    }
  },

  iconDone: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: '0',
    width: '100% !important',
    height: '100%',
    zIndex: '3',

    '&:not($indeterminate) > svg': {
      padding: '0.14em'
    }
  },

  disabled: {
    cursor: 'default'
  }
}), { name: 'amaui-Checkbox' });

// Indeterminate
const IconMaterialIndeterminateCheckBoxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxSharp'
      short_name='IndeterminateCheckBox'

      {...props}
    >
      <path d='M7 13H17V11H7V13Z' />
    </Icon>
  );
});

const IconItem = (props: any) => {
  const {
    noFontSizeDownScale,
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

  let fontSize = '1.5rem';

  if (size === 'very small') fontSize = '0.75rem';
  else if (size === 'small') fontSize = '1.125rem';
  else if (size === 'regular') fontSize = '1.5rem';
  else if (size === 'medium') fontSize = '2.25rem';
  else if (size === 'large') fontSize = '3rem';
  else if (size === 'very large') fontSize = '3.75rem';
  else if (size !== undefined) fontSize = `${size}${!String(size).includes('px') ? 'px' : ''}`;

  styles.root.fontSize = `calc(${fontSize} * 0.75)`;

  if (noFontSizeDownScale) styles.root.fontSize = fontSize;

  return (
    <Component
      className={className}

      style={{
        ...style,

        ...styles.root
      }}
    >
      {children && React.cloneElement(children, { ...other })}
    </Component>
  );
};

export interface ICheckbox extends IIconButton {
  inputRef?: IRef;

  colorIndeterminate?: IColor;
  colorUnchecked?: IColor;

  valueDefault?: boolean;
  checkedDefault?: boolean;

  value?: boolean;
  checked?: boolean;

  onChange?: (value: boolean, event: React.ChangeEvent<any>) => any;

  indeterminate?: boolean;

  disabled?: boolean;
}

const Checkbox: React.FC<ICheckbox> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.amauiCheckbox?.props?.default }), [props_]);

  const {
    tonal = true,
    color = 'primary',
    version = 'text',

    colorIndeterminate = props.color || 'primary',
    colorUnchecked = 'default',

    valueDefault: valueDefault_,
    checkedDefault: checkedDefault_,

    value: value_,
    checked: checked_,

    onChange,

    indeterminate: indeterminate_,

    disabled,

    inputRef,

    Component = 'span',

    className,

    children,

    ...other
  } = props;

  const checkedDefault = valueDefault_ !== undefined ? valueDefault_ : checkedDefault_;
  const checked = value_ !== undefined ? value_ : checked_;

  const [value, setValue] = React.useState((checkedDefault !== undefined ? checkedDefault : checked) || false);
  const [indeterminate, setIndeterminate] = React.useState(!value && indeterminate_);

  const refs = {
    value: React.useRef<any>(),
    input: React.useRef<any>(),
    indeterminate: React.useRef<any>()
  };

  refs.value.current = value;

  refs.indeterminate.current = indeterminate;

  const { classes } = useStyle();

  const styles: any = {
    iconItem: {},
    iconBox: {},
    iconDone: {}
  };

  React.useEffect(() => {
    if (indeterminate_ !== undefined && indeterminate_ !== refs.indeterminate.current) {
      setIndeterminate(indeterminate_);

      if (indeterminate_) setValue(false);
    }
  }, [indeterminate_]);

  React.useEffect(() => {
    if (checked !== undefined && checked !== refs.value.current) {
      setValue(checked);

      if (refs.indeterminate.current) setIndeterminate(false);
    }
  }, [checked]);

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      // Inner controlled value
      if (!props.hasOwnProperty('checked')) {
        setValue(event.target.checked);

        if (indeterminate) setIndeterminate(false);
      }

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

  const color_ = indeterminate ? colorIndeterminate : color;
  let palette: any;

  if (!theme.palette.color[color]) palette = theme.methods.color(color_);

  if (tonal) {
    // Text
    // Outlined
    if (['text', 'outlined', undefined].includes(version)) {
      styles.iconBox.color = theme.methods.palette.color.value(color_, 30, true, palette);

      styles.iconDone.color = theme.methods.palette.color.value(color_, 90, true, palette);
    }

    // Outlined
    if (version === 'outlined') styles.iconBox.color = theme.methods.palette.color.value(color_, 50, true, palette);

    // Filled
    if (version === 'filled') styles.iconDone.color = theme.methods.palette.color.value(color_, 90, true, palette);
  }
  else {
    if (!theme.palette.light && disabled) styles.iconDone.color = theme.palette.background.default.primary;
    else {
      if (version === 'filled') styles.iconDone.color = (palette || theme.palette.color[color_])?.main;
      else styles.iconDone.color = theme.methods.palette.color.text(color_ === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color_])?.main, true, 'light');
    }
  }

  if (['text', 'filled', undefined].includes(version)) {
    if (['default', 'inherit', 'inverted', 'themed'].includes(color_)) styles.iconDone.color = theme.palette.background.default.primary;
  }

  styles.iconItem.color = styles.iconDone.color;

  if (['text', 'outlined', undefined].includes(version)) styles.iconItem.color = theme.palette.background.default.primary;

  let colorValue = color;

  if (!value) colorValue = colorUnchecked;

  if (indeterminate) colorValue = colorIndeterminate;

  return (
    <IconButton
      ref={ref}

      tabIndex={!disabled ? 0 : -1}

      color={colorValue}

      tonal={tonal}

      version={version}

      onKeyDown={onKeyDown}

      firstLevelChildren={(
        <input
          ref={item => {
            if (inputRef) {
              if (is('function', inputRef)) (inputRef as any)(item);
              else inputRef.current = item;
            }

            refs.input.current = item;
          }}

          tabIndex={-1}

          type='checkbox'

          checked={value}

          onChange={onUpdate}

          className={classNames([
            staticClassName('Checkbox', theme) && [
              'amaui-Checkbox-input'
            ],

            classes.input
          ])}

          disabled={disabled}
        />
      )}

      role='checkbox'

      aria-checked={indeterminate ? 'mixed' : value}

      aria-disabled={disabled}

      disabled={disabled}

      Component={Component}

      className={classNames([
        staticClassName('Checkbox', theme) && [
          'amaui-Checkbox-root',
          value && `amaui-Checkbox-checked`,
          disabled && `amaui-Checkbox-disabled`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}
    >
      <IconItem
        className={classNames([
          classes.iconItem,
          value && classes.iconItem_checked,
          indeterminate && classes.iconItem_indeterminate,
          (value && disabled) && classes.iconItem_checked_disabled
        ])}

        style={styles.iconItem}
      />

      <IconItem
        Component='div'

        className={classNames([
          classes.icon,
          classes.iconBox,
          value && [
            classes.iconBox_checked,
            classes[`iconBox_checked_version_${version}`]
          ],
          indeterminate && [
            classes.iconBox_indeterminate,
            classes[`iconBox_indeterminate_version_${version}`]
          ],
          disabled && [
            value && classes.iconBox_checked_disabled,
            indeterminate && classes.iconBox_indeterminate_disabled,
          ]
        ])}

        style={styles.iconBox}
      />

      {indeterminate && (
        <IconItem
          className={classNames([
            classes.icon,
            classes.iconDone,
            indeterminate && classes.indeterminate
          ])}

          style={styles.iconDone}

          noFontSizeDownScale
        >
          <IconMaterialIndeterminateCheckBoxSharp size='inherit' />
        </IconItem>
      )}

      {value && (
        <IconDoneAnimated
          className={classNames([
            classes.icon,
            classes.iconDone
          ])}

          style={styles.iconDone}

          in={value}

          add
        />
      )}
    </IconButton>
  );
});

Checkbox.displayName = 'amaui-Checkbox';

export default Checkbox;
