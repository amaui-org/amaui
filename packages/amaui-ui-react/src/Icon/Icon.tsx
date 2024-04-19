import React from 'react';

import { AmauiTheme, classNames, style as styleMethod, TTone, useAmauiTheme } from '@amaui/style-react';

import { iconSizeToFontSize, staticClassName } from '../utils';
import { IBaseElement, ITonal, IColor } from '../types';

export const rtl_icons = [
  'ArrowForwardIos', 'ArrowBackIos', 'ArrowBack', 'ArrowForward', 'ArrowLeft', 'ArrowRight', 'AssignmentReturn', 'CallMade', 'CallMissedOutgoing', 'ChevronLeft', 'ChevronRight', 'DeviceUnknown', 'FeaturedPlayList', 'FlightLand', 'FormatIndentIncrease', 'Functions', 'Input', 'Label', 'LastPage', 'LiveHelp', 'NavigateBefore', 'Note', 'QueueMusic', 'ReplyAll', 'ShortText', 'StarHalf', 'Toc', 'Undo', 'WrapText', 'FirstPage', 'LastPage', 'NavigateNext', 'NavigateBefore'
];

const useStyle = styleMethod(theme => ({
  root: {
    userSelect: 'none',
    display: 'inline-flex',
    flexShrink: '0',
    color: 'inherit',
    fill: 'currentColor',
    pointerEvents: 'none',

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
}), { name: 'amaui-Icon' });

export interface IIcon extends IBaseElement {
  tonal?: ITonal;
  color?: IColor;
  size?: 'very small' | 'small' | 'regular' | 'medium' | 'large' | 'very large' | number;

  tone?: TTone;

  viewBox?: string;

  name?: string;
  short_name?: string;

  noRtl?: boolean;

  disabled?: boolean;
}

const Icon: React.FC<IIcon> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiIcon?.props?.default, ...props_ }), [props_]);

  const {
    viewBox = '0 0 24 24',

    name,
    short_name,

    tonal = true,
    tone = 60,
    color: color_ = 'inherit',
    size = 'regular',

    noRtl,

    disabled,

    Component = 'svg',

    className,
    style,

    children,

    ...other
  } = props;

  const [rtl, setRtl] = React.useState(theme.direction === 'rtl');

  const { classes } = useStyle();

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

  let color: any = color_;

  if (!['unset'].includes(color)) {
    if (tonal) {
      const palette: any = color === 'default' ? theme.palette.color.neutral : !theme.palette.color[color] ? theme.methods.color(color) : theme.palette.color[color];

      color = theme.methods.palette.color.value(color as any, tone, true, palette);
    }
    else color = (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any)?.main || color);
  }
  else {
    color = '';
  }

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Icon', theme) && [
          'amaui-Icon-root',
          `amaui-Icon-size-${size}`,
          (!noRtl && rtl && isRtlIcon) ? 'amaui-Icon-direction-rtl' : 'amaui-Icon-direction-ltr',
          disabled && `amaui-Icon-disabled`
        ],

        className,
        classes.root,
        (!noRtl && rtl && isRtlIcon) && classes.rtl,
        disabled && classes.disabled
      ])}

      // Default '0 0 24 24' for material icons
      viewBox={viewBox}

      // Prevents svg oversize on load
      width='1em'

      height='1em'

      focusable='false'

      aria-hidden

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

Icon.displayName = 'amaui-Icon';

export default Icon;
