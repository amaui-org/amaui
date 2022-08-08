import React from 'react';

import { is, isEnvironment } from '@amaui/utils';
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
    order = ['center bottom', 'center top', 'right bottom', 'right top', 'left bottom', 'left top', 'left top', 'right top', 'left center', 'right center', 'left bottom', 'right bottom'],
    position = 'bottom',
    alignment: alignment_ = 'end',

    element,

    children
  } = props;

  React.useEffect(() => {
    make();
  }, []);

  const make = () => {
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

      let alignment = alignment_;

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
      }

      // Left
      if (position === 'left') {
        if (alignment === 'start') values_.y = rootY;

        if (!alignment || alignment === 'center') values_.y = rootY + ((rect.root.height - rect.element.height) / 2);

        if (alignment === 'end') values_.y = rootY + rect.root.height - rect.element.height;

        values_.x = rootX - rect.element.width;
      }

      // Left
      if (position === 'right') {
        if (alignment === 'start') values_.y = rootY;

        if (!alignment || alignment === 'center') values_.y = rootY + ((rect.root.height - rect.element.height) / 2);

        if (alignment === 'end') values_.y = rootY + rect.root.height - rect.element.height;

        values_.x = rootX + rect.root.width;
      }

      setValues(values_);
    }
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
