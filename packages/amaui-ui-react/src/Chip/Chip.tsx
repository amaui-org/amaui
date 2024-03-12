import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';
import Icon from '../Icon';
import { IconDoneAnimated } from '../Buttons/Buttons';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.amaui-Button-root': {
      maxWidth: '100%'
    },

    '& .amaui-Icon-root': {
      pointerEvents: 'unset !important'
    }
  },
}), { name: 'amaui-Chip' });

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

export interface IChip extends IButton {
  input?: boolean;
  filter?: boolean;

  onClick?: (event: MouseEvent) => any;
  onRemove?: (event: MouseEvent) => any;
  onSelected?: () => any;
  onUnselected?: () => any;
}

const Chip: React.FC<IChip> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiChip?.props?.default, ...props_ }), [props_]);

  const {
    tonal = false,
    color = props.version === 'filled' ? 'inverted' : 'default',
    version = 'outlined',

    input,
    filter,
    selected: selected_,
    start,
    focus,

    onClick,
    onRemove,
    onSelected,
    onUnselected,

    className,

    children: children_,

    ...other
  } = props;

  const [preSelected, setPreSelected] = React.useState(false);
  const [selected, setSelected] = React.useState(selected_);

  const { classes } = useStyle(props);

  const children = children_;

  React.useEffect(() => {
    if (selected !== selected_) setSelected(selected_);
  }, [selected_]);

  const OtherProps: any = {};

  if (input) {
    OtherProps.end = <IconMaterialCloseSharp
      onClick={(event: MouseEvent) => {
        if (is('function', onRemove)) onRemove(event);
      }}
    />;
  }

  const onSelect = () => {
    if (filter) {
      if (start) {
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

      tonal={tonal}

      version={version}

      color={color || (tonal ? 'neutral' : 'default')}

      onClick={(event: MouseEvent) => {
        onSelect();

        // Invoke items on click method
        if (is('function', onClick)) onClick(event);
      }}

      start={start}

      {...(start && selected ? {
        start: (
          <IconDoneAnimated simple in add />
        )
      } : {})}

      {...(!start && (selected || preSelected) ? {
        start: (
          <IconDoneAnimated
            in={(start ? selected : preSelected)}

            onExited={() => updateSelected()}

            add
          />
        )
      } : {})}

      focus={focus}

      selected={selected}

      chip

      className={classNames([
        staticClassName('Chip', theme) && [
          'amaui-Chip-root',
          selected && `amaui-Chip-selected`
        ],

        className,
        classes.root
      ])}

      {...other}

      {...OtherProps}
    >
      {children}
    </Button>
  );
});

Chip.displayName = 'amaui-Chip';

export default Chip;
