import React from 'react';

import { is } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import Focus from '../Focus';
import Fade from '../Fade';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    inset: 0,
    zIndex: theme.z_index.modal
  },

  background: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.44)',
    zIndex: -1
  },

  invisible: {
    background: 'transparent'
  },

  backdropRoot: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}), { name: 'AmauiBackdrop' });

let BACKDROPS_OPEN = 0;

const backdrop = {
  open: () => {
    BACKDROPS_OPEN++;

    window.document.body.style.overflow = 'hidden';
  },
  close: () => {
    BACKDROPS_OPEN--;

    if (!BACKDROPS_OPEN) window.document.body.style.removeProperty('overflow');
  }
};

const Backdrop = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBackdrop?.props?.default }), [props_]);

  const {
    open: open_,
    invisible,

    disableKeyboardClose,
    disableBackgroundClose,

    BackgroundComponent = Fade,
    BackgroundProps = {},

    ModalComponent = Fade,
    ModalProps = {},

    onClose: onClose_,

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(open_);
  const [inProp, setInProp] = React.useState(open_);
  const { classes } = useStyle(props);
  const refs = {
    focus: React.useRef<HTMLDivElement>()
  };

  const onClose = () => {
    if (is('function', onClose_) && open) onClose_();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && !disableKeyboardClose) onClose();
  };

  React.useEffect(() => {
    if (open) backdrop.open();

    return () => {
      if (open) backdrop.close();
    };
  }, []);

  React.useEffect(() => {
    if (open_ && !open) {
      setOpen(true);
      setInProp(true);

      backdrop.open();
    }
    else if (!open_ && open) setInProp(false);
  }, [open_]);

  React.useEffect(() => {
    if (open) refs.focus.current.focus();
  }, [open]);

  const onExited = () => {
    setOpen(false);

    backdrop.close();
  };

  if (!open) return null;

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('Backdrop', theme) && [
          'AmauiBackdrop-root',
          invisible && `AmauiBackdrop-invisible`, ,
          disableBackgroundClose && `AmauiBackdrop-disableBackgroundClose`,
          disableKeyboardClose && `AmauiBackdrop-disableKeyboardClose`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Focus
        ref={refs.focus}

        onKeyDown={onKeyDown}
      >
        {/* Background */}
        <BackgroundComponent
          in={inProp}

          add

          {...BackgroundProps}
        >
          <div
            className={classNames([
              staticClassName('Backdrop', theme) && [
                'AmauiBackdrop-background'
              ],

              classes.background,
              invisible && classes.invisible
            ])}

            onClick={() => !disableBackgroundClose && onClose()}
          />
        </BackgroundComponent>

        {/* Backdrop */}
        <div
          className={classNames([
            staticClassName('Backdrop', theme) && [
              'AmauiBackdrop-backdropRoot'
            ],

            classes.backdropRoot
          ])}
        >
          <ModalComponent
            in={inProp}

            onExited={onExited}

            add

            {...ModalProps}
          >
            {children}
          </ModalComponent>
        </div>
      </Focus>
    </div>
  );
});

Backdrop.displayName = 'AmauiBackdrop';

export default Backdrop;
