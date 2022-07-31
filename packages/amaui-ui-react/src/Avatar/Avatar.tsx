import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';
import Type from '../Type';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    cursor: 'default',
    overflow: 'hidden'
  },

  square: {
    borderRadius: 0
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}), { name: 'AmauiAvatar' });

const Avatar = React.forwardRef((props_: any, ref) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAvatar?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    image,
    alt,
    square,
    tonal = false,
    version = 'filled',
    size = 'regular',
    elevation = 0,
    disabled,

    Component = 'span',
    TypeProps = {},
    InteractionProps = {
      background: false,
      wave: false
    },

    className,

    children: children_,

    ...other
  } = props;

  let children = children_;

  if (image) {
    const imageProps: any = {
      style: {}
    };

    if (['text', 'outlined'].includes(version) && disabled) {
      imageProps.style.opacity = theme.palette.visual_contrast.default.opacity[theme.palette.light ? 'disabled' : 'active'];
    }

    children = (
      <img
        className={classes.image}

        src={image}
        alt={alt}

        {...imageProps}
      />
    );
  }
  else if (!React.isValidElement(children)) {
    const typeProps: any = { version: 't1' };

    if (size === 'small') typeProps.size = `${(30 * 0.54) / 16}rem`;
    else if (size === undefined || size === 'regular') typeProps.size = `${(40 * 0.54) / 16}rem`;
    else if (size === 'large') typeProps.size = `${(60 * 0.54) / 16}rem`;
    else if (!['small', 'regular', 'large'].includes(size)) typeProps.size = `${(size * 0.54) / 16}rem`;

    children = (
      <Type
        {...typeProps}

        {...TypeProps}
      >
        {children}
      </Type>
    );
  }

  return (
    <Button
      ref={ref}

      {...other}

      className={classNames([
        staticClassName('Avatar', theme) && [
          'AmauiAvatar-root',
          square && 'AmauiAvatar-square'
        ],

        className,
        classes.root,
        square && classes.square
      ])}

      Component={Component}

      version={version}

      tonal={tonal}

      elevation={elevation}

      InteractionProps={InteractionProps}

      size={size}

      disabled={disabled}

      icon
    >
      {children}
    </Button>
  );
});

export default Avatar;
