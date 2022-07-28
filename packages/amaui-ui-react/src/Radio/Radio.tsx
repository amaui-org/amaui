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
    border: '0.12em solid currentColor',
    borderRadius: '50%'
  },
  iconDot: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    background: 'currentColor',
    borderRadius: '50%',
    zIndex: 3,
    transform: 'scale(0)',
    transition: theme.methods.transitions.make('transform', { duration: 'xxs' }),

    '&$checked': {
      transform: 'scale(0.5)'
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

  styles.root.fontSize = `calc(${fontSize} / 1.2)`;

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
    iconBox: {}
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
    }

    // Outlined
    if (props.version === 'outlined') styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color, 50, true, palette);
  }

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
      />
    </IconButton>
  );
});

export default Radio;
