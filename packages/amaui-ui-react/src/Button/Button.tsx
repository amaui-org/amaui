import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SurfaceElement from '../Surface';
import InteractionElement from '../Interaction';
import RoundProgressElement from '../RoundProgress';
import TypeElement from '../Type';
import { ISurface } from '../Surface/Surface';
import { iconSizeToFontSize, staticClassName } from '../utils';
import { IElement, IElementReference, IPropsAny, ISizeAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    // Reset
    fontFamily: 'inherit',
    '-webkit-appearance': 'none',
    appearance: 'none',
    border: 'none',
    fontSize: '100%',
    lineHeight: '1.15',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    textTransform: 'none',
    flex: '0 0 auto',

    display: 'inline-flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',

    transition: theme.methods.transitions.make(['color'])
  },

  // Color
  color_inherit: { color: 'inherit' },

  // Size
  size_small: {
    paddingBlock: theme.methods.space.value(1, 'px'),
    paddingInline: theme.methods.space.value(2, 'px'),
    borderRadius: `${theme.shape.radius.unit * 2}px`
  },

  size_regular: {
    paddingBlock: theme.methods.space.value(1.5, 'px'),
    paddingInline: theme.methods.space.value(3, 'px'),
    borderRadius: `${theme.shape.radius.unit * 2.5}px`
  },

  size_large: {
    paddingBlock: theme.methods.space.value(2, 'px'),
    paddingInline: theme.methods.space.value(4, 'px'),
    borderRadius: `${theme.shape.radius.unit * 3.5}px`
  },

  // icon
  icon: {
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 2em)`,
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
    padding: theme.methods.space.value(1.5, 'px')
  },

  fab_size_regular: {
    height: `56px`,
    minWidth: `80px`,
    borderRadius: `${theme.shape.radius.unit * 2}px`,
    padding: theme.methods.space.value(2, 'px')
  },

  fab_size_large: {
    height: `72px`,
    minWidth: `96px`,
    borderRadius: `${(theme.shape.radius.unit * 2) + (theme.shape.radius.unit / 2)}px`,
    padding: theme.methods.space.value(3, 'px')
  },

  // Chip
  chip_size_small: {
    padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(1.5, 'px')}`,
    borderRadius: `${theme.shape.radius.unit - (theme.shape.radius.unit / 4)}px`
  },

  chip_size_regular: {
    padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(2, 'px')}`,
    borderRadius: `${theme.shape.radius.unit}px`
  },

  chip_size_large: {
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(2.5, 'px')}`,
    borderRadius: `${theme.shape.radius.unit + (theme.shape.radius.unit / 4)}px`
  },

  // Icons
  start: {
    paddingInlineStart: '0px'
  },

  end: {
    paddingInlineEnd: '0px'
  },

  fullWidth: {
    width: '100%'
  },

  // Label
  label: {
    display: 'inline-flex',
    position: 'relative',
    textTransform: 'capitalize',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
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
    lineHeight: '0',

    '& > *': {
      lineHeight: '0 !important'
    }
  },

  // Icon element
  Icon: {
    position: 'relative',
    lineHeight: '0'
  },

  start_size_small: {
    paddingInline: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(0.5, 'px')}`
  },

  start_size_regular: {
    paddingInline: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(1, 'px')}`
  },

  start_size_large: {
    paddingInline: `${theme.methods.space.value(2.75, 'px')} ${theme.methods.space.value(1.25, 'px')}`
  },

  end_size_small: {
    paddingInline: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(1.5, 'px')}`
  },

  end_size_regular: {
    paddingInline: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(2, 'px')}`
  },

  end_size_large: {
    paddingInline: `${theme.methods.space.value(1.25, 'px')} ${theme.methods.space.value(2.75, 'px')}`
  },

  // Chip
  chip_start_size_small: {
    padding: `0 ${theme.methods.space.value(0.75, 'px')}`
  },

  chip_start_size_regular: {
    padding: `0 ${theme.methods.space.value(1, 'px')}`
  },

  chip_start_size_large: {
    padding: `0 ${theme.methods.space.value(1.25, 'px')}`
  },

  chip_end_size_small: {
    padding: `0 ${theme.methods.space.value(0.75, 'px')}`
  },

  chip_end_size_regular: {
    padding: `0 ${theme.methods.space.value(1, 'px')}`
  },

  chip_end_size_large: {
    padding: `0 ${theme.methods.space.value(1.25, 'px')}`
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
    '&.amaui-Surface-root': {
      color: theme.palette.text.default.primary
    }
  },

  disabled_version_outlined: {
    '&.amaui-Surface-root': {
      color: theme.palette.text.default.primary
    }
  },

  disabled_version_filled: {
    '&.amaui-Surface-root': {
      color: theme.palette.text.neutral.primary,
      background: theme.palette.light ? theme.palette.text.divider : theme.palette.text.neutral.quaternary
    }
  }
}), { name: 'amaui-Button' });

export interface IButton extends Omit<ISurface, 'elevation'> {
  size?: ISizeAny;

  fullWidth?: boolean;
  fontSize?: string | number;
  selected?: boolean;
  iconSelected?: IElement;
  start?: IElement;
  startSelected?: IElement;
  end?: IElement;
  endSelected?: IElement;
  elevation?: boolean;
  backgroundOpacity?: number;
  align?: 'start' | 'center' | 'end';
  loading?: boolean;
  loadingLabel?: IElement;
  loadingIcon?: IElement;
  loadingIconPosition?: 'start' | 'center' | 'end';
  fab?: boolean;
  chip?: boolean;
  icon?: boolean;
  focus?: boolean;
  value?: any;
  noIconRootFontSize?: boolean;
  firstLevelChildren?: IElement;
  noFontSize?: boolean;

  disabled?: boolean;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;

  IconWrapperComponent?: IElementReference;

  InteractionProps?: IPropsAny;
  IconWrapperProps?: IPropsAny;
}

const Button: React.FC<IButton> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiButton?.props?.default, ...props_ }), [props_]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Interaction = React.useMemo(() => theme?.elements?.Interaction || InteractionElement, [theme]);

  const RoundProgress = React.useMemo(() => theme?.elements?.RoundProgress || RoundProgressElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = true,
    color: color_ = 'primary',
    version = 'outlined',
    size = 'regular',

    fullWidth,
    fontSize,
    selected,
    iconSelected,
    start: start_,
    startSelected,
    end: end_,
    endSelected,
    elevation = true,
    backgroundOpacity,
    align = 'center',
    loading,
    loadingLabel,
    loadingIcon = <RoundProgress size='small' />,
    loadingIconPosition = 'center',
    fab,
    chip,
    icon,
    focus: focus_,
    value,
    noIconRootFontSize,
    firstLevelChildren,
    noFontSize,

    disabled: disabled_,

    onFocus: onFocus_,
    onBlur: onBlur_,

    IconWrapperComponent = 'span',

    InteractionProps = {},
    IconWrapperProps = {},

    Component = props.href ? 'a' : 'button',

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [focus, setFocus] = React.useState(focus_ !== undefined ? focus_ : false);

  const refs = {
    root: React.useRef<any>(),
    ids: {
      label: React.useId()
    }
  };

  let color = color_;
  let start = (selected && startSelected) || start_;
  let end = (selected && endSelected) || end_;
  const disabled = disabled_ || loading;
  const TypeProps: any = { version: 'l2' };

  if (disabled) color = 'default';

  const styles: any = {
    root: {

    },
    background: {},
    border: {},
    iconRoot: {},
    label: { margin: 0 },
    Icon: { fontSize: '1.0625rem' }
  };

  // Size
  if (size === 'small') {
    if (!noFontSize) styles.Icon.fontSize = '0.9375rem';

    TypeProps.version = 'l3';
  }

  if (size === 'large') {
    if (!noFontSize) styles.Icon.fontSize = '1.375rem';

    TypeProps.version = 'l1';
  }

  if (fontSize !== undefined) {
    if (!noFontSize) styles.Icon.fontSize = fontSize;
  }

  let children_ = children;

  // icon
  if (icon) {
    const iconFontSize = fontSize !== undefined ? 'inherit' : undefined;

    if (!['small', 'regular', 'large'].includes(size as any)) {
      children_ = is('array', children_) ?
        (children_ as any).filter(Boolean).map(
          (item: any, index: number) => is('string', item.type) ?
            React.cloneElement(item, {
              key: index
            }) :
            React.cloneElement(item, {
              key: index,
              size: !noFontSize ? iconFontSize !== undefined ? iconFontSize : (item.props as any).size !== undefined ? (item.props as any).size : size as any / 1.667 : undefined
            } as any)
        ) :
        React.cloneElement(children_ as any, {
          size: !noFontSize ? iconFontSize !== undefined ? iconFontSize : (children_ as any).props?.size !== undefined ? (children_ as any).props.size : size as any / 1.667 : undefined
        });

      styles.root.width = size;
      styles.root.height = size;

      if (!noFontSize) {
        styles.root.fontSize = size as any / 1.667;

        if (!noIconRootFontSize) styles.iconRoot.fontSize = size;
      }
    }
    else {
      children_ = is('array', children_) ?
        (children_ as any).filter(Boolean).map(
          (item: any, index: number) => is('string', item.type) ?
            React.cloneElement(item, {
              key: index
            }) :
            React.cloneElement(item, {
              key: index,
              size: !noFontSize ? iconFontSize !== undefined ? iconFontSize : (children_ as any).props?.size !== undefined ? (children_ as any).props?.size : (size === 'large' ? 'medium' : size) : undefined
            } as any)
        ) :
        React.cloneElement((children_ as any), {
          size: !noFontSize ? iconFontSize !== undefined ? iconFontSize : (children_ as any).props?.size !== undefined ? (children_ as any).props?.size : (size === 'large' ? 'medium' : size) : undefined
        });

      if (!noFontSize) {
        styles.root.fontSize = iconSizeToFontSize(size === 'large' ? 'medium' : size);

        if (!noIconRootFontSize) styles.iconRoot.fontSize = size === 'small' ? 30 : size === 'regular' ? 40 : 50;
      }
    }
  }

  // fab
  if (fab) {
    if (React.Children.count(children_) === 1 && !is('string', children_)) styles.root.minWidth = 'initial';

    if (size === 'small') styles.Icon.fontSize = 18;
    if (size === 'regular') styles.Icon.fontSize = 24;
    if (size === 'large') styles.Icon.fontSize = 30;

    children_ = React.Children.toArray(children_).map((item: any) => React.isValidElement(item) as any ? React.cloneElement(item, { style: styles.Icon }) : item);
  }

  if (fontSize !== undefined) {
    styles.root.fontSize = fontSize;

    styles.iconRoot.fontSize = 'inherit';
  }

  // loading
  if (loading) {
    const iconLoading = React.cloneElement(loadingIcon as any, { color: 'inherit', style: styles.Icon });

    if (loadingLabel) children_ = loadingLabel;
    else if (loadingIconPosition === 'center') {
      children_ = icon ? React.cloneElement(loadingIcon as any, { color: 'inherit', size: size === 'small' ? 18 : size === 'regular' ? 24 : 36 }) : iconLoading;

      styles.label.lineHeight = 0;
    }

    if (loadingIconPosition === 'start') start = iconLoading;
    else if (loadingIconPosition === 'end') end = iconLoading;
  }

  if (disabled) {
    InteractionProps.wave = false;
    InteractionProps.border = false;
    InteractionProps.background = false;

    delete styles.root.color;
    delete styles.label.color;
  }

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined && event.target === refs.root.current && !disabled) setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, [focus_, onFocus_, disabled]);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined && !disabled) setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, [focus_, onBlur_, disabled]);

  const IconElement = (selected && iconSelected) || children_;

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tabIndex={!disabled ? 0 : -1}

      type='button'

      role='button'

      color={color}

      tonal={tonal}

      version={version === 'outlined' ? 'outlined-without-background' : version}

      elevation={(elevation && !disabled && ['filled', 'tonal'].includes(version)) ? 1 : 0}

      backgroundOpacity={backgroundOpacity}

      aria-labelledby={refs.ids.label}

      aria-pressed={selected}

      aria-disabled={disabled}

      disabled={disabled}

      onFocus={onFocus}

      onBlur={onBlur}

      Component={Component}

      className={classNames([
        staticClassName('Button', theme) && [
          `amaui-Button-root`,
          fullWidth && `amaui-Button-full-width`,
          start && `amaui-Button-start`,
          end && `amaui-Button-end`,
          selected && `amaui-Button-selected`,
          loading && `amaui-Button-loading`,
          focus && `amaui-Button-focus`,
          disabled && `amaui-Button-disabled`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        classes[`version_${version}`],
        classes[`color_${color}`],
        (elevation && !disabled && ['filled', 'tonal'].includes(version)) && classes.elevation,
        start && classes.start,
        end && classes.end,
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

      {...other}
    >
      <Interaction
        border={false}

        pulse={focus}

        selected={selected}

        disabled={disabled}

        {...InteractionProps}
      />

      {firstLevelChildren}

      {start && (
        <span
          className={classNames([
            staticClassName('Button', theme) && [
              'amaui-Button-icon',
              'amaui-Button-start'
            ],

            classes.Icon,
            classes.start,
            classes[`start_size_${size}`],
            chip && classes[`chip_start_size_${size}`]
          ])}
        >
          {React.cloneElement(start as any, { style: styles.Icon })}
        </span>
      )}

      {icon ? (
        <IconWrapperComponent
          {...IconWrapperProps}

          id={refs.ids.label}

          className={classNames([
            staticClassName('Button', theme) && [
              'amaui-Button-icon-root'
            ],

            IconWrapperProps?.className,
            classes.iconRoot
          ])}

          style={{
            ...styles.iconRoot,

            ...IconWrapperProps?.style
          }}
        >
          {IconElement}
        </IconWrapperComponent>
      ) : (
        <Type
          {...TypeProps}

          id={refs.ids.label}

          Component='span'

          className={classNames([
            staticClassName('Button', theme) && [
              'amaui-Button-label'
            ],

            TypeProps?.className,
            classes.label,
            classes[`label_size_${size}`],
            classes[`align_${align}`]
          ])}

          style={{
            ...styles.label,

            ...TypeProps?.style
          }}
        >
          {React.Children.toArray(children_).map((item_: any, index: number) => {
            const item = (selected && item_.type?.displayName?.includes('amaui-Icon') && iconSelected) ? iconSelected : item_;

            if (is('simple', item)) return item;

            return React.cloneElement((selected && item.type?.displayName?.includes('amaui-Icon') && iconSelected) ? iconSelected : item, {
              key: index
            });
          })}
        </Type>
      )}

      {end && (
        <span
          className={classNames([
            staticClassName('Button', theme) && [
              'amaui-Button-icon',
              'amaui-Button-end'
            ],

            classes.Icon,
            classes.end,
            classes[`end_size_${size}`],
            chip && classes[`chip_end_size_${size}`]
          ])}
        >
          {React.cloneElement(end as any, { style: styles.Icon })}
        </span>
      )}
    </Surface>
  );
});

Button.displayName = 'amaui-Button';

export default Button;
