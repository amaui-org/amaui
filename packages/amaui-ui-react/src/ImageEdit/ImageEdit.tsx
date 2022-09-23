import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiImageEdit' });

// To do

// 0. Edits are made on canvas copy
// and if saved, that canvas is drawImage to original canvas if no
// that canvas is, reverted to original canvas and in memory but not on the page

// state when any option is open to show copied canvas or not

// 1. Size edit
// 2. Quality edit
// 3. Image crop, with aspect ratios (1/1, 4/3, 16/9 and custom numeric text fields)
// 4. Filters (brightness, contrast, saturation, color filters)
// 4.1 Any custom filter somehow?
// 5. Buttons to save, or cancel the current edit

// 7. Render methods for both every icon, and slider
// 7.1. Or just a some icons

// On any atm edit update call onChange method with the version: 'datauri', or canvas

// Enter save, or Escape cancel the selection

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
