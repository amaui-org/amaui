import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import useMediaQuery from '../useMediaQuery';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    // Reset
    margin: 0,
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
    paddingBlock: 0
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
    paddingInline: 0
  },

  menu: {
    width: 'auto',
    maxWidth: '280px'
  },

  noMaxWidth: {
    maxWidth: 'unset'
  }
}), { name: 'AmauiList' });

const List = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiList?.props?.default }), [props_]);

  const mobile = useMediaQuery('(max-width: 767px)');

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'themed',
    size = mobile ? 'small' : 'regular',
    elevation = (props.menu && theme.palette.light) ? 2 : 0,

    menu,
    menuOpen,

    noMaxWidth = true,
    indent,
    paddingHorizontal = 'none',
    paddingVertical = 'both',

    onMenuDesktopClose,

    Component = 'ul',

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {

    }
  };

  if (indent !== undefined) styles.root.paddingInlineStart = `${indent * theme.space.unit}px`;

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      elevation={elevation}

      gap={0}

      direction='column'

      align='flex-start'

      Component={Line}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('List', theme) && [
          'AmauiList-root',
          `AmauiList-size-${size}`,
          `AmauiList-padding-horizontal-${paddingHorizontal}`,
          `AmauiList-padding-vertical-${paddingVertical}`,
          menu && `AmauiList-menu`,
          indent && `AmauiList-indent`,
          noMaxWidth && `AmauiList-no-max-width`
        ],

        className,
        classes.root,
        classes[`padding_vertical_${paddingVertical}`],
        classes[`padding_horizontal_${paddingHorizontal}`],
        menu && classes.menu,
        noMaxWidth && classes.noMaxWidth
      ])}

      style={{
        ...style,

        ...styles.root
      }}
    >
      {React.Children.toArray(children).map((item: any, index: number) => React.cloneElement(item, {
        ...(['AmauiListItem', 'AmauiListSubheader'].includes(item.type?.displayName) ? {
          key: index,

          menuItem: menu,

          menuOpen,

          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          ...other,

          ...item.props
        } : {})
      }))}
    </Surface>
  );
});

List.displayName = 'AmauiList';

export default List;
