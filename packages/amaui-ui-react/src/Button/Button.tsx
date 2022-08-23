import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Interaction from '../Interaction';
import RoundProgress from '../RoundProgress';
import Type from '../Type';

import { iconSizeToFontSize, staticClassName } from '../utils';

const other = {
  pointerEvents: 'none',
  borderRadius: 'inherit',
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%'
};

const useStyle = style(theme => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',

    transition: theme.methods.transitions.make(['color']),

    // Reset
    '-webkit-appearance': 'none',
    appearance: 'none',
    border: 'none',
    background: 'transparent'
  },

  // Color
  default: { color: theme.palette.text.default.primary },

  neutral: { color: theme.palette.color.neutral.main },

  primary: { color: theme.palette.color.primary.main },

  secondary: { color: theme.palette.color.secondary.main },

  tertiary: { color: theme.palette.color.tertiary.main },

  quaternary: { color: theme.palette.color.quaternary.main },

  info: { color: theme.palette.color.info.main },

  success: { color: theme.palette.color.success.main },

  warning: { color: theme.palette.color.warning.main },

  error: { color: theme.palette.color.error.main },

  // Size
  small: {
    paddingBlock: '7.5px',
    paddingInline: '16px',
    borderRadius: `${theme.shape.radius.unit * 2}px`
  },

  regular: {
    paddingBlock: '11px',
    paddingInline: '24px',
    borderRadius: `${theme.shape.radius.unit * 2.5}px`
  },

  large: {
    paddingBlock: '16px',
    paddingInline: '32px',
    borderRadius: `${theme.shape.radius.unit * 3.5}px`
  },

  // icon
  icon: {
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 1em)`,
    padding: '0'
  },

  icon_size_small: {
    width: '30px',
    height: '30px'
  },

  icon_size_regular: {
    width: '40px',
    height: '40px'
  },

  icon_size_large: {
    width: '50px',
    height: '50px'
  },

  // fab
  fab_size_small: {
    height: `40px`,
    minWidth: `64px`,
    borderRadius: `${(theme.shape.radius.unit * 2) - (theme.shape.radius.unit / 2)}px`,
    padding: '12px',
  },

  fab_size_regular: {
    height: `56px`,
    minWidth: `80px`,
    borderRadius: `${theme.shape.radius.unit * 2}px`,
    padding: '16px'
  },

  fab_size_large: {
    height: `72px`,
    minWidth: `96px`,
    borderRadius: `${(theme.shape.radius.unit * 2) + (theme.shape.radius.unit / 2)}px`,
    padding: '24px'
  },

  // Chip
  chip_size_small: {
    padding: `4px 12px`,
    borderRadius: `${theme.shape.radius.unit - (theme.shape.radius.unit / 4)}px`
  },

  chip_size_regular: {
    padding: `8px 16px`,
    borderRadius: `${theme.shape.radius.unit}px`,
  },

  chip_size_large: {
    padding: `7px 20px`,
    borderRadius: `${theme.shape.radius.unit + (theme.shape.radius.unit / 4)}px`
  },

  // Icons
  startIcon: {
    paddingInlineStart: 0
  },

  endIcon: {
    paddingInlineEnd: 0
  },

  fullWidth: {
    width: '100%'
  },

  // Shadows
  elevation: {
    boxShadow: theme.shadows.values.neutral[1],
    transition: theme.methods.transitions.make('box-shadow'),

    '&:hover': {
      boxShadow: theme.shadows.values.neutral[3]
    }
  },

  // Disabled
  disabled: {
    cursor: 'default'
  },

  disabled_filled: {
    color: theme.palette.text.neutral.primary,
    opacity: theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'disabled' : 'active']
  },

  disabled_tonal: {
    color: theme.palette.text.neutral.primary,
    opacity: theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'disabled' : 'active']
  },

  disabled_outlined: {
    color: theme.palette.text.disabled
  },

  disabled_text: {
    color: theme.palette.text.disabled
  },

  background: {
    ...other,

    transition: theme.methods.transitions.make(['background'])
  },

  background_disabled: {
    background: theme.palette.light ? theme.palette.text.divider : theme.palette.text.neutral.quaternary
  },

  border: {
    ...other,
    boxShadow: 'inset 0 0 0 1px currentColor',

    transition: theme.methods.transitions.make(['boxShadow'])
  },

  border_disabled_outlined: {
    opacity: theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'quaternary' : 'secondary']
  },

  // Label
  label: {
    display: 'inline-flex',
    position: 'relative',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    gap: '8px',
    width: '100%'
  },

  align_start: {
    textAlign: 'start',
    justifyContent: 'flex-start'
  },

  align_center: {
    textAlign: 'center',
    justifyContent: 'center'
  },

  align_end: {
    textAlign: 'start',
    justifyContent: 'flex-end'
  },

  // Size
  label_size_small: {
    gap: '6px'
  },

  label_size_regular: {
    gap: '8px'
  },

  label_size_large: {
    gap: '10px'
  },

  // icon
  iconRoot: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0
  },

  // Icon element
  Icon: {
    position: 'relative',
    lineHeight: 0
  },

  start_size_small: {
    paddingInline: '11px 5px'
  },

  start_size_regular: {
    paddingInline: '16px 8px'
  },

  start_size_large: {
    paddingInline: '22px 10px'
  },

  end_size_small: {
    paddingInline: '5px 11px'
  },

  end_size_regular: {
    paddingInline: '8px 16px'
  },

  end_size_large: {
    paddingInline: '10px 22px'
  },

  // Chip
  chip_start_size_small: {
    padding: `0 6px`
  },

  chip_start_size_regular: {
    padding: `0 8px`
  },

  chip_start_size_large: {
    padding: `0 10px`
  },

  chip_end_size_small: {
    padding: `0 6px`
  },

  chip_end_size_regular: {
    padding: `0 8px`
  },

  chip_end_size_large: {
    padding: `0 10px`
  }
}), { name: 'AmauiButton' });

const Button = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiButton?.props?.default }), [props_]);

  const {
    version = 'outlined',
    size = 'regular',
    color: color_ = 'primary',
    tonal,

    prefer = 'light',
    fullWidth,
    selected,
    iconSelected,
    startIcon: startIcon_,
    startIconSelected,
    endIcon: endIcon_,
    endIconSelected,
    elevation = true,
    backgroundOpacity,
    align = 'center',
    loading,
    loadingLabel,
    loadingIcon = <RoundProgress size='small' />,
    loadingIconPosition = 'center',
    disabled: disabled_,

    Component = props.href ? 'a' : 'button',

    InteractionProps = {},

    fab,
    chip,
    icon,
    focus: focus_,

    className,
    style,

    onFocus: onFocus_,
    onBlur: onBlur_,

    children,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(focus_ !== undefined ? focus_ : false);

  const refs = {
    color: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  let color = color_;
  let startIcon = (selected && startIconSelected) || startIcon_;
  let endIcon = (selected && endIconSelected) || endIcon_;
  let disabled = disabled_ || loading;
  let TypeProps = { version: 'l2' };

  if (disabled) color = 'default';

  React.useEffect(() => {
    if (classes[color] === undefined && is('string', color)) {
      refs.color.current = theme.methods.color(color);
    }
  }, [color]);

  const styles: any = {
    root: {},
    background: {},
    border: {},
    icon: {},
    label: { margin: 0 },
    Icon: { fontSize: '17px' }
  };

  // color
  if (classes[color] === undefined && is('string', color)) {
    if (!refs.color.current) refs.color.current = theme.methods.color(color);

    styles.root.color = color;
  }

  if (version === 'filled') {
    styles.background.background = color === 'default' ? theme.palette.text.default.primary : theme.palette.color[color] ? (theme.palette.color[color] as any).main : color;

    styles.root.color = theme.methods.palette.color.text(styles.background.background, true, prefer);
  }

  if (tonal) {
    // Text
    if (version === 'text') {
      styles.root.color = theme.methods.palette.color.value(color, 30, true, refs.color.current);
    }

    // Outlined
    if (version === 'outlined') {
      styles.root.color = theme.methods.palette.color.value(color, 50, true, refs.color.current);

      styles.label.color = theme.methods.palette.color.value(color, 10, true, refs.color.current);

      styles.border.boxShadow = `inset 0 0 0 1px ${theme.methods.palette.color.value(color, 30, true, refs.color.current)}`;
    }

    // Filled
    if (version === 'filled') {
      styles.root.color = theme.methods.palette.color.value(color, 10, true, refs.color.current);

      styles.background.background = theme.methods.palette.color.value(color, 90, true, refs.color.current);
    }
  }

  // size
  if (size === 'small') {
    styles.Icon.fontSize = '15px';

    TypeProps.version = 'l3';
  }

  if (size === 'large') {
    styles.Icon.fontSize = '22px';

    TypeProps.version = 'l1';
  }

  let children_ = children;

  // icon
  if (icon) {
    if (!['small', 'regular', 'large'].includes(size)) {
      children_ = is('array', children_) ?
        children_.filter(Boolean).map(
          (item: any, index: number) => is('string', item.type) ?
            React.cloneElement(item, { key: index }) :
            React.cloneElement(item, { key: index, size: (item.props as any).size !== undefined ? (item.props as any).size : size / 1.667 } as any)

        ) :
        React.cloneElement(children_, { size: children_.props?.size !== undefined ? children_.props.size : size / 1.667 });

      styles.root.width = size;
      styles.root.height = size;
      styles.root.fontSize = size / 1.667;

      styles.icon.fontSize = size;
    }
    else {
      children_ = is('array', children_) ?
        children_.filter(Boolean).map(
          (item: any, index, number) => is('string', item.type) ?
            React.cloneElement(item, { key: index }) :
            React.cloneElement(item, { key: index, size: children_.props?.size !== undefined ? children_.props?.size : (size === 'large' ? 'medium' : size) } as any)
        ) :
        React.cloneElement(children_, { size: children_.props?.size !== undefined ? children_.props?.size : (size === 'large' ? 'medium' : size) });

      styles.root.fontSize = iconSizeToFontSize(size === 'large' ? 'medium' : size);

      styles.icon.fontSize = size === 'small' ? 30 : size === 'regular' ? 40 : 50;
    }
  }

  // fab
  if (fab) {
    if (React.Children.count(children_) === 1 && !is('string', children_) && size !== 'large') styles.root.minWidth = 'initial';

    if (size === 'small') styles.Icon.fontSize = 18;
    if (size === 'regular') styles.Icon.fontSize = 24;
    if (size === 'large') styles.Icon.fontSize = 30;

    children_ = React.Children.toArray(children_).map(item => React.isValidElement(item) ? React.cloneElement(item, { style: styles.Icon }) : item);
  }

  // loading
  if (loading) {
    const iconLoading = React.cloneElement(loadingIcon, { color: 'inherit', style: styles.Icon });

    if (loadingLabel) children_ = loadingLabel;
    else if (loadingIconPosition === 'center') {
      children_ = icon ? React.cloneElement(loadingIcon, { color: 'inherit', size: size === 'small' ? 18 : size === 'regular' ? 24 : 36 }) : iconLoading;

      styles.label.lineHeight = 0;
    }

    if (loadingIconPosition === 'start') startIcon = iconLoading;
    else if (loadingIconPosition === 'end') endIcon = iconLoading;
  }

  if (backgroundOpacity !== undefined) styles.background.opacity = backgroundOpacity;

  if (disabled) {
    InteractionProps.wave = false;
    InteractionProps.border = false;
    InteractionProps.background = false;

    delete styles.root.color;
    delete styles.label.color;
    delete styles.background.background;
  }

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined) {
      setFocus(true);

      if (is('function', onFocus_)) onFocus_(event);
    }
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined) {
      setFocus(false);

      if (is('function', onBlur_)) onBlur_(event)
    };
  }, []);

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Button', theme) && [
          'AmauiButton-root',
          `AmauiButton-version-${version}`,
          `AmauiButton-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          `AmauiButton-size-${size}`,
          elevation && !disabled && ['filled', 'tonal'].includes(version) && `AmauiButton-elevation`,
          tonal && `AmauiButton-tonal`,
          disabled && `AmauiButton-disabled`,
          fullWidth && `AmauiButton-fullWidth`,
          startIcon && `AmauiButton-startIcon`,
          endIcon && `AmauiButton-endIcon`,
          selected && `AmauiButton-selected`
        ],

        classes.root,
        className,
        classes[size],
        classes[color],
        classes[version],
        tonal && classes.tonal,
        startIcon && classes.startIcon,
        endIcon && classes.endIcon,
        fullWidth && classes.fullWidth,
        elevation && !disabled && ['filled', 'tonal'].includes(version) && classes.elevation,
        disabled && [
          classes.disabled,
          classes[`disabled_${version}`]
        ],
        icon && [
          classes.icon,
          classes[`icon_size_${size}`]
        ],
        fab && [
          classes.fab,
          classes[`fab_size_${size}`]
        ],
        chip && [
          classes.chip,
          classes[`chip_size_${size}`]
        ]
      ])}

      style={{
        ...(style || {}),

        ...styles.root
      }}

      onFocus={onFocus}
      onBlur={onBlur}

      disabled={disabled}

      {...other}
    >
      {['filled'].includes(version) && (
        <span
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-backgroud',
              disabled && `AmauiButton-background-disabled`
            ],

            classes.background,
            disabled && classes[`background_disabled`]
          ])}

          style={styles.background}
        />
      )}

      <Interaction
        border={false}

        pulse={focus}

        selected={selected}

        {...InteractionProps}
      />

      {startIcon && (
        <span
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-icon',
              'AmauiButton-startIcon',
              `AmauiButton-size-${size}`
            ],

            classes.Icon,
            classes.start,
            classes[`start_size_${size}`],
            chip && classes[`chip_start_size_${size}`]
          ])}
        >
          {React.cloneElement(startIcon, { style: styles.Icon })}
        </span>
      )}

      {icon ? (
        <span
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-iconRoot'
            ],

            classes.iconRoot
          ])}

          style={styles.icon}
        >
          {(selected && iconSelected) || children_}
        </span>
      ) : (
        <Type
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-label',
              `AmauiButton-size-${size}`,
              `AmauiButton-align-${align}`
            ],

            classes.label,
            classes[`label_size_${size}`],
            classes[`align_${align}`]
          ])}

          Component='span'

          style={styles.label}

          {...TypeProps}
        >
          {React.Children.toArray(children_).map((item: any) => {
            if (selected && item.type?.displayName?.includes('AmauiIcon') && iconSelected) return iconSelected;

            return item;
          })}
        </Type>
      )}

      {endIcon && (
        <span
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-icon',
              'AmauiButton-endIcon',
              `AmauiButton-size-${size}`
            ],

            classes.Icon,
            classes.end,
            classes[`end_size_${size}`],
            chip && classes[`chip_end_size_${size}`]
          ])}
        >
          {React.cloneElement(endIcon, { style: styles.Icon })}
        </span>
      )}

      {version === 'outlined' && (
        <span
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-border',
              disabled && `AmauiButton-border-disabled`
            ],

            classes.border,
            disabled && classes[`border_disabled_${version}`]
          ])}

          style={styles.border}
        />
      )}
    </Component>
  );
});

Button.displayName = 'AmauiButton';

export default Button;
