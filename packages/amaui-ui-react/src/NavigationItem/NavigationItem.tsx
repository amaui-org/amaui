import React from 'react';

import { is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Transition, { TTransitionStatus } from '../Transition';
import Type from '../Type';
import Fade from '../Fade';
import Line from '../Line';
import Tooltip from '../Tooltip';
import { ITooltip } from '../Tooltip/Tooltip';
import { staticClassName } from '../utils';
import { ITonal, IColor, IElement, IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    flex: '1 1 auto',
    userSelect: 'none',
    cursor: 'pointer',
    padding: `${theme.methods.space.value(1.5, 'px')} 0 ${theme.methods.space.value(2, 'px')}`,
    minHeight: '80px',
  },

  vertical: {
    flex: '0 0 auto',
    padding: '0px',
    minHeight: '52px',
    width: '100%'
  },

  iconWrapper: {
    position: 'absolute',
    top: '0',
    height: '32px',
    width: '64px'
  },

  iconWrapper_center: {
    top: '50%',
    transform: 'translateY(-50%)',
    transition: theme.methods.transitions.make(['top', 'transform']),
  },

  iconWrapper_center_selected: {
    top: '0',
    transform: 'translateY(0)'
  },

  icon: {
    lineHeight: '0'
  },

  labelWrapper: {
    position: 'absolute',
    bottom: '0'
  },

  label: {
    position: 'absolute',
    bottom: '0'
  },

  indicator: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    opacity: '0',
    transform: 'scaleX(0.74)',
    transition: theme.methods.transitions.make(['opacity', 'transform']),
    pointerEvents: 'none',
    background: 'currentColor',
  },

  indicator_enter: {
    opacity: '0',
    transform: 'scaleX(0.74)',
  },

  indicator_entering: {
    opacity: '1',
    transform: 'scaleX(1)'
  },

  indicator_entered: {
    opacity: '1',
    transform: 'scaleX(1)'
  },

  indicator_exit: {
    opacity: '1',
    transform: 'scaleX(1)'
  },

  indicator_exiting: {
    opacity: '0',
    transform: 'scaleX(1)',
    transition: theme.methods.transitions.make(['opacity', 'transform'], { duration: 0 })
  },

  indicator_exited: {
    opacity: '0',
    transform: 'scaleX(0.74)'
  },

  indicator_hover: { opacity: theme.palette.visual_contrast.default.opacity.hover },

  indicator_selected: { opacity: theme.palette.visual_contrast.default.opacity.selected },

  indicator_focus: { opacity: theme.palette.visual_contrast.default.opacity.focus },

  indicator_pressed: { opacity: theme.palette.visual_contrast.default.opacity.press },

  disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    pointerEvents: 'none',
    cursor: 'default'
  }
}), { name: 'amaui-NavigationItem' });

// To do

// Long press label in tooltip

export type INavigationItemVersion = 'regular' | 'auto';

export interface INavigationItem extends ITooltip {
  tonal?: ITonal;
  color?: IColor;
  version?: 'regular' | 'auto';

  value?: any;
  vertical?: boolean;
  name?: IElement;
  label?: IElement;
  icon?: IElement;
  iconSelected?: IElement;
  selected?: boolean;
  disabled?: boolean;

  IconWrapperComponent?: IElementReference;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;
  onKeyDown?: (event: React.KeyboardEvent<any>) => any;
  onMouseDown?: (event: React.MouseEvent<any>) => any;
  onMouseEnter?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;
  onTouchStart?: (event: React.TouchEvent<any>) => any;

  TooltipProps?: IPropsAny;
  IconWrapperProps?: IPropsAny;
}

const NavigationItem: React.FC<INavigationItem> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiNavigationItem?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    tonal = true,
    color = 'primary',
    version = 'regular',

    value,
    vertical,
    name,
    label,
    icon,
    iconSelected,
    selected,
    disabled,

    IconWrapperComponent = 'span',

    onFocus: onFocus_,
    onBlur: onBlur_,
    onKeyDown: onKeyDown_,
    onMouseDown: onMouseDown_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    onTouchStart: onTouchStart_,

    TooltipProps,
    IconWrapperProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);

  const refs = {
    root: React.useRef<any>(),
    props: React.useRef<any>(),
    hover: React.useRef<any>()
  };

  const styles: any = {
    root: {

    },
    icon: {},
    label: {},
    indicator: {}
  };

  refs.props.current = props;
  refs.hover.current = hover;

  React.useEffect(() => {
    const onMouseUp = () => {
      if (!refs.props.current.disabled) {
        setMouseDown(false);

        setFocus(false);
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('mouseup', onMouseUp);

    return () => {
      rootDocument.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  React.useEffect(() => {
    if (!selected) {
      if (refs.hover.current) setHover(false);
    }
  }, [selected]);

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<any>) => {
    if (!disabled) {
      if (event.key === 'Enter') {
        if (is('function', props.onClick)) props.onClick(event);
      }
    }

    if (is('function', onKeyDown_)) onKeyDown_(event);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    if (!disabled) setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    if (!disabled) setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onTouchStart = React.useCallback((event: React.TouchEvent<any>) => {
    if (!disabled) setMouseDown(true);

    if (is('function', onTouchStart)) onTouchStart(event);
  }, []);

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) setMouseDown(true);

    if (is('function', onMouseDown_)) onMouseDown_(event);
  }, []);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    if (!refs.props.current.disabled) setHover(false);

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  }, []);

  let palette: any;

  if (!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color)) {
    palette = theme.methods.color(color);
  }

  if (!tonal) {
    let background = (theme.palette.color[color] as any)?.main;

    if (color === 'default') background = theme.palette.background.default.primary;

    styles.icon.color = styles.label.color = styles.indicator.color = theme.methods.palette.color.text(palette?.main || background, true, 'light');
  }
  else {
    styles.indicator.color = palette?.main || (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any).main);

    styles.icon.color = styles.label.color = theme.methods.palette.color.value(color as any, 5, true, palette);
  }

  const LabelWrapper = version === 'auto' ? Fade : React.Fragment;

  const LabelWrapperProps: any = {};

  if (version === 'auto') {
    LabelWrapperProps.in = selected;

    LabelWrapperProps.className = classNames([
      staticClassName('NavigationItem', theme) && [
        'amaui-NavigationItem-label'
      ],

      classes.labelWrapper
    ]);
  }

  const Icon = (selected && iconSelected) || icon;

  return (
    <Tooltip
      label={label || value}

      position='top'

      alignment='center'

      longPress

      touch={false}

      hover={false}

      focus={false}

      {...TooltipProps}
    >
      <span
        tabIndex={!disabled ? 0 : undefined}

        onFocus={onFocus}

        onBlur={onBlur}

        onKeyDown={onKeyDown}

        onTouchStart={onTouchStart}

        onMouseDown={onMouseDown}

        onMouseEnter={onMouseEnter}

        onMouseLeave={onMouseLeave}

        className={classNames([
          staticClassName('NavigationItem', theme) && [
            'amaui-NavigationItem-root',
            selected && 'amaui-NavigationItem-selected',
            hover && `amaui-NavigationItem-hover`,
            mouseDown && `amaui-NavigationItem-mouse-down`,
            focus && `amaui-NavigationItem-focus`,
            disabled && `amaui-NavigationItem-disabled`
          ],

          className,
          classes.root,
          vertical && classes.vertical,
          disabled && classes.disabled
        ])}

        style={{
          ...style,

          ...styles.root
        }}

        {...other}
      >
        <Line
          ref={item => {
            if (ref) {
              if (is('function', ref)) ref(item);
              else ref.current = item;
            }

            refs.root.current = item;
          }}

          direction='column'

          align='center'

          justify='center'

          gap={0.5}

          className={classNames([
            staticClassName('NavigationItem', theme) && [
              'amaui-NavigationItem-item'
            ],

            classes.item
          ])}
        >
          {Icon && (
            <Line
              Component='span'

              align='center'

              justify='center'

              className={classNames([
                staticClassName('NavigationItem', theme) && [
                  'amaui-NavigationItem-icon-wrapper'
                ],

                classes.iconWrapper,
                ['none', 'auto'].includes(version) && classes.iconWrapper_center,
                ['auto'].includes(version) && selected && classes.iconWrapper_center_selected
              ])}
            >
              <Transition
                in={hover || focus || selected}
              >
                {(status: TTransitionStatus) => (
                  <span
                    className={classNames([
                      staticClassName('NavigationItem', theme) && [
                        'amaui-NavigationItem-indicator'
                      ],

                      classes.indicator,
                      classes[`indicator_${status}`],
                      selected && classes.indicator_selected,
                      hover && classes.indicator_hover,
                      focus && classes.indicator_focus,
                      mouseDown && classes.indicator_pressed
                    ])}

                    style={styles.indicator}
                  />
                )}
              </Transition>

              <IconWrapperComponent
                {...IconWrapperProps}

                className={classNames([
                  staticClassName('NavigationItem', theme) && [
                    'amaui-NavigationItem-icon'
                  ],

                  IconWrapperProps?.className,
                  classes.icon
                ])}
              >
                {React.cloneElement(Icon as any, {
                  style: {
                    ...(Icon as any).props.style,

                    ...styles.icon
                  }
                })}
              </IconWrapperComponent>
            </Line>
          )}

          {['regular', 'auto'].includes(version) && (
            <LabelWrapper
              {...LabelWrapperProps}
            >
              <Type
                version='b3'

                className={classNames([
                  staticClassName('NavigationItem', theme) && [
                    'amaui-NavigationItem-label'
                  ],

                  classes.label
                ])}

                style={styles.label}
              >
                {name !== undefined ? name : label}
              </Type>
            </LabelWrapper>
          )}
        </Line>
      </span>
    </Tooltip>
  );
});

NavigationItem.displayName = 'amaui-NavigationItem';

export default NavigationItem;
