import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Zoom from '../Zoom';
import Fade from '../Fade';
import Fab from '../Fab';
import Icon from '../Icon';
import Tooltip from '../Tooltip';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'fixed',
    zIndex: theme.z_index.modal
  },

  position_top: {
    top: '24px'
  },

  position_bottom: {
    bottom: '24px'
  },

  alignment_left: {
    left: '24px',
    right: 'auto'
  },

  alignment_start: {
    insetInlineStart: '24px',
    insetInlineEnd: 'auto'
  },

  alignment_center: {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  },

  alignment_right: {
    right: '24px',
    left: 'auto'
  },

  alignment_end: {
    insetInlineEnd: '24px',
    insetInlineStart: 'auto'
  },

  fab: {
    boxShadow: theme.shadows.values.default[6],
    transition: theme.methods.transitions.make('box-shadow')
  },

  fab_open: {
    boxShadow: theme.shadows.values.default[8]
  },

  iconWrapper: {
    position: 'relative',
    lineHeight: 0,
    transform: 'rotate(-45deg)',
    transition: theme.methods.transitions.make('transform')
  },

  iconWrapper_open: {
    transform: 'rotate(0deg)'
  },

  icon_absolute: {
    position: 'absolute',
    inset: 0
  }
}), { name: 'AmauiSpeedDial' });

const IconMaterialCloseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseRounded'
      short_name='Close'

      {...props}
    >
      <path d="M12 13.4 7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L10.6 12L5.7 7.1Q5.425 6.825 5.425 6.4Q5.425 5.975 5.7 5.7Q5.975 5.425 6.4 5.425Q6.825 5.425 7.1 5.7L12 10.6L16.9 5.7Q17.175 5.425 17.6 5.425Q18.025 5.425 18.3 5.7Q18.575 5.975 18.575 6.4Q18.575 6.825 18.3 7.1L13.4 12L18.3 16.9Q18.575 17.175 18.575 17.6Q18.575 18.025 18.3 18.3Q18.025 18.575 17.6 18.575Q17.175 18.575 16.9 18.3Z" />
    </Icon>
  );
});

const IconWrapper = (props: any) => {
  return (
    <span
      {...props}
    >
      {React.Children.toArray(props.children).map((item: any) => (
        React.cloneElement(item, {
          style: {
            ...item.props.style,

            ...props.style
          }
        })
      ))}
    </span>
  )
};

const SpeedDial = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSpeedDial?.props?.default }), [props_]);

  const {
    in: inProp = true,

    position = 'bottom',
    alignment = 'end',
    direction: direction_ = 'start',

    FabTransitionComponent = Zoom,
    FabTransitionComponentProps,

    tooltipLabel,
    TooltipProps = {
      alignment: 'center'
    },

    Icon = IconMaterialCloseRounded,
    IconOpen,
    FabProps = {
      tonal: true,
      color: 'primary',
      elevation: false
    },

    open: open_,
    openDefault,
    onOpen: onOpen_,
    onClose: onClose_,
    disabled,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);

  const { classes } = useStyle(props);

  const onOpen = () => {
    // Update inner or controlled
    if (!props.hasOwnProperty('open')) setOpen(true);

    if (is('function', onOpen_)) onOpen_();
  };

  const onClose = () => {
    // Update inner or controlled
    if (!props.hasOwnProperty('open')) setOpen(false);

    if (is('function', onClose_)) onClose_();
  };

  React.useEffect(() => {
    if (hover) {
      if (!open) onOpen();
    }
    else {
      if (open) onClose();
    }
  }, [hover]);

  React.useEffect(() => {
    if (focus) {
      if (!open) onOpen();
    }
    else {
      if (open && !hover) onClose();
    }
  }, [focus]);

  React.useEffect(() => {
    if (open_ !== open) setOpen(open_);
  }, [open_]);

  const onClick = () => {
    !open ? onOpen() : onClose();
  };

  const onMouseEnter = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setHover(true);
    }
  }, [disabled]);

  const onMouseLeave = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setHover(false);
    }
  }, [disabled]);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setFocus(true);
    }
  }, [disabled]);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setFocus(false);
    }
  }, [disabled]);

  if (
    alignment === 'left' ||
    alignment === 'end' && theme.direction === 'rtl'
  ) TooltipProps.position = 'right';

  if (
    alignment === 'right' ||
    alignment === 'start' && theme.direction === 'rtl'
  ) TooltipProps.position = 'left';

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('SpeedDial', theme) && [
          `AmauiSpeedDial-root`,
          open && `AmauiSpeedDial-open`,
          hover && `AmauiSpeedDial-hover`,
          focus && `AmauiSpeedDial-focus`,
          disabled && `AmauiSpeedDial-disabled`
        ],

        className,
        classes.root,
        classes[`position_${position}`],
        classes[`alignment_${alignment}`],
        disabled && classes.disabled
      ])}

      {...other}
    >
      <FabTransitionComponent
        in={inProp}

        {...FabTransitionComponentProps}
      >
        <div>
          <Tooltip
            open={open && tooltipLabel !== undefined}

            label={tooltipLabel}

            {...TooltipProps}
          >
            <Fab
              onClick={onClick}

              onBlur={onBlur}

              onFocus={onFocus}

              onMouseEnter={onMouseEnter}

              onMouseLeave={onMouseLeave}

              className={classNames([
                staticClassName('SpeedDial', theme) && [
                  `AmauiSpeedDial-fab`
                ],

                classes.fab,
                open && classes.fab_open
              ])}

              {...FabProps}

              disabled={disabled}
            >
              <IconWrapper
                className={classNames([
                  staticClassName('SpeedDial', theme) && [
                    `AmauiSpeedDial-iconWrapper`
                  ],

                  classes.iconWrapper,
                  open && classes.iconWrapper_open
                ])}
              >
                {!IconOpen ? <Icon /> : <>
                  <Fade
                    in={!open}
                  >
                    <Icon
                      className={classNames([
                        classes.icon_absolute
                      ])}
                    />
                  </Fade>

                  <Fade
                    in={open}
                  >
                    <IconOpen />
                  </Fade>
                </>}
              </IconWrapper>
            </Fab>
          </Tooltip>
        </div>
      </FabTransitionComponent>
    </Component>
  );
});

SpeedDial.displayName = 'AmauiSpeedDial';

export default SpeedDial;
