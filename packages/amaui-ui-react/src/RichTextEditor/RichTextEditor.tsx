import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Icon from '../Icon';
import Select from '../Select';
import Tooltip from '../Tooltip';
import ToggleButtons from '../ToggleButtons';
import ToggleButton from '../ToggleButton';
import Surface from '../Surface';
import Divider from '../Divider';
import ListItem from '../ListItem';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%',

    '& p': {
      ...theme.typography.values.b2
    },

    '& h1': {
      ...theme.typography.values.h1
    },

    '& h2': {
      ...theme.typography.values.h2
    },

    '& h3': {
      ...theme.typography.values.h3
    },

    '& h4': {
      ...theme.typography.values.t1
    },

    '& h5': {
      ...theme.typography.values.t2
    }
  },

  value: {
    padding: '16px',
    whiteSpace: 'break-spaces'
  },

  toolbars: {
    width: '100%'
  },

  toolbar: {
    width: '100%',
    overflowX: 'auto',
    padding: '8px'
  },

  divider: {
    '&.AmauiDivider-root': {
      margin: 0
    }
  },

  divider_middle: {
    '&.AmauiDivider-root': {
      opacity: theme.palette.light ? 0.07 : 0.24
    }
  },

  divider_end: {
    '&.AmauiDivider-root': {
      opacity: theme.palette.light ? 0.14 : 0.4
    }
  },

  select: {
    '& .AmauiTextField-inputWrapper': {
      height: '40px',
      paddingBlock: '11px'
    },

    '& .AmauiSelect-input': {
      '& > *': {
        ...theme.typography.values.b2,

        fontWeight: 400
      }
    }
  },
}), { name: 'AmauiRichTextEditor' });

const IconMaterialFormatItalicRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicRounded'
      short_name='FormatItalic'

      {...props}
    >
      <path d="M6.5 20Q5.875 20 5.438 19.562Q5 19.125 5 18.5Q5 17.875 5.438 17.438Q5.875 17 6.5 17H8.375L12.375 7H10.5Q9.875 7 9.438 6.562Q9 6.125 9 5.5Q9 4.875 9.438 4.438Q9.875 4 10.5 4H17.5Q18.125 4 18.562 4.438Q19 4.875 19 5.5Q19 6.125 18.562 6.562Q18.125 7 17.5 7H15.625L11.625 17H13.5Q14.125 17 14.562 17.438Q15 17.875 15 18.5Q15 19.125 14.562 19.562Q14.125 20 13.5 20Z" />
    </Icon>
  );
});

const IconMaterialFormatUnderlinedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedRounded'
      short_name='FormatUnderlined'

      {...props}
    >
      <path d="M12 17Q9.475 17 7.737 15.262Q6 13.525 6 11V4.25Q6 3.725 6.363 3.362Q6.725 3 7.25 3Q7.775 3 8.137 3.362Q8.5 3.725 8.5 4.25V11Q8.5 12.475 9.512 13.488Q10.525 14.5 12 14.5Q13.475 14.5 14.488 13.488Q15.5 12.475 15.5 11V4.25Q15.5 3.725 15.863 3.362Q16.225 3 16.75 3Q17.275 3 17.638 3.362Q18 3.725 18 4.25V11Q18 13.525 16.262 15.262Q14.525 17 12 17ZM6 21Q5.575 21 5.287 20.712Q5 20.425 5 20Q5 19.575 5.287 19.288Q5.575 19 6 19H18Q18.425 19 18.712 19.288Q19 19.575 19 20Q19 20.425 18.712 20.712Q18.425 21 18 21Z" />
    </Icon>
  );
});

const IconMaterialFormatBoldRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBoldRounded'
      short_name='FormatBold'

      {...props}
    >
      <path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V6Q7 5.175 7.588 4.588Q8.175 4 9 4H12.5Q14.2 4 15.475 4.975Q16.75 5.95 16.75 7.65Q16.75 8.85 16.2 9.562Q15.65 10.275 14.9 10.65V10.85Q16 11.225 16.625 12.025Q17.25 12.825 17.25 14.1Q17.25 15.975 15.887 16.988Q14.525 18 12.65 18ZM9.65 9.7H12.3Q13.125 9.7 13.663 9.225Q14.2 8.75 14.2 8.025Q14.2 7.3 13.663 6.825Q13.125 6.35 12.3 6.35H9.65ZM9.65 15.6H12.5Q13.475 15.6 14.038 15.1Q14.6 14.6 14.6 13.775Q14.6 12.95 14.038 12.45Q13.475 11.95 12.5 11.95H9.65Z" />
    </Icon>
  );
});

const IconMaterialContentCopyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyRounded'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V4Q7 3.175 7.588 2.587Q8.175 2 9 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V16Q20 16.825 19.413 17.413Q18.825 18 18 18ZM9 16H18Q18 16 18 16Q18 16 18 16V4Q18 4 18 4Q18 4 18 4H9Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V7Q3 6.575 3.288 6.287Q3.575 6 4 6Q4.425 6 4.713 6.287Q5 6.575 5 7V20Q5 20 5 20Q5 20 5 20H15Q15.425 20 15.713 20.288Q16 20.575 16 21Q16 21.425 15.713 21.712Q15.425 22 15 22ZM9 4Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16Q9 16 9 16Q9 16 9 16V4Q9 4 9 4Q9 4 9 4Z" />
    </Icon>
  );
});

const IconMaterialContentCutRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCutRounded'
      short_name='ContentCut'

      {...props}
    >
      <path d="M19.6 21.6 12 14 9.65 16.35Q9.85 16.725 9.925 17.15Q10 17.575 10 18Q10 19.65 8.825 20.825Q7.65 22 6 22Q4.35 22 3.175 20.825Q2 19.65 2 18Q2 16.35 3.175 15.175Q4.35 14 6 14Q6.425 14 6.85 14.075Q7.275 14.15 7.65 14.35L10 12L7.65 9.65Q7.275 9.85 6.85 9.925Q6.425 10 6 10Q4.35 10 3.175 8.825Q2 7.65 2 6Q2 4.35 3.175 3.175Q4.35 2 6 2Q7.65 2 8.825 3.175Q10 4.35 10 6Q10 6.425 9.925 6.85Q9.85 7.275 9.65 7.65L21.6 19.6Q22.025 20.025 22.025 20.6Q22.025 21.175 21.6 21.6Q21.175 22.025 20.6 22.025Q20.025 22.025 19.6 21.6ZM15 11 13 9 19.6 2.4Q20.025 1.975 20.6 1.975Q21.175 1.975 21.6 2.4Q22.025 2.825 22.025 3.4Q22.025 3.975 21.6 4.4ZM6 8Q6.825 8 7.412 7.412Q8 6.825 8 6Q8 5.175 7.412 4.588Q6.825 4 6 4Q5.175 4 4.588 4.588Q4 5.175 4 6Q4 6.825 4.588 7.412Q5.175 8 6 8ZM12 12.5Q12.225 12.5 12.363 12.363Q12.5 12.225 12.5 12Q12.5 11.775 12.363 11.637Q12.225 11.5 12 11.5Q11.775 11.5 11.637 11.637Q11.5 11.775 11.5 12Q11.5 12.225 11.637 12.363Q11.775 12.5 12 12.5ZM6 20Q6.825 20 7.412 19.413Q8 18.825 8 18Q8 17.175 7.412 16.587Q6.825 16 6 16Q5.175 16 4.588 16.587Q4 17.175 4 18Q4 18.825 4.588 19.413Q5.175 20 6 20Z" />
    </Icon>
  );
});

const IconMaterialContentPasteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteRounded'
      short_name='ContentPaste'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.725 1.55Q14.5 2.1 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H17V6Q17 6.825 16.413 7.412Q15.825 8 15 8H9Q8.175 8 7.588 7.412Q7 6.825 7 6V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5Z" />
    </Icon>
  );
});

const IconMaterialFormatAlignLeftRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeftRounded'
      short_name='FormatAlignLeft'

      {...props}
    >
      <path d="M4 17Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H14Q14.425 15 14.713 15.287Q15 15.575 15 16Q15 16.425 14.713 16.712Q14.425 17 14 17ZM4 9Q3.575 9 3.288 8.712Q3 8.425 3 8Q3 7.575 3.288 7.287Q3.575 7 4 7H14Q14.425 7 14.713 7.287Q15 7.575 15 8Q15 8.425 14.713 8.712Q14.425 9 14 9ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5Z" />
    </Icon>
  );
});

const IconMaterialFormatAlignCenterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenterRounded'
      short_name='FormatAlignCenter'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM8 17Q7.575 17 7.287 16.712Q7 16.425 7 16Q7 15.575 7.287 15.287Q7.575 15 8 15H16Q16.425 15 16.712 15.287Q17 15.575 17 16Q17 16.425 16.712 16.712Q16.425 17 16 17ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM8 9Q7.575 9 7.287 8.712Q7 8.425 7 8Q7 7.575 7.287 7.287Q7.575 7 8 7H16Q16.425 7 16.712 7.287Q17 7.575 17 8Q17 8.425 16.712 8.712Q16.425 9 16 9ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5Z" />
    </Icon>
  );
});

const IconMaterialFormatAlignRightRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightRounded'
      short_name='FormatAlignRight'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM10 17Q9.575 17 9.288 16.712Q9 16.425 9 16Q9 15.575 9.288 15.287Q9.575 15 10 15H20Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM10 9Q9.575 9 9.288 8.712Q9 8.425 9 8Q9 7.575 9.288 7.287Q9.575 7 10 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5Z" />
    </Icon>
  );
});

const IconMaterialFormatAlignJustifyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustifyRounded'
      short_name='FormatAlignJustify'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM4 17Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H20Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM4 9Q3.575 9 3.288 8.712Q3 8.425 3 8Q3 7.575 3.288 7.287Q3.575 7 4 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5Z" />
    </Icon>
  );
});

const IconMaterialStrikethroughSRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSRounded'
      short_name='StrikethroughS'

      {...props}
    >
      <path d="M12.15 20Q10.525 20 9.225 19.188Q7.925 18.375 7.125 16.9Q6.9 16.475 7.075 16Q7.25 15.525 7.75 15.325Q8.175 15.125 8.613 15.3Q9.05 15.475 9.325 15.925Q9.775 16.675 10.512 17.138Q11.25 17.6 12.2 17.6Q13.25 17.6 14.1 17.1Q14.95 16.6 14.95 15.5Q14.95 15.05 14.775 14.675Q14.6 14.3 14.3 14H17.1Q17.225 14.35 17.288 14.712Q17.35 15.075 17.35 15.5Q17.35 17.65 15.812 18.825Q14.275 20 12.15 20ZM3 12Q2.575 12 2.288 11.712Q2 11.425 2 11Q2 10.575 2.288 10.287Q2.575 10 3 10H21Q21.425 10 21.712 10.287Q22 10.575 22 11Q22 11.425 21.712 11.712Q21.425 12 21 12ZM7.25 8Q7.25 8 7.25 8Q7.25 8 7.25 8Q7.3 6.275 8.613 5.062Q9.925 3.85 12.05 3.85Q13.4 3.85 14.475 4.387Q15.55 4.925 16.275 6.05Q16.55 6.475 16.375 6.95Q16.2 7.425 15.7 7.65Q15.325 7.825 14.888 7.688Q14.45 7.55 14.1 7.125Q13.775 6.75 13.275 6.5Q12.775 6.25 12.1 6.25Q11.075 6.25 10.4 6.713Q9.725 7.175 9.65 8Q9.65 8 9.65 8Q9.65 8 9.65 8Z" />
    </Icon>
  );
});

const IconMaterialUndoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoRounded'
      short_name='Undo'

      {...props}
    >
      <path d="M8 19Q7.575 19 7.287 18.712Q7 18.425 7 18Q7 17.575 7.287 17.288Q7.575 17 8 17H14.1Q15.675 17 16.837 16Q18 15 18 13.5Q18 12 16.837 11Q15.675 10 14.1 10H7.8L9.7 11.9Q9.975 12.175 9.975 12.6Q9.975 13.025 9.7 13.3Q9.425 13.575 9 13.575Q8.575 13.575 8.3 13.3L4.7 9.7Q4.55 9.55 4.487 9.375Q4.425 9.2 4.425 9Q4.425 8.8 4.487 8.625Q4.55 8.45 4.7 8.3L8.3 4.7Q8.575 4.425 9 4.425Q9.425 4.425 9.7 4.7Q9.975 4.975 9.975 5.4Q9.975 5.825 9.7 6.1L7.8 8H14.1Q16.525 8 18.263 9.575Q20 11.15 20 13.5Q20 15.85 18.263 17.425Q16.525 19 14.1 19Z" />
    </Icon>
  );
});

const IconMaterialRedoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoRounded'
      short_name='Redo'

      {...props}
    >
      <path d="M9.9 19Q7.475 19 5.738 17.425Q4 15.85 4 13.5Q4 11.15 5.738 9.575Q7.475 8 9.9 8H16.2L14.3 6.1Q14.025 5.825 14.025 5.4Q14.025 4.975 14.3 4.7Q14.575 4.425 15 4.425Q15.425 4.425 15.7 4.7L19.3 8.3Q19.45 8.45 19.513 8.625Q19.575 8.8 19.575 9Q19.575 9.2 19.513 9.375Q19.45 9.55 19.3 9.7L15.7 13.3Q15.425 13.575 15 13.575Q14.575 13.575 14.3 13.3Q14.025 13.025 14.025 12.6Q14.025 12.175 14.3 11.9L16.2 10H9.9Q8.325 10 7.163 11Q6 12 6 13.5Q6 15 7.163 16Q8.325 17 9.9 17H16Q16.425 17 16.712 17.288Q17 17.575 17 18Q17 18.425 16.712 18.712Q16.425 19 16 19Z" />
    </Icon>
  );
});

const IconMaterialFormatClearRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearRounded'
      short_name='FormatClear'

      {...props}
    >
      <path d="M13.2 10.35 10.875 8.025 7.85 5H18.5Q19.125 5 19.562 5.438Q20 5.875 20 6.5Q20 7.125 19.562 7.562Q19.125 8 18.5 8H14.2ZM19.1 21.9 11.5 14.3 9.9 18.075Q9.725 18.5 9.338 18.75Q8.95 19 8.5 19Q7.7 19 7.25 18.325Q6.8 17.65 7.125 16.9L9.2 12L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9Z" />
    </Icon>
  );
});

const IconMaterialSuperscriptRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptRounded'
      short_name='Superscript'

      {...props}
    >
      <path d="M20 9Q19.575 9 19.288 8.712Q19 8.425 19 8V7Q19 6.575 19.288 6.287Q19.575 6 20 6H22V5H19.5Q19.3 5 19.15 4.85Q19 4.7 19 4.5Q19 4.3 19.15 4.15Q19.3 4 19.5 4H22Q22.425 4 22.712 4.287Q23 4.575 23 5V6Q23 6.425 22.712 6.713Q22.425 7 22 7H20V8H22.5Q22.7 8 22.85 8.15Q23 8.3 23 8.5Q23 8.7 22.85 8.85Q22.7 9 22.5 9ZM7.925 20Q7.25 20 6.938 19.425Q6.625 18.85 6.975 18.275L10.5 12.725L7.3 7.725Q6.95 7.15 7.263 6.575Q7.575 6 8.225 6Q8.525 6 8.775 6.137Q9.025 6.275 9.175 6.525L11.95 11H12.05L14.8 6.525Q14.95 6.25 15.163 6.125Q15.375 6 15.75 6Q16.425 6 16.725 6.575Q17.025 7.15 16.675 7.725L13.475 12.725L17.025 18.25Q17.375 18.825 17.05 19.413Q16.725 20 16.075 20Q15.775 20 15.525 19.863Q15.275 19.725 15.125 19.475L12.05 14.575H11.95L8.875 19.475Q8.7 19.75 8.5 19.875Q8.3 20 7.925 20Z" />
    </Icon>
  );
});

const IconMaterialSubscriptRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptRounded'
      short_name='Subscript'

      {...props}
    >
      <path d="M20 20Q19.575 20 19.288 19.712Q19 19.425 19 19V18Q19 17.575 19.288 17.288Q19.575 17 20 17H22V16H19.5Q19.3 16 19.15 15.85Q19 15.7 19 15.5Q19 15.3 19.15 15.15Q19.3 15 19.5 15H22Q22.425 15 22.712 15.287Q23 15.575 23 16V17Q23 17.425 22.712 17.712Q22.425 18 22 18H20V19H22.5Q22.7 19 22.85 19.15Q23 19.3 23 19.5Q23 19.7 22.85 19.85Q22.7 20 22.5 20ZM10.5 10.725 7.3 5.725Q6.95 5.15 7.263 4.575Q7.575 4 8.225 4Q8.525 4 8.775 4.137Q9.025 4.275 9.175 4.525L11.95 9H12.05L14.8 4.525Q14.95 4.25 15.2 4.125Q15.45 4 15.75 4Q16.425 4 16.725 4.575Q17.025 5.15 16.675 5.725L13.475 10.725L17.025 16.25Q17.375 16.825 17.05 17.413Q16.725 18 16.075 18Q15.775 18 15.525 17.863Q15.275 17.725 15.125 17.475L12.05 12.575H11.95L8.875 17.475Q8.7 17.75 8.463 17.875Q8.225 18 7.925 18Q7.25 18 6.938 17.425Q6.625 16.85 6.975 16.275Z" />
    </Icon>
  );
});

const IconMaterialFormatIndentIncreaseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncreaseRounded'
      short_name='FormatIndentIncrease'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM3 14.8V9.2Q3 8.85 3.3 8.725Q3.6 8.6 3.85 8.85L6.65 11.65Q6.8 11.8 6.8 12Q6.8 12.2 6.65 12.35L3.85 15.15Q3.6 15.4 3.3 15.275Q3 15.15 3 14.8ZM12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.575 11.288 15.287Q11.575 15 12 15H20Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5ZM12 9Q11.575 9 11.288 8.712Q11 8.425 11 8Q11 7.575 11.288 7.287Q11.575 7 12 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13Z" />
    </Icon>
  );
});

const IconMaterialFormatIndentDecreaseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecreaseRounded'
      short_name='FormatIndentDecrease'

      {...props}
    >
      <path d="M12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.575 11.288 15.287Q11.575 15 12 15H20Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM6.15 15.15 3.35 12.35Q3.2 12.2 3.2 12Q3.2 11.8 3.35 11.65L6.15 8.85Q6.4 8.6 6.7 8.725Q7 8.85 7 9.2V14.8Q7 15.15 6.7 15.275Q6.4 15.4 6.15 15.15ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5ZM12 9Q11.575 9 11.288 8.712Q11 8.425 11 8Q11 7.575 11.288 7.287Q11.575 7 12 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13Z" />
    </Icon>
  );
});

const IconMaterialFormatListNumberedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedRounded'
      short_name='FormatListNumbered'

      {...props}
    >
      <path d="M3.5 20Q3.3 20 3.15 19.85Q3 19.7 3 19.5Q3 19.3 3.15 19.15Q3.3 19 3.5 19H5V18.5H4.5Q4.3 18.5 4.15 18.35Q4 18.2 4 18Q4 17.8 4.15 17.65Q4.3 17.5 4.5 17.5H5V17H3.5Q3.3 17 3.15 16.85Q3 16.7 3 16.5Q3 16.3 3.15 16.15Q3.3 16 3.5 16H5.5Q5.7 16 5.85 16.15Q6 16.3 6 16.5V19.5Q6 19.7 5.85 19.85Q5.7 20 5.5 20ZM4.5 8Q4.3 8 4.15 7.85Q4 7.7 4 7.5V5H3.5Q3.3 5 3.15 4.85Q3 4.7 3 4.5Q3 4.3 3.15 4.15Q3.3 4 3.5 4H4.5Q4.7 4 4.85 4.15Q5 4.3 5 4.5V7.5Q5 7.7 4.85 7.85Q4.7 8 4.5 8ZM3.5 14Q3.3 14 3.15 13.85Q3 13.7 3 13.5V13.275Q3 13.175 3.125 12.95L4.8 11H3.5Q3.3 11 3.15 10.85Q3 10.7 3 10.5Q3 10.3 3.15 10.15Q3.3 10 3.5 10H5.5Q5.7 10 5.85 10.15Q6 10.3 6 10.5V10.725Q6 10.825 5.875 11.05L4.2 13H5.5Q5.7 13 5.85 13.15Q6 13.3 6 13.5Q6 13.7 5.85 13.85Q5.7 14 5.5 14ZM9 19Q8.575 19 8.288 18.712Q8 18.425 8 18Q8 17.575 8.288 17.288Q8.575 17 9 17H20Q20.425 17 20.712 17.288Q21 17.575 21 18Q21 18.425 20.712 18.712Q20.425 19 20 19ZM9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM9 7Q8.575 7 8.288 6.713Q8 6.425 8 6Q8 5.575 8.288 5.287Q8.575 5 9 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7Z" />
    </Icon>
  );
});

const IconMaterialFormatListBulletedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListBulletedRounded'
      short_name='FormatListBulleted'

      {...props}
    >
      <path d="M4.5 13.5Q3.875 13.5 3.438 13.062Q3 12.625 3 12Q3 11.375 3.438 10.938Q3.875 10.5 4.5 10.5Q5.125 10.5 5.562 10.938Q6 11.375 6 12Q6 12.625 5.562 13.062Q5.125 13.5 4.5 13.5ZM4.5 7.5Q3.875 7.5 3.438 7.062Q3 6.625 3 6Q3 5.375 3.438 4.938Q3.875 4.5 4.5 4.5Q5.125 4.5 5.562 4.938Q6 5.375 6 6Q6 6.625 5.562 7.062Q5.125 7.5 4.5 7.5ZM4.5 19.5Q3.875 19.5 3.438 19.062Q3 18.625 3 18Q3 17.375 3.438 16.938Q3.875 16.5 4.5 16.5Q5.125 16.5 5.562 16.938Q6 17.375 6 18Q6 18.625 5.562 19.062Q5.125 19.5 4.5 19.5ZM9 19Q8.575 19 8.288 18.712Q8 18.425 8 18Q8 17.575 8.288 17.288Q8.575 17 9 17H20Q20.425 17 20.712 17.288Q21 17.575 21 18Q21 18.425 20.712 18.712Q20.425 19 20 19ZM9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM9 7Q8.575 7 8.288 6.713Q8 6.425 8 6Q8 5.575 8.288 5.287Q8.575 5 9 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7Z" />
    </Icon>
  );
});

const IconMaterialHorizontalRuleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleRounded'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M5 13Q4.575 13 4.287 12.712Q4 12.425 4 12Q4 11.575 4.287 11.287Q4.575 11 5 11H19Q19.425 11 19.712 11.287Q20 11.575 20 12Q20 12.425 19.712 12.712Q19.425 13 19 13Z" />
    </Icon>
  );
});

// to do

// font color

// font background

// insert image

// insert video

// insert youtube video

// insert code (current selection value, insertHTML <pre><code> with inline style)

// Optional, selection menu, with specific options within it, with some custom default values

// any other update, action?

// update all toggle buttons selected
// on click
// + on current selection listen to selection window value y

// onChange method for any onChange event, with valueDefault and value

// to actions add, save document, print

const RichTextEditor = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRichTextEditor?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'default',
    version = 'filled',

    value,

    render,

    exclude,

    updates = true,
    actions = true,

    fontFamilies = [
      { label: 'Arial', value: `Arial, sans-serif` },
      { label: 'Verdana', value: `Verdana, sans-serif` },
      { label: 'Helvetica', value: `Helvetica, sans-serif` },
      { label: 'Georgia', value: `Georgia, sans-serif` },
      { label: 'Roboto', value: `Roboto, sans-serif` }
    ],

    addFontFamilies = [],

    // Update
    IconItalic = IconMaterialFormatItalicRounded,
    IconUnderline = IconMaterialFormatUnderlinedRounded,
    IconBold = IconMaterialFormatBoldRounded,
    IconStrikeLine = IconMaterialStrikethroughSRounded,

    IconAlignLeft = IconMaterialFormatAlignLeftRounded,
    IconAlignCenter = IconMaterialFormatAlignCenterRounded,
    IconAlignRight = IconMaterialFormatAlignRightRounded,
    IconAlignJustify = IconMaterialFormatAlignJustifyRounded,

    IconIndent = IconMaterialFormatIndentIncreaseRounded,
    IconOutdent = IconMaterialFormatIndentDecreaseRounded,

    IconSuperscript = IconMaterialSuperscriptRounded,
    IconSubscript = IconMaterialSubscriptRounded,

    IconListOrdered = IconMaterialFormatListNumberedRounded,
    IconListUnordered = IconMaterialFormatListBulletedRounded,

    IconHorizontalRule = IconMaterialHorizontalRuleRounded,

    // Action
    IconCopy = IconMaterialContentCopyRounded,
    IconCut = IconMaterialContentCutRounded,
    IconPaste = IconMaterialContentPasteRounded,

    IconUndo = IconMaterialUndoRounded,
    IconRedo = IconMaterialRedoRounded,

    IconClear = IconMaterialFormatClearRounded,

    ToolbarProps,
    ToolbarUpdatesProps,
    ToolbarActionsProps,
    ToggleButtonProps: ToggleButtonProps_,
    ToggleButtonsProps: ToggleButtonsProps_,
    DividerProps: DividerProps_,
    SelectProps: SelectProps_,
    ListItemProps: ListItemProps_,
    TooltipProps: TooltipProps_,
    IconProps: IconProps_,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const refs = {
    value: React.useRef<HTMLElement>(),
    range: React.useRef<any>()
  };

  React.useEffect(() => {
    // Add value as innerHTML
    refs.value.current.innerHTML = value;
  }, [value]);

  const paste = async () => {
    const value_ = await navigator.clipboard.read();

    if (value_) {
      let values: any = '';

      for (const item of Array.from(value_)) {
        const valueItem = await item.getType('text/html');

        values += await valueItem.text();
      }

      window.document.execCommand('insertHTML', undefined, values);
    }
  };

  const method = React.useCallback((command: string) => (argument: any) => {
    switch (command) {
      // updates
      case 'italic':
        window.document.execCommand('italic');

        break;

      case 'underline':
        window.document.execCommand('underline');

        break;

      case 'bold':
        window.document.execCommand('bold');

        break;

      case 'strike-line':
        window.document.execCommand('strikeThrough');

        break;

      case 'align-left':
        window.document.execCommand('justifyLeft');

        break;

      case 'align-center':
        window.document.execCommand('justifyCenter');

        break;

      case 'align-right':
        window.document.execCommand('justifyRight');

        break;

      case 'align-justify':
        window.document.execCommand('justifyFull');

        break;

      case 'superscript':
        window.document.execCommand('superscript');

        break;

      case 'subscript':
        window.document.execCommand('subscript');

        break;

      case 'indent':
        window.document.execCommand('indent');

        break;

      case 'outdent':
        window.document.execCommand('outdent');

        break;

      case 'list-ordered':
        window.document.execCommand('insertOrderedList');

        break;

      case 'list-unordered':
        window.document.execCommand('insertUnorderedList');

        break;

      case 'horizontal-rule':
        window.document.execCommand('insertHorizontalRule');

        break;

      case 'font-version':
        window.document.execCommand('formatBlock', undefined, argument);

        break;

      case 'font-family':
        window.document.execCommand('styleWithCSS', true);

        window.document.execCommand('fontName', undefined, argument);

        window.document.execCommand('styleWithCSS', false);

        break;

      case 'font-size':
        window.document.execCommand('styleWithCSS', true);

        window.document.execCommand('fontSize', undefined, argument);

        window.document.execCommand('styleWithCSS', false);

        break;

      // actions
      case 'copy':
        window.document.execCommand('copy');

        break;

      case 'cut':
        window.document.execCommand('cut');

        break;

      case 'paste':
        if (window.document.queryCommandSupported('paste')) window.document.execCommand('paste');
        else paste();

        break;

      case 'undo':
        window.document.execCommand('undo');

        break;

      case 'redo':
        window.document.execCommand('redo');

        break;

      case 'clear':
        window.document.execCommand('removeFormat');

        break;

      default:
        break;
    }
  }, []);

  const includes = (...args) => !is('array', exclude) || args.some(item => !exclude.includes(item));

  // italic, underline, bold
  // updates toolbar
  const updates_ = updates && (!is('array', exclude) || includes('font-family', 'font-version', 'font-size', 'font-color', 'font-background', 'italic', 'underline', 'bold', 'strike-line', 'align-left', 'align-center', 'align-right', 'align-justify', 'superscript', 'subscript', 'indent', 'outdent', 'list-ordered', 'list-unordered', 'horizontal-rule'));

  // copy, paste, cut
  // action toolbar
  const actions_ = actions && (!is('array', exclude) || includes('copy', 'paste', 'cut', 'clear', 'undo', 'redo'));

  const DividerProps = {
    color: 'inherit',

    ...DividerProps_,
  };

  const TooltipProps = {
    position: 'bottom',
    interactive: false,

    ...TooltipProps_,
  };

  const ToggleButtonsProps = {
    tonal,
    color,
    version: 'text',
    border: false,

    ...ToggleButtonsProps_,
  };

  const ToggleButtonProps = {
    size: 'small',

    ...ToggleButtonProps_,
  };

  const SelectProps = {
    tonal,
    color,

    version: 'outlined',

    size: 'small',

    MenuProps: {
      portal: true
    },

    ...SelectProps_
  };

  const ListItemProps = {
    size: 'small',

    PrimaryProps: {
      style: {
        fontFamily: 'inherit'
      }
    },

    ...ListItemProps_
  };

  const IconProps = {
    size: 'small',

    ...IconProps_
  };

  const WrapperToggleButton = React.useCallback((props: any) => {
    const {
      label,

      children,

      ...other
    } = props;

    return (
      <Tooltip
        label={label}

        {...TooltipProps}
      >
        {React.cloneElement(children, {
          ...other,

          ...children.props
        })}
      </Tooltip>
    );
  }, []);

  const onMouseDown = React.useCallback(() => {
    const selection = window.getSelection();

    refs.range.current = selection.getRangeAt(0);
  }, []);

  const onMouseUp = React.useCallback(() => {
    if (refs.range.current) {
      const selection = window.getSelection();

      selection.removeAllRanges();
      selection.addRange(refs.range.current);
    }
  }, []);

  const font_families = [
    ...fontFamilies,

    ...addFontFamilies
  ];

  const font_sizes = [
    { label: '11', value: 1 },
    { label: '14', value: 2 },
    { label: '16', value: 3 },
    { label: '18', value: 4 },
    { label: '24', value: 5 },
    { label: '32', value: 6 },
    { label: '48', value: 7 }
  ];

  const font_versions = [
    { label: <Type version='b2'>Normal text</Type>, value: 'p' },
    { label: <Type version='h1'>Heading 1</Type>, value: 'h1' },
    { label: <Type version='h2'>Heading 2</Type>, value: 'h2' },
    { label: <Type version='h3'>Heading 3</Type>, value: 'h3' },
    { label: <Type version='t1'>Heading 4</Type>, value: 'h4' },
    { label: <Type version='t2'>Heading 5</Type>, value: 'h5' }
  ];

  return (
    <Line
      ref={ref}

      gap={0}

      Component={Component}

      className={classNames([
        staticClassName('RichTextEditor', theme) && [
          'AmauiRichTextEditor-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {(updates || actions_) && (
        <Line
          tonal={tonal}

          color={color}

          version={version}

          gap={0}

          direction='column'

          align='unset'

          justify='unset'

          Component={Surface}

          {...ToolbarProps}

          className={classNames([
            staticClassName('RichTextEditor', theme) && [
              'AmauiRichTextEditor-toolbars'
            ],

            ToolbarProps?.className,
            classes.toolbars
          ])}
        >
          {updates_ && (
            <Line
              gap={2}

              direction='row'

              align='center'

              justify='flex-start'

              {...ToolbarUpdatesProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'AmauiRichTextEditor-toolbar'
                ],

                ToolbarUpdatesProps?.className,
                classes.toolbar,
                classes.toolbar_updates
              ])}
            >
              {includes('font-family', 'font-size', 'font-version') && (
                <Line
                  gap={1}

                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('font-version') && (
                    <Select
                      label='Font Version'

                      valueDefault={font_versions.find(item => item.value.includes('p')).value}

                      onChange={(valueNew: string) => method('font-version')(valueNew)}

                      onMouseUp={onMouseUp}

                      onMouseDown={onMouseDown}

                      {...SelectProps}

                      className={classNames([
                        staticClassName('RichTextEditor', theme) && [
                          'AmauiRichTextEditor-select'
                        ],

                        SelectProps?.className,
                        classes.select
                      ])}

                      style={{
                        minWidth: '150px'
                      }}
                    >
                      {font_versions.map(item => (
                        <ListItem
                          key={item.value}

                          primary={item.label}

                          value={item.value}

                          button

                          {...ListItemProps}
                        />
                      ))}
                    </Select>
                  )}

                  {includes('font-family') && (
                    <Select
                      label='Font Family'

                      valueDefault={font_families.find(item => item.label.includes('Roboto')).value}

                      onChange={(valueNew: string) => method('font-family')(valueNew)}

                      onMouseUp={onMouseUp}

                      onMouseDown={onMouseDown}

                      {...SelectProps}

                      className={classNames([
                        staticClassName('RichTextEditor', theme) && [
                          'AmauiRichTextEditor-select'
                        ],

                        SelectProps?.className,
                        classes.select
                      ])}

                      style={{
                        minWidth: '140px'
                      }}
                    >
                      {font_families.map(item => (
                        <ListItem
                          key={item.value}

                          primary={item.label}

                          value={item.value}

                          button

                          style={{
                            fontFamily: item.value
                          }}

                          {...ListItemProps}
                        />
                      ))}
                    </Select>
                  )}

                  {includes('font-size') && (
                    <Select
                      label='Font Size'

                      valueDefault={font_sizes.find(item => item.label.includes('14')).value}

                      onChange={(valueNew: string) => method('font-size')(+valueNew)}

                      onMouseUp={onMouseUp}

                      onMouseDown={onMouseDown}

                      {...SelectProps}

                      className={classNames([
                        staticClassName('RichTextEditor', theme) && [
                          'AmauiRichTextEditor-select'
                        ],

                        SelectProps?.className,
                        classes.select
                      ])}
                    >
                      {font_sizes.map(item => (
                        <ListItem
                          key={item.value}

                          primary={item.label}

                          value={item.value}

                          button

                          {...ListItemProps}
                        />
                      ))}
                    </Select>
                  )}
                </Line>
              )}

              {includes('italic', 'underlined', 'bold', 'strike-line') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('italic') && (
                    <WrapperToggleButton
                      label='Italic'
                    >
                      {is('function', render) ? render('italic', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}

                          onClick={method('italic')}
                        >
                          <IconItalic {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('underline') && (
                    <WrapperToggleButton
                      label='Underline'
                    >
                      {is('function', render) ? render('underline', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}

                          onClick={method('underline')}
                        >
                          <IconUnderline {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('bold') && (
                    <WrapperToggleButton
                      label='Bold'

                      onClick={method('bold')}
                    >
                      {is('function', render) ? render('bold', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconBold {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('strike-line') && (
                    <WrapperToggleButton
                      label='Strike Line'

                      onClick={method('strike-line')}
                    >
                      {is('function', render) ? render('strike-line', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconStrikeLine {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}
                </ToggleButtons>
              )}

              {includes('align-left', 'align-center', 'align-right', 'align-justify') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('align-left') && (
                    <WrapperToggleButton
                      label='Align Left'
                    >
                      {is('function', render) ? render('align-left', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}

                          onClick={method('align-left')}
                        >
                          <IconAlignLeft {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('align-center') && (
                    <WrapperToggleButton
                      label='Align Center'
                    >
                      {is('function', render) ? render('align-center', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}

                          onClick={method('align-center')}
                        >
                          <IconAlignCenter {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('align-right') && (
                    <WrapperToggleButton
                      label='Align Right'
                    >
                      {is('function', render) ? render('align-right', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}

                          onClick={method('align-right')}
                        >
                          <IconAlignRight {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('align-justify') && (
                    <WrapperToggleButton
                      label='Align Justify'
                    >
                      {is('function', render) ? render('align-justify', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}

                          onClick={method('align-justify')}
                        >
                          <IconAlignJustify {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}
                </ToggleButtons>
              )}

              {includes('indent', 'outdent') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('indent') && (
                    <WrapperToggleButton
                      label='Indent'

                      onClick={method('indent')}
                    >
                      {is('function', render) ? render('indent', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconIndent {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('outdent') && (
                    <WrapperToggleButton
                      label='Outdent'

                      onClick={method('outdent')}
                    >
                      {is('function', render) ? render('outdent', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconOutdent {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}
                </ToggleButtons>
              )}

              {includes('superscript', 'subscript') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('superscript') && (
                    <WrapperToggleButton
                      label='Superscript'

                      onClick={method('superscript')}
                    >
                      {is('function', render) ? render('superscript', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconSuperscript {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('subscript') && (
                    <WrapperToggleButton
                      label='Subscript'

                      onClick={method('subscript')}
                    >
                      {is('function', render) ? render('subscript', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconSubscript {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}
                </ToggleButtons>
              )}

              {includes('list-ordered', 'list-unordered') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('list-ordered') && (
                    <WrapperToggleButton
                      label='List Ordered'

                      onClick={method('list-ordered')}
                    >
                      {is('function', render) ? render('list-ordered', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconListOrdered {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('list-unordered') && (
                    <WrapperToggleButton
                      label='List Unordered'

                      onClick={method('list-unordered')}
                    >
                      {is('function', render) ? render('list-unordered', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconListUnordered {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}
                </ToggleButtons>
              )}

              {includes('horizontal-rule') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('horizontal-rule') && (
                    <WrapperToggleButton
                      label='Insert Horizontal Rule'

                      onClick={method('horizontal-rule')}
                    >
                      {is('function', render) ? render('horizontal-rule', ToggleButtonProps, refs.value.current, method) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconHorizontalRule {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}
                </ToggleButtons>
              )}
            </Line>
          )}

          {(updates_ && actions_) && (
            <Divider
              {...DividerProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'AmauiRichTextEditor-divider'
                ],

                DividerProps?.className,
                classes.divider,
                classes.divider_middle
              ])}
            />
          )}

          {actions_ && (
            <Line
              gap={2}

              direction='row'

              align='center'

              justify='flex-start'

              {...ToolbarActionsProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'AmauiRichTextEditor-toolbar'
                ],

                ToolbarActionsProps?.className,
                classes.toolbar,
                classes.toolbar_actions
              ])}
            >
              <Line
                direction='row'

                align='center'

                justify='space-between'

                style={{
                  width: '100%'
                }}
              >
                <Line
                  gap={2}

                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('copy', 'cut', 'paste') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('copy') && (
                        <WrapperToggleButton
                          label='Copy'
                        >
                          {is('function', render) ? render('copy', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('copy')}
                            >
                              <IconCopy {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('cut') && (
                        <WrapperToggleButton
                          label='Cut'
                        >
                          {is('function', render) ? render('cut', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('cut')}
                            >
                              <IconCut {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('paste') && (
                        <WrapperToggleButton
                          label='Paste'
                        >
                          {is('function', render) ? render('paste', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('paste')}
                            >
                              <IconPaste {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}
                    </ToggleButtons>
                  )}
                </Line>

                <Line
                  gap={2}

                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('clear') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('clear') && (
                        <WrapperToggleButton
                          label='Clear'
                        >
                          {is('function', render) ? render('clear', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('clear')}
                            >
                              <IconClear {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}
                    </ToggleButtons>
                  )}

                  {includes('undo', 'redo') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('undo') && (
                        <WrapperToggleButton
                          label='Undo'
                        >
                          {is('function', render) ? render('undo', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('undo')}
                            >
                              <IconUndo {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('redo') && (
                        <WrapperToggleButton
                          label='Redo'

                          onClick={method('redo')}
                        >
                          {is('function', render) ? render('redo', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}
                            >
                              <IconRedo {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}
                    </ToggleButtons>
                  )}
                </Line>
              </Line>
            </Line>
          )}

          <Divider
            {...DividerProps}

            className={classNames([
              staticClassName('RichTextEditor', theme) && [
                'AmauiRichTextEditor-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes.divider_end
            ])}
          />
        </Line>
      )}

      <Surface
        ref={refs.value}

        color='default'

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'AmauiRichTextEditor-value'
          ],

          classes.value
        ])}

        contentEditable
      />
    </Line>
  );
});

RichTextEditor.displayName = 'AmauiRichTextEditor';

export default RichTextEditor;
