import React from 'react';

import { is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Icon from '../Icon';
import Interaction from '../Interaction';
import Type from '../Type';
import Menu from '../Menu';
import Expand from '../Expand';
import List from '../List';
import Fade from '../Fade';
import IconButton from '../IconButton';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TColor, TElement, TElementReference, THTMLElement, TPropsAny, TSize } from '../utils';

const overflow = {
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

const useStyle = styleMethod(theme => ({
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
    borderRadius: '0'
  },

  button: {
    cursor: 'pointer',
    userSelect: 'none'
  },

  size_small: {
    padding: `${theme.methods.space.value('rg') * 0.5}px ${theme.methods.space.value('rg') * 0.75}px`,
    minHeight: '24px'
  },

  size_regular: {
    padding: `${theme.methods.space.value('rg', 'px')} ${theme.methods.space.value('rg', 'px')}`,
    minHeight: '40px'
  },

  size_large: {
    padding: `${theme.methods.space.value('rg') * 1.5}px ${theme.methods.space.value('rg') * 1.25}px`,
    minHeight: '56px'
  },

  menuItem_size_small: {
    padding: `${theme.methods.space.value('sm') * 0.5}px ${theme.methods.space.value('rg', 'px')}`
  },

  menuItem_size_regular: {
    padding: `${theme.methods.space.value('sm', 'px')} ${theme.methods.space.value('rg', 'px')}`
  },

  menuItem_size_large: {
    padding: `${theme.methods.space.value('sm') * 1.5}px ${theme.methods.space.value('rg', 'px')}`
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

  menuItem_inset_size_small: {
    paddingInlineStart: `56px`
  },

  menuItem_inset_size_regular: {
    paddingInlineStart: `56px`
  },

  menuItem_inset_size_large: {
    paddingInlineStart: `56px`
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
    paddingInline: '0px 12px'
  },

  start_button: {
    paddingInline: '0 12px'
  },

  start_switch: {
    paddingInline: '0 12px'
  },

  menuItem_start_icon: {
    paddingInlineEnd: '16px'
  },

  menuItem_start_button: {
    paddingInlineEnd: '12px'
  },

  menuItem_start_switch: {
    paddingInlineEnd: '12px'
  },

  end_icon: {
    paddingInlineStart: '12px',
    paddingInlineEnd: '8px'
  },

  end_button: {
    paddingInlineStart: '12px',
    paddingInlineEnd: '0'
  },

  end_switch: {
    paddingInlineStart: '12px',
    paddingInlineEnd: '0'
  },

  menuItem_end_icon: {
    paddingInlineStart: '12px'
  },

  menuItem_end_button: {
    paddingInlineStart: '12px'
  },

  menuItem_end_switch: {
    paddingInlineStart: '12px'
  },

  middle_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  icon: {
    transition: theme.methods.transitions.make('transform')
  },

  icon_open: {
    transform: 'rotate(-180deg)'
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
}), { name: 'amaui-ListItem' });

const IconMaterialExpandMoreRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreRounded'
      short_name='ExpandMore'

      {...props}
    >
      <path d="M12 14.95Q11.8 14.95 11.625 14.887Q11.45 14.825 11.3 14.675L6.675 10.05Q6.4 9.775 6.413 9.362Q6.425 8.95 6.7 8.675Q6.975 8.4 7.4 8.4Q7.825 8.4 8.1 8.675L12 12.575L15.925 8.65Q16.2 8.375 16.613 8.387Q17.025 8.4 17.3 8.675Q17.575 8.95 17.575 9.375Q17.575 9.8 17.3 10.075L12.7 14.675Q12.55 14.825 12.375 14.887Q12.2 14.95 12 14.95Z" />
    </Icon>
  );
});

const IconMaterialArrowRightRounded = React.forwardRef((props: any, ref) => {
  return (
    <Icon
      ref={ref}

      name='ArrowRightRounded'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M11.7 15.3Q11.225 15.775 10.613 15.512Q10 15.25 10 14.575V9.425Q10 8.75 10.613 8.488Q11.225 8.225 11.7 8.7L14.3 11.3Q14.45 11.45 14.525 11.625Q14.6 11.8 14.6 12Q14.6 12.2 14.525 12.375Q14.45 12.55 14.3 12.7Z" />
    </Icon>
  );
});

export interface IListItem extends ISurface {
  colorSelected?: TColor;

  menu?: TElement;
  menuId?: string;

  menuOpen?: boolean;

  openMenu?: boolean;
  openMenuDefault?: boolean;

  openList?: boolean;
  openListDefault?: boolean;

  menuItem?: boolean;
  list?: TElement;
  inset?: boolean;
  primary?: TElement;
  secondary?: TElement;
  tertiary?: TElement;
  preselected?: boolean;
  selected?: boolean;
  start?: TElement;
  startAlign?: 'start' | 'center' | 'end';
  end?: TElement;
  endAlign?: 'start' | 'center' | 'end';
  size?: TSize;
  noPadding?: boolean;
  href?: string;
  button?: boolean;
  shape?: 'round';
  shapePosition?: 'both' | 'start' | 'end' | 'none';
  footer?: TElement;
  include?: Array<THTMLElement>;
  tabIndex?: string | number;
  menuCloseOnClick?: boolean;
  listCloseOnClick?: boolean;
  interaction?: boolean;
  indicator?: boolean;
  noBackground?: boolean;
  noOutline?: boolean;
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<any>) => any;
  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;
  onMouseEnter?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;
  onClose?: () => any;

  RootComponent?: TElementReference;
  ExpandIcon?: TElementReference;
  ListTransitionComponent?: TElementReference;

  WrapperProps?: TPropsAny;
  ListProps?: TPropsAny;
  RootProps?: TPropsAny;
  InteractionProps?: TPropsAny;
  PrimaryProps?: TPropsAny;
  SecondaryProps?: TPropsAny;
  TertiaryProps?: TPropsAny;
  ListTransitionComponentProps?: TPropsAny;
  ExpandProps?: TPropsAny;
  MainProps?: TPropsAny;
  MenuProps?: TPropsAny;
}

const ListItemDelays = {
  Transition: {
    enter: 70
  }
};

const ListItem: React.FC<IListItem> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiListItem?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'default',
    colorSelected = props.color,

    menu,
    menuId,

    menuOpen,

    openMenu: openMenu_,
    openMenuDefault,

    openList: openList_,
    openListDefault,

    menuItem,
    list: list_,
    inset,
    primary = props.children,
    secondary,
    tertiary,
    preselected,
    selected,
    start,
    startAlign = 'start',
    end: end_,
    endAlign = 'center',
    size = 'regular',
    noPadding,
    href,
    button,
    shape = 'round',
    shapePosition = 'none',
    footer,
    include,
    tabIndex,
    menuCloseOnClick,
    listCloseOnClick,
    interaction,
    indicator = true,
    noOutline,
    noBackground,
    disabled,

    onClick: onClick_,
    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    onClose: onClose_,

    RootComponent: RootComponent_ = 'div',
    ExpandIcon = IconMaterialExpandMoreRounded,
    ListTransitionComponent = Fade,

    WrapperProps,
    ListProps,
    RootProps,
    InteractionProps,
    PrimaryProps,
    SecondaryProps,
    TertiaryProps,
    ListTransitionComponentProps: ListTransitionComponentProps_,
    ExpandProps,
    MainProps,
    MenuProps = {
      autoSelect: true
    },

    Component = 'li',

    className,
    style,

    children,

    ...other
  } = props;

  const [openMenu, setOpenMenu] = React.useState(openMenuDefault !== undefined ? openMenuDefault : openMenu_);
  const [openList, setOpenList] = React.useState(openListDefault !== undefined ? openListDefault : openList_);
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    props: React.useRef<any>(),
    openMenu: React.useRef<any>(),
    openList: React.useRef<any>(),
    focus: React.useRef<any>(),
    ids: {
      primary: React.useId(),
      secondary: React.useId()
    }
  };

  refs.props.current = props;
  refs.openMenu.current = openMenu;
  refs.openList.current = openList;
  refs.focus.current = focus;

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

  const ListTransitionComponentProps: any = {
    add: true,

    delay: {
      enter: ListItemDelays.Transition.enter
    },

    ...ListTransitionComponentProps_
  };

  const list = list_ && React.Children.toArray(list_).map((item: any, index: number) => (
    React.cloneElement(item, {
      key: index,

      onClick: (event: React.MouseEvent<any>) => {
        if (item.props.listCloseOnClick) onCloseList();

        if (is('function', item.props.onClick)) item.props.onClick(event);
      },

      ...item?.props
    })
  ));

  const onClick = React.useCallback((event?: React.MouseEvent<any>) => {
    if (!refs.props.current.disabled) {
      if (refs.props.current.list) setOpenList(!refs.openList.current);
    }

    if (is('function', onClick_)) onClick_(event);
  }, [onClick_]);

  let end = end_;

  if (menu) end = end_ || <IconMaterialArrowRightRounded />;

  if (list) end = end_ || (indicator && (
    <IconButton
      size={24}

      fontSize={24}

      onClick={onClick}

      className={classNames([
        staticClassName('ListItem', theme) && [
          'amaui-ListItem-icon-button'
        ],

        classes.iconButton
      ])}
    >
      <ExpandIcon
        className={classNames([
          classes.icon,
          openList && classes.icon_open
        ])}
      />
    </IconButton>
  ));

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!refs.props.current.disabled) {
        if (menu) {
          if (refs.openMenu.current && ((theme.direction === 'ltr' && event.key === 'ArrowLeft') || (theme.direction === 'rtl' && event.key === 'ArrowRight'))) setOpenMenu(false);

          if (!refs.openMenu.current && ((theme.direction === 'ltr' && event.key === 'ArrowRight') || (theme.direction === 'rtl' && event.key === 'ArrowLeft'))) setOpenMenu(true);
        }
        else if (list) {
          if (refs.openList.current && (event.key === 'ArrowUp' || (theme.direction === 'ltr' && event.key === 'ArrowLeft') || (theme.direction === 'rtl' && event.key === 'ArrowRight'))) setOpenMenu(false);

          if (!refs.openList.current && (event.key === 'ArrowDown' || (theme.direction === 'ltr' && event.key === 'ArrowRight') || (theme.direction === 'rtl' && event.key === 'ArrowLeft'))) setOpenMenu(true);

          if (event.key === 'Enter' && refs.focus.current) onClick();
        }
        else {
          if (event.key === 'Enter' && !refs.props.current.button && refs.focus.current) {
            if (is('function', refs.props.current.onClick)) refs.props.current.onClick(event);
          }
        }
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', onKeyDown);

    return () => {
      rootDocument.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (openMenu_ !== openMenu) setOpenMenu(openMenu_);
  }, [openMenu_]);

  React.useEffect(() => {
    if (openList_ !== openList) setOpenList(openList_);
  }, [openList_]);

  React.useEffect(() => {
    if (menuOpen && preselected) refs.root.current.focus();
  }, [preselected, menuOpen]);

  React.useEffect(() => {
    if (menu) setOpenMenu(hover || preselected || selected);
  }, [hover]);

  React.useEffect(() => {
    if (menu) setOpenMenu(hover || focus || preselected || selected);
  }, [focus]);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) {
      setHover(false);

      setFocus(false);
    }

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    if (event.target === event.currentTarget && !disabled) setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    if (event.target === event.currentTarget && !disabled) setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onCloseList = React.useCallback(() => {
    if (!disabled) {
      setOpenList(false);
      setHover(false);
      setFocus(false);

      if (is('function', onClose_)) onClose_();
    }
  }, []);

  const onCloseMenu = React.useCallback(() => {
    if (!disabled) {
      setOpenMenu(false);
      setHover(false);
      setFocus(false);

      if (is('function', onClose_)) onClose_();
    }
  }, []);

  if (href) RootComponent = 'a';

  const isSelected = selected !== undefined ? selected : openMenu || openList;

  const colorToUse = isSelected ? colorSelected : color;

  ListTransitionComponentProps.in = !!openList;

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

      onFocus={onFocus}

      onBlur={onBlur}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      aria-labelledby={refs.ids.primary}

      aria-describedby={refs.ids.secondary}

      aria-selected={selected}

      aria-haspopup={!!menu}

      aria-expanded={openMenu}

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

        className={classNames([
          staticClassName('ListItem', theme) && [
            'amaui-ListItem-root',
            menu && `amaui-ListItem-menu`,
            list && `amaui-ListItem-list`,
            menuItem && `amaui-ListItem-menu-item`,
            menuOpen && `amaui-ListItem-menu-open`,
            openMenu && `amaui-ListItem-open-menu`,
            openList && `amaui-ListItem-open-list`,
            preselected && `amaui-ListItem-preselected`,
            isSelected && `amaui-ListItem-selected`,
            hover && `amaui-ListItem-hover`,
            focus && `amaui-ListItem-focus`,
            disabled && `amaui-ListItem-disabled`,
            inset && !start && `amaui-ListItem-inset`,
            menuItem && [
              inset && `amaui-ListItem-menu-item-inset`
            ],
          ],

          classes.root,
          classes[`size_${size}`],
          classes[`shape_${shape}_position_${shapePosition}`],
          inset && !start && classes[`inset_size_${size}`],
          menuItem && [
            classes[`menuItem_size_${size}`],
            inset && classes[`menuItem_inset_size_${size}`]
          ],
          (href || button) && classes.button,
          noPadding && classes.noPadding,
          disabled && classes.disabled
        ])}

        style={{
          ...style,

          ...styles.root
        }}

        disabled={disabled}

        {...RootProps}
      >
        {(href || button || interaction) && (
          <Interaction
            border={false}

            preselected={focus || preselected || undefined}

            selected={isSelected}

            disabled={disabled}

            {...InteractionProps}
          />
        )}

        {start && (
          <span
            className={classNames([
              staticClassName('ListItem', theme) && [
                'amaui-ListItem-aside',
                'amaui-ListItem-start',
                `amaui-ListItem-start-${['amaui-Avatar', 'amaui-IconButton', 'amaui-Checkbox', 'amaui-Radio'].includes((start as any)?.type?.displayName) ? 'button' : ['amaui-Switch'].includes((start as any)?.type?.displayName) ? 'switch' : 'icon'}`
              ],

              classes.aside,
              classes.start,
              classes[`align_${startAlign}`],
              classes[`${menuItem ? 'menuItem_' : ''}start_${['amaui-Avatar', 'amaui-IconButton', 'amaui-Checkbox', 'amaui-Radio'].includes((start as any)?.type?.displayName) ? 'button' : ['amaui-Switch'].includes((start as any)?.type?.displayName) ? 'switch' : 'icon'}`]
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
            className={classNames([
              staticClassName('ListItem', theme) && [
                'amaui-ListItem-aside',
                'amaui-ListItem-end',
                `amaui-ListItem-end-${['amaui-Avatar', 'amaui-IconButton', 'amaui-Checkbox', 'amaui-Radio'].includes((end as any)?.type?.displayName) ? 'button' : ['amaui-Switch'].includes((end as any)?.type?.displayName) ? 'switch' : 'icon'}`
              ],

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

      <Expand
        in={openList}

        parent={refs.root.current}

        {...ExpandProps}
      >
        <ListTransitionComponent
          {...ListTransitionComponentProps}
        >
          <List
            indent={5}

            {...ListProps}

            className={classNames([
              staticClassName('ListItem', theme) && [
                'amaui-ListItem-list'
              ],

              ListProps?.className,
              classes.list
            ])}
          >
            {list}
          </List>
        </ListTransitionComponent>
      </Expand>

      {/* Menu */}
      {menu && (
        <Menu
          open={!!openMenu}

          include={include}

          onClose={onCloseMenu}

          closeOnClickAway={false}

          anchorElement={refs.root.current}

          menuItems={menu as any}

          transformOrigin='left top'

          transformOriginSwitch='right top'

          transformOriginRtl='left top'

          transformOriginRtlSwitch='right top'

          position='right'

          alignment='start'

          onMouseEnter={onMouseEnter}

          {...MenuProps}
        />
      )}
    </Surface>
  );
});

ListItem.displayName = 'amaui-ListItem';

export default ListItem;
