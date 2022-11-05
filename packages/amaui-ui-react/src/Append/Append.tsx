import React from 'react';

import { is, isEnvironment, element as element_, clamp, debounce } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import Portal from '../Portal';
import { TChildren, THTMLElement, TStyle } from '../utils';

const valuesDefault = {
  x: 0,
  y: 0,
  switch: false,
  init: true
};

export type TAppendPadding = Array<number>;

export interface IAppendValue {
  x?: number;
  y?: number;
  switch?: boolean;
  init?: boolean;
}

export interface IAppend {
  open?: boolean;
  portal?: boolean;
  accelerated?: boolean;
  anchor?: DOMRect;
  anchorElement?: THTMLElement;
  offset?: TAppendPadding;
  padding?: TAppendPadding;
  paddingUnfollow?: TAppendPadding;
  inset?: boolean;
  position?: 'top' | 'left' | 'bottom' | 'right';
  alignment?: 'start' | 'center' | 'end';
  switch?: boolean;
  overflow?: boolean;
  unfollow?: boolean;
  style?: TStyle;
  update?: any;
  element?: any;
  parent?: THTMLElement;
  additional?: (rects: { root: DOMRect; element: DOMRect; }, rectsOffset: { root: DOMRect; element: DOMRect; }) => any;

  children?: TChildren;

  [property: string]: any;
}

const Append = (props_: IAppend) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAppend?.props?.default }), [props_]);

  const {
    open,
    portal = false,
    accelerated = true,
    anchor,
    anchorElement: anchorElement_,
    offset = [0, 0],
    padding = [0, 0],
    paddingUnfollow = props.padding || [0, 0],
    inset: inset_,
    position: position_ = 'bottom',
    alignment: alignment_ = 'end',
    switch: switch_ = true,
    overflow = true,
    unfollow = false,
    style: style_,
    update,
    element,
    parent: parentElement,
    additional,

    children
  } = props;

  const [init, setInit] = React.useState(false);
  const [values, setValues] = React.useState<any>(valuesDefault);

  const refs = {
    root: React.useRef<HTMLElement>(),
    element: React.useRef<HTMLElement>(),
    values: React.useRef(values),
    alignment: React.useRef<any>(),
    position: React.useRef<any>(),
    portal: React.useRef<any>(),
    props: React.useRef<any>(),
    anchor: React.useRef<any>(),
    additional: React.useRef<any>()
  };

  refs.alignment.current = alignment_;

  refs.position.current = position_;

  refs.portal.current = portal;

  refs.anchor.current = anchor;

  refs.additional.current = additional;

  const anchorElement = (anchorElement_ as any)?.current ? (anchorElement_ as any)?.current : anchorElement_;

  if (anchorElement) refs.root.current = anchorElement;

  refs.props.current = props;

  const onScroll = React.useCallback((event: any) => {
    // Only if it's parent's scroll event
    if (event.target.contains(refs.root.current) && anchor === undefined) make();

  }, [anchor]);

  const observerMethod = React.useCallback((mutations: Array<MutationRecord>) => {

    for (const mutation of mutations) {
      if (
        mutation.target === refs.root.current ?
          // Root attributes or childList
          ['attributes', 'childList'].includes(mutation.type) && [null, undefined, 'style'].includes(mutation.attributeName) :
          // or subtree's childList
          ['attributes', 'childList'].includes(mutation.type) && [null, undefined, 'style'].includes(mutation.attributeName)
      ) {
        if (refs.anchor.current === undefined) make();
      }
    }

  }, []);

  const observerResizeMethod = React.useCallback(() => {
    if (refs.anchor.current === undefined) make();

  }, []);

  React.useEffect(() => {
    make();

    // Scroll
    window.addEventListener('scroll', onScroll, true);

    // Init
    setInit(true);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Anchor
  React.useEffect(() => {
    if (init) {
      if (open) make();
      else {
        if (refs.props.current.clearOnClose) setValues(valuesDefault);
      }
    }
  }, [open]);

  // Anchor
  React.useEffect(() => {
    if (init) {
      if (anchor?.x && anchor?.y) make();
    }
  }, [anchor]);

  // Anchor
  React.useEffect(() => {
    make();
  }, [anchorElement]);

  // Anchor element
  React.useEffect(() => {
    // Resize
    const observer = new MutationObserver(observerMethod);

    try {
      if (refs.root.current) {
        observer.observe(refs.root.current, { attributes: true, childList: true, subtree: true });
      }
    } catch (error) { }

    return () => {
      if (refs.root.current) {
        observer.disconnect();
      }
    };
  }, [anchor, refs.root.current]);

  // Element resize
  React.useEffect(() => {
    // Resize
    const observer = new MutationObserver(observerMethod);

    try {
      if (refs.element.current) {
        observer.observe(refs.element.current, { attributes: true, childList: true, subtree: true });
      }
    } catch (error) { }

    return () => {
      if (refs.element.current) {
        observer.disconnect();
      }
    };
  }, [anchor, refs.element.current]);

  // Update
  React.useEffect(() => {
    if (init) make();
  }, [update]);

  // Update
  React.useEffect(() => {
    if (init) {
      if (is('function', refs.props.current.onUpdate)) refs.props.current.onUpdate(values);
    }
  }, [values]);

  const getValues = () => {
    if (!((refs.root.current || anchor) && refs.element.current)) return;

    const wrapperRect = (refs.root.current || refs.element.current)?.parentElement?.getBoundingClientRect();

    if (!wrapperRect) return;

    const resolve = () => {
      if (!anchor) return;

      if (!portal) {
        anchor.x = anchor.x - wrapperRect.x;

        anchor.y = anchor.y - wrapperRect.y;
      }

      return anchor;
    };

    // Anchor relative to parent values
    const anchor_ = resolve();

    const rect = {
      root: anchor_ || refs.root.current.getBoundingClientRect(),
      element: refs.element.current.getBoundingClientRect()
    };

    const rectOffset = {
      root: {
        x: refs.root.current ? refs.root.current.offsetLeft : anchor_?.x,
        y: refs.root.current ? refs.root.current.offsetTop : anchor_?.y,
        width: refs.root.current ? refs.root.current.offsetLeft + refs.root.current.offsetWidth : anchor_?.x + anchor_?.width,
        height: refs.root.current ? refs.root.current.offsetTop + refs.root.current.offsetHeight : anchor_?.y + anchor_?.height
      },
      element: {
        x: refs.element.current.offsetLeft,
        y: refs.element.current.offsetTop,
        width: refs.element.current.offsetLeft + refs.element.current.offsetWidth,
        height: refs.element.current.offsetTop + refs.element.current.offsetHeight
      }
    };

    return {
      rect,
      rectOffset
    };
  };

  const make = (
    value = { position: refs.position.current, alignment: refs.alignment.current, inset: inset_, switch: false },
    values__ = getValues()
  ) => {
    if (!values__) return;

    const wrapperRect = (overflow || switch_) && (refs.root.current || refs.element.current).parentElement.getBoundingClientRect();

    const scrollableParents = element_(refs.root.current).parents().filter(item => {
      if (!(item instanceof Element)) return;

      const overflow_ = window.getComputedStyle(item).overflow;

      return (
        (
          overflow_.includes('auto') ||
          overflow_.includes('hidden')
        ) &&
        (
          !refs.portal.current ||
          (item.clientHeight !== item.scrollHeight) ||
          (
            (item.clientHeight > window.innerHeight) ||
            (item.clientWidth > window.innerWidth)
          )
        )
      );
    });

    // If no parents, ie. anchor
    // add window.document.body as an only value
    if (!scrollableParents.length) scrollableParents.push(window.document.body);

    const { position, inset, switch: switched } = value;

    let { alignment } = value;

    const { rect } = values__;

    let { rectOffset } = values__;

    // We need both root and element refs
    // to make our values for it
    const values_ = {
      x: 0,
      y: 0
    };

    const rootX = portal ? rect.root.x : rectOffset.root.x;
    const rootY = portal ? rect.root.y : rectOffset.root.y;

    const rootBottom = portal ? rect.root.bottom : rectOffset.root.y + rect.root.height;
    const rootRight = portal ? rect.root.right : rectOffset.root.x + rect.root.width;

    const parent_ = (parentElement !== undefined ? parentElement : portal ? window.document.body : refs.root.current?.parentElement)?.getBoundingClientRect();

    if (theme.direction === 'rtl' && ['top', 'bottom'].includes(position)) {
      if (alignment === 'start') alignment = 'end';
      else if (alignment === 'end') alignment = 'start';
    }

    // Top, Bottom
    if (['top', 'bottom'].includes(position)) {
      if (alignment === 'start') values_.x = rootX;

      if (!alignment || alignment === 'center') values_.x = rootX + ((rect.root.width - rect.element.width) / 2);

      if (alignment === 'end') values_.x = rootX + rect.root.width - rect.element.width;

      if (position === 'top') {
        values_.y = rootBottom - (parent_.height || 0) - offset[1] - rect.root.height;

        if (inset) values_.y = rootBottom - (parent_.height || 0) - rect.root.height + rect.element.height + offset[1];
      }
      else {
        values_.y = rootY + offset[1] + rect.root.height;

        if (inset) values_.y = rootY + rect.root.height - rect.element.height - offset[1];
      }
    }

    // Left
    if (['left', 'right'].includes(position)) {
      if (alignment === 'start') values_.y = rootY;

      if (!alignment || alignment === 'center') values_.y = rootY + ((rect.root.height - rect.element.height) / 2);

      if (alignment === 'end') values_.y = rootY + rect.root.height - rect.element.height;

      if (position === 'left') {
        values_.x = rootRight - (parent_.width || 0) - offset[0] - rect.root.width;

        if (inset) values_.x = rootRight - (parent_.width || 0) - rect.root.width + rect.element.width + offset[0];
      }
      else {
        values_.x = rootX + offset[0] + rect.root.width;

        if (inset) values_.x = rootX + rect.root.width - rect.element.width - offset[0];
      }
    }

    // Absolute position
    if (portal) {
      values_.y += window.document.documentElement.scrollTop;

      values_.x += window.document.documentElement.scrollLeft;
    }

    // Overflow
    if (overflow) {
      // If x or y is out of bounds of the parent
      // or window push them to 0 value
      // only if that value doesn't unfollow them from the element
      // or unfollow them if unfollow is true
      if (portal) rectOffset = rect;

      const top = (portal ? window.document.documentElement.scrollTop : 0);
      const left = (portal ? window.document.documentElement.scrollLeft : 0);

      const rootY_ = !portal ? wrapperRect.y + rectOffset.root.y : rect.root.y;
      const valueY = !portal ? wrapperRect.y + values_.y : values_.y;

      const rootX_ = !portal ? wrapperRect.x + rectOffset.root.x : rect.root.x;
      const valueX = !portal ? wrapperRect.x + values_.x : values_.x;

      const wrapperRectY = !portal ? wrapperRect.y : 0;
      const wrapperRectX = !portal ? wrapperRect.x : 0;

      if (['left', 'right'].includes(position)) {
        // All parents that are scrollable
        const valuesY = [values_.y];

        let result = values_.y;

        scrollableParents.forEach((parent: HTMLElement) => {
          const scrollParentRect = parent.getBoundingClientRect();

          const scrollParentY = scrollParentRect.y - Math.abs(rect.root.y);
          const valueScrollParentY = valueY - scrollParentRect.y;

          // top
          if (
            (valueY - top <= 0 + padding[1]) ||
            (valueScrollParentY - top <= 0 + padding[1])
          ) {
            if ((rootY_ + rect.root.height) > 0 || unfollow) {
              const mathValues = [
                values_.y,
                top,
                scrollParentY,
                scrollParentRect.y - wrapperRectY + top,
                0
              ];

              if (!portal) mathValues.push(rectOffset.root.y - rootY_);

              values_.y = Math.max(...mathValues);

              // padding
              const padding_ = values_.y > (rectOffset.root.y + rect.root.height + top) && unfollow ? paddingUnfollow : padding;

              const scrollRoot = scrollParentRect.y - wrapperRectY >= 0;

              values_.y += clamp(Math.abs(values_.y - (scrollRoot ? scrollParentRect.y : 0) + wrapperRectY - padding_[1]), 0, padding_[1]);

              if (!unfollow) values_.y = clamp(values_.y, Number.MIN_SAFE_INTEGER, rectOffset.root.y + rect.root.height + top);
            }
            else values_.y = rectOffset.root.y + rect.root.height + top;

            valuesY.push(values_.y);

            result = Math.max(...valuesY);
          }

          // bottom
          if (
            (valueY + rect.element.height - top >= window.innerHeight - padding[1]) ||
            (values_.y + rect.element.height - top >= scrollParentRect.y + scrollParentRect.height - wrapperRectY - padding[1])
          ) {
            if (
              (
                (rect.root.y < window.innerHeight) ||
                (rectOffset.root.y < scrollParentRect.y + scrollParentRect.height - wrapperRectY)
              )
              || unfollow
            ) {
              const mathValues = [
                values_.y,
                window.innerHeight - wrapperRectY - rect.element.height + top,
                scrollParentRect.y + scrollParentRect.height - wrapperRectY - rect.element.height + top
              ];

              values_.y = Math.abs(Math.min(...mathValues));

              // padding
              const padding_ = values_.y < (rectOffset.root.y - rect.element.height + top) && unfollow ? paddingUnfollow : padding;

              const scrollRoot = scrollParentRect.y - wrapperRectY >= 0;

              values_.y -= clamp(Math.abs(values_.y - ((scrollRoot ? scrollParentRect.y + scrollParentRect.height : window.innerHeight) - wrapperRectY - rect.element.height - padding_[1])), 0, padding_[1]);

              if (!unfollow) values_.y = clamp(values_.y, rectOffset.root.y - rect.element.height + top, Number.MAX_SAFE_INTEGER);
            }
            else values_.y = rectOffset.root.y - rect.element.height + top;

            valuesY.push(values_.y);

            result = Math.min(...valuesY);
          }

          // Reset
          values_.y = valuesY[0];
        });

        values_.y = result;
      }

      if (['top', 'bottom'].includes(position)) {
        // All parents that are scrollable
        const valuesX = [values_.x];

        let result = values_.x;

        scrollableParents.forEach((parent: HTMLElement) => {
          const scrollParentRect = parent.getBoundingClientRect();

          const scrollParentX = scrollParentRect.x - Math.abs(rect.root.x);
          const valueScrollParentX = valueX - scrollParentRect.x;

          // left
          if (
            (valueX - left <= 0 + padding[0]) ||
            (valueScrollParentX - left <= 0 + padding[0])
          ) {
            if ((rootX_ + rect.root.width) > 0 || unfollow) {
              const mathValues = [
                values_.x,
                left,
                scrollParentX,
                scrollParentRect.x - wrapperRectX + left,
                0
              ];

              if (!portal) mathValues.push(rectOffset.root.x - rootX_);

              values_.x = Math.max(...mathValues);

              // padding
              const padding_ = (values_.x > rectOffset.root.x + rect.root.width + left) && unfollow ? paddingUnfollow : padding;

              const scrollRoot = scrollParentRect.x - wrapperRectX >= 0;

              values_.x += clamp(Math.abs(values_.x - (scrollRoot ? scrollParentRect.x : 0) + wrapperRectX - padding_[0]), 0, padding_[0]);

              if (!unfollow) values_.x = clamp(values_.x, Number.MIN_SAFE_INTEGER, rectOffset.root.x + rect.root.width + left);
            }
            else values_.x = rectOffset.root.x + rect.root.width + left;

            valuesX.push(values_.x);

            result = Math.max(...valuesX);
          }

          // right
          if (
            (valueX + rect.element.width - left >= window.innerWidth - padding[0]) ||
            (values_.x + rect.element.width - left >= scrollParentRect.x + scrollParentRect.width - wrapperRectX - padding[0])
          ) {
            if (
              (
                (rect.root.x < window.innerWidth) ||
                (rectOffset.root.x < scrollParentRect.x + scrollParentRect.width - wrapperRectX)
              )
              || unfollow
            ) {
              const mathValues = [
                values_.x,
                window.innerWidth - wrapperRectX - rect.element.width + left,
                scrollParentRect.x + scrollParentRect.width - wrapperRectX - rect.element.width + left
              ];

              values_.x = Math.abs(Math.min(...mathValues));

              // padding
              const padding_ = (values_.x < rectOffset.root.x - rect.element.width + left) && unfollow ? paddingUnfollow : padding;

              const scrollRoot = scrollParentRect.x - wrapperRectX >= 0;

              values_.x -= clamp(Math.abs(values_.x - ((scrollRoot ? scrollParentRect.x + scrollParentRect.width : window.innerWidth) - wrapperRectX - rect.element.width - padding_[1])), 0, padding_[1]);

              if (!unfollow) values_.x = clamp(values_.x, rectOffset.root.x - rect.element.width + left, Number.MAX_SAFE_INTEGER);
            }
            else values_.x = rectOffset.root.x - rect.element.width + left;

            valuesX.push(values_.x);

            result = Math.min(...valuesX);
          }

          // Reset
          values_.x = valuesX[0];
        });

        values_.x = result;
      }
    }

    // Switch
    if (switch_ && !value.switch) {
      let newPosition = position;

      const rectValue: any = {
        element: {}
      };

      if (position_ === 'top') rectValue.element.y = rect.root.y - offset[1] - rect.element.height;

      if (position_ === 'bottom') rectValue.element.y = rect.root.y + rect.root.height + offset[1];

      if (position_ === 'left') rectValue.element.x = rect.root.x - offset[0] - rect.element.width;

      if (position_ === 'right') rectValue.element.x = rect.root.x + rect.root.width + offset[0];

      const update_ = scrollableParents.some(parent => {
        const rectParent = parent.getBoundingClientRect();

        if (position_ === 'top') return !(
          rectValue.element.y - (['top', 'bottom'].includes(position_) ? padding[0] : 0) >= 0 &&
          rectValue.element.y - (['top', 'bottom'].includes(position_) ? padding[0] : 0) >= rectParent.y
        );

        if (position_ === 'bottom') return !(
          rectValue.element.y + rect.element.height + (['top', 'bottom'].includes(position_) ? padding[0] : 0) <= window.innerHeight &&
          rectValue.element.y + rect.element.height + (['top', 'bottom'].includes(position_) ? padding[0] : 0) <= rectParent.y + rectParent.height
        );

        if (position_ === 'left') return !(
          rectValue.element.x - (['left', 'right'].includes(position_) ? padding[1] : 0) >= 0 &&
          rectValue.element.x - (['left', 'right'].includes(position_) ? padding[1] : 0) >= rectParent.x
        );

        if (position_ === 'right') return !(
          rectValue.element.x + rect.element.width + (['left', 'right'].includes(position_) ? padding[1] : 0) <= window.innerWidth &&
          rectValue.element.x + rect.element.width + (['left', 'right'].includes(position_) ? padding[1] : 0) <= rectParent.x + rectParent.width
        );
      });

      if (update_) {
        if (position_ === 'top') newPosition = 'bottom';
        if (position_ === 'left') newPosition = 'right';
        if (position_ === 'right') newPosition = 'left';
        if (position_ === 'bottom') newPosition = 'top';

        return make({ position: newPosition, alignment: alignment_, inset: inset_, switch: true });
      }
    }

    refs.values.current = {
      position: value.position,
      switch: switched,
      init: false,

      ...values_
    };

    if (is('function', refs.additional.current)) {
      refs.values.current = {
        ...refs.values.current,

        ...additional(rect, rectOffset as any)
      };
    }

    // Update
    setValues(refs.values.current);
  };

  let style: React.CSSProperties = {};

  style.position = 'absolute';

  if (values.position === 'top') style.inset = 'auto auto 0px 0px';
  else if (values.position === 'left') style.inset = '0px 0px auto auto';
  else style.inset = '0px auto auto 0px';

  if (accelerated) {
    const ppiHigh = isEnvironment('browser') && window.devicePixelRatio > 1;

    if (ppiHigh) style.transform = `translate3d(${values.x}px, ${values.y}px, 0px)`;
    else style.transform = `translate(${values.x}px, ${values.y}px)`;
  }
  else {
    style.top = values.y;
    style.left = values.x;
  }

  style = {
    ...(element as any)?.props?.style,

    ...style,

    ...style_,

    ...values?.style
  };

  const PortalComponent = portal ? Portal : React.Fragment;

  const PortalComponentProps: any = {};

  if (portal) PortalComponentProps.element = isEnvironment('browser') && window.document.body;

  return (
    <React.Fragment>
      {children && React.cloneElement(children as any, {
        ref: item => {
          if ((children as any).ref) {
            if (is('function', (children as any).ref)) (children as any).ref(item);
            else (children as any).ref.current = item;
          }

          refs.root.current = item;
        }
      })}

      {/* Method or value */}
      {open && (children || anchorElement || anchor) && (
        <PortalComponent
          {...PortalComponentProps}
        >
          {
            is('function', element) ?
              (element as any)({ ref: refs.element, values, style }) :

              React.cloneElement(element as any, {
                ref: item => {
                  if ((element as any)?.ref) {
                    if (is('function', (element as any).ref)) (element as any).ref(item);
                    else (element as any).ref.current = item;
                  }

                  refs.element.current = item;
                },

                style
              })
          }
        </PortalComponent>
      )}
    </React.Fragment>
  );
};

Append.displayName = 'AmauiAppend';

export default Append;
