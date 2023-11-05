import React from 'react';

import { is, element, Try, isEnvironment } from '@amaui/utils';
import { classNames, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, matches, THTMLElement } from '../utils';

const resolve = (value: string) => value.replace(/^on/, '').toLowerCase();

export interface IClickListener extends IBaseElement {
  mouseEvent?: 'onClick' | 'onMove' | 'onMouseDown' | 'onMouseUp' | 'onMouseEnter' | 'onMouseLeave';

  touchEvent?: 'onTouchStart' | 'onTouchEnd' | 'onTouchMove';

  include?: Array<THTMLElement>;

  includeParentQueries?: Array<string>;

  includeQueries?: Array<string>;

  ignoreNonExisting: boolean;

  onClickInside?: () => any;

  onClickOutside?: () => any;
}

const ClickListener = React.forwardRef((props_: IClickListener, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiClickListener?.props?.default, ...props_ }), [props_]);

  const {
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',

    include = [],
    includeParentQueries = [],
    includeQueries = [],

    ignoreNonExisting = true,

    onClickInside,
    onClickOutside,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<HTMLElement>(),
    include: React.useRef<any>(),
    includeQueries: React.useRef<any>(),
    includeParentQueries: React.useRef<any>(),
    ignoreNonExisting: React.useRef<any>()
  };

  refs.include.current = include;

  refs.includeQueries.current = includeQueries;

  refs.includeParentQueries.current = includeParentQueries;

  refs.ignoreNonExisting.current = ignoreNonExisting;

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const onMethod = (event: MouseEvent) => {
      if (refs.root.current) {
        const elementParents = element(event.target as any).parents();

        const exists = Try(() => rootDocument.body.contains(event.target as any));

        if (
          (
            refs.root.current.contains(event.target as any) ||
            refs.include.current.map(item => item?.current || item).filter(Boolean).some(item => item.contains?.(event.target)) ||
            refs.includeParentQueries.current.some((query: string) => elementParents.some(item => matches(item)(query))) ||
            refs.includeQueries.current.some((query: string) => matches(event.target)(query)) ||
            (!exists && refs.ignoreNonExisting.current)
          )
        ) {
          if (is('function', onClickInside)) onClickInside();
        }
        else {
          if (is('function', onClickOutside)) onClickOutside();
        }
      }
    };

    if (mouseEvent) rootDocument.addEventListener(resolve(mouseEvent), onMethod);

    if (touchEvent) rootDocument.addEventListener(resolve(touchEvent), onMethod, { passive: true });

    return () => {
      if (mouseEvent) rootDocument.removeEventListener(resolve(mouseEvent), onMethod);

      if (touchEvent) rootDocument.removeEventListener(resolve(mouseEvent), onMethod);
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

          ...other,

          className: classNames([
            other.className,
            (children as any).props.className,
          ])
        })
      )}
    </React.Fragment>
  );
});

ClickListener.displayName = 'amaui-ClickListener';

export default ClickListener;
