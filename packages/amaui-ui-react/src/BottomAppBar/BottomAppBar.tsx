import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import TransitionElement, { TTransitionStatus } from '../Transition';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElement, ISize } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    height: '80px',
    paddingBlock: theme.methods.space.value(1.5, 'px'),
    paddingInline: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(2, 'px')}`
  },

  size_small: { height: '72px' },

  size_regular: { height: '80px' },

  size_large: { height: '88px' },

  fixed: {
    position: 'fixed',
    insetInline: '0px',
    bottom: '0px'
  },

  item: {
    opacity: '0',
    transform: 'translateY(100%)',
    transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),

    '&.enter': {
      opacity: '0',
      transform: 'translateY(100%)'
    },

    '&.entering': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.entered': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.exit': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.exiting': {
      opacity: '0',
      transform: 'translateY(0%)'
    },

    '&.exited': {
      opacity: '0',
      transform: 'translateY(0%)'
    }
  },

  mainItem: {
    opacity: '0',
    transform: 'scale(0.75)',
    transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),

    '&.enter': {
      opacity: '0',
      transform: 'scale(0.75)'
    },

    '&.entering': {
      opacity: '1',
      transform: 'scale(1)'
    },

    '&.entered': {
      opacity: '1',
      transform: 'scale(1)'
    },

    '&.exit': {
      opacity: '1',
      transform: 'scale(1)'
    },

    '&.exiting': {
      opacity: '0',
      transform: 'scale(1)'
    },

    '&.exited': {
      opacity: '0',
      transform: 'scale(1)'
    }
  }
}), { name: 'amaui-BottomAppBar' });

export interface IBottomAppBar extends ISurface {
  size?: ISize;

  main?: IElement;
  fixed?: boolean;
  noTransition?: boolean;
}

const BottomAppBar: React.FC<IBottomAppBar> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBottomAppBar?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Transition = React.useMemo(() => theme?.elements?.Transition || TransitionElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',

    main: main_,
    fixed,
    noTransition,

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const makeChildren = (values: any) => {
    return React.Children
      .toArray(values)
      .map((item: any, index: number) => (
        <Transition
          key={index}

          onRemoved={() => {
            if (index === 0) reAddChildren();
          }}

          removeOnExited
        >
          {(status: TTransitionStatus) => (
            React.cloneElement(item, {
              className: classNames([
                classes.item,
                status
              ]),

              elevation: item.props.elevation !== undefined ? item.props.elevation : false,

              version: item.props.version !== undefined ? item.props.version : 'filled',

              color: item.props.color !== undefined ? item.props.color : color,

              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

              style: {
                ...item.props.style,

                ...(status.includes('enter') && {
                  transitionDelay: `${index * 70}ms`
                })
              }
            })
          )}
        </Transition>
      ));
  };

  const makeMain = (values: any) => {
    return React.Children
      .toArray(values)
      .map((item: any, index: number) => (
        <Transition
          key={index}

          onRemoved={() => {
            if (index === 0) reAddMain();
          }}

          removeOnExited
        >
          {(status: TTransitionStatus) => (
            React.cloneElement(item, {
              className: classNames([
                classes.mainItem,
                status
              ]),

              color: item.props.color !== undefined ? item.props.color : color,

              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal && ['amaui-Fab'].includes(item.type?.displayName) ? 'secondary' : tonal
            })
          )}
        </Transition>
      ));
  };

  const [init, setInit] = React.useState(false);
  const [children, setChildren] = React.useState(() => makeChildren(children_));
  const [main, setMain] = React.useState(() => makeMain(main_));
  const [inProp, setInProp] = React.useState(true);

  const refs = {
    preChildren: React.useRef<any>(),
    preMain: React.useRef<any>()
  };

  React.useEffect(() => {
    setInit(true);
  }, []);

  const reAddChildren = () => {
    setChildren(makeChildren(refs.preChildren.current));
    setInProp(true);

    refs.preChildren.current = undefined;
  };

  const reAddMain = () => {
    setMain(makeMain(refs.preMain.current));
    setInProp(true);

    refs.preMain.current = undefined;
  };

  React.useEffect(() => {
    if (init) {
      if (!noTransition) {
        refs.preChildren.current = children_;

        setInProp(false);
      }
      else setChildren(makeChildren(children_));
    }
  }, [React.Children.toArray(children_).map((item: any) => item.key).join('')]);

  React.useEffect(() => {
    if (init) {
      if (!noTransition) {
        refs.preMain.current = main_;

        setInProp(false);
      }
      else setMain(makeMain(main_));
    }
  }, [React.Children.toArray(main_).map((item: any) => item.key).join('')]);

  return (
    <Surface
      ref={ref}

      color={color}

      tonal={tonal}

      gap={4}

      direction='row'

      align='center'

      justify='space-between'

      Component={Line}

      className={classNames([
        staticClassName('BottomAppBar', theme) && [
          'amaui-BottomAppBar-root',
          `amaui-BottomAppBar-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        fixed && classes.fixed
      ])}

      {...other}
    >
      {!!children.length && (
        <Line
          direction='row'

          align='center'

          justify='flex-start'

          gap={0}
        >
          {children.map((item: any) => (
            React.cloneElement(item, {
              in: inProp
            })
          ))}
        </Line>
      )}

      {!!main.length && (
        <Line
          direction='row'

          align='center'

          justify='flex-end'
        >
          {main.map((item: any) => (
            React.cloneElement(item, {
              in: inProp
            })
          ))}
        </Line>
      )}
    </Surface>
  );
});

BottomAppBar.displayName = 'amaui-BottomAppBar';

export default BottomAppBar;
