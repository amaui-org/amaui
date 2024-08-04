import React from 'react';

import { is, debounce, clamp, capitalize } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import MenuElement, { IMenu } from '../Menu/Menu';
import LineElement from '../Line';
import SpyScrollElement from '../SpyScroll';
import ListElement from '../List';
import ListSubheaderElement from '../ListSubheader';
import TabsElement from '../Tabs';
import TextFieldElement from '../TextField';
import TabElement from '../Tab';
import TypeElement from '../Type';
import IconElement from '../Icon';
import SurfaceElement from '../Surface';
import emojis_list from './emojis_list';
import { staticClassName } from '../utils';

const IconMaterialMoodRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='MoodRounded'
      short_name='Mood'

      {...props}
    >
      <path d="M15.5 11Q16.15 11 16.575 10.575Q17 10.15 17 9.5Q17 8.85 16.575 8.425Q16.15 8 15.5 8Q14.85 8 14.425 8.425Q14 8.85 14 9.5Q14 10.15 14.425 10.575Q14.85 11 15.5 11ZM8.5 11Q9.15 11 9.575 10.575Q10 10.15 10 9.5Q10 8.85 9.575 8.425Q9.15 8 8.5 8Q7.85 8 7.425 8.425Q7 8.85 7 9.5Q7 10.15 7.425 10.575Q7.85 11 8.5 11ZM12 17.5Q13.55 17.5 14.775 16.75Q16 16 16.725 14.775Q16.9 14.475 16.75 14.238Q16.6 14 16.25 14H7.75Q7.4 14 7.25 14.238Q7.1 14.475 7.275 14.775Q8 16 9.225 16.75Q10.45 17.5 12 17.5ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
    </IconElement>
  );
});

const IconMaterialEmojiNatureRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='EmojiNatureRounded'
      short_name='EmojiNature'

      {...props}
    >
      <path d="M18 9 17.2 9.7Q16.85 10.025 16.375 10.025Q15.9 10.025 15.55 9.75Q15.2 9.475 15.075 9.05Q14.95 8.625 15.1 8.15L15.5 6.9L14.65 6.4Q14.25 6.175 14.088 5.75Q13.925 5.325 14.05 4.9Q14.175 4.475 14.55 4.237Q14.925 4 15.4 4H16.4L16.7 3.05Q16.85 2.575 17.212 2.287Q17.575 2 18 2Q18.425 2 18.788 2.287Q19.15 2.575 19.3 3.05L19.6 4H20.6Q21.075 4 21.438 4.237Q21.8 4.475 21.95 4.9Q22.125 5.35 21.95 5.775Q21.775 6.2 21.4 6.4L20.5 6.9L20.9 8.15Q21.05 8.625 20.925 9.062Q20.8 9.5 20.45 9.75Q20.075 10.025 19.613 10.025Q19.15 10.025 18.8 9.7ZM18 7Q18.425 7 18.712 6.713Q19 6.425 19 6Q19 5.575 18.712 5.287Q18.425 5 18 5Q17.575 5 17.288 5.287Q17 5.575 17 6Q17 6.425 17.288 6.713Q17.575 7 18 7ZM13.8 17.9Q14.375 19.4 13.425 20.7Q12.475 22 10.75 22Q9.925 22 9.188 21.575Q8.45 21.15 8.1 20.45Q6.025 20.75 4.663 19.387Q3.3 18.025 3.55 15.9Q2.8 15.475 2.4 14.738Q2 14 2 13.05Q2 11.525 3.388 10.587Q4.775 9.65 6.1 10.2L7.65 10.85Q8.15 10.075 8.975 9.587Q9.8 9.1 10.75 9.05V7.75Q10.75 7.425 10.963 7.213Q11.175 7 11.5 7Q11.825 7 12.038 7.213Q12.25 7.425 12.25 7.75V9.25Q13.175 9.525 13.775 10.112Q14.375 10.7 14.8 11.75H16.25Q16.575 11.75 16.788 11.962Q17 12.175 17 12.5Q17 12.825 16.788 13.037Q16.575 13.25 16.25 13.25H14.95Q14.9 14.2 14.438 15.025Q13.975 15.85 13.2 16.35ZM7.6 18.5Q7.6 17.825 7.713 17.188Q7.825 16.55 8.05 15.95Q7.475 16.225 6.812 16.337Q6.15 16.45 5.5 16.4Q5.5 17.375 6.062 17.938Q6.625 18.5 7.6 18.5ZM5.75 14.4Q6.55 14.4 7.163 14.2Q7.775 14 8.75 13.4L5.75 12.15Q5.025 11.85 4.513 12.162Q4 12.475 4 13.15Q4 13.8 4.425 14.1Q4.85 14.4 5.75 14.4ZM10.75 20Q11.375 20 11.762 19.562Q12.15 19.125 11.95 18.65L10.6 15.25Q10.125 16.05 9.863 16.85Q9.6 17.65 9.6 18.3Q9.6 19.125 9.888 19.562Q10.175 20 10.75 20ZM12.4 14.45Q12.65 14.2 12.8 13.787Q12.95 13.375 12.95 12.925Q12.95 12.125 12.425 11.575Q11.9 11.025 11.125 11.025Q10.675 11.025 10.275 11.175Q9.875 11.325 9.6 11.6L11.55 12.5ZM8.05 15.95Q8.05 15.95 8.05 15.95Q8.05 15.95 8.05 15.95Q8.05 15.95 8.05 15.95Q8.05 15.95 8.05 15.95Q8.05 15.95 8.05 15.95Q8.05 15.95 8.05 15.95Z" />
    </IconElement>
  );
});

const IconMaterialEmojiFoodBeverageRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='EmojiFoodBeverageRounded'
      short_name='EmojiFoodBeverage'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.287 20.712Q4 20.425 4 20Q4 19.575 4.287 19.288Q4.575 19 5 19H19Q19.425 19 19.712 19.288Q20 19.575 20 20Q20 20.425 19.712 20.712Q19.425 21 19 21ZM8 17Q6.35 17 5.175 15.825Q4 14.65 4 13V5Q4 4.175 4.588 3.587Q5.175 3 6 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V8Q22 8.825 21.413 9.412Q20.825 10 20 10H18V13Q18 14.65 16.825 15.825Q15.65 17 14 17ZM18 8H20Q20 8 20 8Q20 8 20 8V5Q20 5 20 5Q20 5 20 5H18ZM8 15H14Q14.825 15 15.413 14.412Q16 13.825 16 13V5H10V5.4L11.8 6.85Q11.85 6.9 12 7.25V11.5Q12 11.7 11.85 11.85Q11.7 12 11.5 12H7.5Q7.3 12 7.15 11.85Q7 11.7 7 11.5V7.25Q7 7.2 7.2 6.85L9 5.4V5H6Q6 5 6 5Q6 5 6 5V13Q6 13.825 6.588 14.412Q7.175 15 8 15ZM9 5H10ZM11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Z" />
    </IconElement>
  );
});

const IconMaterialHikingRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='HikingRounded'
      short_name='Hiking'

      {...props}
    >
      <path d="M13.5 5.5Q12.675 5.5 12.088 4.912Q11.5 4.325 11.5 3.5Q11.5 2.675 12.088 2.087Q12.675 1.5 13.5 1.5Q14.325 1.5 14.913 2.087Q15.5 2.675 15.5 3.5Q15.5 4.325 14.913 4.912Q14.325 5.5 13.5 5.5ZM8.3 23Q7.75 23 7.438 22.625Q7.125 22.25 7.25 21.725L10.075 7.45Q10.225 6.725 10.75 6.362Q11.275 6 11.85 6Q12.425 6 12.913 6.25Q13.4 6.5 13.7 7L14.7 8.6Q15.15 9.325 15.863 9.912Q16.575 10.5 17.5 10.775V9.75Q17.5 9.425 17.712 9.212Q17.925 9 18.25 9Q18.575 9 18.788 9.212Q19 9.425 19 9.75V22.25Q19 22.575 18.788 22.788Q18.575 23 18.25 23Q17.925 23 17.712 22.788Q17.5 22.575 17.5 22.25V12.85Q16.3 12.575 15.275 11.975Q14.25 11.375 13.5 10.5L12.9 13.5L14.375 14.9Q14.675 15.2 14.838 15.562Q15 15.925 15 16.35V22Q15 22.425 14.713 22.712Q14.425 23 14 23Q13.575 23 13.288 22.712Q13 22.425 13 22V17Q13 17 13 17Q13 17 13 17L10.9 15L9.275 22.25Q9.2 22.575 8.925 22.788Q8.65 23 8.3 23ZM7.425 13.125 8.775 6.275 7.625 6.05Q6.825 5.9 6.125 6.362Q5.425 6.825 5.275 7.625L4.525 11.55Q4.45 11.975 4.675 12.312Q4.9 12.65 5.3 12.725Z" />
    </IconElement>
  );
});

const IconMaterialEmojiTransportationRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='EmojiTransportationRounded'
      short_name='EmojiTransportation'

      {...props}
    >
      <path d="M11 22Q10.575 22 10.288 21.712Q10 21.425 10 21V15.775Q10 15.725 10.05 15.525L11.4 11.65Q11.525 11.375 11.762 11.188Q12 11 12.35 11H19.65Q20 11 20.238 11.188Q20.475 11.375 20.6 11.65L21.95 15.525Q21.95 15.525 22 15.775V21Q22 21.425 21.712 21.712Q21.425 22 21 22Q20.575 22 20.288 21.712Q20 21.425 20 21V20.5H12V21Q12 21.425 11.713 21.712Q11.425 22 11 22ZM12 14.5H20L19.3 12.5H12.7ZM11.5 16V19ZM13 18.5Q13.425 18.5 13.713 18.212Q14 17.925 14 17.5Q14 17.075 13.713 16.788Q13.425 16.5 13 16.5Q12.575 16.5 12.288 16.788Q12 17.075 12 17.5Q12 17.925 12.288 18.212Q12.575 18.5 13 18.5ZM19 18.5Q19.425 18.5 19.712 18.212Q20 17.925 20 17.5Q20 17.075 19.712 16.788Q19.425 16.5 19 16.5Q18.575 16.5 18.288 16.788Q18 17.075 18 17.5Q18 17.925 18.288 18.212Q18.575 18.5 19 18.5ZM6 14V12H8V14ZM11 8V6H13V8ZM6 18V16H8V18ZM6 22V20H8V22ZM2 22V10Q2 9.175 2.588 8.587Q3.175 8 4 8H7V4Q7 3.175 7.588 2.587Q8.175 2 9 2H15Q15.825 2 16.413 2.587Q17 3.175 17 4V9H15V4H9V10H4V22ZM11.5 19H20.5V16H11.5Z" />
    </IconElement>
  );
});

const IconMaterialEmojiObjectsRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='EmojiObjectsRounded'
      short_name='EmojiObjects'

      {...props}
    >
      <path d="M12 22Q11.35 22 10.825 21.688Q10.3 21.375 10 20.85Q9.175 20.85 8.588 20.263Q8 19.675 8 18.85V15.3Q6.525 14.325 5.638 12.725Q4.75 11.125 4.75 9.25Q4.75 6.225 6.862 4.112Q8.975 2 12 2Q15.025 2 17.137 4.112Q19.25 6.225 19.25 9.25Q19.25 11.175 18.363 12.75Q17.475 14.325 16 15.3V18.85Q16 19.675 15.413 20.263Q14.825 20.85 14 20.85Q13.7 21.375 13.175 21.688Q12.65 22 12 22ZM10 18.85H14V17.95H10ZM10 16.95H14V16H10ZM9.8 14H11.25V11.3L9.55 9.6Q9.35 9.4 9.35 9.1Q9.35 8.8 9.575 8.575Q9.8 8.35 10.1 8.35Q10.4 8.35 10.625 8.575L12 9.95L13.4 8.55Q13.6 8.35 13.9 8.35Q14.2 8.35 14.425 8.575Q14.65 8.8 14.65 9.1Q14.65 9.4 14.425 9.625L12.75 11.3V14H14.2Q15.55 13.35 16.4 12.087Q17.25 10.825 17.25 9.25Q17.25 7.05 15.725 5.525Q14.2 4 12 4Q9.8 4 8.275 5.525Q6.75 7.05 6.75 9.25Q6.75 10.825 7.6 12.087Q8.45 13.35 9.8 14ZM12 9.95ZM12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Z" />
    </IconElement>
  );
});

const IconMaterialEmojiSymbolsRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='EmojiSymbolsRounded'
      short_name='EmojiSymbols'

      {...props}
    >
      <path d="M4 4Q3.575 4 3.288 3.712Q3 3.425 3 3Q3 2.575 3.288 2.287Q3.575 2 4 2H10Q10.425 2 10.713 2.287Q11 2.575 11 3Q11 3.425 10.713 3.712Q10.425 4 10 4ZM7 11Q6.575 11 6.287 10.712Q6 10.425 6 10V7H4Q3.575 7 3.288 6.713Q3 6.425 3 6Q3 5.575 3.288 5.287Q3.575 5 4 5H10Q10.425 5 10.713 5.287Q11 5.575 11 6Q11 6.425 10.713 6.713Q10.425 7 10 7H8V10Q8 10.425 7.713 10.712Q7.425 11 7 11ZM13 20.9Q12.725 20.625 12.725 20.2Q12.725 19.775 13 19.5L19.4 13.1Q19.675 12.825 20.1 12.825Q20.525 12.825 20.8 13.1Q21.075 13.375 21.075 13.8Q21.075 14.225 20.8 14.5L14.4 20.9Q14.125 21.175 13.7 21.175Q13.275 21.175 13 20.9ZM14.5 16Q13.85 16 13.425 15.575Q13 15.15 13 14.5Q13 13.85 13.425 13.425Q13.85 13 14.5 13Q15.15 13 15.575 13.425Q16 13.85 16 14.5Q16 15.15 15.575 15.575Q15.15 16 14.5 16ZM19.5 21Q18.85 21 18.425 20.575Q18 20.15 18 19.5Q18 18.85 18.425 18.425Q18.85 18 19.5 18Q20.15 18 20.575 18.425Q21 18.85 21 19.5Q21 20.15 20.575 20.575Q20.15 21 19.5 21ZM15.5 11Q14.475 11 13.738 10.262Q13 9.525 13 8.5Q13 7.475 13.738 6.712Q14.475 5.95 15.5 5.95Q15.8 5.95 16.038 5.987Q16.275 6.025 16.5 6.1V3Q16.5 2.575 16.788 2.287Q17.075 2 17.5 2H20Q20.425 2 20.712 2.287Q21 2.575 21 3Q21 3.425 20.712 3.712Q20.425 4 20 4H18V8.5Q18 9.525 17.263 10.262Q16.525 11 15.5 11ZM5.5 22Q4.475 22 3.738 21.238Q3 20.475 3 19.45Q3 19 3.188 18.538Q3.375 18.075 3.75 17.7L4.8 16.65L4.45 16.3Q4.075 15.925 3.888 15.487Q3.7 15.05 3.7 14.55Q3.7 13.525 4.438 12.787Q5.175 12.05 6.2 12.05Q7.225 12.05 7.963 12.787Q8.7 13.525 8.7 14.55Q8.7 15.05 8.538 15.487Q8.375 15.925 8 16.3L7.65 16.65L8.35 17.35L9.025 16.675Q9.325 16.375 9.738 16.387Q10.15 16.4 10.45 16.7Q10.725 17 10.738 17.4Q10.75 17.8 10.45 18.1L9.75 18.8L10.45 19.5Q10.725 19.775 10.725 20.2Q10.725 20.625 10.45 20.9Q10.175 21.175 9.75 21.175Q9.325 21.175 9.05 20.9L8.35 20.2L7.3 21.25Q6.925 21.625 6.463 21.812Q6 22 5.5 22ZM6.2 15.25 6.55 14.9Q6.625 14.825 6.662 14.75Q6.7 14.675 6.7 14.55Q6.7 14.325 6.55 14.188Q6.4 14.05 6.2 14.05Q6 14.05 5.85 14.188Q5.7 14.325 5.7 14.55Q5.7 14.625 5.738 14.725Q5.775 14.825 5.85 14.9ZM5.45 20Q5.525 20 5.65 19.962Q5.775 19.925 5.85 19.85L6.95 18.8L6.25 18.1L5.15 19.15Q5.075 19.225 5.037 19.325Q5 19.425 5 19.55Q5 19.75 5.125 19.875Q5.25 20 5.45 20Z" />
    </IconElement>
  );
});

const IconMaterialEmojiFlagsRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='EmojiFlagsRounded'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M6 21q-.425 0-.713-.288Q5 20.425 5 20V5q0-.425.287-.713Q5.575 4 6 4h7.175q.35 0 .625.225t.35.575L14.4 6H19q.425 0 .712.287Q20 6.575 20 7v8q0 .425-.288.712Q19.425 16 19 16h-5.175q-.35 0-.625-.225t-.35-.575L12.6 14H7v6q0 .425-.287.712Q6.425 21 6 21Zm6.5-11Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
  },

  wrapper: {
    height: '70vh',
    width: '70vw',
    borderRadius: theme.methods.shape.radius.value(2, 'px'),
    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 4px 32px 0px',
    overflow: 'hidden'
  },

  size_small: {
    maxWidth: 276,
    maxHeight: 276
  },

  size_regular: {
    maxWidth: 340,
    maxHeight: 340
  },

  size_large: {
    maxWidth: 404,
    maxHeight: 404
  },

  main: {
    position: 'relative',
    height: 0,
    overflow: 'hidden auto'
  },

  header: {
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1.5, 'px')} 0`
  },

  categories: {
    height: '100%',
    userSelect: 'none'
  },

  category: {
    paddingInlineStart: theme.methods.space.value(1.5, 'px')
  },

  emoji: {
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    transition: theme.methods.transitions.make('transform'),

    '&$emoji_selected': {
      '&::before': {
        content: '""',
        position: 'absolute',
        width: 'calc(100% + 4px)',
        height: 'auto',
        aspectRatio: '1/1',
        background: theme.palette.background.default.tertiary,
        inset: '0',
        borderRadius: theme.methods.shape.radius.value(40, 'px'),
        zIndex: '0',
        left: '50%',
        transform: 'translate(-50%)',
        top: '-1px'
      }
    },

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  emoji_size_small: {
    fontSize: '1.5rem',
    width: 24
  },

  emoji_size_regular: {
    fontSize: '2rem',
    width: 32
  },

  emoji_size_large: {
    fontSize: '2.5rem',
    width: 40
  },

  unicode: {
    position: 'relative',
    zIndex: 1
  },

  subheader: {
    backdropFilter: 'blur(2px)',
    background: 'transparent',

    '&.amaui-ListSubheader-root': {
      zIndex: 14
    }
  },

  tabs: {
    '& .amaui-Tabs-tabs': {
      minWidth: '100%'
    }
  },

  tab: {
    '&.amaui-Tab-root': {
      minWidth: 'unset'
    }
  },

  tab_size_small: {
    '&.amaui-Tab-root': {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(0.75, 'px')}`
    }
  },

  tab_size_regular: {
    '&.amaui-Tab-root': {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1.25, 'px')}`
    }
  },

  tab_size_large: {
    '&.amaui-Tab-root': {
      padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1.25, 'px')}`
    }
  }
}), { name: 'amaui-Emojis' });

export interface IEmojiCategory {
  name: string;
  groups: string[];
  icon: any;
}

export interface IEmoji {
  alias: string | string[];
  unicode: string;
  category: string;
}

export interface IEmojis extends IMenu {
  emojis?: IEmoji[];

  categories?: IEmojiCategory[];

  selected?: string[];

  onSelect?: (value: IEmoji) => any;

  search?: boolean;

  tabs?: boolean;
}

const Emojis: React.FC<IEmojis> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiEmojis?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const ListSubheader = React.useMemo(() => theme?.elements?.ListSubheader || ListSubheaderElement, [theme]);

  const SpyScroll = React.useMemo(() => theme?.elements?.SpyScroll || SpyScrollElement, [theme]);

  const Tabs = React.useMemo(() => theme?.elements?.Tabs || TabsElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const Tab = React.useMemo(() => theme?.elements?.Tab || TabElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const EMOJI_CATEGORIES = [
    {
      "name": "Smileys and People",
      "groups": ["Smiley", "Gesture", "Person", "Clothing"],
      "icon": <IconMaterialMoodRounded />
    },
    {
      "name": "Animals and Nature",
      "groups": ["Animal", "Nature"],
      "icon": <IconMaterialEmojiNatureRounded />
    },
    {
      "name": "Food and Drink",
      "groups": ["Food"],
      "icon": <IconMaterialEmojiFoodBeverageRounded />
    },
    {
      "name": "Activity",
      "groups": ["Activity"],
      "icon": <IconMaterialHikingRounded />
    },
    {
      "name": "Travel and Places",
      "groups": ["Travel"],
      "icon": <IconMaterialEmojiTransportationRounded />
    },
    {
      "name": "Objects",
      "groups": ["Object"],
      "icon": <IconMaterialEmojiObjectsRounded />
    },
    {
      "name": "Symbols",
      "groups": ["Symbol"],
      "icon": <IconMaterialEmojiSymbolsRounded />
    },
    {
      "name": "Flags and Countries",
      "groups": ["Flag", "Country"],
      "icon": <IconMaterialEmojiFlagsRounded />
    }
  ];

  const {
    tonal = true,

    color = 'themed',

    label: label_,

    onSelect: onSelect_,

    emojis = emojis_list,

    categories = EMOJI_CATEGORIES,

    selected,

    size = 'regular',

    search: search_ = true,

    tabs: tabs_ = true,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [open, setOpen] = React.useState(false);
  const [openElement, setOpenElement] = React.useState<any>();
  const [search, setSearch] = React.useState<string>();
  const [tab, setTab] = React.useState(categories[0].name);

  const refs = {
    main: React.useRef<HTMLElement>()
  };

  const onOpen = React.useCallback(() => {
    setOpen(true);

    setTimeout(() => {
      setOpenElement(refs.main.current || null);
    }, 140);
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(false);

    setTimeout(() => {
      setOpenElement(null);
    }, 140);
  }, []);

  const onSelect = React.useCallback((valueNew: IEmoji) => {
    if (is('function', onSelect_)) onSelect_!(valueNew);
  }, [onSelect_]);

  const emojisPerCategory = React.useMemo(() => {
    const value: Record<string, IEmoji[]> = {};

    if (is('array', categories)) {
      categories.forEach(item => {
        const groups: Record<string, IEmoji[]> = {};

        emojis.forEach(emoji => {
          const alias = ((is('array', emoji.alias) ? emoji.alias : [emoji.alias]) as any[]).join('').toLowerCase();

          if (item.groups.includes(emoji.category) && (!search || alias.includes(search.toLowerCase()))) {
            if (!groups[emoji.category]) groups[emoji.category] = [];

            groups[emoji.category].unshift(emoji as IEmoji);
          }
        });

        value[item.name] = [];

        item.groups.forEach(group => {
          if (!!groups[group]?.length) value[item.name].push(...groups[group]);
        });
      });

      Object.keys(value).forEach(item => {
        if (!value[item].length) delete value[item];
      });
    }

    return value;
  }, [search, emojis, categories]);

  const onChangeSearch = React.useCallback(debounce((valueNew: any) => {
    setSearch(valueNew);
  }, 140), []);

  const onChangeTabs = React.useCallback((valueNew: any) => {
    setTab(valueNew);
  }, []);

  const onActiveTab = React.useCallback((valueNew: any) => {
    setTab(valueNew.replace(/-/g, ' '));
  }, []);

  const onTabClick = React.useCallback((valueNew: any) => {
    const elements = Array.from(refs.main.current?.children || []) as HTMLElement[];

    if (!!elements.length) {
      const element = elements.find((item: HTMLElement) => item.dataset.amauiCategory === valueNew);

      if (element) {
        const top = element.offsetTop;
        const offset = -1;

        refs.main.current!.scroll({
          left: 0,
          top: clamp(top - offset, 0),
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const categoriesUsed = Object.keys(emojisPerCategory);

  const categoryToID = (valueNew: any) => valueNew.replace(/ /g, '-');

  const categoriesUsedIDs = categoriesUsed.map(item => categoryToID(item));

  const tabs = categories.filter(item => categoriesUsed.some(item_ => item.name === item_)).map(item => ({
    name: item.icon,
    value: item.name
  }));

  const label = (
    <Line
      tonal={tonal}

      color={color}

      Component={Surface}

      className={classNames([
        classes.wrapper,
        classes[`size_${size}`]
      ])}
    >
      <SpyScroll
        ids={categoriesUsedIDs}

        parent={openElement}

        onActive={onActiveTab}
      >
        <Line
          gap={0}

          align='unset'

          justify='unset'

          fullWidth

          className={classes.categories}
        >
          {(search_ || tabs_) && (
            <Line
              gap={1}

              fullWidth

              className={classes.header}
            >
              {search_ && (
                <TextField
                  label='Search'

                  onChange={onChangeSearch}

                  size={['small', 'regular'].includes(size) ? 'small' : 'regular'}

                  fullWidth

                  clear
                />
              )}

              {tabs_ && !!categoriesUsed.length && (
                <Tabs
                  valueDefault={tab}

                  value={tab}

                  onChange={onChangeTabs}

                  size='small'

                  initialLineUpdateTimeout={440}

                  noDivider

                  className={classes.tabs}
                >
                  {tabs.map((item, index) => (
                    <Tab
                      key={index}

                      value={item.value as any}

                      onClick={() => onTabClick(item.value)}

                      data-amaui-spy-scroll={categoryToID(item.value)}

                      className={classNames([
                        classes.tab,
                        classes[`tab_size_${size}`]
                      ])}
                    >
                      {React.cloneElement(item.name, {
                        size: ['small', 'regular'].includes(size) ? 'small' : 'regular'
                      })}
                    </Tab>
                  ))}
                </Tabs>
              )}
            </Line>
          )}

          <Line
            ref={refs.main}

            gap={0}

            flex

            fullWidth

            className={classes.main}
          >
            {categoriesUsed.map((item, index) => (
              <List
                key={index}

                gap={1}

                fullWidth

                SurfaceProps={{
                  id: categoryToID(item),
                  'data-amaui-category': item
                }}
              >
                <ListSubheader
                  className={classes.subheader}
                >
                  <Type
                    version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}
                  >
                    {item}
                  </Type>
                </ListSubheader>

                <Line
                  gap={1}

                  direction='row'

                  align='center'

                  wrap='wrap'

                  Component='li'

                  className={classes.category}
                >
                  {emojisPerCategory[item].map((emoji, index_) => (
                    <span
                      key={index_}

                      onClick={() => onSelect(emoji)}

                      title={capitalize(((is('array', emoji.alias) ? (emoji.alias as string[]).join(', ') : emoji.alias) as string).replace(/_/g, ' '))}

                      className={classNames([
                        classes.emoji,
                        classes[`emoji_size_${size}`],
                        selected?.includes(emoji.unicode) && classes.emoji_selected
                      ])}
                    >
                      <span
                        className={classes.unicode}
                      >
                        {emoji.unicode}
                      </span>
                    </span>
                  ))}
                </Line>
              </List>
            ))}
          </Line>
        </Line>
      </SpyScroll>
    </Line>
  );

  return (
    <Menu
      open={open}

      onOpen={onOpen}

      onClose={onClose}

      label={label}

      className={classNames([
        staticClassName('Emojis', theme) && [
          'amaui-Emojis-root',
          `amaui-Emojis-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

Emojis.displayName = 'amaui-Emojis';

export default Emojis;
