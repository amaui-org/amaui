import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Interaction from '../Interaction';
import RoundProgress from '../RoundProgress';
import Type from '../Type';

import { iconSizeToFontSize, staticClassName } from '../utils';

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
    border: 'none'
  },

  // Color
  color_inherit: { color: 'inherit' },

  // Size
  size_small: {
    paddingBlock: '7.5px',
    paddingInline: '16px',
    borderRadius: `${theme.shape.radius.unit * 2}px`
  },

  size_regular: {
    paddingBlock: '11px',
    paddingInline: '24px',
    borderRadius: `${theme.shape.radius.unit * 2.5}px`
  },

  size_large: {
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
    borderRadius: `${theme.shape.radius.unit}px`
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

  // Elevation
  elevation: {
    transition: theme.methods.transitions.make('box-shadow'),

    '&:hover': {
      boxShadow: theme.shadows.values.neutral[3]
    }
  },

  // Disabled
  disabled: {
    cursor: 'default',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  disabled_version_text: {
    '&.AmauiSurface-root': {
      color: theme.palette.text.default.primary
    }
  },

  disabled_version_outlined: {
    '&.AmauiSurface-root': {
      color: theme.palette.text.default.primary
    }
  },

  disabled_version_filled: {
    '&.AmauiSurface-root': {
      color: theme.palette.text.neutral.primary,
      background: theme.palette.light ? theme.palette.text.divider : theme.palette.text.neutral.quaternary
    }
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
    tonal,
    color: color_ = 'primary',
    version = 'outlined',
    size = 'regular',
    fullWidth,
    fontSize,
    selected,
    iconSelected,
    startIcon: startIcon_,
    startIconSelected,
    endIcon: endIcon_,
    endIconSelected,
    elevation = true,
    backgroundOpacity,
    align = 'center',
    IconWrapperComponent = 'span',
    IconWrapperProps = {},
    loading,
    loadingLabel,
    loadingIcon = <RoundProgress size='small' />,
    loadingIconPosition = 'center',
    fab,
    chip,
    icon,
    focus: focus_,
    value,
    onFocus: onFocus_,
    onBlur: onBlur_,
    onSelected,
    onUnselected,
    noIconRootFontSize,
    InteractionProps = {},
    Component = props.href ? 'a' : 'button',
    disabled: disabled_,

    className,
    style,

    children,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(focus_ !== undefined ? focus_ : false);

  const { classes } = useStyle(props);

  let color = color_;
  let startIcon = (selected && startIconSelected) || startIcon_;
  let endIcon = (selected && endIconSelected) || endIcon_;
  let disabled = disabled_ || loading;
  let TypeProps = { version: 'l2' };

  if (disabled) color = 'default';

  const styles: any = {
    root: {},
    background: {},
    border: {},
    iconRoot: {},
    label: { margin: 0 },
    Icon: { fontSize: '17px' }
  };

  // Size
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
      const iconFontSize = fontSize !== undefined && 'inherit';

      children_ = is('array', children_) ?
        children_.filter(Boolean).map(
          (item: any, index: number) => is('string', item.type) ?
            React.cloneElement(item, { key: index }) :
            React.cloneElement(item, { key: index, size: iconFontSize || (item.props as any).size !== undefined ? (item.props as any).size : size / 1.667 } as any)
        ) :
        React.cloneElement(children_, { size: iconFontSize || children_.props?.size !== undefined ? children_.props.size : size / 1.667 });

      styles.root.width = size;
      styles.root.height = size;
      styles.root.fontSize = size / 1.667;

      if (!noIconRootFontSize) styles.iconRoot.fontSize = size;
    }
    else {
      children_ = is('array', children_) ?
        children_.filter(Boolean).map(
          (item: any, index: number) => is('string', item.type) ?
            React.cloneElement(item, { key: index }) :
            React.cloneElement(item, { key: index, size: children_.props?.size !== undefined ? children_.props?.size : (size === 'large' ? 'medium' : size) } as any)
        ) :
        React.cloneElement(children_, { size: children_.props?.size !== undefined ? children_.props?.size : (size === 'large' ? 'medium' : size) });

      styles.root.fontSize = iconSizeToFontSize(size === 'large' ? 'medium' : size);

      if (!noIconRootFontSize) styles.iconRoot.fontSize = size === 'small' ? 30 : size === 'regular' ? 40 : 50;
    }
  }

  // fab
  if (fab) {
    if (React.Children.count(children_) === 1 && !is('string', children_)) styles.root.minWidth = 'initial';

    if (size === 'small') styles.Icon.fontSize = 18;
    if (size === 'regular') styles.Icon.fontSize = 24;
    if (size === 'large') styles.Icon.fontSize = 30;

    children_ = React.Children.toArray(children_).map(item => React.isValidElement(item) ? React.cloneElement(item, { style: styles.Icon }) : item);
  }

  if (fontSize !== undefined) {
    styles.root.fontSize = fontSize;

    styles.iconRoot.fontSize = 'inherit';
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
    }
  }, []);

  const IconElement = (selected && iconSelected) || children_;

  return (
    <Surface
      ref={ref}

      Component={Component}

      color={color}

      tonal={tonal}

      version={version === 'outlined' ? 'outlined-without-background' : version}

      elevation={(elevation && !disabled && ['filled', 'tonal'].includes(version)) ? 1 : 0}

      onFocus={onFocus}

      onBlur={onBlur}

      className={classNames([
        staticClassName('Button', theme) && [
          `AmauiButton-root`,
          `AmauiButton-version-${version}`,
          `AmauiButton-size-${size}`,
          `AmauiButton-align-${align}`,
          (elevation && !disabled && ['filled', 'tonal'].includes(version)) && `AmauiButton-elevation`,
          fullWidth && `AmauiButton-fullWidth`,
          startIcon && `AmauiButton-startIcon`,
          endIcon && `AmauiButton-endIcon`,
          selected && `AmauiButton-selected`,
          loading && `AmauiButton-loading`,
          icon && `AmauiButton-icon`,
          fab && `AmauiButton-fab`,
          chip && `AmauiButton-chip`,
          noIconRootFontSize && `AmauiButton-noIconRootFontSize`,
          focus && `AmauiButton-focus`,
          disabled && `AmauiButton-disabled`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        classes[`version_${version}`],
        classes[`color_${color}`],
        (elevation && !disabled && ['filled', 'tonal'].includes(version)) && classes.elevation,
        startIcon && classes.startIcon,
        endIcon && classes.endIcon,
        fullWidth && classes.fullWidth,
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
        ],
        disabled && [
          classes.disabled,
          classes[`disabled_version_${version}`]
        ]
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      disabled={disabled}

      {...other}
    >
      <Interaction
        border={false}

        pulse={focus}

        selected={selected}

        disabled={disabled}

        {...InteractionProps}
      />

      {startIcon && (
        <span
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-icon',
              'AmauiButton-startIcon'
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
        <IconWrapperComponent
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-iconRoot'
            ],

            classes.iconRoot
          ])}

          style={styles.iconRoot}

          {...IconWrapperProps}
        >
          {IconElement}
        </IconWrapperComponent>
      ) : (
        <Type
          className={classNames([
            staticClassName('Button', theme) && [
              'AmauiButton-label'
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
              'AmauiButton-endIcon'
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
    </Surface>
  );
});

Button.displayName = 'AmauiButton';

export default Button;
