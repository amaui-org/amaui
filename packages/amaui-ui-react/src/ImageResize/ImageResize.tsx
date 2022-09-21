import React from 'react';

import { clamp, is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName, image as imageMethod } from '../utils';

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
    width: '100%',
    height: '100%'
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
}), { name: 'AmauiImageResize' });

// To do

// aspect ratio

// Example with default selector width, height, top, left
// min selector width, min selector height
// max selector width and max selector height

// Optional buttons to save or cancel
// both buttons any component, React.cloneElement to add onClick to the buttons value y

// Save
// on save update image as new canvas
// and call onChange method with new either datauri or canvas, depends on version

// Escape, cancel the selection

const ImageResize = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiImageResize?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    // url, datauri or canvas
    image: image_,

    selectorDefault,
    selector: selector_,
    onSelectorChange: onSelectorChange_,

    type = `image/png`,
    quality = 1,

    className,

    ...other
  } = props;

  const [image, setImage] = React.useState<HTMLCanvasElement>();
  const [mouseDown, setMouseDown] = React.useState<any>();
  const [selector, setSelector] = React.useState<any>(selectorDefault !== undefined ? selectorDefault : selector_);

  const refs = {
    root: React.useRef<any>(),
    image: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    selector: React.useRef<any>(),
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

  refs.selector.current = selector;

  const onSelectorChange = (valueNew: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('selector')) setSelector(valueNew);

    if (is('function', onSelectorChange_)) onSelectorChange_(valueNew);
  };

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          // if (refs.image.current) onFreeSave();

          break;

        case 'Escape':
          // if (refs.image.current) onFreeClose();

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

        const imageWrapperRect: DOMRect = refs.root.current.getBoundingClientRect();

        const imageSelectorRect: DOMRect = refs.imageSelector.current.getBoundingClientRect();

        if (refs.mouseDown.current?.version === 'make') {
          const top = clamp(y - imageWrapperRect.top, 0, imageWrapperRect.height);
          const left = clamp(x - imageWrapperRect.left, 0, imageWrapperRect.width);

          onSelectorChange({
            ...refs.selector.current,

            top: clamp(top, 0, previousTop),
            left: clamp(left, 0, previousLeft),

            height: Math.abs(top - previousTop),
            width: Math.abs(left - previousLeft)
          });
        }
        else if (refs.mouseDown.current?.version === 'move') {
          const top = y - refs.previousMouseEvent.current.clientY;
          const left = x - refs.previousMouseEvent.current.clientX;

          onSelectorChange({
            ...refs.selector.current,

            top: clamp(refs.selector.current.top + top, 0, imageWrapperRect.height - imageSelectorRect.height),
            left: clamp(refs.selector.current.left + left, 0, imageWrapperRect.width - imageSelectorRect.width)
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

          onSelectorChange({
            ...refs.selector.current,

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

          onSelectorChange({
            ...refs.selector.current,

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

          onSelectorChange({
            ...refs.selector.current,

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

          onSelectorChange({
            ...refs.selector.current,

            left,

            width: clamp(imageSelectorRect.right - left, 0),
            height: clamp(Math.abs(imageSelectorRect.height + incY), 0, imageWrapperRect.height - imageSelectorRect.top)
          });
        }
        else if (refs.mouseDown.current?.version === 'top') {
          const inc = y - refs.previousMouseEvent.current.clientY;

          const top = clamp(imageSelectorRect.top + inc, 0);

          if (imageSelectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom';

          onSelectorChange({
            ...refs.selector.current,

            top,

            height: clamp(imageSelectorRect.bottom - top, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom') {
          const inc = y - refs.previousMouseEvent.current.clientY;

          if (imageSelectorRect.height + inc < 0) refs.mouseDown.current.version = 'top';

          onSelectorChange({
            ...refs.selector.current,

            height: clamp(Math.abs(imageSelectorRect.height + inc), 0, imageWrapperRect.height - imageSelectorRect.top)
          });
        }
        else if (refs.mouseDown.current?.version === 'left') {
          const inc = x - refs.previousMouseEvent.current.clientX;

          const left = clamp(imageSelectorRect.left + inc, 0);

          if (imageSelectorRect.right - left < 0) refs.mouseDown.current.version = 'right';

          onSelectorChange({
            ...refs.selector.current,

            left,

            width: clamp(imageSelectorRect.right - left, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'right') {
          const inc = x - refs.previousMouseEvent.current.clientX;

          if (imageSelectorRect.width + inc < 0) refs.mouseDown.current.version = 'left';

          onSelectorChange({
            ...refs.selector.current,

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
    if (image_ !== image) {
      if (image_ instanceof HTMLCanvasElement) setImage(image_);
      else if (is('string', image_)) makeImage(image_);
    }
  }, [image_]);

  React.useEffect(() => {
    if (image) {
      refs.canvasMain.current.getContext('2d').drawImage(image, 0, 0);

      refs.canvasImageSelector.current.getContext('2d').drawImage(image, 0, 0);
    }
  }, [image]);

  const makeImage = async (value: any = image) => {
    const img = await imageMethod(value);

    const canvas = window.document.createElement('canvas');

    canvas.getContext('2d').drawImage(img, 0, 0);

    setImage(canvas);
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

      const imageWrapperRect = refs.root.current.getBoundingClientRect();

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

      const imageWrapperRect = refs.root.current.getBoundingClientRect();

      setMouseDown({
        version: 'make',
        top: clientY - imageWrapperRect.top,
        left: clientX - imageWrapperRect.left
      });
    }
  }, []);

  const onTouchStartImageSelector = React.useCallback((event: React.TouchEvent<any>) => {
    const { clientY, clientX } = event.touches[0];

    const imageWrapperRect = refs.root.current.getBoundingClientRect();

    setMouseDown({
      version: 'move',
      top: clientY - imageWrapperRect.top,
      left: clientX - imageWrapperRect.left
    });
  }, []);

  const onMouseDownImageSelector = React.useCallback((event: React.MouseEvent<any>) => {
    const { clientY, clientX } = event;

    const imageWrapperRect = refs.root.current.getBoundingClientRect();

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

  return (
    <div
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      onTouchStart={onTouchStart}

      onMouseDown={onMouseDown}

      className={classNames([
        staticClassName('ImageResize', theme) && [
          'AmauiImageResize-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <canvas
        ref={refs.canvasMain}

        className={classNames([
          staticClassName('ScreenCapture', theme) && [
            'AmauiScreenCapture-canvas',
            'AmauiScreenCapture-canvas-main'
          ],

          classes.canvas,
          classes.canvas_main
        ])}

        width={image?.width}

        height={image?.height}
      />

      <div
        className={classNames([
          staticClassName('ScreenCapture', theme) && [
            'AmauiScreenCapture-background'
          ],

          classes.background
        ])}
      />

      <div
        ref={refs.imageSelectorMain}

        className={classNames([
          staticClassName('ScreenCapture', theme) && [
            'AmauiScreenCapture-imageSelector-main'
          ],

          classes.imageSelector_main,
          selector && classes.imageSelector_main_in
        ])}

        style={{
          ...selector
        }}
      >
        <div
          ref={refs.move}

          onTouchStart={onTouchStartImageSelector}

          onMouseDown={onMouseDownImageSelector}

          className={classNames([
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-move'
            ],

            classes.move
          ])}
        />

        <div
          ref={refs.dotTopLeft}

          onTouchStart={onTouchStartBorder('top_left')}

          onMouseDown={onMouseDownBorder('top_left')}

          className={classNames([
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-dot',
              'AmauiScreenCapture-dot-top-left'
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
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-dot',
              'AmauiScreenCapture-dot-top-right'
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
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-dot',
              'AmauiScreenCapture-dot-bottom-left'
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
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-dot',
              'AmauiScreenCapture-dot-bottom-right'
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
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-border',
              'AmauiScreenCapture-border-top'
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
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-border',
              'AmauiScreenCapture-border-left'
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
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-border',
              'AmauiScreenCapture-border-right'
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
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-border',
              'AmauiScreenCapture-border-bottom'
            ],

            classes.border,
            classes.border_bottom
          ])}
        />
      </div>

      <div
        ref={refs.imageSelector}

        className={classNames([
          staticClassName('ScreenCapture', theme) && [
            'AmauiScreenCapture-imageSelector'
          ],

          classes.imageSelector
        ])}

        style={{
          ...selector
        }}
      >
        <canvas
          ref={refs.canvasImageSelector}

          className={classNames([
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-canvas',
              'AmauiScreenCapture-canvas-imageSelector'
            ],

            classes.canvas,
            classes.canvas_imageSelector
          ])}

          width={image?.width}

          height={image?.height}

          style={{
            top: `${(selector?.top || 0) * -1}px`,
            left: `${(selector?.left || 0) * -1}px`
          }}
        />
      </div>
    </div>
  );
});

ImageResize.displayName = 'AmauiImageResize';

export default ImageResize;
