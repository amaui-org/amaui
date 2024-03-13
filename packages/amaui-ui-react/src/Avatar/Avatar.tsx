import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';
import Type from '../Type';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';
import { IElevation, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    '&.amaui-Button-root': {
      cursor: 'default',
      overflow: 'hidden',
      borderRadius: '50%'
    }
  },

  square: {
    borderRadius: '0px'
  },

  imageWrapper: {
    display: 'inline-flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    objectFit: 'cover'
  }
}), { name: 'amaui-Avatar' });

export interface IAvatar extends Omit<IButton, 'elevation'> {
  image?: string;
  alt?: string;
  square?: boolean;
  elevation?: IElevation;

  TypeProps?: IPropsAny;
  InteractionProps?: IPropsAny;
}

const Avatar: React.FC<IAvatar> = React.forwardRef((props_, ref) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAvatar?.props?.default, ...props_ }), [props_]);

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

    Component = 'button',

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

      elevation={elevation as any}

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
          'amaui-Avatar-root'
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

Avatar.displayName = 'amaui-Avatar';

export default Avatar;
