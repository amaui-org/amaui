import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import { IconDoneAnimated } from '../Buttons/Buttons';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',

    '&$disabled': {
      cursor: 'default'
    }
  },

  input: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'inherit',
    zIndex: 1
  },

  icon: {
    zIndex: 1,
    pointerEvents: 'none'
  },

  iconBox: {
    width: '1em',
    height: '1em',
    border: '0.125em solid currentColor',
    background: 'transparent',
    transition: theme.methods.transitions.make('background', { duration: 0, delay: 'xxs' }),
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.11em)`,

    '&$checked, &$indeterminate': {
      background: 'currentColor',
      transition: theme.methods.transitions.make('background', { duration: 0 }),

      '&$filled, &$outlined': {
        border: 'none'
      }
    },

    '&$checked$disabled, &$indeterminate$disabled': {
      background: 'currentColor',
      border: 'none'
    }
  },

  iconItem: {
    position: 'absolute',
    width: 'calc(100% - 0.3em)',
    height: 'calc(100% - 0.3em)',
    insetInline: 0,
    insetInlineStart: '0.16em',
    top: '0.15em',
    zIndex: 2,
    pointerEvents: 'none',

    '&::before': {
      content: "''",
      display: 'inline-flex',
      width: '100%',
      height: '100%',
      position: 'absolute',
      inset: 0,
      background: 'currentColor',
      transform: 'scale(1)',
      opacity: 0,
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0, delay: 'xxs' })}`
    },

    '&$checked::before, &$indeterminate::before': {
      transform: 'scale(0)',
      opacity: 1,
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0 })}`,
    },

    '&$checked$disabled::before': {
      display: 'none'
    }
  },

  iconDone: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    width: '100% !important',
    height: '100%',
    zIndex: 3,

    '&:not($indeterminate) > svg': {
      padding: '0.14em'
    }
  }
}), { name: 'AmauiCheckbox' });

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
    root: {}
  };

  let fontSize = '24px';

  if (size === 'very small') fontSize = '12px';
  else if (size === 'small') fontSize = '18px';
  else if (size === 'regular') fontSize = '24px';
  else if (size === 'medium') fontSize = '36px';
  else if (size === 'large') fontSize = '48px';
  else if (size === 'very large') fontSize = '60px';
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

const Checkbox = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCheckbox?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',

    colorIndeterminate = props.color,
    colorUnchecked = 'default',

    version = 'text',

    indeterminate: indeterminate_,

    valueDefault,
    value: value_,
    onChange,

    disabled,

    inputRef,

    Component = 'button',

    className,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);
  const [indeterminate, setIndeterminate] = React.useState(!value && indeterminate_);

  const refs = {
    value: React.useRef<any>(),
    input: React.useRef<any>(),
    indeterminate: React.useRef<any>()
  };

  refs.value.current = value;

  refs.indeterminate.current = indeterminate;

  const { classes } = useStyle(props);

  const styles: any = {
    iconItem: {},
    iconBox: {},
    iconDone: {}
  };

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) {
      setValue(value_);

      if (refs.indeterminate.current) setIndeterminate(false);
    }
  }, [value_]);

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      // Inner controlled value
      if (!props.hasOwnProperty('value')) {
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

  let color_ = indeterminate ? colorIndeterminate : color;
  let palette: any;

  if (!theme.palette.color[color]) palette = theme.methods.color(color_);

  if (tonal) {
    // Text
    // Outlined
    if (['text', 'outlined', undefined].includes(version)) {
      styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color_, 30, true, palette);

      styles.iconDone.color = styles.iconDone.color = theme.methods.palette.color.value(color_, 90, true, palette);
    }

    // Outlined
    if (version === 'outlined') styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color_, 50, true, palette);

    // Filled
    if (version === 'filled') styles.iconDone.color = theme.methods.palette.color.value(color_, 90, true, palette);
  }
  else {
    if (!theme.palette.light && disabled) styles.iconDone.color = theme.palette.background.default.primary;
    else {
      if (version === 'filled') styles.iconDone.color = color_ === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color_])?.main;
      else styles.iconDone.color = theme.methods.palette.color.text(color_ === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color_])?.main, true, 'light');
    }
  }

  styles.iconItem.color = styles.iconDone.color;

  if (['text', 'outlined', undefined].includes(version)) styles.iconItem.color = theme.palette.background.default.primary;

  let colorValue = color;

  if (!value) colorValue = colorUnchecked;

  if (indeterminate) colorValue = colorIndeterminate;

  return (
    <IconButton
      ref={ref}

      className={classNames([
        staticClassName('Checkbox', theme) && [
          'AmauiCheckbox-root',
          `AmauiCheckbox-color-indeterminate-${(!theme.palette.color[colorIndeterminate] && !['themed', 'inverted', 'default', 'inherit'].includes(colorIndeterminate)) ? 'new' : colorIndeterminate}`,
          `AmauiCheckbox-color-unchecked-${!theme.palette.color[colorUnchecked] && !['themed', 'inverted', 'default', 'inherit'].includes(colorUnchecked) ? 'new' : colorUnchecked}`,
          indeterminate && `AmauiCheckbox-indeterminate`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}

      color={colorValue}

      Component={Component}

      tonal={tonal}

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
            staticClassName('Checkbox', theme) && [
              'AmauiCheckbox-input'
            ],

            classes.input
          ])}

          disabled={disabled}
        />
      )}

      disabled={disabled}
    >
      <IconItem
        className={classNames([
          classes.iconItem,
          disabled && classes.disabled,
          value && classes.checked,
          indeterminate && classes.indeterminate
        ])}

        style={styles.iconItem}
      />

      <IconItem
        Component='div'

        className={classNames([
          classes.icon,
          classes.iconBox,
          classes[version],
          disabled && classes.disabled,
          value && classes.checked,
          indeterminate && classes.indeterminate
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

Checkbox.displayName = 'AmauiCheckbox';

export default Checkbox;
