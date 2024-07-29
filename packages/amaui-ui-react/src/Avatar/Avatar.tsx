import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ButtonElement from '../Button';
import TypeElement from '../Type';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';
import { IElevation, IPropsAny } from '../types';
import { stringToColor } from '@amaui/utils';

const useStyle = styleMethod(theme => ({
  root: {
    '&.amaui-Button-root': {
      cursor: 'default',
      overflow: 'hidden',
      borderRadius: theme.methods.shape.radius.value(40, 'px')
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

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = false,
    version = 'filled',
    size = 'regular',
    color: color_ = 'auto',

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

  const { classes } = useStyle();

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

    if (size === 'small') typeProps.size = '0.75rem';
    else if (size === 'regular') typeProps.size = '1rem';
    else if (size === 'large') typeProps.size = '1.25rem';
    else if (!['small', 'regular', 'large'].includes(size)) typeProps.size = `${(size * 0.4) / 16}rem`;

    children = (
      <Type
        {...typeProps}

        {...TypeProps}
      >
        {children}
      </Type>
    );
  }

  const color = color_ === 'auto' ? stringToColor(children_) : color_;

  return (
    <Button
      ref={ref}

      tonal={tonal}

      color={color}

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
          'amaui-Avatar-root',
          `amaui-Avatar-version-${version}`,
          `amaui-Avatar-size-${size}`
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
