import React from 'react';

import { is, unique, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';
import { IBaseElement, IStyle } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'amaui-SpyScroll' });

export interface ISpyScroll extends IBaseElement {
  ids?: Array<string>;

  offset?: number;
  offsetStart?: number;

  parent?: HTMLElement;

  addClassName?: string;
  addStyle?: IStyle;

  onActive?: (value: string) => any;
}

const SpyScroll: React.FC<ISpyScroll> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSpyScroll?.props?.default, ...props_ }), [props_]);

  const {
    ids,

    offset,

    offsetStart,

    addClassName,

    addStyle,

    onActive,

    parent,

    className,

    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<HTMLElement>(),
    active: React.useRef<Array<HTMLElement>>([]),
    parent: React.useRef<HTMLElement>(parent),
    props: React.useRef<any>(),
    onActive: React.useRef(onActive)
  };

  refs.props.current = props;

  refs.parent.current = parent;

  refs.onActive.current = onActive;

  React.useEffect(() => {
    // Listen to window scroll value
    const isVisible = (element: HTMLElement) => new Promise(resolve => {
      if (!(element && refs.root.current)) return resolve(null);

      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        const intersecting = entries?.[0].isIntersecting;

        // clean up
        observer.disconnect();

        return resolve(intersecting);
      }, { root: refs.parent.current });

      observer.observe(element);
    });

    const method = async () => {
      // Find first active id
      let id: string;

      const rootElement_ = isEnvironment('browser') ? refs.parent.current || (refs.root.current?.ownerDocument || window.document) : undefined;

      for (const item of (refs.props.current.ids || [])) {
        id = await isVisible(rootElement_.querySelector(`#${item}`.replace('##', '#'))) as any;

        if (id) {
          id = item;

          break;
        }
      }

      if (id && refs.root.current) {
        // Update all elements in root

        // Remove active className and style from
        // all previous active elements
        for (const element of refs.active.current) {
          // addClassName
          element.classList.remove(refs.props.current.addClassName);

          // addStyle
          if (refs.props.current.addStyle) {
            Object.keys(refs.props.current.addStyle).forEach(item => {
              element.style.removeProperty(item);
            });
          }
        }

        // And add to all elements with href containing #id with addClassName and style
        refs.active.current = unique([
          // a elemnts with id
          ...Array.from(refs.root.current.querySelectorAll(`[href$='#${id}']`)),

          // elements active for multiple ids
          ...Array.from(refs.root.current.querySelectorAll(`[data-amaui-spy-scroll~=${id}]`))
        ]).filter(Boolean) as Array<HTMLElement>;

        for (const element of refs.active.current) {
          // addClassName
          if (!element.classList.contains(refs.props.current.addClassName)) element.classList.add(refs.props.current.addClassName);

          // addStyle
          if (refs.props.current.addStyle) {
            Object.keys(refs.props.current.addStyle).forEach(item => {
              element.style[item] = refs.props.current.addStyle[item];
            });
          }
        }

        // onActive
        if (is('function', refs.onActive.current)) refs.onActive.current(id);
      }
      else {
        // Remove active className and style from
        // all previous active elements
        for (const element of refs.active.current) {
          // addClassName
          element.classList.remove(refs.props.current.addClassName);

          // addStyle
          if (refs.props.current.addStyle) {
            Object.keys(refs.props.current.addStyle).forEach(item => {
              element.style.removeProperty(item);
            });
          }
        }
      }
    };

    // Initial
    method();

    const rootElement = isEnvironment('browser') ? refs.parent.current || (refs.root.current?.ownerDocument || window.document) : undefined;

    if (refs.root.current) {
      rootElement.addEventListener('scroll', method);
    }

    return () => {
      if (refs.root.current) {
        rootElement.removeEventListener('scroll', method);
      }
    };
  }, [parent]);

  return (
    <React.Fragment>
      {React.cloneElement(children as any, {
        ref: (item: any) => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        },

        className: classNames([
          staticClassName('SpyScroll', theme) && [
            'amaui-SpyScroll-root'
          ],

          (children as any).props.className,
          className,
          classes.root
        ]),

        ...other
      })}
    </React.Fragment>
  );
});

SpyScroll.displayName = 'amaui-SpyScroll';

export default SpyScroll;
