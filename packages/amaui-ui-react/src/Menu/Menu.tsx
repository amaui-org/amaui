import React from 'react';

import { getID, is } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import List from '../List';

const useStyle = style(theme => ({
  root: {},
}), { name: 'AmauiMenu' });

const MENUS = {
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

const Menu = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMenu?.props?.default }), [props_]);

  const {
    open,
    anchorElement,

    arrow,
    closeOnClickAway = true,
    include,
    resetKeyboardNavigation = false,

    ListProps = {},
    ModalProps = {},

    onOpen: onOpen_,
    onClose: onClose_,

    className,

    children,

    ...other
  } = props;

  const [preselected, setPreselected] = React.useState(undefined);
  const id = React.useState(getID())[0];

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    include: React.useRef<any>([]),
    open: React.useRef<any>(),
    preselected: React.useRef<any>(),
    children: React.useRef<any>()
  };

  refs.open.current = open;

  refs.preselected.current = preselected;

  refs.children.current = children;

  React.useEffect(() => {
    if (open) MENUS.add(id);

    const onKeyDown = (event: KeyboardEvent) => {
      if (refs.open.current && MENUS.priority(id)) {
        event.preventDefault();

        const values = React.Children.toArray(refs.children.current).map((item: any, index: number) => ((item.props?.button || item.props?.href) && !item.props?.disabled) ? index : undefined).filter(item => is('number', item));

        switch (event.key) {
          case 'ArrowUp':
            return setPreselected(() => {
              let value = refs.preselected.current;

              const index = values.findIndex(item_ => item_ === value);

              if (index === -1) value = values[0];
              else if (index > 0) value = values[index - 1];
              else if (resetKeyboardNavigation) value = values[values.length - 1];

              return value;
            });

          case 'ArrowDown':
            return setPreselected(() => {
              let value = refs.preselected.current;

              const index = values.findIndex(item_ => item_ === value);

              if (index === -1) value = values[values.length - 1];
              else if (index < values.length - 1) value = values[index + 1];
              else if (resetKeyboardNavigation) value = values[0];

              return value;
            });

          case 'Home':
            return setPreselected(values[0]);

          case 'End':
            return setPreselected(values[values.length - 1]);

          default:
            break;
        }
      }
    };

    window.document.addEventListener('keydown', onKeyDown);

    return () => {
      MENUS.remove(id);

      window.document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (open) MENUS.add(id);
    else MENUS.remove(id);

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
    setPreselected(undefined);
  }, []);

  const onOpen = React.useCallback(() => {
    if (is('function', onOpen_)) onOpen_();
  }, []);

  const onClose = React.useCallback(() => {
    setPreselected(undefined);

    if (is('function', onClose_)) onClose_();
  }, []);

  const Wrapper = closeOnClickAway ? ClickListener : React.Fragment;

  const WrapperProps: any = {};

  if (closeOnClickAway) {
    WrapperProps.onClickOutside = onClose;

    WrapperProps.include = refs.include.current;
  }

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Tooltip
        ref={item => {
          if (ref) ref.current = item;

          refs.root.current = item;
        }}

        open={open}

        className={classNames([
          staticClassName('Menu', theme) && [
            'AmauiMenu-root'
          ],

          classes.root,
          className
        ])}

        onMouseLeave={onMouseLeave}

        anchorElement={anchorElement}

        label={children && (
          <List
            menu

            include={refs.include.current}

            {...ListProps}
          >
            {React.Children.toArray(children).map((item: any, index: number) => (
              React.cloneElement(item, {
                key: index,

                onClose,

                // Only if button or href value
                ...(((item.props?.button || item.props?.href) && !item.props.disabled) ? {
                  onMouseEnter: () => {
                    setPreselected(index);
                  },

                  onMouseLeave: () => {
                    setPreselected(undefined);
                  },

                  preselected: index === preselected,

                  onClick: (event: React.MouseEvent<any>) => {
                    if (is('function', item.props?.onClick)) item.props?.onClick(event);

                    if (item.props?.menuCloseOnClick) onClose();
                  },

                  onKeyDown: (event: React.KeyboardEvent<any>) => {
                    if (event.key === 'Enter') {
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
          freezeScroll: true,

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
