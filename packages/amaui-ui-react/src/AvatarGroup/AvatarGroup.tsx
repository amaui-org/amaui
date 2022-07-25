import React from 'react';

import { classNames, style } from '@amaui/style-react';

import Avatar from '../Avatar';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },

  item: {
    outline: `2px solid ${theme.palette.background.default.primary}`,

    '&:not(:last-child)': {
      marginLeft: `-${theme.methods.space.value('sm', 'px')}`
    }
  }
}), { name: 'AmauiAvatarGroup' });

const AvatarGroup = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle();

  const {
    max,
    total,
    className,
    AdditionalAvatar,
    AdditionalAvatarProps = { color: 'neutral', tonal: true },

    children: children_,

    ...other
  } = props;

  const styles: any = {
    item: {}
  };

  let children = React.Children.toArray(children_).slice(0, max || children_.length).reverse();

  if (props.size !== undefined) {
    if (props.size === 'small') styles.item.outlineWidth = 2;
    else if (props.size === 'regular') styles.item.outlineWidth = 3;
    else if (props.size === 'large') styles.item.outlineWidth = 4;
    else styles.item.outlineWidth = Math.ceil(props.size / 20);
  }

  other.style = styles.item;

  if ((total !== undefined && total - children_.length >= 1) || max < children_.length) {
    let value: any;

    if ((total !== undefined && total - children_.length >= 1)) value = `+${total - children_.length}`;
    else value = `+${Math.abs(children_.length - max)}`;

    AdditionalAvatarProps.TypeProps = {
      ...(AdditionalAvatarProps.TypeProps || {})
    };

    if (props.size === 'small') AdditionalAvatarProps.TypeProps.size = `${(30 * 0.34) / 16}rem`;
    else if (props.size === undefined || props.size === 'regular') AdditionalAvatarProps.TypeProps.size = `${(40 * 0.34) / 16}rem`;
    else if (props.size === 'large') AdditionalAvatarProps.TypeProps.size = `${(60 * 0.34) / 16}rem`;
    else if (!['small', 'regular', 'large'].includes(props.size)) AdditionalAvatarProps.TypeProps.size = `${(props.size * 0.34) / 16}rem`;

    children.unshift(
      AdditionalAvatar ||

      <Avatar
        {...other}

        {...AdditionalAvatarProps}
      >
        {value}
      </Avatar>
    );
  }

  return (
    <div
      ref={ref}

      className={classNames([
        className,
        classes.root
      ])}
    >
      {children.map((item: any) => React.cloneElement(item, {
        className: classes.item,

        ...other,

        ...item.props
      }))}
    </div>
  );
});

export default AvatarGroup;
