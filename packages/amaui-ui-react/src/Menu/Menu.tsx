import React from 'react';

import { is } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import List from '../List';
import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import { ITooltip } from '../Tooltip/Tooltip';

import { staticClassName, TElement, THTMLElement, TPropsAny } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-Menu' });

export const MENUS = {
  open: [],

  priority: (value: any) => MENUS.open[MENUS.open.length - 1] === value,

  add: (value: any) => {
    const index = MENUS.open.findIndex(item => item === value);

    if (index === -1) MENUS.open.push(value);

    MENUS.open = MENUS.open.filter(Boolean);
  },

  remove: (value: any) => {
    const index = MENUS.open.findIndex(item => item === value);

    if (index > -1) MENUS.open.splice(index, 1);

    MENUS.open = MENUS.open.filter(Boolean);
  }
};

export interface IMenu extends ITooltip {
  open?: boolean;

  openDefault?: boolean;

  menuItems?: Array<TElement>;

  include?: Array<THTMLElement>;
  includeParentQueries?: Array<string>;
  includeQueries?: Array<string>;

  autoSelect?: boolean;
  autoSelectOnBlur?: boolean;
  resetKeyboardNavigation?: boolean;
  closeOnClickAway?: boolean;

  onSelect?: (value: any) => any;

  onClose?: () => any;

  ListProps?: TPropsAny;
  ModalProps?: TPropsAny;
}

const Menu = React.forwardRef((props_: IMenu, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMenu?.props?.default, ...props_ }), [props_]);

  const {
    open: open_,

    openDefault,

    label,

    menuItems,

    arrow,
    anchor,
    anchorElement,
    autoSelect,
    autoSelectOnBlur,
    resetKeyboardNavigation = false,
    closeOnClickAway = true,

    include = [],
    includeParentQueries = [],
    includeQueries = [],

    onSelect,

    onOpen: onOpen_,
    onClose: onClose_,

    ListProps,
    ModalProps,

    className,

    children,

    ...other
  } = props;

  const id = React.useId();

  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [preselected, setPreselected] = React.useState<any>();

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    id: React.useRef<any>(),
    main: React.useRef<any>(),
    props: React.useRef<any>(),
    preselected: React.useRef<any>(),
    include: React.useRef<any>([])
  };

  refs.id.current = id;

  refs.preselected.current = preselected;

  refs.props.current = props;

  React.useEffect(() => {
    if (open) {
      MENUS.add(refs.id.current);

      if (autoSelect) {
        const values = React.Children.toArray(refs.props.current.children).map((item: any, index: number) => ((item.props?.button || item.props?.href) && !item.props?.disabled) ? index : undefined).filter(item => is('number', item));

        setPreselected(values[0]);
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (refs.props.current.open && MENUS.priority(refs.id.current)) {
        const values = React.Children.toArray(refs.props.current.children).map((item: any, index: number) => ((item.props?.button || item.props?.href) && !item.props?.disabled) ? index : undefined).filter(item => is('number', item));

        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();

            return setPreselected(() => {
              let value = refs.preselected.current;

              const index = values.findIndex(item_ => item_ === value);

              if (index === -1) value = values[values.length - 1];
              else if (index > 0) value = values[index - 1];
              else if (refs.props.current.resetKeyboardNavigation) value = values[values.length - 1];

              return value;
            });

          case 'ArrowDown':
            event.preventDefault();

            return setPreselected(() => {
              let value = refs.preselected.current;

              const index = values.findIndex(item_ => item_ === value);

              if (index === -1) value = values[0];
              else if (index < values.length - 1) value = values[index + 1];
              else if (refs.props.current.resetKeyboardNavigation) value = values[0];

              return value;
            });

          case 'Escape':
            event.preventDefault();

            return onClose();

          case 'Home':
            event.preventDefault();

            return setPreselected(values[0]);

          case 'End':
            event.preventDefault();

            return setPreselected(values[values.length - 1]);

          default:
            break;
        }
      }
    };

    window.document.addEventListener('keydown', onKeyDown);

    return () => {
      MENUS.remove(refs.id.current);

      window.document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      if (autoSelect) {
        const values = React.Children.toArray(refs.props.current.children).map((item: any, index: number) => ((item.props?.button || item.props?.href) && !item.props?.disabled) ? index : undefined).filter(item => is('number', item));

        setPreselected(values[0]);
      }
    }

    setTimeout(() => {
      if (include && refs.root.current) include.push(refs.root.current);
    });

    return () => {
      if (include) {
        const index = include.findIndex(item => item === refs.root.current);

        if (index > -1) include.splice(index, 1);
      }
    };
  }, [open]);

  React.useEffect(() => {
    if (open !== open_) setOpen(open_);
  }, [open_]);

  const onMouseLeave = React.useCallback(() => {
    setPreselected('');
  }, []);

  const onOpen = () => {
    if (open_ === undefined) setOpen(true);

    if (is('function', onOpen_)) onOpen_();
  };

  const onClose = () => {
    if (open_ === undefined) setOpen(false);

    if (refs.props.current.autoSelectOnBlur) {
      const item: any = React.Children.toArray(refs.props.current.children)[refs.preselected.current];

      if (item && is('function', refs.props.current.onSelect)) refs.props.current.onSelect(item.props?.value !== undefined ? item.props?.value : item.props?.primary);
    }

    setPreselected('');

    if (is('function', onClose_)) onClose_();
  };

  const Wrapper = closeOnClickAway ? ClickListener : React.Fragment;

  const WrapperProps: any = {};

  if (closeOnClickAway) {
    WrapperProps.onClickOutside = onClose;

    WrapperProps.include = [refs.main.current, ...(refs.include.current || []), ...include].filter(Boolean);

    WrapperProps.includeParentQueries = includeParentQueries;

    WrapperProps.includeQueries = includeQueries;
  }

  if (open) MENUS.add(id);
  else MENUS.remove(id);

  const methodItem = (item: any, index: number) => ({
    key: item.key || index,

    role: 'menuitem',

    menuId: id,

    onClose,

    // Only if button or href value
    ...(((item.props?.button || item.props?.href) && !item.props.disabled) ? {
      onMouseEnter: () => {
        setPreselected(index);
      },

      onMouseLeave: () => {
        setPreselected('');
      },

      preselected: index === preselected,

      onClick: (event: React.MouseEvent<any>) => {
        if (is('function', item.props?.onClick)) item.props?.onClick(event);

        if (item.props?.menuCloseOnClick) onClose();
      },

      onKeyDown: (event: React.KeyboardEvent<any>) => {
        if (event.target === event.currentTarget && event.key === 'Enter') {
          if (is('function', item.props?.onClick)) item.props?.onClick();

          if (is('function', item.props?.onKeyDown)) item.props?.onKeyDown(event);

          if (item.props?.menuCloseOnClick) onClose();
        }
      }
    } : {})
  });

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Tooltip
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        open={open}

        className={classNames([
          staticClassName('Menu', theme) && [
            'amaui-Menu-root',
            open && `amaui-Menu-open`
          ],

          className,
          classes.root
        ])}

        onMouseLeave={onMouseLeave}

        anchor={anchor}

        anchorElement={anchorElement}

        label={label ? is('function', label) ? (label as any)(methodItem) : label : (menuItems && (
          <List
            menu

            menuOpen={open}

            include={refs.include.current}

            role='menu'

            {...ListProps}
          >
            {React.Children.toArray(menuItems).map((item: any, index: number) => (
              React.cloneElement(item, methodItem(item, index))
            ))}
          </List>
        ))}

        click

        arrow={arrow}

        hover={false}

        focus={false}

        longPress={false}

        noMargin={!arrow}

        onOpen={onOpen}

        onClose={onClose}

        ModalProps={{
          background: true,
          backgroundInvisible: true,
          freezeScroll: false,

          ...ModalProps
        }}

        {...other}
      >
        {children && React.cloneElement(children, {
          ref: item => {
            if (children.ref) {
              if (is('function', children.ref)) children.ref(item);
              else children.ref.current = item;
            }

            refs.main.current = item;
          }
        })}
      </Tooltip>
    </Wrapper>
  );
});

Menu.displayName = 'amaui-Menu';

export default Menu;
