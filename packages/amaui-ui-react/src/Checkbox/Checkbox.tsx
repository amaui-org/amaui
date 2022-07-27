import React, { ChangeEvent } from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import { IconDoneAnimated } from '../SegmentedButtons/SegmentedButtons';

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
    transition: theme.methods.transitions.make('background', { duration: 0, delay: 'xxs' }),
    borderRadius: '0.11em',

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
    inset: 0,
    left: '0.16em',
    top: '0.15em',
    zIndex: 2,
    pointerEvents: 'none',

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
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0, delay: 'xxs' })}`
    },

    '&$checked:before, &$indeterminate:before': {
      transform: 'scale(0)',
      opacity: 1,
      transition: `${theme.methods.transitions.make('transform', { duration: 'xxs' })}, ${theme.methods.transitions.make('opacity', { duration: 0 })}`,
    },

    '&$checked$disabled:before': {
      display: 'none'
    }
  },
  iconDone: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    width: ['100%', '!important'],
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

  styles.root.fontSize = `calc(${fontSize} - (${fontSize} * 0.25))`;

  return (
    <span
      className={className}

      style={{
        ...style,

        ...styles.root
      }}
    >
      {children && React.cloneElement(children, { ...other })}
    </span>
  );
};

const Checkbox = React.forwardRef((props: any, ref: any) => {
  const {
    color = 'primary',
    colorIndeterminate = props.color,
    colorUnchecked = 'default',
    valueDefault,
    value,
    onChange,
    indeterminate: indeterminate_,
    Component = 'span',

    children,

    ...other
  } = props;
  const [checked, setChecked] = React.useState(valueDefault !== undefined ? valueDefault : value);
  const [indeterminate, setIndeterminate] = React.useState(!checked && indeterminate_);

  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const styles: any = {
    iconItem: {},
    iconBox: {},
    iconDone: {}
  };

  React.useEffect(() => {
    if (value !== undefined && checked !== value) {
      setChecked(value);

      if (indeterminate) setIndeterminate(false);
    }
  }, [value]);

  const onUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    if (!props.disabled) {
      if (is('function', onChange)) onChange(!checked, event);

      // Inner controlled checkbox
      if (!props.hasOwnProperty('value')) {
        setChecked(!checked);

        if (indeterminate) setIndeterminate(false);
      }
    }
  };

  let color_ = indeterminate ? colorIndeterminate : color;
  let palette: any;

  if (!theme.palette.color[color]) palette = theme.methods.color(color_);

  if (props.tonal) {
    // Text
    // Outlined
    if (['text', 'outlined', undefined].includes(props.version)) {
      styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color_, 30, true, palette);

      styles.iconDone.color = styles.iconDone.color = theme.methods.palette.color.value(color_, 90, true, palette);
    }

    // Outlined
    if (props.version === 'outlined') styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color_, 50, true, palette);

    // Filled
    if (props.version === 'filled') styles.iconDone.color = theme.methods.palette.color.value(color_, 90, true, palette);
  }
  else {
    if (!theme.palette.light && props.disabled) styles.iconDone.color = theme.palette.background.default.primary;
    else {
      if (props.version === 'filled') styles.iconDone.color = color_ === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color_])?.main;
      else styles.iconDone.color = theme.methods.palette.color.text(color_ === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color_])?.main, true, 'light');
    }
  }

  styles.iconItem.color = styles.iconDone.color;

  if (['text', 'outlined', undefined].includes(props.version)) styles.iconItem.color = theme.palette.background.default.primary;

  let colorValue = color;

  if (!checked) colorValue = colorUnchecked;

  if (indeterminate) colorValue = colorIndeterminate;

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
          props.disabled && classes.disabled,
          checked && classes.checked,
          indeterminate && classes.indeterminate
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
          checked && classes.checked,
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
        >
          <IconMaterialIndeterminateCheckBoxSharp />
        </IconItem>
      )}

      {checked && (
        <IconDoneAnimated
          className={classNames([
            classes.icon,
            classes.iconDone
          ])}

          style={styles.iconDone}

          in
        />
      )}
    </IconButton>
  );
});

export default Checkbox;
