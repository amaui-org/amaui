import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SnackbarElement from '../Snackbar';
import SlideElement from '../Slide';
import ExpandElement from '../Expand';
import LineElement from '../Line';
import SnackbarsContext from './Context';
import { ISnackbar } from '../Snackbar/Snackbar';
import { TLineAlign } from '../Line/Line';
import { staticClassName } from '../utils';
import { IBaseElement, IPropsAny } from '../types';

export interface ISnackbarsValue {
  add: (value: ISnackbar) => void;
  remove: (value: 'first' | 'last' | string) => void;
}

const useStyle = styleMethod(theme => ({
  root: {
    position: 'fixed',
    zIndex: theme.z_index.modal + 114,

    '& > *': {
      width: 'auto !important'
    }
  },

  position_top: {
    top: '24px',

    '& .amaui-Snackbar-root': {
      marginBottom: '16px'
    }
  },

  position_bottom: {
    bottom: '24px',

    '& .amaui-Snackbar-root': {
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
}), { name: 'amaui-Snackbars' });

export interface ISnackbars extends IBaseElement {
  max?: number;
  position?: 'top' | 'bottom';
  alignment?: 'start' | 'left' | 'center' | 'right' | 'end';

  SnackbarProps?: IPropsAny;
}

const Snackbars: React.FC<ISnackbars> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSnackbars?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Snackbar = React.useMemo(() => theme?.elements?.Snackbar || SnackbarElement, [theme]);

  const Slide = React.useMemo(() => theme?.elements?.Slide || SlideElement, [theme]);

  const Expand = React.useMemo(() => theme?.elements?.Expand || ExpandElement, [theme]);

  const {
    max = 4,
    position = 'bottom',
    alignment = 'start',

    SnackbarProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [preOpen, setPreOpen] = React.useState([]);
  const [open, setOpen] = React.useState([]);

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<ISnackbarsValue>({} as any),
    open: React.useRef<any>(),
    preOpen: React.useRef<any>()
  };

  refs.open.current = open;

  refs.preOpen.current = preOpen;

  const snackbarProps: any = {
    TransitionComponent: Slide,

    TransitionComponentProps: {
      add: true,
      direction: (props.position === 'top' && props.alignment === 'center') ? 'top' : (props.position === 'bottom' && props.alignment === 'center') ? 'bottom' : props.alignment === 'left' ? 'left' : 'right'
    },

    ...SnackbarProps
  };

  // Start and ltr change direction to left or right
  if (alignment === 'start' && theme.direction === 'ltr') snackbarProps.TransitionComponentProps.direction = 'left';

  if (alignment === 'start' && theme.direction === 'rtl') snackbarProps.TransitionComponentProps.direction = 'right';

  // End and ltr change direction to right or left
  if (alignment === 'end' && theme.direction === 'ltr') snackbarProps.TransitionComponentProps.direction = 'right';

  if (alignment === 'end' && theme.direction === 'rtl') snackbarProps.TransitionComponentProps.direction = 'left';

  // Add preOpen
  React.useEffect(() => {
    // Add from preOpen
    const toAdd = max - open.length;

    if (toAdd > 0 && !!refs.preOpen.current.length) {
      const itemsToAdd = refs.preOpen.current.slice(0, toAdd);

      setPreOpen(itemsPreOpen => unique([...itemsPreOpen], 'id').slice(toAdd));

      if (itemsToAdd.length) setOpen(() => {
        const itemsNew = [...refs.open.current];

        if (position === 'top') itemsNew.push(...itemsToAdd);
        else if (position === 'bottom') itemsNew.unshift(...itemsToAdd);

        return unique(itemsNew, 'id');
      });
    }
  }, [open.length]);

  const add = (value: ISnackbar) => {
    const value_ = {
      id: new Date().getTime(),

      in: true,
      expand: true,

      Snackbar: {
        color: 'default',

        ...value
      }
    };

    // Pre open
    if (is('number', max) && open.length >= max) {
      setPreOpen(previous => unique([...previous, value_], 'id'));
    }
    // Open
    else {
      setOpen(previous => {
        const itemsNew = [...previous];

        if (position === 'top') itemsNew.push(value_);
        else if (position === 'bottom') itemsNew.unshift(value_);

        return unique(itemsNew, 'id');
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
      const itemsNew = unique([...items], 'id');

      const item = itemsNew.find(item_ => item_.id === id);

      if (item) item.in = false;

      return unique(itemsNew, 'id');
    });
  };

  const onSnackbarExited = (id: string) => {
    setOpen(items => {
      const itemsNew = unique([...items], 'id');

      const item = itemsNew.find(item_ => item_.id === id);

      if (item) item.expand = false;

      return unique(itemsNew, 'id');
    });
  };

  const onExpandExited = (id: string) => {
    setOpen(items => {
      const itemsNew = unique([...items], 'id');

      const index = itemsNew.findIndex(item_ => item_.id === id);

      if (index > -1) itemsNew.splice(index, 1);

      return unique(itemsNew, 'id');
    });
  };

  refs.value.current.add = add;

  refs.value.current.remove = remove;

  let align: TLineAlign = 'center';

  if (['start', 'left'].includes(alignment)) align = 'flex-start';

  if (['right', 'end'].includes(alignment)) align = 'flex-end';

  return (
    <SnackbarsContext.Provider value={refs.value.current}>
      {children}

      <Line
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else if (ref?.current) ref.current = item;
          }

          refs.root.current = item;
        }}

        align={align}

        gap={0}

        className={classNames([
          staticClassName('Snackbars', theme) && [
            `amaui-Snackbars-root`
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

            parent={refs.root.current}

            onExited={() => onExpandExited(item.id)}
          >
            <Snackbar
              key={item.id}

              id={item.id}

              open={item.in}

              {...snackbarProps}

              {...item.Snackbar}

              TransitionComponentProps={{
                ...snackbarProps?.TransitionComponentProps,
                ...item.Snackbar?.TransitionComponentProps,

                removeOnExited: false,

                onExited: (...args: any) => {
                  onSnackbarExited(item.id);

                  if (is('function', snackbarProps?.TransitionComponentProps?.onExited)) snackbarProps.TransitionComponentProps.onExited(...args);

                  if (is('function', item.Snackbar?.onExited)) item.Snackbar.onExited(...args);
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

Snackbars.displayName = 'amaui-Snackbars';

export default Snackbars;
