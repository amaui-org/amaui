import React from 'react';

import { is, clamp } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Expand from '../Expand';
import Divider from '../Divider';
import Surface from '../Surface';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import Slider from '../Slider';
import NumericTextField from '../NumericTextField';
import Type from '../Type';
import Icon from '../Icon';
import Line from '../Line';

import { staticClassName, image as imageMethod } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  option: {
    width: '100%',
    padding: '16px 24px'
  },

  options: {
    width: '100%',
    overflowX: 'auto',
    padding: '16px 24px'
  },

  canvas: {
    width: '100%',
    height: 'auto',
    zIndex: 1
  },

  divider: {
    '&.AmauiDivider-root': {
      margin: '0px'
    }
  },

  imageWrapper: {
    height: '400px',

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      background: 'currentColor',
      zIndex: '0',
      opacity: '0.94'
    }
  },

  image: {
    width: '100%',
    height: 'auto'
  },

  imageCopy: {
    width: '100%',
    height: 'auto'
  },

  optionInput: {
    '& .AmauiTextField-inputWrapper': {
      padding: '0px',
      height: 'auto'
    },

    '& .AmauiTextField-input': {
      textAlign: 'center'
    }
  },

  slider: {
    width: '100%'
  }
}), { name: 'AmauiImageEdit' });

const IconMaterialCloseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseRounded'
      short_name='Close'

      {...props}
    >
      <path d="M12 13.4 7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L10.6 12L5.7 7.1Q5.425 6.825 5.425 6.4Q5.425 5.975 5.7 5.7Q5.975 5.425 6.4 5.425Q6.825 5.425 7.1 5.7L12 10.6L16.9 5.7Q17.175 5.425 17.6 5.425Q18.025 5.425 18.3 5.7Q18.575 5.975 18.575 6.4Q18.575 6.825 18.3 7.1L13.4 12L18.3 16.9Q18.575 17.175 18.575 17.6Q18.575 18.025 18.3 18.3Q18.025 18.575 17.6 18.575Q17.175 18.575 16.9 18.3Z" />
    </Icon>
  );
});

const IconMaterialTuneRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneRounded'
      short_name='Tune'

      {...props}
    >
      <path d="M4 19Q3.575 19 3.288 18.712Q3 18.425 3 18Q3 17.575 3.288 17.288Q3.575 17 4 17H8Q8.425 17 8.713 17.288Q9 17.575 9 18Q9 18.425 8.713 18.712Q8.425 19 8 19ZM4 7Q3.575 7 3.288 6.713Q3 6.425 3 6Q3 5.575 3.288 5.287Q3.575 5 4 5H12Q12.425 5 12.713 5.287Q13 5.575 13 6Q13 6.425 12.713 6.713Q12.425 7 12 7ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V16Q11 15.575 11.288 15.287Q11.575 15 12 15Q12.425 15 12.713 15.287Q13 15.575 13 16V17H20Q20.425 17 20.712 17.288Q21 17.575 21 18Q21 18.425 20.712 18.712Q20.425 19 20 19H13V20Q13 20.425 12.713 20.712Q12.425 21 12 21ZM8 15Q7.575 15 7.287 14.712Q7 14.425 7 14V13H4Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H7V10Q7 9.575 7.287 9.287Q7.575 9 8 9Q8.425 9 8.713 9.287Q9 9.575 9 10V14Q9 14.425 8.713 14.712Q8.425 15 8 15ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM16 9Q15.575 9 15.288 8.712Q15 8.425 15 8V4Q15 3.575 15.288 3.287Q15.575 3 16 3Q16.425 3 16.712 3.287Q17 3.575 17 4V5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7H17V8Q17 8.425 16.712 8.712Q16.425 9 16 9Z" />
    </Icon>
  );
});

const IconMaterialCropRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRounded'
      short_name='Crop'

      {...props}
    >
      <path d="M17 15V7Q17 7 17 7Q17 7 17 7H9V5H17Q17.825 5 18.413 5.588Q19 6.175 19 7V15ZM18 23Q17.575 23 17.288 22.712Q17 22.425 17 22V19H7Q6.175 19 5.588 18.413Q5 17.825 5 17V7H2Q1.575 7 1.288 6.713Q1 6.425 1 6Q1 5.575 1.288 5.287Q1.575 5 2 5H5V2Q5 1.575 5.287 1.287Q5.575 1 6 1Q6.425 1 6.713 1.287Q7 1.575 7 2V17Q7 17 7 17Q7 17 7 17H22Q22.425 17 22.712 17.288Q23 17.575 23 18Q23 18.425 22.712 18.712Q22.425 19 22 19H19V22Q19 22.425 18.712 22.712Q18.425 23 18 23Z" />
    </Icon>
  );
});


const IconMaterialAspectRatioRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioRounded'
      short_name='AspectRatio'

      {...props}
    >
      <path d="M6 12Q6.425 12 6.713 11.712Q7 11.425 7 11V9H9.025Q9.45 9 9.725 8.712Q10 8.425 10 8Q10 7.575 9.713 7.287Q9.425 7 9 7H6Q5.575 7 5.287 7.287Q5 7.575 5 8V11.025Q5 11.45 5.287 11.725Q5.575 12 6 12ZM15 17H18Q18.425 17 18.712 16.712Q19 16.425 19 16V12.975Q19 12.55 18.712 12.275Q18.425 12 18 12Q17.575 12 17.288 12.287Q17 12.575 17 13V15H14.975Q14.55 15 14.275 15.287Q14 15.575 14 16Q14 16.425 14.288 16.712Q14.575 17 15 17ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z" />
    </Icon>
  );
});

const IconMaterialHighQualityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityRounded'
      short_name='HighQuality'

      {...props}
    >
      <path d="M6.75 15Q7.075 15 7.287 14.787Q7.5 14.575 7.5 14.25V13H9.5V14.25Q9.5 14.575 9.713 14.787Q9.925 15 10.25 15Q10.575 15 10.788 14.787Q11 14.575 11 14.25V9.75Q11 9.425 10.788 9.212Q10.575 9 10.25 9Q9.925 9 9.713 9.212Q9.5 9.425 9.5 9.75V11.5H7.5V9.75Q7.5 9.425 7.287 9.212Q7.075 9 6.75 9Q6.425 9 6.213 9.212Q6 9.425 6 9.75V14.25Q6 14.575 6.213 14.787Q6.425 15 6.75 15ZM15.5 16.5Q15.825 16.5 16.038 16.288Q16.25 16.075 16.25 15.75V15H17Q17.425 15 17.712 14.712Q18 14.425 18 14V10Q18 9.575 17.712 9.287Q17.425 9 17 9H14Q13.575 9 13.288 9.287Q13 9.575 13 10V14Q13 14.425 13.288 14.712Q13.575 15 14 15H14.75V15.75Q14.75 16.075 14.963 16.288Q15.175 16.5 15.5 16.5ZM14.5 13.5Q14.5 13.5 14.5 13.5Q14.5 13.5 14.5 13.5V10.5Q14.5 10.5 14.5 10.5Q14.5 10.5 14.5 10.5H16.5Q16.5 10.5 16.5 10.5Q16.5 10.5 16.5 10.5V13.5Q16.5 13.5 16.5 13.5Q16.5 13.5 16.5 13.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z" />
    </Icon>
  );
});

// To do

// Quality

// Enter save, or Escape cancel the selection

// 1. Size edit
// 2. Quality edit
// 3. Image crop, with aspect ratios (1/1, 4/3, 16/9 and custom numeric text fields)
// 4. Filters (brightness, contrast, saturation, color filters)
// 4.1 Any custom filter somehow?
// 5. Buttons to save, or cancel the current edit

// 7. Render methods for both every icon, and slider
// 7.1. Or just a some icons

// On any atm edit update call onChange method with the version: 'datauri', or canvas

// On any image update, call onChange method

const ImageEdit = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiImageEdit?.props?.default }), [props_]);

  const {
    tonal = true,
    color = 'primary',

    image: image_,

    filters = true,
    crop = true,
    resize = true,
    quality: quality_ = true,

    renderOption,
    renderOptionClear,
    renderFilter,
    renderSlider,

    IconClear = IconMaterialCloseRounded,
    IconCrop = IconMaterialCropRounded,
    IconFilters = IconMaterialTuneRounded,
    IconResize = IconMaterialAspectRatioRounded,
    IconQuality = IconMaterialHighQualityRounded,

    SliderProps: SliderProps_,
    TooltipProps: TooltipProps_,
    ImageCropProps: ImageCropProps_,
    IconButtonProps: IconButtonProps_,

    className,

    ...other
  } = props;

  const [image, setImage] = React.useState<HTMLCanvasElement>();
  const [imageCopy, setImageCopy] = React.useState<HTMLCanvasElement>();
  const [open, setOpen] = React.useState<any>();
  const [openedOption, setOpenedOption] = React.useState<any>();
  const [quality, setQuality] = React.useState<any>(100);
  const [aspectRatio, setAspectRatio] = React.useState<any>();
  const [aspectRatioCustom, setAspectRatioCustom] = React.useState<any>();

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    image: React.useRef<any>(),
    canvasMain: React.useRef<HTMLCanvasElement>()
  };

  refs.image.current = image;

  React.useEffect(() => {
    if (image_ !== image) {
      if (image_ instanceof HTMLCanvasElement) setImage(image_);
      else if (is('string', image_)) makeImage(image_);
    }
  }, [image_]);

  React.useEffect(() => {
    const imageToUse = !open ? image : imageCopy;

    if (imageToUse) refs.canvasMain.current?.getContext('2d').drawImage(imageToUse, 0, 0, imageToUse.width, imageToUse.height);
  }, [image, open]);

  const makeImage = async (value: any = image) => {
    const img = await imageMethod(value);

    const canvas = window.document.createElement('canvas');

    img.width = img.width;

    img.height = img.height;

    canvas.width = img.width;

    canvas.height = img.height;

    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    // Image
    setImage(canvas);

    // Image copy
    const copy = window.document.createElement('canvas');

    copy.width = canvas.width;

    copy.height = canvas.height;

    copy.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

    setImageCopy(copy);
  };

  const onChangeQuality = (value: any) => {
    setQuality(value);

    // Update copy image
  };

  const clear = () => {
    setOpen(false);
    setQuality(1);
    setAspectRatio('');
    setAspectRatioCustom('');

    makeImage(image_);
  };

  const openOption = (value: any) => {
    setOpenedOption(value);

    if (open && openedOption === value) setOpen(false);
    else if (!open) setOpen(true);
  };

  const TooltipProps = {
    position: 'top',

    ...TooltipProps_
  };

  const IconButtonProps = {
    tonal,
    color: 'inherit',

    ...IconButtonProps_
  };

  const SliderProps = {
    tonal: false,
    color: 'default',

    ...SliderProps_
  };

  const options = [
    filters && { label: 'Filters', value: 'filters', Icon: IconFilters },
    crop && { label: 'Crop', value: 'crop', Icon: IconCrop },
    resize && { label: 'Resize', value: 'resize', Icon: IconResize },
    quality_ && { label: 'Quality', value: 'quality', Icon: IconQuality }
  ].filter(Boolean);

  return (
    <Line
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

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
        <canvas
          ref={refs.canvasMain}

          className={classNames([
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-canvas',
              'AmauiScreenCapture-canvas-main'
            ],

            classes.canvas,
            classes.canvas_main
          ])}

          width={(!open ? image : imageCopy)?.width || 0}

          height={(!open ? image : imageCopy)?.height || 0}
        />
      </Line>

      {(filters || crop || resize || quality_) && <>
        <Divider
          color='inherit'

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-divider'
            ],

            classes.divider
          ])}
        />

        <Expand
          in={!!open}

          style={{
            width: '100%'
          }}
        >
          <div
            className={classNames([
              staticClassName('ImageEdit', theme) && [
                'AmauiImageEdit-option'
              ],

              classes.option
            ])}
          >
            {openedOption === 'quality' && (
              <Line
                gap={3}

                direction='row'

                align='center'

                style={{
                  width: '100%'
                }}
              >
                <Slider
                  valueDefault={quality}

                  value={quality}

                  min={1}

                  max={100}

                  precision={1}

                  tooltip

                  onChange={onChangeQuality}

                  {...SliderProps}

                  className={classNames([
                    staticClassName('ImageEdit', theme) && [
                      'AmauiImageEdit-slider'
                    ],

                    SliderProps.className,
                    classes.slider
                  ])}
                />

                <NumericTextField
                  tonal={tonal}

                  color='default'

                  version='text'

                  size='small'

                  min={1}

                  max={100}

                  value={quality}

                  increment={false}

                  decrement={false}

                  onChange={(value: string) => setQuality(clamp(+value, 1, 100))}

                  className={classNames([
                    staticClassName('ImageEdit', theme) && [
                      'AmauiImageEdit-optionInput'
                    ],

                    classes.optionInput
                  ])}

                  style={{
                    width: 25,
                    textAlign: 'center'
                  }}
                />
              </Line>
            )}
          </div>

          <Divider
            color='inherit'

            className={classNames([
              staticClassName('ImageEdit', theme) && [
                'AmauiImageEdit-divider'
              ],

              classes.divider
            ])}
          />
        </Expand>

        <Line
          direction='column'

          align='center'

          justify='center'

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-options'
            ],

            classes.options
          ])}
        >
          <Line
            gap={1}

            direction='row'

            justify='flex-start'
          >
            {options.map((item: any, index: number) => (
              is('function', renderOption) ? renderOption(item, open === item.value, openOption) : (
                <Tooltip
                  key={index}

                  label={item.label}

                  {...TooltipProps}
                >
                  <IconButton
                    version='outlined'

                    selected={open === item.value}

                    onClick={() => openOption(item.value)}

                    {...IconButtonProps}
                  >
                    <item.Icon />
                  </IconButton>
                </Tooltip>
              )
            ))}

            {is('function', renderOptionClear) ? renderOptionClear(clear) : (
              <Tooltip
                label='Clear'

                {...TooltipProps}
              >
                <IconButton
                  version='text'

                  onClick={clear}

                  {...IconButtonProps}
                >
                  <IconClear />
                </IconButton>
              </Tooltip>
            )}
          </Line>
        </Line>
      </>}
    </Line>
  );
});

ImageEdit.displayName = 'AmauiImageEdit';

export default ImageEdit;
