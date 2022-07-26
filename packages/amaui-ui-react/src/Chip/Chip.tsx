import React from 'react';

import { is } from '@amaui/utils';

import Button from '../Button';
import Icon from '../Icon';
import { IconDoneAnimated } from '../SegmentedButtons/SegmentedButtons';

const IconMaterialCloseSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseSharp'
      short_name='Close'

      {...props}
    >
      <path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z" />
    </Icon>
  );
});

const Chip = React.forwardRef((props: any, ref) => {
  const [preSelected, setPreSelected] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  const {
    input,
    filter,
    onRemove,
    onSelected,
    onUnselected,

    children: children_,

    ...other
  } = props;

  let children = children_;

  const OtherProps: any = {};

  if (input) {
    OtherProps.endIcon = <IconMaterialCloseSharp
      onClick={() => {
        if (is('function', onRemove)) onRemove();
      }}
    />
  }

  const onSelect = () => {
    if (filter) {
      if (props.startIcon) {
        if (selected) {
          setSelected(false);

          if (is('function', onUnselected)) onUnselected();
        }
        else {
          setSelected(true);

          if (is('function', onSelected)) onSelected();
        }
      }
      else {
        // Unselect
        if (selected) {
          setPreSelected(false);

          if (is('function', onUnselected)) onUnselected();
        }
        else {
          setPreSelected(true);

          setSelected(true);

          if (is('function', onSelected)) onSelected();
        }
      }
    }
  };

  const updateSelected = () => {
    if (filter) {
      setSelected(false);
    }
  };

  return (
    <Button
      ref={ref}

      {...other}

      {...OtherProps}

      onClick={() => {
        onSelect();

        // Invoke items on click method
        if (is('function', props.onClick)) props.onClick();
      }}

      {...(props.startIcon && selected ? {
        startIcon: (
          <IconDoneAnimated simple in />
        )
      } : {})}

      {...(!props.startIcon && (selected || preSelected) ? {
        startIcon: (
          <IconDoneAnimated
            in={(props.startIcon ? selected : preSelected)}

            onExited={() => updateSelected()}
          />
        )
      } : {})}

      selected={selected}

      version={props.version || 'outlined'}

      color={props.color || (props.tonal ? 'neutral' : 'default')}

      tonal={props.tonal !== undefined ? props.tonal : false}

      chip
    >
      {children}
    </Button >
  );
});

export default Chip;
