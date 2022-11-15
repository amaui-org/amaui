import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Transition, { TTransitionStatus } from '../Transition';
import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TSize, TTonal, TVersion } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    borderRadius: theme.methods.shape.radius.value('xl', 'px')
  },

  orientation_horizontal: {
    '& > *': {
      height: '100%'
    }
  },

  orientation_vertical: {
    flexDirection: 'column',
    '& > *': {
      width: '100%'
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
}), { name: 'AmauiButtons' });

export const IconMaterialDoneSharp = React.forwardRef((props: any, ref) => {
  const {
    className,

    ...other
  } = props;

  return (
    <Icon
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
    </Icon>
  );
});

export const IconDoneAnimated = (props: any) => {
  const { classes } = useStyle(props);

  const theme = useAmauiTheme();

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
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;
  colorSelected?: TColor;
  size?: TSize;

  value?: any;
  valueDefault?: any;
  onChange?: (value: any) => any;

  select?: 'single' | 'multiple';
  orientation?: 'vertical' | 'horizontal';
  noCheckIcon?: boolean;
  elevation?: boolean;
  border?: boolean;
  chip?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Buttons = React.forwardRef((props_: IButtons, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiButtons?.props?.default, ...props_ }), [props_]);

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

  const [init, setInit] = React.useState(false);
  const [preSelected, setPreSelected] = React.useState([]);
  const [selected, setSelected] = React.useState(() => {
    const valueNew = valueDefault !== undefined ? valueDefault : value;

    return valueNew !== undefined ? is('array', valueNew) ? valueNew : [valueNew] : [];
  });

  const { classes } = useStyle(props);

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
      if (selected.includes(itemProps.value)) {
        if (!noCheckIcon) {
          setPreSelected(items => items.filter(item => item !== itemProps.value));
        }
        else {
          valueNew = selected.filter(item => item !== itemProps.value);
        }
      }
      else {
        if (select === 'single') {
          if (!noCheckIcon) {
            setPreSelected([itemProps.value]);

            valueNew = [...selected, itemProps.value];
          }
          else valueNew = [itemProps.value];
        }
        if (select === 'multiple') {
          if (!noCheckIcon) {
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

      ...(!noCheckIcon && item.props.start && selected.includes(item.props.value) ? {
        start: (
          <IconDoneAnimated simple in add />
        )
      } : {}),

      ...(!noCheckIcon && (!item.props.start && (selected.includes(item.props.value) || preSelected.includes(item.props.value))) ? {
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
          'AmauiButtons-root',
          `AmauiButtons-select-${select}`,
          `AmauiButtons-version-${version}`,
          `AmauiButtons-color-${!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color) ? 'new' : color}`,
          `AmauiButtons-size-${size}`,
          `AmauiButtons-orientation-${orientation}`,
          elevation && !disabled && ['filled', 'tonal'].includes(version) && `AmauiButtons-elevation`,
          tonal && `AmauiButtons-tonal`,
          chip && `AmauiButtons-chip`,
          border && `AmauiButtons-border`,
          fullWidth && `AmauiButtons-full-width`,
          noCheckIcon && `AmauiButtons-no-check-icon`,
          disabled && `AmauiButtons-disabled`,
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

Buttons.displayName = 'AmauiButtons';

export default Buttons;
