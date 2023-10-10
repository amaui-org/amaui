import React from 'react';

import { is, parse } from '@amaui/utils';
import { classNames, colors, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';
import Type from '../Type';
import Icon from '../Icon';
import Append from '../Append';
import Select from '../Select';
import Tooltip from '../Tooltip';
import Switch from '../Switch';
import Label from '../Label';
import NumericTextField from '../NumericTextField';
import ColorTextField from '../ColorTextField';
import ToggleButtons from '../ToggleButtons';
import ToggleButton from '../ToggleButton';
import ClickListener from '../ClickListener';
import TextField from '../TextField';
import Drawing from '../Drawing';
import Button from '../Button';
import Surface from '../Surface';
import Divider from '../Divider';
import ListItem from '../ListItem';
import Line from '../Line';
import { ILine } from '../Line/Line';

import { print, save, staticClassName, TColor, TElement, TElementReference, TPropsAny, TTonal, TVersion } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%'
  },

  value: {
    padding: '16px',
    whiteSpace: 'break-spaces',

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
    },

    '& a': {
      color: theme.palette.color.primary.main,
      textDecoration: 'underline'
    },

    '& blockquote': {
      margin: '16px 0',
      marginInlineStart: '16px',
      padding: '20px 16px',
      borderInlineStart: `4px solid ${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.2)}`,
      background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.02 : 0.14),

      '& > *': {
        margin: '0px'
      },

      '& > $blockquote': {
        marginBlock: '16px'
      }
    },

    '& iframe': {
      display: 'block',
      maxWidth: '100%',
      margin: '16px auto'
    },

    '& video': {
      display: 'block',
      margin: '16px auto'
    },

    '& code': {
      padding: '2px 4px',
      borderRadius: '4px',
      color: theme.palette.text.default.primary,
      background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.1)
    },

    '& pre': {
      margin: '16px 0',
      padding: '16px',
      borderRadius: '8px',
      color: theme.palette.text.default.primary,
      background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.1),

      '& code': {
        padding: '0px',
        background: 'transparent'
      }
    },

    '& table': {
      margin: '16px auto',
      borderCollapse: 'collapse',
      border: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`,

      '& th, & td': {
        ...theme.typography.values.b2,
        height: '45px',
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`,
        borderRight: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`
      },

      '& th': {
        fontWeight: 500,
        borderBottom: `1px solid ${theme.palette.light ? theme.palette.color.neutral[50] : theme.palette.color.neutral[50]}`
      }
    },

    '& .amaui-Drawing-svg': {
      display: 'block',
      margin: '16px auto',
      background: theme.palette.color.neutral[100]
    }
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
    '&.amaui-Divider-root': {
      margin: 0
    }
  },

  divider_middle: {
    '&.amaui-Divider-root': {
      opacity: theme.palette.light ? 0.07 : 0.24
    }
  },

  divider_end: {
    '&.amaui-Divider-root': {
      opacity: theme.palette.light ? 0.14 : 0.4
    }
  },

  select: {
    '& .amaui-TextField-input-wrapper': {
      height: '40px',
      paddingBlock: '11px'
    },

    '& .amaui-Select-input': {
      '& > *': {
        ...theme.typography.values.b2,

        fontWeight: 400
      }
    }
  },

  miniMenu: {
    padding: '12px',
    borderRadius: theme.methods.shape.radius.value(140, 'px'),
    boxShadow: theme.shadows.values.default[2]
  },

  palette: {
    padding: '12px',
    borderRadius: '8px',
    boxShadow: theme.shadows.values.default[2]
  },

  paletteItem: {
    position: 'relative',
    width: '17px',
    height: '17px',
    cursor: 'pointer',
    borderRadius: '50%',
    boxShadow: theme.shadows.values.default[1],
    transition: theme.methods.transitions.make('box-shadow'),

    '&:hover': {
      boxShadow: theme.shadows.values.default[2],
    }
  },

  textFieldColor: {
    flex: '1 1 auto'
  },

  inputColor: {
    border: 'none',
    borderRadius: '50%',
    overflow: 'hidden',
    width: '17px',
    height: '17px',
    cursor: 'pointer',
    boxShadow: theme.shadows.values.default[1],

    '&::-webkit-color-swatch-wrapper': {
      padding: '0px'
    },

    '&::-webkit-color-swatch': {
      border: 'none'
    }
  }
}), { name: 'amaui-RichTextEditor' });

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

const IconMaterialFormatColorTextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorTextRounded'
      short_name='FormatColorText'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19Q2 18.175 2.588 17.587Q3.175 17 4 17H20Q20.825 17 21.413 17.587Q22 18.175 22 19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM7.15 14Q6.475 14 6.15 13.55Q5.825 13.1 6.075 12.45L10.325 1.15Q10.525 0.675 11.012 0.337Q11.5 0 12.025 0Q12.525 0 13 0.337Q13.475 0.675 13.675 1.15L17.925 12.45Q18.175 13.1 17.85 13.55Q17.525 14 16.825 14Q16.525 14 16.238 13.8Q15.95 13.6 15.85 13.325L14.85 10.4H9.2L8.15 13.325Q8.05 13.6 7.763 13.8Q7.475 14 7.15 14ZM9.9 8.4H14.1L12.05 2.6H11.95Z" />
    </Icon>
  );
});

const IconMaterialFormatColorFillRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFillRounded'
      short_name='FormatColorFill'

      {...props}
    >
      <path d="M10 16.75Q9.6 16.75 9.238 16.6Q8.875 16.45 8.575 16.175L3.825 11.425Q3.55 11.125 3.4 10.762Q3.25 10.4 3.25 10Q3.25 9.6 3.4 9.225Q3.55 8.85 3.825 8.575L8.575 3.8L6.875 2.1Q6.6 1.825 6.6 1.412Q6.6 1 6.9 0.7Q7.2 0.425 7.6 0.412Q8 0.4 8.3 0.7L16.175 8.575Q16.475 8.85 16.613 9.225Q16.75 9.6 16.75 10Q16.75 10.4 16.613 10.762Q16.475 11.125 16.175 11.425L11.425 16.175Q11.15 16.45 10.775 16.6Q10.4 16.75 10 16.75ZM10 5.225 5.225 10Q5.225 10 5.225 10Q5.225 10 5.225 10H14.775Q14.775 10 14.775 10Q14.775 10 14.775 10ZM19 17Q18.175 17 17.587 16.413Q17 15.825 17 15Q17 14.475 17.312 13.875Q17.625 13.275 18 12.75Q18.225 12.45 18.475 12.125Q18.725 11.8 19 11.5Q19.275 11.8 19.525 12.125Q19.775 12.45 20 12.75Q20.375 13.275 20.688 13.875Q21 14.475 21 15Q21 15.825 20.413 16.413Q19.825 17 19 17ZM4 24Q3.175 24 2.588 23.413Q2 22.825 2 22Q2 21.175 2.588 20.587Q3.175 20 4 20H20Q20.825 20 21.413 20.587Q22 21.175 22 22Q22 22.825 21.413 23.413Q20.825 24 20 24Z" />
    </Icon>
  );
});

const IconMaterialAddLinkRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLinkRounded'
      short_name='AddLink'

      {...props}
    >
      <path d="M7 17Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 9.925 3.463 8.462Q4.925 7 7 7H10Q10.425 7 10.713 7.287Q11 7.575 11 8Q11 8.425 10.713 8.712Q10.425 9 10 9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16Q11 16.425 10.713 16.712Q10.425 17 10 17ZM9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11H15Q15.425 11 15.713 11.287Q16 11.575 16 12Q16 12.425 15.713 12.712Q15.425 13 15 13ZM22 12H20Q20 10.75 19.125 9.875Q18.25 9 17 9H14Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7H17Q19.075 7 20.538 8.462Q22 9.925 22 12ZM18 20Q17.575 20 17.288 19.712Q17 19.425 17 19V17H15Q14.575 17 14.288 16.712Q14 16.425 14 16Q14 15.575 14.288 15.287Q14.575 15 15 15H17V13Q17 12.575 17.288 12.287Q17.575 12 18 12Q18.425 12 18.712 12.287Q19 12.575 19 13V15H21Q21.425 15 21.712 15.287Q22 15.575 22 16Q22 16.425 21.712 16.712Q21.425 17 21 17H19V19Q19 19.425 18.712 19.712Q18.425 20 18 20Z" />
    </Icon>
  );
});

const IconMaterialLinkOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOffRounded'
      short_name='LinkOff'

      {...props}
    >
      <path d="M15.825 13 13.825 11H15.825Q16.25 11 16.538 11.287Q16.825 11.575 16.825 12Q16.825 12.425 16.538 12.712Q16.25 13 15.825 13ZM19.25 16.45 17.75 14.9Q18.725 14.625 19.363 13.837Q20 13.05 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9H14Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7H17Q19.075 7 20.538 8.438Q22 9.875 22 12Q22 13.425 21.25 14.637Q20.5 15.85 19.25 16.45ZM19.1 21.9 2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM10 17H7Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 10.25 3.062 8.912Q4.125 7.575 5.75 7.15L7.6 9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16Q11 16.425 10.713 16.712Q10.425 17 10 17ZM11.6 13H8.175Q7.75 13 7.463 12.712Q7.175 12.425 7.175 12Q7.175 11.575 7.463 11.287Q7.75 11 8.175 11H9.625Z" />
    </Icon>
  );
});

const IconMaterialImageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageRounded'
      short_name='Image'

      {...props}
    >
      <path d="M7 17H17Q17.3 17 17.45 16.725Q17.6 16.45 17.4 16.2L14.65 12.525Q14.5 12.325 14.25 12.325Q14 12.325 13.85 12.525L11.25 16L9.4 13.525Q9.25 13.325 9 13.325Q8.75 13.325 8.6 13.525L6.6 16.2Q6.4 16.45 6.55 16.725Q6.7 17 7 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z" />
    </Icon>
  );
});

const IconMaterialFormatQuoteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteRounded'
      short_name='FormatQuote'

      {...props}
    >
      <path d="M15 11H18V8H15ZM6 11H9V8H6ZM17.175 17Q16.425 17 16.025 16.363Q15.625 15.725 15.975 15.05L17 13H15Q14.175 13 13.588 12.412Q13 11.825 13 11V8Q13 7.175 13.588 6.588Q14.175 6 15 6H18Q18.825 6 19.413 6.588Q20 7.175 20 8V12.525Q20 12.75 19.962 12.988Q19.925 13.225 19.8 13.425L18.375 16.25Q18.2 16.6 17.875 16.8Q17.55 17 17.175 17ZM8.175 17Q7.425 17 7.025 16.363Q6.625 15.725 6.975 15.05L8 13H6Q5.175 13 4.588 12.412Q4 11.825 4 11V8Q4 7.175 4.588 6.588Q5.175 6 6 6H9Q9.825 6 10.413 6.588Q11 7.175 11 8V12.525Q11 12.75 10.963 12.988Q10.925 13.225 10.8 13.425L9.375 16.25Q9.2 16.6 8.875 16.8Q8.55 17 8.175 17ZM7.5 9.5ZM16.5 9.5Z" />
    </Icon>
  );
});

const IconMaterialVideocamRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamRounded'
      short_name='Videocam'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L21.15 7.35Q21.4 7.1 21.7 7.225Q22 7.35 22 7.7V16.3Q22 16.65 21.7 16.775Q21.4 16.9 21.15 16.65L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20ZM4 18H16Q16 18 16 18Q16 18 16 18V6Q16 6 16 6Q16 6 16 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z" />
    </Icon>
  );
});

const IconMaterialPlayArrowRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowRounded'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M9.525 18.025Q9.025 18.35 8.512 18.062Q8 17.775 8 17.175V6.825Q8 6.225 8.512 5.937Q9.025 5.65 9.525 5.975L17.675 11.15Q18.125 11.45 18.125 12Q18.125 12.55 17.675 12.85ZM10 12ZM10 15.35 15.25 12 10 8.65Z" />
    </Icon>
  );
});

const IconMaterialCodeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeRounded'
      short_name='Code'

      {...props}
    >
      <path d="M16.7 17.3Q16.425 17.575 16.013 17.575Q15.6 17.575 15.3 17.275Q15 16.975 15 16.562Q15 16.15 15.3 15.85L19.175 11.975L15.275 8.075Q15 7.8 15.012 7.387Q15.025 6.975 15.3 6.7Q15.575 6.425 16 6.425Q16.425 6.425 16.7 6.7L21.3 11.3Q21.6 11.6 21.6 12Q21.6 12.4 21.3 12.7ZM7.3 17.3 2.7 12.7Q2.4 12.4 2.4 12Q2.4 11.6 2.7 11.3L7.3 6.7Q7.575 6.425 8 6.412Q8.425 6.4 8.725 6.7Q9.025 7 9.025 7.412Q9.025 7.825 8.725 8.125L4.825 12.025L8.725 15.925Q9 16.2 8.988 16.612Q8.975 17.025 8.7 17.3Q8.425 17.575 8 17.575Q7.575 17.575 7.3 17.3Z" />
    </Icon>
  );
});

const IconMaterialDeleteSweepRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepRounded'
      short_name='DeleteSweep'

      {...props}
    >
      <path d="M16 18Q15.575 18 15.288 17.712Q15 17.425 15 17Q15 16.575 15.288 16.288Q15.575 16 16 16H18Q18.425 16 18.712 16.288Q19 16.575 19 17Q19 17.425 18.712 17.712Q18.425 18 18 18ZM16 10Q15.575 10 15.288 9.712Q15 9.425 15 9Q15 8.575 15.288 8.287Q15.575 8 16 8H21Q21.425 8 21.712 8.287Q22 8.575 22 9Q22 9.425 21.712 9.712Q21.425 10 21 10ZM16 14Q15.575 14 15.288 13.712Q15 13.425 15 13Q15 12.575 15.288 12.287Q15.575 12 16 12H20Q20.425 12 20.712 12.287Q21 12.575 21 13Q21 13.425 20.712 13.712Q20.425 14 20 14ZM5 19Q4.175 19 3.587 18.413Q3 17.825 3 17V8Q2.575 8 2.288 7.713Q2 7.425 2 7Q2 6.575 2.288 6.287Q2.575 6 3 6H6V5.5Q6 5.075 6.287 4.787Q6.575 4.5 7 4.5H9Q9.425 4.5 9.713 4.787Q10 5.075 10 5.5V6H13Q13.425 6 13.713 6.287Q14 6.575 14 7Q14 7.425 13.713 7.713Q13.425 8 13 8V17Q13 17.825 12.413 18.413Q11.825 19 11 19ZM5 8V17Q5 17 5 17Q5 17 5 17H11Q11 17 11 17Q11 17 11 17V8ZM5 8V17Q5 17 5 17Q5 17 5 17Q5 17 5 17Q5 17 5 17Z" />
    </Icon>
  );
});

const IconMaterialSelectAllRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllRounded'
      short_name='SelectAll'

      {...props}
    >
      <path d="M3 5Q3 4.175 3.587 3.587Q4.175 3 5 3V5ZM3 13V11H5V13ZM7 21V19H9V21ZM3 9V7H5V9ZM11 5V3H13V5ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19H5ZM3 17V15H5V17ZM7 5V3H9V5ZM11 21V19H13V21ZM19 13V11H21V13ZM19 21V19H21Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 9V7H21V9ZM19 17V15H21V17ZM15 21V19H17V21ZM15 5V3H17V5ZM8 17Q7.575 17 7.287 16.712Q7 16.425 7 16V8Q7 7.575 7.287 7.287Q7.575 7 8 7H16Q16.425 7 16.712 7.287Q17 7.575 17 8V16Q17 16.425 16.712 16.712Q16.425 17 16 17ZM9 15H15V9H9Z" />
    </Icon>
  );
});

const IconMaterialPrintRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintRounded'
      short_name='Print'

      {...props}
    >
      <path d="M16 8V5H8V8H6V4Q6 3.575 6.287 3.287Q6.575 3 7 3H17Q17.425 3 17.712 3.287Q18 3.575 18 4V8ZM4 10Q4 10 4.287 10Q4.575 10 5 10H19Q19.425 10 19.712 10Q20 10 20 10H18H6ZM18 12.5Q18.425 12.5 18.712 12.212Q19 11.925 19 11.5Q19 11.075 18.712 10.787Q18.425 10.5 18 10.5Q17.575 10.5 17.288 10.787Q17 11.075 17 11.5Q17 11.925 17.288 12.212Q17.575 12.5 18 12.5ZM8 19H16Q16 19 16 19Q16 19 16 19V15H8V19Q8 19 8 19Q8 19 8 19ZM8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V17H3Q2.575 17 2.288 16.712Q2 16.425 2 16V11Q2 9.725 2.875 8.863Q3.75 8 5 8H19Q20.275 8 21.138 8.863Q22 9.725 22 11V16Q22 16.425 21.712 16.712Q21.425 17 21 17H18V19Q18 19.825 17.413 20.413Q16.825 21 16 21ZM20 15V11Q20 10.575 19.712 10.287Q19.425 10 19 10H5Q4.575 10 4.287 10.287Q4 10.575 4 11V15H6V13H18V15Z" />
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

const IconMaterialTableRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRounded'
      short_name='Table'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 9H19V5H5ZM10.325 14H13.675V11H10.325ZM10.325 19H13.675V16H10.325ZM5 14H8.325V11H5ZM15.675 14H19V11H15.675ZM5 19H8.325V16H5ZM15.675 19H19V16H15.675Z" />
    </Icon>
  );
});

const IconMaterialDrawRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawRounded'
      short_name='Draw'

      {...props}
    >
      <path d="M14 21Q13.575 21 13.288 20.712Q13 20.425 13 20Q13 19.575 13.288 19.288Q13.575 19 14 19Q15.175 19 16.087 18.538Q17 18.075 17 17.5Q17 17.15 16.675 16.85Q16.35 16.55 15.775 16.3L17.25 14.825Q18.05 15.3 18.525 15.95Q19 16.6 19 17.5Q19 19.15 17.425 20.075Q15.85 21 14 21ZM4.575 13.35Q3.85 12.925 3.425 12.362Q3 11.8 3 11Q3 9.95 3.775 9.237Q4.55 8.525 6.55 7.65Q8.125 6.925 8.562 6.637Q9 6.35 9 6Q9 5.6 8.512 5.3Q8.025 5 7 5Q6.375 5 5.95 5.15Q5.525 5.3 5.175 5.65Q4.9 5.925 4.5 5.975Q4.1 6.025 3.775 5.75Q3.45 5.5 3.4 5.1Q3.35 4.7 3.625 4.375Q4.1 3.8 4.988 3.4Q5.875 3 7 3Q8.8 3 9.9 3.812Q11 4.625 11 6Q11 6.975 10.275 7.75Q9.55 8.525 7.35 9.475Q5.9 10.1 5.45 10.4Q5 10.7 5 11Q5 11.225 5.287 11.438Q5.575 11.65 6.075 11.85ZM18.85 10.4 14.6 6.15 15.65 5.1Q16.25 4.5 17.087 4.5Q17.925 4.5 18.5 5.1L19.9 6.5Q20.5 7.075 20.5 7.912Q20.5 8.75 19.9 9.35ZM6 19H7.4L14.6 11.8L13.2 10.4L6 17.6ZM4.5 21Q4.3 21 4.15 20.85Q4 20.7 4 20.5V16.95Q4 16.9 4.15 16.6L13.2 7.55L17.45 11.8L8.4 20.85Q8.35 20.9 8.05 21ZM13.2 10.4 14.6 11.8Z" />
    </Icon>
  );
});

export interface IRichTextEditor extends ILine {
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;

  value?: string;
  onChange?: (event: React.ChangeEvent<any>) => any;

  render?: (version: string, props: TPropsAny, value: string, update: (command: string) => any) => TElement;

  miniMenu?: boolean;

  miniMenuInclude?: Array<string>;

  exclude?: Array<string>;

  updates?: boolean;

  actions?: boolean;

  fontFamilies?: Array<{
    value?: string;

    label?: string;
  }>;

  addFontFamilies?: Array<{
    value?: string;

    label?: string;
  }>;

  // Update
  IconItalic?: TElementReference;
  IconUnderline?: TElementReference;
  IconBold?: TElementReference;
  IconStrikeLine?: TElementReference;

  IconColor?: TElementReference;
  IconBackground?: TElementReference;

  IconAlignLeft?: TElementReference;
  IconAlignCenter?: TElementReference;
  IconAlignRight?: TElementReference;
  IconAlignJustify?: TElementReference;

  IconIndent?: TElementReference;
  IconOutdent?: TElementReference;

  IconSuperscript?: TElementReference;
  IconSubscript?: TElementReference;

  IconListOrdered?: TElementReference;
  IconListUnordered?: TElementReference;

  IconHorizontalRule?: TElementReference;

  IconLinkAdd?: TElementReference;
  IconLinkRemove?: TElementReference;

  IconQuote?: TElementReference;
  IconImage?: TElementReference;
  IconVideo?: TElementReference;
  IconVideoYoutube?: TElementReference;
  IconTable?: TElementReference;
  IconCode?: TElementReference;
  IconDrawing?: TElementReference;

  // Action
  IconCopy?: TElementReference;
  IconCut?: TElementReference;
  IconPaste?: TElementReference;

  IconDelete?: TElementReference;

  IconClear?: TElementReference;
  IconSelectAll?: TElementReference;

  IconSave?: TElementReference;
  IconPrint?: TElementReference;

  IconUndo?: TElementReference;
  IconRedo?: TElementReference;

  AppendProps?: TPropsAny;
  ToolbarProps?: TPropsAny;
  ToolbarUpdatesProps?: TPropsAny;
  ToolbarActionsProps?: TPropsAny;
  ToggleButtonProps?: TPropsAny;
  ToggleButtonsProps?: TPropsAny;
  DividerProps?: TPropsAny;
  SelectProps?: TPropsAny;
  ListItemProps?: TPropsAny;
  TooltipProps?: TPropsAny;
  MiniMenuProps?: TPropsAny;
  DrawingProps?: TPropsAny;
  IconProps?: TPropsAny;
  ColorTextFieldProps?: TPropsAny;
}

const RichTextEditor = React.forwardRef((props__: IRichTextEditor, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiRichTextEditor?.props?.default, ...props__ }), [props__]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'default',
    version = 'filled',

    value,
    onChange,

    render,

    miniMenu = true,

    miniMenuInclude = [
      'italic',
      'underline',
      'bold',
      'strike-line',

      'font-color',
      'font-background',

      'align-left',
      'align-center',
      'align-right',
      'align-justify',

      'link-add',
      'link-remove',

      'clear'
    ],

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

    IconColor = IconMaterialFormatColorTextRounded,
    IconBackground = IconMaterialFormatColorFillRounded,

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

    IconLinkAdd = IconMaterialAddLinkRounded,
    IconLinkRemove = IconMaterialLinkOffRounded,

    IconQuote = IconMaterialFormatQuoteRounded,
    IconImage = IconMaterialImageRounded,
    IconVideo = IconMaterialVideocamRounded,
    IconVideoYoutube = IconMaterialPlayArrowRounded,
    IconTable = IconMaterialTableRounded,
    IconCode = IconMaterialCodeRounded,
    IconDrawing = IconMaterialDrawRounded,

    // Action
    IconCopy = IconMaterialContentCopyRounded,
    IconCut = IconMaterialContentCutRounded,
    IconPaste = IconMaterialContentPasteRounded,

    IconDelete = IconMaterialDeleteSweepRounded,

    IconClear = IconMaterialFormatClearRounded,
    IconSelectAll = IconMaterialSelectAllRounded,

    IconSave = IconMaterialDownloadRounded,
    IconPrint = IconMaterialPrintRounded,

    IconUndo = IconMaterialUndoRounded,
    IconRedo = IconMaterialRedoRounded,

    AppendProps: AppendProps_,
    ToolbarProps,
    ToolbarUpdatesProps,
    ToolbarActionsProps,
    ToggleButtonProps: ToggleButtonProps_,
    ToggleButtonsProps: ToggleButtonsProps_,
    DividerProps: DividerProps_,
    SelectProps: SelectProps_,
    ListItemProps: ListItemProps_,
    TooltipProps: TooltipProps_,
    MiniMenuProps: MiniMenuProps_,
    DrawingProps,
    IconProps: IconProps_,
    ColorTextFieldProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [inputValues, setInputValues] = React.useState<any>({});
  const [open, setOpen] = React.useState<any>({});
  const [selected, setSelected] = React.useState<any[]>([]);
  const [selection, setSelection] = React.useState<DOMRect>();

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>(),
    range: React.useRef<any>(),
    inputValues: React.useRef<any>(),
    open: React.useRef<any>(),
    props: React.useRef<any>(),
    selected: React.useRef<any>(),
    miniMenu: React.useRef<any>(),
    miniMenuInclude: React.useRef<any>(),
    miniMenuElements: {
      color: React.useRef<any>(),
      colorPalette: React.useRef<any>(),
      background: React.useRef<any>(),
      backgroundPalette: React.useRef<any>(),
      linkAdd: React.useRef<any>(),
      linkAddInput: React.useRef<any>(),
      linkRemove: React.useRef<any>(),
    },
    elements: {
      color: React.useRef<any>(),
      background: React.useRef<any>(),
      linkAdd: React.useRef<any>(),
      linkRemove: React.useRef<any>(),
      quote: React.useRef<any>(),
      image: React.useRef<any>(),
      video: React.useRef<any>(),
      videoYoutube: React.useRef<any>(),
      table: React.useRef<any>(),
      drawing: React.useRef<any>(),
      drawingSvg: React.useRef<any>(),
      drawingSize: React.useRef<any>(),
      drawingSelect: React.useRef<any>(),
      drawingPalette: React.useRef<any>(),
      code: React.useRef<any>()
    }
  };

  refs.inputValues.current = inputValues;

  refs.open.current = open;

  refs.props.current = props;

  refs.selected.current = selected;

  refs.miniMenuInclude.current = miniMenuInclude;

  React.useEffect(() => {
    // Add value as innerHTML
    refs.value.current.innerHTML = value;
  }, [value]);

  React.useEffect(() => {
    const selection_ = window.getSelection();

    if (
      selection_.anchorNode &&
      !(selection_.anchorNode as any)?.className?.includes('TextField')
    ) refs.range.current = selection_.getRangeAt(0);
  }, [open]);

  React.useEffect(() => {
    if (!selection) {
      updateOpen('colorMiniMenu', false);
      updateOpen('backgroundMiniMenu', false);
      updateOpen('linkMiniMenu', false);
    }
  }, [selection]);

  const query = (command: string) => {
    const rootDocument = refs.root.current?.ownerDocument || window.document;

    return parse(rootDocument.queryCommandValue(command));
  };

  const includesMinMenu = (...args) => args.some(item => refs.miniMenuInclude.current.includes(item));

  const clear = (element: HTMLElement = refs.value.current) => {
    const children_ = Array.from(element.children);

    const toRemove = [];
    const other_ = [];

    children_.forEach((item: any, index: number) => {
      (
        (item.tagName === 'SPAN' && !item.innerHTML) ||
        (item.tagName === 'BR' && index > 0 && (children_[index - 1].tagName === 'SPAN' && !children_[index - 1].innerHTML))
      ) ? toRemove.push(item) : other_.push(item);
    });

    toRemove.forEach((item: HTMLElement) => item.remove());

    other_.forEach(item => clear(item as any));
  };

  const onUpdate = (event: React.ChangeEvent<any>) => {
    // Clear from empty element values
    clear();

    if (is('function', onChange)) onChange(event);
  };

  const updateInputValues = (property: string, itemValue: any) => {
    setInputValues(values => ({
      ...values,

      [property]: itemValue
    }));
  };

  const updateOpen = (property: string, itemValue: any) => {
    setOpen(values => ({
      ...values,

      [property]: itemValue
    }));
  };

  const paste = async () => {
    const rootDocument = refs.root.current?.ownerDocument || window.document;

    const value_ = await navigator.clipboard.read();

    if (value_) {
      let values: any = '';

      for (const item of Array.from(value_)) {
        const valueItem = await item.getType('text/html');

        values += await valueItem.text();
      }

      rootDocument.execCommand('insertHTML', undefined, values);
    }
  };

  const method = React.useCallback((command: string) => (argument: any) => {
    const rootDocument = refs.root.current?.ownerDocument || window.document;

    switch (command) {
      // updates
      case 'italic':
        rootDocument.execCommand('italic');

        if (query('italic')) setSelected(values => [...values, 'italic']);
        else setSelected(values => values.filter(item => item !== 'italic'));

        break;

      case 'underline':
        rootDocument.execCommand('underline');

        if (query('underline')) setSelected(values => [...values, 'underline']);
        else setSelected(values => values.filter(item => item !== 'underline'));

        break;

      case 'bold':
        rootDocument.execCommand('bold');

        if (query('bold')) setSelected(values => [...values, 'bold']);
        else setSelected(values => values.filter(item => item !== 'bold'));

        break;

      case 'strike-line':
        rootDocument.execCommand('strikeThrough');

        if (query('strikeThrough')) setSelected(values => [...values, 'strike-line']);
        else setSelected(values => values.filter(item => item !== 'strike-line'));

        break;

      case 'align-left':
        rootDocument.execCommand('justifyLeft');

        if (query('justifyLeft')) setSelected(values => [...values.filter(item => !item.includes('align')), 'align-left']);
        else setSelected(values => values.filter(item => item !== 'align-left'));

        break;

      case 'align-center':
        rootDocument.execCommand('justifyCenter');

        if (query('justifyCenter')) setSelected(values => [...values.filter(item => !item.includes('align')), 'align-center']);
        else setSelected(values => values.filter(item => item !== 'align-center'));

        break;

      case 'align-right':
        rootDocument.execCommand('justifyRight');

        if (query('justifyRight')) setSelected(values => [...values.filter(item => !item.includes('align')), 'align-right']);
        else setSelected(values => values.filter(item => item !== 'align-right'));

        break;

      case 'align-justify':
        rootDocument.execCommand('justifyFull');

        if (query('justifyFull')) setSelected(values => [...values.filter(item => !item.includes('align')), 'align-justify']);
        else setSelected(values => values.filter(item => item !== 'align-justify'));

        break;

      case 'superscript':
        rootDocument.execCommand('superscript');

        if (query('superscript')) setSelected(values => [...values, 'superscript']);
        else setSelected(values => values.filter(item => item !== 'superscript'));

        break;

      case 'subscript':
        rootDocument.execCommand('subscript');

        if (query('subscript')) setSelected(values => [...values, 'subscript']);
        else setSelected(values => values.filter(item => item !== 'subscript'));

        break;

      case 'indent':
        rootDocument.execCommand('indent');

        break;

      case 'outdent':
        rootDocument.execCommand('outdent');

        break;

      case 'font-version':
        rootDocument.execCommand('formatBlock', undefined, argument);

        break;

      case 'font-family':
        rootDocument.execCommand('styleWithCSS', true);

        rootDocument.execCommand('fontName', undefined, argument);

        rootDocument.execCommand('styleWithCSS', false);

        break;

      case 'font-size':
        rootDocument.execCommand('styleWithCSS', true);

        rootDocument.execCommand('fontSize', undefined, argument);

        rootDocument.execCommand('styleWithCSS', false);

        break;

      case 'font-color':
        rootDocument.execCommand('styleWithCSS', true);

        rootDocument.execCommand('foreColor', undefined, argument);

        rootDocument.execCommand('styleWithCSS', false);

        break;

      case 'font-background':
        rootDocument.execCommand('styleWithCSS', true);

        rootDocument.execCommand('backColor', undefined, argument);

        rootDocument.execCommand('styleWithCSS', false);

        break;

      case 'list-ordered':
        rootDocument.execCommand('insertOrderedList');

        if (query('insertOrderedList')) setSelected(values => [...values.filter(item => !item.includes('list')), 'list-ordered']);
        else setSelected(values => values.filter(item => item !== 'list-ordered'));

        break;

      case 'list-unordered':
        rootDocument.execCommand('insertUnorderedList');

        if (query('insertUnorderedList')) setSelected(values => [...values.filter(item => !item.includes('list')), 'list-unordered']);
        else setSelected(values => values.filter(item => item !== 'list-unordered'));

        break;

      case 'horizontal-rule':
        rootDocument.execCommand('insertHorizontalRule');

        break;

      case 'link-add':
        rootDocument.execCommand('createLink', undefined, argument);

        break;

      case 'link-remove':
        rootDocument.execCommand('unlink');

        break;

      case 'image':
        rootDocument.execCommand('insertImage', undefined, argument);

        break;

      case 'html':
        rootDocument.execCommand('insertHTML', undefined, argument);

        break;

      // actions
      case 'copy':
        rootDocument.execCommand('copy');

        break;

      case 'cut':
        rootDocument.execCommand('cut');

        break;

      case 'paste':
        if (rootDocument.queryCommandSupported('paste')) rootDocument.execCommand('paste');
        else paste();

        break;

      case 'delete':
        rootDocument.execCommand('delete');

        break;

      case 'clear':
        rootDocument.execCommand('removeFormat');

        break;

      case 'select-all':
        rootDocument.execCommand('selectAll');

        break;

      case 'undo':
        rootDocument.execCommand('undo');

        break;

      case 'redo':
        rootDocument.execCommand('redo');

        break;

      default:
        break;
    }
  }, []);

  const includes = (...args) => !is('array', exclude) || args.some(item => !exclude.includes(item));

  // italic, underline, bold
  // updates toolbar
  const updateOptions = ['font-family', 'font-version', 'font-size', 'font-color', 'font-background', 'italic', 'underline', 'bold', 'strike-line', 'align-left', 'align-center', 'align-right', 'align-justify', 'superscript', 'subscript', 'indent', 'outdent', 'list-ordered', 'list-unordered', 'horizontal-rule', 'link-add', 'link-remove', 'quote', 'image', 'video', 'video-youtube', 'table', 'drawing', 'code'];

  const updates_ = updates && (!is('array', exclude) || includes(...updateOptions));

  // copy, paste, cut
  // action toolbar
  const actions_ = actions && (!is('array', exclude) || includes('copy', 'paste', 'cut', 'clear', 'undo', 'redo', 'delete', 'select-all', 'save', 'print'));

  const AppendProps: any = {
    padding: [14, 14],

    ...AppendProps_
  };

  const DividerProps: any = {
    color: 'inherit',

    ...DividerProps_,
  };

  const TooltipProps: any = {
    position: 'bottom',
    interactive: false,

    ...TooltipProps_,
  };

  const ToggleButtonsProps: any = {
    tonal,
    color,
    version: 'text',
    border: false,

    ...ToggleButtonsProps_,
  };

  const ToggleButtonProps: any = {
    size: 'small',

    ...ToggleButtonProps_,
  };

  const MiniMenuProps: any = {
    tonal,

    color: refs.props.current.color !== undefined ? refs.props.current.color : 'themed',

    ...MiniMenuProps_
  };

  const SelectProps: any = {
    tonal,

    color: refs.props.current.color !== undefined ? refs.props.current.color : 'themed',

    version: 'outlined',

    size: 'small',

    ListProps: {
      tonal,

      color: refs.props.current.color !== undefined ? refs.props.current.color : 'themed'
    },

    MenuProps: {
      portal: true
    },

    ...SelectProps_
  };

  const ListItemProps: any = {
    size: 'small',

    PrimaryProps: {
      style: {
        fontFamily: 'inherit'
      }
    },

    ...ListItemProps_
  };

  const IconProps: any = {
    size: 'small',

    ...IconProps_
  };

  const WrapperToggleButton = React.useCallback(React.forwardRef((props_: any, ref_: any) => {
    const {
      open: open_,

      label,

      children: children_,

      ...other_
    } = props_;

    return (
      <Tooltip
        open={open_ !== undefined ? open_ : undefined}

        label={label}

        {...TooltipProps}
      >
        {React.cloneElement(children_, {
          ...other_,

          ...children_.props
        })}
      </Tooltip>
    );
  }), []);

  const WrapperAppend = React.useCallback((props_: any) => {
    const {
      open: open_,

      element,

      anchorElement,

      onClose,

      children: children_,

      ...other_
    } = props_;

    return (
      <Append
        open={open_}

        element={(
          <div>
            <Fade
              in={open_}

              add
            >
              {React.cloneElement(element)}
            </Fade>
          </div>
        )}

        anchorElement={anchorElement}

        portal

        alignment='center'

        position='bottom'

        {...AppendProps}
      >
        {React.cloneElement(children_, {
          ...other_,

          ...children_.props
        })}
      </Append>
    );
  }, []);

  const onMouseDown = React.useCallback(() => {
    const selection_ = window.getSelection();

    if (
      selection_.anchorNode &&
      !(selection_.anchorNode as any)?.className?.includes('TextField')
    ) refs.range.current = selection_.getRangeAt(0);
  }, []);

  const onMouseUp = React.useCallback(() => {
    if (refs.range.current) {
      const selection_ = window.getSelection();

      selection_.removeAllRanges();
      selection_.addRange(refs.range.current);
    }
  }, []);

  const PaletteItem = React.useCallback((props_: any) => {
    const {
      color: color_,

      ...other_
    } = props_;

    return (
      <span
        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'amaui-RichTextEditor-palette-item'
          ],

          classes.paletteItem
        ])}

        style={{
          background: color_
        }}

        {...other_}
      />
    );
  }, []);

  const Palette = React.useCallback(React.forwardRef((props_: any, ref_: any) => {
    const {
      version: version_,

      onUpdate: onUpdate_,

      onClose,

      ...other_
    } = props_;

    return (
      <Line
        ref={ref_}

        gap={1}

        direction='column'

        tonal={tonal}

        color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

        Component={Surface}

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'amaui-RichTextEditor-palette'
          ],

          classes.palette
        ])}

        {...other_}
      >
        {/* Colors */}
        <Line
          gap={0.5}

          onMouseUp={onMouseUp}

          onMouseDown={onMouseDown}
        >
          <Line
            gap={0.5}

            direction='row'

            style={{
              width: '100%'
            }}
          >
            <PaletteItem
              color='#000000'

              onClick={() => {
                onUpdate_('#000000');

                onClose();
              }}
            />

            <PaletteItem
              color='#ffffff'

              onClick={() => {
                onUpdate_('#ffffff');

                onClose();
              }}
            />
          </Line>

          {Object.keys(colors).filter(item => !['black', 'white'].includes(item)).map((item: string, index: number) => (
            <Line
              key={index}

              gap={0.5}

              direction='row'

              style={{
                width: '100%'
              }}
            >
              {Object.keys(colors[item]).map((item_: string, index_: number) => (
                <PaletteItem
                  key={index_}

                  color={colors[item][item_]}

                  onClick={() => {
                    if (refs.range.current) {
                      const selection_ = window.getSelection();

                      selection_.removeAllRanges();
                      selection_.addRange(refs.range.current);
                    }

                    onUpdate_(colors[item][item_]);

                    onClose();
                  }}
                />
              ))}
            </Line>
          ))}
        </Line>

        {/* Input color value */}
        <Divider />

        <Line
          gap={0.5}

          direction='row'

          align='center'

          style={{
            width: '100%'
          }}
        >
          <ColorTextField
            tonal={tonal}

            color={color}

            label='Custom color'

            version='outlined'

            size='small'

            value={refs.inputValues.current[version_]}

            onChange={valueNew => updateInputValues(version_, valueNew)}

            {...ColorTextFieldProps}

            className={classNames([
              staticClassName('RichTextEditor', theme) && [
                'amaui-RichTextEditor-text-field-color'
              ],

              ColorTextFieldProps?.className,
              classes.textFieldColor
            ])}
          />

          <Button
            tonal={tonal}

            color='inherit'

            version='text'

            size='small'

            onClick={() => {
              if (refs.range.current) {
                const selection_ = window.getSelection();

                selection_.removeAllRanges();
                selection_.addRange(refs.range.current);
              }

              onUpdate_(refs.inputValues.current[version_]);

              onClose();
            }}
          >
            Apply
          </Button>
        </Line>
      </Line>
    );
  }), []);

  const Input = React.useCallback(React.forwardRef((props_: any, ref_: any) => {
    const {
      label,

      labelButton,

      value: value__,

      onChange: onChange__,

      onClick,

      InputComponent = TextField,

      InputProps,

      ...other_
    } = props_;

    return (
      <Line
        ref={ref_}

        gap={1}

        direction='column'

        tonal={tonal}

        color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

        Component={Surface}

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'amaui-RichTextEditor-palette'
          ],

          classes.palette
        ])}

        {...other_}
      >
        <Line
          gap={0.5}

          direction='row'

          align='center'

          style={{
            width: '100%'
          }}
        >
          <InputComponent
            tonal={tonal}

            color={color}

            label={label}

            version='outlined'

            size='small'

            value={value__}

            onChange={onChange__}

            className={classNames([
              staticClassName('RichTextEditor', theme) && [
                'amaui-RichTextEditor-text-field-color'
              ],

              classes.textFieldColor
            ])}

            {...InputProps}
          />

          <Button
            tonal={tonal}

            color='inherit'

            version='text'

            size='small'

            onClick={onClick}
          >
            {labelButton}
          </Button>
        </Line>
      </Line>
    );
  }), []);

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

  const queryValueUpdate = () => {
    const selected_ = [];
    const inputValues_ = { ...inputValues };

    const updateOptionValues = [
      { name: 'italic', command: 'italic' },
      { name: 'underline', command: 'underline' },
      { name: 'bold', command: 'bold' },
      { name: 'strike-line', command: 'strikeThrough' },
      { name: 'align-left', command: 'justifyLeft' },
      { name: 'align-center', command: 'justifyCenter' },
      { name: 'align-right', command: 'justifyRight' },
      { name: 'align-justify', command: 'justifyFull' },
      { name: 'superscript', command: 'superscript' },
      { name: 'subscript', command: 'subscript' },
      { name: 'list-ordered', command: 'insertOrderedList' },
      { name: 'list-unordered', command: 'insertUnorderedList' }
    ];

    updateOptionValues.forEach(item => {
      if (query(item.command)) selected_.push(item.name);
    });

    // Font version
    const fontVersion = query('formatBlock');

    const fontVersionValue = font_versions.find(item_ => item_.value === fontVersion) || font_versions[0];

    inputValues_['font-version'] = fontVersionValue?.value;

    // Font family
    const fontFamily = query('fontName');

    const fontFamilyValue = font_families.find(item_ => fontFamily?.includes(item_.label)) || font_families.find(item_ => item_.label === 'Roboto');

    inputValues_['font-family'] = fontFamilyValue?.value;

    // Font version
    const fontSize = query('fontSize');

    const fontSizeValue = font_sizes.find(item_ => item_.value === fontSize) || font_sizes.find(item_ => item_.label === '14');

    inputValues_['font-size'] = fontSizeValue?.value;

    setInputValues(inputValues_);

    setSelected(selected_);
  };

  const onMouseUpValue = React.useCallback(() => {
    queryValueUpdate();

    setTimeout(() => {
      const selection_ = window.getSelection();

      if (!selection_.anchorNode || !refs.value.current.contains(selection_.anchorNode)) return setSelection('' as any);

      const rect = selection_.getRangeAt(0).getBoundingClientRect();

      setSelection(Math.round(rect.width) ? rect : '' as any);
    });
  }, []);

  const onMouseDownValue = React.useCallback(() => {
    queryValueUpdate();
  }, []);

  const updateElements = {
    'font-version': (
      <Select
        label='Font Version'

        valueDefault={font_versions.find(item => item.value.includes('p')).value}

        value={inputValues['font-version']}

        onChange={(valueNew: string) => {
          updateInputValues('font-version', valueNew);

          method('font-version')(valueNew);
        }}

        onMouseUp={onMouseUp}

        onMouseDown={onMouseDown}

        {...SelectProps}

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'amaui-RichTextEditor-select'
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
    ),
    'font-family': (
      <Select
        label='Font Family'

        valueDefault={font_families.find(item => item.label.includes('Roboto')).value}

        value={inputValues['font-family']}

        onChange={(valueNew: string) => {
          updateInputValues('font-family', valueNew);

          method('font-family')(valueNew);
        }}

        onMouseUp={onMouseUp}

        onMouseDown={onMouseDown}

        {...SelectProps}

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'amaui-RichTextEditor-select'
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
    ),
    'font-size': (
      <Select
        label='Font Size'

        valueDefault={+font_sizes.find(item => item.label.includes('14')).value}

        value={inputValues['font-size']}

        onChange={(valueNew: string) => {
          updateInputValues('font-size', +valueNew);

          method('font-size')(+valueNew);
        }}

        onMouseUp={onMouseUp}

        onMouseDown={onMouseDown}

        {...SelectProps}

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'amaui-RichTextEditor-select'
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
    ),

    'italic': (
      <WrapperToggleButton
        label='Italic'
      >
        {is('function', render) ? render('italic', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('italic')}

            onClick={method('italic')}
          >
            <IconItalic {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'underline': (
      <WrapperToggleButton
        label='Underline'
      >
        {is('function', render) ? render('underline', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('underline')}

            onClick={method('underline')}
          >
            <IconUnderline {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'bold': (
      <WrapperToggleButton
        label='Bold'

        onClick={method('bold')}
      >
        {is('function', render) ? render('bold', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('bold')}
          >
            <IconBold {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'strike-line': (
      <WrapperToggleButton
        label='Strike Line'

        onClick={method('strike-line')}
      >
        {is('function', render) ? render('strike-line', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('strike-line')}
          >
            <IconStrikeLine {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'font-color': (
      <WrapperAppend
        open={refs.open.current.color}

        anchorElement={refs.elements.color.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('color', false)}

            include={[refs.elements.color.current]}
          >
            <Palette
              version='font-color'

              onClose={() => updateOpen('color', false)}

              onUpdate={method('font-color')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Text Color'

          open={refs.open.current.color ? false : undefined}
        >
          {is('function', render) ? render('font-color', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.color}

              {...ToggleButtonProps}

              selected={refs.open.current.color}

              onClick={() => updateOpen('color', !refs.open.current.color)}
            >
              <IconColor {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'font-color-mini-menu': (
      <WrapperAppend
        open={refs.open.current.colorMiniMenu}

        anchorElement={refs.miniMenuElements.color}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('colorMiniMenu', false)}

            include={[refs.miniMenuElements.color]}
          >
            <Palette
              ref={refs.miniMenuElements.colorPalette}

              version='font-color'

              onClose={() => updateOpen('colorMiniMenu', false)}

              onUpdate={method('font-color')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Text Color'

          open={refs.open.current.colorMiniMenu ? false : undefined}
        >
          {is('function', render) ? render('font-color', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.miniMenuElements.color}

              {...ToggleButtonProps}

              selected={refs.open.current.colorMiniMenu}

              onClick={() => updateOpen('colorMiniMenu', !refs.open.current.colorMiniMenu)}
            >
              <IconColor {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'font-background': (
      <WrapperAppend
        open={refs.open.current.background}

        anchorElement={refs.elements.background.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('background', false)}

            include={[refs.elements.background.current]}
          >
            <Palette
              version='font-background'

              onClose={() => updateOpen('background', false)}

              onUpdate={method('font-background')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Background Color'

          open={refs.open.current.background ? false : undefined}
        >
          {is('function', render) ? render('font-background', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.background}

              {...ToggleButtonProps}

              selected={refs.open.current.background}

              onClick={() => updateOpen('background', !refs.open.current.background)}
            >
              <IconBackground {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'font-background-mini-menu': (
      <WrapperAppend
        open={refs.open.current.backgroundMiniMenu}

        anchorElement={refs.miniMenuElements.background}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('backgroundMiniMenu', false)}

            include={[refs.miniMenuElements.background]}
          >
            <Palette
              ref={refs.miniMenuElements.backgroundPalette}

              version='font-background'

              onClose={() => updateOpen('backgroundMiniMenu', false)}

              onUpdate={method('font-background')}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Text Color'

          open={refs.open.current.backgroundMiniMenu ? false : undefined}
        >
          {is('function', render) ? render('font-background', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.miniMenuElements.background}

              {...ToggleButtonProps}

              selected={refs.open.current.backgroundMiniMenu}

              onClick={() => updateOpen('backgroundMiniMenu', !refs.open.current.backgroundMiniMenu)}
            >
              <IconBackground {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),

    'align-left': (
      <WrapperToggleButton
        label='Align Left'
      >
        {is('function', render) ? render('align-left', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('align-left')}

            onClick={method('align-left')}
          >
            <IconAlignLeft {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'align-center': (
      <WrapperToggleButton
        label='Align Center'
      >
        {is('function', render) ? render('align-center', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('align-center')}

            onClick={method('align-center')}
          >
            <IconAlignCenter {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'align-right': (
      <WrapperToggleButton
        label='Align Right'
      >
        {is('function', render) ? render('align-right', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('align-right')}

            onClick={method('align-right')}
          >
            <IconAlignRight {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'align-justify': (
      <WrapperToggleButton
        label='Align Justify'
      >
        {is('function', render) ? render('align-justify', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('align-justify')}

            onClick={method('align-justify')}
          >
            <IconAlignJustify {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'indent': (
      <WrapperToggleButton
        label='Indent'
      >
        {is('function', render) ? render('indent', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            onClick={method('indent')}
          >
            <IconIndent {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'outdent': (
      <WrapperToggleButton
        label='Outdent'
      >
        {is('function', render) ? render('outdent', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            onClick={method('outdent')}
          >
            <IconOutdent {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'superscript': (
      <WrapperToggleButton
        label='Superscript'
      >
        {is('function', render) ? render('superscript', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('superscript')}

            onClick={method('superscript')}
          >
            <IconSuperscript {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'subscript': (
      <WrapperToggleButton
        label='Subscript'
      >
        {is('function', render) ? render('subscript', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('subscript')}

            onClick={method('subscript')}
          >
            <IconSubscript {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'link-ordered': (
      <WrapperToggleButton
        label='List Ordered'
      >
        {is('function', render) ? render('list-ordered', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('list-ordered')}

            onClick={method('list-ordered')}
          >
            <IconListOrdered {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),
    'link-unordered': (
      <WrapperToggleButton
        label='List Unordered'
      >
        {is('function', render) ? render('list-unordered', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            selected={refs.selected.current.includes('list-unordered')}

            onClick={method('list-unordered')}
          >
            <IconListUnordered {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'horizontal-rule': (
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
    ),

    'link-add': (
      <WrapperAppend
        open={refs.open.current.link}

        anchorElement={refs.elements.linkAdd.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('link', false)}

            include={[refs.elements.linkAdd.current]}
          >
            <Input
              label='Link'

              labelButton='Add'

              value={refs.inputValues.current.link}

              onChange={valueNew => updateInputValues('link', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = window.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('link-add')(refs.inputValues.current.link);

                updateOpen('link', false);

                updateInputValues('link', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Link'

          open={refs.open.current.link ? false : undefined}
        >
          {is('function', render) ? render('font-color', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.linkAdd}

              {...ToggleButtonProps}

              selected={refs.open.current.link}

              onClick={() => updateOpen('link', !refs.open.current.link)}
            >
              <IconLinkAdd {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'link-add-mini-menu': (
      <WrapperAppend
        open={refs.open.current.linkMiniMenu}

        anchorElement={refs.miniMenuElements.linkAdd}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('linkMiniMenu', false)}

            include={[refs.miniMenuElements.linkAdd]}
          >
            <Input
              ref={refs.miniMenuElements.linkAddInput}

              label='Link'

              labelButton='Add'

              value={refs.inputValues.current.link}

              onChange={valueNew => updateInputValues('link', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = window.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('link-add')(refs.inputValues.current.link);

                updateOpen('linkMiniMenu', false);

                updateInputValues('link', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Link'

          open={refs.open.current.linkMiniMenu ? false : undefined}
        >
          {is('function', render) ? render('font-color', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.miniMenuElements.linkAdd}

              {...ToggleButtonProps}

              selected={refs.open.current.linkMiniMenu}

              onClick={() => updateOpen('linkMiniMenu', !refs.open.current.linkMiniMenu)}
            >
              <IconLinkAdd {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'link-remove': (
      <WrapperToggleButton
        label='Remove Link'
      >
        {is('function', render) ? render('link-remove', ToggleButtonProps, refs.value.current, method) : (
          <ToggleButton
            {...ToggleButtonProps}

            onClick={method('link-remove')}
          >
            <IconLinkRemove {...IconProps} />
          </ToggleButton>
        )}
      </WrapperToggleButton>
    ),

    'quote': (
      <WrapperAppend
        open={refs.open.current.quote}

        anchorElement={refs.elements.quote.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('quote', false)}

            include={[refs.elements.quote.current]}
          >
            <Input
              label='Quote'

              labelButton='Add'

              value={refs.inputValues.current.quote}

              onChange={valueNew => updateInputValues('quote', valueNew)}

              InputProps={{
                multiline: true
              }}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = window.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('html')(`<blockquote>${refs.inputValues.current.quote}</blockquote>`);

                updateOpen('quote', false);

                updateInputValues('quote', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Quote'

          open={refs.open.current.quote ? false : undefined}
        >
          {is('function', render) ? render('quote', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.quote}

              {...ToggleButtonProps}

              selected={refs.open.current.quote}

              onClick={() => updateOpen('quote', !refs.open.current.quote)}
            >
              <IconQuote {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'table': (
      <WrapperAppend
        open={refs.open.current.table}

        anchorElement={refs.elements.table.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('table', false)}

            include={[refs.elements.table.current]}
          >
            <Line
              gap={1}

              tonal={tonal}

              color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

              Component={Surface}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'amaui-RichTextEditor-palette'
                ],

                classes.palette
              ])}
            >
              <Line
                gap={1}

                direction='row'

                align='center'

                justify='center'
              >
                <NumericTextField
                  label='Rows'

                  tonal={tonal}

                  color={color}

                  size='small'

                  version='outlined'

                  increment={false}

                  decrement={false}

                  value={refs.inputValues.current.tableRows}

                  onChange={valueNew => updateInputValues('tableRows', valueNew)}
                />

                ×

                <NumericTextField
                  label='Columns'

                  tonal={tonal}

                  color={color}

                  size='small'

                  version='outlined'

                  increment={false}

                  decrement={false}

                  value={refs.inputValues.current.tableColumns}

                  onChange={valueNew => updateInputValues('tableColumns', valueNew)}
                />
              </Line>

              <Line
                gap={1}

                direction='row'

                align='center'

                justify='space-between'

                style={{
                  width: '100%'
                }}
              >
                <Label
                  size='small'
                >
                  <Switch
                    tonal={tonal}

                    color={props.color !== undefined ? props.color : 'default'}

                    checked={refs.inputValues.current.tableHeader}

                    onChange={valueNew => updateInputValues('tableHeader', valueNew)}
                  />

                  Header
                </Label>

                <Button
                  tonal={tonal}

                  color='inherit'

                  version='text'

                  size='small'

                  onClick={() => {
                    if (refs.range.current) {
                      const selection_ = window.getSelection();

                      selection_.removeAllRanges();
                      selection_.addRange(refs.range.current);
                    }

                    let table = `<table>`;

                    if (refs.inputValues.current.tableHeader && refs.inputValues.current.tableColumns > 0) {
                      table += `<thead><tr>${'<th></th>'.repeat(refs.inputValues.current.tableColumns)}</tr></thead>`;
                    }

                    if (refs.inputValues.current.tableRows > 0 && refs.inputValues.current.tableColumns > 0) {
                      table += `<tbody>`;

                      for (let i = 0; i < refs.inputValues.current.tableRows; i++) {
                        table += `<tr>${'<td></td>'.repeat(refs.inputValues.current.tableColumns)}</tr>`;
                      }

                      table += `</tbody>`;
                    }

                    table += `</table>`;

                    method('html')(table);

                    updateOpen('table', false);

                    updateInputValues('tableRows', '');
                    updateInputValues('tableColumns', '');
                    updateInputValues('tableHeader', '');
                  }}
                >
                  Add
                </Button>
              </Line>
            </Line>
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Table'

          open={refs.open.current.table ? false : undefined}
        >
          {is('function', render) ? render('table', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.table}

              {...ToggleButtonProps}

              selected={refs.open.current.table}

              onClick={() => updateOpen('table', !refs.open.current.table)}
            >
              <IconTable {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'image': (
      <WrapperAppend
        open={refs.open.current.image}

        anchorElement={refs.elements.image.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('image', false)}

            include={[refs.elements.image.current]}
          >
            <Input
              label='Image'

              labelButton='Add'

              value={refs.inputValues.current.image}

              onChange={valueNew => updateInputValues('image', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = window.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('image')(refs.inputValues.current.image);

                updateOpen('image', false);

                updateInputValues('image', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Image'

          open={refs.open.current.image ? false : undefined}
        >
          {is('function', render) ? render('image', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.image}

              {...ToggleButtonProps}

              selected={refs.open.current.image}

              onClick={() => updateOpen('image', !refs.open.current.image)}
            >
              <IconImage {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'video': (
      <WrapperAppend
        open={refs.open.current.video}

        anchorElement={refs.elements.video.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('video', false)}

            include={[refs.elements.video.current]}
          >
            <Input
              label='Video'

              labelButton='Add'

              value={refs.inputValues.current.video}

              onChange={valueNew => updateInputValues('video', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = window.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('html')(`<video controls><source src='${refs.inputValues.current.video}' /></video>`);

                updateOpen('video', false);

                updateInputValues('video', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Video'

          open={refs.open.current.video ? false : undefined}
        >
          {is('function', render) ? render('video', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.video}

              {...ToggleButtonProps}

              selected={refs.open.current.video}

              onClick={() => updateOpen('video', !refs.open.current.video)}
            >
              <IconVideo {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'video-youtube': (
      <WrapperAppend
        open={refs.open.current.videoYoutube}

        anchorElement={refs.elements.videoYoutube.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('videoYoutube', false)}

            include={[refs.elements.videoYoutube.current]}
          >
            <Input
              label='Youtube Video ID'

              labelButton='Add'

              value={refs.inputValues.current.videoYoutube}

              onChange={valueNew => updateInputValues('videoYoutube', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = window.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('html')(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${refs.inputValues.current.videoYoutube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

                updateOpen('videoYoutube', false);

                updateInputValues('videoYoutube', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Youtube Video'

          open={refs.open.current.videoYoutube ? false : undefined}
        >
          {is('function', render) ? render('videoYoutube', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.videoYoutube}

              {...ToggleButtonProps}

              selected={refs.open.current.videoYoutube}

              onClick={() => updateOpen('videoYoutube', !refs.open.current.videoYoutube)}
            >
              <IconVideoYoutube {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'drawing': (
      <WrapperAppend
        open={refs.open.current.drawing}

        anchorElement={refs.elements.drawing.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('drawing', false)}

            include={[refs.elements.drawing, refs.elements.drawingSelect, refs.elements.drawingSelect.current, refs.elements.drawingPalette, refs.elements.drawingPalette.current, refs.elements.drawingSize, refs.elements.drawingSize.current]}

            includeParentQueries={['.amaui-Drawing-palette', '.amaui-Drawing-modal']}

            includeQueries={['a[download]', 'svg', 'path']}
          >
            <Line
              gap={2}

              tonal={tonal}

              color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

              Component={Surface}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'amaui-RichTextEditor-palette'
                ],

                classes.palette
              ])}
            >
              <Drawing
                tonal={tonal}

                color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

                version={version}

                svgRef={refs.elements.drawingSvg}

                SizeProps={{
                  ref: refs.elements.drawingSize
                }}

                SelectProps={{
                  MenuProps: {
                    ListProps: {
                      ref: refs.elements.drawingSelect
                    },

                    ...SelectProps?.MenuProps
                  }
                }}

                PaletteProps={{
                  ref: refs.elements.drawingPalette
                }}

                {...DrawingProps}
              />

              <Line
                gap={1}

                direction='row'

                align='center'

                justify='flex-end'

                style={{
                  width: '100%'
                }}
              >
                <Button
                  tonal={tonal}

                  color='inherit'

                  version='text'

                  size='small'

                  onClick={() => {
                    if (refs.range.current) {
                      const selection_ = window.getSelection();

                      selection_.removeAllRanges();
                      selection_.addRange(refs.range.current);
                    }

                    // Get svg html element
                    // clone it, remove circle
                    // and add it as outer html
                    // to the rich text editor
                    const svg = refs.elements.drawingSvg.current;

                    const svgClone = svg.cloneNode(true);

                    // Clean up
                    svgClone.style.width = refs.inputValues.current.drawingWidth;

                    svgClone.style.height = refs.inputValues.current.drawingHeight;

                    svgClone.style.boxShadow = 'none';

                    const pointers = Array.from(svgClone.querySelectorAll('.amaui-Drawing-pointer')) as Array<HTMLElement>;

                    pointers.forEach(pointer => pointer.remove());

                    const valueNew = svgClone.outerHTML;

                    method('html')(valueNew);

                    updateOpen('drawing', false);
                  }}
                >
                  Add
                </Button>
              </Line>
            </Line>
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Drawing'

          open={refs.open.current.drawing ? false : undefined}
        >
          {is('function', render) ? render('drawing', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.drawing}

              {...ToggleButtonProps}

              selected={refs.open.current.drawing}

              onClick={() => updateOpen('drawing', !refs.open.current.drawing)}
            >
              <IconDrawing {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'code': (
      <WrapperAppend
        open={refs.open.current.code}

        anchorElement={refs.elements.code.current}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('code', false)}

            include={[refs.elements.code.current]}
          >
            <Input
              label='Code'

              labelButton='Add'

              value={refs.inputValues.current.code}

              onChange={valueNew => updateInputValues('code', valueNew)}

              InputProps={{
                multiline: true
              }}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = window.getSelection();

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                method('html')(`<pre><code>${refs.inputValues.current.code}</code></pre>`);

                updateOpen('code', false);

                updateInputValues('code', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Code'

          open={refs.open.current.code ? false : undefined}
        >
          {is('function', render) ? render('code', ToggleButtonProps, refs.value.current, method) : (
            <ToggleButton
              ref={refs.elements.code}

              {...ToggleButtonProps}

              selected={refs.open.current.code}

              onClick={() => updateOpen('code', !refs.open.current.code)}
            >
              <IconCode {...IconProps} />
            </ToggleButton>
          )}
        </WrapperToggleButton>
      </WrapperAppend>
    )
  };

  const actionElements = {
    'clear': (
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
    )
  };

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={0}

      Component={Component}

      className={classNames([
        staticClassName('RichTextEditor', theme) && [
          'amaui-RichTextEditor-root'
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
              'amaui-RichTextEditor-toolbars'
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

              role='toolbar'

              aria-label='Updates'

              {...ToolbarUpdatesProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'amaui-RichTextEditor-toolbar'
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
                  {includes('font-version') && updateElements['font-version']}

                  {includes('font-family') && updateElements['font-family']}

                  {includes('font-size') && updateElements['font-size']}
                </Line>
              )}

              {includes('italic', 'underlined', 'bold', 'strike-line') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('italic') && updateElements['italic']}

                  {includes('underline') && updateElements['underline']}

                  {includes('bold') && updateElements['bold']}

                  {includes('strike-line') && updateElements['strike-line']}
                </ToggleButtons>
              )}

              {includes('font-color', 'font-background') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('font-color') && updateElements['font-color']}

                  {includes('font-background') && updateElements['font-background']}
                </ToggleButtons>
              )}

              {includes('align-left', 'align-center', 'align-right', 'align-justify') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('align-left') && updateElements['align-left']}

                  {includes('align-center') && updateElements['align-center']}

                  {includes('align-right') && updateElements['align-right']}

                  {includes('align-justify') && updateElements['align-justify']}
                </ToggleButtons>
              )}

              {includes('indent', 'outdent') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('indent') && updateElements['indent']}

                  {includes('outdent') && updateElements['outdent']}
                </ToggleButtons>
              )}

              {includes('superscript', 'subscript') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('superscript') && updateElements['superscript']}

                  {includes('subscript') && updateElements['subscript']}
                </ToggleButtons>
              )}

              {includes('list-ordered', 'list-unordered') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('list-ordered') && updateElements['link-ordered']}

                  {includes('list-unordered') && updateElements['link-unordered']}
                </ToggleButtons>
              )}

              {includes('horizontal-rule') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('horizontal-rule') && updateElements['horizontal-rule']}
                </ToggleButtons>
              )}

              {includes('link-add', 'link-remove') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('link-add') && updateElements['link-add']}

                  {includes('link-remove') && updateElements['link-remove']}
                </ToggleButtons>
              )}

              {includes('quote', 'image', 'video', 'video-youtube', 'table', 'drawing', 'code') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('quote') && updateElements['quote']}

                  {includes('table') && updateElements['table']}

                  {includes('image') && updateElements['image']}

                  {includes('video') && updateElements['video']}

                  {includes('video-youtube') && updateElements['video-youtube']}

                  {includes('drawing') && updateElements['drawing']}

                  {includes('code') && updateElements['code']}
                </ToggleButtons>
              )}
            </Line>
          )}

          {(updates_ && actions_) && (
            <Divider
              {...DividerProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'amaui-RichTextEditor-divider'
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

              role='toolbar'

              aria-label='Actions'

              {...ToolbarActionsProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'amaui-RichTextEditor-toolbar'
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
                  {includes('copy', 'cut', 'paste', 'delete') && (
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

                      {includes('delete') && (
                        <WrapperToggleButton
                          label='Delete'
                        >
                          {is('function', render) ? render('delete', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('delete')}
                            >
                              <IconDelete {...IconProps} />
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
                  {includes('clear', 'select-all') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('clear') && actionElements['clear']}

                      {includes('select-all') && (
                        <WrapperToggleButton
                          label='Select All'
                        >
                          {is('function', render) ? render('select-all', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('select-all')}
                            >
                              <IconSelectAll {...IconProps} />
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
                        >
                          {is('function', render) ? render('redo', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={method('redo')}
                            >
                              <IconRedo {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}
                    </ToggleButtons>
                  )}

                  {includes('save', 'print') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('save') && (
                        <WrapperToggleButton
                          label='Save'
                        >
                          {is('function', render) ? render('save', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={() => save(refs.value.current)}
                            >
                              <IconSave {...IconProps} />
                            </ToggleButton>
                          )}
                        </WrapperToggleButton>
                      )}

                      {includes('print') && (
                        <WrapperToggleButton
                          label='Print'
                        >
                          {is('function', render) ? render('print', ToggleButtonProps, refs.value.current, method) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={() => print(refs.value.current)}
                            >
                              <IconPrint {...IconProps} />
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
                'amaui-RichTextEditor-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes.divider_end
            ])}
          />
        </Line>
      )}

      {miniMenu && !!refs.miniMenuInclude.current.length && (
        <Append
          open={selection}

          element={
            ({ ref: ref_, values, style }) => (
              <div
                ref={item => {
                  if (ref_) {
                    if (is('function', ref_)) ref_(item);
                    else ref_.current = item;

                    refs.miniMenu.current = item;
                  }
                }}

                style={{
                  ...((values?.x === 0 && values?.y === 0) ? {
                    visibility: 'hidden'
                  } : undefined),

                  ...style
                }}
              >
                <Fade
                  in={selection}

                  add
                >
                  <ClickListener
                    onClickOutside={() => {
                      setSelection('' as any);
                    }}

                    include={[refs.miniMenu, refs.miniMenu.current, refs.miniMenuElements.colorPalette, refs.miniMenuElements.colorPalette.current, refs.miniMenuElements.backgroundPalette, refs.miniMenuElements.backgroundPalette.current, refs.miniMenuElements.linkAddInput, refs.miniMenuElements.linkAddInput.current]}
                  >
                    <Line
                      gap={2}

                      direction='row'

                      align='center'

                      justify='flex-start'

                      role='toolbar'

                      aria-label='Mini menu'

                      Component={Surface}

                      {...MiniMenuProps}

                      className={classNames([
                        staticClassName('RichTextEditor', theme) && [
                          'amaui-RichTextEditor-mini-menu'
                        ],

                        MiniMenuProps?.className,
                        classes.miniMenu
                      ])}
                    >
                      {includesMinMenu('italic', 'underlined', 'bold', 'strike-line') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('italic') && updateElements['italic']}

                          {includesMinMenu('underline') && updateElements['underline']}

                          {includesMinMenu('bold') && updateElements['bold']}

                          {includesMinMenu('strike-line') && updateElements['strike-line']}
                        </ToggleButtons>
                      )}

                      {includesMinMenu('font-color', 'font-background') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('font-color') && updateElements['font-color-mini-menu']}

                          {includesMinMenu('font-background') && updateElements['font-background-mini-menu']}
                        </ToggleButtons>
                      )}

                      {includesMinMenu('align-left', 'align-center', 'align-right', 'align-justify') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('align-left') && updateElements['align-left']}

                          {includesMinMenu('align-center') && updateElements['align-center']}

                          {includesMinMenu('align-right') && updateElements['align-right']}

                          {includesMinMenu('align-justify') && updateElements['align-justify']}
                        </ToggleButtons>
                      )}

                      {includesMinMenu('link-add', 'link-remove') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('link-add') && updateElements['link-add-mini-menu']}

                          {includesMinMenu('link-remove') && updateElements['link-remove']}
                        </ToggleButtons>
                      )}

                      {includesMinMenu('clear') && (
                        <ToggleButtons
                          {...ToggleButtonsProps}
                        >
                          {includesMinMenu('clear') && actionElements['clear']}
                        </ToggleButtons>
                      )}
                    </Line>
                  </ClickListener>
                </Fade>
              </div>
            )
          }

          anchor={selection}

          portal

          alignment='center'

          position='bottom'

          clearOnClose

          {...AppendProps}
        />
      )}

      <Surface
        ref={refs.value}

        color='default'

        onMouseUp={onMouseUpValue}

        onMouseDown={onMouseDownValue}

        onInput={onUpdate}

        contentEditable

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'amaui-RichTextEditor-value'
          ],

          classes.value
        ])}
      />
    </Line>
  );
});

RichTextEditor.displayName = 'amaui-RichTextEditor';

export default RichTextEditor;
