import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';
import Type from '../Type';

const useStyle = style(theme => ({
  root: {
    cursor: 'default',
    overflow: 'hidden',

    '&$square': {
      borderRadius: [0, '!important']
    }
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

    TypeProps = {},

    children: children_,

    ...other
  } = props;

  let children = children_;

  if (image) {
    const imageProps: any = {
      style: {}
    };

    if (['text', 'outlined'].includes(props.version) && props.disabled) {
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

    if (props.size === 'small') typeProps.size = `${(30 * 0.54) / 16}rem`;
    else if (props.size === undefined || props.size === 'regular') typeProps.size = `${(40 * 0.54) / 16}rem`;
    else if (props.size === 'large') typeProps.size = `${(60 * 0.54) / 16}rem`;
    else if (!['small', 'regular', 'large'].includes(props.size)) typeProps.size = `${(props.size * 0.54) / 16}rem`;

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
        props.className,
        classes.root,
        square && classes.square
      ])}

      Component={props.Component || 'span'}

      version={props.version || 'filled'}

      tonal={props.tonal !== undefined ? props.tonal : false}

      elevation={props.elevation !== undefined ? props.elevation : 0}

      InteractionProps={props.InteractionProps || {
        background: false,
        wave: false
      }}

      icon
    >
      {children}
    </Button>
  );
});

export default Avatar;
