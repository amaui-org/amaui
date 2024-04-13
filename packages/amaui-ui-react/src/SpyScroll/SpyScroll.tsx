import React from 'react';

import { is, unique, Try, isEnvironment } from '@amaui/utils';
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
    const methodElement = (element: HTMLElement) => {
      if (element) {
        if (refs.parent.current) {
          const rect = element.getBoundingClientRect();

          const parentScrollTop = refs.parent.current.scrollTop;
          const parentScrollLeft = refs.parent.current.scrollLeft;

          const offsetTop = element.offsetTop;
          const offsetLeft = element.offsetLeft;

          if (
            // vertically
            (
              (refs.parent.current.scrollHeight > refs.parent.current.clientHeight) &&
              (
                offsetTop <= parentScrollTop &&
                parentScrollTop < offsetTop + rect.height
              )
            ) ||

            // horizontally
            (
              (refs.parent.current.scrollWidth > refs.parent.current.clientWidth) &&
              (
                offsetLeft <= parentScrollLeft &&
                parentScrollLeft < offsetLeft + rect.width
              )
            )
          ) return true;
        }
        else {
          const rect = element.getBoundingClientRect();

          // SpyScroll
          const offset_ = refs.props.current.offsetStart !== undefined ? refs.props.current.offsetStart : refs.props.current.offset !== undefined ? refs.props.current.offset : 0;

          const height = refs.parent.current ? refs.parent.current.clientHeight : window.innerHeight;

          const width = refs.parent.current ? refs.parent.current.clientWidth : window.innerWidth;

          if (
            // Top
            (
              // Top
              (rect.top - offset_ < height && rect.top - offset_ > 0) &&

              (
                // Left
                (rect.left - offset_ < width && rect.left - offset_ > 0) ||
                // Right
                (rect.left - offset_ < width && rect.right + offset_ > 0)
              )
            ) ||

            // Left
            (
              // Left
              (rect.left - offset_ < width && rect.left - offset_ > 0) &&

              (
                // Top
                (rect.top - offset_ < height && rect.top - offset_ > 0) ||
                // Bottom
                (rect.top - offset_ < height && rect.bottom + offset_ > 0)
              )
            ) ||

            // Right
            (
              // Right
              (rect.left - offset_ < width && rect.right + offset_ > 0) &&

              (
                // Top
                (rect.top - offset_ < height && rect.top - offset_ > 0) ||
                // Bottom
                (rect.top - offset_ < height && rect.bottom + offset_ > 0)
              )
            ) ||

            // Bottom
            (
              // Bottom
              (rect.top - offset_ < height && rect.bottom + offset_ > 0) &&

              (
                // Left
                (rect.left - offset_ < width && rect.left - offset_ > 0) ||
                // Right
                (rect.left - offset_ < width && rect.right + offset_ > 0)
              )
            )
          ) return true;
        }
      }
    };

    const method = () => {
      // Find first active id
      let id: string;

      const rootElement_ = isEnvironment('browser') ? refs.parent.current || (refs.root.current?.ownerDocument || window.document) : undefined;

      Try(() => id = refs.props.current.ids.find((item: string) => methodElement(rootElement_.querySelector(`#${item}`.replace('##', '#')))));

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
