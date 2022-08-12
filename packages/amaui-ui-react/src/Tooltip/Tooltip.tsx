import React from 'react';

import { is, isEnvironment, wait } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import Portal from '../Portal';
import Focus from '../Focus';
import Fade from '../Fade';
import Surface from '../Surface';

import { staticClassName } from '../utils';
import Modal from '../Modal';
import Type from '../Type';
import Append from '../Append';

const useStyle = style(theme => ({
  modal: {
    inset: '0px auto auto 0px !important'
  },

  // fullWidth: { width: `calc(100% - ${theme.methods.space.value('xl') * 2}px)` },

  // // maxWidth
  // xxs: { maxWidth: `320px` },

  // xs: { maxWidth: `400px` },

  // sm: { maxWidth: `480px` },

  // rg: { maxWidth: `560px` },

  // lg: { maxWidth: `800px` },

  // xl: { maxWidth: `1120px` },

  // xxl: { maxWidth: `1360px` },
}), { name: 'AmauiTooltip' });

let MODALS_OPEN = 0;

// To do

// 1. Add padding right for freezeScroll for the scroll bar if it exists and width that it is

const Tooltip = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTooltip?.props?.default }), [props_]);

  const {
    open: open_,

    label,

    leaveDelay = 0,
    enterDelay = 104,
    position = 'bottom',
    alignment = 'center',
    portal = true,
    fullWidth,
    maxWidth: maxWidth_ = 'rg',

    onOpen: onOpen_,
    onClose: onClose_,

    AppendProps = {},
    ModalProps = {},

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(open_);
  const [hover, setHover] = React.useState(false);
  const [inProp, setInProp] = React.useState(open_);

  const refs = {
    hover: React.useRef(false)
  };

  const { classes } = useStyle(props);

  let maxWidth = maxWidth_;

  if (fullWidth) maxWidth = undefined;

  const onMouseEnter = React.useCallback(() => {
    setHover(true);

    if (is('function', children?.props.onMouseEnter)) children.props.onMouseEnter();
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setHover(false);

    if (is('function', children?.props.onMouseLeave)) children.props.onMouseLeave();
  }, []);

  const onOpen = async () => {
    await wait(enterDelay);

    if (refs.hover.current) {
      if (!open) setOpen(true);
      if (!inProp) setInProp(true);

      if (is('function', onOpen_) && open) onOpen_();
    }
  };

  const onClose = async () => {
    await wait(leaveDelay);

    if (!refs.hover.current) {
      setOpen(false);

      if (is('function', onClose_) && open) onClose_();
    }
  };

  React.useEffect(() => {
    if (open_ && !open) onOpen();
    else if (!open_ && open) setInProp(false);
  }, [open_]);

  React.useEffect(() => {
    refs.hover.current = hover;

    if (hover) onOpen();
    // Only update inProp,
    // for transitions
    else onClose();
  }, [hover]);

  return (
    <Append
      open={open}

      relativeTo='window'

      position={position}
      alignment={alignment}

      {...AppendProps}

      element={(
        <Modal
          open={open}

          onMouseEnter={onMouseEnter}
          onTouchStart={onMouseEnter}

          onMouseLeave={onMouseLeave}
          onTouchEnd={onMouseLeave}

          modalWrapper={false}
          portal={portal}
          background={false}
          freezeScroll={false}
          focus={false}

          disableKeyboardClose

          {...ModalProps}

          className={classNames([
            classes.modal,
            ModalProps?.className
          ])}
        >
          <Type>
            {label}
          </Type>
        </Modal>
      )}
    >
      {children && React.cloneElement(children, {
        onMouseEnter,
        onTouchStart: onMouseEnter,

        onMouseLeave,
        onTouchEnd: onMouseLeave
      })}
    </Append>
  );
});

Tooltip.displayName = 'AmauiTooltip';

export default Tooltip;
