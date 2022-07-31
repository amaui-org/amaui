import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Avatar from '../Avatar';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse',

    '&$disabled': {
      pointerEvents: 'none',
      opacity: theme.palette.visual_contrast.default.opacity.disabled
    }
  },

  item: {
    outline: `2px solid ${theme.palette.background.default.primary}`,

    '&:not(:last-child)': {
      marginLeft: `-0.4em`
    }
  }
}), { name: 'AmauiAvatarGroup' });

const AvatarGroup = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAvatarGroup?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    max,
    total,
    size,
    AdditionalAvatar,
    AdditionalAvatarProps = { color: 'default', tonal: true },
    disabled,

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

    AdditionalAvatarProps.TypeProps = {
      ...(AdditionalAvatarProps.TypeProps || {})
    };

    if (size === 'small') AdditionalAvatarProps.TypeProps.size = `${(30 * 0.3) / 16}rem`;
    else if (size === undefined || size === 'regular') AdditionalAvatarProps.TypeProps.size = `${(40 * 0.3) / 16}rem`;
    else if (size === 'large') AdditionalAvatarProps.TypeProps.size = `${(60 * 0.3) / 16}rem`;
    else if (!['small', 'regular', 'large'].includes(size)) AdditionalAvatarProps.TypeProps.size = `${(size * 0.3) / 16}rem`;

    children.unshift(
      AdditionalAvatar ||

      <Avatar
        {...other}

        {...AdditionalAvatarProps}

        color={disabled ? 'default' : AdditionalAvatarProps.color}
      >
        {value}
      </Avatar>
    );
  }

  if (AdditionalAvatarProps.TypeProps?.size !== undefined) styles.root.fontSize = AdditionalAvatarProps.TypeProps.size;

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('AvatarGroup', theme) && [
          'AmauiAvatarGroup-root',
          `AmauiAvatarGroup-size-${size}`,
          max !== undefined && 'AmauiAvatarGroup-max',
          total !== undefined && 'AmauiAvatarGroup-total',
          disabled && 'AmauiAvatarGroup-disabled'
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

        className: classes.item,

        size,

        ...other,

        ...item.props,

        color: disabled ? 'default' : item.props.color
      }))}
    </div>
  );
});

export default AvatarGroup;
