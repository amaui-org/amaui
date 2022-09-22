import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiImageEdit' });

// To do

// options to choose common aspect ratios
// with aspect ratio and each with optional width and height

// and 2 numeric text fields small to choose custom aspect ratio

// Example with default selector width, height, top, left
// min selector width, min selector height
// max selector width and max selector height
// min and max values are clamp value, 0, root width, root height y value y

// Buttons to save or cancel
// both buttons any component, React.cloneElement to add onClick to the buttons value y

// Save
// on save update image as new canvas
// and call onChange method with new either datauri or canvas, depends on version

// Escape, cancel the selection

const ImageEdit = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiImageEdit?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('ImageEdit', theme) && [
          'AmauiImageEdit-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >

    </div>
  );
});

ImageEdit.displayName = 'AmauiImageEdit';

export default ImageEdit;
