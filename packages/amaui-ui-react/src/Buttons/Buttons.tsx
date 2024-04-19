import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconElement from '../Icon';
import TransitionElement, { TTransitionStatus } from '../Transition';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, ISize, ITonal, IVersion } from '../types';

export const IconMaterialDoneSharp = React.forwardRef((props: any, ref) => {
  const {
    className,

    ...other
  } = props;

  return (
    <IconElement
      ref={ref}

      name='DoneSharp'
      short_name='Done'

      {...other}
    >
      <path
        className={className}

        fill='none'

        d='M4.5 11.5L9.5 16.5L19.5 6.5'
      />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    borderRadius: theme.methods.shape.radius.value('xl', 'px')
  },

  orientation_horizontal: {
    '& > *': {
      height: '100% !important'
    }
  },

  orientation_vertical: {
    flexDirection: 'column',

    '& > *': {
      width: '100% !important'
    }
  },

  // Size
  size_small: { borderRadius: `${theme.shape.radius.unit * 2}px` },

  size_regular: { borderRadius: `${theme.shape.radius.unit * 2.5}px` },

  size_large: { borderRadius: `${theme.shape.radius.unit * 3.5}px` },

  // Size
  chip_size_small: { borderRadius: `${theme.shape.radius.unit - (theme.shape.radius.unit / 4)}px` },

  chip_size_regular: { borderRadius: `${theme.shape.radius.unit}px` },

  chip_size_large: { borderRadius: `${theme.shape.radius.unit + (theme.shape.radius.unit / 4)}px` },

  // Shadows
  elevation: {
    boxShadow: theme.shadows.values.neutral[1],
    transition: theme.methods.transitions.make('box-shadow'),

    '&:hover': {
      boxShadow: theme.shadows.values.neutral[3]
    }
  },

  start_orientation_horizontal: {
    '&:not(:first-of-type)': {
      borderStartStartRadius: '0px',
      borderEndStartRadius: '0px',

      '&$outlined': {
        marginInlineStart: '-1px'
      },

      '&$border:not($outlined)': {
        borderInlineStart: '1px solid currentColor'
      }
    }
  },

  end_orientation_horizontal: {
    '&:not(:last-of-type)': {
      borderStartEndRadius: '0px',
      borderEndEndRadius: '0px'
    }
  },

  start_orientation_vertical: {
    '&:not(:first-of-type)': {
      borderStartStartRadius: '0px',
      borderStartEndRadius: '0px',

      '&$outlined': {
        marginBlockStart: '-1px'
      },

      '&$border:not($outlined)': {
        borderBlockStart: '1px solid currentColor'
      }
    }
  },

  end_orientation_vertical: {
    '&:not(:last-of-type)': {
      borderEndEndRadius: '0px',
      borderEndStartRadius: '0px'
    }
  },

  path: {
    strokeWidth: '2.5px',
    strokeDasharray: '30',
    strokeDashoffset: '30',
    stroke: 'currentcolor',
    transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 'xxs', timing_function: 'accelerated' })
  },

  pathIn: {
    strokeDashoffset: '0',
    transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 'xxs', delay: 45, timing_function: 'accelerated' })
  },

  fullWidth: {
    width: '100%'
  },

  selected: {
    zIndex: '1'
  },

  disabled: {

  }
}), { name: 'amaui-Buttons' });

export const IconDoneAnimated = (props: any) => {
  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const Transition = React.useMemo(() => theme?.elements?.Transition || TransitionElement, [theme]);

  const {
    in: inProp,
    simple,
    onExited,
    fullWidth,
    noExitAnimation,
    add,

    className,
    style,

    ...other
  } = props;

  const styles = props.simple ? {} : {
    adding: {
      width: style?.fontSize
    },
    added: {
      width: style?.fontSize
    }
  };

  return (
    <Transition
      in={inProp}

      onExited={() => {
        if (is('function', onExited) && !simple) onExited();
      }}

      add={add}

      enterOnAdd={false}
    >
      {(status: TTransitionStatus) => React.cloneElement(
        <span
          className={className}

          style={style}
        >
          <IconMaterialDoneSharp
            className={classNames([
              classes.path,
              (['adding', 'added', 'enter', 'entering', 'entered'].includes(status) || noExitAnimation) && classes.pathIn
            ])}

            size='inherit'

            {...other}
          />
        </span>,
        {
          style: {
            display: 'inline-flex',
            overflow: 'hidden',

            ...(!simple ? { width: 0 } : {}),

            transition: theme.methods.transitions.make('width', { duration: 'xs', timing_function: 'accelerated' }),

            ...styles[status],

            ...style
          }
        }
      )}
    </Transition>
  );
};

export interface IButtons extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  colorSelected?: IColor;
  size?: ISize;

  value?: any;
  valueDefault?: any;
  onChange?: (value: any) => any;

  select?: 'single' | 'multiple';
  unselect?: boolean;
  orientation?: 'vertical' | 'horizontal';
  noCheckIcon?: boolean;
  elevation?: boolean;
  border?: boolean;
  chip?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Buttons: React.FC<IButtons> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiButtons?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    version = 'outlined',
    colorSelected = props.color,
    size = 'regular',

    value,
    valueDefault,
    onChange,

    select,
    unselect = true,
    orientation = 'horizontal',
    noCheckIcon,
    elevation = true,
    border = true,
    chip,
    fullWidth,
    disabled,

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [preSelected, setPreSelected] = React.useState([]);
  const [selected, setSelected] = React.useState(() => {
    const valueNew = valueDefault !== undefined ? valueDefault : value;

    return valueNew !== undefined ? is('array', valueNew) ? valueNew : [valueNew] : [];
  });

  const refs = {
    noCheckIcon: React.useRef(noCheckIcon)
  };

  refs.noCheckIcon.current = noCheckIcon;

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init && value !== selected) setSelected(is('array', value) ? value : [value]);
  }, [value]);

  const onSelect = (itemProps: any, start = false) => {
    let valueNew: any;

    if (start) {
      if (selected.includes(itemProps.value)) {
        valueNew = selected.filter(item => item !== itemProps.value);
      }
      else {
        if (select === 'single') valueNew = [itemProps.value];

        if (select === 'multiple') valueNew = unique([...selected, itemProps.value]);
      }
    }
    else {
      // Unselect
      if (
        selected.includes(itemProps.value) &&
        (
          unselect ||
          (select === 'multiple' && selected.length > 1)
        )
      ) {
        if (!refs.noCheckIcon.current) {
          setPreSelected(items => items.filter(item => item !== itemProps.value));
        }
        else {
          valueNew = selected.filter(item => item !== itemProps.value);
        }
      }
      else {
        if (select === 'single') {
          if (!refs.noCheckIcon.current) {
            setPreSelected([itemProps.value]);

            valueNew = [...selected, itemProps.value];
          }
          else valueNew = [itemProps.value];
        }
        if (select === 'multiple') {
          if (!refs.noCheckIcon.current) {
            setPreSelected(items => unique([...items, itemProps.value]));

            valueNew = unique([...selected, itemProps.value]);
          }
          else valueNew = unique([...selected, itemProps.value]);
        }
      }
    }

    if (valueNew !== undefined) {
      // Update inner or controlled
      if (!props.hasOwnProperty('value')) setSelected(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  };

  const updateSelected = (itemProps: any) => {
    const valueNew = selected.filter(item => item !== itemProps.value);

    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setSelected(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  const children = React.Children
    .toArray(children_)
    // Clamp array to max of 5 values
    // .slice(0, 5)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      className: classNames([
        item.className,
        classes.item,
        classes[version],
        classes[`start_orientation_${orientation}`],
        classes[`end_orientation_${orientation}`],
        selected.includes(item.props.value) && classes.selected,
        border && classes.border
      ]),

      onClick: () => {
        onSelect(item.props, !!item.props.start);

        // Invoke items on click method
        if (is('function', item.props.onClick)) item.props.onClick();
      },

      ...(!refs.noCheckIcon.current && item.props.start && selected.includes(item.props.value) ? {
        start: (
          <IconDoneAnimated simple in add />
        )
      } : {}),

      ...(!refs.noCheckIcon.current && (!item.props.start && (selected.includes(item.props.value) || preSelected.includes(item.props.value))) ? {
        start: (
          <IconDoneAnimated
            in={(item.props.start ? selected : preSelected).includes(index)}

            onExited={() => updateSelected(item.props)}

            add
          />
        )
      } : {}),

      version: item.props?.version !== undefined ? item.props.version : version,
      color: selected.includes(item.props.value) ? colorSelected || (item.props?.color !== undefined ? item.props.color : color) : (item.props?.color !== undefined ? item.props.color : color),
      size: item.props?.size !== undefined ? item.props.size : size,
      tonal: item.props?.tonal !== undefined ? item.props.tonal : tonal,

      elevation: false,

      selected: selected.includes(item.props.value),

      disabled: item.props?.disabled !== undefined ? item.props.disabled : disabled
    }));

  return (
    <Line
      ref={ref}

      gap={0}

      direction='row'

      display='inline-flex'

      className={classNames([
        staticClassName('Buttons', theme) && [
          'amaui-Buttons-root',
          `amaui-Buttons-version-${version}`,
          `amaui-Buttons-size-${size}`,
          disabled && `amaui-Buttons-disabled`,
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        chip && classes[`chip_size_${size}`],
        classes[`orientation_${orientation}`],
        fullWidth && classes.fullWidth,
        elevation && !disabled && ['filled', 'tonal'].includes(version) && classes.elevation,
        disabled && classes.disabled
      ])}

      {...other}
    >
      {children}
    </Line>
  );
});

Buttons.displayName = 'amaui-Buttons';

export default Buttons;
