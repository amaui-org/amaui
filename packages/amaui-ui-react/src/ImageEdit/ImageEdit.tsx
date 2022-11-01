import React from 'react';

import { is, to, clamp, debounce, canvasCrop, download as downloadMethod } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { TMethod } from '@amaui/models';

import Type from '../Type';
import Expand from '../Expand';
import Divider from '../Divider';
import Surface from '../Surface';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import Slider from '../Slider';
import NumericTextField from '../NumericTextField';
import ImageCrop from '../ImageCrop';
import Chip from '../Chip';
import Icon from '../Icon';
import Line from '../Line';

import { staticClassName, image as imageMethod, canvasBrightness, canvasContrast, canvasSaturation, canvasFade, canvasInvert, canvasOldPhoto } from '../utils';

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

  inputs: {
    width: '100%'
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
    width: '100% !important',
    height: '100% !important'
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

  filters: {
    width: '100%',
    overflowX: 'auto',

    '& > *': {
      flex: '0 0 auto'
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

const IconMaterialDownloadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadRounded'
      short_name='Download'

      {...props}
    >
      <path d="M12 15.575Q11.8 15.575 11.625 15.512Q11.45 15.45 11.3 15.3L7.7 11.7Q7.425 11.425 7.425 11Q7.425 10.575 7.7 10.3Q7.975 10.025 8.412 10.012Q8.85 10 9.125 10.275L11 12.15V5Q11 4.575 11.288 4.287Q11.575 4 12 4Q12.425 4 12.713 4.287Q13 4.575 13 5V12.15L14.875 10.275Q15.15 10 15.588 10.012Q16.025 10.025 16.3 10.3Q16.575 10.575 16.575 11Q16.575 11.425 16.3 11.7L12.7 15.3Q12.55 15.45 12.375 15.512Q12.2 15.575 12 15.575ZM6 20Q5.175 20 4.588 19.413Q4 18.825 4 18V16Q4 15.575 4.287 15.287Q4.575 15 5 15Q5.425 15 5.713 15.287Q6 15.575 6 16V18Q6 18 6 18Q6 18 6 18H18Q18 18 18 18Q18 18 18 18V16Q18 15.575 18.288 15.287Q18.575 15 19 15Q19.425 15 19.712 15.287Q20 15.575 20 16V18Q20 18.825 19.413 19.413Q18.825 20 18 20Z" />
    </Icon>
  );
});

const IconMaterialCloudRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudRounded'
      short_name='Cloud'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.875 6.85 7.75 5.425Q9.625 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM6.5 18H18.5Q19.55 18 20.275 17.275Q21 16.55 21 15.5Q21 14.45 20.275 13.725Q19.55 13 18.5 13H17V11Q17 8.925 15.538 7.462Q14.075 6 12 6Q9.925 6 8.463 7.462Q7 8.925 7 11H6.5Q5.05 11 4.025 12.025Q3 13.05 3 14.5Q3 15.95 4.025 16.975Q5.05 18 6.5 18Z" />
    </Icon>
  );
});

const IconMaterialWaterDropRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropRounded'
      short_name='WaterDrop'

      {...props}
    >
      <path d="M12 22Q8.825 22 6.413 19.788Q4 17.575 4 13.8Q4 11.425 5.8 8.65Q7.6 5.875 11.25 2.65Q11.4 2.525 11.6 2.45Q11.8 2.375 12 2.375Q12.2 2.375 12.4 2.45Q12.6 2.525 12.75 2.65Q16.4 5.875 18.2 8.65Q20 11.425 20 13.8Q20 17.575 17.587 19.788Q15.175 22 12 22ZM12 20Q14.525 20 16.262 18.275Q18 16.55 18 13.8Q18 12.025 16.525 9.737Q15.05 7.45 12 4.65Q8.95 7.45 7.475 9.737Q6 12.025 6 13.8Q6 16.55 7.737 18.275Q9.475 20 12 20ZM12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8ZM12.275 19Q12.575 18.975 12.788 18.763Q13 18.55 13 18.25Q13 17.9 12.775 17.688Q12.55 17.475 12.2 17.5Q11.175 17.575 10.025 16.938Q8.875 16.3 8.575 14.625Q8.525 14.35 8.312 14.175Q8.1 14 7.825 14Q7.475 14 7.25 14.262Q7.025 14.525 7.1 14.875Q7.525 17.15 9.1 18.125Q10.675 19.1 12.275 19Z" />
    </Icon>
  );
});

const IconMaterialFlakyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlakyRounded'
      short_name='Flaky'

      {...props}
    >
      <path d="M14.075 15.475 16.025 13.525Q16.25 13.3 16.55 13.3Q16.85 13.3 17.075 13.525Q17.3 13.75 17.3 14.05Q17.3 14.35 17.075 14.575L14.575 17.075Q14.35 17.3 14.05 17.3Q13.75 17.3 13.525 17.075L12.175 15.725Q11.95 15.5 11.95 15.188Q11.95 14.875 12.175 14.65Q12.4 14.425 12.7 14.425Q13 14.425 13.225 14.65ZM8.75 9.8 9.625 10.7Q9.85 10.925 10.15 10.925Q10.45 10.925 10.675 10.7Q10.9 10.475 10.9 10.162Q10.9 9.85 10.675 9.625L9.825 8.75L10.7 7.875Q10.925 7.65 10.925 7.35Q10.925 7.05 10.7 6.825Q10.475 6.6 10.163 6.6Q9.85 6.6 9.625 6.825L8.775 7.675L7.875 6.8Q7.65 6.575 7.35 6.575Q7.05 6.575 6.825 6.8Q6.6 7.025 6.6 7.337Q6.6 7.65 6.825 7.875L7.7 8.725L6.8 9.625Q6.575 9.85 6.575 10.15Q6.575 10.45 6.8 10.675Q7.025 10.9 7.338 10.9Q7.65 10.9 7.875 10.675ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 10.35 19.375 8.9Q18.75 7.45 17.65 6.35L6.35 17.65Q7.45 18.75 8.9 19.375Q10.35 20 12 20Z" />
    </Icon>
  );
});

const IconMaterialWbSunnyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbSunnyRounded'
      short_name='WbSunny'

      {...props}
    >
      <path d="M12 4Q11.575 4 11.288 3.712Q11 3.425 11 3V2Q11 1.575 11.288 1.287Q11.575 1 12 1Q12.425 1 12.713 1.287Q13 1.575 13 2V3Q13 3.425 12.713 3.712Q12.425 4 12 4ZM12 23Q11.575 23 11.288 22.712Q11 22.425 11 22V21Q11 20.575 11.288 20.288Q11.575 20 12 20Q12.425 20 12.713 20.288Q13 20.575 13 21V22Q13 22.425 12.713 22.712Q12.425 23 12 23ZM21 13Q20.575 13 20.288 12.712Q20 12.425 20 12Q20 11.575 20.288 11.287Q20.575 11 21 11H22Q22.425 11 22.712 11.287Q23 11.575 23 12Q23 12.425 22.712 12.712Q22.425 13 22 13ZM2 13Q1.575 13 1.288 12.712Q1 12.425 1 12Q1 11.575 1.288 11.287Q1.575 11 2 11H3Q3.425 11 3.713 11.287Q4 11.575 4 12Q4 12.425 3.713 12.712Q3.425 13 3 13ZM18 6Q17.725 5.725 17.725 5.325Q17.725 4.925 18 4.6L18.35 4.225Q18.625 3.925 19.05 3.925Q19.475 3.925 19.775 4.225Q20.075 4.525 20.088 4.962Q20.1 5.4 19.775 5.675L19.4 6.025Q19.125 6.3 18.712 6.3Q18.3 6.3 18 6ZM4.225 19.775Q3.925 19.475 3.913 19.038Q3.9 18.6 4.225 18.325L4.6 17.975Q4.875 17.7 5.287 17.7Q5.7 17.7 6 18Q6.275 18.275 6.275 18.688Q6.275 19.1 6 19.4L5.65 19.775Q5.375 20.075 4.95 20.075Q4.525 20.075 4.225 19.775ZM18.325 19.775 17.975 19.4Q17.7 19.125 17.7 18.712Q17.7 18.3 18 18Q18.275 17.725 18.688 17.725Q19.1 17.725 19.4 18L19.775 18.35Q20.075 18.625 20.075 19.05Q20.075 19.475 19.775 19.775Q19.475 20.075 19.038 20.087Q18.6 20.1 18.325 19.775ZM4.6 6 4.225 5.65Q3.925 5.375 3.925 4.95Q3.925 4.525 4.225 4.225Q4.525 3.925 4.963 3.912Q5.4 3.9 5.675 4.225L6.025 4.6Q6.3 4.875 6.3 5.287Q6.3 5.7 6 6Q5.725 6.275 5.325 6.275Q4.925 6.275 4.6 6ZM12 18Q9.5 18 7.75 16.25Q6 14.5 6 12Q6 9.5 7.75 7.75Q9.5 6 12 6Q14.5 6 16.25 7.75Q18 9.5 18 12Q18 14.5 16.25 16.25Q14.5 18 12 18ZM12 16Q13.675 16 14.838 14.837Q16 13.675 16 12Q16 10.325 14.838 9.162Q13.675 8 12 8Q10.325 8 9.163 9.162Q8 10.325 8 12Q8 13.675 9.163 14.837Q10.325 16 12 16ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z" />
    </Icon>
  );
});

const IconMaterialTonalityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TonalityRounded'
      short_name='Tonality'

      {...props}
    >
      <path d="M11 19.95V4.05Q7.975 4.425 5.988 6.7Q4 8.975 4 12Q4 15.025 5.988 17.3Q7.975 19.575 11 19.95ZM13 5H15.85Q15.2 4.6 14.475 4.387Q13.75 4.175 13 4.05ZM13 8H18.9Q18.75 7.725 18.6 7.475Q18.45 7.225 18.25 7H13ZM13 11H19.95Q19.9 10.75 19.85 10.5Q19.8 10.25 19.75 10H13ZM13 19.95Q13.75 19.825 14.475 19.612Q15.2 19.4 15.85 19H13ZM13 17H18.25Q18.45 16.775 18.6 16.525Q18.75 16.275 18.9 16H13ZM13 14H19.75Q19.8 13.75 19.85 13.5Q19.9 13.25 19.95 13H13ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z" />
    </Icon>
  );
});

const IconMaterialNightlightRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightRounded'
      short_name='Nightlight'

      {...props}
    >
      <path d="M14 4Q10.675 4 8.338 6.337Q6 8.675 6 12Q6 15.325 8.338 17.663Q10.675 20 14 20Q14.275 20 14.525 20Q14.775 20 15 19.95Q13.575 18.3 12.788 16.262Q12 14.225 12 12Q12 9.775 12.788 7.737Q13.575 5.7 15 4.05Q14.775 4 14.525 4Q14.275 4 14 4ZM14 22Q11.95 22 10.125 21.212Q8.3 20.425 6.938 19.062Q5.575 17.7 4.787 15.875Q4 14.05 4 12Q4 9.925 4.787 8.113Q5.575 6.3 6.938 4.938Q8.3 3.575 10.125 2.787Q11.95 2 14 2Q15.1 2 16.125 2.237Q17.15 2.475 18.1 2.9Q18.45 3.075 18.475 3.362Q18.5 3.65 18.15 3.9Q16.25 5.275 15.125 7.375Q14 9.475 14 12Q14 14.525 15.125 16.625Q16.25 18.725 18.15 20.1Q18.5 20.35 18.475 20.638Q18.45 20.925 18.1 21.1Q17.15 21.525 16.125 21.762Q15.1 22 14 22ZM10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Z" />
    </Icon>
  );
});

const ImageEdit = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiImageEdit?.props?.default }), [props_]);

  const {
    tonal = true,
    color = 'primary',

    image,

    name = 'amaui-image.jpg',
    type = 'image/jpeg',

    openDefault,
    openedOptionDefault,

    valueDefault,
    value: value_,

    valueCopyDefault,
    valueCopy: valueCopy_,

    onlyFilters,
    filters: filters_,

    meta = true,

    filtersOption = true,
    cropOption = true,
    resizeOption = true,
    qualityOption = true,
    downloadOption = true,

    resizeAspectRatio = true,

    renderOption,
    renderOptionClear,
    renderSave,
    renderCancel,
    renderFilter,
    renderSlider,
    renderDownload,
    renderInput,

    IconBrightness = IconMaterialWbSunnyRounded,
    IconContrast = IconMaterialFlakyRounded,
    IconSaturation = IconMaterialWaterDropRounded,
    IconFade = IconMaterialCloudRounded,
    IconInvert = IconMaterialTonalityRounded,
    IconOldPhoto = IconMaterialNightlightRounded,

    IconSave = IconMaterialDoneRounded,
    IconCancel = IconMaterialCloseRounded,
    IconClear = IconMaterialClearAllRounded,
    IconCrop = IconMaterialCropRounded,
    IconFilters = IconMaterialTuneRounded,
    IconResize = IconMaterialAspectRatioRounded,
    IconQuality = IconMaterialHighQualityRounded,
    IconDownload = IconMaterialDownloadRounded,

    ChipProps: ChipProps_,
    SliderProps: SliderProps_,
    TooltipProps: TooltipProps_,
    ImageCropProps: ImageCropProps_,
    IconButtonProps: IconButtonProps_,

    onChange: onChange_,
    onChangeCopy: onChangeCopy_,

    className,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState<HTMLCanvasElement>(valueDefault !== undefined ? valueDefault : value_);
  const [valueCopy, setValueCopy] = React.useState<HTMLCanvasElement>(valueCopyDefault !== undefined ? valueCopyDefault : valueCopy_);
  const [open, setOpen] = React.useState<any>(openDefault);
  const [openedOption, setOpenedOption] = React.useState<any>(openedOptionDefault);
  const [quality, setQuality] = React.useState<any>(100);
  const [filterValues, setFilterValues] = React.useState({});
  const [filterValuesCopy, setFilterValuesCopy] = React.useState({});
  const [filter, setFilter] = React.useState();
  const [resize, setResize] = React.useState<any>();
  const [selection, setSelection] = React.useState<any>();
  const [aspectRatio, setAspectRatio] = React.useState<any>();
  const [aspectRatioCustom, setAspectRatioCustom] = React.useState<any>([1, 1]);
  const [size, setSize] = React.useState('');

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>(),
    valueCopy: React.useRef<any>(),
    canvasMain: React.useRef<HTMLCanvasElement>(),
    open: React.useRef<HTMLCanvasElement>(),
    resizeAspectRatio: React.useRef<any>(),
    filterValues: React.useRef<any>(),
    filterValuesCopy: React.useRef<any>()
  };

  refs.value.current = value;

  refs.valueCopy.current = valueCopy;

  refs.open.current = open;

  refs.resizeAspectRatio.current = resizeAspectRatio;

  refs.filterValues.current = filterValues;

  refs.filterValuesCopy.current = filterValuesCopy;

  const updateSize = (valueNew: any = refs.canvasMain.current) => {
    const uri = valueNew.toDataURL(type);

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
        (['d', 'D'].includes(event.key) && (event.metaKey || event.shiftKey)) ||
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

        case 'd':
        case 'D':
          if (event.metaKey && event.shiftKey) onDownload();

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

    if (!refs.value.current) {
      if (image instanceof HTMLCanvasElement) onChange(image);
      else if (is('string', image)) makeImage(image);
    }

    window.addEventListener('keydown', method);

    setInit(true);

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

  const applyAllFilters = (canvas: HTMLCanvasElement) => {
    let valueCopy_ = refs.valueCopy.current;

    // Update filters
    Object.keys(refs.filterValuesCopy.current).forEach(item => {
      const filterValue = filters.find(item_ => item_.value === item);

      if (filterValue) {
        const { method } = filterValue;

        if (
          is('function', method) &&
          refs.filterValuesCopy.current[item] !== undefined
        ) valueCopy_ = method(refs.filterValuesCopy.current[item], canvas, valueCopy_);
      }
    });
  };

  const applyAllFiltersDebounced = React.useCallback(debounce(applyAllFilters, 140), []);

  React.useEffect(() => {
    applyAllFiltersDebounced(refs.canvasMain.current);
  }, [filterValuesCopy]);

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

    if (width > 1 && height > 1) {
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
    }
  }, 140);

  const onFilterSliderChange = (valueNew: any, valueFilter: string) => {
    setFilterValuesCopy(values_ => ({
      ...values_,

      [valueFilter]: valueNew
    }));
  };

  const onChangeFilter = (valueNew: any) => {
    // If moving to another filter or closing current one
    // clean up previous one filter for mainCanvas
    if (filter === valueNew) setFilter('' as any);
    else setFilter(valueNew);
  };

  const onChangeAspectRatioCustom = (valueNew_: any, left_ = true) => {
    const valueNew = !valueNew_ ? 1 : valueNew_;

    let left = aspectRatioCustom?.[0] || 1;
    let right = aspectRatioCustom?.[1] || 1;

    left_ ? left = valueNew : right = valueNew;

    setAspectRatioCustom([left, right]);

    onChangeAspectRatio(left / right);
  };

  const onChangeAspectRatio = (valueNew: any) => {
    if (aspectRatio === valueNew) setAspectRatio('');
    else setAspectRatio(valueNew);
  };

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

  const onReset = (imageReset = true, valueCopyReset = true, resizeReset = true) => {
    setOpen(false);
    setQuality(100);
    setAspectRatio('');
    setAspectRatioCustom([1, 1]);
    setSelection('');
    setFilter('' as any);
    setFilterValuesCopy({ ...filterValues });

    if (resizeReset) setResize([value?.width, value?.height]);

    if (valueCopyReset) {
      const canvas = window.document.createElement('canvas');

      canvas.width = refs.value.current.width;

      canvas.height = refs.value.current.height;

      canvas.getContext('2d').drawImage(refs.value.current, 0, 0, refs.value.current.width, refs.value.current.height);

      onChangeCopy(canvas);
    }

    if (imageReset) {
      setFilterValues({});
      setFilterValuesCopy({});

      makeImage(image);
    }
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

    // Update crop
    if (openedOption === 'crop' && selection) {
      // Crop the canvas
      canvas.width = selection.width;

      canvas.height = selection.height;

      canvas = canvasCrop(refs.valueCopy.current, selection.left, selection.top, selection.width, selection.height);
    }

    // Update filters
    setFilterValues({ ...filterValuesCopy });

    applyAllFilters(canvas);

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
    onReset(false, false, false);
  };

  const onDownload = () => {
    // Download the image from canvas datauri
    // of the image type and quality, name
    const uri = refs.value.current.toDataURL(type);

    downloadMethod(name, uri, type);
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

  let filters = React.useMemo(() => [
    {
      label: 'Brightness',
      Icon: IconBrightness,
      value: 'brightness',

      method: canvasBrightness,

      renderIconButton: (value_: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value_}

          label='Brightness'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value_)}

            {...IconButtonProps}
          >
            <IconBrightness />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value_: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value_}

          valueDefault={filterValuesCopy_?.[value_] || 0}

          value={filterValuesCopy_?.[value_] || 0}

          min={-100}

          max={100}

          precision={1}

          marks={[
            { value: -100, label: '-100' },
            { value: 0, label: '0' },
            { value: 100, label: '100' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value_);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Contrast',
      Icon: IconContrast,
      value: 'contrast',

      method: canvasContrast,

      renderIconButton: (value_: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value_}

          label='Contrast'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value_)}

            {...IconButtonProps}
          >
            <IconContrast />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value_: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value_}

          valueDefault={filterValuesCopy_?.[value_] || 0}

          value={filterValuesCopy_?.[value_] || 0}

          min={-100}

          max={100}

          precision={1}

          marks={[
            { value: -100, label: '-100' },
            { value: 0, label: '0' },
            { value: 100, label: '100' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value_);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Saturation',
      Icon: IconSaturation,
      value: 'saturation',

      method: canvasSaturation,

      renderIconButton: (value_: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value_}

          label='Saturation'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value_)}

            {...IconButtonProps}
          >
            <IconSaturation />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value_: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value_}

          valueDefault={filterValuesCopy_?.[value_] || 0}

          value={filterValuesCopy_?.[value_] || 0}

          min={-100}

          max={100}

          precision={1}

          marks={[
            { value: -100, label: '-100' },
            { value: 0, label: '0' },
            { value: 100, label: '100' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value_);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Fade',
      Icon: IconFade,
      value: 'fade',

      method: canvasFade,

      renderIconButton: (value_: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value_}

          label='Fade'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value_)}

            {...IconButtonProps}
          >
            <IconFade />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value_: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value_}

          valueDefault={filterValuesCopy_?.[value_] || 0}

          value={filterValuesCopy_?.[value_] || 0}

          min={0}

          max={100}

          precision={1}

          marks={[
            { value: 0, label: '0' },
            { value: 100, label: '100' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value_);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Invert',
      Icon: IconInvert,
      value: 'invert',

      method: canvasInvert,

      renderIconButton: (value_: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value_}

          label='Invert'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value_)}

            {...IconButtonProps}
          >
            <IconInvert />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value_: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value_}

          valueDefault={filterValuesCopy_?.[value_] || 0}

          value={filterValuesCopy_?.[value_] || 0}

          min={0}

          max={1}

          precision={1}

          marks={[
            { value: 0, label: 'Not inverted' },
            { value: 1, label: 'Inverted' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value_);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    {
      label: 'Old photo',
      Icon: IconOldPhoto,
      value: 'old_photo',

      method: canvasOldPhoto,

      renderIconButton: (value_: string, selected_: boolean, onChangeFilter_: TMethod) => (
        <Tooltip
          key={value_}

          label='Old photo'

          {...TooltipProps}
        >
          <IconButton
            version='outlined'

            selected={selected_}

            onClick={() => onChangeFilter_(value_)}

            {...IconButtonProps}
          >
            <IconOldPhoto />
          </IconButton>
        </Tooltip>
      ),

      renderSlider: (value_: string, filterValuesCopy_: any, onFilterSliderChange_: TMethod) => (
        <Slider
          key={value_}

          valueDefault={filterValuesCopy_?.[value_] || 0}

          value={filterValuesCopy_?.[value_] || 0}

          min={-40}

          max={40}

          precision={1}

          marks={[
            { value: -40, label: '-40' },
            { value: 0, label: 'No filter' },
            { value: 40, label: '40' }
          ]}

          labels

          tooltip

          onChange={(valueNew: any) => {
            if (is('function', onFilterSliderChange_)) onFilterSliderChange_(valueNew, value_);
          }}

          {...SliderProps}

          className={classNames([
            staticClassName('ImageEdit', theme) && [
              'AmauiImageEdit-slider'
            ],

            SliderProps.className,
            classes.slider
          ])}
        />
      )
    },

    ...(filters_ || [])
  ], [filters_]);

  // Only filters
  if (is('array', onlyFilters)) filters = filters.filter(item => onlyFilters.includes(item.value));

  const ImageCropProps = {
    gridLines: true,

    ...ImageCropProps_
  };

  const TooltipProps = {
    position: 'bottom',
    interactive: false,

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

  const ChipProps = {
    size: 'small',

    ...ChipProps_
  };

  const chips = [
    { label: '1:1', value: 1 / 1 },
    { label: '4:3', value: 4 / 3 },
    { label: '16:9', value: 16 / 9 }
  ];

  const options = [
    filtersOption && { label: 'Filters', value: 'filters', Icon: IconFilters },
    cropOption && { label: 'Crop', value: 'crop', Icon: IconCrop },
    resizeOption && { label: 'Resize', value: 'resize', Icon: IconResize },
    qualityOption && { label: 'Quality', value: 'quality', Icon: IconQuality }
  ]
    .filter(Boolean);

  const MetaTypeProps = {
    version: 'b3'
  };

  const filterValue = filters.find(item_ => item_.value === filter);

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
          'AmauiImageEdit-root',
          meta && `AmauiImageEdit-meta`,
          filtersOption && `AmauiImageEdit-filters-option`,
          cropOption && `AmauiImageEdit-crop-option`,
          resizeOption && `AmauiImageEdit-resize-option`,
          qualityOption && `AmauiImageEdit-quality-option`,
          downloadOption && `AmauiImageEdit-download-option`,
          resizeAspectRatio && `AmauiImageEdit-resize-aspect-ratio`
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

              aspectRatio={aspectRatio ? aspectRatio : undefined}

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
                width: valueCopy?.width,
                height: valueCopy?.height
              }}
            />
          )}
        </div>
      </Line>

      {(filtersOption || cropOption || resizeOption || qualityOption) && <>
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
            {openedOption === 'filters' && <>
              <Expand
                in={!!filterValue}

                style={{
                  width: '100%'
                }}
              >
                <div
                  style={{
                    paddingInline: 40,
                    paddingBottom: 40
                  }}
                >
                  {is('function', filterValue?.renderSlider) && filterValue?.renderSlider(filterValue.value, refs.filterValuesCopy.current, onFilterSliderChange)}
                </div>
              </Expand>

              <Line
                gap={1}

                direction='row'

                align='center'

                justify='flex-start'

                className={classNames([
                  staticClassName('ImageEdit', theme) && [
                    'AmauiImageEdit-filters'
                  ],

                  classes.filters
                ])}
              >
                {filters.map((item: any) => (
                  is('function', item.renderIconButton) && item.renderIconButton(item.value, item.value === filter, onChangeFilter)
                ))}
              </Line>
            </>}

            {openedOption === 'crop' && (
              <Line
                gap={1}

                direction='row'

                align='center'

                justify='center'

                style={{
                  width: '100%'
                }}
              >
                {chips.map((item: any, index: number) => (
                  <Chip
                    key={index}

                    selected={aspectRatio === item.value}

                    onClick={() => onChangeAspectRatio(item.value)}

                    {...ChipProps}
                  >
                    {item.label}
                  </Chip>
                ))}

                <Line
                  gap={0}

                  direction='row'

                  align='center'

                  justify='center'
                >
                  {is('function', renderInput) ? renderInput(aspectRatio, aspectRatioCustom, onChangeAspectRatioCustom, 'left') : (
                    <NumericTextField
                      tonal={tonal}

                      color='default'

                      version='text'

                      size='small'

                      min={1}

                      value={aspectRatioCustom?.[0]}

                      onChange={(valueNew: string) => onChangeAspectRatioCustom(+valueNew)}

                      increment={false}

                      decrement={false}

                      className={classNames([
                        staticClassName('ImageEdit', theme) && [
                          'AmauiImageEdit-optionInput'
                        ],

                        classes.optionInput
                      ])}

                      style={{
                        width: 24
                      }}
                    />
                  )}

                  <Type>
                    :
                  </Type>

                  {is('function', renderInput) ? renderInput(aspectRatio, aspectRatioCustom, onChangeAspectRatioCustom, 'right') : (
                    <NumericTextField
                      tonal={tonal}

                      color='default'

                      version='text'

                      size='small'

                      min={1}

                      value={aspectRatioCustom?.[1]}

                      onChange={(valueNew: string) => onChangeAspectRatioCustom(+valueNew, false)}

                      increment={false}

                      decrement={false}

                      className={classNames([
                        staticClassName('ImageEdit', theme) && [
                          'AmauiImageEdit-optionInput'
                        ],

                        classes.optionInput
                      ])}

                      style={{
                        width: 24
                      }}
                    />
                  )}
                </Line>
              </Line>
            )}

            {openedOption === 'resize' && (
              <Line
                direction='row'

                align='center'

                justify='center'

                className={classNames([
                  staticClassName('ImageEdit', theme) && [
                    'AmauiImageEdit-inputs'
                  ],

                  classes.inputs
                ])}
              >
                {is('function', renderInput) ? renderInput(value, valueCopy, resize, onChangeResize, 'width') : (
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

                {is('function', renderInput) ? renderInput(value, valueCopy, resize, onChangeResize, 'height') : (
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

            <Line
              gap={0}

              direction='row'

              align='center'
            >
              {downloadOption && is('function', renderDownload) ? renderDownload(onDownload) : (
                <Tooltip
                  label='Download'

                  {...TooltipProps}
                >
                  <IconButton
                    version='text'

                    onClick={onDownload}

                    {...IconButtonProps}
                  >
                    <IconDownload />
                  </IconButton>
                </Tooltip>
              )}

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
        </Line>
      </>}

      {children}

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

          justify='center'

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
