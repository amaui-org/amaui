import React from 'react';

import { copy, debounce, equalDeep, is, isEnvironment, element as element_ } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

// 1. Make offset value y
// 2. Make switch work

// Other

// Make it work for selection as well value y
// Events scroll and resize as well value y
// Updating popper element content within, width update value y

const Append = (props_: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAppend?.props?.default }), [props_]);

  const [values, setValues] = React.useState({
    x: 0,
    y: 0
  });

  const refs = {
    root: React.useRef<HTMLElement>(),
    element: React.useRef<HTMLElement>()
  };

  const {
    relativeTo = 'parent',
    accelerated = true,
    order = [
      { position: 'bottom', alignment: 'center' },
      { position: 'top', alignment: 'center' },

      { position: 'bottom', alignment: 'end' },
      { position: 'top', alignment: 'end' },

      { position: 'bottom', alignment: 'start' },
      { position: 'top', alignment: 'start' },

      { position: 'left', alignment: 'center' },
      { position: 'right', alignment: 'center' },

      { position: 'left', alignment: 'start' },
      { position: 'right', alignment: 'start' },

      { position: 'left', alignment: 'end' },
      { position: 'right', alignment: 'end' },

      { position: 'bottom', alignment: 'center', inset: true },
      { position: 'top', alignment: 'center', inset: true },

      { position: 'bottom', alignment: 'end', inset: true },
      { position: 'top', alignment: 'end', inset: true },

      { position: 'bottom', alignment: 'start', inset: true },
      { position: 'top', alignment: 'start', inset: true },

      { position: 'left', alignment: 'center', inset: true },
      { position: 'right', alignment: 'center', inset: true },

      { position: 'left', alignment: 'start', inset: true },
      { position: 'right', alignment: 'start', inset: true },

      { position: 'left', alignment: 'end', inset: true },
      { position: 'right', alignment: 'end', inset: true }
    ],
    inset: inset_,
    position: position_ = 'bottom',
    alignment: alignment_ = 'end',
    switch: switch_ = false,
    overflow = true,
    unfollow = false,

    element,

    children
  } = props;

  React.useEffect(() => {
    make();

    const onScroll = debounce((event: any) => {
      // Only if it's parent's scroll event
      if (event.target.contains(refs.root.current)) {
        const values = getValues();

        if (switch_) {
          // Make sure to go over all from the order
          // and leave first one that fits

          // Loop through all of the options
          let order_ = copy(order);

          order_.unshift({ position: position_, alignment: alignment_, inset: inset_ });

          while (!make(order_[0], values, event.target) || order_.length) {
            order_ = order_.filter(item => !(
              item.position === order_[0].position &&
              item.alignment === order_[0].alignment &&
              !!item.inset === !!order_[0].inset
            ));
          }
        }
        else make(undefined, values, event.target);
      }

      // More than 140 frames per second
    }, 7);

    window.addEventListener('scroll', onScroll, true);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const getValues = () => {
    if (!(refs.root.current && refs.element.current)) return;

    const rect = {
      root: refs.root.current.getBoundingClientRect(),
      element: refs.element.current.getBoundingClientRect()
    };

    const rectOffset = {
      root: {
        x: refs.root.current.offsetLeft,
        y: refs.root.current.offsetTop,
        width: refs.root.current.offsetLeft + refs.root.current.offsetWidth,
        height: refs.root.current.offsetTop + refs.root.current.offsetHeight
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
    value = { position: position_, alignment: alignment_, inset: inset_ },
    values = getValues(),
    scrollRoot_ = window.document
  ) => {
    if (!values) return;

    const scrollRoot = (scrollRoot_ === window.document ? window.document.documentElement : scrollRoot_) as HTMLElement;

    const scrollableParents = element_(refs.root.current).parents().filter(item => item.scrollHeight > item.clientHeight);

    let { position, alignment, inset } = value;

    const { rect, rectOffset } = values;

    // We need both root and element refs
    // to make our values for it
    const values_ = {
      x: 0,
      y: 0
    };

    const rootX = relativeTo === 'window' ? rect.root.x : rectOffset.root.x;
    const rootY = relativeTo === 'window' ? rect.root.y : rectOffset.root.y;

    if (theme.direction === 'rtl' && ['top', 'bottom'].includes(position)) {
      if (alignment === 'start') alignment = 'end';
      else if (alignment === 'end') alignment = 'start';
    }

    // Top, Bottom
    if (['top', 'bottom'].includes(position)) {
      if (alignment === 'start') values_.x = rootX;

      if (!alignment || alignment === 'center') values_.x = rootX + ((rect.root.width - rect.element.width) / 2);

      if (alignment === 'end') values_.x = rootX + rect.root.width - rect.element.width;

      values_.y = position === 'top' ? rootY - rect.element.height : rootY + rect.root.height;

      if (inset) values_.y = position === 'top' ? rootY : rootY + rect.root.height - rect.element.height;
    }

    // Left
    if (['left', 'right'].includes(position)) {
      if (alignment === 'start') values_.y = rootY;

      if (!alignment || alignment === 'center') values_.y = rootY + ((rect.root.height - rect.element.height) / 2);

      if (alignment === 'end') values_.y = rootY + rect.root.height - rect.element.height;

      if (position === 'left') {
        values_.x = rootX - rect.element.width;

        if (inset) values_.x = rootX;
      }
      else {
        values_.x = rootX + rect.root.width;

        if (inset) values_.x = rootX + rect.root.width - rect.element.width;
      }
    }

    // Overflow
    if (overflow) {
      // If x or y is out of bounds of the parent
      // or window push them to 0 value
      // only if that value doesn't unfollow them from the element
      // or unfollow them if unfollow is true
      if (relativeTo === 'window') {
        if (['left', 'right'].includes(position)) {
          // All parents that are scrollable
          scrollableParents.forEach((parent: HTMLElement) => {
            const scrollRootRect = scrollRoot.getBoundingClientRect();
            const scrollParentRect = parent.getBoundingClientRect();

            const scrollParentY = scrollParentRect.y - rect.root.y;
            const valueScrollParentY = values_.y - scrollParentRect.y;

            // top
            if (valueScrollParentY <= 0) {
              if (unfollow) values_.y = scrollRootRect.y;
              else if (rect.root.height < scrollParentY) values_.y = rect.root.y + rect.root.height;
              else values_.y -= valueScrollParentY;
            }

            // bottom
            if (values_.y + rect.element.height >= scrollParentRect.y + scrollParentRect.height) {
              if ((rect.root.y < scrollParentRect.y + scrollParentRect.height) || unfollow) values_.y = scrollParentRect.y + scrollParentRect.height - rect.element.height;
              else values_.y = rect.root.y - rect.element.height;
            }
          });

          // Window
          // top
          if (values_.y <= 0) {
            if ((rect.root.y + rect.root.height) > 0 || unfollow) values_.y = Math.max(values_.y, 0);
            else values_.y = Math.max(values_.y, rect.root.y + rect.root.height);
          }

          // bottom
          if (values_.y + rect.element.height >= window.innerHeight) {
            if (rect.root.y < window.innerHeight || unfollow) values_.y = Math.min(values_.y, window.innerHeight - rect.element.height);
            else values_.y = Math.min(values_.y, rect.root.y - rect.element.height);
          }
        }

        if (['top', 'bottom'].includes(position)) {
          // All parents that are scrollable
          scrollableParents.forEach((parent: HTMLElement) => {
            const scrollRootRect = scrollRoot.getBoundingClientRect();
            const scrollParentRect = parent.getBoundingClientRect();

            const scrollParentX = scrollParentRect.x - rect.root.x;
            const valueScrollParentX = values_.x - scrollParentRect.x;

            // left
            if (valueScrollParentX <= 0) {
              if (unfollow) values_.x = scrollRootRect.x;
              else if (rect.root.width < scrollParentX) values_.x = rect.root.x + rect.root.width;
              else values_.x -= valueScrollParentX;
            }

            // right
            if (values_.x + rect.element.width >= scrollParentRect.x + scrollParentRect.width) {
              if ((rect.root.x < scrollParentRect.x + scrollParentRect.width) || unfollow) values_.x = scrollParentRect.x + scrollParentRect.width - rect.element.width;
              else values_.x = rect.root.x - rect.element.width;
            }
          });

          // Window
          // left
          if (values_.x <= 0) {
            if ((rect.root.x + rect.root.width) > 0 || unfollow) values_.x = Math.max(values_.x, 0);
            else values_.x = Math.max(values_.x, rect.root.x + rect.root.width);
          }

          // right
          if (values_.x + rect.element.width >= window.innerWidth) {
            if (rect.root.x < window.innerWidth || unfollow) values_.x = Math.min(values_.x, window.innerWidth - rect.element.width);
            else values_.x = Math.min(values_.x, rect.root.x - rect.element.width);
          }
        }
      }
      else if (relativeTo === 'parent') {
        const wrapperRect = refs.root.current.parentElement.getBoundingClientRect();

        const rootY = wrapperRect.y + rectOffset.root.y;
        const valueY = wrapperRect.y + values_.y;

        const rootX = wrapperRect.x + rectOffset.root.x;
        const valueX = wrapperRect.x + values_.x;

        if (['left', 'right'].includes(position)) {
          // All parents that are scrollable
          scrollableParents.forEach((parent: HTMLElement) => {
            const scrollTop = parent.scrollTop || 0;
            const scrollParentRect = parent.getBoundingClientRect();

            const scrollParentY = scrollParentRect.y - rect.root.y;
            const valueScrollParentY = valueY - scrollParentRect.y;

            // top
            if (valueScrollParentY <= 0) {
              if (unfollow) values_.y = scrollTop;
              else if (rect.root.height < scrollParentY) values_.y = rectOffset.root.y + rect.root.height;
              else values_.y -= valueScrollParentY;
            }

            // bottom
            if (values_.y + rect.element.height >= scrollTop + scrollParentRect.height) {
              if ((rectOffset.root.y < scrollTop + scrollParentRect.height) || unfollow) values_.y = scrollTop + scrollParentRect.height - rect.element.height;
              else values_.y = rectOffset.root.y - rect.element.height;
            }
          });

          // Window
          // top
          if (valueY <= 0) {
            if ((rootY + rect.root.height) > 0 || unfollow) values_.y = Math.max(values_.y, Math.abs(rootY) + rectOffset.root.y);
            else values_.y = Math.max(values_.y, rectOffset.root.y + rect.root.height);
          }

          // bottom
          if (valueY + rect.element.height >= window.innerHeight) {
            if (rect.root.y < window.innerHeight || unfollow) values_.y = Math.min(values_.y, window.innerHeight - wrapperRect.y - rect.element.height);
            else values_.y = Math.min(values_.y, rectOffset.root.y - rect.element.height);
          }
        }

        if (['top', 'bottom'].includes(position)) {
          // All parents that are scrollable
          scrollableParents.forEach((parent: HTMLElement) => {
            const scrollLeft = parent.scrollLeft || 0;
            const scrollParentRect = parent.getBoundingClientRect();

            const scrollParentX = scrollParentRect.x - rect.root.x;
            const valueScrollParentX = valueX - scrollParentRect.x;

            // left
            if (valueScrollParentX <= 0) {
              if (unfollow) values_.x = scrollLeft;
              else if (rect.root.width < scrollParentX) values_.x = rectOffset.root.x + rect.root.width;
              else values_.x -= valueScrollParentX;
            }

            // right
            if (values_.x + rect.element.width >= scrollLeft + scrollParentRect.width) {
              if ((rectOffset.root.x < scrollLeft + scrollParentRect.width) || unfollow) values_.x = scrollLeft + scrollParentRect.width - rect.element.width;
              else values_.x = rectOffset.root.x - rect.element.width;
            }
          });

          // Window
          // left
          if (valueX <= 0) {
            if ((rootX + rect.root.width) > 0 || unfollow) values_.x = Math.max(values_.x, Math.abs(rootX) + rectOffset.root.x);
            else values_.x = unfollow ? 0 : Math.max(values_.x, rectOffset.root.x + rect.root.width);
          }

          // right
          if (valueX + rect.element.width >= window.innerWidth) {
            if (rect.root.x < window.innerWidth || unfollow) values_.x = Math.min(values_.x, window.innerWidth - wrapperRect.x - rect.element.width);
            else values_.x = unfollow ? window.innerWidth - rect.element.width : Math.min(values_.x, rectOffset.root.x - rect.element.width);
          }
        }
      }
    }

    // Switch
    if (switch_) {
      if (
        // Main viewport in window
        (
          (position === 'bottom' && window.innerHeight >= values_.y + rect.element.height) &&
          (position === 'top' && values_.y >= 0) &&
          (position === 'left' && values_.x >= 0) &&
          (position === 'right' && values_.x + rect.element.width <= window.innerWidth)
        )
      ) {
        setValues(values_);

        return true;
      }
      else return;
    }

    setValues(items => {
      if (!equalDeep(items, values_)) return values_;

      return items;
    });
  };

  const style: React.CSSProperties = {};

  style.position = relativeTo === 'parent' ? 'absolute' : 'fixed';

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

  return (
    <React.Fragment>
      {React.cloneElement(children, { ref: refs.root })}

      {/* Method or value */}
      {
        is('function', element) ?

          element({ ref: refs.element, values }) :

          React.cloneElement(element, {
            ref: refs.element,

            style: {
              ...element.props?.style,

              ...style
            }
          })
      }
    </React.Fragment>
  );
};

Append.displayName = 'AmauiAppend';

export default Append;
