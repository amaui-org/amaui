import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Avatar from '../Avatar';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },

  disabled: {
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    filter: 'grayscale(1)'
  },

  item: {
    outline: `2px solid ${theme.palette.background.default.primary}`,

    '&:not(:last-child)': {
      marginInlineStart: `-0.24em`
    }
  }
}), { name: 'AmauiAvatarGroup' });

const AvatarGroup = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAvatarGroup?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    total,
    color = 'primary',
    size = 'regular',

    max,
    disabled,

    AdditionalAvatar,

    AdditionalAvatarProps = {},

    className,
    style,

    children: children_,

    ...other
  } = props;

  const styles: any = {
    root: {},
    item: {}
  };

  let children = React.Children.toArray(children_).slice(0, max || children_.length).reverse();

  if (size !== undefined) {
    if (size === 'small') styles.item.outlineWidth = 2;
    else if (size === 'regular') styles.item.outlineWidth = 3;
    else if (size === 'large') styles.item.outlineWidth = 4;
    else styles.item.outlineWidth = Math.ceil(size / 20);
  }

  other.style = styles.item;

  if ((total !== undefined && total - children_.length >= 1) || max < children_.length) {
    let value: any;

    if ((total !== undefined && total - children_.length >= 1)) value = `+${total - children_.length}`;
    else value = `+${Math.abs(children_.length - max)}`;

    if (!AdditionalAvatarProps.TypeProps) AdditionalAvatarProps.TypeProps = {};

    AdditionalAvatarProps.TypeProps.size = '0.44em';

    children.unshift(
      AdditionalAvatar ||

      <Avatar
        tonal

        color='neutral'

        {...other}

        {...AdditionalAvatarProps}

        noIconRootFontSize
      >
        {value}
      </Avatar>
    );
  }

  if (AdditionalAvatarProps?.size !== undefined) styles.root.fontSize = AdditionalAvatarProps.size;

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('AvatarGroup', theme) && [
          'AmauiAvatarGroup-root',
          max !== undefined && 'AmauiAvatarGroup-max',
          total !== undefined && 'AmauiAvatarGroup-total'
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      style={{
        ...style,

        ...styles.root
      }}
    >
      {children.map((item: any, index: number) => React.cloneElement(item, {
        key: index,

        className: classNames([
          item?.props?.className,
          classes.item
        ]),

        size: item.props.size || size,

        color: item.props.color || color,

        ...other,

        ...item.props
      }))}
    </div>
  );
});

AvatarGroup.displayName = 'AmauiAvatarGroup';

export default AvatarGroup;
