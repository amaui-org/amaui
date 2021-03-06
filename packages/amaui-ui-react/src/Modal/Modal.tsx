import React from 'react';

import { is } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import Portal from '../Portal';
import Focus from '../Focus';
import Fade from '../Fade';
import Surface from '../Surface';

const useStyle = style(theme => ({
  root: {
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
  modalRoot: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
  },
  surface: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: `${theme.space.unit * 35}px`,
    maxHeight: `calc(100% - ${theme.methods.space.value('xl') * 2}px)`,
    margin: theme.methods.space.value('xl', 'px'),
    pointerEvents: 'all',

    '&$fullScreen': {
      width: ['100%', '!important'],
      height: ['100%', '!important'],
      borderRadius: [0, '!important'],
      maxWidth: ['unset', '!important'],
      maxHeight: ['unset', '!important'],
      margin: [0, '!important']
    },

    '&$fullWidth': {
      width: `calc(100% - ${theme.methods.space.value('xl') * 2}px)`
    },

    // maxWidth
    '&$xxs': {
      maxWidth: `${theme.space.unit * 40}px`,
    },
    '&$xs': {
      maxWidth: `${theme.space.unit * 50}px`,
    },
    '&$sm': {
      maxWidth: `${theme.space.unit * 60}px`,
    },
    '&$rg': {
      maxWidth: `${theme.space.unit * 70}px`,
    },
    '&$lg': {
      maxWidth: `${theme.space.unit * 100}px`,
    },
    '&$xl': {
      maxWidth: `${theme.space.unit * 140}px`,
    },
    '&$xxl': {
      maxWidth: `${theme.space.unit * 170}px`,
    },
  }
}), { name: 'AmauiModal' });

let MODALS_OPEN = 0;

const modal = {
  open: () => {
    MODALS_OPEN++;

    window.document.body.style.overflow = 'hidden';
  },
  close: () => {
    MODALS_OPEN--;

    if (!MODALS_OPEN) window.document.body.style.removeProperty('overflow');
  }
};

const Modal = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModal?.props?.default }), [props_]);

  const [open, setOpen] = React.useState(props.open);
  const [inProp, setInProp] = React.useState(props.open);
  const { classes } = useStyle(props);
  const refs = {
    focus: React.useRef<HTMLDivElement>()
  };

  const {
    open: open_,
    className,

    fullScreen,
    fullWidth,
    maxWidth: maxWidth_ = 'rg',

    disableKeyboardClose,
    disableBackgroundClose,

    BackgroundComponent = Fade,
    BackgroundProps = {},

    ModalComponent = Fade,
    ModalProps = {},

    SurfaceProps = {},

    children,

    ...other
  } = props;

  let maxWidth = maxWidth_;

  if (fullWidth) maxWidth = undefined;

  const onClose = () => {
    if (is('function', props.onClose) && open) props.onClose();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && !disableKeyboardClose) onClose();
  };

  React.useEffect(() => {
    if (open) modal.open();

    return () => {
      if (open) modal.close();
    };
  }, []);

  React.useEffect(() => {
    if (open_ && !open) {
      setOpen(true);
      setInProp(true);

      modal.open();
    }
    else if (!open_ && open) setInProp(false);
  }, [open_]);

  React.useEffect(() => {
    if (open) refs.focus.current.focus();
  }, [open]);

  const onExited = () => {
    setOpen(false);

    modal.close();
  };

  if (!open) return null;

  return (
    <Portal element={window.document.body}>
      <div
        ref={ref}

        className={classNames([
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
              className={classes.background}

              onClick={() => !disableBackgroundClose && onClose()}
            />
          </BackgroundComponent>

          {/* Modal */}
          <div
            className={classes.modalRoot}
          >
            <ModalComponent
              in={inProp}

              onExited={onExited}

              add

              {...ModalProps}
            >
              <Surface
                className={classNames([
                  classes.surface,

                  fullScreen && classes.fullScreen,
                  fullWidth && classes.fullWidth,
                  classes[maxWidth],

                  SurfaceProps.className
                ])}

                color='primary'

                tabIndex='-1'

                onKeyDown={onKeyDown}

                {...SurfaceProps}
              >
                {children}
              </Surface>
            </ModalComponent>
          </div>
        </Focus>
      </div>
    </Portal>
  );
});

export default Modal;
