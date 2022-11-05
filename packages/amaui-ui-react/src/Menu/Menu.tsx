import React from 'react';

import { getID, is } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import List from '../List';
import { ITooltip } from '../Tooltip/Tooltip';

import { staticClassName, TPropsAny } from '../utils';

const useStyle = styleMethod((theme: AmauiTheme) => ({
  root: {

  }
}), { name: 'AmauiMenu' });

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

  include?: Array<Element>;
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

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMenu?.props?.default }), [props_]);

  const {
    open,

    arrow,
    anchor,
    anchorElement,
    include,
    autoSelect,
    autoSelectOnBlur,
    resetKeyboardNavigation = false,
    closeOnClickAway = true,

    onSelect,

    onClose: onClose_,

    ListProps,
    ModalProps,

    className,

    children,

    ...other
  } = props;

  const id = React.useState(() => getID())[0];

  const [preselected, setPreselected] = React.useState<any>();

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    id: React.useRef<any>(),
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

  const onMouseLeave = React.useCallback(() => {
    setPreselected('');
  }, []);

  const onClose = () => {
    if (refs.props.current.autoSelectOnBlur) {
      const item: any = React.Children.toArray(refs.props.current.children)[refs.preselected.current];

      if (item && is('function', refs.props.current.onSelect)) refs.props.current.onSelect(item.props?.value !== undefined ? item.props?.value : item.props?.primary);
    }

    setPreselected('');

    if (is('function', refs.props.current.onClose)) refs.props.current.onClose();
  };

  const Wrapper = closeOnClickAway ? ClickListener : React.Fragment;

  const WrapperProps: any = {};

  if (closeOnClickAway) {
    WrapperProps.onClickOutside = onClose;

    WrapperProps.include = refs.include.current;
  }

  if (open) MENUS.add(id);
  else MENUS.remove(id);

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
            'AmauiMenu-root',
            open && `AmauiMenu-open`,
            arrow && `AmauiMenu-arrow`,
            anchorElement && `AmauiMenu-anchor-element`,
            closeOnClickAway && `AmauiMenu-close-on-click-away`,
            resetKeyboardNavigation && `AmauiMenu-reset-keyboard-navigation`,
            autoSelect && `AmauiMenu-auto-select`,
            autoSelectOnBlur && `AmauiMenu-auto-select-on-blur`
          ],

          className,
          classes.root
        ])}

        onMouseLeave={onMouseLeave}

        anchor={anchor}

        anchorElement={anchorElement}

        label={children && (
          <List
            menu

            menuOpen={open}

            include={refs.include.current}

            {...ListProps}
          >
            {React.Children.toArray(children).map((item: any, index: number) => (
              React.cloneElement(item, {
                key: item.key || index,

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
              })
            ))}
          </List>
        )}

        arrow={arrow}

        hover={false}

        focus={false}

        longPress={false}

        noMargin={!arrow}

        ModalProps={{
          background: true,
          backgroundInvisible: true,
          freezeScroll: false,

          onClose,

          ...ModalProps
        }}

        {...other}
      />
    </Wrapper>
  );
});

Menu.displayName = 'AmauiMenu';

export default Menu;
