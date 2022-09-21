import React from 'react';

import { canvasCrop, clamp, download, elementToCanvas, is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Tooltip from '../Tooltip';
import Surface from '../Surface';
import TextField from '../TextField';
import IconButton from '../IconButton';
import { IconDoneAnimated } from '../Buttons/Buttons';
import Portal from '../Portal';
import Line from '../Line';
import Icon from '../Icon';

import { staticClassName } from '../utils';

const dot = {
  display: 'inline-block',
  position: 'absolute',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#a4a4a4',
  outline: '1px solid white'
};

const useStyle = style(theme => ({
  root: {
    padding: '8px 24px 12px',
    borderRadius: theme.methods.shape.radius.value('rg')
  },

  imageWrapper: {
    position: 'fixed',
    inset: 0,
    zIndex: theme.z_index.modal + 11
  },

  mouseDown_move: {
    '& *': {
      cursor: 'grab !important'
    }
  },

  mouseDown_top: {
    '& *': {
      cursor: 'ns-resize !important'
    }
  },

  mouseDown_left: {
    '& *': {
      cursor: 'ew-resize !important'
    }
  },

  mouseDown_right: {
    '& *': {
      cursor: 'ew-resize !important'
    }
  },

  mouseDown_bottom: {
    '& *': {
      cursor: 'ns-resize !important'
    }
  },

  mouseDown_top_left: {
    '& *': {
      cursor: 'nwse-resize !important'
    }
  },

  mouseDown_top_right: {
    '& *': {
      cursor: 'nesw-resize !important'
    }
  },

  mouseDown_bottom_left: {
    '& *': {
      cursor: 'nesw-resize !important'
    }
  },

  mouseDown_bottom_right: {
    '& *': {
      cursor: 'nwse-resize !important'
    }
  },

  canvas: {
    position: 'absolute',
    zIndex: 0
  },

  canvas_main: {
    top: 0,
    left: 0
  },

  canvas_imageSelector: {
    zIndex: -1
  },

  background: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, 44),
    zIndex: 1,
  },

  imageSelector_main: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    outline: '2px dashed white',
    background: 'transparent',
    touchAction: 'none',
    opacity: 0,
    zIndex: 14,
    transition: theme.methods.transitions.make('opacity'),
  },

  imageSelector_main_in: {
    opacity: 1
  },

  imageSelector: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    touchAction: 'none',
    overflow: 'hidden',
    zIndex: 11
  },

  move: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    cursor: 'grab',

    '&:active': {
      cursor: 'grabbing !important'
    }
  },

  dot: {
    ...dot
  },

  dot_top_left: {
    top: 0,
    left: 0,
    transform: 'translate(-50%, -50%)',
    cursor: 'nwse-resize'
  },

  dot_top_right: {
    top: 0,
    right: 0,
    transform: 'translate(50%, -50%)',
    cursor: 'nesw-resize'
  },

  dot_bottom_left: {
    bottom: 0,
    left: 0,
    transform: 'translate(-50%, 50%)',
    cursor: 'nesw-resize'
  },

  dot_bottom_right: {
    bottom: 0,
    right: 0,
    transform: 'translate(50%, 50%)',
    cursor: 'nwse-resize'
  },

  border: {
    position: 'absolute'
  },

  border_top: {
    top: '-2px',
    height: 2,
    width: '100%',
    cursor: 'ns-resize',

    '&::before': {
      ...dot,

      content: '""',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },

  border_left: {
    left: '-2px',
    height: '100%',
    width: '2px',
    cursor: 'ew-resize',

    '&::before': {
      ...dot,

      content: '""',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  },

  border_right: {
    right: '-2px',
    height: '100%',
    width: '2px',
    cursor: 'ew-resize',

    '&::before': {
      ...dot,

      content: '""',
      top: '50%',
      right: '50%',
      transform: 'translate(50%, -50%)'
    }
  },

  border_bottom: {
    bottom: '-2px',
    height: 2,
    width: '100%',
    cursor: 'ns-resize',

    '&::before': {
      ...dot,

      content: '""',
      bottom: '50%',
      left: '50%',
      transform: 'translate(-50%, 50%)'
    }
  }
}), { name: 'AmauiScreenShot' });

const IconMaterialFitScreenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenRounded'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6Q20 6 20 6Q20 6 20 6H17V4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V9ZM2 9V6Q2 5.175 2.588 4.588Q3.175 4 4 4H7V6H4Q4 6 4 6Q4 6 4 6V9ZM17 20V18H20Q20 18 20 18Q20 18 20 18V15H22V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V15H4V18Q4 18 4 18Q4 18 4 18H7V20ZM16 16H8Q7.175 16 6.588 15.412Q6 14.825 6 14V10Q6 9.175 6.588 8.587Q7.175 8 8 8H16Q16.825 8 17.413 8.587Q18 9.175 18 10V14Q18 14.825 17.413 15.412Q16.825 16 16 16ZM8 14H16Q16 14 16 14Q16 14 16 14V10Q16 10 16 10Q16 10 16 10H8Q8 10 8 10Q8 10 8 10V14Q8 14 8 14Q8 14 8 14ZM8 14Q8 14 8 14Q8 14 8 14V10Q8 10 8 10Q8 10 8 10Q8 10 8 10Q8 10 8 10V14Q8 14 8 14Q8 14 8 14Z" />
    </Icon>
  );
});

const IconMaterialDocumentScannerRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerRounded'
      short_name='DocumentScanner'

      {...props}
    >
      <path d="M3 6Q2.575 6 2.288 5.713Q2 5.425 2 5V2Q2 1.575 2.288 1.287Q2.575 1 3 1H6Q6.425 1 6.713 1.287Q7 1.575 7 2Q7 2.425 6.713 2.712Q6.425 3 6 3H4V5Q4 5.425 3.713 5.713Q3.425 6 3 6ZM21 6Q20.575 6 20.288 5.713Q20 5.425 20 5V3H18Q17.575 3 17.288 2.712Q17 2.425 17 2Q17 1.575 17.288 1.287Q17.575 1 18 1H21Q21.425 1 21.712 1.287Q22 1.575 22 2V5Q22 5.425 21.712 5.713Q21.425 6 21 6ZM3 23Q2.575 23 2.288 22.712Q2 22.425 2 22V19Q2 18.575 2.288 18.288Q2.575 18 3 18Q3.425 18 3.713 18.288Q4 18.575 4 19V21H6Q6.425 21 6.713 21.288Q7 21.575 7 22Q7 22.425 6.713 22.712Q6.425 23 6 23ZM18 23Q17.575 23 17.288 22.712Q17 22.425 17 22Q17 21.575 17.288 21.288Q17.575 21 18 21H20V19Q20 18.575 20.288 18.288Q20.575 18 21 18Q21.425 18 21.712 18.288Q22 18.575 22 19V22Q22 22.425 21.712 22.712Q21.425 23 21 23ZM7 18Q7 18 7 18Q7 18 7 18H17Q17 18 17 18Q17 18 17 18V6Q17 6 17 6Q17 6 17 6H7Q7 6 7 6Q7 6 7 6ZM7 20Q6.175 20 5.588 19.413Q5 18.825 5 18V6Q5 5.175 5.588 4.588Q6.175 4 7 4H17Q17.825 4 18.413 4.588Q19 5.175 19 6V18Q19 18.825 18.413 19.413Q17.825 20 17 20ZM10 10H14Q14.425 10 14.713 9.712Q15 9.425 15 9Q15 8.575 14.713 8.287Q14.425 8 14 8H10Q9.575 8 9.288 8.287Q9 8.575 9 9Q9 9.425 9.288 9.712Q9.575 10 10 10ZM10 13H14Q14.425 13 14.713 12.712Q15 12.425 15 12Q15 11.575 14.713 11.287Q14.425 11 14 11H10Q9.575 11 9.288 11.287Q9 11.575 9 12Q9 12.425 9.288 12.712Q9.575 13 10 13ZM10 16H14Q14.425 16 14.713 15.712Q15 15.425 15 15Q15 14.575 14.713 14.287Q14.425 14 14 14H10Q9.575 14 9.288 14.287Q9 14.575 9 15Q9 15.425 9.288 15.712Q9.575 16 10 16ZM7 18V6Q7 6 7 6Q7 6 7 6Q7 6 7 6Q7 6 7 6V18Q7 18 7 18Q7 18 7 18Q7 18 7 18Q7 18 7 18Z" />
    </Icon>
  );
});

const IconMaterialCropFreeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeRounded'
      short_name='CropFree'

      {...props}
    >
      <path d="M4 9Q3.575 9 3.288 8.712Q3 8.425 3 8V5Q3 4.175 3.587 3.587Q4.175 3 5 3H8Q8.425 3 8.713 3.287Q9 3.575 9 4Q9 4.425 8.713 4.712Q8.425 5 8 5H5Q5 5 5 5Q5 5 5 5V8Q5 8.425 4.713 8.712Q4.425 9 4 9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V16Q3 15.575 3.288 15.287Q3.575 15 4 15Q4.425 15 4.713 15.287Q5 15.575 5 16V19Q5 19 5 19Q5 19 5 19H8Q8.425 19 8.713 19.288Q9 19.575 9 20Q9 20.425 8.713 20.712Q8.425 21 8 21ZM16 21Q15.575 21 15.288 20.712Q15 20.425 15 20Q15 19.575 15.288 19.288Q15.575 19 16 19H19Q19 19 19 19Q19 19 19 19V16Q19 15.575 19.288 15.287Q19.575 15 20 15Q20.425 15 20.712 15.287Q21 15.575 21 16V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM20 9Q19.575 9 19.288 8.712Q19 8.425 19 8V5Q19 5 19 5Q19 5 19 5H16Q15.575 5 15.288 4.712Q15 4.425 15 4Q15 3.575 15.288 3.287Q15.575 3 16 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V8Q21 8.425 20.712 8.712Q20.425 9 20 9Z" />
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

const ScreenShot = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiScreenShot?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    nameDefault,
    name_ = `amaui-screenshot.${props.type !== undefined ? props.type.split('/')[1] : 'png'}`,

    onChangeName,

    view = true,
    entirePage = true,
    free = true,

    type = `image/png`,
    quality = 1,

    onView: onView_,
    onEntirePage: onEntirePage_,
    onFree: onFree_,
    onFreeSave: onFreeSave_,
    onFreeClose: onFreeClose_,

    IconView = IconMaterialFitScreenRounded,
    IconEntirePage = IconMaterialDocumentScannerRounded,
    IconFree = IconMaterialCropFreeRounded,
    IconDownload = IconMaterialDownloadRounded,

    TextFieldProps,
    TooltipProps,
    IconButtonProps,

    className,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [name, setName] = React.useState(nameDefault !== undefined ? nameDefault : name_);
  const [loading, setLoading] = React.useState([]);
  const [done, setDone] = React.useState([]);
  const [image, setImage] = React.useState<HTMLCanvasElement>();
  const [mouseDown, setMouseDown] = React.useState<any>();
  const [imageSelectorValue, setImageSelectorValue] = React.useState<any>();

  const refs = {
    imageWrapper: React.useRef<any>(),
    image: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    imageSelectorValue: React.useRef<any>(),
    imageSelectorMain: React.useRef<any>(),
    imageSelector: React.useRef<any>(),
    previousMouseEvent: React.useRef<any>(),
    canvasMain: React.useRef<HTMLCanvasElement>(),
    canvasImageSelector: React.useRef<HTMLCanvasElement>(),
    move: React.useRef<HTMLDivElement>(),
    borderTop: React.useRef<HTMLDivElement>(),
    borderLeft: React.useRef<HTMLDivElement>(),
    borderRight: React.useRef<HTMLDivElement>(),
    borderBottom: React.useRef<HTMLDivElement>(),
    dotTopLeft: React.useRef<HTMLDivElement>(),
    dotTopRight: React.useRef<HTMLDivElement>(),
    dotBottomLeft: React.useRef<HTMLDivElement>(),
    dotBottomRight: React.useRef<HTMLDivElement>()
  };

  refs.image.current = image;

  refs.mouseDown.current = mouseDown;

  refs.imageSelectorValue.current = imageSelectorValue;

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'V':
        case 'v':
          if (event.metaKey && event.shiftKey) onView();

          break;

        case 'E':
        case 'e':
          if (event.metaKey && event.shiftKey) onEntirePage();

          break;

        case 'F':
        case 'f':
          if (event.metaKey && event.shiftKey) onFree();

          break;

        case 'S':
        case 's':
          if (event.metaKey) {
            if (refs.image.current) onFreeSave();
          }

          break;

        case 'Enter':
          if (refs.image.current) onFreeSave();

          break;

        case 'Escape':
          if (refs.image.current) onFreeClose();

          break;

        default:
          break;
      }
    };

    const onMouseUp = (event: MouseEvent) => {
      setMouseDown(false);

      refs.previousMouseEvent.current = undefined;
    };

    // Move
    const onMove = (x: number, y: number) => {
      if (refs.mouseDown.current && refs.previousMouseEvent.current) {
        const { top: previousTop, left: previousLeft } = refs.mouseDown.current;

        const imageWrapperRect: DOMRect = refs.imageWrapper.current.getBoundingClientRect();

        const imageSelectorRect: DOMRect = refs.imageSelector.current.getBoundingClientRect();

        if (refs.mouseDown.current?.version === 'make') {
          const top = clamp(y - imageWrapperRect.top, 0, imageWrapperRect.height);
          const left = clamp(x - imageWrapperRect.left, 0, imageWrapperRect.width);

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            top: clamp(top, 0, previousTop),
            left: clamp(left, 0, previousLeft),

            height: Math.abs(top - previousTop),
            width: Math.abs(left - previousLeft)
          });
        }
        else if (refs.mouseDown.current?.version === 'move') {
          const top = y - refs.previousMouseEvent.current.clientY;
          const left = x - refs.previousMouseEvent.current.clientX;

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            top: clamp(refs.imageSelectorValue.current.top + top, 0, imageWrapperRect.height - imageSelectorRect.height),
            left: clamp(refs.imageSelectorValue.current.left + left, 0, imageWrapperRect.width - imageSelectorRect.width)
          });
        }
        else if (refs.mouseDown.current?.version === 'top_left') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          const top = clamp(imageSelectorRect.top + incY, 0);
          const left = clamp(imageSelectorRect.left + incX, 0);

          if (
            (imageSelectorRect.bottom - top < 0) &&
            (imageSelectorRect.right - left < 0)
          ) refs.mouseDown.current.version = 'bottom_right';
          else if (imageSelectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom_left';
          else if (imageSelectorRect.right - left < 0) refs.mouseDown.current.version = 'top_right';

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            top,
            left,

            width: clamp(imageSelectorRect.right - left, 0),
            height: clamp(imageSelectorRect.bottom - top, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'top_right') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          const top = clamp(imageSelectorRect.top + incY, 0);

          if (
            (imageSelectorRect.bottom - top < 0) &&
            (imageSelectorRect.width + incX < 0)
          ) refs.mouseDown.current.version = 'bottom_left';
          else if (imageSelectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom_right';
          else if (imageSelectorRect.width + incX < 0) refs.mouseDown.current.version = 'top_left';

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            top,

            width: clamp(Math.abs(imageSelectorRect.width + incX), 0, imageWrapperRect.width - imageSelectorRect.left),
            height: clamp(imageSelectorRect.bottom - top, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom_right') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          if ((imageSelectorRect.height + incY < 0) && (imageSelectorRect.width + incX < 0)) refs.mouseDown.current.version = 'top_left';
          else if (imageSelectorRect.height + incY < 0) refs.mouseDown.current.version = 'top_right';
          else if (imageSelectorRect.width + incX < 0) refs.mouseDown.current.version = 'bottom_left';

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            width: clamp(Math.abs(imageSelectorRect.width + incX), 0, imageWrapperRect.width - imageSelectorRect.left),
            height: clamp(Math.abs(imageSelectorRect.height + incY), 0, imageWrapperRect.height - imageSelectorRect.top)
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom_left') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          const left = clamp(imageSelectorRect.left + incX, 0);

          if ((imageSelectorRect.height + incY < 0) && (imageSelectorRect.right - left < 0)) refs.mouseDown.current.version = 'top_right';
          else if (imageSelectorRect.height + incY < 0) refs.mouseDown.current.version = 'top_left';
          else if (imageSelectorRect.right - left < 0) refs.mouseDown.current.version = 'bottom_right';

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            left,

            width: clamp(imageSelectorRect.right - left, 0),
            height: clamp(Math.abs(imageSelectorRect.height + incY), 0, imageWrapperRect.height - imageSelectorRect.top)
          });
        }
        else if (refs.mouseDown.current?.version === 'top') {
          const inc = y - refs.previousMouseEvent.current.clientY;

          const top = clamp(imageSelectorRect.top + inc, 0);

          if (imageSelectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom';

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            top,

            height: clamp(imageSelectorRect.bottom - top, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom') {
          const inc = y - refs.previousMouseEvent.current.clientY;

          if (imageSelectorRect.height + inc < 0) refs.mouseDown.current.version = 'top';

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            height: clamp(Math.abs(imageSelectorRect.height + inc), 0, imageWrapperRect.height - imageSelectorRect.top)
          });
        }
        else if (refs.mouseDown.current?.version === 'left') {
          const inc = x - refs.previousMouseEvent.current.clientX;

          const left = clamp(imageSelectorRect.left + inc, 0);

          if (imageSelectorRect.right - left < 0) refs.mouseDown.current.version = 'right';

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            left,

            width: clamp(imageSelectorRect.right - left, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'right') {
          const inc = x - refs.previousMouseEvent.current.clientX;

          if (imageSelectorRect.width + inc < 0) refs.mouseDown.current.version = 'left';

          setImageSelectorValue({
            ...refs.imageSelectorValue.current,

            width: clamp(Math.abs(imageSelectorRect.width + inc), 0, imageWrapperRect.width - imageSelectorRect.left)
          });
        }
      }
    };

    // Mouse move
    const onMouseMove = (event: MouseEvent) => {
      if (refs.mouseDown.current) {
        const { clientY, clientX } = event;

        onMove(clientX, clientY);

        refs.previousMouseEvent.current = event;
      }
    };

    // Touch move
    const onTouchMove = (event: TouchEvent) => {
      if (refs.mouseDown.current) {
        const { clientY, clientX } = event.touches[0];

        onMove(clientX, clientY);

        refs.previousMouseEvent.current = event;

        // Normalize for use as a mouseDown value
        refs.previousMouseEvent.current.clientY = clientY;

        refs.previousMouseEvent.current.clientX = clientX;
      }
    };

    window.addEventListener('keydown', method);

    window.addEventListener('mousemove', onMouseMove);

    window.addEventListener('mouseup', onMouseUp);

    window.addEventListener('touchmove', onTouchMove, { passive: true });

    window.addEventListener('touchend', onMouseUp);

    setInit(true);

    return () => {
      // Clean up
      window.removeEventListener('keydown', method);

      window.removeEventListener('mousemove', onMouseMove);

      window.removeEventListener('mouseup', onMouseUp);

      window.removeEventListener('touchmove', onTouchMove);

      window.removeEventListener('touchend', onMouseUp);

      if (refs.image.current) {
        setImage('' as any);

        if (window.document.body.style.overflow === 'hidden') window.document.body.style.removeProperty('overflow');
      }
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (name_ !== name) setName(name_);
    }
  }, [name_]);

  React.useEffect(() => {
    if (image) {
      window.document.body.style.overflow = 'hidden';

      refs.canvasMain.current.getContext('2d').drawImage(image, 0, 0);

      refs.canvasImageSelector.current.getContext('2d').drawImage(image, 0, 0);
    }
    else {
      setImageSelectorValue(false);

      if (window.document.body.style.overflow === 'hidden') window.document.body.style.removeProperty('overflow');
    }
  }, [image]);

  const onChange = (value_: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setName(value_);

    if (is('function', onChangeName)) onChangeName(value_);
  };

  const onView = async () => {
    setLoading(items => [...items, 'view']);

    try {
      await elementToCanvas(window.document.body, {
        response: 'download',

        download: {
          name,
          type,
          quality
        },

        crop: {
          y: window.scrollY,
          x: window.scrollX,
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    }
    catch (error) { }

    setLoading(items => items.filter(item => item !== 'view'));

    setDone(items => [...items, 'view']);

    setTimeout(() => {
      setDone(items => items.filter(item => item !== 'view'));
    }, 1400);

    if (is('function', onView_)) onView_();
  };

  const onEntirePage = async () => {
    setLoading(items => [...items, 'entirePage']);

    try {
      await elementToCanvas(window.document.body, {
        response: 'download',

        download: {
          name,
          type,
          quality
        }
      });
    }
    catch (error) { }

    setLoading(items => items.filter(item => item !== 'entirePage'));

    setDone(items => [...items, 'entirePage']);

    setTimeout(() => {
      setDone(items => items.filter(item => item !== 'entirePage'));
    }, 1400);

    if (is('function', onEntirePage_)) onEntirePage_();
  };

  const onFree = async () => {
    setLoading(items => [...items, 'free']);

    // Update image
    try {
      const canvas = await elementToCanvas(window.document.body, {
        response: 'canvas',

        download: {
          name,
          type,
          quality
        },

        crop: {
          y: window.scrollY,
          x: window.scrollX,
          width: window.innerWidth,
          height: window.innerHeight
        }
      }) as HTMLCanvasElement;

      setImage(canvas);
    }
    catch (error) { }

    setLoading(items => items.filter(item => item !== 'free'));

    if (is('function', onFree_)) onFree_();
  };

  const onFreeSave = () => {
    // Crop the canvas
    const canvas = canvasCrop(refs.image.current, refs.imageSelectorValue.current.left, refs.imageSelectorValue.current.top, refs.imageSelectorValue.current.width, refs.imageSelectorValue.current.height);

    // Download the image fron canvas datauri
    // of the image type and quality, name
    const uri = canvas.toDataURL(type, quality);

    download(name, uri, type);

    // Clear the image
    setImage('' as any);

    setDone(items => [...items, 'free']);

    setTimeout(() => {
      setDone(items => items.filter(item => item !== 'free'));
    }, 1400);

    if (is('function', onFreeSave_)) onFreeSave_();
  };

  const onFreeClose = () => {
    // Clear the image
    setImage('' as any);

    if (is('function', onFreeClose_)) onFreeClose_();
  };

  const onTouchStart = React.useCallback((event: React.TouchEvent<any>) => {
    if (
      ![
        refs.imageSelectorMain.current,
        refs.imageSelector.current,
        refs.move.current,
        refs.borderTop.current,
        refs.borderLeft.current,
        refs.borderRight.current,
        refs.borderBottom.current,
        refs.dotTopLeft.current,
        refs.dotTopRight.current,
        refs.dotBottomLeft.current,
        refs.dotBottomRight.current
      ].includes(event.target)
    ) {
      const { clientY, clientX } = event.touches[0];

      const imageWrapperRect = refs.imageWrapper.current.getBoundingClientRect();

      setMouseDown({
        version: 'make',
        top: clientY - imageWrapperRect.top,
        left: clientX - imageWrapperRect.left
      });
    }
  }, []);

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (
      ![
        refs.imageSelectorMain.current,
        refs.imageSelector.current,
        refs.move.current,
        refs.borderTop.current,
        refs.borderLeft.current,
        refs.borderRight.current,
        refs.borderBottom.current,
        refs.dotTopLeft.current,
        refs.dotTopRight.current,
        refs.dotBottomLeft.current,
        refs.dotBottomRight.current
      ].includes(event.target)
    ) {
      const { clientY, clientX } = event;

      const imageWrapperRect = refs.imageWrapper.current.getBoundingClientRect();

      setMouseDown({
        version: 'make',
        top: clientY - imageWrapperRect.top,
        left: clientX - imageWrapperRect.left
      });
    }
  }, []);

  const onTouchStartImageSelector = React.useCallback((event: React.TouchEvent<any>) => {
    const { clientY, clientX } = event.touches[0];

    const imageWrapperRect = refs.imageWrapper.current.getBoundingClientRect();

    setMouseDown({
      version: 'move',
      top: clientY - imageWrapperRect.top,
      left: clientX - imageWrapperRect.left
    });
  }, []);

  const onMouseDownImageSelector = React.useCallback((event: React.MouseEvent<any>) => {
    const { clientY, clientX } = event;

    const imageWrapperRect = refs.imageWrapper.current.getBoundingClientRect();

    setMouseDown({
      version: 'move',
      top: clientY - imageWrapperRect.top,
      left: clientX - imageWrapperRect.left
    });
  }, []);

  const onTouchStartBorder = (version: string) => (event: React.TouchEvent<any>) => {
    setMouseDown({
      version
    });
  };

  const onMouseDownBorder = (version: string) => (event: React.MouseEvent<any>) => {
    setMouseDown({
      version
    });
  };

  const iconButtonProps = {
    tonal,
    color: 'inherit',
    elevation: false
  };

  const textFieldProps = {
    tonal,
    color: 'inherit',
    version: 'text',
    size: 'small',
    fullWidth: true
  };

  const tooltipProps = {
    position: 'top',
    portal: false,
    disableInteractive: true
  };

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      elevation={6}

      Component={Line}

      className={classNames([
        staticClassName('ScreenShot', theme) && [
          'AmauiScreenShot-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={1}

        direction='row'

        align='center'

        justify='center'
      >
        {view && (
          <Tooltip
            label='View'

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={() => onView()}

              loading={loading.includes('view')}

              disabled={done.includes('view')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('view') ? <IconDoneAnimated add in /> : <IconView />}
            </IconButton>
          </Tooltip>
        )}

        {entirePage && (
          <Tooltip
            label='Entire page'

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={() => onEntirePage()}

              loading={loading.includes('entirePage')}

              disabled={done.includes('entirePage')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('entirePage') ? <IconDoneAnimated add in /> : <IconEntirePage />}
            </IconButton>
          </Tooltip>
        )}

        {free && (
          <Tooltip
            label={image ? 'Save' : 'Free form'}

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={() => image ? onFreeSave() : onFree()}

              loading={loading.includes('free')}

              disabled={done.includes('free')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('free') ? <IconDoneAnimated add in /> : image ? <IconDownload /> : <IconFree />}
            </IconButton>
          </Tooltip>
        )}
      </Line>

      <TextField
        label='Name'

        value={name}

        onChange={onChange}

        {...textFieldProps}

        {...TextFieldProps}
      />

      {image && (
        <Portal
          element={window.document.body}
        >
          <div
            ref={refs.imageWrapper}

            onTouchStart={onTouchStart}

            onMouseDown={onMouseDown}

            className={classNames([
              staticClassName('ScreenShot', theme) && [
                'AmauiScreenShot-imageWrapper'
              ],

              classes.imageWrapper,
              mouseDown && classes[`mouseDown_${mouseDown.version}`]
            ])}
          >
            <canvas
              ref={refs.canvasMain}

              className={classNames([
                staticClassName('ScreenShot', theme) && [
                  'AmauiScreenShot-canvas',
                  'AmauiScreenShot-canvas-main'
                ],

                classes.canvas,
                classes.canvas_main
              ])}

              width={image?.width}

              height={image?.height}
            />

            <div
              className={classNames([
                staticClassName('ScreenShot', theme) && [
                  'AmauiScreenShot-background'
                ],

                classes.background
              ])}
            />

            <div
              ref={refs.imageSelectorMain}

              className={classNames([
                staticClassName('ScreenShot', theme) && [
                  'AmauiScreenShot-imageSelector-main'
                ],

                classes.imageSelector_main,
                imageSelectorValue && classes.imageSelector_main_in
              ])}

              style={{
                ...imageSelectorValue
              }}
            >
              <div
                ref={refs.move}

                onTouchStart={onTouchStartImageSelector}

                onMouseDown={onMouseDownImageSelector}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-move'
                  ],

                  classes.move
                ])}
              />

              <div
                ref={refs.dotTopLeft}

                onTouchStart={onTouchStartBorder('top_left')}

                onMouseDown={onMouseDownBorder('top_left')}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-dot',
                    'AmauiScreenShot-dot-top-left'
                  ],

                  classes.dot,
                  classes.dot_top_left
                ])}
              />

              <div
                ref={refs.dotTopRight}

                onTouchStart={onTouchStartBorder('top_right')}

                onMouseDown={onMouseDownBorder('top_right')}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-dot',
                    'AmauiScreenShot-dot-top-right'
                  ],

                  classes.dot,
                  classes.dot_top_right
                ])}
              />

              <div
                ref={refs.dotBottomLeft}

                onTouchStart={onTouchStartBorder('bottom_left')}

                onMouseDown={onMouseDownBorder('bottom_left')}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-dot',
                    'AmauiScreenShot-dot-bottom-left'
                  ],

                  classes.dot,
                  classes.dot_bottom_left
                ])}
              />

              <div
                ref={refs.dotBottomRight}

                onTouchStart={onTouchStartBorder('bottom_right')}

                onMouseDown={onMouseDownBorder('bottom_right')}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-dot',
                    'AmauiScreenShot-dot-bottom-right'
                  ],

                  classes.dot,
                  classes.dot_bottom_right
                ])}
              />

              <div
                ref={refs.borderTop}

                onTouchStart={onTouchStartBorder('top')}

                onMouseDown={onMouseDownBorder('top')}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-border',
                    'AmauiScreenShot-border-top'
                  ],

                  classes.border,
                  classes.border_top
                ])}
              />

              <div
                ref={refs.borderLeft}

                onTouchStart={onTouchStartBorder('left')}

                onMouseDown={onMouseDownBorder('left')}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-border',
                    'AmauiScreenShot-border-left'
                  ],

                  classes.border,
                  classes.border_left
                ])}
              />

              <div
                ref={refs.borderRight}

                onTouchStart={onTouchStartBorder('right')}

                onMouseDown={onMouseDownBorder('right')}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-border',
                    'AmauiScreenShot-border-right'
                  ],

                  classes.border,
                  classes.border_right
                ])}
              />

              <div
                ref={refs.borderBottom}

                onTouchStart={onTouchStartBorder('bottom')}

                onMouseDown={onMouseDownBorder('bottom')}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-border',
                    'AmauiScreenShot-border-bottom'
                  ],

                  classes.border,
                  classes.border_bottom
                ])}
              />
            </div>

            <div
              ref={refs.imageSelector}

              className={classNames([
                staticClassName('ScreenShot', theme) && [
                  'AmauiScreenShot-imageSelector'
                ],

                classes.imageSelector
              ])}

              style={{
                ...imageSelectorValue
              }}
            >
              <canvas
                ref={refs.canvasImageSelector}

                className={classNames([
                  staticClassName('ScreenShot', theme) && [
                    'AmauiScreenShot-canvas',
                    'AmauiScreenShot-canvas-imageSelector'
                  ],

                  classes.canvas,
                  classes.canvas_imageSelector
                ])}

                width={image?.width}

                height={image?.height}

                style={{
                  top: `${(imageSelectorValue?.top || 0) * -1}px`,
                  left: `${(imageSelectorValue?.left || 0) * -1}px`
                }}
              />
            </div>
          </div>
        </Portal>
      )}
    </Surface>
  );
});

ScreenShot.displayName = 'AmauiScreenShot';

export default ScreenShot;
