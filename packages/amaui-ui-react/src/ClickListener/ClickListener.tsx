import React from 'react';

import { is, element, TMethod } from '@amaui/utils';
import { useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, matches, THTMLElement } from '../utils';

const resolve = (value: string) => value.replace(/^on/, '').toLowerCase();

export interface IClickListener extends IBaseElement {
  mouseEvent?: 'onClick' | 'onMove' | 'onMouseDown' | 'onMouseUp' | 'onMouseEnter' | 'onMouseLeave';

  touchEvent?: 'onTouchStart' | 'onTouchEnd' | 'onTouchMove';

  include?: Array<THTMLElement>;

  includeParentQueries?: Array<string>;

  includeQueries?: Array<string>;

  onClickInside?: () => any;

  onClickOutside?: () => any;
}

const ClickListener = React.forwardRef((props_: IClickListener, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiClickListener?.props?.default }), [props_]);

  const {
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',

    include = [],

    includeParentQueries = [],

    includeQueries = [],

    onClickInside,
    onClickOutside,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<HTMLElement>(),
    include: React.useRef<any>(),
    includeQueries: React.useRef<any>(),
    includeParentQueries: React.useRef<any>()
  };

  refs.include.current = include;

  refs.includeQueries.current = includeQueries;

  refs.includeParentQueries.current = includeParentQueries;

  React.useEffect(() => {
    const onMethod = (event: MouseEvent) => {
      if (refs.root.current) {
        const elementParents = element(event.target as any).parents();

        if (
          (
            refs.root.current.contains(event.target as any) ||
            refs.include.current.map(item => item?.current || item).filter(Boolean).some(item => item.contains?.(event.target)) ||
            refs.includeParentQueries.current.some((query: string) => elementParents.some(item => matches(item)(query))) ||
            refs.includeQueries.current.some((query: string) => matches(event.target)(query))
          )
        ) {
          if (is('function', onClickInside)) onClickInside();
        }
        else {
          if (is('function', onClickOutside)) onClickOutside();
        }
      }
    };

    if (mouseEvent) window.document.addEventListener(resolve(mouseEvent), onMethod);

    if (touchEvent) window.document.addEventListener(resolve(touchEvent), onMethod, { passive: true });

    return () => {
      if (mouseEvent) window.document.removeEventListener(resolve(mouseEvent), onMethod);

      if (touchEvent) window.document.removeEventListener(resolve(mouseEvent), onMethod);
    };
  }, []);

  return (
    <React.Fragment>
      {children && (
        React.cloneElement(children as any, {
          ref: (item: any) => {
            if (ref) {
              if (is('function', ref)) ref(item);
              else ref.current = item;
            }

            if ((children as any).ref) {
              if (is('function', (children as any).ref)) (children as any).ref(item);
              else (children as any).ref.current = item;
            }

            refs.root.current = item;
          },

          ...other
        })
      )}
    </React.Fragment>
  );
});

ClickListener.displayName = 'AmauiClickListener';

export default ClickListener;
