import React, { ChangeEvent } from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import IconButton from '../IconButton';

const useStyle = style(theme => ({
  icon: {
    zIndex: 1,
    pointerEvents: 'none'
  },
  iconBox: {
    width: '1em',
    height: '1em',
    border: '0.125em solid currentColor',
    background: 'transparent',
    transition: theme.methods.transitions.make('background', { duration: 0, delay: 'xs' }),
    borderRadius: '50%',

    '&$checked': {
      background: 'currentColor',
      transition: theme.methods.transitions.make('background', { duration: 0 }),

      '&$filled, &$outlined': {
        border: 'none'
      }
    },

    '&$checked$disabled': {
      background: 'currentColor',
      border: 'none'
    }
  },
  iconItem: {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    pointerEvents: 'none',

    '&$small': {
      width: 'calc(100% - 0.2em)',
      height: 'calc(100% - 0.2em)',
      left: '0.125em',
      top: '0.125em'
    },

    '&$regular': {
      width: 'calc(100% - 0.25em)',
      height: 'calc(100% - 0.25em)',
      left: '0.125em',
      top: '0.125em'
    },

    '&:not($small):not($regular)': {
      width: 'calc(100% - 0.23em)',
      height: 'calc(100% - 0.23em)',
      left: '0.12em',
      top: '0.12em'
    },

    '&:before': {
      content: "''",
      display: 'inline-flex',
      width: '100%',
      height: '100%',
      position: 'absolute',
      inset: 0,
      background: 'currentColor',
      transform: 'scale(1)',
      opacity: 0,
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs', delay: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0, delay: 'xs' })}`,
      borderRadius: '50%'
    },

    '&$checked:before': {
      transform: 'scale(0)',
      opacity: 1,
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0 })}`,
    },

    '&$checked$disabled:before': {
      display: 'none'
    }
  },
  iconDot: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    width: '50%',
    height: '50%',
    top: '25%',
    left: '25%',
    background: 'currentColor',
    borderRadius: '50%',
    zIndex: 3,
    transform: 'scale(0)',
    transition: theme.methods.transitions.make('transform', { duration: 'xxs' }),

    '&$checked': {
      transform: 'scale(1)',
      transition: theme.methods.transitions.make('transform', { duration: 'xxs', delay: 'xxs' })
    }
  }
}), { name: 'AmauiRadio' });

const IconItem = (props: any) => {
  const {
    className,
    style,

    Component = 'span',

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  let fontSize = '24px';

  if (props.size === 'very small') fontSize = '12px';
  else if (props.size === 'small') fontSize = '18px';
  else if (props.size === 'regular') fontSize = '24px';
  else if (props.size === 'medium') fontSize = '36px';
  else if (props.size === 'large') fontSize = '48px';
  else if (props.size === 'very large') fontSize = '60px';
  else if (props.size !== undefined) fontSize = `${props.size}${!String(props.size).includes('px') ? 'px' : ''}`;

  styles.root.fontSize = `calc(${fontSize} * 0.834)`;

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

const Radio = React.forwardRef((props: any, ref: any) => {
  const {
    color = 'primary',
    colorUnchecked = 'default',
    valueDefault,
    value,
    onChange,
    Component = 'span',

    children,

    ...other
  } = props;
  const [checked, setChecked] = React.useState(valueDefault !== undefined ? valueDefault : value);

  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const styles: any = {
    iconItem: {},
    iconBox: {},
    iconDot: {}
  };

  React.useEffect(() => {
    if (value !== undefined && checked !== value) setChecked(value);
  }, [value]);

  const onUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    if (!props.disabled) {
      if (is('function', onChange)) onChange(!checked, event);

      // Inner controlled checkbox
      if (!props.hasOwnProperty('value')) setChecked(!checked);
    }
  };

  let palette: any;

  if (!theme.palette.color[color]) palette = theme.methods.color(color);

  if (props.tonal) {
    // Text
    // Outlined
    if (['text', 'outlined', undefined].includes(props.version)) {
      styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color, 30, true, palette);

      styles.iconDot.color = styles.iconDot.color = theme.methods.palette.color.value(color, 90, true, palette);
    }

    // Outlined
    if (props.version === 'outlined') styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color, 50, true, palette);

    // Filled
    if (props.version === 'filled') styles.iconDot.color = theme.methods.palette.color.value(color, 90, true, palette);
  }
  else {
    if (!theme.palette.light && props.disabled) styles.iconDot.color = theme.palette.background.default.primary;
    else {
      if (props.version === 'filled') styles.iconDot.color = color === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color])?.main;
      else styles.iconDot.color = theme.methods.palette.color.text(color === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color])?.main, true, 'light');
    }
  }

  styles.iconItem.color = styles.iconDot.color;

  if (['text', 'outlined', undefined].includes(props.version)) styles.iconItem.color = theme.palette.background.default.primary;

  let colorValue = color;

  if (!checked) colorValue = colorUnchecked;

  return (
    <IconButton
      color={colorValue}

      onClick={onUpdate}

      Component={Component}

      {...other}
    >
      <IconItem
        className={classNames([
          classes.iconItem,
          classes[props.size],
          props.disabled && classes.disabled,
          checked && classes.checked
        ])}

        style={styles.iconItem}
      />

      <IconItem
        Component='div'

        className={classNames([
          classes.icon,
          classes.iconBox,
          classes[props.version],
          props.disabled && classes.disabled,
          checked && classes.checked
        ])}

        style={styles.iconBox}
      />

      <IconItem
        Component='div'

        className={classNames([
          classes.icon,
          classes.iconDot,
          checked && classes.checked
        ])}

        style={styles.iconDot}
      />
    </IconButton>
  );
});

export default Radio;
