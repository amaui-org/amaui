import React from 'react';

import { clamp, debounce, is, isEnvironment } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import SurfaceElement from '../Surface';
import IconButtonElement from '../IconButton';
import IconElement from '../Icon';
import TypeElement from '../Type';
import TooltipElement from '../Tooltip';
import MenuElement from '../Menu';
import ListItemElement from '../ListItem';
import LabelElement from '../Label';
import SwitchElement from '../Switch';

import { staticClassName } from '../utils';
import { IBaseElement, ISize } from '../types';

const IconMaterialCenterFocusWeak = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='CenterFocusWeak'

      short_name='CenterFocusWeak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Zm0-4Zm0 2q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14ZM4 9q-.425 0-.712-.288Q3 8.425 3 8V5q0-.825.587-1.413Q4.175 3 5 3h3q.425 0 .713.287Q9 3.575 9 4t-.287.712Q8.425 5 8 5H5v3q0 .425-.287.712Q4.425 9 4 9Zm1 12q-.825 0-1.413-.587Q3 19.825 3 19v-3q0-.425.288-.713Q3.575 15 4 15t.713.287Q5 15.575 5 16v3h3q.425 0 .713.288Q9 19.575 9 20t-.287.712Q8.425 21 8 21Zm11 0q-.425 0-.712-.288Q15 20.425 15 20t.288-.712Q15.575 19 16 19h3v-3q0-.425.288-.713Q19.575 15 20 15t.712.287Q21 15.575 21 16v3q0 .825-.587 1.413Q19.825 21 19 21Zm4-12q-.425 0-.712-.288Q19 8.425 19 8V5h-3q-.425 0-.712-.288Q15 4.425 15 4t.288-.713Q15.575 3 16 3h3q.825 0 1.413.587Q21 4.175 21 5v3q0 .425-.288.712Q20.425 9 20 9Z" />
    </IconElement>
  );
});

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },

  container: {
    position: 'absolute',
    transformOrigin: '0 0'
  },

  miniMap: {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    borderRadius: 8,
    background: theme.palette.background.default.primary,
    border: theme.palette.light ? '' : `1px solid ${theme.palette.text.divider}`,
    boxShadow: theme.shadows.values.default[2],
    cursor: 'pointer'
  },

  miniMapMain: {
    position: 'absolute',
    inset: 0
  },

  miniMapViewport: {
    position: 'absolute',
    borderRadius: 14,
    border: `2px solid ${theme.palette.color.info.main}`
  },

  actions: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '4px 20px',
    borderRadius: 140,
    background: theme.palette.background.default[theme.palette.light ? 'primary' : 'quaternary'],
    boxShadow: theme.shadows.values.default[1],
    overflow: 'auto hidden',
    zIndex: '1'
  },

  // luv you: https://stackoverflow.com/a/32861765
  guidelines_lines: {
    backgroundSize: '40px 40px',
    backgroundImage: `linear-gradient(to right, ${theme.palette.text.default.quaternary} 0.5px, transparent 0.5px), linear-gradient(to bottom, ${theme.palette.text.default.quaternary} 0.5px, transparent 0.5px)`
  },

  guidelines_dots: {
    backgroundSize: '40px 40px',
    backgroundImage: `radial-gradient(circle, ${theme.palette.text.default.tertiary} 0.5px, transparent 0.5px)`,
    backgroundPosition: `20px 20px`
  },

  move: {
    cursor: 'grabbing',
    userSelect: 'none'
  },

  zoom: {
    width: 40,
    height: 34,
    cursor: 'pointer',
    userSelect: 'none'
  },

  menu: {
    '& .amaui-List-root': {
      maxHeight: 240,
      overflow: 'hidden auto'
    }
  },

  disabled: {
    pointerEvents: 'none',
    opacity: 0.54,
    cursor: 'default'
  }
}), { name: 'amaui-HTMLCanvas' });

export interface IHTMLCanvasOnChangeValue {
  zoom: number;
  top: number;
  left: number;
  boundaries: { x: number; y: number; };
  root: { width: number; height: number; };
}

export interface IHTMLCanvas extends IBaseElement {
  size?: ISize;

  minZoom?: number;

  maxZoom?: number;

  showGuidelinesDefault?: boolean;

  guidelines?: 'lines' | 'dots' | boolean;

  width?: number;

  height?: number;

  pre?: any;

  post?: any;

  miniMap?: boolean;

  onChange?: (value: IHTMLCanvasOnChangeValue) => any;

  onWheel?: (event: WheelEvent) => any;

  onMouseDown?: (event: MouseEvent) => any;

  onTouchStart?: (event: TouchEvent) => any;

  noActions?: boolean;

  noGuidelines?: boolean;

  noFitCenter?: boolean;

  noZoomMenu?: boolean;

  methods?: any;

  disabled?: boolean;

  IconCenter?: any;

  ContainerProps?: any;

  IconButtonProps?: any;

  Component?: any;
}

const HTMLCanvas: React.FC<IHTMLCanvas> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiHTMLCanvas?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Label = React.useMemo(() => theme?.elements?.Label || LabelElement, [theme]);

  const Switch = React.useMemo(() => theme?.elements?.Switch || SwitchElement, [theme]);

  const {
    size = 'regular',

    width = 240_000,

    height = 240_000,

    minZoom = 0.04,

    maxZoom = 4,

    showGuidelinesDefault,

    guidelines = 'dots',

    pre,

    post,

    miniMap: useMiniMap = true,

    methods,

    onChange: onChange_,

    onWheel: onWheel_,

    onMouseDown: onMouseDown_,

    onTouchStart: onTouchStart_,

    noActions,

    noGuideLines,

    noFitCenter,

    noZoomMenu,

    disabled,

    IconCenter = IconMaterialCenterFocusWeak,

    ContainerProps,

    IconButtonProps,

    Component = Line,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [positions, setPositions] = React.useState<any>({ zoom: 1, left: 0, top: 0 });
  const [keyDown, setKeyDown] = React.useState<any>();
  const [showGuidelines, setShowGuidelines] = React.useState(!!showGuidelinesDefault);

  const refs = {
    root: React.useRef<HTMLElement>(),
    container: React.useRef<HTMLElement>(),
    miniMap: React.useRef<HTMLElement>(),
    minZoom: React.useRef(minZoom),
    maxZoom: React.useRef(maxZoom),
    positions: React.useRef(positions),
    previousMouseEvent: React.useRef<MouseEvent | TouchEvent>(),
    mouseDown: React.useRef(false),
    mouseDownMiniMap: React.useRef(false),
    keyDown: React.useRef<any>(),
    boundaries: React.useRef({ x: [width * positions?.zoom * -1, 0], y: [height * positions?.zoom * -1, 0] }),
    width: React.useRef(width),
    height: React.useRef(height),
    disabled: React.useRef(disabled)
  };

  refs.positions.current = positions;

  refs.minZoom.current = minZoom;

  refs.maxZoom.current = maxZoom;

  refs.keyDown.current = keyDown;

  refs.width.current = width;

  refs.height.current = height;

  refs.disabled.current = disabled;

  React.useEffect(() => {
    if (is('object', methods)) {
      methods.updatePositions = updatePositions;
    }
  }, [methods]);

  const onChange = React.useCallback((valueNew?: any) => {
    const root = refs.root.current as HTMLElement;

    const values = {
      ...refs.positions.current,

      ...valueNew,

      root: {
        width: root.clientWidth,
        height: root.clientHeight
      },

      boundaries: refs.boundaries.current
    };

    if (is('function', onChange_)) onChange_!(values);
  }, [onChange_]);

  const updateBoundaries = React.useCallback((valueZoom = refs.positions.current?.zoom) => {
    const root = refs.root.current as HTMLElement;

    const rootRect = root.getBoundingClientRect();

    refs.boundaries.current = {
      x: [(refs.width.current * valueZoom * -1) + rootRect.width, 0],
      y: [(refs.height.current * valueZoom * -1) + rootRect.height, 0]
    };
  }, []);

  React.useEffect(() => {
    // update boundaries
    updateBoundaries();
  }, [width, height, positions]);

  const updatePositions = React.useCallback((valueNew: any) => {
    valueNew.zoom = clamp(valueNew.zoom, refs.minZoom.current, refs.maxZoom.current);
    valueNew.top = clamp(valueNew.top, ...refs.boundaries.current.y);
    valueNew.left = clamp(valueNew.left, ...refs.boundaries.current.x);

    refs.container.current!.style.transform = `matrix(${valueNew.zoom}, 0, 0, ${valueNew.zoom}, ${valueNew.left}, ${valueNew.top})`;

    setPositions(valueNew);

    onChange(valueNew);
  }, []);

  const update = React.useCallback((values: any, event?: WheelEvent) => {
    const root = refs.root.current as HTMLElement;

    const container = refs.container.current as HTMLElement;

    const rootRect = root.getBoundingClientRect();

    const transform = window.getComputedStyle(container).transform;

    const matrix = new DOMMatrixReadOnly(transform);

    let left = matrix.e || 0;
    let top = matrix.f || 0;
    let zoom_ = matrix.a || 1;

    const {
      x = event ? event.clientX - rootRect.x : rootRect.width / 2,
      y = event ? event.clientY - rootRect.y : rootRect.height / 2
    } = values;

    if (values.zoom !== undefined) {
      zoom_ = clamp(values.zoom, refs.minZoom.current, refs.maxZoom.current);

      // update boundaries
      updateBoundaries(zoom_);

      // left, top
      const zoomDelta = zoom_ / matrix.a;

      left = values.left !== undefined ? values.left : x - ((left >= 0 ? left - x : x - left) * zoomDelta);

      top = values.top !== undefined ? values.top : y - ((top >= 0 ? top - y : y - top) * zoomDelta);
    }
    else {
      if (values.top !== undefined) {
        top = values.top;
      }

      if (values.left !== undefined) {
        left = values.left;
      }
    }

    // update
    updatePositions({ zoom: zoom_, left, top });
  }, []);

  const zoom = React.useCallback((value = 1, event: MouseEvent) => {
    update({ zoom: value });
  }, []);

  const onCenter = React.useCallback(() => {
    const root = refs.root.current as HTMLElement;

    const container = refs.container.current as HTMLElement;

    const rootRect = root.getBoundingClientRect();

    const items: any = Array.from(container.children);

    // container
    // reset
    container.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;

    const values = {
      top: Number.MAX_SAFE_INTEGER,
      left: Number.MAX_SAFE_INTEGER,
      width: 0,
      height: 0
    };

    // left, top
    items.forEach((item: HTMLElement) => {
      const itemRect = item.getBoundingClientRect();

      (item as any).rect = itemRect;

      values.top = Math.min(values.top, itemRect.top - rootRect.top);

      values.left = Math.min(values.left, itemRect.left - rootRect.left);
    });

    // width, height
    items.forEach((item: HTMLElement) => {
      const itemRect = (item as any).rect;

      const top_ = itemRect.top - rootRect.top;

      const left_ = itemRect.left - rootRect.left;

      const right = left_ + itemRect.width;

      const bottom = top_ + itemRect.height;

      values.width = Math.max(values.width, Math.abs(right) - Math.abs(values.left));

      values.height = Math.max(values.height, Math.abs(bottom) - Math.abs(values.top));
    });

    if (!items.length) {
      values.top = container.clientHeight / 2;

      values.left = container.clientWidth / 2;

      values.width = values.height = 0;
    }

    const top = (values.top + (values.height / 2) - (rootRect.height / 2)) * -1;

    const left = (values.left + (values.width / 2) - (rootRect.width / 2)) * -1;

    const zoomPadding = 0.94;

    let zoom_ = Math.min(
      clamp(rootRect.width / values.width, 0, 4) * zoomPadding,
      clamp(rootRect.height / values.height, 0, 4) * zoomPadding
    );

    if (!items.length || items.length === 1) zoom_ = 1;

    // update
    // top, left
    update({ zoom: 1, top, left });

    // update
    // zoom
    if (zoom_ !== 1) update({ zoom: zoom_ });
  }, []);

  const init = React.useCallback(() => {
    // initially
    // center
    onCenter();
  }, []);

  const onWheel = React.useCallback((event: WheelEvent) => {
    if (event.target === refs.root.current || refs.root.current?.contains(event.target as any)) {
      const positions_ = refs.positions.current;

      const root = refs.root.current as HTMLElement;

      const rootRect = root.getBoundingClientRect();

      const x = event.clientX - rootRect.x;

      const y = event.clientY - rootRect.y;

      const meta = event.ctrlKey || event.metaKey;

      // zoom
      if (event.deltaY !== 0 && meta) {
        const delta = event.deltaY * -0.0024;

        const value = positions_.zoom + delta;

        update({ zoom: value, x, y, delta }, event);

        event.preventDefault();
      }
      // move
      else if (!meta) {
        // vertical
        if (event.deltaY !== 0) {
          const value = positions_.top + event.deltaY * -1;

          update({ top: value, x, y });
        }

        // horizontal
        if (event.deltaX !== 0) {
          const value = positions_.left + event.deltaX * -1;

          update({ left: value, x, y });
        }

        event.preventDefault();
      }
    }
  }, []);

  const onKeyUp = React.useCallback(() => {
    setKeyDown(null);
  }, []);

  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
    if (event.key === ' ') setKeyDown(event.key);
  }, []);

  const onMouseUp = React.useCallback(() => {
    refs.mouseDown.current = false;
    refs.mouseDownMiniMap.current = false;

    refs.previousMouseEvent.current = undefined;
  }, []);

  const onMouseDown = React.useCallback((event: MouseEvent) => {
    refs.mouseDown.current = true;

    if (is('function', onMouseDown_)) onMouseDown_!(event);
  }, [onMouseDown_]);

  const onTouchStart = React.useCallback((event: TouchEvent) => {
    refs.mouseDown.current = true;

    if (is('function', onTouchStart_)) onTouchStart_!(event);
  }, [onTouchStart_]);

  const onMouseDownMiniMap = React.useCallback((event: MouseEvent) => {
    refs.mouseDownMiniMap.current = true;
  }, []);

  const onTouchStartMiniMap = React.useCallback((event: TouchEvent) => {
    refs.mouseDownMiniMap.current = true;
  }, []);

  const onMoveMiniMap = React.useCallback((x_: number, y_: number, event: MouseEvent) => {
    if (refs.mouseDownMiniMap.current && refs.previousMouseEvent.current && !refs.disabled.current) {
      const positions_ = refs.positions.current;

      const root = refs.root.current as HTMLElement;
      const container = refs.container.current as HTMLElement;
      const miniMap_ = refs.miniMap.current as HTMLElement;

      const rectMiniMap = miniMap_.getBoundingClientRect();

      const ratios = {
        containerMiniMap: container.clientWidth / 170,
        rootContainer: root.clientWidth / container.clientWidth
      };

      const zoomAdjusted = 1 / positions_.zoom;

      const x = (event.clientX - rectMiniMap.x) * ratios.containerMiniMap / zoomAdjusted;

      const y = (event.clientY - rectMiniMap.y) * ratios.containerMiniMap / zoomAdjusted;

      const left = (x * -1) + (root.clientWidth / 2);

      const top = (y * -1) + (root.clientHeight / 2);

      update({ left, top });
    }
  }, []);

  const onMove = React.useCallback((x_: number, y_: number, event: MouseEvent) => {
    if (refs.keyDown.current === ' ' && refs.mouseDown.current && refs.previousMouseEvent.current && !refs.disabled.current) {
      const { clientX: xPrevious, clientY: yPrevious } = refs.previousMouseEvent.current as any;

      const positions_ = refs.positions.current;

      const x = x_ - xPrevious;

      const y = y_ - yPrevious;

      const left = x + positions_.left;

      const top = y + positions_.top;

      update({ left, top });
    }
  }, []);

  const onMouseMove = React.useCallback((event: MouseEvent) => {
    if ((refs.mouseDown.current || refs.mouseDownMiniMap.current) && !refs.disabled.current) {
      const { clientY, clientX } = event;

      if (refs.mouseDownMiniMap.current) onMoveMiniMap(clientX, clientY, event);
      else if (refs.mouseDown.current) onMove(clientX, clientY, event);

      refs.previousMouseEvent.current = event;
    }
  }, []);

  const onTouchMove = React.useCallback((event: TouchEvent) => {
    if ((refs.mouseDown.current || refs.mouseDownMiniMap.current) && !refs.disabled.current) {
      const { clientY, clientX } = event.touches[0];

      if (refs.mouseDownMiniMap.current) onMoveMiniMap(clientX, clientY, event as any);
      else if (refs.mouseDown.current) onMove(clientX, clientY, event as any);

      refs.previousMouseEvent.current = event;

      // Normalize for use as a mouseDown value
      (refs.previousMouseEvent.current as any).clientY = clientY;

      (refs.previousMouseEvent.current as any).clientX = clientX;
    }
  }, []);

  React.useEffect(() => {
    // init
    init();

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    window.addEventListener('wheel', onWheel, { passive: false });

    rootDocument!.addEventListener('keyup', onKeyUp);

    rootDocument!.addEventListener('keydown', onKeyDown);

    rootDocument!.addEventListener('mousemove', onMouseMove);

    rootDocument!.addEventListener('touchmove', onTouchMove, { passive: true });

    rootDocument!.addEventListener('mouseup', onMouseUp);

    rootDocument!.addEventListener('touchend', onMouseUp);

    return () => {
      window.removeEventListener('wheel', onWheel);

      rootDocument!.removeEventListener('keyup', onKeyUp);

      rootDocument!.removeEventListener('keydown', onKeyDown);

      rootDocument!.removeEventListener('mousemove', onMouseMove);

      rootDocument!.removeEventListener('touchmove', onTouchMove);

      rootDocument!.removeEventListener('mouseup', onMouseUp);

      rootDocument!.removeEventListener('touchend', onMouseUp);
    };
  }, []);

  const onShowGuidelines = React.useCallback((valueNew: any) => {
    setShowGuidelines(valueNew);
  }, []);

  const zoomOptions = React.useMemo(() => {

    return [
      { name: 'Zoom to fit', props: { onClick: (event: MouseEvent) => onCenter() } },
      { name: 'Zoom to 25%', value: 0.25, props: { onClick: (event: MouseEvent) => zoom(0.25, event) } },
      { name: 'Zoom to 50%', value: 0.5, props: { onClick: (event: MouseEvent) => zoom(0.5, event) } },
      { name: 'Zoom to 75%', value: 0.75, props: { onClick: (event: MouseEvent) => zoom(0.75, event) } },
      { name: 'Zoom to 100%', value: 1, props: { onClick: (event: MouseEvent) => zoom(1, event) } },
      { name: 'Zoom to 125%', value: 1.25, props: { onClick: (event: MouseEvent) => zoom(1.25, event) } },
      { name: 'Zoom to 150%', value: 1.5, props: { onClick: (event: MouseEvent) => zoom(1.5, event) } },
      { name: 'Zoom to 175%', value: 1.75, props: { onClick: (event: MouseEvent) => zoom(1.75, event) } },
      { name: 'Zoom to 200%', value: 2, props: { onClick: (event: MouseEvent) => zoom(2, event) } },
      { name: 'Zoom to 400%', value: 4, props: { onClick: (event: MouseEvent) => zoom(4, event) } }
    ];
  }, []);

  const miniMap = React.useMemo(() => {
    const root = refs.root.current as HTMLElement;
    const container = refs.container.current as HTMLElement;

    if (!container) return null;

    const zoomAdjusted = 1 / positions.zoom;

    const ratios = {
      root: root.clientWidth / root.clientHeight,
      container: container.clientWidth / container.clientHeight,
      rootContainer: root.clientWidth / container.clientWidth
    };

    const width_ = 170;

    const height_ = 170 / ratios.container;

    const zoomPerSize = container.clientWidth / width_;

    const viewportStyles: any = {
      width: (width_ * ratios.rootContainer) * zoomAdjusted,
      height: ((width_ / ratios.root) * ratios.rootContainer) * zoomAdjusted
    };

    viewportStyles.left = (Math.abs(positions.left) / zoomPerSize) * zoomAdjusted;

    viewportStyles.top = (Math.abs(positions.top) / zoomPerSize) * zoomAdjusted;

    return (
      <Line
        ref={refs.miniMap}

        onMouseDown={onMouseDownMiniMap}

        onTouchStart={onTouchStartMiniMap}

        className={classNames([
          classes.miniMap
        ])}

        style={{
          width: width_,
          height: height_
        }}
      >
        <Line
          className={classes.miniMapMain}
        />

        <Line
          className={classes.miniMapViewport}

          style={{
            ...viewportStyles
          }}
        />
      </Line>
    );
  }, [positions, onMouseDownMiniMap, onTouchStartMiniMap]);

  const updateMiniMap = React.useCallback(debounce(() => {
    const root = refs.root.current as HTMLElement;
    const container = refs.container.current as HTMLElement;
    const miniMap_ = refs.miniMap.current as HTMLElement;

    if (!miniMap_) return;

    const itemsContainer = Array.from(container.children) as HTMLElement[];

    const itemsContainerMap: any = {};

    itemsContainer.forEach(element => {
      itemsContainerMap[element.dataset.id as string] = element;
    });

    const miniMapItems = miniMap_.children[0];

    const itemsMiniMapItems = Array.from(miniMapItems.children) as HTMLElement[];

    const itemsMiniMapItemsMap: any = {};

    itemsMiniMapItems.forEach(element => {
      itemsMiniMapItemsMap[element.dataset.id as string] = element;
    });

    const ratios = {
      root: root.clientWidth / root.clientHeight,
      container: container.clientWidth / container.clientHeight,
      contanerMiniMap: 170 / container.clientWidth
    };

    const updateItemCopy = (item: HTMLElement) => {
      const left = +item.style.left.replace('px', '');
      const top = +item.style.top.replace('px', '');
      const width_ = +item.style.width.replace('px', '');
      const height_ = +item.style.height.replace('px', '');

      item.style.width = `${width_ * ratios.contanerMiniMap}px`;

      item.style.height = `${height_ * ratios.contanerMiniMap}px`;

      item.style.left = `${left * ratios.contanerMiniMap}px`;

      item.style.top = `${top * ratios.contanerMiniMap}px`;
    };

    itemsContainer.forEach(item => {
      const id = item.dataset.id as string;

      const itemCopy = item.cloneNode() as HTMLElement;

      updateItemCopy(itemCopy);

      // add
      if (!itemsMiniMapItemsMap[id]) {
        miniMapItems.append(itemCopy);
      }
      // update
      else {
        const itemExisting = itemsMiniMapItemsMap[id];

        itemExisting.style.left = itemCopy.style.left;

        itemExisting.style.top = itemCopy.style.top;

        itemExisting.style.width = itemCopy.style.width;

        itemExisting.style.height = itemCopy.style.height;
      }
    });

    itemsMiniMapItems.forEach(item => {
      const id = item.dataset.id as string;

      // remove
      if (!itemsContainerMap[id]) {
        item.remove();
      }
    });
  }, 440), []);

  React.useEffect(() => {
    // update
    // mini map
    if (useMiniMap) updateMiniMap();
  }, [children, useMiniMap]);

  return (
    <Surface
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          ref.current = item;
        }

        refs.root.current = item;
      }}

      color='default'

      gap={0}

      align='unset'

      justify='unset'

      flex

      fullWidth

      onMouseDown={onMouseDown}

      onTouchStart={onTouchStart}

      Component={Component}

      className={classNames([
        staticClassName('HTMLCanvas', theme) && [
          'amaui-HTMLCanvas-root'
        ],

        className,
        classes.root,
        keyDown === ' ' && classes.move,
        disabled && classes.disabled
      ])}

      {...other}
    >
      {pre}

      {!noActions && (
        <Line
          gap={0.5}

          direction='row'

          align='center'

          justify='flex-start'

          className={classNames([
            staticClassName('HTMLCanvas', theme) && [
              'amaui-HTMLCanvas-actions'
            ],

            classes.actions
          ])}
        >
          {!noGuideLines && (
            <Label
              value={showGuidelines}

              onChange={onShowGuidelines}

              size='small'
            >
              <Switch />

              Guidelines
            </Label>
          )}

          {!noFitCenter && (
            <Line
              gap={1}

              direction='row'

              align='center'

              justify='flex-end'
            >
              <Tooltip
                name='Fit'
              >
                <IconButton
                  size={size}

                  onClick={onCenter}

                  {...IconButtonProps}
                >
                  <IconCenter />
                </IconButton>
              </Tooltip>
            </Line>
          )}

          {!noZoomMenu && (
            <Menu
              menuItems={zoomOptions.map((item: any, index: number) => (
                <ListItem
                  key={item.name}

                  primary={(
                    <Type
                      version='b3'
                    >
                      {item.name}
                    </Type>
                  )}

                  value={item.name}

                  selected={+(positions.zoom).toFixed(2) === +(item.value || 0).toFixed(2)}

                  {...item.props}

                  size='small'

                  button
                />
              ))}

              className={classes.menu}
            >
              <Line
                align='center'

                justify='center'

                className={classes.zoom}
              >
                <Type
                  version={size === 'large' ? 'b2' : size === 'regular' ? 'b3' : 'b3'}

                  align='center'

                  whiteSpace='nowrap'

                  fullWidth
                >
                  {(positions.zoom * 100).toFixed(0)}%
                </Type>
              </Line>
            </Menu>
          )}
        </Line>
      )}

      <Line
        {...ContainerProps}

        ref={(item: any) => {
          if (ContainerProps?.ref) {
            if (is('function', ContainerProps?.ref)) ContainerProps.ref(item);
            ContainerProps.ref.current = item;
          }

          refs.container.current = item;
        }}

        gap={0}

        align='unset'

        justify='unset'

        flex

        fullWidth

        className={classNames([
          staticClassName('HTMLCanvas', theme) && [
            'amaui-HTMLCanvas-container'
          ],

          ContainerProps?.className,
          classes.container,
          showGuidelines && guidelines && classes[`guidelines_${[true, 'dots'].includes(guidelines) ? 'dots' : 'lines'}`]
        ])}

        style={{
          width,
          height,

          ...ContainerProps?.style
        }}
      >
        {children}
      </Line>

      {useMiniMap && miniMap}

      {post}
    </Surface>
  );
});

HTMLCanvas.displayName = 'amaui-HTMLCanvas';

export default HTMLCanvas;
