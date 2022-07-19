import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Transition, { TTransitionStatus } from '../Transition';

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

      '&$border': {
        borderLeft: '1px solid currentColor',
      },

      '&$outlined': {
        borderLeft: 'none',
        marginLeft: '-1px'
      }
    }
  },
  right: {
    '&:not(:last-of-type)': {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px'
    }
  },
  path: {
    strokeWidth: '2px',
    strokeDasharray: 30,
    strokeDashoffset: 30,
    stroke: 'currentcolor',
    transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 'xxs', timing_function: 'accelerated' })
  },
  pathIn: {
    strokeDashoffset: 0,
    transition: theme.methods.transitions.make('stroke-dashoffset', { duration: 'xxs', delay: 45, timing_function: 'accelerated' })
  }
}), { name: 'AmauiSegmentedButtons' });

const IconMaterialDoneSharp = React.forwardRef((props: any, ref) => {
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

const IconDoneAnimated = (props: any) => {
  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const {
    in: inProp,
    simple,

    onExited,

    ...other
  } = props;

  const styles = props.simple ? {} : {
    adding: {
      width: props.style?.fontSize
    },
    added: {
      width: props.style?.fontSize
    }
  };

  return (
    <Transition
      in={inProp}

      onExited={() => {
        if (is('function', onExited) && !simple) onExited();
      }}

      add
    >
      {(status: TTransitionStatus) => React.cloneElement(<span><IconMaterialDoneSharp className={classNames([classes.path, ['adding', 'added', 'enter', 'entering', 'entered'].includes(status) && classes.pathIn])} {...other} /></span>, {
        style: {
          display: 'inline-flex',
          overflow: 'hidden',

          ...(!simple ? { width: 0 } : {}),

          transition: theme.methods.transitions.make('width', { duration: 'xs', timing_function: 'accelerated' }),

          ...styles[status]
        }
      })}
    </Transition>
  );
};

const SegmentedButtons = React.forwardRef((props: any, ref: any) => {
  const [preSelected, setPreSelected] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const { classes } = useStyle(props);

  const {
    className,

    select,

    version = 'outlined',
    color = 'neutral',
    size = 'regular',
    tonal,

    elevation = true,
    border = true,

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

    if (is('function', itemProps.onUnselected)) itemProps.onUnselected();
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
          <IconDoneAnimated simple in />
        )
      } : {}),

      ...(!item.props.startIcon && (selected.includes(index) || preSelected.includes(index)) ? {
        startIcon: (
          <IconDoneAnimated
            in={(item.props.startIcon ? selected : preSelected).includes(index)}

            onExited={() => updateSelected(index, item.props)}
          />
        )
      } : {}),

      version,
      color,
      size,
      tonal,

      elevation: false,

      selected: selected.includes(index)
    }));

  return (
    <div
      ref={ref}

      className={classNames([
        classes.root,
        className,
        elevation && ['filled', 'tonal'].includes(version) && classes.elevation,
      ])}

      {...other}
    >
      {children}
    </div>
  );
});

export default SegmentedButtons;
