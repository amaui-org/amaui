import React from 'react';

import { is, clamp } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Tooltip from '../Tooltip';

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
    minHeight: 1,
    lineHeight: 0,
    userSelect: 'none',
    overflow: 'hidden'
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
    position: 'relative'
  },

  canvas_imageSelector: {
    zIndex: -1
  },

  background: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, 44),
    transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),
    zIndex: 1
  },

  background_in: {
    opacity: 1
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
    userSelect: 'none',
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
    userSelect: 'none',
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

  grid_line: {
    position: 'absolute',
    background: 'white',
    mixBlendMode: 'difference'
  },

  grid_line_top_start: {
    top: '33.3333%',
    insetInline: 0,
    width: '100%',
    height: '1px'
  },

  grid_line_top_end: {
    top: '66.6666%',
    insetInline: 0,
    width: '100%',
    height: '1px'
  },

  grid_line_left_start: {
    left: '33.3333%',
    insetBlock: 0,
    width: '1px',
    height: '100%'
  },

  grid_line_left_end: {
    left: '66.6666%',
    insetBlock: 0,
    width: '1px',
    height: '100%'
  },

  dot: {
    ...dot
  },

  dot_top_left: {
    top: '-1px',
    left: '-1px',
    transform: 'translate(-50%, -50%)',
    cursor: 'nwse-resize'
  },

  dot_top_right: {
    top: '-1px',
    right: '-1px',
    transform: 'translate(50%, -50%)',
    cursor: 'nesw-resize'
  },

  dot_bottom_left: {
    bottom: '-1px',
    left: '-1px',
    transform: 'translate(-50%, 50%)',
    cursor: 'nesw-resize'
  },

  dot_bottom_right: {
    bottom: '-1px',
    right: '-1px',
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

// update all other width value y managers

// options to choose common aspect ratios
// with aspect ratio and each with optional width and height

// and 2 numeric text fields small to choose custom aspect ratio

// Example with default selector width, height, top, left
// min selector width, min selector height
// max selector width and max selector height
// min and max values are clamp value, 0, root width, root height y value y

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

    aspectRatio,
    gridLines,
    dynamicParent,

    TooltipProps,

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
    dotBottomRight: React.useRef<HTMLDivElement>(),
    props: React.useRef<HTMLDivElement>(),
    aspectRatio: React.useRef<any>(),
    dynamicParent: React.useRef<any>()
  };

  refs.image.current = image;

  refs.mouseDown.current = mouseDown;

  refs.selector.current = selector;

  refs.props.current = props;

  refs.dynamicParent.current = dynamicParent;

  refs.aspectRatio.current = aspectRatio;

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

        const rootRect: DOMRect = refs.root.current.getBoundingClientRect();

        const selectorRect_: DOMRect = refs.imageSelectorMain.current.getBoundingClientRect();

        const selectorRect: any = {};

        // Normalize relative to root
        selectorRect.width = selectorRect_.width;
        selectorRect.height = selectorRect_.height;

        selectorRect.top = selectorRect_.top - rootRect.top;
        selectorRect.left = selectorRect_.left - rootRect.left;
        selectorRect.right = selectorRect.left + selectorRect_.width;
        selectorRect.bottom = selectorRect.top + selectorRect_.height;

        if (refs.mouseDown.current?.version === 'make') {
          const top_ = clamp(y - rootRect.top, 0, rootRect.height);
          const left_ = clamp(x - rootRect.left, 0, rootRect.width);

          let top = clamp(top_, 0, previousTop);
          let left = clamp(left_, 0, previousLeft);

          let width = Math.abs(left_ - previousLeft);
          let height = Math.abs(top_ - previousTop);

          if (refs.aspectRatio.current !== undefined) {
            // Max surface
            if (width + (width / refs.aspectRatio.current) >= height + (height * refs.aspectRatio.current)) {
              height = width / refs.aspectRatio.current;
            }
            else {
              width = height * refs.aspectRatio.current;
            }

            // Moved left
            if (left < previousLeft) {
              left = clamp(previousLeft - width, 0, previousLeft);

              // Update width, height upto the previousLeft
              width = clamp(width, 0, previousLeft);
              height = width / refs.aspectRatio.current;

              if (left >= 0 && (top + height >= rootRect.height || top <= 0)) return;
            }

            // Moved top
            if (top < previousTop) {
              top = clamp(previousTop - height, 0, previousTop);

              // Update width, height upto the previousTop
              height = clamp(height, 0, previousTop);
              width = height * refs.aspectRatio.current;
            }

            // Max width
            if (left + width > rootRect.width) {
              width = rootRect.width - left;

              height = width / refs.aspectRatio.current;
            }

            // Max height
            if (top + height > rootRect.height) {
              height = rootRect.height - top;

              width = height * refs.aspectRatio.current;
            }
          }

          onSelectorChange({
            ...refs.selector.current,

            top,
            left,

            width,
            height
          });
        }
        else if (refs.mouseDown.current?.version === 'move') {
          const top = y - refs.previousMouseEvent.current.clientY;
          const left = x - refs.previousMouseEvent.current.clientX;

          onSelectorChange({
            ...refs.selector.current,

            top: clamp(refs.selector.current.top + top, 0, rootRect.height - selectorRect.height),
            left: clamp(refs.selector.current.left + left, 0, rootRect.width - selectorRect.width)
          });
        }
        else if (refs.mouseDown.current?.version === 'top_left') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          const top = clamp(selectorRect.top + incY, 0);
          const left = clamp(selectorRect.left + incX, 0);

          if (
            (selectorRect.bottom - top < 0) &&
            (selectorRect.right - left < 0)
          ) refs.mouseDown.current.version = 'bottom_right';
          else if (selectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom_left';
          else if (selectorRect.right - left < 0) refs.mouseDown.current.version = 'top_right';

          onSelectorChange({
            ...refs.selector.current,

            top,
            left,

            width: clamp(selectorRect.right - left, 0),
            height: clamp(selectorRect.bottom - top, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'top_right') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          const top = clamp(selectorRect.top + incY, 0);

          if (
            (selectorRect.bottom - top < 0) &&
            (selectorRect.width + incX < 0)
          ) refs.mouseDown.current.version = 'bottom_left';
          else if (selectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom_right';
          else if (selectorRect.width + incX < 0) refs.mouseDown.current.version = 'top_left';

          onSelectorChange({
            ...refs.selector.current,

            top,

            width: clamp(Math.abs(selectorRect.width + incX), 0, rootRect.width - selectorRect.left),
            height: clamp(selectorRect.bottom - top, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom_right') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          if ((selectorRect.height + incY < 0) && (selectorRect.width + incX < 0)) refs.mouseDown.current.version = 'top_left';
          else if (selectorRect.height + incY < 0) refs.mouseDown.current.version = 'top_right';
          else if (selectorRect.width + incX < 0) refs.mouseDown.current.version = 'bottom_left';

          onSelectorChange({
            ...refs.selector.current,

            width: clamp(Math.abs(selectorRect.width + incX), 0, rootRect.width - selectorRect.left),
            height: clamp(Math.abs(selectorRect.height + incY), 0, rootRect.height - selectorRect.top)
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom_left') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          const left = clamp(selectorRect.left + incX, 0);

          if ((selectorRect.height + incY < 0) && (selectorRect.right - left < 0)) refs.mouseDown.current.version = 'top_right';
          else if (selectorRect.height + incY < 0) refs.mouseDown.current.version = 'top_left';
          else if (selectorRect.right - left < 0) refs.mouseDown.current.version = 'bottom_right';

          onSelectorChange({
            ...refs.selector.current,

            left,

            width: clamp(selectorRect.right - left, 0),
            height: clamp(Math.abs(selectorRect.height + incY), 0, rootRect.height - selectorRect.top)
          });
        }
        else if (refs.mouseDown.current?.version === 'top') {
          const inc = y - refs.previousMouseEvent.current.clientY;

          const top = clamp(refs.selector.current.top + inc, 0);

          if (selectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom';

          onSelectorChange({
            ...refs.selector.current,

            top,

            height: clamp(selectorRect.bottom - top, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom') {
          const inc = y - refs.previousMouseEvent.current.clientY;

          if (selectorRect.height + inc < 0) refs.mouseDown.current.version = 'top';

          onSelectorChange({
            ...refs.selector.current,

            height: clamp(Math.abs(selectorRect.height + inc), 0, rootRect.height - selectorRect.top)
          });
        }
        else if (refs.mouseDown.current?.version === 'left') {
          const inc = x - refs.previousMouseEvent.current.clientX;

          const left = clamp(selectorRect.left + inc, 0);

          if (selectorRect.right - left < 0) refs.mouseDown.current.version = 'right';

          onSelectorChange({
            ...refs.selector.current,

            left,

            width: clamp(selectorRect.right - left, 0)
          });
        }
        else if (refs.mouseDown.current?.version === 'right') {
          const inc = x - refs.previousMouseEvent.current.clientX;

          if (selectorRect.width + inc < 0) refs.mouseDown.current.version = 'left';

          onSelectorChange({
            ...refs.selector.current,

            width: clamp(Math.abs(selectorRect.width + inc), 0, rootRect.width - selectorRect.left)
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
      else if (is('string', image_)) !refs.dynamicParent.current ? makeImage() : setTimeout(() => makeImage(image_), 140);
    }
  }, [image_]);

  React.useEffect(() => {
    if (selector_ !== selector) setSelector(selector_);
  }, [selector_]);

  React.useEffect(() => {
    if (image) {
      refs.canvasMain.current.getContext('2d').drawImage(image, 0, 0);

      refs.canvasImageSelector.current.getContext('2d').drawImage(image, 0, 0);
    }
  }, [image]);

  const makeImage = async (value: any = image) => {
    const img = await imageMethod(value);

    const canvas = window.document.createElement('canvas');

    const rootRect = refs.root.current.getBoundingClientRect();

    const aspectRatioImg = img.width / img.height;

    // width being parent width
    img.width = rootRect.width;

    // height keep aspect ratio of the img for the height
    img.height = img.width / aspectRatioImg;

    canvas.width = img.width;

    canvas.height = img.height;

    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

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

      const rootRect = refs.root.current.getBoundingClientRect();

      setMouseDown({
        version: 'make',
        top: clientY - rootRect.top,
        left: clientX - rootRect.left
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

      const rootRect = refs.root.current.getBoundingClientRect();

      setMouseDown({
        version: 'make',
        top: clientY - rootRect.top,
        left: clientX - rootRect.left
      });
    }
  }, []);

  const onTouchStartImageSelector = React.useCallback((event: React.TouchEvent<any>) => {
    const { clientY, clientX } = event.touches[0];

    const rootRect = refs.root.current.getBoundingClientRect();

    setMouseDown({
      version: 'move',
      top: clientY - rootRect.top,
      left: clientX - rootRect.left
    });
  }, []);

  const onMouseDownImageSelector = React.useCallback((event: React.MouseEvent<any>) => {
    const { clientY, clientX } = event;

    const rootRect = refs.root.current.getBoundingClientRect();

    setMouseDown({
      version: 'move',
      top: clientY - rootRect.top,
      left: clientX - rootRect.left
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

        width={image?.width || 0}

        height={image?.height || 0}
      />

      <div
        className={classNames([
          staticClassName('ScreenCapture', theme) && [
            'AmauiScreenCapture-background'
          ],

          classes.background,
          image && classes.background_in
        ])}
      />

      <Tooltip
        open={mouseDown}

        label={`${Math.round(selector?.width || 0)} x ${Math.round(selector?.height || 0)}`}

        position='bottom'

        portal={false}

        {...TooltipProps}
      >
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

          {gridLines && <>
            <div
              className={classNames([
                staticClassName('ScreenCapture', theme) && [
                  'AmauiScreenCapture-grid-line',
                  'AmauiScreenCapture-grid-line-top-start'
                ],

                classes.grid_line,
                classes.grid_line_top_start
              ])}
            />

            <div
              className={classNames([
                staticClassName('ScreenCapture', theme) && [
                  'AmauiScreenCapture-grid-line',
                  'AmauiScreenCapture-grid-line-top-end'
                ],

                classes.grid_line,
                classes.grid_line_top_end
              ])}
            />

            <div
              className={classNames([
                staticClassName('ScreenCapture', theme) && [
                  'AmauiScreenCapture-grid-line',
                  'AmauiScreenCapture-grid-line-left-start'
                ],

                classes.grid_line,
                classes.grid_line_left_start
              ])}
            />

            <div
              className={classNames([
                staticClassName('ScreenCapture', theme) && [
                  'AmauiScreenCapture-grid-line',
                  'AmauiScreenCapture-grid-line-left-end'
                ],

                classes.grid_line,
                classes.grid_line_left_end
              ])}
            />
          </>}

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
      </Tooltip>

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

          width={image?.width || 0}

          height={image?.height || 0}

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
