import React from 'react';

import { is } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

const KEYCODES = {
  tab: 'Tab'
};

const matches = (value: Element) => {
  const method = is('element', value) && (value.matches || value['webkitMatchesSelector'] || value['mozMatchesSelector'] || value['oMatchesSelector'] || value['msMatchesSelector']);

  if (!method) return () => false;

  return method.bind(value);
};

const queryMatchFocusable = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)';

const Focus = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiFocus?.props?.default }), [props_]);

  const refs = {
    focusStart: React.useRef<HTMLDivElement>(),
    focusEnd: React.useRef<HTMLDivElement>()
  };

  const {
    children,

    ...other
  } = props;

  const getElements = (value: Element = refs.focusStart.current): any[] => {
    // Setup siblings array and get the first sibling
    const allElements = [];
    let element = value.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (element) {
      if (element.nodeType === 1 && element !== value) allElements.push(element);

      element = element.nextSibling
    }

    const focusEndIndex = allElements.findIndex(item => item === refs.focusEnd.current);

    return allElements.slice(0, focusEndIndex).flatMap(item => [matches(item)(queryMatchFocusable) ? item : undefined, ...Array.from(item.querySelectorAll(queryMatchFocusable))].filter(Boolean));
  };

  const onKeyDownUp = (event: any): any => {
    const isTabPressed = event.key === 'Tab' || event.code === KEYCODES.tab;

    if (!isTabPressed) return;

    if (event.shiftKey) {
      if (document.activeElement === refs.focusStart.current) {
        const elements = getElements();

        if (elements.length) elements[elements.length - 1].focus();

        event.preventDefault();
      }
    }
    else {
      if (document.activeElement === refs.focusEnd.current || document.activeElement === refs.focusStart.current) {
        const elements = getElements();

        if (elements.length) elements[0].focus();

        event.preventDefault();
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDownUp);
    window.addEventListener('keyup', onKeyDownUp);

    return () => {
      window.removeEventListener('keydown', onKeyDownUp);
      window.removeEventListener('keyup', onKeyDownUp);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        ref={item => {
          if (ref) ref.current = item;

          refs.focusStart.current = item;
        }}

        tabIndex={0}

        {...other}
      />

      {children}

      <div
        ref={refs.focusEnd}

        tabIndex={0}
      />
    </React.Fragment>
  );
});

export default Focus;
