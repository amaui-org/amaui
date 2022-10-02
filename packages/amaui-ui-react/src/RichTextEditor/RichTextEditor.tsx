import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Tooltip from '../Tooltip';
import ToggleButtons from '../ToggleButtons';
import ToggleButton from '../ToggleButton';
import Surface from '../Surface';
import Divider from '../Divider';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%'
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
      opacity: theme.palette.light ? 0.06 : 0.12
    }
  },

  divider_end: {
    '&.AmauiDivider-root': {
      opacity: theme.palette.light ? 0.14 : 0.24
    }
  }
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

// to do

// updates

// actions

// onChange method for any onChange event, with valueDefault and value

// update all toggle buttons selected
// on click
// + on current selection listen to selection window value y

// to updates add
// font family, with custom familes if user adds them

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

    // Update
    IconItalic = IconMaterialFormatItalicRounded,
    IconUnderline = IconMaterialFormatUnderlinedRounded,
    IconBold = IconMaterialFormatBoldRounded,
    IconStrikeLine = IconMaterialStrikethroughSRounded,

    IconAlignLeft = IconMaterialFormatAlignLeftRounded,
    IconAlignCenter = IconMaterialFormatAlignCenterRounded,
    IconAlignRight = IconMaterialFormatAlignRightRounded,
    IconAlignJustify = IconMaterialFormatAlignJustifyRounded,

    // Action
    IconCopy = IconMaterialContentCopyRounded,
    IconCut = IconMaterialContentCutRounded,
    IconPaste = IconMaterialContentPasteRounded,

    IconUndo = IconMaterialUndoRounded,
    IconRedo = IconMaterialRedoRounded,

    ToolbarProps,
    ToolbarUpdatesProps,
    ToolbarActionsProps,
    ToggleButtonProps: ToggleButtonProps_,
    ToggleButtonsProps: ToggleButtonsProps_,
    DividerProps: DividerProps_,
    TooltipProps_: TooltipProps_,
    IconProps: IconProps_,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const refs = {
    value: React.useRef<HTMLElement>()
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

  const method = React.useCallback((command: string) => () => {
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

      default:
        break;
    }
  }, []);

  const includes = (...args) => !is('array', exclude) || args.some(item => !exclude.includes(item));

  // italic, underline, bold
  // updates toolbar
  const updates_ = updates && (!is('array', exclude) || includes('italic', 'underline', 'bold'));

  // copy, paste, cut
  // action toolbar
  const actions_ = actions && (!is('array', exclude) || includes('copy', 'paste', 'cut'));

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
              {includes('italic', 'underlined', 'bold', 'strike-line') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('italic') && (
                    <WrapperToggleButton
                      label='Italic'
                    >
                      {is('function', render) ? render('italic', ToggleButtonProps) : (
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
                      {is('function', render) ? render('underline', ToggleButtonProps) : (
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
                      {is('function', render) ? render('bold', ToggleButtonProps) : (
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
                      {is('function', render) ? render('strike-line', ToggleButtonProps) : (
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
                      {is('function', render) ? render('align-left', ToggleButtonProps) : (
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
                      {is('function', render) ? render('align-center', ToggleButtonProps) : (
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
                      {is('function', render) ? render('align-right', ToggleButtonProps) : (
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
                      {is('function', render) ? render('align-justify', ToggleButtonProps) : (
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
                          {is('function', render) ? render('copy', ToggleButtonProps) : (
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
                          {is('function', render) ? render('cut', ToggleButtonProps) : (
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
                          {is('function', render) ? render('paste', ToggleButtonProps) : (
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
                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('undo', 'redo') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('undo') && (
                        <WrapperToggleButton
                          label='Undo'
                        >
                          {is('function', render) ? render('undo', ToggleButtonProps) : (
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
                          {is('function', render) ? render('redo', ToggleButtonProps) : (
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
