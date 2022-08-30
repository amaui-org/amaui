import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import Icon from '../Icon';
import Interaction from '../Interaction';
import Type from '../Type';
import Menu from '../Menu';
import Expand from '../Expand';
import List from '../List';
import Fade from '../Fade';
import IconButton from '../IconButton';

const overflow = {
  width: '100%',
  overflow: 'hidden',
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

  neutral: { color: theme.methods.palette.color.value('neutral', 60, true) },

  primary: { color: theme.methods.palette.color.value('primary', 60, true) },

  secondary: { color: theme.methods.palette.color.value('secondary', 60, true) },

  tertiary: { color: theme.methods.palette.color.value('tertiary', 60, true) },

  quaternary: { color: theme.methods.palette.color.value('quaternary', 60, true) },

  info: { color: theme.methods.palette.color.value('info', 60, true) },

  success: { color: theme.methods.palette.color.value('success', 60, true) },

  warning: { color: theme.methods.palette.color.value('warning', 60, true) },

  error: { color: theme.methods.palette.color.value('error', 60, true) },

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
    minWidth: 0,
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

  menuItem_start_icon: {
    paddingInlineEnd: '16px'
  },

  menuItem_start_button: {
    paddingInlineEnd: '8px'
  },

  menuItem_start_switch: {
    paddingInlineEnd: '6px'
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

  menuItem_end_icon: {
    paddingInlineStart: '16px'
  },

  menuItem_end_button: {
    paddingInlineStart: '8px'
  },

  menuItem_end_switch: {
    paddingInlineStart: '6px'
  },

  middle_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  icon: {
    transition: theme.methods.transitions.make('transform')
  },

  icon_open: {
    transform: 'rotate(180deg)'
  },

  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    cursor: 'default'
  }
}), { name: 'AmauiListItem' });

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

const ListItem = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiListItem?.props?.default }), [props_]);

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const { classes } = useStyle(props);

  const {
    menu,
    menuId,
    menuOpen,
    menuItem,
    list: list_,
    listOpen,
    inset,
    primary = props.children,
    secondary,
    tertiary,
    preselected,
    selected,
    tonal,
    color = 'default',
    colorSelected = props.color,
    start,
    startAlign = 'start',
    end: end_,
    endAlign = 'center',
    size = 'regular',
    href,
    button,
    shape = 'round',
    shapePosition = 'none',
    footer,
    include,
    tabIndex,
    menuCloseOnClick,
    listCloseOnClick,
    onClick: onClick_,
    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    onClose: onClose_,
    disabled,
    Component = 'li',
    RootComponent: RootComponent_ = 'div',
    WrapperProps = {},
    ListProps = {},
    RootProps = {},
    InteractionProps = {},
    PrimaryProps = {},
    SecondaryProps = {},
    TertiaryProps = {},
    ExpandIcon = IconMaterialExpandMoreRounded,
    ListTransitionComponent = Fade,
    ListTransitionComponentProps = { add: true },
    ExpandProps = {},
    MenuListProps = {},
    MenuProps = {
      autoSelect: true
    },

    classes: classes_,
    className,
    style,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<HTMLElement>(),
    props: React.useRef<any>(),
    openMenu: React.useRef<any>(),
    openList: React.useRef<any>(),
    focus: React.useRef<any>()
  };

  refs.props.current = props;
  refs.openMenu.current = openMenu;
  refs.openList.current = openList;
  refs.focus.current = focus;

  const styles: any = {
    root: {},
    icon: { color: 'default' },
    wrapper: {},
    primary: {},
    secondary: {},
    tertiary: {}
  };

  let RootComponent = RootComponent_;

  const list = list_ && React.Children.toArray(list_).map((item: any, index: number) => (
    React.cloneElement(item, {
      key: index,

      onClick: (event: React.MouseEvent<any>) => {
        if (item.props.listCloseOnClick) onClose();

        if (is('function', item.props.onClick)) item.props.onClick(event);
      }
    })
  ));

  const onClick = React.useCallback((event?: React.FocusEvent<any>) => {
    if (!refs.props.current.disabled) {
      if (refs.props.current.list) {
        setOpenList(!refs.openList.current);
      }
    }

    if (is('function', refs.props.current.onClick)) refs.props.current.onClick(event);
  }, []);

  let end = end_;

  if (menu) end = end_ || <IconMaterialArrowRightRounded />;

  if (list) end = end_ || (
    <IconButton
      size={24}

      fontSize={24}

      color='default'

      onClick={onClick}

      className={classNames([
        staticClassName('Accordion', theme) && [
          'AmauiAccordion-iconButton'
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
  );

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
          if (event.key === 'Enter' && refs.focus.current) {
            if (is('function', refs.props.current.onClick)) refs.props.current.onClick(event);
          }
        }
      }
    };

    window.document.addEventListener('keydown', onKeyDown);

    return () => {
      window.document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (menuOpen !== openMenu) setOpenMenu(menuOpen);
  }, [menuOpen]);

  React.useEffect(() => {
    if (listOpen !== openList) setOpenList(listOpen);
  }, [listOpen]);

  React.useEffect(() => {
    if (menuOpen && preselected) refs.root.current.focus();
  }, [preselected, menuOpen]);

  React.useEffect(() => {
    if (menu) setOpenMenu(hover || preselected || selected);
  }, [hover]);

  React.useEffect(() => {
    if (menu) setOpenMenu(hover || focus || preselected || selected);
  }, [focus]);

  const onMouseEnter = React.useCallback((event: React.FocusEvent<any>) => {
    if (!disabled) setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.FocusEvent<any>) => {
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

  const onClose = React.useCallback(() => {
    if (!disabled) {
      setOpenMenu(false);
      setOpenList(false);
      setHover(false);
      setFocus(false);

      if (is('function', onClose_)) onClose_();
    }
  }, []);

  if (href) RootComponent = 'a';

  let colorToUse = selected ? colorSelected : color;

  const palette = !theme.palette.color[color] && theme.methods.color(color);

  if (!classes[colorToUse] && color !== 'default') {
    styles.root.color = theme.methods.palette.color.value(colorToUse, 60, true, palette);

    styles.wrapper.background = !tonal ? palette.main : palette[theme.palette.light ? 95 : 10];
  }

  if (!tonal) {
    if (color !== 'default') {
      styles.icon.color = styles.root.color = styles.primary.color = theme.methods.palette.color.text((palette || theme.palette.color[color] as any).main, true, 'light', 'primary');
      styles.secondary.color = theme.methods.palette.color.text((palette || theme.palette.color[color] as any).main, true, 'light', 'secondary');
      styles.tertiary.color = theme.methods.palette.color.text((palette || theme.palette.color[color] as any).main, true, 'light', 'tertiary');
    }
  }

  if (menuItem && color === 'default') {
    if (!theme.palette.light) styles.wrapper.background = theme.palette.color.neutral[10];
  }

  let addValue = 0;

  const method = (children_: any) => {
    const items = React.Children.toArray(children_);

    items.forEach((item: any) => {
      if (item?.type?.displayName === 'AmauiAccordion') addValue = 1;

      method(item?.props?.children);
    });
  };

  if (list) {
    method(list);
  }

  ListTransitionComponentProps.in = openList;

  return (
    <Component
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      tabIndex={tabIndex !== undefined ? tabIndex : (button && !disabled) ? 0 : -1}

      onFocus={onFocus}

      onBlur={onBlur}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      className={classNames([
        staticClassName('ListItem', theme) && [
          'AmauiListItem-wrapper',
          `AmauiListItem-color-${!classes[colorToUse] ? 'new' : colorToUse}`,
          tonal && `AmauiListItem-tonal`
        ],

        className,
        classes.wrapper,
        classes_?.wrapper,
        classes[`wrapper_color_${color}`],
        tonal && classes[`wrapper_tonal_color_${color}`]
      ])}

      style={styles.wrapper}

      {...WrapperProps}

      {...other}
    >
      <RootComponent
        href={href}

        onClick={onClick}

        className={classNames([
          staticClassName('ListItem', theme) && [
            'AmauiListItem-root',
            `AmauiListItem-size-${size}`,
            `AmauiListItem-color-${!classes[colorToUse] ? 'new' : colorToUse}`,
            `AmauiListItem-shape-${shape}-position-${shapePosition}`,
            menuItem && `AmauiListItem-menuItem`,
            tonal && `AmauiListItem-tonal`,
            disabled && `AmauiListItem-disabled`
          ],

          classes.root,
          classes_?.root,
          classes[size],
          classes[selected ? colorSelected : color],
          classes[`shape_${shape}_position_${shapePosition}`],
          inset && !start && classes[`inset_size_${size}`],
          menuItem && [
            classes[`menuItem_size_${size}`],
            inset && classes[`menuItem_inset_size_${size}`]
          ],
          (href || button) && classes.button,
          disabled && classes.disabled
        ])}

        style={{
          ...style,

          ...styles.root
        }}

        disabled={disabled}

        {...RootProps}
      >
        {(href || button) && (
          <Interaction
            border={false}
            preselected={focus || preselected || undefined}
            selected={openMenu || openList || selected}

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
                menuItem && 'AmauiListItem-menuItem'
              ],

              classes.aside,
              classes.start,
              classes[`align_${startAlign}`],
              classes[`${menuItem ? 'menuItem_' : ''}start_${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(start?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(start?.type?.displayName) ? 'switch' : 'icon'}`]
            ])}
          >
            {is('string', start) ? start : React.cloneElement(start, {
              color: start.props?.color || styles.icon.color,

              size: start.props?.size !== undefined ? start.props?.size : ['AmauiSwitch'].includes(start?.type?.displayName) ? 'small' : 'regular',

              disabled
            })}
          </span>
        )}

        <span
          className={classNames([
            staticClassName('ListItem', theme) && [
              'AmauiListItem-middle',
              menuItem && 'AmauiListItem-menuItem',
              disabled && 'AmauiListItem-disabled'
            ],

            classes.middle,
            menuItem && classes.menuItem_middle,
            disabled && classes.middle_disabled
          ])}
        >
          {primary !== undefined && (
            is('simple', primary) ? (
              <Type
                version={menuItem ? 'b2' : 'b1'}

                className={classNames([
                  staticClassName('ListItem', theme) && [
                    'AmauiListItem-text',
                    'AmauiListItem-text-primary'
                  ],

                  classes.text,
                  classes.text_primary,
                  PrimaryProps?.className
                ])}

                {...PrimaryProps}

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
                menuItem && 'AmauiListItem-menuItem'
              ],

              classes.aside,
              classes.end,
              classes[`align_${endAlign}`],
              classes[`${menuItem ? 'menuItem_' : ''}end_${['AmauiAvatar', 'AmauiIconButton', 'AmauiCheckbox', 'AmauiRadio'].includes(end?.type?.displayName) ? 'button' : ['AmauiSwitch'].includes(end?.type?.displayName) ? 'switch' : 'icon'}`]
            ])}
          >
            {is('string', end) ? end : React.cloneElement(end, {
              color: end.props?.color || styles.icon.color,

              size: end.props?.size !== undefined ? end.props?.size : ['AmauiSwitch'].includes(start?.type?.displayName) ? 'small' : 'regular',

              disabled
            })}
          </span>
        )}
      </RootComponent>

      {footer}

      <Expand
        in={openList}

        addValue={addValue * -8}

        {...ExpandProps}
      >
        <ListTransitionComponent
          {...ListTransitionComponentProps}
        >
          <List
            indent={5}

            className={classNames([
              staticClassName('Accordion', theme) && [
                'AmauiListItem-list'
              ],

              classes.list
            ])}

            {...ListProps}
          >
            {list}
          </List>
        </ListTransitionComponent>
      </Expand>

      {/* Menu */}
      {menu && (
        <Menu
          open={openMenu}

          include={include}

          onClose={onClose}

          closeOnClickAway={false}

          anchorElement={refs.root.current}

          transformOrigin='left top'

          transformOriginSwitch='right top'

          transformOriginRtl='left top'

          transformOriginRtlSwitch='right top'

          position='right'

          alignment='start'

          onMouseEnter={onMouseEnter}

          {...MenuProps}
        >
          {menu}
        </Menu>
      )}
    </Component >
  );
});

ListItem.displayName = 'AmauiListItem';

export default ListItem;
