import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';
import Transition, { TTransitionStatus } from '../Transition';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TElement, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    height: '80px',
    paddingBlock: '12px',
    paddingInline: '4px 16px'
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
}), { name: 'AmauiBottomAppBar' });

export interface IBottomAppBar extends ISurface {
  size?: TSize;

  main?: TElement;
  fixed?: boolean;
  noTransition?: boolean;
}

const BottomAppBar = React.forwardRef((props_: IBottomAppBar, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBottomAppBar?.props?.default }), [props_]);

  const { classes } = useStyle(props);

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

              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal && ['AmauiFab'].includes(item.type?.displayName) ? 'secondary' : tonal
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
          'AmauiBottomAppBar-root',
          `AmauiBottomAppBar-size-${size}`,
          fixed && `AmauiBottomAppBar-fixed`
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

BottomAppBar.displayName = 'AmauiBottomAppBar';

export default BottomAppBar;
