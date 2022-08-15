import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';
import Interaction from '../Interaction';
import Type from '../Type';

const overflow = {
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};

const useStyle = style(theme => ({
  wrapper: {
    width: '100%'
  },

  root: {
    // Reset
    margin: 0,
    padding: 0,
    '-webkit-appearance': 'none',
    appearance: 'none',
    border: 'none',
    background: 'transparent',
    textDecoration: 'none',
    color: 'inherit',

    position: 'relative',
    display: 'inline-flex',
    width: '100%'
  },

  // Color
  wrapper_color_default: { background: theme.palette.background.default.primary },

  wrapper_color_neutral: { background: theme.palette.color.neutral.main },

  wrapper_color_primary: { background: theme.palette.color.primary.main },

  wrapper_color_secondary: { background: theme.palette.color.secondary.main },

  wrapper_color_tertiary: { background: theme.palette.color.tertiary.main },

  wrapper_color_quaternary: { background: theme.palette.color.quaternary.main },

  wrapper_color_info: { background: theme.palette.color.info.main },

  wrapper_color_success: { background: theme.palette.color.success.main },

  wrapper_color_warning: { background: theme.palette.color.warning.main },

  wrapper_color_error: { background: theme.palette.color.error.main },

  // Tonal
  wrapper_tonal_color_neutral: { background: theme.palette.color.neutral[theme.palette.light ? 95 : 10] },

  wrapper_tonal_color_primary: { background: theme.palette.color.primary[theme.palette.light ? 95 : 10] },

  wrapper_tonal_color_secondary: { background: theme.palette.color.secondary[theme.palette.light ? 95 : 10] },

  wrapper_tonal_color_tertiary: { background: theme.palette.color.tertiary[theme.palette.light ? 95 : 10] },

  wrapper_tonal_color_quaternary: { background: theme.palette.color.quaternary[theme.palette.light ? 95 : 10] },

  wrapper_tonal_color_info: { background: theme.palette.color.info[theme.palette.light ? 95 : 10] },

  wrapper_tonal_color_success: { background: theme.palette.color.success[theme.palette.light ? 95 : 10] },

  wrapper_tonal_color_warning: { background: theme.palette.color.warning[theme.palette.light ? 95 : 10] },

  wrapper_tonal_color_error: { background: theme.palette.color.error[theme.palette.light ? 95 : 10] },

  // Color
  default: { color: theme.palette.text.default.primary },

  neutral: { color: theme.methods.palette.color.value('neutral', 70, true) },

  primary: { color: theme.methods.palette.color.value('primary', 70, true) },

  secondary: { color: theme.methods.palette.color.value('secondary', 70, true) },

  tertiary: { color: theme.methods.palette.color.value('tertiary', 70, true) },

  quaternary: { color: theme.methods.palette.color.value('quaternary', 70, true) },

  info: { color: theme.methods.palette.color.value('info', 70, true) },

  success: { color: theme.methods.palette.color.value('success', 70, true) },

  warning: { color: theme.methods.palette.color.value('warning', 70, true) },

  error: { color: theme.methods.palette.color.value('error', 70, true) },

  shape_round_position_both: {
    borderRadius: '114vh'
  },

  shape_round_position_start: {
    borderEndStartRadius: '114vh',
    borderStartStartRadius: '114vh'
  },

  shape_round_position_end: {
    borderStartEndRadius: '114vh',
    borderEndEndRadius: '114vh'
  },

  shape_round_position_none: {
    borderRadius: 0
  },

  button: {
    cursor: 'pointer',
    userSelect: 'none'
  },

  small: {
    padding: `${theme.methods.space.value('sm') * 0.5}px ${theme.methods.space.value('rg') * 0.75}px`
  },

  regular: {
    padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg', 'px')}`
  },

  large: {
    padding: `${theme.methods.space.value('sm') * 1.5}px ${theme.methods.space.value('rg') * 1.25}px`
  },

  menu_size_small: {
    padding: `${theme.methods.space.value('sm') * 0.5}px ${theme.methods.space.value('rg') * 0.75}px`
  },

  menu_size_regular: {
    padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg') * 0.75}px`
  },

  menu_size_large: {
    padding: `${theme.methods.space.value('sm') * 1.5}px ${theme.methods.space.value('rg') * 0.75}px`
  },

  inset_size_small: {
    paddingInlineStart: `${56 + theme.methods.space.value('rg') * 0.75}px`
  },

  inset_size_regular: {
    paddingInlineStart: `${56 + theme.methods.space.value('rg')}px`
  },

  inset_size_large: {
    paddingInlineStart: `${56 + theme.methods.space.value('rg') * 1.25}px`
  },

  menu_inset_size_small: {
    paddingInlineStart: `48px`
  },

  menu_inset_size_regular: {
    paddingInlineStart: `48px`
  },

  menu_inset_size_large: {
    paddingInlineStart: `48px`
  },

  middle: {
    position: 'relative',
    display: 'inline-flex',
    flex: '1 1 auto',
    width: '100%',
    flexDirection: 'column',

    // Fix for white-space: nowrap & flex: 1 1 auto
    minWidth: 0,
    alignSelf: 'center'
  },

  menu_middle: {
    marginInlineEnd: '44px'
  },

  text: {
    ...overflow,
    textAlign: 'start'
  },

  text_primary: {
    color: theme.palette.text.default.primary
  },

  text_secondary: {
    color: theme.palette.text.default.secondary
  },

  text_tertiary: {
    color: theme.palette.text.default.tertiary
  },

  aside: {
    position: 'relative',
    display: 'inline-flex',
    flex: '0 0 auto',
    alignSelf: 'flex-start'
  },

  align_start: {
    alignSelf: 'flex-start'
  },

  align_center: {
    alignSelf: 'center'
  },

  align_end: {
    alignSelf: 'flex-end'
  },

  start_icon: {
    paddingInline: '8px 24px'
  },

  start_button: {
    paddingInline: '0 16px'
  },

  start_switch: {
    paddingInline: '0 12px'
  },

  menu_start_icon: {
    paddingInlineEnd: '12px'
  },

  menu_start_button: {
    paddingInlineEnd: '4px'
  },

  menu_start_switch: {
    paddingInlineEnd: '2px'
  },

  end_icon: {
    paddingInlineStart: '12px',
    paddingInlineEnd: '24px'
  },

  end_button: {
    paddingInlineStart: '4px',
    paddingInlineEnd: '16px'
  },

  end_switch: {
    paddingInlineStart: '8px',
    paddingInlineEnd: '8px'
  },

  menu_end_icon: {
    paddingInlineStart: '12px'
  },

  menu_end_button: {
    paddingInlineStart: '4px'
  },

  menu_end_switch: {
    paddingInlineStart: '2px'
  },

  middle_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    cursor: 'default'
  }
}), { name: 'AmauiListItem' });

const ListItem = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiListItem?.props?.default }), [props_]);

  const [focus, setFocus] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const { classes } = useStyle(props);

  const {
    menu,
    inset,
    primary,
    secondary,
    tertiary,
    selected,
    tonal,
    color = 'default',
    colorSelected = props.color,
    start,
    end,
    startAlign = 'start',
    endAlign = 'center',
    size = 'regular',
    href,
    button,
    shape = 'round',
    shapePosition = 'none',
    Component = 'li',
    RootComponent: RootComponent_ = 'div',
    InteractionProps = {},
    PrimaryProps = {},
    SecondaryProps = {},
    TertiaryProps = {},
    disabled,

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {},
    icon: { color: 'default' },
    wrapper: {},
    primary: {},
    secondary: {},
    tertiary: {}
  };

  let RootComponent = RootComponent_;

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && event.target === refs.root.current) setFocus(true);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) setFocus(false);
  }, []);

  if (button) {
    if (other.tabIndex === undefined && !disabled) other.tabIndex = 0;
  }

  if (href) RootComponent = 'a';

  let colorToUse = selected ? colorSelected : color;

  const palette = !theme.palette.color[color] && theme.methods.color(color);

  if (!classes[colorToUse] && color !== 'default') {
    styles.root.color = theme.methods.palette.color.value(colorToUse, 70, true, palette);

    styles.wrapper.background = !tonal ? palette.main : palette[theme.palette.light ? 95 : 10];
  }

  if (!tonal) {
    if (color !== 'default') {
      styles.icon.color = styles.root.color = styles.primary.color = theme.methods.palette.color.text((palette || theme.palette.color[color] as any).main, true, 'light', 'primary');
      styles.secondary.color = theme.methods.palette.color.text((palette || theme.palette.color[color] as any).main, true, 'light', 'secondary');
      styles.tertiary.color = theme.methods.palette.color.text((palette || theme.palette.color[color] as any).main, true, 'light', 'tertiary');
    }
  }

  if (menu && color === 'default') {
    if (!theme.palette.light) styles.wrapper.background = theme.palette.color.neutral[10];
  }

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('ListItem', theme) && [
          'AmauiListItem-wrapper',
          `AmauiListItem-color-${!classes[colorToUse] ? 'new' : colorToUse}`,
          tonal && `AmauiListItem-tonal`
        ],

        className,
        classes.wrapper,
        classes[`wrapper_color_${color}`],
        tonal && classes[`wrapper_tonal_color_${color}`]
      ])}

      style={styles.wrapper}
    >
      <RootComponent
        ref={refs.root}

        href={href}

        onFocus={onFocus}
        onBlur={onBlur}

        className={classNames([
          staticClassName('ListItem', theme) && [
            'AmauiListItem-root',
            `AmauiListItem-size-${size}`,
            `AmauiListItem-color-${!classes[colorToUse] ? 'new' : colorToUse}`,
            `AmauiListItem-shape-${shape}-position-${shapePosition}`,
            menu && `AmauiListItem-menu`,
            tonal && `AmauiListItem-tonal`,
            disabled && `AmauiListItem-disabled`
          ],

          classes.root,
          classes[size],
          classes[selected ? colorSelected : color],
          classes[`shape_${shape}_position_${shapePosition}`],
          inset && !start && classes[`inset_size_${size}`],
          menu && [
            classes[`menu_size_${size}`],
            inset && classes[`menu_inset_size_${size}`]
          ],
          (href || button) && classes.button,
          disabled && classes.disabled
        ])}

        style={{
          ...style,

          ...styles.root
        }}

        disabled={disabled}

        {...other}
      >
        {(href || button) && (
          <Interaction
            border={false}
            pulse={focus}
            selected={selected}

            {...InteractionProps}
          />
        )}

        {start && (
          <span
            className={classNames([
              staticClassName('ListItem', theme) && [
                'AmauiListItem-aside',
                'AmauiListItem-start',
                `AmauiListItem-start-${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(start?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(start?.type?.displayName) ? 'switch' : 'icon'}`,
                menu && 'AmauiListItem-menu'
              ],

              classes.aside,
              classes.start,
              classes[`align_${startAlign}`],
              classes[`${menu ? 'menu_' : ''}start_${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(start?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(start?.type?.displayName) ? 'switch' : 'icon'}`]
            ])}
          >
            {is('string', start) ? start : React.cloneElement(start, {
              color: start.props?.color || styles.icon.color,

              size: start.props?.size || ['AmauiSwitch'].includes(start?.type?.displayName) ? 'small' : 'regular',

              disabled
            })}
          </span>
        )}

        <span
          className={classNames([
            staticClassName('ListItem', theme) && [
              'AmauiListItem-middle',
              menu && 'AmauiListItem-menu',
              disabled && 'AmauiListItem-disabled'
            ],

            classes.middle,
            menu && classes.menu_middle,
            disabled && classes.middle_disabled
          ])}
        >
          {primary !== undefined && (
            is('simple', primary) ? (
              <Type
                {...PrimaryProps}

                version={menu ? 'b2' : 'b1'}

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'AmauiListItem-text',
                    'AmauiListItem-text-primary'
                  ],

                  classes.text,
                  classes.text_primary,
                  PrimaryProps?.className
                ])}

                style={styles.primary}
              >
                {primary}
              </Type>
            ) : primary
          )}

          {secondary !== undefined && (
            is('simple', secondary) ? (
              <Type
                {...SecondaryProps}

                version='b2'

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'AmauiListItem-text',
                    'AmauiListItem-text-secondary'
                  ],

                  classes.text,
                  classes.text_secondary,
                  SecondaryProps?.className
                ])}

                style={styles.secondary}
              >
                {secondary}
              </Type>
            ) : secondary
          )}

          {tertiary !== undefined && (
            is('simple', tertiary) ? (
              <Type
                {...TertiaryProps}

                version='b2'

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'AmauiListItem-text',
                    'AmauiListItem-text-tertiary'
                  ],

                  classes.text,
                  classes.text_tertiary,
                  TertiaryProps?.className
                ])}

                style={styles.tertiary}
              >
                {tertiary}
              </Type>
            ) : tertiary
          )}
        </span>

        {end && (
          <span
            className={classNames([
              staticClassName('ListItem', theme) && [
                'AmauiListItem-aside',
                'AmauiListItem-end',
                `AmauiListItem-end-${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(end?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(end?.type?.displayName) ? 'switch' : 'icon'}`,
                menu && 'AmauiListItem-menu'
              ],

              classes.aside,
              classes.end,
              classes[`align_${endAlign}`],
              classes[`${menu ? 'menu_' : ''}end_${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(end?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(end?.type?.displayName) ? 'switch' : 'icon'}`]
            ])}
          >
            {is('string', end) ? end : React.cloneElement(end, {
              color: end.props?.color || styles.icon.color,

              size: end.props?.size || ['AmauiSwitch'].includes(start?.type?.displayName) ? 'small' : 'regular',

              disabled
            })}
          </span>
        )}
      </RootComponent>
    </Component>
  );
});

ListItem.displayName = 'AmauiListItem';

export default ListItem;
