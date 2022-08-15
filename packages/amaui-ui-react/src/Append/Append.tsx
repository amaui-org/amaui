import React from 'react';

import { debounce, is, isEnvironment, element as element_, clamp } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';
import Portal from '../Portal';

const Append = (props_: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAppend?.props?.default }), [props_]);

  const [init, setInit] = React.useState(false);
  const [values, setValues] = React.useState({
    position: props.position,
    x: 0,
    y: 0
  });

  const refs = {
    root: React.useRef<HTMLElement>(),
    element: React.useRef<HTMLElement>()
  };

  const {
    open = true,
    portal = false,
    accelerated = true,
    anchor,
    anchorElement,
    offset = [0, 0],
    padding = [0, 0],
    paddingUnfollow = props.padding,
    inset: inset_,
    position: position_ = 'bottom',
    alignment: alignment_ = 'end',
    switch: switch_ = false,
    overflow = true,
    unfollow = false,
    style: style_,
    element,

    children
  } = props;

  if (anchorElement) refs.root.current = anchorElement;

  React.useEffect(() => {
    make();

    const onScroll = debounce((event: any) => {
      // Only if it's parent's scroll event
      if (event.target.contains(refs.root.current)) make();

      // More than 140 frames per second
    }, 7);

    const onResize = debounce(() => {
      make();

      // More than 140 frames per second
    }, 7);

    // Bug
    if (switch_) setTimeout(() => make());

    // Scroll
    window.addEventListener('scroll', onScroll, true);

    // Resize
    const observerResize = new ResizeObserver(onResize);

    if (refs.root.current) observerResize.observe(refs.root.current);

    // Init
    setInit(true);

    return () => {
      window.removeEventListener('scroll', onScroll);

      if (refs.root.current) observerResize.disconnect();
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

  const updateSwitch = () => {
    // Switch
    if (switch_ && values.position === position_ && refs.element.current) {
      let newPosition = position_;

      const scrollableParents = element_(refs.root.current).parents().filter(item => item.scrollHeight - item.clientHeight);

      const rectElement = refs.element.current.getBoundingClientRect();

      const update = scrollableParents.some(parent => {
        const rectParent = parent.getBoundingClientRect();

        if (['left', 'right'].includes(position_)) {
          return !(
            rectElement.x - (['left', 'right'].includes(position_) ? padding[1] : 0) >= 0 &&
            rectElement.x - (['left', 'right'].includes(position_) ? padding[1] : 0) >= rectParent.x &&
            rectElement.x + rectElement.width + (['left', 'right'].includes(position_) ? padding[1] : 0) <= rectParent.x + rectParent.width
          );
        }

        if (['top', 'bottom'].includes(position_)) {
          return !(
            rectElement.y - (['top', 'bottom'].includes(position_) ? padding[0] : 0) >= 0 &&
            rectElement.y - (['top', 'bottom'].includes(position_) ? padding[0] : 0) >= rectParent.y &&
            rectElement.y + rectElement.height + (['top', 'bottom'].includes(position_) ? padding[0] : 0) <= rectParent.y + rectParent.height
          );
        }
      });

      if (update) {
        if (position_ === 'top') newPosition = 'bottom';
        if (position_ === 'left') newPosition = 'right';
        if (position_ === 'right') newPosition = 'left';
        if (position_ === 'bottom') newPosition = 'top';

        make({ position: newPosition, alignment: alignment_, inset: inset_, switch: true });
      }
    }
  };

  // Switch
  React.useEffect(updateSwitch, [values]);

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
    values = getValues()
  ) => {
    if (!values) return;

    const wrapperRect = (overflow || switch_) && (refs.root.current || refs.element.current).parentElement.getBoundingClientRect();

    const scrollableParents = element_(refs.root.current || refs.element.current).parents().filter(item => item.scrollHeight - item.clientHeight);

    let { position, alignment, inset, switch: switched } = value;

    let { rect, rectOffset } = values;

    // We need both root and element refs
    // to make our values for it
    const values_ = {
      x: 0,
      y: 0
    };

    const rootX = portal ? rect.root.x : rectOffset.root.x;
    const rootY = portal ? rect.root.y : rectOffset.root.y;

    if (theme.direction === 'rtl' && ['top', 'bottom'].includes(position)) {
      if (alignment === 'start') alignment = 'end';
      else if (alignment === 'end') alignment = 'start';
    }

    // Top, Bottom
    if (['top', 'bottom'].includes(position)) {
      if (alignment === 'start') values_.x = rootX;

      if (!alignment || alignment === 'center') values_.x = rootX + ((rect.root.width - rect.element.width) / 2);

      if (alignment === 'end') values_.x = rootX + rect.root.width - rect.element.width;

      values_.y = position === 'top' ? rootY - offset[1] - rect.element.height : rootY + offset[1] + rect.root.height;

      if (inset) values_.y = position === 'top' ? rootY + offset[1] : rootY + rect.root.height - rect.element.height - offset[1];
    }

    // Left
    if (['left', 'right'].includes(position)) {
      if (alignment === 'start') values_.y = rootY;

      if (!alignment || alignment === 'center') values_.y = rootY + ((rect.root.height - rect.element.height) / 2);

      if (alignment === 'end') values_.y = rootY + rect.root.height - rect.element.height;

      if (position === 'left') {
        values_.x = rootX - offset[0] - rect.element.width;

        if (inset) values_.x = rootX + offset[0];
      }
      else {
        values_.x = rootX + offset[0] + rect.root.width;

        if (inset) values_.x = rootX + rect.root.width - offset[0] - rect.element.width;
      }
    }

    // Absolute position
    if (portal) {
      values_.y += window.document.documentElement.scrollTop;

      values_.x += window.document.documentElement.scrollLeft;
    }

    // Overflow
    if (overflow && false) {
      // If x or y is out of bounds of the parent
      // or window push them to 0 value
      // only if that value doesn't unfollow them from the element
      // or unfollow them if unfollow is true
      if (portal) rectOffset = rect;

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
            (valueY <= 0 + padding[1]) ||
            (valueScrollParentY <= 0 + padding[1])
          ) {
            if ((rootY + rect.root.height) > 0 || unfollow) {
              const mathValues = [
                values_.y,
                scrollParentY,
                scrollParentRect.y - wrapperRectY,
                0
              ];

              if (!portal) mathValues.push(rectOffset.root.y - rootY);

              values_.y = Math.max(...mathValues);

              // padding
              const padding_ = values_.y > (rectOffset.root.y + rect.root.height) && unfollow ? paddingUnfollow : padding;

              const scrollRoot = scrollParentRect.y - wrapperRectY >= 0;

              values_.y += clamp(Math.abs(values_.y - (scrollRoot ? scrollParentRect.y : 0) + wrapperRectY - padding_[1]), 0, padding_[1]);

              if (!unfollow) values_.y = clamp(values_.y, Number.MIN_SAFE_INTEGER, rectOffset.root.y + rect.root.height);
            }
            else values_.y = rectOffset.root.y + rect.root.height;

            valuesY.push(values_.y);

            result = Math.max(...valuesY);
          }

          // bottom
          if (
            (valueY + rect.element.height >= window.innerHeight - padding[1]) ||
            (values_.y + rect.element.height >= scrollParentRect.y + scrollParentRect.height - wrapperRectY - padding[1])
          ) {
            if (
              (
                (rect.root.y < window.innerHeight) ||
                (rectOffset.root.y < scrollParentRect.y + scrollParentRect.height - wrapperRectY)
              )
              || unfollow
            ) {
              values_.y = Math.abs(Math.min(
                values_.y,
                window.innerHeight - wrapperRectY - rect.element.height,
                scrollParentRect.y + scrollParentRect.height - wrapperRectY - rect.element.height
              ));

              // padding
              const padding_ = (values_.y < rectOffset.root.y - rect.element.height) && unfollow ? paddingUnfollow : padding;

              const scrollRoot = scrollParentRect.y - wrapperRectY >= 0;

              values_.y -= clamp(Math.abs(values_.y - ((scrollRoot ? scrollParentRect.y + scrollParentRect.height : window.innerHeight) - wrapperRectY - rect.element.height - padding_[1])), 0, padding_[1]);

              if (!unfollow) values_.y = clamp(values_.y, rectOffset.root.y - rect.element.height, Number.MAX_SAFE_INTEGER);
            }
            else values_.y = rectOffset.root.y - rect.element.height;

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
            (valueX <= 0 + padding[0]) ||
            (valueScrollParentX <= 0 + padding[0])
          ) {
            if ((rootX + rect.root.width) > 0 || unfollow) {
              const mathValues = [
                values_.x,
                scrollParentX,
                scrollParentRect.x - wrapperRectX,
                0
              ];

              if (!portal) mathValues.push(rectOffset.root.x - rootX);

              values_.x = Math.max(...mathValues);

              // padding
              const padding_ = (values_.x > rectOffset.root.x + rect.root.width) && unfollow ? paddingUnfollow : padding;

              const scrollRoot = scrollParentRect.x - wrapperRectX >= 0;

              values_.x += clamp(Math.abs(values_.x - (scrollRoot ? scrollParentRect.x : 0) + wrapperRectX - padding_[0]), 0, padding_[0]);

              if (!unfollow) values_.x = clamp(values_.x, Number.MIN_SAFE_INTEGER, rectOffset.root.x + rect.root.width);
            }
            else values_.x = rectOffset.root.x + rect.root.width;

            valuesX.push(values_.x);

            result = Math.max(...valuesX);
          }

          // right
          if (
            (valueX + rect.element.width >= window.innerWidth - padding[0]) ||
            (values_.x + rect.element.width >= scrollParentRect.x + scrollParentRect.width - wrapperRectX - padding[0])
          ) {
            if (
              (
                (rect.root.x < window.innerWidth) ||
                (rectOffset.root.x < scrollParentRect.x + scrollParentRect.width - wrapperRectX)
              )
              || unfollow
            ) {
              values_.x = Math.abs(Math.min(
                values_.x,
                window.innerWidth - wrapperRectX - rect.element.width,
                scrollParentRect.x + scrollParentRect.width - wrapperRectX - rect.element.width
              ));

              // padding
              const padding_ = (values_.x < rectOffset.root.x - rect.element.width) && unfollow ? paddingUnfollow : padding;

              const scrollRoot = scrollParentRect.x - wrapperRectX >= 0;

              values_.x -= clamp(Math.abs(values_.x - ((scrollRoot ? scrollParentRect.x + scrollParentRect.width : window.innerWidth) - wrapperRectX - rect.element.width - padding_[1])), 0, padding_[1]);

              if (!unfollow) values_.x = clamp(values_.x, rectOffset.root.x - rect.element.width, Number.MAX_SAFE_INTEGER);
            }
            else values_.x = rectOffset.root.x - rect.element.width;

            valuesX.push(values_.x);

            result = Math.min(...valuesX);
          }

          // Reset
          values_.x = valuesX[0];
        });

        values_.x = result;
      }
    }

    // Update
    setValues(() => ({ position, switch: switched, ...values_ }));
  };

  let style: React.CSSProperties = {};

  style.position = 'absolute';

  style.inset = '0px auto auto 0px';

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
