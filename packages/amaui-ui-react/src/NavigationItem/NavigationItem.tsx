import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Transition, { TTransitionStatus } from '../Transition';
import Type from '../Type';
import Fade from '../Fade';
import Line from '../Line';
import Tooltip from '../Tooltip';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 auto',
    userSelect: 'none',
    cursor: 'pointer',
    padding: '12px 0 16px',
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
    top: 0,
    height: '32px',
    width: '64px'
  },

  iconWrapper_center: {
    top: '50%',
    transform: 'translateY(-50%)',
    transition: theme.methods.transitions.make(['top', 'transform']),
  },

  iconWrapper_center_selected: {
    top: 0,
    transform: 'translateY(0)'
  },

  icon: {
    lineHeight: 0
  },

  labelWrapper: {
    position: 'absolute',
    bottom: 0
  },

  label: {
    position: 'absolute',
    bottom: 0
  },

  indicator: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    borderRadius: '100vw',
    opacity: 0,
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
    opacity: 1,
    transform: 'scaleX(1)'
  },

  indicator_entered: {
    opacity: 1,
    transform: 'scaleX(1)'
  },

  indicator_exit: {
    opacity: 1,
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
}), { name: 'AmauiNavigationItem' });

// To do

// Long press label in tooltip value y

const NavigationItem = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNavigationItem?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',
    version = 'regular',
    vertical,
    label,
    icon,
    iconSelected,
    value,
    selected,
    IconWrapperComponent = 'span',
    IconWrapperProps = {},
    onFocus: onFocus_,
    onBlur: onBlur_,
    onKeyDown: onKeyDown_,
    onMouseDown: onMouseDown_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    onTouch: onTouch_,
    TooltipProps = {},
    disabled,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);

  const refs = {
    props: React.useRef<any>(),
    hover: React.useRef<any>()
  };

  const styles: any = {
    root: {},
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

    window.document.addEventListener('mouseup', onMouseUp);

    return () => {
      window.document.removeEventListener('mouseup', onMouseUp);
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

  const onTouch = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled) setMouseDown(true);

    if (is('function', onTouch_)) onTouch_(event);
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

  if (!theme.palette.color[color] && !['themed', 'inverse', 'default', 'inherit'].includes(color)) {
    palette = theme.methods.color(color);
  }

  if (!tonal) {
    let background = (theme.palette.color[color] as any)?.main;

    if (color === 'default') background = theme.palette.background.default.primary;

    styles.icon.color = styles.label.color = styles.indicator.color = theme.methods.palette.color.text(palette?.main || background, true, 'light');
  }
  else {
    styles.indicator.color = palette?.main || (color === 'default' ? theme.palette.text.default.primary : (theme.palette.color[color] as any).main);

    styles.icon.color = styles.label.color = theme.methods.palette.color.value(color, 5, true, palette);
  }

  let LabelWrapper = version === 'auto' ? Fade : React.Fragment;

  const LabelWrapperProps: any = {};

  if (version === 'auto') {
    LabelWrapperProps.in = selected;

    LabelWrapperProps.className = classNames([
      staticClassName('NavigationItem', theme) && [
        'AmauiNavigationItem-label'
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
        tabIndex={!disabled && 0}

        onFocus={onFocus}

        onBlur={onBlur}

        onKeyDown={onKeyDown}

        onTouch={onTouch}

        onMouseDown={onMouseDown}

        onMouseEnter={onMouseEnter}

        onMouseLeave={onMouseLeave}

        className={classNames([
          staticClassName('NavigationItem', theme) && [
            'AmauiNavigationItem-root',
            `AmauiNavigationItem-version-${version}`,
            `AmauiNavigationItem-color-${!theme.palette.color[color] && !['themed', 'inverse', 'default', 'inherit'].includes(color) ? 'new' : color}`,
            label && 'AmauiNavigationItem-label',
            icon && 'AmauiNavigationItem-icon',
            iconSelected && 'AmauiNavigationItem-iconSelected',
            selected && 'AmauiNavigationItem-selected',
            vertical && 'AmauiNavigationItem-vertical',
            tonal && `AmauiNavigationItem-tonal`,
            hover && `AmauiNavigationItem-hover`,
            mouseDown && `AmauiNavigationItem-mouseDown`,
            focus && `AmauiNavigationItem-focus`,
            disabled && `AmauiNavigationItem-disabled`
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
          ref={ref}

          direction='column'

          align='center'

          justify='center'

          gap={0.5}

          className={classNames([
            staticClassName('NavigationItem', theme) && [
              'AmauiNavigationItem-item'
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
                  'AmauiNavigationItem-iconWrapper'
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
                        'AmauiNavigationItem-indicator'
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
                className={classNames([
                  staticClassName('NavigationItem', theme) && [
                    'AmauiNavigationItem-icon'
                  ],

                  classes.icon
                ])}

                {...IconWrapperProps}
              >
                {React.cloneElement(Icon, {
                  style: {
                    ...Icon.props.style,

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
                    'AmauiNavigationItem-label'
                  ],

                  classes.label
                ])}

                style={styles.label}
              >
                {label}
              </Type>
            </LabelWrapper>
          )}
        </Line>
      </span>
    </Tooltip>
  );
});

NavigationItem.displayName = 'AmauiNavigationItem';

export default NavigationItem;
