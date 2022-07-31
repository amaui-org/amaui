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
    size,

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

const Radio = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRadio?.props?.default }), [props_]);

  const {
    tonal,
    version = 'text',
    color = 'primary',
    colorUnchecked = 'default',
    valueDefault,
    value,
    onChange,
    Component = 'span',
    disabled,

    children,

    ...other
  } = props;
  const [checked, setChecked] = React.useState(valueDefault !== undefined ? valueDefault : value);

  const { classes } = useStyle(props);

  const styles: any = {
    iconBox: {}
  };

  React.useEffect(() => {
    if (value !== undefined && checked !== value) setChecked(value);
  }, [value]);

  const onUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      if (is('function', onChange)) onChange(!checked, event);

      // Inner controlled checkbox
      if (!props.hasOwnProperty('value')) setChecked(!checked);
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

  if (!checked) colorValue = colorUnchecked;

  return (
    <IconButton
      ref={ref}

      color={colorValue}

      onClick={onUpdate}

      Component={Component}

      tonal={tonal}

      version={version}

      disabled={disabled}

      {...other}
    >
      <IconItem
        Component='div'

        className={classNames([
          classes.icon,
          classes.iconBox,
          classes[version],
          disabled && classes.disabled,
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
