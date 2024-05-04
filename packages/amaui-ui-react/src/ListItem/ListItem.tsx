import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SurfaceElement from '../Surface';
import InteractionElement from '../Interaction';
import TypeElement from '../Type';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IColor, IElement, ISize, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => {
  const overflow = {
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  return {
    wrapper: {
      width: '100%'
    },

    root: {
      // Reset
      margin: '0',
      padding: '0',
      '-webkit-appearance': 'none',
      appearance: 'none',
      border: 'none',
      textDecoration: 'none',
      color: 'inherit',
      boxSizing: 'border-box',

      position: 'relative',
      display: 'inline-flex',
      width: '100%'
    },

    shape_round_position_both: {
      borderRadius: theme.methods.shape.radius.value(40, 'px')
    },

    shape_round_position_start: {
      borderEndStartRadius: theme.methods.shape.radius.value(40, 'px'),
      borderStartStartRadius: theme.methods.shape.radius.value(40, 'px')
    },

    shape_round_position_end: {
      borderStartEndRadius: theme.methods.shape.radius.value(40, 'px'),
      borderEndEndRadius: theme.methods.shape.radius.value(40, 'px')
    },

    shape_round_position_none: {
      borderRadius: '0'
    },

    button: {
      cursor: 'pointer',
      userSelect: 'none'
    },

    size_small: {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1.5, 'px')}`,
      minHeight: '24px'
    },

    size_regular: {
      padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(2, 'px')}`,
      minHeight: '40px'
    },

    size_large: {
      padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(2.5, 'px')}`,
      minHeight: '56px'
    },

    menuItem_size_small: {
      padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(1.5, 'px')}`
    },

    menuItem_size_regular: {
      padding: `${theme.methods.space.value(0.75, 'px')} ${theme.methods.space.value(2, 'px')}`
    },

    menuItem_size_large: {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(2.5, 'px')}`
    },

    inset_size_small: {
      paddingInlineStart: `${(56 + theme.methods.space.value('rg')) * 0.75}px`
    },

    inset_size_regular: {
      paddingInlineStart: `${56 + theme.methods.space.value('rg')}px`
    },

    inset_size_large: {
      paddingInlineStart: `${(56 + theme.methods.space.value('rg')) * 1.25}px`
    },

    menuItem_inset_size_small: {
      paddingInlineStart: theme.methods.space.value(7, 'px')
    },

    menuItem_inset_size_regular: {
      paddingInlineStart: theme.methods.space.value(7, 'px')
    },

    menuItem_inset_size_large: {
      paddingInlineStart: theme.methods.space.value(7, 'px')
    },

    middle: {
      position: 'relative',
      display: 'inline-flex',
      flex: '1 1 auto',
      width: '100%',
      flexDirection: 'column',

      // Fix for white-space: nowrap & flex: 1 1 auto
      minWidth: '0',
      alignSelf: 'center'
    },

    menuItem_middle: {
      marginInlineEnd: '44px'
    },

    text: {
      ...overflow,
      whiteSpace: 'pre-wrap',
      textAlign: 'start'
    },

    text_primary: {
      opacity: '1'
    },

    text_primary_weight: {
      fontWeight: '500'
    },

    text_secondary: {
      opacity: theme.palette.visual_contrast.default.opacity.primary
    },

    text_tertiary: {
      opacity: theme.palette.visual_contrast.default.opacity.secondary
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
      paddingInline: `0 ${theme.methods.space.value(1.5, 'px')}`
    },

    start_button: {
      paddingInline: `0 ${theme.methods.space.value(1.5, 'px')}`
    },

    start_switch: {
      paddingInline: `0 ${theme.methods.space.value(1.5, 'px')}`
    },

    menuItem_start_icon_size_small: {
      paddingInlineEnd: theme.methods.space.value(1.5, 'px')
    },

    menuItem_start_icon_size_regular: {
      paddingInlineEnd: theme.methods.space.value(2, 'px')
    },

    menuItem_start_icon_size_large: {
      paddingInlineEnd: theme.methods.space.value(2.5, 'px')
    },

    menuItem_start_button_size_small: {
      paddingInlineEnd: theme.methods.space.value(1.5, 'px')
    },

    menuItem_start_button_size_regular: {
      paddingInlineEnd: theme.methods.space.value(2, 'px')
    },

    menuItem_start_button_size_large: {
      paddingInlineEnd: theme.methods.space.value(2.5, 'px')
    },

    menuItem_start_switch_size_small: {
      paddingInlineEnd: theme.methods.space.value(1.5, 'px')
    },

    menuItem_start_switch_size_regular: {
      paddingInlineEnd: theme.methods.space.value(2, 'px')
    },

    menuItem_start_switch_size_large: {
      paddingInlineEnd: theme.methods.space.value(2.5, 'px')
    },

    end_icon: {
      paddingInlineStart: theme.methods.space.value(1.5, 'px'),
      paddingInlineEnd: theme.methods.space.value(1, 'px')
    },

    end_button: {
      paddingInlineStart: theme.methods.space.value(1.5, 'px'),
      paddingInlineEnd: '0'
    },

    end_switch: {
      paddingInlineStart: theme.methods.space.value(1.5, 'px'),
      paddingInlineEnd: '0'
    },

    menuItem_end_icon: {
      paddingInlineStart: theme.methods.space.value(1.5, 'px')
    },

    menuItem_end_button: {
      paddingInlineStart: theme.methods.space.value(1.5, 'px')
    },

    menuItem_end_switch: {
      paddingInlineStart: theme.methods.space.value(1.5, 'px')
    },

    middle_disabled: {
      opacity: theme.palette.visual_contrast.default.opacity.disabled
    },

    noPadding: {
      padding: '0px'
    },

    noBackground: {
      '&.amaui-Surface-root': {
        background: 'none'
      }
    },

    disabled: {
      pointerEvents: 'none',
      userSelect: 'none',
      cursor: 'default'
    }
  };
}, { name: 'amaui-ListItem' });

export interface IListItem extends ISurface {
  colorSelected?: IColor;

  inset?: boolean;
  primary?: IElement;
  secondary?: IElement;
  tertiary?: IElement;
  preselected?: boolean;
  selected?: boolean;
  start?: IElement;
  startAlign?: 'start' | 'center' | 'end';
  end?: IElement;
  endAlign?: 'start' | 'center' | 'end';
  size?: ISize;
  noPadding?: boolean;
  href?: string;
  button?: boolean;
  shape?: 'round';
  shapePosition?: 'both' | 'start' | 'end' | 'none';
  footer?: IElement;
  tabIndex?: string | number;
  menuItem?: boolean;
  interaction?: boolean;
  noBackground?: boolean;
  noOutline?: boolean;
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<any>) => any;
  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;
  onMouseEnter?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;
  onClose?: () => any;

  RootComponent?: IElementReference;

  WrapperProps?: IPropsAny;
  RootProps?: IPropsAny;
  InteractionProps?: IPropsAny;
  PrimaryProps?: IPropsAny;
  SecondaryProps?: IPropsAny;
  TertiaryProps?: IPropsAny;
  MainProps?: IPropsAny;
  AsideProps?: IPropsAny;
  AsideStartProps?: IPropsAny;
  AsideEndProps?: IPropsAny;
}

const ListItem: React.FC<IListItem> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiListItem?.props?.default, ...props_ }), [props_]);

  const Interaction = React.useMemo(() => theme?.elements?.Interaction || InteractionElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = true,
    color = 'default',
    colorSelected = props.color,

    inset,
    primary = props.children,
    secondary,
    tertiary,
    preselected,
    selected,
    start,
    startAlign = props.menuItem ? 'center' : 'start',
    end,
    endAlign = 'center',
    size = 'regular',
    noPadding,
    href,
    button,
    shape = 'round',
    shapePosition = 'none',
    menuItem,
    footer,
    tabIndex,
    interaction,
    noOutline,
    noBackground,
    disabled,

    onClick,
    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    onClose: onClose_,

    RootComponent: RootComponent_ = 'div',

    WrapperProps,
    RootProps,
    InteractionProps,
    PrimaryProps,
    SecondaryProps,
    TertiaryProps,
    MainProps,
    AsideProps,
    AsideStartProps,
    AsideEndProps,

    Component = 'li',

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(),
    props: React.useRef<any>(),
    ids: {
      primary: React.useId(),
      secondary: React.useId()
    }
  };

  refs.props.current = props;

  const styles: any = {
    root: {

    },
    icon: { color: 'default' },
    wrapper: {},
    primary: {},
    secondary: {},
    tertiary: {}
  };

  let RootComponent = RootComponent_;

  if (href) RootComponent = 'a';

  const colorToUse = selected ? colorSelected : color;

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else if (ref?.current) ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={colorToUse}

      tabIndex={tabIndex !== undefined ? tabIndex : (button && !disabled) ? 0 : undefined}

      aria-labelledby={refs.ids.primary}

      aria-describedby={refs.ids.secondary}

      aria-selected={selected}

      Component={Component}

      {...WrapperProps}

      className={classNames([
        staticClassName('ListItem', theme) && [
          'amaui-ListItem-wrapper'
        ],

        WrapperProps?.className,
        className,
        classes.wrapper,
        noBackground && classes.noBackground
      ])}

      noOutline={noOutline}

      style={styles.wrapper}

      {...other}
    >
      <RootComponent
        href={href}

        onClick={onClick}

        {...RootProps}

        className={classNames([
          staticClassName('ListItem', theme) && [
            'amaui-ListItem-root',
            `amaui-ListItem-size-${size}`,
            preselected && `amaui-ListItem-preselected`,
            selected && `amaui-ListItem-selected`,
            disabled && `amaui-ListItem-disabled`,
            inset && !start && `amaui-ListItem-inset`
          ],

          RootProps?.className,
          classes.root,
          classes[`shape_${shape}_position_${shapePosition}`],
          inset && !start && classes[`inset_size_${size}`],
          (href || button) && classes.button,
          noPadding && classes.noPadding,
          disabled && classes.disabled
        ])}

        style={{
          ...style,

          ...styles.root
        }}

        disabled={disabled}
      >
        {(href || button || interaction) && (
          <Interaction
            border={false}

            preselected={InteractionProps.focus || preselected || undefined}

            selected={selected}

            disabled={disabled}

            {...InteractionProps}
          />
        )}

        {start && (
          <span
            {...AsideProps}

            {...AsideStartProps}

            className={classNames([
              staticClassName('ListItem', theme) && [
                'amaui-ListItem-aside',
                'amaui-ListItem-start',
                `amaui-ListItem-start-${['amaui-Avatar', 'amaui-IconButton', 'amaui-Checkbox', 'amaui-Radio'].includes((start as any)?.type?.displayName) ? 'button' : ['amaui-Switch'].includes((start as any)?.type?.displayName) ? 'switch' : 'icon'}`
              ],

              AsideProps?.className,
              AsideStartProps?.className,
              classes.aside,
              classes.start,
              classes[`align_${startAlign}`],
              classes[`${menuItem ? 'menuItem_' : ''}start_${['amaui-Avatar', 'amaui-IconButton', 'amaui-Checkbox', 'amaui-Radio'].includes((start as any)?.type?.displayName) ? 'button' : ['amaui-Switch'].includes((start as any)?.type?.displayName) ? 'switch' : 'icon'}`],
              classes[`${menuItem ? 'menuItem_' : ''}start_${['amaui-Avatar', 'amaui-IconButton', 'amaui-Checkbox', 'amaui-Radio'].includes((start as any)?.type?.displayName) ? 'button' : ['amaui-Switch'].includes((start as any)?.type?.displayName) ? 'switch' : 'icon'}_size_${size}`]
            ])}
          >
            {is('string', start) ? start : React.cloneElement(start as any, {
              color: (start as any).props?.color || 'inherit',

              size: (start as any).props?.size !== undefined ? (start as any).props?.size : ['amaui-Switch'].includes((start as any)?.type?.displayName) ? 'small' : 'regular',

              disabled
            })}
          </span>
        )}

        <span
          {...MainProps}

          className={classNames([
            staticClassName('ListItem', theme) && [
              'amaui-ListItem-middle'
            ],

            MainProps?.className,
            classes.middle,
            menuItem && classes.menuItem_middle,
            disabled && classes.middle_disabled
          ])}
        >
          {primary !== undefined && (
            is('simple', primary) ? (
              <Type
                version='b2'

                id={refs.ids.primary}

                {...PrimaryProps}

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'amaui-ListItem-text',
                    'amaui-ListItem-text-primary'
                  ],

                  PrimaryProps?.className,
                  classes.text,
                  classes.text_primary,
                  !menuItem && classes.text_primary_weight
                ])}

                style={{
                  ...styles.primary,

                  ...PrimaryProps?.style
                }}
              >
                {primary}
              </Type>
            ) : React.cloneElement(primary as any, {
              id: refs.ids.primary
            })
          )}

          {secondary !== undefined && (
            is('simple', secondary) ? (
              <Type
                version='b2'

                id={refs.ids.secondary}

                {...SecondaryProps}

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'amaui-ListItem-text',
                    'amaui-ListItem-text-secondary'
                  ],

                  SecondaryProps?.className,
                  classes.text,
                  classes.text_secondary
                ])}

                style={{
                  ...styles.secondary,

                  ...SecondaryProps?.style
                }}
              >
                {secondary}
              </Type>
            ) : React.cloneElement(secondary as any, {
              id: refs.ids.secondary
            })
          )}

          {tertiary !== undefined && (
            is('simple', tertiary) ? (
              <Type
                version='b2'

                {...TertiaryProps}

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'amaui-ListItem-text',
                    'amaui-ListItem-text-tertiary'
                  ],

                  TertiaryProps?.className,
                  classes.text,
                  classes.text_tertiary
                ])}

                style={{
                  ...styles.tertiary,

                  ...TertiaryProps?.style
                }}
              >
                {tertiary}
              </Type>
            ) : tertiary
          )}
        </span>

        {end && (
          <span
            {...AsideProps}

            {...AsideEndProps}

            className={classNames([
              staticClassName('ListItem', theme) && [
                'amaui-ListItem-aside',
                'amaui-ListItem-end',
                `amaui-ListItem-end-${['amaui-Avatar', 'amaui-IconButton', 'amaui-Checkbox', 'amaui-Radio'].includes((end as any)?.type?.displayName) ? 'button' : ['amaui-Switch'].includes((end as any)?.type?.displayName) ? 'switch' : 'icon'}`
              ],

              AsideProps?.className,
              AsideEndProps?.classname,
              classes.aside,
              classes.end,
              classes[`align_${endAlign}`],
              classes[`${menuItem ? 'menuItem_' : ''}end_${['amaui-Avatar', 'amaui-IconButton', 'amaui-Checkbox', 'amaui-Radio'].includes((end as any)?.type?.displayName) ? 'button' : ['amaui-Switch'].includes((end as any)?.type?.displayName) ? 'switch' : 'icon'}`]
            ])}
          >
            {is('string', end) ? end : React.cloneElement(end as any, {
              color: (end as any).props?.color || 'inherit',

              size: (end as any).props?.size !== undefined ? (end as any).props?.size : ['amaui-Switch'].includes((end as any)?.type?.displayName) ? 'small' : 'regular',

              disabled
            })}
          </span>
        )}
      </RootComponent>

      {footer}
    </Surface>
  );
});

ListItem.displayName = 'amaui-ListItem';

export default ListItem;
