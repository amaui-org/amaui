import React from 'react';

import { is, wait, random, clamp } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';
import LinearProgress from '../LinearProgress';
import MainProgressContext from './Context';
import { ILinearProress } from '../LinearProgress/LinearProgress';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

export interface IMainProgressStartArgument {
  tonal?: boolean;
  color?: string;
}

export interface IMainProgressValue {
  start: (value?: IMainProgressStartArgument) => void;
  increment: () => void;
  update: (value: number) => void;
  done: () => void;
}

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.tooltip - 14,

    '&.amaui-LinearProgress-root': {
      height: '2px'
    },

    '& .amaui-LinearProgress-buffer': {
      background: 'transparent'
    }
  },

  fixed: {
    insetInline: '0',

    '&.amaui-LinearProgress-root': {
      position: 'fixed'
    }
  },

  position_top: {
    top: '0'
  },

  position_bottom: {
    bottom: '0'
  }
}), { name: 'amaui-MainProgress' });

export interface IMainProgress extends ILinearProress {
  min?: number;
  max?: number;

  firstIncrement?: boolean;

  incrementMin?: number;
  incrementMax?: number;

  stepMin?: number;
  stepMax?: number;
  stepInterval?: number;

  onStart?: () => any;
  onIncrement?: (value: number) => any;
  onUpdate?: (value: number) => any;
  onDone?: () => any;

  fixed?: boolean;
  position?: 'top' | 'bottom';

  TransitionComponent?: IElementReference;

  TransitionComponentProps?: IPropsAny;
}

const MainProgress: React.FC<IMainProgress> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMainProgress?.props?.default, ...props_ }), [props_]);

  const {
    min = 0,
    max = 99,

    firstIncrement = true,

    incrementMin = 4,
    incrementMax = 14,

    stepMin = 1,
    stepMax = 4,
    stepInterval = 700,

    onStart,
    onIncrement,
    onUpdate,
    onDone,

    fixed = true,
    position = 'top',

    TransitionComponent = Fade,

    TransitionComponentProps = {},

    className,

    children,

    ...other
  } = props;

  const [inProp, setInProp] = React.useState(false);
  const [value, setValue] = React.useState(min);

  const refs = {
    value_: React.useRef<IMainProgressValue>({} as any),
    value: React.useRef<number>(),
    min: React.useRef<number>(),
    max: React.useRef<number>(),
    firstIncrement: React.useRef<boolean>(),
    incrementMin: React.useRef<number>(),
    incrementMax: React.useRef<number>(),
    stepInterval: React.useRef<number>(),
    stepMin: React.useRef<number>(),
    stepMax: React.useRef<number>(),
    TransitionComponentProps: React.useRef<any>(),
    linearProgress: React.useRef<any>(),
    interval: React.useRef<any>(),
    props: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.value.current = value;

  refs.props.current = props;

  refs.min.current = min;

  refs.max.current = max;

  refs.firstIncrement.current = firstIncrement;

  refs.incrementMin.current = incrementMin;

  refs.incrementMax.current = incrementMax;

  refs.stepInterval.current = stepInterval;

  refs.stepMin.current = stepMin;

  refs.stepMax.current = stepMax;

  refs.TransitionComponentProps.current = TransitionComponentProps;

  const clear = () => {
    if (refs.interval.current) {
      clearInterval(refs.interval.current);

      refs.interval.current = undefined;
    }
  };

  const start = React.useCallback((value_?: IMainProgressStartArgument) => {
    // Reset
    clear();

    // Update
    refs.linearProgress.current = value_;

    // Open
    setInProp(true);

    // Set initial value to min
    const min_ = refs.min.current !== undefined ? refs.min.current : 0;

    const max_ = refs.max.current !== undefined ? refs.max.current : 0;

    setValue(min_);

    // start inc interval for steps
    // in refs.interval

    // in interval, remove interval if value is >= max
    if (min_ < max_) {
      const stepInterval_ = refs.stepInterval.current !== undefined ? refs.stepInterval.current : 700;

      refs.interval.current = setInterval(() => {
        if (refs.value.current >= max_) clearInterval(refs.interval.current);

        setValue(previousValue => clamp(previousValue + random(refs.stepMin.current, refs.stepMax.current), refs.min.current, refs.max.current));
      }, stepInterval_);
    }

    if (is('function', onStart)) onStart();
  }, []);

  const increment = React.useCallback(() => {
    // Inc value random between incrementMin, incrementMax, with clam to min, max
    let valueNew = refs.value.current;

    valueNew += clamp(random(refs.incrementMin.current, refs.incrementMax.current), refs.min.current, refs.max.current);

    setValue(valueNew);

    if (is('function', onIncrement)) onIncrement(valueNew);
  }, []);

  const update = React.useCallback((value_: number) => {
    const valueNew = value_;

    setValue(valueNew);

    if (is('function', onUpdate)) onUpdate(valueNew);
  }, []);

  const done = React.useCallback(async () => {
    clear();

    // Update value to 100
    setValue(100);

    // Update inProp to false with the timeout value
    const timeout = theme.transitions.duration.rg + 44;

    await wait(timeout);

    setInProp(false);

    if (is('function', onDone)) onDone();
  }, []);

  const onExited = () => {
    // Reset
    setValue(0);
  };

  React.useEffect(() => {
    if (inProp) {
      if (refs.firstIncrement.current) increment();
    }
  }, [inProp]);

  TransitionComponentProps.in = inProp;

  refs.value_.current.start = start;

  refs.value_.current.increment = increment;

  refs.value_.current.update = update;

  refs.value_.current.done = done;

  return (
    <MainProgressContext.Provider value={refs.value_.current}>
      <TransitionComponent
        in={inProp}

        onExited={onExited}

        {...TransitionComponentProps}
      >
        <LinearProgress
          ref={ref}

          value={value}

          version='determinate'

          className={classNames([
            staticClassName('MainProgress', theme) && [
              `amaui-MainProgress-root`
            ],

            className,
            classes.root,
            classes[`position_${position}`],
            fixed && classes.fixed
          ])}

          {...other}

          {...refs.linearProgress.current}
        />
      </TransitionComponent>

      {children}
    </MainProgressContext.Provider>
  );
});

MainProgress.displayName = 'amaui-MainProgress';

export default MainProgress;
