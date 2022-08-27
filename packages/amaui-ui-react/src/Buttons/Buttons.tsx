import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Transition, { TTransitionStatus } from '../Transition';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'inline-flex',
    position: 'relative',
    borderRadius: theme.methods.space.value('xl', 'px')
  },

  vertical: {
    flexDirection: 'column'
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

  start: {
    '&:not(:first-of-type)': {
      borderStartStartRadius: '0px',
      borderEndStartRadius: '0px',

      '&$outlined': {
        marginInlineStart: '-1px'
      },

      '&$border:not($outlined)': {
        borderInlineStart: '1px solid currentColor'
      }
    },
  },

  end: {
    '&:not(:last-of-type)': {
      borderStartEndRadius: '0px',
      borderEndEndRadius: '0px'
    }
  },

  vertical_start: {
    '&:not(:first-of-type)': {
      borderStartStartRadius: '0px',
      borderStartEndRadius: '0px',

      '&$outlined': {
        marginBlockStart: '-1px'
      },

      '&$border:not($outlined)': {
        borderBlockStart: '1px solid currentColor'
      }
    },
  },

  vertical_end: {
    '&:not(:last-of-type)': {
      borderEndEndRadius: '0px',
      borderEndStartRadius: '0px'
    }
  },

  path: {
    strokeWidth: '2.5px',
    strokeDasharray: 30,
    strokeDashoffset: 30,
    stroke: 'currentcolor',
    transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 'xxs', timing_function: 'accelerated' })
  },

  pathIn: {
    strokeDashoffset: 0,
    transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 'xxs', delay: 45, timing_function: 'accelerated' })
  },

  fullWidth: {
    width: '100%'
  },

  selected: {
    zIndex: 1
  },

  disabled: {
    boxShadow: 'none'
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

const Buttons = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiButtons?.props?.default }), [props_]);

  const [preSelected, setPreSelected] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const { classes } = useStyle(props);

  const {
    select,
    tonal,
    version = 'outlined',
    color = 'primary',
    colorSelected = props.color,
    size = 'regular',
    vertical,
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

  const onSelect = (index: number, itemProps: any, startIcon = false) => {
    if (startIcon) {
      if (selected.includes(index)) {
        setSelected(items => items.filter(item => item !== index));

        if (is('function', itemProps.onUnselected)) itemProps.onUnselected();
      }
      else {
        if (select === 'single') setSelected([index]);

        if (select === 'multi') setSelected(items => unique([...items, index]));

        if (is('function', itemProps.onSelected)) itemProps.onSelected();
      }
    }
    else {
      // Unselect
      if (selected.includes(index)) {
        if (!noCheckIcon) {
          setPreSelected(items => items.filter(item => item !== index));
        }
        else setSelected(items => items.filter(item => item !== index));

        if (is('function', itemProps.onUnselected)) itemProps.onUnselected();
      }
      else {
        if (select === 'single') {
          if (!noCheckIcon) {
            setPreSelected([index]);

            setSelected(items => [...items, index]);
          }
          else setSelected(() => [index]);
        }
        if (select === 'multi') {
          if (!noCheckIcon) {
            setPreSelected(items => unique([...items, index]));

            setSelected(items => unique([...items, index]));
          }
          else setSelected(items => unique([...items, index]));
        }

        if (is('function', itemProps.onSelected)) itemProps.onSelected();
      }
    }
  };

  const updateSelected = (index: number, itemProps: any) => {
    setSelected(items => items.filter(item => item !== index));
  };

  const children = React.Children
    .toArray(children_)
    // Clamp array to max of 5 values
    .slice(0, 5)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      className: classNames([
        item.className,
        classes.item,
        classes[version],
        !vertical ? [
          classes.start,
          classes.end
        ] : [
          classes.vertical_start,
          classes.vertical_end
        ],
        selected.includes(index) && classes.selected,
        border && classes.border
      ]),

      onClick: () => {
        onSelect(index, item.props, !!item.props.startIcon);

        // Invoke items on click method
        if (is('function', item.props.onClick)) item.props.onClick();
      },

      ...(!noCheckIcon && item.props.startIcon && selected.includes(index) ? {
        startIcon: (
          <IconDoneAnimated simple in add />
        )
      } : {}),

      ...(!noCheckIcon && (!item.props.startIcon && (selected.includes(index) || preSelected.includes(index))) ? {
        startIcon: (
          <IconDoneAnimated
            in={(item.props.startIcon ? selected : preSelected).includes(index)}

            onExited={() => updateSelected(index, item.props)}

            add
          />
        )
      } : {}),

      version: item.props?.version !== undefined ? item.props.version : version,
      color: selected.includes(index) ? colorSelected || (item.props?.color !== undefined ? item.props.color : color) : (item.props?.color !== undefined ? item.props.color : color),
      size: item.props?.size !== undefined ? item.props.size : size,
      tonal: item.props?.tonal !== undefined ? item.props.tonal : tonal,

      elevation: false,

      selected: selected.includes(index),

      disabled: item.props?.disabled !== undefined ? item.props.disabled : disabled
    }));

  console.log(1, colorSelected);
  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('Buttons', theme) && [
          'AmauiButtons-root',
          `AmauiButtons-select-${select}`,
          `AmauiButtons-version-${version}`,
          `AmauiButtons-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          `AmauiButtons-size-${size}`,
          elevation && !disabled && ['filled', 'tonal'].includes(version) && `AmauiButtons-elevation`,
          tonal && `AmauiButtons-tonal`,
          chip && `AmauiButtons-chip`,
          border && `AmauiButtons-border`,
          vertical && `AmauiButtons-vertical`,
          fullWidth && `AmauiButtons-fullWidth`,
          disabled && `AmauiButtons-disabled`,
        ],

        classes.root,
        className,
        classes[`size_${size}`],
        chip && classes[`chip_size_${size}`],
        vertical && classes.vertical,
        fullWidth && classes.fullWidth,
        elevation && !disabled && ['filled', 'tonal'].includes(version) && classes.elevation,
        disabled && classes.disabled
      ])}

      {...other}
    >
      {children}
    </div>
  );
});

Buttons.displayName = 'AmauiButtons';

export default Buttons;
