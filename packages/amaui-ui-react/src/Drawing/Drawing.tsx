import React from 'react';

import { elementToCanvas, is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';
import Surface from '../Surface';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import Line from '../Line';
import Icon from '../Icon';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    width: '340px',
    height: '140px',
    background: theme.palette.color.neutral[100]
  },

  methods: {
    position: 'absolute',
    right: '8px',
    bottom: '8px',
    padding: '4px 12px',
    borderRadius: theme.methods.shape.radius.value('rg')
  },

  svg: {
    cursor: 'none',
    touchAction: 'none'
  }
}), { name: 'AmauiDrawing' });

const IconMaterialDeleteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteRounded'
      short_name='Delete'

      {...props}
    >
      <path d="M7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V6Q4.575 6 4.287 5.713Q4 5.425 4 5Q4 4.575 4.287 4.287Q4.575 4 5 4H9Q9 3.575 9.288 3.287Q9.575 3 10 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5Q20 5.425 19.712 5.713Q19.425 6 19 6V19Q19 19.825 18.413 20.413Q17.825 21 17 21ZM7 6V19Q7 19 7 19Q7 19 7 19H17Q17 19 17 19Q17 19 17 19V6ZM9 16Q9 16.425 9.288 16.712Q9.575 17 10 17Q10.425 17 10.713 16.712Q11 16.425 11 16V9Q11 8.575 10.713 8.287Q10.425 8 10 8Q9.575 8 9.288 8.287Q9 8.575 9 9ZM13 16Q13 16.425 13.288 16.712Q13.575 17 14 17Q14.425 17 14.713 16.712Q15 16.425 15 16V9Q15 8.575 14.713 8.287Q14.425 8 14 8Q13.575 8 13.288 8.287Q13 8.575 13 9ZM7 6V19Q7 19 7 19Q7 19 7 19Q7 19 7 19Q7 19 7 19V6Z" />
    </Icon>
  );
});

const IconMaterialDownloadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadRounded'
      short_name='Download'

      {...props}
    >
      <path d="M12 15.575Q11.8 15.575 11.625 15.512Q11.45 15.45 11.3 15.3L7.7 11.7Q7.425 11.425 7.425 11Q7.425 10.575 7.7 10.3Q7.975 10.025 8.412 10.012Q8.85 10 9.125 10.275L11 12.15V5Q11 4.575 11.288 4.287Q11.575 4 12 4Q12.425 4 12.713 4.287Q13 4.575 13 5V12.15L14.875 10.275Q15.15 10 15.588 10.012Q16.025 10.025 16.3 10.3Q16.575 10.575 16.575 11Q16.575 11.425 16.3 11.7L12.7 15.3Q12.55 15.45 12.375 15.512Q12.2 15.575 12 15.575ZM6 20Q5.175 20 4.588 19.413Q4 18.825 4 18V16Q4 15.575 4.287 15.287Q4.575 15 5 15Q5.425 15 5.713 15.287Q6 15.575 6 16V18Q6 18 6 18Q6 18 6 18H18Q18 18 18 18Q18 18 18 18V16Q18 15.575 18.288 15.287Q18.575 15 19 15Q19.425 15 19.712 15.287Q20 15.575 20 16V18Q20 18.825 19.413 19.413Q18.825 20 18 20Z" />
    </Icon>
  );
});

const Drawing = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDrawing?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color = 'default',
    version = 'outlined',

    clear = true,
    download = true,

    downloadName = `amaui-drawing.png`,
    downloadType = 'image/png',
    downloadQuality = 1,

    viewBox = '0 0 340 140',

    strokeColor = '#000000',
    strokeWidth = 1,

    svgRef,

    valueDefault,
    value: value_,
    onChange,

    onMouseDown: onMouseDown_,

    onClear: onClear_,
    onDownload: onDownload_,

    IconClear = IconMaterialDeleteRounded,
    IconDownload = IconMaterialDownloadRounded,

    IconProps,
    TooltipProps,
    IconButtonProps,

    Component = 'div',

    className,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || []);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [move, setMove] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);

  const refs = {
    root: React.useRef<any>(),
    svg: React.useRef<any>(),
    value: React.useRef<any>(),
    strokeColor: React.useRef<any>(),
    strokeWidth: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    move: React.useRef<any>(),
    download: React.useRef<any>()
  };

  refs.value.current = value;

  refs.strokeColor.current = strokeColor;

  refs.strokeWidth.current = strokeWidth;

  refs.download.current = {
    name: downloadName,
    type: downloadType,
    quality: downloadQuality
  };

  refs.mouseDown.current = mouseDown;

  refs.move.current = move;

  React.useEffect(() => {
    const onMouseUp = () => {
      if (refs.mouseDown.current) setMouseDown(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      const x: number = event.clientX;
      const y: number = event.clientY;

      const rect = refs.svg.current.getBoundingClientRect();

      const { x: xRoot, y: yRoot } = rect;

      const valueMove = {
        x: x - xRoot,
        y: y - yRoot
      };

      update(valueMove);
    };

    const onTouchMove = (event: TouchEvent) => {
      const x: number = event.touches[0].clientX;
      const y: number = event.touches[0].clientY;

      const rect = refs.svg.current.getBoundingClientRect();

      const { x: xRoot, y: yRoot } = rect;

      const valueMove = {
        x: x - xRoot,
        y: y - yRoot
      };

      update(valueMove);
    };

    const update = (valueNew: any) => {
      if (refs.mouseDown.current) {
        // Update
        // relative value from the previous one how much x and y moved
        const x = valueNew?.x - (refs.move.current?.x || 0);
        const y = valueNew?.y - (refs.move.current?.y || 0);

        const previous = refs.value.current?.[refs.value.current?.length - 1];

        if (previous) {
          if (!(x === 0 && y === 0)) {
            previous.d += ` ${x},${y}`;

            setValue([...refs.value.current]);
          }
        }
      }

      setMove(valueNew);
    };

    window.document.addEventListener('mouseup', onMouseUp);
    window.document.addEventListener('mousemove', onMouseMove);
    window.document.addEventListener('touchend', onMouseUp, { passive: true });
    window.document.addEventListener('touchmove', onTouchMove);

    return () => {
      window.document.removeEventListener('mouseup', onMouseUp);
      window.document.removeEventListener('touchend', onMouseUp);
      window.document.removeEventListener('mousemove', onMouseMove);
      window.document.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  const onMouseDown = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    setMouseDown(true);

    let x: number = (event as React.TouchEvent<any>).touches ? (event as React.TouchEvent<any>).touches[0].clientX : (event as React.MouseEvent<any>).clientX;
    let y: number = (event as React.TouchEvent<any>).touches ? (event as React.TouchEvent<any>).touches[0].clientY : (event as React.MouseEvent<any>).clientY;

    const rect = refs.svg.current.getBoundingClientRect();

    x -= rect.x;
    y -= rect.y;

    setMove({ x, y });

    // Create new value path
    setValue((values: any[]) => [
      ...(values || []),

      {
        d: `M ${x},${y} l 1,1`,
        stroke: refs.strokeColor.current,
        strokeWidth: refs.strokeWidth.current
      }
    ]);

    if (is('function', onMouseDown_)) onMouseDown_(event);
  }, []);

  const onClear = React.useCallback(() => {
    setValue([]);

    if (is('function', onClear_)) onClear_();
  }, []);

  const onDownload = React.useCallback(async () => {
    const root = refs.root.current;

    const rect = root.getBoundingClientRect();

    // Clean up
    const rootClone = root.cloneNode(true);

    rootClone.style.outline = 'none';

    if (refs.download.current.type?.includes('png')) {
      rootClone.style.background = 'transparent';
    }

    try {
      setLoading(true);

      await elementToCanvas(rootClone, {
        response: 'download',

        filter: ['.AmauiDrawing-methods', '.AmauiDrawing-pointer', '.AmauiTooltip-root'],

        download: refs.download.current,

        width: rect.width,

        height: rect.height
      });
    }
    catch (error) { }

    setLoading(false);

    if (is('function', onDownload_)) onDownload_();
  }, []);

  const valueNew = (is('array', value) ? value : [value]).filter(Boolean);

  const valueNewActive = mouseDown && valueNew[valueNew.length - 1];

  const circleStrokeWidth = +(valueNewActive ? valueNewActive.strokeWidth : refs.strokeWidth.current);

  return (
    <Surface
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      version={version}

      Component={Component}

      className={classNames([
        staticClassName('Drawing', theme) && [
          'AmauiDrawing-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <svg
        ref={refs.svg}

        viewBox={viewBox}

        onMouseDown={onMouseDown}

        onTouchStart={onMouseDown}

        className={classNames([
          staticClassName('Drawing', theme) && [
            'AmauiDrawing-svg'
          ],

          classes.svg
        ])}
      >
        {valueNew.map((item: any, index: number) => (
          <path
            key={index}

            fill='none'

            {...item}
          />
        ))}

        {/* Pointer  */}
        <circle
          className='AmauiDrawing-pointer'

          cx={move?.x}

          cy={move?.y}

          r={circleStrokeWidth + 1}

          fill={strokeColor}
        />
      </svg>

      {/* Methods */}
      {(clear || download) && (
        <Fade
          in={!mouseDown}
        >
          <Line
            tonal={tonal}

            color={color}

            gap={0}

            direction='row'

            align='center'

            justify='center'

            Component={Surface}

            className={classNames([
              staticClassName('Drawing', theme) && [
                'AmauiDrawing-methods'
              ],

              classes.methods
            ])}
          >
            {clear && (
              <Tooltip
                label='Clear'

                {...TooltipProps}
              >
                <IconButton
                  tonal={tonal}

                  color={color}

                  version='text'

                  size='small'

                  onClick={onClear}

                  {...IconButtonProps}
                >
                  <IconClear />
                </IconButton>
              </Tooltip>
            )}

            {download && (
              <Tooltip
                label='Download'

                {...TooltipProps}
              >
                <IconButton
                  tonal={tonal}

                  color={color}

                  version='text'

                  size='small'

                  loading={loading}

                  onClick={onDownload}

                  {...IconButtonProps}
                >
                  <IconDownload />
                </IconButton>
              </Tooltip>
            )}
          </Line>
        </Fade>
      )}
    </Surface>
  );
});

Drawing.displayName = 'AmauiDrawing';

export default Drawing;
