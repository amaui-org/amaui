import React from 'react';

import { is, clamp, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Tooltip from '../Tooltip';

import { staticClassName, image as imageMethod, IBaseElement, TPropsAny } from '../utils';

const dot = {
  display: 'inline-block',
  position: 'absolute',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: '#a4a4a4',
  outline: '1px solid white'
};

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    minHeight: '1px',
    lineHeight: '0',
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
    zIndex: '0'
  },

  canvas_main: {
    position: 'relative',
    width: '100%',
    height: 'auto'
  },

  canvas_imageSelector: {
    zIndex: -1
  },

  background: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, 44),
    transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),
    zIndex: '1'
  },

  background_in: {
    opacity: '1'
  },

  imageSelector_main: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '0',
    height: '0',
    outline: '2px dashed white',
    background: 'transparent',
    touchAction: 'none',
    opacity: '0',
    zIndex: '14',
    userSelect: 'none',
    transition: theme.methods.transitions.make('opacity'),
  },

  imageSelector_main_in: {
    opacity: '1'
  },

  imageSelector: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '0',
    height: '0',
    touchAction: 'none',
    overflow: 'hidden',
    userSelect: 'none',
    zIndex: '11'
  },

  move: {
    position: 'absolute',
    inset: '0',
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
    insetInline: '0',
    width: '100%',
    height: '1px'
  },

  grid_line_top_end: {
    top: '66.6666%',
    insetInline: '0',
    width: '100%',
    height: '1px'
  },

  grid_line_left_start: {
    left: '33.3333%',
    insetBlock: '0',
    width: '1px',
    height: '100%'
  },

  grid_line_left_end: {
    left: '66.6666%',
    insetBlock: '0',
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
    height: '2px',
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
    height: '2px',
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
}), { name: 'amaui-ImageCrop' });

export type TImageCrop = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export interface IImageCrop extends IBaseElement {
  image?: string | HTMLCanvasElement;

  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;

  selectorDefault?: TImageCrop;
  selector?: TImageCrop;
  onSelectorChange?: (value: TImageCrop) => any;

  type?: string;
  quality?: number;

  aspectRatio?: number;
  gridLines?: boolean;
  dynamicParent?: boolean;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;

  TooltipProps?: TPropsAny;
}

const ImageCrop = React.forwardRef((props_: IImageCrop, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiImageCrop?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    // url, datauri or canvas
    image: image_,

    minWidth,
    minHeight,
    maxWidth,
    maxHeight,

    selectorDefault,
    selector: selector_,
    onSelectorChange: onSelectorChange_,

    type = `image/jpeg`,
    quality = 1,

    aspectRatio,
    gridLines,
    dynamicParent,

    onFocus: onFocus_,
    onBlur: onBlur_,

    TooltipProps,

    Component = 'div',

    className,

    ...other
  } = props;

  const [image, setImage] = React.useState<HTMLCanvasElement>();
  const [focus, setFocus] = React.useState<any>();
  const [mouseDown, setMouseDown] = React.useState<any>();
  const [selector, setSelector] = React.useState<any>(selectorDefault !== undefined ? selectorDefault : selector_);
  const [selectorRelative, setSelectorRelative] = React.useState<any>();

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
    props: React.useRef<any>(),
    dynamicParent: React.useRef<any>(),
    focus: React.useRef<any>(),
    aspectRatio: React.useRef<any>()
  };

  refs.image.current = image;

  refs.mouseDown.current = mouseDown;

  refs.selector.current = selector;

  refs.props.current = props;

  refs.focus.current = focus;

  refs.dynamicParent.current = dynamicParent;

  refs.aspectRatio.current = aspectRatio;

  const onSelectorChange = (valueNew: any) => {
    // min, max for width, height
    // + resolve it to max width and height for aspect ratio
    if (is('object', valueNew) && !!Object.keys(valueNew).length && refs.root.current) {
      const rootRect = refs.root.current?.getBoundingClientRect();

      const minWidth_ = refs.props.current.minWidth !== undefined ? refs.props.current.minWidth : Number.MIN_SAFE_INTEGER;
      const minHeight_ = refs.props.current.minHeight !== undefined ? refs.props.current.minHeight : Number.MIN_SAFE_INTEGER;

      const maxWidth_ = refs.props.current.maxWidth !== undefined ? refs.props.current.maxWidth : Number.MAX_SAFE_INTEGER;
      const maxHeight_ = refs.props.current.maxHeight !== undefined ? refs.props.current.maxHeight : Number.MAX_SAFE_INTEGER;

      valueNew.width = clamp(valueNew.width, minWidth_, maxWidth_);
      valueNew.height = clamp(valueNew.height, minHeight_, maxHeight_);

      if (refs.aspectRatio.current !== undefined) {
        if (valueNew.width + (valueNew.width / refs.aspectRatio.current) >= valueNew.height + (valueNew.height * refs.aspectRatio.current)) {
          valueNew.height = valueNew.width / refs.aspectRatio.current;
        }
        else {
          valueNew.width = valueNew.height * refs.aspectRatio.current;
        }

        // Max width
        if (valueNew.left + valueNew.width > rootRect.width) {
          valueNew.width = rootRect.width - valueNew.left;

          valueNew.height = valueNew.width / refs.aspectRatio.current;
        }

        // Max height
        if (valueNew.top + valueNew.height > rootRect.height) {
          valueNew.height = rootRect.height - valueNew.top;

          valueNew.width = valueNew.height * refs.aspectRatio.current;
        }

        // Max width, height per maxWidth and maxHeight
        if (valueNew.width < minWidth_ || valueNew.width > maxWidth_) {
          valueNew.width = clamp(valueNew.width, minWidth_, maxWidth_);

          valueNew.height = valueNew.width / refs.aspectRatio.current;
        }

        if (valueNew.height < minHeight_ || valueNew.height > maxHeight_) {
          valueNew.height = clamp(valueNew.height, minHeight_, maxHeight_);

          valueNew.width = valueNew.height / refs.aspectRatio.current;
        }
      }

      // If previous values are within maxWidth and/or maxHeight
      // and left or top are not same as before
      // return
      if (!['move'].includes(refs.mouseDown.current?.version)) {
        if (maxWidth_ !== undefined || maxHeight_ !== undefined) {
          if ((valueNew.top < refs.selector.current?.top || valueNew.left < refs.selector.current?.left) && (refs.selector.current?.width === maxWidth_ || refs.selector.current?.height === maxHeight_)) return;
        }
      }
    }

    const rootRect_: DOMRect = refs.root.current.getBoundingClientRect();

    const selectorRelative_ = {
      top: (valueNew.top / rootRect_?.height) * refs.canvasMain.current?.height,
      left: (valueNew.left / rootRect_?.width) * refs.canvasMain.current?.width,
      width: (valueNew.width / rootRect_?.width) * refs.canvasMain.current?.width,
      height: (valueNew.height / rootRect_?.height) * refs.canvasMain.current?.height
    };

    // Update inner or controlled
    if (!props.hasOwnProperty('selector')) {
      setSelector(valueNew);

      setSelectorRelative(selectorRelative_);
    }

    if (is('function', onSelectorChange_)) onSelectorChange_(selectorRelative_);
  };

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          if (refs.focus.current) setSelector({});

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
            if (left < previousLeft) {
              if (refs.selector.current?.left < previousLeft && left < refs.selector.current?.left && (top <= 0 || refs.selector.current?.top + refs.selector.current?.height >= rootRect.height)) return;
            }

            if (top < previousTop) {
              if (refs.selector.current?.top < previousTop && top < refs.selector.current?.top && (left <= 0 || refs.selector.current?.left + refs.selector.current?.width >= rootRect.width)) return;
            }

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

            // Min left
            if (left < previousLeft) left = previousLeft - width;

            // Min top
            if (top < previousTop) top = previousTop - height;
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

          let top = clamp(selectorRect.top + incY, 0);
          let left = clamp(selectorRect.left + incX, 0);

          if (
            (selectorRect.bottom - top < 0) &&
            (selectorRect.right - left < 0)
          ) refs.mouseDown.current.version = 'bottom_right';
          else if (selectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom_left';
          else if (selectorRect.right - left < 0) refs.mouseDown.current.version = 'top_right';

          let width = clamp(selectorRect.right - left, 0);
          let height = clamp(selectorRect.bottom - top, 0);

          if (refs.aspectRatio.current !== undefined) {
            // Left
            if (left < refs.selector.current.left && refs.selector.current.left < previousLeft && refs.selector.current?.top === 0) return;

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

            // Min left
            if (left < previousLeft) left = previousLeft - width;

            // Min top
            if (top < previousTop) top = previousTop - height;
          }

          onSelectorChange({
            ...refs.selector.current,

            top,
            left,

            width,
            height
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

          let width = clamp(Math.abs(selectorRect.width + incX), 0, rootRect.width - selectorRect.left);
          let height = clamp(selectorRect.bottom - top, 0);

          // Top
          if (refs.aspectRatio.current !== undefined) {
            // Top
            if (top < refs.selector.current.top && refs.selector.current.top < previousTop && refs.selector.current.left + refs.selector.current.width >= rootRect.width) return;

            width = height * refs.aspectRatio.current;

            height = width / refs.aspectRatio.current;

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

              height = width / refs.aspectRatio.current;
            }

            // Max height
            if (refs.selector.current.top + height > rootRect.height) {
              height = rootRect.height - refs.selector.current.top;

              width = height * refs.aspectRatio.current;
            }
          }

          onSelectorChange({
            ...refs.selector.current,

            top,

            width,
            height
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom_right') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          if ((selectorRect.height + incY < 0) && (selectorRect.width + incX < 0)) refs.mouseDown.current.version = 'top_left';
          else if (selectorRect.height + incY < 0) refs.mouseDown.current.version = 'top_right';
          else if (selectorRect.width + incX < 0) refs.mouseDown.current.version = 'bottom_left';

          let width = clamp(Math.abs(selectorRect.width + incX), 0, rootRect.width - selectorRect.left);
          let height = clamp(Math.abs(selectorRect.height + incY), 0, rootRect.height - selectorRect.top);

          // Right
          if (refs.aspectRatio.current !== undefined) {
            height = width / refs.aspectRatio.current;

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

              height = width / refs.aspectRatio.current;
            }

            // Max height
            if (refs.selector.current.top + height > rootRect.height) {
              height = rootRect.height - refs.selector.current.top;

              width = height * refs.aspectRatio.current;
            }

            width = height * refs.aspectRatio.current;

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

              height = width / refs.aspectRatio.current;
            }

            // Max height
            if (refs.selector.current.top + height > rootRect.height) {
              height = rootRect.height - refs.selector.current.top;

              width = height * refs.aspectRatio.current;
            }
          }

          onSelectorChange({
            ...refs.selector.current,

            width,
            height
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom_left') {
          const incY = y - refs.previousMouseEvent.current.clientY;
          const incX = x - refs.previousMouseEvent.current.clientX;

          const left = clamp(selectorRect.left + incX, 0);

          if ((selectorRect.height + incY < 0) && (selectorRect.right - left < 0)) refs.mouseDown.current.version = 'top_right';
          else if (selectorRect.height + incY < 0) refs.mouseDown.current.version = 'top_left';
          else if (selectorRect.right - left < 0) refs.mouseDown.current.version = 'bottom_right';

          let width = clamp(selectorRect.right - left, 0);
          let height = clamp(Math.abs(selectorRect.height + incY), 0, rootRect.height - selectorRect.top);

          // Left
          if (refs.aspectRatio.current !== undefined) {
            // Left
            if (left < refs.selector.current.left && refs.selector.current?.top + refs.selector.current?.height >= rootRect.height) return;

            height = width / refs.aspectRatio.current;

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

              height = width / refs.aspectRatio.current;
            }

            // Max height
            if (refs.selector.current.top + height > rootRect.height) {
              height = rootRect.height - refs.selector.current.top;

              width = height * refs.aspectRatio.current;
            }

            width = height * refs.aspectRatio.current;

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

              height = width / refs.aspectRatio.current;
            }

            // Max height
            if (refs.selector.current.top + height > rootRect.height) {
              height = rootRect.height - refs.selector.current.top;

              width = height * refs.aspectRatio.current;
            }
          }

          onSelectorChange({
            ...refs.selector.current,

            left,

            width,
            height
          });
        }
        else if (refs.mouseDown.current?.version === 'top') {
          const inc = y - refs.previousMouseEvent.current.clientY;

          const top = clamp(refs.selector.current.top + inc, 0);

          if (refs.selector.current.top <= 0 && top <= 0) return;

          if (selectorRect.bottom - top < 0) refs.mouseDown.current.version = 'bottom';

          let width: number = refs.selector.current.width;
          let height = clamp(Math.abs(refs.selector.current.height - inc), 0, previousTop - top);

          if (refs.aspectRatio.current !== undefined) {
            // Top
            if (top < refs.selector.current.top && refs.selector.current.top < previousTop && refs.selector.current.left + refs.selector.current.width >= rootRect.width) return;

            width = height * refs.aspectRatio.current;

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

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

            width,
            height
          });
        }
        else if (refs.mouseDown.current?.version === 'bottom') {
          const inc = y - refs.previousMouseEvent.current.clientY;

          if (selectorRect.height + inc < 0) refs.mouseDown.current.version = 'top';

          let width: number = refs.selector.current.width;
          let height = clamp(Math.abs(selectorRect.height + inc), 0, rootRect.height - refs.selector.current.top);

          if (refs.aspectRatio.current !== undefined) {
            width = height * refs.aspectRatio.current;

            // Max height
            if (refs.selector.current.top + height > rootRect.height) {
              height = rootRect.height - refs.selector.current.top;

              width = height * refs.aspectRatio.current;
            }

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

              height = width / refs.aspectRatio.current;
            }
          }

          onSelectorChange({
            ...refs.selector.current,

            width,
            height
          });
        }
        else if (refs.mouseDown.current?.version === 'left') {
          const inc = x - refs.previousMouseEvent.current.clientX;

          const left = clamp(selectorRect.left + inc, 0);

          if (selectorRect.right - left < 0) refs.mouseDown.current.version = 'right';

          let width = clamp(selectorRect.right - left, 0);
          let height: number = refs.selector.current.height;

          if (refs.aspectRatio.current !== undefined) {
            if (left < refs.selector.current.left && refs.selector.current?.top + refs.selector.current?.height >= rootRect.height) return;

            height = width / refs.aspectRatio.current;

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

              height = width / refs.aspectRatio.current;
            }

            // Max height
            if (refs.selector.current.top + height > rootRect.height) {
              height = rootRect.height - refs.selector.current.top;

              width = height * refs.aspectRatio.current;
            }
          }

          onSelectorChange({
            ...refs.selector.current,

            left,

            width,
            height
          });
        }
        else if (refs.mouseDown.current?.version === 'right') {
          const inc = x - refs.previousMouseEvent.current.clientX;

          if (selectorRect.width + inc < 0) refs.mouseDown.current.version = 'left';

          let width = clamp(Math.abs(selectorRect.width + inc), 0, rootRect.width - selectorRect.left);
          let height: number = refs.selector.current.height;

          if (refs.aspectRatio.current !== undefined) {
            height = width / refs.aspectRatio.current;

            // Max width
            if (refs.selector.current.left + width > rootRect.width) {
              width = rootRect.width - refs.selector.current.left;

              height = width / refs.aspectRatio.current;
            }

            // Max height
            if (refs.selector.current.top + height > rootRect.height) {
              height = rootRect.height - refs.selector.current.top;

              width = height * refs.aspectRatio.current;
            }
          }

          onSelectorChange({
            ...refs.selector.current,

            width,
            height
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

    const rootDocument = isEnvironment('browser') ? refs.root.current?.ownerDocument || window.document : undefined;

    rootDocument.addEventListener('keydown', method);

    rootDocument.addEventListener('mousemove', onMouseMove);

    rootDocument.addEventListener('mouseup', onMouseUp);

    rootDocument.addEventListener('touchmove', onTouchMove, { passive: true });

    rootDocument.addEventListener('touchend', onMouseUp);

    return () => {
      // Clean up
      rootDocument.removeEventListener('keydown', method);

      rootDocument.removeEventListener('mousemove', onMouseMove);

      rootDocument.removeEventListener('mouseup', onMouseUp);

      rootDocument.removeEventListener('touchmove', onTouchMove);

      rootDocument.removeEventListener('touchend', onMouseUp);

      if (refs.image.current) {
        setImage('' as any);

        if (rootDocument.body.style.overflow === 'hidden') rootDocument.body.style.removeProperty('overflow');
      }
    };
  }, []);

  React.useEffect(() => {
    if (image_ !== image) {
      if (image_ instanceof HTMLCanvasElement) setImage(image_);
      else if (is('string', image_)) !refs.dynamicParent.current ? makeImage(image_) : setTimeout(() => makeImage(image_), 140);
    }
  }, [image_]);

  const updateSelector = (selector__: any = refs.selector.current, image__: any = refs.image.current) => {
    if (selector__ !== undefined && image__ !== undefined) {
      const rootRect = refs.root.current.getBoundingClientRect();

      const selectorValue: any = {
        top: clamp(selector__.top, 0, image__.height),
        left: clamp(selector__.left, 0, image__.height)
      };

      selectorValue.width = clamp((selector__.width || 0), 0, rootRect.width - selectorValue.left);

      selectorValue.height = clamp((selector__.height || 0), 0, rootRect.height - selectorValue.top);

      // Aspect ratio
      if (refs.aspectRatio.current !== undefined) {
        // Max surface
        if (selectorValue.width + (selectorValue.width / refs.aspectRatio.current) >= selectorValue.height + (selectorValue.height * refs.aspectRatio.current)) {
          selectorValue.height = selectorValue.width / refs.aspectRatio.current;
        }
        else {
          selectorValue.width = selectorValue.height * refs.aspectRatio.current;
        }

        // Max width
        if (selectorValue.left + selectorValue.width > rootRect.width) {
          selectorValue.width = rootRect.width - selectorValue.left;

          selectorValue.height = selectorValue.width / refs.aspectRatio.current;
        }

        // Max height
        if (selectorValue.top + selectorValue.height > rootRect.height) {
          selectorValue.height = rootRect.height - selectorValue.top;

          selectorValue.width = selectorValue.height * refs.aspectRatio.current;
        }
      }

      // Update selector
      setSelector(selectorValue);

      // Update selector relative
      setSelectorRelative({
        top: (selectorValue.top / rootRect?.height) * refs.canvasMain.current?.height,
        left: (selectorValue.left / rootRect?.width) * refs.canvasMain.current?.width,
        width: (selectorValue.width / rootRect?.width) * refs.canvasMain.current?.width,
        height: (selectorValue.height / rootRect?.height) * refs.canvasMain.current?.height
      });
    }
  };

  React.useEffect(() => {
    updateSelector();
  }, [aspectRatio]);

  React.useEffect(() => {
    if (selector_ !== selector) updateSelector(selector_);
  }, [selector_]);

  React.useEffect(() => {
    if (image) {
      refs.canvasMain.current.width = image.width;

      refs.canvasMain.current.height = image.height;

      refs.canvasMain.current.getContext('2d').drawImage(image, 0, 0), image.width, image.height;

      refs.canvasImageSelector.current.width = image.width;

      refs.canvasImageSelector.current.height = image.height;

      refs.canvasImageSelector.current.getContext('2d').drawImage(image, 0, 0), image.width, image.height;

      // Update selector
      updateSelector();
    }
  }, [image]);

  const makeImage = async (value: any = image) => {
    const img = await imageMethod(value);

    const rootDocument = isEnvironment('browser') ? refs.root.current?.ownerDocument || window.document : undefined;

    const canvas = rootDocument.createElement('canvas');

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

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

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

  const onTouchStartSelector = React.useCallback((event: React.TouchEvent<any>) => {
    const { clientY, clientX } = event.touches[0];

    const rootRect = refs.root.current.getBoundingClientRect();

    setMouseDown({
      version: 'move',
      top: clientY - rootRect.top,
      left: clientX - rootRect.left
    });
  }, []);

  const onMouseDownSelector = React.useCallback((event: React.MouseEvent<any>) => {
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
      version,
      top: refs.selector.current?.top + refs.selector.current?.height,
      left: refs.selector.current?.left + refs.selector.current?.width
    });
  };

  const onMouseDownBorder = (version: string) => (event: React.MouseEvent<any>) => {
    setMouseDown({
      version,
      top: refs.selector.current?.top + refs.selector.current?.height,
      left: refs.selector.current?.left + refs.selector.current?.width
    });
  };

  const rect = refs.root.current?.getBoundingClientRect();

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tabIndex={0}

      onFocus={onFocus}

      onBlur={onBlur}

      onTouchStart={onTouchStart}

      onMouseDown={onMouseDown}

      className={classNames([
        staticClassName('ImageCrop', theme) && [
          'amaui-ImageCrop-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <canvas
        ref={refs.canvasMain}

        className={classNames([
          staticClassName('ImageCrop', theme) && [
            'amaui-ImageCrop-canvas',
            'amaui-ImageCrop-canvas-main'
          ],

          classes.canvas,
          classes.canvas_main
        ])}
      />

      <div
        className={classNames([
          staticClassName('ImageCrop', theme) && [
            'amaui-ImageCrop-background'
          ],

          classes.background,
          image && classes.background_in
        ])}
      />

      <Tooltip
        open={mouseDown && (selector?.width + selector?.height > 0)}

        label={`${Math.round(selectorRelative?.width || 0)} x ${Math.round(selectorRelative?.height || 0)}`}

        position='bottom'

        {...TooltipProps}
      >
        <div
          ref={refs.imageSelectorMain}

          className={classNames([
            staticClassName('ImageCrop', theme) && [
              'amaui-ImageCrop-image-selector-main'
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

            onTouchStart={onTouchStartSelector}

            onMouseDown={onMouseDownSelector}

            className={classNames([
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-move'
              ],

              classes.move
            ])}
          />

          {gridLines && <>
            <div
              className={classNames([
                staticClassName('ImageCrop', theme) && [
                  'amaui-ImageCrop-grid-line',
                  'amaui-ImageCrop-grid-line-top-start'
                ],

                classes.grid_line,
                classes.grid_line_top_start
              ])}
            />

            <div
              className={classNames([
                staticClassName('ImageCrop', theme) && [
                  'amaui-ImageCrop-grid-line',
                  'amaui-ImageCrop-grid-line-top-end'
                ],

                classes.grid_line,
                classes.grid_line_top_end
              ])}
            />

            <div
              className={classNames([
                staticClassName('ImageCrop', theme) && [
                  'amaui-ImageCrop-grid-line',
                  'amaui-ImageCrop-grid-line-left-start'
                ],

                classes.grid_line,
                classes.grid_line_left_start
              ])}
            />

            <div
              className={classNames([
                staticClassName('ImageCrop', theme) && [
                  'amaui-ImageCrop-grid-line',
                  'amaui-ImageCrop-grid-line-left-end'
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
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-dot',
                'amaui-ImageCrop-dot-top-left'
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
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-dot',
                'amaui-ImageCrop-dot-top-right'
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
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-dot',
                'amaui-ImageCrop-dot-bottom-left'
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
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-dot',
                'amaui-ImageCrop-dot-bottom-right'
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
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-border',
                'amaui-ImageCrop-border-top'
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
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-border',
                'amaui-ImageCrop-border-left'
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
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-border',
                'amaui-ImageCrop-border-right'
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
              staticClassName('ImageCrop', theme) && [
                'amaui-ImageCrop-border',
                'amaui-ImageCrop-border-bottom'
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
          staticClassName('ImageCrop', theme) && [
            'amaui-ImageCrop-image-selector'
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
            staticClassName('ImageCrop', theme) && [
              'amaui-ImageCrop-canvas',
              'amaui-ImageCrop-canvas-image-selector'
            ],

            classes.canvas,
            classes.canvas_imageSelector
          ])}

          width={image?.width || 0}

          height={image?.height || 0}

          style={{
            top: `${(selector?.top || 0) * -1}px`,
            left: `${(selector?.left || 0) * -1}px`,
            width: rect?.width,
            height: rect?.height
          }}
        />
      </div>
    </Component>
  );
});

ImageCrop.displayName = 'amaui-ImageCrop';

export default ImageCrop;
