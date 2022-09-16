import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Divider from '../Divider';
import IconButton from '../IconButton';
import Icon from '../Icon';

import { staticClassName, valueWithinRangePercentage } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    userSelect: 'none',
    touchAction: 'none',
    overflow: 'hidden'
  },

  hidden: {
    lineHeight: 0,
    visibility: 'hidden'
  },

  item: {
    lineHeight: 0,
    overflow: 'hidden'
  },

  start: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,

    '& > *': {
      maxWidth: 'unset'
    }
  },

  end: {
    position: 'absolute',
    inset: 0,
    zIndex: 0
  },

  iconButton: {
    position: 'absolute',
    zIndex: 4
  },

  iconButton_manual_orientation_horizontal: {
    cursor: 'vertical-text'
  },

  iconButton_manual_orientation_vertical: {
    cursor: 'text'
  },

  iconButton_orientation_horizontal: {
    transform: `translateX(${theme.direction === 'rtl' ? '-' : ''}50%)`
  },

  iconButton_orientation_vertical: {
    transform: `translateY(50%)`
  },

  divider: {
    position: 'absolute',
    zIndex: 3,

    '&.AmauiDivider-root': {
      margin: '0px'
    }
  },

  divider_manual_orientation_horizontal: {
    cursor: 'vertical-text'
  },

  divider_manual_orientation_vertical: {
    cursor: 'text'
  },

  divider_orientation_horizontal: {
    insetBlock: 0,
    transform: `translateX(${theme.direction === 'rtl' ? '-' : ''}50%)`,

    '&.AmauiDivider-root': {
      width: '8px'
    }
  },

  divider_orientation_vertical: {
    insetInline: 0,
    transform: `translateY(50%)`,

    '&.AmauiDivider-root': {
      height: '8px'
    }
  }
}), { name: 'AmauiViewSplit' });

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

// To do

// keyboard
// 1. if not divider or manual tabindex on root, and on focus update value by 1% on arrow left right if horizontal, or up, down on vertical
// and add some outline when root is in focus or whatnot etc.
// 2. if divider and manual when filled button is in focus, keydown on button, do the same as above

const ViewSplit = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiViewSplit?.props?.default }), [props_]);

  const {
    tonal = true,
    color = 'primary',

    valueDefault,
    value: value_ = 50,

    version = 'auto',
    orientation = 'horizontal',
    divider = props.version === 'manual',

    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,

    onChange: onChange_,

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
  const [rect, setRect] = React.useState<DOMRect>();
  const [hover, setHover] = React.useState<boolean>();
  const [mouseDown, setMouseDown] = React.useState<boolean>();
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<HTMLElement>(),
    mouseDown: React.useRef<any>(),
    hover: React.useRef<any>(),
    props: React.useRef<any>(),
    orientation: React.useRef<any>(),
    version: React.useRef<any>(),
    direction: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.mouseDown.current = mouseDown;
  refs.hover.current = hover;
  refs.props.current = props;
  refs.orientation.current = orientation;
  refs.version.current = version;
  refs.direction.current = theme.direction;

  const styles: any = {
    start: {
      [orientation === 'horizontal' ? 'insetInlineEnd' : 'insetBlockEnd']: `${value}%`
    },

    startItem: {
      width: rect?.width
    },

    divider: {
      [orientation === 'horizontal' ? 'insetInlineStart' : 'insetBlockStart']: `${value}%`
    }
  };

  IconButtonProps.tonal = IconButtonProps.tonal !== undefined ? IconButtonProps.tonal : tonal;
  IconButtonProps.color = IconButtonProps.color !== undefined ? IconButtonProps.color : color;

  DividerProps.tonal = DividerProps.tonal !== undefined ? DividerProps.tonal : tonal;
  DividerProps.color = DividerProps.color !== undefined ? DividerProps.color : color;

  const min = 0;
  const max = 100;

  const valuePrecision = (valueMouse: number) => {
    let valueNew = (max + min) - valueWithinRangePercentage(valueMouse * 100, min, max);

    if (refs.direction.current === 'rtl' && refs.orientation.current === 'horizontal') valueNew = (max + min) - valueNew;

    if (valueNew <= min) return min;

    if (valueNew >= max) return max;

    return valueNew;
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      setMouseDown(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (
        (refs.version.current === 'auto' && refs.hover.current) ||
        (refs.version.current === 'manual' && refs.mouseDown.current)
      ) {
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

    const method = () => {
      const rect = refs.root.current.getBoundingClientRect();

      setRect(rect);
    };

    const observer = new ResizeObserver(method);

    observer.observe(refs.root.current);

    method();

    window.document.addEventListener('mouseup', onMouseUp);
    window.document.addEventListener('mousemove', onMouseMove);
    window.document.addEventListener('touchend', onMouseUp, { passive: true });
    window.document.addEventListener('touchmove', onTouchMove);

    setInit(true);

    return () => {
      // Clean up
      observer.disconnect();

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
    const x: number = event.touches[0].clientX;
    const y: number = event.touches[0].clientY;

    const rect = refs.root.current.getBoundingClientRect();

    const { width, height } = rect;

    // Value to the precision point value
    let valueNew = refs.orientation.current === 'horizontal' ? (x - rect.x) / width : (y - rect.y) / height;

    valueNew = valuePrecision(valueNew);

    onChange(valueNew);

    setMouseDown(true);
  };

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    setHover(false);

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  }, []);

  const onMouseDown = React.useCallback(() => {
    setMouseDown(true);
  }, []);

  const onChange = (valueItem: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueItem);

    if (is('function', onChange_)) onChange_(valueItem);
  };

  const direction = orientation === 'horizontal' ? 'row' : 'column';

  // Only 2 children to use
  const children = React.Children.toArray(children_).slice(0, 2);

  return (
    <Line
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item as any;
      }}

      direction={direction}

      align='center'

      justify='center'

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      onTouchStart={onTouchStart}

      className={classNames([
        staticClassName('ViewSplit', theme) && [
          'AmauiViewSplit-root',
          `AmauiViewSplit-orientation-${orientation}`,
          `AmauiViewSplit-version-${version}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children[0] && <>
        <div
          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'AmauiViewSplit-hidden'
            ],

            classes.hidden
          ])}
        >
          {children[0]}
        </div>

        <div
          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'AmauiViewSplit-start'
            ],

            classes.item,
            classes.start
          ])}

          style={{
            ...styles.start
          }}
        >
          {React.cloneElement(children[0] as any, {
            style: {
              ...styles.startItem,

              ...(children[0] as any).props.style
            }
          })}
        </div>
      </>}

      {divider && (
        <Divider
          onMouseDown={(event: React.MouseEvent<any>) => {
            onMouseDown();

            if (is('function', DividerProps?.onMouseDown)) IconButtonProps.onMouseDown(event);
          }}

          orientation={orientation === 'vertical' ? 'horizontal' : 'vertical'}

          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'AmauiViewSplit-divider'
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`],
            version === 'manual' && classes[`divider_manual_orientation_${orientation}`]
          ])}

          {...DividerProps}

          style={{
            ...styles.start,

            ...DividerProps?.style
          }}
        />
      )}

      {version === 'manual' && (
        <IconButton
          onMouseDown={(event: React.MouseEvent<any>) => {
            onMouseDown();

            if (is('function', IconButtonProps?.onMouseDown)) IconButtonProps.onMouseDown(event);
          }}

          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'AmauiViewSplit-iconButton'
            ],

            classes.iconButton,
            classes[`iconButton_orientation_${orientation}`],
            version === 'manual' && classes[`iconButton_manual_orientation_${orientation}`]
          ])}

          {...IconButtonProps}

          style={{
            ...styles.start,

            ...IconButtonProps?.style
          }}
        >
          {orientation === 'horizontal' ? iconOrientationHorizontal : orientation === 'vertical' ? iconOrientationVertical : undefined}
        </IconButton>
      )}

      {children[1] && (
        <div
          className={classNames([
            staticClassName('ViewSplit', theme) && [
              'AmauiViewSplit-end'
            ],

            classes.item,
            classes.end
          ])}
        >
          {React.cloneElement(children[1] as any, {
            style: {
              ...styles.endItem,

              ...(children[1] as any).props.style
            }
          })}
        </div>
      )}
    </Line>
  );
});

ViewSplit.displayName = 'AmauiViewSplit';

export default ViewSplit;

