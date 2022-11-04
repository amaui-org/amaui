import React from 'react';

import { is, clamp, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Divider from '../Divider';
import IconButton from '../IconButton';
import Icon from '../Icon';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TElement, TPropsAny, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    color: theme.palette.text.default.primary,
    touchAction: 'none',
    overflow: 'hidden'
  },

  mouseDown_orientation_horizontal: {
    '& *': {
      cursor: 'ew-resize !important'
    }
  },

  mouseDown_orientation_vertical: {
    '& *': {
      cursor: 'ns-resize !important'
    }
  },

  focus: {
    outline: '4px solid currentColor',
    outlineOffset: '8px'
  },

  wrapper: {
    width: '100%',
    height: '100%'
  },

  item: {
    flex: '1 1 auto'
  },

  iconButton: {
    position: 'absolute',
    userSelect: 'none',
    zIndex: 4
  },

  iconButton_orientation_horizontal: {
    cursor: 'ew-resize',
    transform: `translateX(${theme.direction === 'rtl' ? '-' : ''}50%)`
  },

  iconButton_orientation_vertical: {
    cursor: 'ns-resize',
    transform: `translateY(50%)`
  },

  divider: {
    position: 'absolute',
    userSelect: 'none',
    flex: '0 0 auto',
    zIndex: 3,

    '&.AmauiDivider-root': {
      opacity: 1,
      margin: '0px'
    }
  },

  divider_orientation_horizontal: {
    insetBlock: 0,
    cursor: 'ew-resize',
    transform: `translateX(${theme.direction === 'rtl' ? '-' : ''}50%)`,

    '&.AmauiDivider-root': {
      width: '8px'
    }
  },

  divider_orientation_vertical: {
    insetInline: 0,
    cursor: 'ns-resize',
    transform: `translateY(50%)`,

    '&.AmauiDivider-root': {
      height: '8px'
    }
  }
}), { name: 'AmauiWindowSplit' });

const IconMaterialSwapHorizRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizRounded'
      short_name='SwapHoriz'

      {...props}
    >
      <path d="M16.3 13.275Q16.025 13 16.025 12.575Q16.025 12.15 16.3 11.875L18.175 10H12Q11.575 10 11.288 9.712Q11 9.425 11 9Q11 8.575 11.288 8.287Q11.575 8 12 8H18.175L16.3 6.125Q16.025 5.85 16.025 5.412Q16.025 4.975 16.3 4.7Q16.575 4.425 17 4.425Q17.425 4.425 17.7 4.7L21.3 8.3Q21.45 8.45 21.513 8.625Q21.575 8.8 21.575 9Q21.575 9.2 21.513 9.375Q21.45 9.55 21.3 9.7L17.7 13.3Q17.425 13.575 17 13.562Q16.575 13.55 16.3 13.275ZM6.3 19.3 2.7 15.7Q2.55 15.55 2.488 15.375Q2.425 15.2 2.425 15Q2.425 14.8 2.488 14.625Q2.55 14.45 2.7 14.3L6.3 10.7Q6.575 10.425 7 10.425Q7.425 10.425 7.7 10.7Q7.975 10.975 7.975 11.412Q7.975 11.85 7.7 12.125L5.825 14H12Q12.425 14 12.713 14.287Q13 14.575 13 15Q13 15.425 12.713 15.712Q12.425 16 12 16H5.825L7.7 17.875Q7.975 18.15 7.975 18.575Q7.975 19 7.7 19.275Q7.425 19.55 7 19.562Q6.575 19.575 6.3 19.3Z" />
    </Icon>
  );
});

const IconMaterialSwapVertRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVertRounded'
      short_name='SwapVert'

      {...props}
    >
      <path d="M14 18.175V12Q14 11.575 14.288 11.287Q14.575 11 15 11Q15.425 11 15.713 11.287Q16 11.575 16 12V18.175L17.875 16.3Q18.15 16.025 18.562 16.012Q18.975 16 19.275 16.3Q19.575 16.575 19.588 16.987Q19.6 17.4 19.3 17.7L15.7 21.3Q15.55 21.45 15.375 21.512Q15.2 21.575 15 21.575Q14.8 21.575 14.625 21.512Q14.45 21.45 14.3 21.3L10.7 17.7Q10.425 17.425 10.425 17.013Q10.425 16.6 10.725 16.3Q11.025 16.025 11.425 16.012Q11.825 16 12.125 16.3ZM8 5.825 6.125 7.7Q5.8 8.025 5.4 8Q5 7.975 4.725 7.7Q4.425 7.4 4.425 6.987Q4.425 6.575 4.7 6.3L8.3 2.7Q8.45 2.55 8.625 2.487Q8.8 2.425 9 2.425Q9.2 2.425 9.375 2.487Q9.55 2.55 9.7 2.7L13.3 6.3Q13.575 6.575 13.575 7Q13.575 7.425 13.3 7.7Q13 8 12.588 8Q12.175 8 11.875 7.7L10 5.825V12Q10 12.425 9.713 12.712Q9.425 13 9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Z" />
    </Icon>
  );
});

export interface IWindowSplit extends ILine {
  tonal?: TTonal;
  color?: TColor;

  valueDefault?: number;
  value?: number;

  onChange?: (value: number) => any;

  padding?: number;
  paddingStart?: number;
  paddingEnd?: number;

  iconButton?: TElement;
  orientation?: 'vertical' | 'horizontal';

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;
  onMouseEnter?: (event: React.MouseEvent<any>) => any;
  onMouseLeave?: (event: React.MouseEvent<any>) => any;

  iconButtonComponent?: TElement;
  iconOrientationHorizontal?: TElement;
  iconOrientationVertical?: TElement;

  IconButtonProps?: TPropsAny;
  DividerProps?: TPropsAny;
}

const WindowSplit = React.forwardRef((props_: IWindowSplit, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiWindowSplit?.props?.default }), [props_]);

  const {
    tonal = false,
    color = 'inverted',

    valueDefault,
    value: value_ = 50,

    onChange: onChange_,

    padding,
    paddingStart,
    paddingEnd,

    iconButton,
    orientation = 'horizontal',

    onFocus: onFocus_,
    onBlur: onBlur_,
    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,

    iconButtonComponent,
    iconOrientationHorizontal = <IconMaterialSwapHorizRounded />,
    iconOrientationVertical = <IconMaterialSwapVertRounded />,

    IconButtonProps = {
      version: 'filled',
      elevation: false
    },
    DividerProps = {},

    className,

    children: children_,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [focus, setFocus] = React.useState<boolean>();
  const [mouseDown, setMouseDown] = React.useState<boolean>();
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<HTMLElement>(),
    value: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    hover: React.useRef<any>(),
    props: React.useRef<any>(),
    orientation: React.useRef<any>(),
    direction: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.value.current = value;
  refs.mouseDown.current = mouseDown;
  refs.props.current = props;
  refs.orientation.current = orientation;
  refs.direction.current = theme.direction;

  const styles: any = {
    start: {
      [orientation === 'horizontal' ? 'width' : 'height']: `${100 - value}%`
    },

    end: {
      [orientation === 'horizontal' ? 'width' : 'height']: `${value}%`
    },

    divider: {
      [orientation === 'horizontal' ? 'insetInlineEnd' : 'insetBlockEnd']: `${value}%`
    }
  };

  IconButtonProps.tonal = IconButtonProps.tonal !== undefined ? IconButtonProps.tonal : tonal;
  IconButtonProps.color = IconButtonProps.color !== undefined ? IconButtonProps.color : color;

  DividerProps.tonal = DividerProps.tonal !== undefined ? DividerProps.tonal : tonal;
  DividerProps.color = DividerProps.color !== undefined ? DividerProps.color : color;

  const min = 0;
  const max = 100;

  const valuePrecision = (valueMouse: number) => {
    let valueNew = (max + min) - valueFromPercentageWithinRange(valueMouse * 100, min, max);

    if (refs.direction.current === 'rtl' && refs.orientation.current === 'horizontal') valueNew = (max + min) - valueNew;

    if (valueNew <= min) return min;

    if (valueNew >= max) return max;

    return valueNew;
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      setMouseDown(false);

      setFocus(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (refs.mouseDown.current) {
        const x: number = event.clientX;
        const y: number = event.clientY;

        const rect = refs.root.current.getBoundingClientRect();

        const { width, height } = rect;

        // Value to the precision point value
        let valueNew = refs.orientation.current === 'horizontal' ? (x - rect.x) / width : (y - rect.y) / height;

        valueNew = valuePrecision(valueNew);

        onChange(valueNew);
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (refs.mouseDown.current) {
        const x: number = event.touches[0].clientX;
        const y: number = event.touches[0].clientY;

        const rect = refs.root.current.getBoundingClientRect();

        const { width, height } = rect;

        // Value to the precision point value
        let valueNew = refs.orientation.current === 'horizontal' ? (x - rect.x) / width : (y - rect.y) / height;

        valueNew = valuePrecision(valueNew);

        onChange(valueNew);
      }
    };

    window.document.addEventListener('mouseup', onMouseUp);
    window.document.addEventListener('mousemove', onMouseMove);
    window.document.addEventListener('touchend', onMouseUp, { passive: true });
    window.document.addEventListener('touchmove', onTouchMove);

    setInit(true);

    return () => {
      window.document.removeEventListener('mouseup', onMouseUp);
      window.document.removeEventListener('touchend', onMouseUp);
      window.document.removeEventListener('mousemove', onMouseMove);
      window.document.addEventListener('touchmove', onTouchMove);
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) setValue(value_);
    }
  }, [value_]);

  const onTouchStart = (event: React.TouchEvent<any>) => {
    setMouseDown(true);
  };

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onFocusIconButton = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(true);
  }, []);

  const onBlurIconButton = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(false);
  }, []);

  const onMouseDown = React.useCallback(() => {
    setMouseDown(true);
  }, []);

  const move = (forward_ = true) => {
    let forward = forward_;

    if (refs.orientation.current === 'horizontal') {
      if (refs.direction.current === 'rtl') forward = !forward;
    }

    let valueNew = refs.value.current || 0;

    valueNew = clamp(valueNew + (forward ? 1 : -1), 0, 100);

    // Update
    onChange(valueNew);
  };

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<any>) => {
    if (['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      if (
        ['Home', 'End'].includes(event.key) ||
        (['ArrowLeft', 'ArrowRight'].includes(event.key) && refs.orientation.current === 'horizontal') ||
        (['ArrowUp', 'ArrowDown'].includes(event.key) && refs.orientation.current === 'vertical')
      ) {
        // Prevent default
        event.preventDefault();

        let valueNew: number;

        switch (event.key) {
          case 'Home':
            valueNew = refs.orientation.current !== 'vertical' ? 0 : 100;

            return onChange(valueNew);

          case 'End':
            valueNew = refs.orientation.current !== 'vertical' ? 100 : 0;

            return onChange(valueNew);

          case 'ArrowUp':
          case 'ArrowLeft':
            return move();

          case 'ArrowDown':
          case 'ArrowRight':
            return move(false);

          default:
            break;
        }
      }
    }
  }, []);

  const onChange = (valueItem: number) => {
    const minValue = paddingEnd !== undefined ? paddingEnd : padding !== undefined ? padding : 0;
    const maxValue = paddingStart !== undefined ? paddingStart : padding !== undefined ? padding : 0;

    const valueNew = clamp(valueItem, minValue, 100 - maxValue);

    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const direction = orientation === 'horizontal' ? 'row' : 'column';

  // Only 2 children to use
  const children = React.Children.toArray(children_).slice(0, 2);

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item as any;
      }}

      tabIndex={!iconButton ? 0 : undefined}

      gap={0}

      direction={direction}

      align='center'

      justify='center'

      onFocus={onFocus}

      onBlur={onBlur}

      onKeyDown={onKeyDown}

      className={classNames([
        staticClassName('WindowSplit', theme) && [
          'AmauiWindowSplit-root',
          `AmauiWindowSplit-orientation-${orientation}`,
          iconButton && `AmauiButton-icon-button`,
          focus && `AmauiButton-focus`,
          mouseDown && `AmauiButton-mouse-down`,
        ],

        className,
        classes.root,
        mouseDown && classes[`mouseDown_orientation_${orientation}`],
        focus && !mouseDown && classes.focus
      ])}

      {...other}
    >
      <Line
        gap={0}

        direction={direction}

        align='unset'

        justify='unset'

        className={classNames([
          staticClassName('WindowSplit', theme) && [
            'AmauiWindowSplit-wrapper'
          ],

          classes.wrapper
        ])}
      >
        {children[0] && (
          <Line
            direction='row'

            align='unset'

            justify='unset'

            className={classNames([
              staticClassName('WindowSplit', theme) && [
                'AmauiWindowSplit-start'
              ],

              classes.item,
              classes.start
            ])}

            style={{
              ...styles.start
            }}
          >
            {children[0]}
          </Line>
        )}

        {children[1] && (
          <Line
            direction='row'

            align='unset'

            justify='unset'

            className={classNames([
              staticClassName('WindowSplit', theme) && [
                'AmauiWindowSplit-end'
              ],

              classes.item,
              classes.end
            ])}

            style={{
              ...styles.end
            }}
          >
            {children[1]}
          </Line>
        )}
      </Line>

      <Divider
        onTouchStart={onTouchStart}

        onMouseDown={(event: React.MouseEvent<any>) => {
          onMouseDown();

          if (is('function', DividerProps?.onMouseDown)) IconButtonProps.onMouseDown(event);
        }}

        orientation={orientation === 'vertical' ? 'horizontal' : 'vertical'}

        {...DividerProps}

        className={classNames([
          staticClassName('WindowSplit', theme) && [
            'AmauiWindowSplit-divider'
          ],

          DividerProps?.className,
          classes.divider,
          classes[`divider_orientation_${orientation}`]
        ])}

        style={{
          ...styles.divider,

          ...DividerProps?.style
        }}
      />

      {iconButton && (
        (iconButtonComponent && React.cloneElement(iconButtonComponent as any, {
          className: classNames([
            staticClassName('WindowSplit', theme) && [
              'AmauiWindowSplit-icon-button'
            ],

            classes.iconButton,
            classes[`iconButton_orientation_${orientation}`]
          ])
        })) ||

        <IconButton
          onFocus={onFocusIconButton}

          onBlur={onBlurIconButton}

          onTouchStart={onTouchStart}

          onMouseDown={(event: React.MouseEvent<any>) => {
            onMouseDown();

            if (is('function', IconButtonProps?.onMouseDown)) IconButtonProps.onMouseDown(event);
          }}

          {...IconButtonProps}

          className={classNames([
            staticClassName('WindowSplit', theme) && [
              'AmauiWindowSplit-icon-button'
            ],

            IconButtonProps?.className,
            classes.iconButton,
            classes[`iconButton_orientation_${orientation}`]
          ])}

          style={{
            ...styles.divider,

            ...IconButtonProps?.style
          }}
        >
          {orientation === 'horizontal' ? iconOrientationHorizontal : orientation === 'vertical' ? iconOrientationVertical : undefined}
        </IconButton>
      )}
    </Line>
  );
});

WindowSplit.displayName = 'AmauiWindowSplit';

export default WindowSplit;
