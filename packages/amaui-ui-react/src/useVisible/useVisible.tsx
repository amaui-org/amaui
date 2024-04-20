import React from 'react';

import { hash, isEnvironment } from '@amaui/utils';

export interface IUseVisibleResponse extends IntersectionObserverEntry {
  visible?: boolean;

  percentage?: number;
}

export interface IUseVisible {
  element: HTMLElement;

  visibleDefault?: boolean;

  options?: IntersectionObserverInit;

  addClasses?: boolean;

  classes?: {
    in?: string;
  };

  addStyles?: boolean;

  styles?: {
    in?: any;
    out?: any;
  };
}

const useVisible = (props: IUseVisible) => {
  const {
    element,

    visibleDefault,

    options,

    addClasses,

    classes = {
      in: 'amaui-visible'
    },

    addStyles,

    styles
  } = props;

  const [response, setResponse] = React.useState<IUseVisibleResponse>({ visible: visibleDefault !== undefined ? visibleDefault : false } as any);
  const [root, setRoot] = React.useState<HTMLElement>();

  const refs = {
    root: React.useRef(root),
    response: React.useRef(response),
    addClasses: React.useRef(addClasses),
    classes: React.useRef(classes),
    addStyles: React.useRef(addStyles),
    styles: React.useRef(styles)
  };

  refs.root.current = root;

  refs.response.current = response;

  refs.addClasses.current = addClasses;

  refs.classes.current = classes;

  refs.addStyles.current = addStyles;

  refs.styles.current = styles;

  // Root
  React.useEffect(() => {
    const rootNew = element;

    setRoot(rootNew);

    refs.root.current = rootNew;
  }, [element]);

  const method = React.useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const properties = ['boundingClientRect', 'intersectionRatio', 'intersectionRect', 'isIntersecting', 'isVisible', 'rootBounds', 'target', 'time'];

      const responseNew: IUseVisibleResponse = {
        visible: !!entry.isIntersecting,
        percentage: entry.intersectionRatio
      } as any;

      properties.forEach(property => (responseNew as any)[property] = (entry as any)[property]);

      const target = entry.target as HTMLElement;

      // classes
      if (refs.addClasses.current) {
        const visibleClass = refs.classes.current?.in || 'amaui-visible';

        if (responseNew.visible) target.classList.add(visibleClass);
        else target.classList.remove(visibleClass);
      }

      // styles
      if (refs.addStyles.current) {
        const visibleStyles = refs.styles.current?.in || {};
        const notVisibleStyles = refs.styles.current?.out || {};

        if (responseNew.visible) Object.keys(visibleStyles).forEach(item => (target.style as any)[item] = visibleStyles[item]);
        else Object.keys(notVisibleStyles).forEach(item => (target.style as any)[item] = notVisibleStyles[item]);
      }

      setResponse(responseNew);
    });
  }, []);

  React.useEffect(() => {
    if (!(isEnvironment('browser') && 'IntersectionObserver' in window)) return;

    // Add new observer listener
    const observer = new IntersectionObserver(method, options);

    if (root) {
      observer.observe(root);
    }

    return () => {
      // Clean up
      observer.disconnect();
    };
  }, [root, parent, options?.root, hash(options?.rootMargin), hash(options?.threshold)]);

  return response;
};

useVisible.displayName = 'amaui-UseVisible';

export default useVisible;
