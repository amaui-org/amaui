import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Button from '../Button';
import Type from '../Type';
import { IButton } from '../Button/Button';

import { staticClassName, TElevation, TPropsAny } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    cursor: 'default',
    overflow: 'hidden'
  },

  square: {
    borderRadius: '0px'
  },

  imageWrapper: {
    display: 'inline-flex',
    width: '1em',
    height: '1em'
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}), { name: 'AmauiAvatar' });

export interface IAvatar extends Omit<IButton, 'elevation'> {
  image?: string;
  alt?: string;
  square?: boolean;
  elevation?: TElevation;

  TypeProps?: TPropsAny;
  InteractionProps?: TPropsAny;
}

const Avatar = React.forwardRef((props_: IAvatar, ref) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAvatar?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = false,
    version = 'filled',
    size = 'regular',

    image,
    alt,
    square,
    elevation = 0,
    disabled,

    TypeProps,
    InteractionProps,

    Component = 'span',

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
      <span
        className={classes.imageWrapper}
      >
        <img
          className={classes.image}

          src={image}

          alt={alt}

          {...imageProps}
        />
      </span>
    );
  }
  else if (!React.isValidElement(children)) {
    const typeProps: any = { version: 't1' };

    if (size === 'small') typeProps.size = `${(30 * 0.54) / 16}rem`;
    else if (size === 'regular') typeProps.size = `${(40 * 0.54) / 16}rem`;
    else if (size === 'large') typeProps.size = `${(50 * 0.54) / 16}rem`;
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

      tonal={tonal}

      elevation={elevation}

      version={version}

      size={size}

      disabled={disabled}

      icon

      InteractionProps={{
        background: false,
        wave: false,

        ...InteractionProps
      }}

      Component={Component}

      className={classNames([
        staticClassName('Avatar', theme) && [
          'AmauiAvatar-root',
          image && 'AmauiAvatar-image',
          square && 'AmauiAvatar-square'
        ],

        className,
        classes.root,
        square && classes.square
      ])}

      {...other}
    >
      {children}
    </Button>
  );
});

Avatar.displayName = 'AmauiAvatar';

export default Avatar;
