import React from 'react';

import { is } from '@amaui/utils';
import { style, classNames } from '@amaui/style-react';

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
    justifyContent: 'center'
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
}

const Modal = React.forwardRef((props: any, ref: any) => {
  const [open, setOpen] = React.useState(props.open);
  const [inProp, setInProp] = React.useState(props.open);
  const { classes } = useStyle();

  const {
    open: open_,
    className,
    BackgroundComponent = Fade,
    BackgroundProps = {},
    ModalComponent = Fade,
    ModalProps = {},

    ...other
  } = props;

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

  const onClose = () => {
    if (is('function', props.onClose)) props.onClose();
  };

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
        <Focus>
          {/* Background */}
          <BackgroundComponent
            in={inProp}

            add

            {...BackgroundProps}
          >
            <div
              className={classes.background}

              onClick={onClose}
            />
          </BackgroundComponent>

          {/* Modal */}
          <div
            className={classes.modalRoot}

            onClick={onClose}
          >
            <ModalComponent
              in={inProp}

              onExited={onExited}

              add

              {...ModalProps}
            >
              <Surface>
                a
              </Surface>
            </ModalComponent>
          </div>
        </Focus>
      </div>
    </Portal>
  );
});

export default Modal;
