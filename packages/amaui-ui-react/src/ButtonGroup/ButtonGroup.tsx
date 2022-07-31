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
    borderRadius: theme.methods.space.value('xl', 'px'),

    // Shadows
    '&$elevation': {
      boxShadow: theme.shadows.values.neutral[1],
      transition: theme.methods.transitions.make('box-shadow'),

      '&:hover': {
        boxShadow: theme.shadows.values.neutral[3]
      }
    }
  },
  left: {
    '&:not(:first-of-type)': {
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',

      '&$outlined': {
        marginLeft: '-1px'
      },

      '&$border:not($outlined)': {
        borderLeft: '1px solid currentColor'
      }
    },
  },
  right: {
    '&:not(:last-of-type)': {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px'
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
  }
}), { name: 'AmauiButtonGroup' });

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

const ButtonGroup = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiButtonGroup?.props?.default }), [props_]);

  const [preSelected, setPreSelected] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const { classes } = useStyle(props);

  const {
    select,

    tonal,
    version = 'outlined',
    color = 'primary',
    size = 'regular',

    elevation = true,
    border = true,
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
        setPreSelected(items => items.filter(item => item !== index));

        if (is('function', itemProps.onUnselected)) itemProps.onUnselected();
      }
      else {
        if (select === 'single') {
          setPreSelected([index]);

          setSelected(items => [...items, index]);
        }
        if (select === 'multi') {
          setPreSelected(items => unique([...items, index]));

          setSelected(items => unique([...items, index]));
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
      className: classNames([
        item.className,
        classes.item,
        classes[version],
        classes.left,
        classes.right,
        border && classes.border
      ]),

      key: index,

      onClick: () => {
        onSelect(index, item.props, !!item.props.startIcon);

        // Invoke items on click method
        if (is('function', item.props.onClick)) item.props.onClick();
      },

      ...(item.props.startIcon && selected.includes(index) ? {
        startIcon: (
          <IconDoneAnimated simple in add />
        )
      } : {}),

      ...(!item.props.startIcon && (selected.includes(index) || preSelected.includes(index)) ? {
        startIcon: (
          <IconDoneAnimated
            in={(item.props.startIcon ? selected : preSelected).includes(index)}

            onExited={() => updateSelected(index, item.props)}

            add
          />
        )
      } : {}),

      version,
      color,
      size,
      tonal,

      elevation: false,

      selected: selected.includes(index),

      disabled
    }));

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('ButtonGroup', theme) && [
          'AmauiButtonGroup-root',
          `AmauiButtonGroup-select-${select}`,
          `AmauiButtonGroup-version-${version}`,
          `AmauiButtonGroup-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          `AmauiButtonGroup-size-${size}`,
          elevation && !disabled && ['filled', 'tonal'].includes(version) && `AmauiButtonGroup-elevation`,
          tonal && `AmauiButtonGroup-tonal`,
          border && `AmauiButtonGroup-border`,
          disabled && `AmauiButtonGroup-disabled`,
        ],

        classes.root,
        className,
        elevation && !disabled && ['filled', 'tonal'].includes(version) && classes.elevation,
      ])}

      {...other}
    >
      {children}
    </div>
  );
});

export default ButtonGroup;
