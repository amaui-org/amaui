import React from 'react';

import { is } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';

const useStyle = style(theme => ({
  root: {},
}), { name: 'AmauiMenu' });

const Menu = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMenu?.props?.default }), [props_]);

  const {
    open,
    anchorElement,

    arrow,
    closeOnClickAway = true,
    include,

    ModalProps = {},

    onClose: onClose_,

    className,

    children,

    ...other
  } = props;

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

  const onClose = React.useCallback(() => {
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
          React.cloneElement(children, { include: refs.include.current })
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
