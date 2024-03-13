import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import useMediaQuery from '../useMediaQuery';
import { ISurface } from '../Surface/Surface';
import Line from '../Line';
import { staticClassName } from '../utils';
import { ISize, IElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    // Reset
    margin: '0',
    listStyle: 'none',

    width: '100%',
    position: 'relative',
    borderRadius: `${theme.shape.radius.unit / 2}px`,
  },

  padding_vertical_both: {
    paddingBlock: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_start: {
    paddingBlockStart: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_end: {
    paddingBlockEnd: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_none: {
    paddingBlock: '0'
  },

  padding_horizontal_both: {
    paddingInline: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_start: {
    paddingInlineStart: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_end: {
    paddingInlineEnd: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_none: {
    paddingInline: '0'
  },

  menu: {
    width: 'auto',
    maxWidth: '280px'
  },

  noMaxWidth: {
    maxWidth: 'unset'
  },

  noBackground: {
    '&.amaui-Surface-root': {
      background: 'none'
    }
  }
}), { name: 'amaui-List' });

export interface IList extends ISurface {
  size?: ISize;

  menu?: IElement;
  menuOpen?: boolean;

  noMaxWidth?: boolean;
  noChildrenTransform?: boolean;
  indent?: number;
  paddingHorizontal?: 'both' | 'start' | 'end' | 'none';
  paddingVertical?: 'both' | 'start' | 'end' | 'none';
  noBackground?: boolean;

  SurfaceProps?: any;
}

const List: React.FC<IList> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiList?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'themed',
    size: size_,
    elevation = (props.menu && theme.palette.light) ? 2 : 0,

    menu,
    menuOpen,

    noMaxWidth,
    indent,
    paddingHorizontal = 'none',
    paddingVertical = 'both',
    noBackground,
    noChildrenTransform,

    onMenuDesktopClose,

    SurfaceProps,

    Component = 'ul',

    className,
    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>()
  };

  const mobile = useMediaQuery('(max-width: 767px)', { element: refs.root.current });

  const size = size_ !== undefined ? size_ : mobile ? 'small' : 'regular';

  const styles: any = {
    root: {

    }
  };

  if (indent !== undefined) styles.root.paddingInlineStart = `${indent * theme.space.unit}px`;

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      elevation={elevation}

      gap={0}

      direction='column'

      align='flex-start'

      role='listbox'

      Component={Line}

      AdditionalProps={{
        Component
      }}

      {...SurfaceProps}

      className={classNames([
        staticClassName('List', theme) && [
          'amaui-List-root'
        ],

        SurfaceProps?.className,
        className,
        classes.root,
        classes[`padding_vertical_${paddingVertical}`],
        classes[`padding_horizontal_${paddingHorizontal}`],
        menu && classes.menu,
        noMaxWidth && classes.noMaxWidth,
        noBackground && classes.noBackground
      ])}

      style={{
        ...style,

        ...styles.root
      }}
    >
      {noChildrenTransform ? children : React.Children.toArray(children).map((item: any, index: number) => {

        return React.cloneElement(item, {
          key: index,

          menuItem: menu,

          menuOpen,

          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          ...other,

          ...item.props,

          onClick: (event: React.MouseEvent<any>) => {
            if (is('function', onMenuDesktopClose) && item.props.menuCloseOnClick) onMenuDesktopClose();

            if (is('function', item.props.onClick)) item.props.onClick(event);
          }
        });
      })}
    </Surface>
  );
});

List.displayName = 'amaui-List';

export default List;
