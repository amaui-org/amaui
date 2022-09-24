import React from 'react';

import { is, to, clamp, debounce, canvasCrop } from '@amaui/utils';
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
import ImageCrop from '../ImageCrop';

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
    position: 'relative',
    height: '400px',
    width: '100%',

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

  canvasWrapper: {
    position: 'relative',
    lineHeight: 0
  },

  image: {
    width: '100%',
    height: 'auto'
  },

  imageCopy: {
    width: '100%',
    height: 'auto'
  },

  imageCrop: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%'
  },

  meta: {
    width: '100%',
    padding: '12px 24px'
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

  action: {
    width: '100%',
    paddingTop: '16px'
  },

  slider: {
    width: '100%'
  }
}), { name: 'AmauiImageEdit' });

const IconMaterialDoneRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneRounded'
      short_name='Done'

      {...props}
    >
      <path d="M9.55 17.575Q9.35 17.575 9.175 17.512Q9 17.45 8.85 17.3L4.55 13Q4.275 12.725 4.287 12.287Q4.3 11.85 4.575 11.575Q4.85 11.3 5.275 11.3Q5.7 11.3 5.975 11.575L9.55 15.15L18.025 6.675Q18.3 6.4 18.738 6.4Q19.175 6.4 19.45 6.675Q19.725 6.95 19.725 7.387Q19.725 7.825 19.45 8.1L10.25 17.3Q10.1 17.45 9.925 17.512Q9.75 17.575 9.55 17.575Z" />
    </Icon>
  );
});

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

const IconMaterialClearAllRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllRounded'
      short_name='ClearAll'

      {...props}
    >
      <path d="M18 13H6Q5.575 13 5.287 12.712Q5 12.425 5 12Q5 11.575 5.287 11.287Q5.575 11 6 11H18Q18.425 11 18.712 11.287Q19 11.575 19 12Q19 12.425 18.712 12.712Q18.425 13 18 13ZM16 17H4Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H16Q16.425 15 16.712 15.287Q17 15.575 17 16Q17 16.425 16.712 16.712Q16.425 17 16 17ZM20 9H8Q7.575 9 7.287 8.712Q7 8.425 7 8Q7 7.575 7.287 7.287Q7.575 7 8 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9Z" />
    </Icon>
  );
});


// To do

// 3. Image crop, with aspect ratios (1/1, 4/3, 16/9 and custom numeric text fields)

// 4. Filters (brightness, contrast, saturation, color filters)
// 4.1 Any custom filter somehow?

// On update filter, find filter responsible for that update, and call it's update method with valueCopy, to make updates to it, along with refs.canvasMain.current, to update


const ImageEdit = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiImageEdit?.props?.default }), [props_]);

  const {
    tonal = true,
    color = 'primary',

    image,

    openDefault,
    openedOptionDefault,

    valueDefault,
    value: value_,

    valueCopyDefault,
    valueCopy: valueCopy_,

    type = 'image/jpeg',

    meta = true,

    filters = true,
    crop = true,
    resize: resize_ = true,
    quality: quality_ = true,

    resizeAspectRatio = true,

    renderOption,
    renderOptionClear,
    renderSave,
    renderCancel,
    renderFilter,
    renderSlider,
    renderResizeInput,

    IconSave = IconMaterialDoneRounded,
    IconCancel = IconMaterialCloseRounded,
    IconClear = IconMaterialClearAllRounded,
    IconCrop = IconMaterialCropRounded,
    IconFilters = IconMaterialTuneRounded,
    IconResize = IconMaterialAspectRatioRounded,
    IconQuality = IconMaterialHighQualityRounded,

    SliderProps: SliderProps_,
    TooltipProps: TooltipProps_,
    ImageCropProps: ImageCropProps_,
    IconButtonProps: IconButtonProps_,

    onChange: onChange_,
    onChangeCopy: onChangeCopy_,

    className,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState<HTMLCanvasElement>(valueDefault !== undefined ? valueDefault : value_);
  const [valueCopy, setValueCopy] = React.useState<HTMLCanvasElement>(valueCopyDefault !== undefined ? valueCopyDefault : valueCopy_);
  const [open, setOpen] = React.useState<any>(openDefault);
  const [openedOption, setOpenedOption] = React.useState<any>(openedOptionDefault);
  const [quality, setQuality] = React.useState<any>(100);
  const [resize, setResize] = React.useState<any>();
  const [selection, setSelection] = React.useState<any>();
  const [aspectRatio, setAspectRatio] = React.useState<any>();
  const [aspectRatioCustom, setAspectRatioCustom] = React.useState<any>();
  const [size, setSize] = React.useState('');

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>(),
    valueCopy: React.useRef<any>(),
    canvasMain: React.useRef<HTMLCanvasElement>(),
    open: React.useRef<HTMLCanvasElement>(),
    resizeAspectRatio: React.useRef<any>()
  };

  refs.value.current = value;

  refs.valueCopy.current = valueCopy;

  refs.open.current = open;

  refs.resizeAspectRatio.current = resizeAspectRatio;

  const updateSize = (valueNew: any = refs.canvasMain.current) => {
    const uri = valueNew.toDataURL('image/png');

    // Update size
    setSize(to(to(uri, 'byte-size'), 'size-format') as any);
  };

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (
        ['Escape'].includes(event.key) ||
        (['s', 'S'].includes(event.key) && event.metaKey) ||
        (['f', 'F'].includes(event.key) && event.metaKey && event.shiftKey) ||
        (['c', 'C'].includes(event.key) && event.metaKey && event.shiftKey) ||
        (['r', 'R'].includes(event.key) && (event.metaKey || event.shiftKey)) ||
        (['q', 'Q'].includes(event.key) && event.metaKey && event.shiftKey)
      ) {
        event.preventDefault();
      }

      switch (event.key) {
        case 's':
        case 'S':
          if (refs.open.current && event.metaKey) onSave();

          return;

        case 'f':
        case 'F':
          if (event.metaKey && event.shiftKey) openOption('filters');

          return;

        case 'c':
        case 'C':
          if (event.metaKey && event.shiftKey) openOption('crop');

          return;

        case 'r':
        case 'R':
          if (event.metaKey && !event.shiftKey) onReset();

          if (event.metaKey && event.shiftKey) openOption('resize');

          return;

        case 'q':
        case 'Q':
          if (event.metaKey && event.shiftKey) openOption('quality');

          return;

        case 'Escape':
          if (refs.open.current) onCancel();

          return;

        default:
          break;
      }
    };
    setInit(true);

    if (!refs.value.current) {
      if (image instanceof HTMLCanvasElement) onChange(image);
      else if (is('string', image)) makeImage(image);
    }

    window.addEventListener('keydown', method);

    return () => {
      // Clean up
      window.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    if (image instanceof HTMLCanvasElement) onChange(image);
    else if (is('string', image)) makeImage(image);
  }, [image]);

  React.useEffect(() => {
    const valueToUse = !open ? refs.value.current : refs.valueCopy.current;

    if (valueToUse) {
      refs.canvasMain.current.width = valueToUse.width;

      refs.canvasMain.current.height = valueToUse.height;

      refs.canvasMain.current?.getContext('2d').drawImage(valueToUse, 0, 0, valueToUse.width, valueToUse.height);

      updateSize();
    }
  }, [value, valueCopy, open]);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) onChange(value_);
    }
  }, [value_]);

  React.useEffect(() => {
    if (init) {
      if (valueCopy_ !== valueCopy) onChangeCopy(valueCopy_);
    }
  }, [valueCopy_]);

  const makeImage = async (valueNew: any = refs.value.current) => {
    const img = await imageMethod(valueNew);

    const canvas = window.document.createElement('canvas');

    canvas.width = img.width;

    canvas.height = img.height;

    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    // Image
    onChange(canvas);

    // Image copy
    const copy = window.document.createElement('canvas');

    copy.width = canvas.width;

    copy.height = canvas.height;

    copy.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

    onChangeCopy(copy);
  };

  const updateResize = debounce(async (width: number, height: number) => {
    // Update value copy
    const canvas = window.document.createElement('canvas');

    canvas.width = width;

    canvas.height = height;

    canvas.getContext('2d').drawImage(refs.value.current, 0, 0, width, height);

    // Value copy
    onChangeCopy(canvas);

    // Update the canvas value
    refs.canvasMain.current.width = width;

    refs.canvasMain.current.height = height;

    refs.canvasMain.current.getContext('2d').drawImage(value, 0, 0, width, height);

    // Update size
    updateSize();
  }, 140);

  const onChangeResize = async (valueNew: any, width_ = true) => {
    let width: number;
    let height: number;

    if (!refs.resizeAspectRatio.current) {
      if (width_) {
        width = +valueNew;
        height = resize?.[1];
      }
      else {
        width = resize?.[0];
        height = +valueNew;
      }
    }
    else {
      const aspectRatio_ = value?.width / value?.height;

      if (width_) {
        width = +valueNew;
        height = valueNew / aspectRatio_;
      }
      else {
        height = +valueNew;
        width = height * aspectRatio_;
      }
    }

    width = clamp(width, 0);

    height = clamp(height, 0);

    setResize([width, height]);

    await updateResize(width, height);
  };

  const updateQuality = debounce(async (valueNew: any) => {
    // Update copy value
    const uri = value.toDataURL('image/jpeg', valueNew / 100);

    const img = await imageMethod(uri);

    const canvas = window.document.createElement('canvas');

    canvas.width = img.width;

    canvas.height = img.height;

    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

    onChangeCopy(canvas);

    // Update the canvas value
    refs.canvasMain.current.width = canvas.width;

    refs.canvasMain.current.height = canvas.height;

    refs.canvasMain.current?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

    // Update size
    updateSize();
  }, 40);

  const onChangeQuality = async (valueNew: any) => {
    setQuality(valueNew);

    await updateQuality(valueNew);
  };

  const onChange = (valueNew: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onChangeCopy = (valueNew: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('valueCopy')) setValueCopy(valueNew);

    if (is('function', onChangeCopy_)) onChangeCopy_(valueNew);
  };

  const onReset = (imageReset = true, valueCopyReset = true) => {
    setOpen(false);
    setResize([value?.width, value?.height]);
    setQuality(100);
    setAspectRatio('');
    setAspectRatioCustom('');
    setSelection('');

    if (valueCopyReset) {
      const canvas = window.document.createElement('canvas');

      canvas.width = refs.value.current.width;

      canvas.height = refs.value.current.height;

      canvas.getContext('2d').drawImage(refs.value.current, 0, 0, refs.value.current.width, refs.value.current.height);

      onChangeCopy(canvas);
    }

    if (imageReset) makeImage(image);
  };

  const openOption = (valueNew: any) => {
    setOpenedOption(valueNew);

    if (open && openedOption === valueNew) {
      setOpen(false);

      onReset(false);
    }
    else if (!open) setOpen(true);
  };

  const onSave = () => {
    // Make value copy into value
    let canvas = window.document.createElement('canvas');

    canvas.width = refs.valueCopy.current.width;

    canvas.height = refs.valueCopy.current.height;

    canvas.getContext('2d').drawImage(refs.valueCopy.current, 0, 0, refs.valueCopy.current.width, refs.valueCopy.current.height);

    if (openedOption === 'crop' && selection) {
      // Crop the canvas
      canvas.width = selection.width;

      canvas.height = selection.height;

      canvas = canvasCrop(refs.valueCopy.current, selection.left, selection.top, selection.width, selection.height);
    }

    // Update the main canvas value
    refs.canvasMain.current.width = canvas.width;

    refs.canvasMain.current.height = canvas.height;

    refs.canvasMain.current?.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height);

    // Update value
    onChange(canvas);

    const canvasCopy = window.document.createElement('canvas');

    canvasCopy.width = canvas.width;

    canvasCopy.height = canvas.height;

    canvasCopy.getContext('2d').drawImage(canvas, 0, 0, canvasCopy.width, canvasCopy.height);

    // Update value copy
    onChangeCopy(canvasCopy);

    // Reset
    onReset(false, false);
  };

  const onCancel = () => {
    // Reset to unopen
    onReset(false);

    // Make value copy into value
    const canvas = window.document.createElement('canvas');

    canvas.width = refs.value.current.width;

    canvas.height = refs.value.current.height;

    canvas.getContext('2d').drawImage(refs.value.current, 0, 0, refs.value.current.width, refs.value.current.height);

    onChangeCopy(canvas);

    // Update the main canvas value
    refs.canvasMain.current.width = refs.value.current?.width;

    refs.canvasMain.current.height = refs.value.current?.height;

    refs.canvasMain.current?.getContext('2d').drawImage(refs.value.current, 0, 0, refs.value.current.width, refs.value.current.height);
  };

  const ImageCropProps = {
    gridLines: true,

    ...ImageCropProps_
  };

  const TooltipProps = {
    position: 'bottom',

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
    resize_ && { label: 'Resize', value: 'resize', Icon: IconResize },
    quality_ && { label: 'Quality', value: 'quality', Icon: IconQuality }
  ].filter(Boolean);

  const MetaTypeProps = {
    version: 'b3'
  };

  const rect = refs.root.current?.getBoundingClientRect();

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
        <div
          className={classNames([
            staticClassName('ScreenCapture', theme) && [
              'AmauiScreenCapture-canvas-wrapper'
            ],

            classes.canvasWrapper
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
          />

          {open && openedOption === 'crop' && (
            <ImageCrop
              image={valueCopy}

              onSelectorChange={(selector: any) => setSelection(selector)}

              {...ImageCropProps}

              className={classNames([
                staticClassName('ScreenCapture', theme) && [
                  'AmauiScreenCapture-image-crop'
                ],

                ImageCropProps.className,
                classes.imageCrop
              ])}

              style={{
                width: rect?.width
              }}
            />
          )}
        </div>
      </Line>

      {(filters || crop || resize_ || quality_) && <>
        <Expand
          in={!!open}

          style={{
            width: '100%'
          }}
        >
          <Line
            gap={0}

            direction='column'

            className={classNames([
              staticClassName('ImageEdit', theme) && [
                'AmauiImageEdit-option'
              ],

              classes.option
            ])}
          >
            {openedOption === 'resize' && (
              <Line
                direction='row'

                align='center'

                justify='center'

                style={{
                  width: '100%'
                }}
              >
                {is('function', renderResizeInput) ? renderResizeInput(value, valueCopy, resize, onChangeResize, 'width') : (
                  <NumericTextField
                    tonal={tonal}

                    label='Width'

                    color='default'

                    version='text'

                    size='small'

                    min={1}

                    max={value?.width}

                    valueDefault={value?.width}

                    value={resize?.[0]}

                    onChange={(valueNew: string) => onChangeResize(valueNew)}
                  />
                )}

                {is('function', renderResizeInput) ? renderResizeInput(value, valueCopy, resize, onChangeResize, 'height') : (
                  <NumericTextField
                    tonal={tonal}

                    label='Height'

                    color='default'

                    version='text'

                    size='small'

                    min={1}

                    max={value?.height}

                    valueDefault={value?.height}

                    value={resize?.[1]}

                    onChange={(valueNew: string) => onChangeResize(valueNew, false)}
                  />
                )}
              </Line>
            )}

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

                  marks={[
                    { value: 1 },
                    { value: 50 },
                    { value: 100 }
                  ]}

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

                  onChange={(valueNew: string) => onChangeQuality(+valueNew)}

                  className={classNames([
                    staticClassName('ImageEdit', theme) && [
                      'AmauiImageEdit-optionInput'
                    ],

                    classes.optionInput
                  ])}

                  style={{
                    width: 34
                  }}
                />
              </Line>
            )}

            <Line
              gap={1}

              direction='row'

              align='center'

              justify='center'

              className={classNames([
                staticClassName('ImageEdit', theme) && [
                  'AmauiImageEdit-action'
                ],

                classes.action
              ])}
            >
              {is('function', renderSave) ? renderSave(onSave) : (
                <Tooltip
                  label='Save'

                  {...TooltipProps}
                >
                  <IconButton
                    version='outlined'

                    onClick={onSave}

                    {...IconButtonProps}
                  >
                    <IconSave />
                  </IconButton>
                </Tooltip>
              )}

              {is('function', renderCancel) ? renderCancel(onSave) : (
                <Tooltip
                  label='Cancel'

                  {...TooltipProps}
                >
                  <IconButton
                    version='outlined'

                    onClick={onCancel}

                    {...IconButtonProps}
                  >
                    <IconCancel />
                  </IconButton>
                </Tooltip>
              )}
            </Line>
          </Line>

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

                    selected={open && openedOption === item.value}

                    onClick={() => openOption(item.value)}

                    {...IconButtonProps}
                  >
                    <item.Icon />
                  </IconButton>
                </Tooltip>
              )
            ))}

            {is('function', renderOptionClear) ? renderOptionClear(onReset) : (
              <Tooltip
                label='Reset'

                {...TooltipProps}
              >
                <IconButton
                  version='text'

                  onClick={onReset}

                  {...IconButtonProps}
                >
                  <IconClear />
                </IconButton>
              </Tooltip>
            )}
          </Line>
        </Line>
      </>}

      {/* Meta */}
      {meta && value && <>
        <Divider
          color='inherit'

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-divider'
            ],

            classes.divider
          ])}
        />

        <Line
          gap={1}

          direction='row'

          align='center'

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-meta'
            ],

            classes.meta
          ])}
        >
          <Type
            {...MetaTypeProps}
          >
            Dimensions: {(!open ? value : valueCopy)?.width}x{(!open ? value : valueCopy)?.height}
          </Type>

          <Type
            {...MetaTypeProps}
          >
            ·
          </Type>

          <Type
            {...MetaTypeProps}
          >
            Size: {size}
          </Type>
        </Line>
      </>}
    </Line>
  );
});

ImageEdit.displayName = 'AmauiImageEdit';

export default ImageEdit;
