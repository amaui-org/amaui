import React from 'react';

import { is, clamp, element, isBrowser, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Zoom from '../Zoom';
import Fade from '../Fade';
import Fab from '../Fab';
import IconElement from '../Icon';
import TooltipElement from '../Tooltip';
import LineElement from '../Line';
import { ILine, TLineDirection } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, IVersion, IElement, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
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

  items: {
    pointerEvents: 'none'
  },

  items_position_row: {
    paddingInline: theme.methods.space.value(2, 'px')
  },

  'items_position_row-reverse': {
    paddingInline: theme.methods.space.value(2, 'px')
  },

  items_position_column: {
    paddingBlock: theme.methods.space.value(2, 'px')
  },

  'items_position_column-reverse': {
    paddingBlock: theme.methods.space.value(2, 'px')
  },

  items_open: {
    pointerEvents: 'auto'
  },

  fab: {
    '&.amaui-Fab-root': {
      boxShadow: theme.shadows.values.default[6],
      transition: theme.methods.transitions.make('box-shadow')
    }
  },

  fab_open: {
    '&.amaui-Fab-root': {
      boxShadow: theme.shadows.values.default[8]
    }
  },

  iconWrapper: {
    position: 'relative',
    lineHeight: '0',
    transform: 'rotate(-45deg)',
    transition: theme.methods.transitions.make('transform')
  },

  iconWrapper_noRotate: {
    transform: 'rotate(0deg)'
  },

  iconWrapper_open: {
    transform: 'rotate(0deg)'
  },

  icon_absolute: {
    position: 'absolute',
    inset: '0'
  }
}), { name: 'amaui-SpeedDial' });

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
  );
};

export interface ISpeedDial extends Omit<ILine, 'direction'> {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;

  open?: boolean;
  openDefault?: boolean;

  onOpen?: () => any;
  onClose?: () => any;

  in?: boolean;

  position?: 'top' | 'bottom';
  alignment?: 'start' | 'left' | 'center' | 'right' | 'end';
  direction?: 'top' | 'left' | 'right' | 'bottom';
  closeOnClick?: boolean;
  tooltipOpen?: boolean;

  start?: any;
  end?: any;

  noRotate?: boolean;

  tooltipLabel?: IElement;

  onKeyDown?: (event: React.KeyboardEvent<any>) => any;

  disabled?: boolean;

  IconOpen?: IElementReference;
  Icon?: IElementReference;
  FabTransitionComponent?: IElementReference;
  SpeeDialItemTransitionComponent?: IElementReference;

  TooltipProps?: IPropsAny;
  FabProps?: IPropsAny;
  FabWrapperProps?: IPropsAny;
  FabTransitionComponentProps?: IPropsAny;
  SpeeDialItemTransitionComponentProps?: IPropsAny;
}

const SpeedDial: React.FC<ISpeedDial> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSpeedDial?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'primary',
    version = 'filled',

    open: open_,
    openDefault,
    onOpen: onOpen_,
    onClose: onClose_,

    in: inProp = true,

    position = 'bottom',
    alignment = 'end',
    direction: direction_ = 'top',
    closeOnClick,
    tooltipOpen,

    start,
    end,

    noRotate,

    tooltipLabel,

    onKeyDown: onKeyDown_,

    disabled,

    IconOpen,
    Icon: Icon_ = IconMaterialCloseRounded,
    FabTransitionComponent = Zoom,
    SpeeDialItemTransitionComponent: SpeeDialItemTransitionComponent_ = Zoom,

    TooltipProps = {
      alignment: 'center',
      interactive: false
    },
    FabProps = {
      elevation: false
    },
    FabWrapperProps,
    FabTransitionComponentProps,
    SpeeDialItemTransitionComponentProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(),
    fab: React.useRef<any>(),
    line: React.useRef<any>()
  };

  const direction = direction_;
  let SpeeDialItemTransitionComponent: any = SpeeDialItemTransitionComponent_;

  if (tooltipOpen) SpeeDialItemTransitionComponent = Fade;

  const onOpen = () => {
    // Update inner or controlled
    if (!props.hasOwnProperty('open')) setOpen(true);

    if (is('function', onOpen_)) onOpen_();
  };

  const onClose = () => {
    // Update inner or controlled
    if (!props.hasOwnProperty('open')) setOpen(false);

    setHover(false);

    setFocus(false);

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
    if (!disabled && (event.target.contains(refs.fab.current) || event.target.contains(refs.line.current))) {
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

  let lineDirection: TLineDirection = 'row';
  // Safari bug *-reverse using gap
  // let lineItemsDirection = 'row-reverse';
  let lineItemsDirection: TLineDirection = !isBrowser('safari') ? 'row-reverse' : 'row';

  let directionToUse = direction;

  if (position === 'top') {
    // Safari bug *-reverse using gap
    // lineDirection = 'column-reverse';
    if (!isBrowser('safari')) lineDirection = 'column-reverse';
    else lineDirection = 'column';
    lineItemsDirection = 'column';

    if (alignment === 'left' || (alignment === 'start' && theme.direction === 'ltr') || (alignment === 'end' && theme.direction === 'rtl')) {
      if (['top', 'bottom'].includes(direction)) directionToUse = 'bottom';

      if (['left', 'right'].includes(direction)) directionToUse = isBrowser('safari') ? 'bottom' : 'right';

      if (directionToUse === 'bottom') {
        TooltipProps.position = 'right';
      }

      if (directionToUse === 'right') {
        TooltipProps.position = 'bottom';

        // Safari bug *-reverse using gap
        // lineDirection = 'row-reverse';
        lineDirection = theme.direction === 'ltr' ? 'row-reverse' : 'row';
        lineItemsDirection = theme.direction === 'ltr' ? 'row' : 'row-reverse';
      }
    }

    if (alignment === 'center') {
      if (!['bottom'].includes(direction)) directionToUse = 'bottom';

      if (directionToUse === 'bottom') {
        TooltipProps.position = 'left';
      }
    }

    if (alignment === 'right' || (alignment === 'end' && theme.direction === 'ltr') || (alignment === 'start' && theme.direction === 'rtl')) {
      if (['top', 'bottom'].includes(direction)) directionToUse = 'bottom';

      if (['left', 'right'].includes(direction)) directionToUse = isBrowser('safari') ? 'bottom' : 'left';

      if (directionToUse === 'bottom') {
        TooltipProps.position = 'left';
      }

      if (directionToUse === 'left') {
        TooltipProps.position = 'bottom';

        lineDirection = theme.direction === 'ltr' ? 'row' : 'row-reverse';
        // Safari bug *-reverse using gap
        // lineItemsDirection = 'row-reverse';
        lineItemsDirection = theme.direction === 'ltr' ? 'row-reverse' : 'row';
      }
    }
  }

  if (position === 'bottom') {
    lineDirection = 'column';
    // Safari bug *-reverse using gap
    // lineItemsDirection = 'column-reverse';
    if (!isBrowser('safari')) lineItemsDirection = 'column-reverse';
    else lineItemsDirection = 'column';

    if (alignment === 'left' || (alignment === 'start' && theme.direction === 'ltr') || (alignment === 'end' && theme.direction === 'rtl')) {
      if (['top', 'bottom'].includes(direction)) directionToUse = 'top';

      if (['left', 'right'].includes(direction)) directionToUse = isBrowser('safari') ? 'top' : 'right';

      if (directionToUse === 'top') {
        TooltipProps.position = 'right';
      }

      if (directionToUse === 'right') {
        TooltipProps.position = 'top';

        // Safari bug *-reverse using gap
        // lineDirection = 'row-reverse';
        lineDirection = theme.direction === 'ltr' ? 'row-reverse' : 'row';
        lineItemsDirection = theme.direction === 'ltr' ? 'row' : 'row-reverse';
      }
    }

    if (alignment === 'center') {
      if (!['top'].includes(direction)) directionToUse = 'top';

      if (directionToUse === 'top') {
        TooltipProps.position = 'left';
      }
    }

    if (alignment === 'right' || (alignment === 'end' && theme.direction === 'ltr') || (alignment === 'start' && theme.direction === 'rtl')) {
      if (['top', 'bottom'].includes(direction)) directionToUse = 'top';

      if (['left', 'right'].includes(direction)) directionToUse = isBrowser('safari') ? 'top' : 'left';

      if (directionToUse === 'top') {
        TooltipProps.position = 'left';
      }

      if (directionToUse === 'left') {
        TooltipProps.position = 'top';

        lineDirection = theme.direction === 'ltr' ? 'row' : 'row-reverse';
        // Safari bug *-reverse using gap
        // lineItemsDirection = 'row-reverse';
        lineItemsDirection = theme.direction === 'ltr' ? 'row-reverse' : 'row';
      }
    }
  }

  let linePosition = 'row';

  if (['top', 'bottom'].includes(directionToUse)) linePosition = 'column';

  if (!tooltipLabel) TooltipProps.open = false;

  const onKeyDown = (event: React.KeyboardEvent<any>) => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    let allElements = [];

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      allElements = [...Array.from(refs.line.current?.children).map((item: any) => item.children[0]).filter((item: HTMLElement) => {
        const method = is('element', item) && (item.matches || item['webkitMatchesSelector'] || item['mozMatchesSelector'] || item['oMatchesSelector'] || item['msMatchesSelector']);

        const query = `a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])`;

        return method.bind(item)(query) || item.tabIndex > -1;
      })];

      if (!lineItemsDirection.includes('reverse')) {
        allElements.reverse();

        allElements.push(refs.fab.current);
      }
      else allElements.unshift(refs.fab.current);
    }

    switch (event.key) {
      case 'Escape':
        return onClose();

      case 'ArrowUp':
      case 'ArrowDown':
        if (lineItemsDirection.includes('column')) {
          let index = clamp(allElements.findIndex(item => item === rootDocument.activeElement), 0);

          event.key === 'ArrowUp' ? index++ : index--;

          allElements[clamp(index, 0, allElements.length - 1)].focus();

          event.preventDefault();
        }
        return;

      case 'ArrowLeft':
      case 'ArrowRight':
        if (lineItemsDirection.includes('row')) {
          let index = clamp(allElements.findIndex(item => item === rootDocument.activeElement), 0);

          event.key === 'ArrowLeft' ? index++ : index--;

          allElements[clamp(index, 0, allElements.length - 1)].focus();

          event.preventDefault();
        }
        return;

      default:
        break;
    }
  };

  const reverse = lineDirection.includes('reverse') || lineItemsDirection.includes('reverse');

  const elementsChildren = React.Children.toArray(children);

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={0}

      direction={lineDirection}

      align='center'

      justify='center'

      onKeyDown={onKeyDown}

      Component={Component}

      className={classNames([
        staticClassName('SpeedDial', theme) && [
          `amaui-SpeedDial-root`,
          open && `amaui-SpeedDial-open`,
          hover && `amaui-SpeedDial-hover`,
          focus && `amaui-SpeedDial-focus`,
          disabled && `amaui-SpeedDial-disabled`
        ],

        className,
        classes.root,
        classes[`position_${position}`],
        classes[`alignment_${alignment}`],
        disabled && classes.disabled
      ])}

      {...other}
    >
      {!!elementsChildren.length && (
        <Line
          ref={refs.line}

          gap={1}

          direction={lineItemsDirection}

          align='center'

          justify='center'

          onMouseEnter={onMouseEnter}

          onMouseLeave={onMouseLeave}

          className={classNames([
            staticClassName('SpeedDial', theme) && [
              `amaui-SpeedDial-items`
            ],

            classes.items,
            classes[`items_position_${linePosition}`],
            open && classes.items_open
          ])}
        >
          {elementsChildren.map((item: any, index: number) => (
            <SpeeDialItemTransitionComponent
              key={index}

              in={open}

              delay={(((open && !reverse) || (!open && reverse)) ? children.length - 1 - index : index) * 30}

              append

              add

              removeOnExited

              addTransition={theme.methods.transitions.make('box-shadow')}

              {...SpeeDialItemTransitionComponentProps}
            >
              {React.cloneElement(item, {
                open,

                tonal,
                color,
                version,

                tooltipOpen,

                onClick: (event: React.MouseEvent<any>) => {
                  if (item.props.closeOnClick !== undefined ? item.props.closeOnClick : closeOnClick) onClose();

                  if (is('function', item.props.onClick)) item.props.onClick(event);
                },

                onBlur,
                onFocus,

                TooltipProps: { ...TooltipProps }
              })}
            </SpeeDialItemTransitionComponent>
          ))}
        </Line>
      )}

      <FabTransitionComponent
        in={inProp}

        {...FabTransitionComponentProps}
      >
        <Line
          gap={1}

          direction='column'

          {...FabWrapperProps}
        >
          {start}

          <Tooltip
            label={tooltipLabel}

            {...TooltipProps}
          >
            <Fab
              ref={refs.fab}

              tonal={tonal}

              color={color}

              version={version}

              onClick={onClick}

              onBlur={onBlur}

              onFocus={onFocus}

              onMouseEnter={onMouseEnter}

              onMouseLeave={onMouseLeave}

              className={classNames([
                staticClassName('SpeedDial', theme) && [
                  `amaui-SpeedDial-fab`
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
                    `amaui-SpeedDial-icon-wrapper`
                  ],

                  classes.iconWrapper,
                  noRotate && classes.iconWrapper_noRotate,
                  open && classes.iconWrapper_open
                ])}
              >
                {!IconOpen ? <Icon_ /> : <>
                  <Fade
                    in={!open}
                  >
                    <Icon_
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

          {end}
        </Line>
      </FabTransitionComponent>
    </Line>
  );
});

SpeedDial.displayName = 'amaui-SpeedDial';

export default SpeedDial;
