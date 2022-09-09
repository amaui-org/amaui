import React from 'react';

import { AmauiTheme, classNames, style, useAmauiTheme } from '@amaui/style-react';

import { iconSizeToFontSize, staticClassName } from '../utils';

export const rtl_icons = [
  'ArrowForwardIos', 'ArrowBackIos', 'ArrowBack', 'ArrowForward', 'ArrowLeft', 'ArrowRight', 'AssignmentReturn', 'CallMade', 'CallMissedOutgoing', 'ChevronLeft', 'ChevronRight', 'DeviceUnknown', 'FeaturedPlayList', 'FlightLand', 'FormatIndentIncrease', 'Functions', 'Input', 'Label', 'LastPage', 'LiveHelp', 'NavigateBefore', 'Note', 'QueueMusic', 'ReplyAll', 'ShortText', 'StarHalf', 'Toc', 'Undo', 'WrapText', 'FirstPage', 'LastPage', 'NavigateNext', 'NavigateBefore'
];

const useStyle = style(theme => ({
  root: {
    userSelect: 'none',
    display: 'inline-flex',
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
    name,
    short_name,
    tonal,
    tone = '60',
    color: color_ = 'inherit',
    size = 'regular',
    Component = 'svg',
    disabled,

    className,
    style,

    children,

    ...other
  } = props;

  const [rtl, setRtl] = React.useState(theme.direction === 'rtl');

  const { classes } = useStyle(props);

  React.useEffect(() => {
    // Update rtl based on theme value
    const method = (update, themeNew: AmauiTheme) => setRtl(themeNew.direction === 'rtl');

    theme.subscriptions.update.subscribe(method);

    return () => {
      theme.subscriptions.update.unsubscribe(method);
    };
  }, []);

  const fontSize = iconSizeToFontSize(size);

  const isRtlIcon = rtl_icons.includes(short_name);

  let color = color_;

  if (tonal) {
    const palette: any = color === 'default' ? theme.palette.color.neutral : !theme.palette.color[color] ? theme.methods.color(color) : theme.palette.color[color];

    color = theme.methods.palette.color.value(color, tone, true, palette);
  }
  else color = (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any)?.main || color);

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Icon', theme) && [
          'AmauiIcon-root',
          `AmauiIcon-color-${!theme.palette.color[color] && !['themed', 'inverse', 'default', 'inherit'].includes(color) ? 'new' : color}`,
          `AmauiIcon-size-${size}`,
          tonal && `AmauiButton-tonal`,
          (rtl && isRtlIcon) ? 'AmauiIcon-direction-rtl' : 'AmauiIcon-direction-ltr',
          disabled && `AmauiIcon-disabled`
        ],

        className,
        classes.root,
        (rtl && isRtlIcon) && classes.rtl,
        disabled && classes.disabled
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

Icon.displayName = 'AmauiIcon';

export default Icon;
