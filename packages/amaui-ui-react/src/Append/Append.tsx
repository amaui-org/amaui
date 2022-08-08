import React from 'react';

import { debounce, is, isEnvironment } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

// 1. Make overflow
// 2. Make switch work
// 3. Make unfollow work
// 4. Make offset value y

// Other

// any scroll even and check if it's one of it's parents
// and only if yes do the math calc value y

// Make options for offset and unfollowOffset work with it
// Make it work for selection as well value y

// Events scroll and resize as well value y

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
    switch: switch_ = true,
    overflow = true,
    unfollow = false,

    element,

    children
  } = props;

  React.useEffect(() => {
    make();

    const onScroll = debounce((event: React.WheelEvent) => {
      // Only if it's parent's scroll event
      if (event.currentTarget.contains(refs.root.current)) {
        if (switch_) {
          // Make sure to go over all from the order
          // and leave first one that fits


        }
      }

      // More than 60 frames per second
    }, 14);

    window.addEventListener('scroll', onScroll, true);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const make = (value = { position: position_, alignment: alignment_, inset: inset_ }) => {
    let { position, alignment, inset } = value;

    // We need both root and element refs
    // to make our values for it
    if (refs.root.current && refs.element.current) {
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
      if (position === 'left') {
        if (alignment === 'start') values_.y = rootY;

        if (!alignment || alignment === 'center') values_.y = rootY + ((rect.root.height - rect.element.height) / 2);

        if (alignment === 'end') values_.y = rootY + rect.root.height - rect.element.height;

        values_.x = rootX - rect.element.width;

        if (inset) values_.x = rootX;
      }

      // Left
      if (position === 'right') {
        if (alignment === 'start') values_.y = rootY;

        if (!alignment || alignment === 'center') values_.y = rootY + ((rect.root.height - rect.element.height) / 2);

        if (alignment === 'end') values_.y = rootY + rect.root.height - rect.element.height;

        values_.x = rootX + rect.root.width;

        if (inset) values_.x = rootX + rect.root.width - rect.element.width;
      }

      let made = false;

      // Overflow
      if (overflow) {
        // If x or y is out of bounds of the parent
        // or window push them to 0 value
        // only if that value doesn't unfollow them from the element
        // or unfollow them if unfollow is true
      }

      if (made) {
        setValues(values_);

        return true;
      }

      return false;
    }

    return false;
  };

  console.log(1, values, refs.root);

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
