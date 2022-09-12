import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import IconButton from '../IconButton';

import { iconSizeToFontSize, staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    '&$disabled': {
      cursor: 'default'
    }
  },

  icon: {
    zIndex: 1,
    pointerEvents: 'none'
  },

  iconBox: {
    width: '1em',
    height: '1em',
    border: '0.12em solid currentColor',
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.5em)`
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
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.5em)`,
    zIndex: 3,
    transform: 'scale(0)',
    transition: theme.methods.transitions.make('transform', { duration: 'xxs' })
  },

  checked: {
    transform: 'scale(0.5)'
  }
}), { name: 'AmauiRadio' });

const IconItem = (props: any) => {
  const {
    Component = 'span',
    size,

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
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

const Radio = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRadio?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    colorUnchecked = 'default',
    version = 'text',
    valueDefault,
    value,
    onChange,
    Component = 'button',
    disabled,

    className,

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

  const onUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      // Inner controlled checkbox
      if (!props.hasOwnProperty('value')) setChecked(!checked);

      if (is('function', onChange)) onChange(!checked, event);
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

      className={classNames([
        staticClassName('Radio', theme) && [
          'AmauiRadio-root',
          `AmauiRadio-color-unchecked-${!theme.palette.color[colorUnchecked] && !['themed', 'inverted', 'default', 'inherit'].includes(colorUnchecked) ? 'new' : colorUnchecked}`,
          checked && `AmauiRadio-checked`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}

      color={colorValue}

      onClick={onUpdate}

      Component={Component}

      tonal={tonal}

      version={version}

      disabled={disabled}
    >
      <IconItem
        Component='div'

        className={classNames([
          staticClassName('Radio', theme) && [
            'AmauiRadio-icon',
            'AmauiRadio-iconBox'
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
            'AmauiRadio-icon',
            'AmauiRadio-iconDot'
          ],

          classes.icon,
          classes.iconDot,
          checked && classes.checked
        ])}
      />
    </IconButton>
  );
});

Radio.displayName = 'AmauiRadio';

export default Radio;
