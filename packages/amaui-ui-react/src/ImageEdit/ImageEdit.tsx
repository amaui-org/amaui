import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiImageEdit' });

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
