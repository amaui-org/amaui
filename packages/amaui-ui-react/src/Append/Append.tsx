import React from 'react';

import { debounce, is, isEnvironment, element as element_, clamp } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import Portal from '../Portal';

const Append = (props_: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAppend?.props?.default }), [props_]);

  const [init, setInit] = React.useState(false);
  const [values, setValues] = React.useState<any>({
    x: 0,
    y: 0,
    switch: false,
    init: true
  });

  const refs = {
    root: React.useRef<HTMLElement>(),
    element: React.useRef<HTMLElement>(),
    values: React.useRef(values)
  };

  const {
    open,
    portal = false,
    accelerated = true,
    anchor,
    anchorElement,
    offset = [0, 0],
    padding = [0, 0],
    paddingUnfollow = props.padding || [0, 0],
    inset: inset_,
    position: position_ = 'bottom',
    alignment: alignment_ = 'end',
    switch: switch_ = false,
    overflow = true,
    unfollow = false,
    style: style_,
    update,
    element,

    children
  } = props;

  if (anchorElement) refs.root.current = anchorElement;

  const onScroll = React.useCallback(debounce((event: any) => {
    // Only if it's parent's scroll event
    if (event.target.contains(refs.root.current)) make();

    // More than 140 frames per second
  }, 7), []);

  const onResize = React.useCallback(debounce(() => {
    make();

    // More than 140 frames per second
  }, 7), []);

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
    }
  }, [open]);

  // Anchor
  React.useEffect(() => {
    if (init) {
      if (anchor?.x && anchor?.y) make();
    }
  }, [anchor]);

  // Anchor element
  React.useEffect(() => {
    // Resize
    const observerResize = new ResizeObserver(onResize);

    if (refs.root.current) observerResize.observe(refs.root.current);

    return () => {
      if (refs.root.current) observerResize.disconnect();
    };
  }, [refs.root.current]);

  // Element resize
  React.useEffect(() => {
    // Resize
    const observerResize = new ResizeObserver(onResize);

    if (refs.element.current) observerResize.observe(refs.element.current);

    return () => {
      if (refs.element.current) observerResize.disconnect();
    };
  }, [refs.element.current]);

  // Update
  React.useEffect(() => {
    if (init) make();
  }, [update]);

  const getValues = () => {
    if (!((refs.root.current || anchor) && refs.element.current)) return;

    const wrapperRect = (refs.root.current || refs.element.current).parentElement.getBoundingClientRect();

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
    value = { position: position_, alignment: alignment_, inset: inset_, switch: false },
    values__ = getValues()
  ) => {
    if (!values__) return;

    const wrapperRect = (overflow || switch_) && (refs.root.current || refs.element.current).parentElement.getBoundingClientRect();

    const scrollableParents = element_(refs.root.current).parents().filter(item => item instanceof Element && !['visible', 'initial'].includes(window.getComputedStyle(item).overflow));

    let { position, alignment, inset, switch: switched } = value;

    let { rect, rectOffset } = values__;

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

    const parent_ = (portal ? window.document.body : refs.root.current?.parentElement)?.getBoundingClientRect();

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

      const rootY = !portal ? wrapperRect.y + rectOffset.root.y : rect.root.y;
      const valueY = !portal ? wrapperRect.y + values_.y : values_.y;

      const rootX = !portal ? wrapperRect.x + rectOffset.root.x : rect.root.x;
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
            if ((rootY + rect.root.height) > 0 || unfollow) {
              const mathValues = [
                values_.y,
                top,
                scrollParentY,
                scrollParentRect.y - wrapperRectY + top,
                0
              ];

              if (!portal) mathValues.push(rectOffset.root.y - rootY);

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
            if ((rootX + rect.root.width) > 0 || unfollow) {
              const mathValues = [
                values_.x,
                left,
                scrollParentX,
                scrollParentRect.x - wrapperRectX + left,
                0
              ];

              if (!portal) mathValues.push(rectOffset.root.x - rootX);

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

    // Update
    setValues({ position: value.position, switch: switched, init: false, ...values_ });

    refs.values.current = { position, switch: switched, init: false, ...values_ };
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
    ...element.props?.style,

    ...style,

    ...style_
  };

  const PortalComponent = portal ? Portal : React.Fragment;

  const PortalComponentProps: any = {};

  if (portal) PortalComponentProps.element = window.document.body;

  return (
    <React.Fragment>
      {children && React.cloneElement(children, { ref: refs.root })}

      {/* Method or value */}
      {open && (
        <PortalComponent
          {...PortalComponentProps}
        >
          {
            is('function', element) ?
              element({ ref: refs.element, values, style }) :

              React.cloneElement(element, {
                ref: refs.element,

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
