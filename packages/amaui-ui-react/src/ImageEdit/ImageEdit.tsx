import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Line from '../Line';

import { staticClassName, image as imageMethod } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  image: {
    width: '100%',
    height: 'auto'
  },

  imageCopy: {
    width: '100%',
    height: 'auto'
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

  const {
    tonal = true,
    color = 'primary',

    image: image_,

    dynamicParent,

    className,

    SliderProps,
    TooltipProps,
    ImageCropProps,
    IconButtonProps,

    ...other
  } = props;

  const [image, setImage] = React.useState<HTMLCanvasElement>();
  const [imageCopy, setImageCopy] = React.useState<HTMLCanvasElement>();
  const [open, setOpen] = React.useState(false);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    image: React.useRef<any>(),
    dynamicParent: React.useRef<any>()
  };

  refs.image.current = image;

  refs.dynamicParent.current = dynamicParent;

  React.useEffect(() => {
    if (image_ !== image) {
      if (image_ instanceof HTMLCanvasElement) setImage(image_);
      else if (is('string', image_)) !refs.dynamicParent.current ? makeImage() : setTimeout(() => makeImage(image_), 140);
    }
  }, [image_]);

  const makeImage = async (value: any = image) => {
    const img = await imageMethod(value);

    const canvas = window.document.createElement('canvas');

    const rootRect = refs.root.current.getBoundingClientRect();

    const aspectRatioImg = img.width / img.height;

    // width being parent width
    img.width = rootRect.width;

    // height keep aspect ratio of the img for the height
    img.height = img.width / aspectRatioImg;

    canvas.width = img.width;

    canvas.height = img.height;

    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    // Image
    setImage(canvas);

    // Image copy
    const copy = window.document.createElement('canvas');

    copy.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

    setImageCopy(copy);
  };

  return (
    <Line
      ref={ref}

      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      Component={Surface}

      className={classNames([
        staticClassName('ImageEdit', theme) && [
          'AmauiImageEdit-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={0}

        direction='column'

        align='center'

        justify='center'

        className={classNames([
          staticClassName('ImageEdit', theme) && [
            'AmauiImageEdit-imageWrapper'
          ],

          classes.imageWrapper
        ])}
      >
        {!open ? image : imageCopy}
      </Line>

      <Line
        direction='row'

        align='center'
      >

      </Line>
    </Line>
  );
});

ImageEdit.displayName = 'AmauiImageEdit';

export default ImageEdit;
