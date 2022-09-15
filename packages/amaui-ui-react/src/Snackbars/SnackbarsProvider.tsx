import React from 'react';

import { is, getID } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Snackbar from '../Snackbar';
import SnackbarsContext from './SnackbarsContext';
import Slide from '../Slide';
import Expand from '../Expand';
import Line from '../Line';

import { staticClassName } from '../utils';

export interface ISnackbarsProvider {
  add: (value: any) => void;
  remove: (value: 'first' | 'last' | string) => void;
}

const useStyle = style(theme => ({
  root: {
    position: 'fixed',
    zIndex: theme.z_index.modal,
  },

  position_top: {
    top: '24px',

    '& .AmauiSnackbar-root': {
      marginBottom: '16px'
    }
  },

  position_bottom: {
    bottom: '24px',

    '& .AmauiSnackbar-root': {
      marginTop: '16px'
    }
  },

  alignment_left: {
    left: '24px',
    right: 'auto'
  },

  alignment_start: {
    insetInlineStart: '24px',
    insetInlineEnd: 'auto'
  },

  alignment_center: {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  },

  alignment_right: {
    right: '24px',
    left: 'auto'
  },

  alignment_end: {
    insetInlineEnd: '24px',
    insetInlineStart: 'auto'
  }
}), { name: 'AmauiSnackbarsProvider' });

const SnackbarsProvider = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSnackbarsProvider?.props?.default }), [props_]);

  const {
    max = 4,
    position = 'bottom',
    alignment = 'start',

    SnackbarProps = {
      TransitionComponent: Slide,

      TransitionComponentProps: {
        add: true,
        direction: (props.position === 'top' && props.alignment === 'center') ? 'top' : (props.position === 'bottom' && props.alignment === 'center') ? 'bottom' : props.alignment === 'left' ? 'left' : 'right'
      },
    },

    className,

    children,

    ...other
  } = props;

  const [preOpen, setPreOpen] = React.useState([]);
  const [open, setOpen] = React.useState([]);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<HTMLElement>(),
    value: React.useRef<ISnackbarsProvider>({} as any),
    open: React.useRef<any>(),
    preOpen: React.useRef<any>()
  };

  refs.open.current = open;

  refs.preOpen.current = preOpen;

  // Start and ltr change direction to left or right
  if (alignment === 'start' && theme.direction === 'ltr') SnackbarProps.TransitionComponentProps.direction = 'left';

  if (alignment === 'start' && theme.direction === 'rtl') SnackbarProps.TransitionComponentProps.direction = 'right';

  // End and ltr change direction to right or left
  if (alignment === 'end' && theme.direction === 'ltr') SnackbarProps.TransitionComponentProps.direction = 'right';

  if (alignment === 'end' && theme.direction === 'rtl') SnackbarProps.TransitionComponentProps.direction = 'left';

  // Add preOpen
  React.useEffect(() => {
    // Add from preOpen
    const toAdd = max - open.length;

    if (toAdd > 0 && !!refs.preOpen.current.length) {
      const itemsToAdd = refs.preOpen.current.slice(0, toAdd);

      setPreOpen(itemsPreOpen => [...itemsPreOpen].slice(toAdd));

      if (!!itemsToAdd.length) setOpen(() => {
        const itemsNew = [...refs.open.current];

        if (position === 'top') itemsNew.push(...itemsToAdd);
        else if (position === 'bottom') itemsNew.unshift(...itemsToAdd);

        return itemsNew;
      });
    }
  }, [open.length]);

  const add = (value: any) => {
    const value_ = {
      id: getID(),

      in: true,
      expand: true,

      Snackbar: {
        ...value
      }
    };

    // Pre open
    if (is('number', max) && open.length >= max) {
      setPreOpen(previous => [...previous, value_]);
    }
    // Open
    else {
      setOpen(previous => {
        const itemsNew = [...previous];

        if (position === 'top') itemsNew.push(value_);
        else if (position === 'bottom') itemsNew.unshift(value_);

        return itemsNew;
      });
    }

    return value_;
  };

  const remove = (id_: any) => {
    let id = id_;

    if (id_ === 'first') id = open[open.length - 1]?.id;

    if (id_ === 'last') id = open[0]?.id;

    onClose(id);
  };

  const onClose = (id: string) => {
    setOpen(items => {
      const itemsNew = [...items];

      const item = itemsNew.find(item_ => item_.id === id);

      if (item) item.in = false;

      return itemsNew;
    });
  };

  const onSnackbarExited = (id: string) => {
    setOpen(items => {
      const itemsNew = [...items];

      const item = itemsNew.find(item_ => item_.id === id);

      if (item) item.expand = false;

      return itemsNew;
    });
  };

  const onExpandExited = (id: string) => {
    setOpen(items => {
      let itemsNew = [...items];

      const index = itemsNew.findIndex(item_ => item_.id === id);

      if (index > -1) itemsNew.splice(index, 1);

      return itemsNew;
    });
  };

  refs.value.current.add = add;

  refs.value.current.remove = remove;

  return (
    <SnackbarsContext.Provider value={refs.value.current}>
      {children}

      <Line
        ref={ref}

        align={position === 'top' ? 'flex-start' : 'flex-end'}

        gap={0}

        className={classNames([
          staticClassName('Snackbar', theme) && [
            `AmauiSnackbars-root`
          ],

          className,
          classes.root,
          classes[`position_${position}`],
          classes[`alignment_${alignment}`]
        ])}

        {...other}
      >
        {open.map((item: any) => (
          <Expand
            key={item.id}

            in={item.expand}

            onExited={() => onExpandExited(item.id)}
          >
            <Snackbar
              key={item.id}

              open={item.in}

              {...SnackbarProps}

              {...item.Snackbar}

              TransitionComponentProps={{
                ...SnackbarProps?.TransitionComponentProps,
                ...item.Snackbar?.TransitionComponentProps,

                removeOnExited: false,

                onExited: (...args: any) => {
                  onSnackbarExited(item.id);

                  if (is('function', SnackbarProps?.TransitionComponentProps?.onExited)) SnackbarProps.TransitionComponentProps.onExited(...args)

                  if (is('function', item.Snackbar?.onExited)) item.Snackbar.onExited(...args)
                }
              }}

              onClose={() => onClose(item.id)}

              fixed={false}
            />
          </Expand>
        ))}
      </Line>
    </SnackbarsContext.Provider>
  );
});

SnackbarsProvider.displayName = 'AmauiSnackbarsProvider';

export default SnackbarsProvider;
