import React from 'react';

import { is } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import List from '../List';

const useStyle = style(theme => ({
  root: {},
}), { name: 'AmauiMenu' });

// To do

// If menu open
// on arrow up, down, End or Home
// setHovered based on current one
// only out of available ones that are button or href and not disabled

const Menu = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMenu?.props?.default }), [props_]);

  const {
    open,
    anchorElement,

    arrow,
    closeOnClickAway = true,
    include,

    ListProps = {},
    ModalProps = {},

    onOpen: onOpen_,
    onClose: onClose_,

    className,

    children,

    ...other
  } = props;

  const [hovered, setHovered] = React.useState(undefined);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    include: React.useRef<any>([])
  };

  React.useEffect(() => {
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

  const onOpen = React.useCallback(() => {
    if (is('function', onOpen_)) onOpen_();
  }, []);

  const onClose = React.useCallback(() => {
    setHovered(undefined);

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
                    setHovered(index);
                  },

                  onMouseLeave: () => {
                    setHovered(undefined);
                  },

                  preselected: index === hovered,

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
