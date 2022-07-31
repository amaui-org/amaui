import React from 'react';

import { AmauiTheme, classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

export const rtl_icons = [
  'arrow_back_ios', 'arrow_left', 'assignment_return', 'call_made', 'call_missed_outgoing', 'chevron_left', 'device_unknown', 'featured_play_list', 'flight_land', 'format_indent_increase', 'functions', 'input', 'label', 'last_page', 'live_help', 'navigate_before', 'note', 'queue_music', 'reply_all', 'short_text', 'star_half', 'toc', 'undo', 'wrap_text'
];

const useStyle = style(theme => ({
  root: {
    userSelect: 'none',
    display: 'inline-block',
    flexShrink: '0',
    color: 'inherit',
    fill: 'currentcolor',

    // Make width and height in em unit
    // means it will scale based on parent's font-size
    // so entire svg will scale based on font-size only
    width: '1em',
    height: '1em',

    transition: theme.methods.transitions.make(['fill', 'transform', 'filter'], { duration: 'sm', timing_function: 'standard' })
  },
  rtl: {
    transform: 'scaleX(-1)',
    filter: 'FlipH'
  },
  disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'AmauiIcon' });

const Icon = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiIcon?.props?.default }), [props_]);

  const {
    viewBox = '0 0 24 24',
    size,
    name,
    short_name,
    tonal,
    color: color_ = 'inherit',
    tone = '30',
    Component = 'svg',
    rtl: rtl_,
    disabled,

    className,
    style,

    children,

    ...other
  } = props;

  const [rtl, setRtl] = React.useState(rtl_);

  const { classes } = useStyle(props);

  React.useEffect(() => {
    // Update rtl based on theme value
    const method = (update, theme_: AmauiTheme) => {
      if (theme_.options.rule.rtl !== rtl) setRtl(!rtl);
    };

    theme.subscriptions.update.subscribe(method);

    return () => {
      theme.subscriptions.update.unsubscribe(method);
    };
  }, []);

  React.useEffect(() => {
    if (rtl_ !== rtl) setRtl(rtl_);
  }, [rtl_]);

  let fontSize = '24px';

  if (size === 'very small') fontSize = '12px';
  else if (size === 'small') fontSize = '18px';
  else if (size === 'regular') fontSize = '24px';
  else if (size === 'medium') fontSize = '30px';
  else if (size === 'large') fontSize = '36px';
  else if (size === 'very large') fontSize = '42px';
  else if (size !== undefined) fontSize = size;

  const isRtlIcon = rtl_icons.includes(short_name);

  let color = color_;

  if (tonal) {
    const palette = theme.palette.color[color_] && theme.methods.color(color_);

    color = theme.methods.palette.color.value(color_, tone, true, palette);
  }
  else color = (theme.palette.color[color_] as any)?.main || color_;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Icon', theme) && [
          'AmauiIcon-root',
          `AmauiIcon-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          `AmauiIcon-size-${size}`,
          tonal && `AmauiButton-tonal`,
          (rtl && isRtlIcon) && 'AmauiIcon-rtl',
          disabled && `AmauiIcon-disabled`
        ],

        classes.root,
        className,
        disabled && classes.disabled,
        (rtl && isRtlIcon) && classes.rtl
      ])}

      // Default '0 0 24 24' for material icons
      viewBox={viewBox}

      // Prevents svg oversize on load
      width='1em'
      height='1em'

      style={{
        // Prevents svg fill update on load
        fill: 'currentcolor',

        color,
        fontSize,

        // Let styles override preset style
        ...style,
      }}

      {...other}
    >
      {children}
    </Component>
  );
});

export default Icon;
