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
    width: '100%',
    background: theme.palette.background.default.primary
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
  default: { color: theme.methods.palette.color.value('default', 70, true) },

  neutral: { color: theme.methods.palette.color.value('neutral', 70, true) },

  primary: { color: theme.methods.palette.color.value('primary', 70, true) },

  secondary: { color: theme.methods.palette.color.value('secondary', 70, true) },

  tertiary: { color: theme.methods.palette.color.value('tertiary', 70, true) },

  quaternary: { color: theme.methods.palette.color.value('quaternary', 70, true) },

  info: { color: theme.methods.palette.color.value('info', 70, true) },

  success: { color: theme.methods.palette.color.value('success', 70, true) },

  warning: { color: theme.methods.palette.color.value('warning', 70, true) },

  error: { color: theme.methods.palette.color.value('error', 70, true) },

  shape_rounded: {
    borderRadius: '150px'
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

  middle: {
    display: 'inline-flex',
    flex: '1 1 auto',
    width: '100%',
    flexDirection: 'column',
    // Fix for white-space: nowrap & flex: 1 1 auto
    minWidth: 0,
    alignSelf: 'center'
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

  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
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
    primary,
    secondary,
    tertiary,
    selected,
    color = 'default',
    colorSelected = 'primary',
    start,
    end,
    startAlign = 'start',
    endAlign = 'center',
    size = 'regular',
    href,
    button,
    shape = 'rounded',
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
    root: {}
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

  if (!classes[colorToUse]) {
    const palette = theme.methods.color(colorToUse);

    styles.root.color = theme.methods.palette.color.value(colorToUse, 70, true, palette);
  }

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('ListItem', theme) && [
          'AmauiListItem-wrapper'
        ],

        className,
        classes.wrapper
      ])}
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
            disabled && `AmauiListItem-disabled`
          ],

          classes.root,
          classes[size],
          classes[selected ? colorSelected : color],
          classes[`shape_${shape}`],
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
                `AmauiListItem-start-${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(start?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(start?.type?.displayName) ? 'switch' : 'icon'}`
              ],

              classes.aside,
              classes.start,
              classes[`align_${startAlign}`],
              classes[`start_${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(start?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(start?.type?.displayName) ? 'switch' : 'icon'}`]
            ])}
          >
            {is('string', start) ? start : React.cloneElement(start, {
              size: ['AmauiSwitch'].includes(start?.type?.displayName) ? 'small' : 'regular',

              disabled
            })}
          </span>
        )}

        <span
          className={classNames([
            staticClassName('ListItem', theme) && [
              'AmauiListItem-middle'
            ],

            classes.middle
          ])}
        >
          {primary !== undefined && (
            is('simple', primary) ? (
              <Type
                {...PrimaryProps}

                version='b1'

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'AmauiListItem-text',
                    'AmauiListItem-text-primary'
                  ],

                  classes.text,
                  classes.text_primary,
                  PrimaryProps?.className
                ])}
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
                `AmauiListItem-end-${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(end?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(end?.type?.displayName) ? 'switch' : 'icon'}`
              ],

              classes.aside,
              classes.end,
              classes[`align_${endAlign}`],
              classes[`end_${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(end?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(end?.type?.displayName) ? 'switch' : 'icon'}`]
            ])}
          >
            {is('string', end) ? end : React.cloneElement(end, {
              size: ['AmauiSwitch'].includes(start?.type?.displayName) ? 'small' : 'regular',

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
