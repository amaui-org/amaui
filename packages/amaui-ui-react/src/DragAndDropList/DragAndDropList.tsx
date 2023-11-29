import React from 'react';

import { debounce, equalDeep, is, isEnvironment } from '@amaui/utils';
import { style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-DragAndDropList' });

export interface IDragAndDropList extends IBaseElement {
  onChange?: (indexPrevious: number, indexNew: number) => any;

  items?: any[];

  image?: boolean;
  delay?: number;
  precise?: boolean;
  draggedIsElement?: boolean;

  isEqual?: (item: any, value: any) => boolean;
  getDraggingElement?: (event: DragEvent) => HTMLElement;
  onDraggedElement?: (value: any) => any;

  onDragStart?: (item: any, event: DragEvent) => any;
}

const DragAndDropList: React.FC<IDragAndDropList> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiDragAndDropList?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    onChange: onChange_,

    items,

    image,
    delay = 0,
    precise = true,
    draggedIsElement = true,

    isEqual,
    getDraggingElement,
    onDraggedElement,

    onDragStart: onDragStart_,

    className,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(),
    dragging: React.useRef<any>(),
    rectDragged: React.useRef<any>(),
    isDragging: React.useRef<boolean>(),
    previous: React.useRef<any>()
  };

  const onChange = React.useMemo(() => {
    return debounce((indexPrevious: number, indexNew: number) => onChange_(indexPrevious, indexNew), delay);
  }, [onChange_, delay]);

  React.useEffect(() => {
    const onMouseUp = (event: any) => {
      // in use case
      // where onDragEnd is never emited
      // due to original element having it
      // has been removed from the dom
      // prior to onDragEnd event is to be emited
      // alternative way to provide a callback
      // to dragging has ended
      if (refs.isDragging.current) {
        if (is('function', onDraggedElement)) onDraggedElement(null);

        refs.isDragging.current = false;
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.body.addEventListener('mouseup', onMouseUp);

    rootDocument.body.addEventListener('touchend', onMouseUp);

    return () => {
      rootDocument.body.removeEventListener('mouseup', onMouseUp);

      rootDocument.body.removeEventListener('touchend', onMouseUp);
    };
  }, [onDraggedElement]);

  const img = React.useMemo(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const element = rootDocument.createElement('img');

    element.src = is('string', image) ? (image as unknown as string) : `data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAWAC8DAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igAoAKACgAoAKACgD8gtF+E3xs1/wD4UzrXiHxZ+1dZaj43/au+P/gj4r2Vt8RPjBo1np/7PsfiP42654IE+mxalFB4H8OzzeGvAlr4Z+IWjReH9dbQvE1noei+K10q+8N29l/LWD4Z4vx3+qeLx+Z+JdGvnHiXxvk/E1KGe8VYSlQ4Hjj+L8Zk/Ph44iMMnwM55fk1PL89wkcDjXgswpYPCZksNWwFOj7cq2Hj7eMYYNqng8NUot0qEm8Ty4eNSzt+8klOo50pc0eaDlKHMptyG2+Kml/8Id4f+NFz+1o3wN8JeLf2t/DOnan8MZPjbffFG81Xw18aYdI/Zw1Hx1rHw5gm+K3ijwpdfC9dUuvBvie/uNV8M+JdZh0bVvGt5f2cun3V3Tp8SYb+ysDxbU8TnwdlmaeJ+X0MRw7Li+txHVxOX8XRwvANfOcVkMJcS5jltThxYirlOY16mJy/MMXHCYrN61alKhUql6L55UFgvrE4YKbVX6uqKU6HNilTjVfsYTVaynBJThHmjTSd0ptK039seDSvhH8P/FN18ZH1L9pXwD8JdH8f+OdNu9WnufgFrHwx8RSXnxN1TVNb0O9m0r4ceJ/ir8GbnTdIju9Ney0+f4saPfXtl9o1TUbt5LwtDxVhhuF8jzKpxY8R4gZLwxhc7zihUxM6nBOK4ex0qvEOIxOMwdaeGyHMeJeFKmHwsauHlRoT4lwtatS58RXq8yk8C3WqQVC2FqVpU6bStiY1Y2pJRkr1YUa6crO79jJJ6JE/wmtf2kZv2kLEeLNa+Ltj4lX43/E678cx3+j/ABs1D4UXvwTsz44i8Eabpdxq+saZ+znYeGbvSJ/CR8Lal4I0i7+Ky+K4x/wkti8Uviq/t74Yp8fS4+o/2ni+KKOYLi/iKrnMa+F4vr8M1eEaTziOT4fDTxWKw/AdDL6mFnln9m4jJ8NV4lWZR/4UKLjLMq1MrPC/VXyRoOH1ekqdpYdVliH7P2jajF4pzUufnVSSo8nwP4E/1sr+nTxQoAKACgAoAKACgAD/2Q==`;

    return element;
  }, []);

  const onDragStart = (item: any) => async (event: any) => {
    event.dataTransfer.setData('text', item?.value !== undefined ? item.value : item);

    if (image) event.dataTransfer.setDragImage(img, 0, 0);

    refs.isDragging.current = true;

    const dragging = is('function', getDraggingElement) ? getDraggingElement(event) : event.target;

    if (onDragStart_) onDragStart_(item, event);

    refs.dragging.current = draggedIsElement ? dragging : dragging?.dataset?.amauiDragAndDropListValue;

    refs.rectDragged.current = {
      height: dragging.clientHeight,
      x: event.clientX - dragging.offsetLeft,
      y: event.clientY - dragging.offsetTop,
    };

    setTimeout(() => {
      if (is('function', onDraggedElement)) onDraggedElement?.(item);
    });
  };

  const onDragEnd = () => (event: any) => {
    // clean up
    refs.isDragging.current = false;
    refs.rectDragged.current = null;
    refs.dragging.current = null;

    if (is('function', onDraggedElement)) onDraggedElement(null);
  };

  const onDragOver = () => (event: any) => {
    event.preventDefault();

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const over = event.currentTarget;
    const dragging: any = draggedIsElement ? refs.dragging.current : rootDocument.body.querySelector(`[data-amaui-drag-and-drop-list-value="${refs.dragging.current}"]`);

    if (!(over && dragging)) return;

    if (precise) {
      if (over !== dragging) {
        const rectOver = {
          height: over.clientHeight,
          x: over.offsetLeft,
          y: over.offsetTop
        };

        const mousePosition = {
          x: event.clientX - rectOver.x,
          y: event.clientY - rectOver.y
        };

        const partBottom = Math.abs(refs.rectDragged.current.height - refs.rectDragged.current.y);
        const partTop = refs.rectDragged.current.y;

        const half = rectOver.height / 2;

        const positionTopBottom = (partBottom + mousePosition.y) >= half ? 'bottom' : 'top';
        const positionBottomTop = (mousePosition.y - partTop) <= half ? 'top' : 'bottom';

        const overIndex = items.findIndex((item: any) => isEqual ? isEqual(item, over.dataset.amauiDragAndDropListValue) : item === over.dataset.amauiDragAndDropListValue);
        const draggedIndex = items.findIndex((item: any) => isEqual ? isEqual(item, dragging.dataset.amauiDragAndDropListValue) : item === dragging.dataset.amauiDragAndDropListValue);

        // if dragged is above over & bottom swap their indexes
        // if dragged is below over && top swap their indexes
        if (
          (draggedIndex < overIndex && positionTopBottom === 'bottom') ||
          (draggedIndex > overIndex && positionBottomTop === 'top')
        ) {
          if (!refs.previous.current || !equalDeep(refs.previous.current, [draggedIndex, overIndex])) {
            onChange(draggedIndex, overIndex);

            refs.previous.current = [draggedIndex, overIndex];
          }
        }
      }
    }
    else {
      const overIndex = items.findIndex((item: any) => isEqual ? isEqual(item, over.dataset.amauiDragAndDropListValue) : item === over.dataset.amauiDragAndDropListValue);
      const draggedIndex = items.findIndex((item: any) => isEqual ? isEqual(item, dragging.dataset.amauiDragAndDropListValue) : item === dragging.dataset.amauiDragAndDropListValue);

      if (!refs.previous.current || !equalDeep(refs.previous.current, [draggedIndex, overIndex])) {
        if (is('function', onChange)) onChange(draggedIndex, overIndex);

        refs.previous.current = [draggedIndex, overIndex];
      }
    }
  };

  if (is('function', children)) return (children as any)({
    ref: item => {
      if (ref) {
        if (is('function', ref)) ref(item);
        else ref.current = item;
      }

      refs.root.current = item;
    },
    onDragStart,
    onDragOver,
    onDragEnd
  });

  return <>
    {children}
  </>;
});

DragAndDropList.displayName = 'amaui-DragAndDropList';

export default DragAndDropList;
