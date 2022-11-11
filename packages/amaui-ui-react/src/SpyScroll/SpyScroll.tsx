import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName, TStyle } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'AmauiSpyScroll' });

export interface ISpyScroll extends IBaseElement {
  ids?: Array<string>;

  offset?: number;
  offsetStart?: number;
  offsetEnd?: number;

  addClassName?: string;
  addStyle?: TStyle;
}

const SpyScroll = React.forwardRef((props_: ISpyScroll, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSpyScroll?.props?.default }), [props_]);

  const {
    ids,

    offset,
    offsetStart,
    offsetEnd,

    addClassName,
    addStyle,

    className,
    style,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<HTMLElement>(),
    active: React.useRef<Array<HTMLElement>>([]),
    props: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.props.current = props;

  React.useEffect(() => {
    // Listen to window scroll value
    const methodElement = (element: HTMLElement) => {
      if (element) {
        const rect = element.getBoundingClientRect();

        // SpyScroll
        const offset_ = refs.props.current.offsetStart !== undefined ? refs.props.current.offsetStart : refs.props.current.offset !== undefined ? refs.props.current.offset : 0;

        if (
          // Top
          (
            // Top
            (rect.top - offset_ < window.innerHeight && rect.top - offset_ > 0) &&

            (
              // Left
              (rect.left - offset_ < window.innerWidth && rect.left - offset_ > 0) ||
              // Right
              (rect.left - offset_ < window.innerWidth && rect.right + offset_ > 0)
            )
          ) ||

          // Left
          (
            // Left
            (rect.left - offset_ < window.innerWidth && rect.left - offset_ > 0) &&

            (
              // Top
              (rect.top - offset_ < window.innerHeight && rect.top - offset_ > 0) ||
              // Bottom
              (rect.top - offset_ < window.innerHeight && rect.bottom + offset_ > 0)
            )
          ) ||

          // Right
          (
            // Right
            (rect.left - offset_ < window.innerWidth && rect.right + offset_ > 0) &&

            (
              // Top
              (rect.top - offset_ < window.innerHeight && rect.top - offset_ > 0) ||
              // Bottom
              (rect.top - offset_ < window.innerHeight && rect.bottom + offset_ > 0)
            )
          ) ||

          // Bottom
          (
            // Bottom
            (rect.top - offset_ < window.innerHeight && rect.bottom + offset_ > 0) &&

            (
              // Left
              (rect.left - offset_ < window.innerWidth && rect.left - offset_ > 0) ||
              // Right
              (rect.left - offset_ < window.innerWidth && rect.right + offset_ > 0)
            )
          )
        ) return true;
      }
    };

    const method = () => {
      // Find first active id
      const id = refs.props.current.ids.find((item: string) => methodElement(window.document.querySelector(`#${item}`.replace('##', '#'))));

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
          element.classList.add(refs.props.current.addClassName);

          // addStyle
          if (refs.props.current.addStyle) {
            Object.keys(refs.props.current.addStyle).forEach(item => {
              element.style[item] = refs.props.current.addStyle[item];
            });
          }
        }
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

    if (refs.root.current) {
      window.addEventListener('scroll', method);
    }

    return () => {
      if (refs.root.current) {
        window.removeEventListener('scroll', method);
      }
    };
  }, []);

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
            'AmauiSpyScroll-root'
          ],

          className,
          classes.root
        ]),

        ...other
      })}
    </React.Fragment>
  );
});

SpyScroll.displayName = 'AmauiSpyScroll';

export default SpyScroll;
