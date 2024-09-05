import React from 'react';

import { clamp, cleanValue, copy, getID, is, isEnvironment, lighten, numberWithCommas, textToInnerHTML } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import LineElement from '../Line';
import CheckboxElement from '../Checkbox';
import ColorTextFieldElement from '../ColorTextField';
import DividerElement from '../Divider';
import FabElement from '../Fab';
import FormElement from '../Form';
import FormRowElement from '../FormRow';
import IconButtonElement from '../IconButton';
import LabelElement from '../Label';
import ListElement from '../List';
import ListItemElement from '../ListItem';
import NavigationDrawerElement from '../NavigationDrawer';
import NumericTextFieldElement from '../NumericTextField';
import SelectElement from '../Select';
import SliderElement from '../Slider';
import SmartTextFieldElement from '../SmartTextField';
import SwitchElement from '../Switch';
import TextFieldElement from '../TextField';
import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import SurfaceElement from '../Surface';
import HTMLCanvasElement, { IHTMLCanvasOnChangeValue } from '../HTMLCanvas';

import { staticClassName } from '../utils';
import { IBaseElement, ISize } from '../types';

const IconMaterialCheckCircleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircle'

      short_name='CheckCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.6 13.8-2.175-2.175q-.275-.275-.687-.262-.413.012-.688.287-.275.275-.275.7 0 .425.275.7L9.9 15.9q.275.275.7.275.425 0 .7-.275l5.675-5.675q.275-.275.263-.688-.013-.412-.288-.687-.275-.275-.7-.275-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z" />
    </Icon>
  );
});

const IconMaterialUngroupRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ungroup'

      short_name='Ungroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 592 376 736q-11 11-28 11t-28-11q-11-11-11-28t11-28l144-144H360q-17 0-28.5-11.5T320 496q0-17 11.5-28.5T360 456h200q17 0 28.5 11.5T600 496v200q0 17-11.5 28.5T560 736q-17 0-28.5-11.5T520 696V592Zm0-296q-17 0-28.5-11.5T480 256q0-17 11.5-28.5T520 216h240q33 0 56.5 23.5T840 296v240q0 17-11.5 28.5T800 576q-17 0-28.5-11.5T760 536V296H520ZM200 936q-33 0-56.5-23.5T120 856V256q0-17 11.5-28.5T160 216q17 0 28.5 11.5T200 256v600h600q17 0 28.5 11.5T840 896q0 17-11.5 28.5T800 936H200Z" />
    </Icon>
  );
});

const IconMaterialAdGroupRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroup'

      short_name='AdGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h480v-400H320v400Zm0 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z" />
    </Icon>
  );
});

const IconMaterialContentCopyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopy'

      short_name='ContentCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z" />
    </Icon>
  );
});

const IconMaterialFlipToFrontRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFront'

      short_name='FlipToFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19h2Zm-2-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm4 12v-2h2v2Zm2-4q-.825 0-1.412-.587Q7 15.825 7 15V5q0-.825.588-1.413Q8.175 3 9 3h10q.825 0 1.413.587Q21 4.175 21 5v10q0 .825-.587 1.413Q19.825 17 19 17Zm0-2h10V5H9v10Zm2 6v-2h2v2Zm4 0v-2h2v2Z" />
    </Icon>
  );
});

const IconMaterialFlipToBackRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBack'

      short_name='FlipToBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 9V7h2v2Zm0 4v-2h2v2Zm0-8q0-.825.588-1.413Q8.175 3 9 3v2Zm4 12v-2h2v2Zm8-12V3q.825 0 1.413.587Q21 4.175 21 5Zm-8 0V3h2v2ZM9 17q-.825 0-1.412-.587Q7 15.825 7 15h2Zm10-4v-2h2v2Zm0-4V7h2v2Zm0 8v-2h2q0 .825-.587 1.413Q19.825 17 19 17ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v11h11q.425 0 .712.288.288.287.288.712t-.288.712Q16.425 21 16 21ZM15 5V3h2v2Zm0 12v-2h2v2Z" />
    </Icon>
  );
});

const IconMaterialKeyboardArrowDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDown'

      short_name='KeyboardArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.975q-.2 0-.387-.075-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.9-3.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z" />
    </Icon>
  );
});

const IconMaterialKeyboardArrowUpRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUp'

      short_name='KeyboardArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 14.7q-.275-.275-.275-.7 0-.425.275-.7l4.6-4.6q.15-.15.325-.213.175-.062.375-.062t.388.075q.187.075.312.2l4.6 4.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275-.425 0-.7-.275Z" />
    </Icon>
  );
});

const IconMaterialSettingsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Settings'

      short_name='Settings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.612-.3-.288-.175-.563-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7.075-.375.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L2.65 9.9q-.3-.225-.375-.6-.075-.375.125-.7l1.85-3.225q.175-.35.537-.438.363-.087.713.038l2.175.9q.275-.2.575-.375.3-.175.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3.287.175.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7-.075.375-.375.6l-1.875 1.425q.025.175.025.337v.675q0 .163-.05.338l1.875 1.425q.3.225.375.6.075.375-.125.7l-1.85 3.2q-.2.325-.562.438-.363.112-.713-.013l-2.125-.9q-.275.2-.575.375-.3.175-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588.662-.387 1.212-.937l2.475 1.025.975-1.7-2.15-1.625q.125-.35.175-.738.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625-.975-1.7-2.475 1.05q-.55-.575-1.212-.963-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587-.663.388-1.213.938L5.55 7.15l-.975 1.7 2.15 1.6q-.125.375-.175.75-.05.375-.05.8 0 .4.05.775t.175.75l-2.15 1.625.975 1.7 2.475-1.05q.55.575 1.213.962.662.388 1.437.588Z" />
    </Icon>
  );
});

const IconMaterialKeyboardArrowLeftRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowLeft'

      short_name='KeyboardArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.3 17.3-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L10.8 12l3.9 3.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z" />
    </Icon>
  );
});

const IconMaterialMenuOpenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpen'

      short_name='MenuOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h11q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 18 15 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h8q.425 0 .713.287.287.288.287.713t-.287.712Q12.425 13 12 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h11q.425 0 .713.287Q16 6.575 16 7t-.287.713Q15.425 8 15 8Zm13.4 4 2.9 2.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-3.6-3.6q-.3-.3-.3-.7 0-.4.3-.7l3.6-3.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7Z" />
    </Icon>
  );
});

const IconMaterialAddRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Add'

      short_name='Add'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-.425 0-.712-.288Q11 18.425 11 18v-5H6q-.425 0-.713-.288Q5 12.425 5 12t.287-.713Q5.575 11 6 11h5V6q0-.425.288-.713Q11.575 5 12 5t.713.287Q13 5.575 13 6v5h5q.425 0 .712.287.288.288.288.713t-.288.712Q18.425 13 18 13h-5v5q0 .425-.287.712Q12.425 19 12 19Z" />
    </Icon>
  );
});

const IconMaterialCloseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Close'

      short_name='Close'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 13.4-4.9 4.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z" />
    </Icon>
  );
});

// items
// furniture
// table
// oval
const IconFurnitureTableOvalSeat4Version1 = React.forwardRef((props: any, ref) => {
  const {
    color = '#F5EED6',

    ...other
  } = props;

  const styles = {
    table: {
      color
    },

    chair: {
      fill: lighten(color, 0.4)
    }
  };

  return (
    <Icon
      ref={ref}

      name='FurnitureTableOvalSeat41'

      short_name='FurnitureTableOvalSeat41'

      viewBox='0 0 321 321'

      {...other}
    >
      <path d="M288.424 160.654L288.224 167.754L287.634 174.834L286.644 181.874L285.274 188.844L283.514 195.724L281.034 203.464L278.864 209.144L275.984 215.644L272.754 221.974L269.174 228.104L265.254 234.034L261.014 239.734L256.464 245.194L251.614 250.394L246.484 255.314L241.094 259.934L235.454 264.254L229.574 268.254L223.494 271.924L217.214 275.244L210.754 278.214L203.434 281.074L197.394 283.044L190.544 284.904L183.584 286.374L176.564 287.454L169.494 288.144L162.394 288.444L155.294 288.344L148.204 287.854L141.154 286.964L134.164 285.684L127.254 284.024L117.804 281.074L107.234 276.774L100.864 273.624L94.6744 270.124L88.6944 266.294L82.9344 262.134L77.4144 257.664L72.1544 252.884L67.1644 247.824L62.4644 242.494L58.0644 236.914L53.9844 231.104L50.2344 225.064L46.8244 218.834L43.7644 212.414L40.1944 203.464L36.7944 192.294L35.2244 185.364L34.0444 178.354L33.2544 171.294L32.8644 164.204V157.094L33.2544 150.004L34.0444 142.944L35.2244 135.934L36.7944 129.004L40.1944 117.834L43.7644 108.884L46.8244 102.474L50.2344 96.2341L53.9844 90.2041L58.0644 84.3841L62.4644 78.8042L67.1644 73.4742L72.1544 68.4141L77.4144 63.6441L82.9344 59.1641L88.6944 55.0042L94.6744 51.1741L100.864 47.6741L107.234 44.5341L117.804 40.2341L127.254 37.2741L134.164 35.6142L141.154 34.3342L148.204 33.4541L155.294 32.9541L162.394 32.8541L169.494 33.1541L176.564 33.8441L183.584 34.9241L190.544 36.3941L197.394 38.2542L203.434 40.2341L210.754 43.0941L217.214 46.0542L223.494 49.3841L229.574 53.0441L235.454 57.0441L241.094 61.3642L246.484 65.9941L251.614 70.9141L256.464 76.1041L261.014 81.5641L265.254 87.2641L269.174 93.1942L272.754 99.3342L275.984 105.654L278.864 112.154L281.034 117.834L283.514 125.574L285.274 132.454L286.644 139.434L287.634 146.464L288.224 153.544L288.424 160.654Z" {...styles.table} />

      <path d="M100.044 18.9641C88.8856 10.6124 75.0903 6.56285 61.1878 7.55784C47.2853 8.55282 34.2073 14.5257 24.3517 24.3814C14.496 34.2371 8.52305 47.3151 7.52807 61.2176C6.53308 75.1201 10.5827 88.9154 18.9344 100.074L13.8144 103.904C4.54858 91.5146 0.057821 76.201 1.16506 60.7696C2.27229 45.3382 8.90336 30.8226 19.8431 19.8828C30.7828 8.94313 45.2984 2.31206 60.7298 1.20482C76.1613 0.0975854 91.4749 4.58834 103.864 13.8541L100.044 18.9641Z" {...styles.chair} />
      <path d="M302.304 100.074C310.656 88.9154 314.706 75.1201 313.711 61.2176C312.716 47.3151 306.743 34.2371 296.887 24.3814C287.031 14.5257 273.953 8.55282 260.051 7.55784C246.148 6.56285 232.353 10.6124 221.194 18.9641L217.364 13.8441C229.754 4.56366 245.074 0.0613957 260.514 1.16328C275.954 2.26517 290.48 8.89732 301.425 19.8431C312.371 30.7888 319.003 45.3142 320.105 60.7546C321.207 76.195 316.705 91.515 307.424 103.904L302.304 100.074Z" {...styles.chair} />
      <path d="M18.9344 221.224C10.5827 232.383 6.53308 246.178 7.52807 260.081C8.52305 273.983 14.496 287.061 24.3517 296.917C34.2073 306.773 47.2853 312.745 61.1878 313.74C75.0903 314.735 88.8856 310.686 100.044 302.334L103.864 307.454C91.4749 316.72 76.1613 321.211 60.7298 320.103C45.2984 318.996 30.7828 312.365 19.8431 301.425C8.90336 290.486 2.27229 275.97 1.16506 260.539C0.057821 245.107 4.54858 229.794 13.8144 217.404L18.9344 221.224Z" {...styles.chair} />
      <path d="M221.194 302.334C232.353 310.686 246.148 314.735 260.051 313.74C273.953 312.745 287.031 306.773 296.887 296.917C306.743 287.061 312.716 273.983 313.711 260.081C314.706 246.178 310.656 232.383 302.304 221.224L307.424 217.404C316.697 229.794 321.192 245.111 320.087 260.547C318.982 275.983 312.349 290.503 301.406 301.445C290.463 312.387 275.942 319.018 260.506 320.122C245.07 321.225 229.753 316.728 217.364 307.454L221.194 302.334Z" {...styles.chair} />
      <path d="M281.034 203.464L278.864 209.144L275.984 215.644L272.754 221.974L269.174 228.104L265.254 234.034L261.014 239.734L256.464 245.194L251.614 250.394L246.484 255.314L241.094 259.934L235.454 264.254L229.574 268.254L223.494 271.924L217.214 275.244L210.754 278.214L203.434 281.074L225.024 297.214C234.953 304.637 247.223 308.234 259.588 307.346C271.953 306.458 283.583 301.144 292.349 292.379C301.115 283.613 306.428 271.982 307.316 259.618C308.204 247.253 304.607 234.983 297.184 225.054L281.034 203.464Z" {...styles.chair} />
      <path d="M203.434 40.2341L210.754 43.0941L217.214 46.0542L223.494 49.3841L229.574 53.0441L235.454 57.0441L241.094 61.3642L246.484 65.9941L251.614 70.9141L256.464 76.1041L261.014 81.5641L265.254 87.2641L269.174 93.1942L272.754 99.3342L275.984 105.654L278.864 112.154L281.034 117.834L297.184 96.2441C304.607 86.3158 308.204 74.0452 307.316 61.6805C306.428 49.3159 301.115 37.6853 292.349 28.9197C283.583 20.154 271.953 14.8404 259.588 13.9523C247.223 13.0642 234.953 16.6612 225.024 24.0842L203.434 40.2341Z" {...styles.chair} />
      <path d="M117.804 281.074L107.234 276.774L100.864 273.624L94.6744 270.124L88.6944 266.294L82.9344 262.134L77.4144 257.664L72.1544 252.884L67.1644 247.824L62.4644 242.494L58.0644 236.914L53.9844 231.104L50.2344 225.064L46.8244 218.834L43.7644 212.414L40.1944 203.464L24.0544 225.054C16.6314 234.983 13.0345 247.253 13.9225 259.618C14.8106 271.982 20.1243 283.613 28.8899 292.379C37.6555 301.144 49.2862 306.458 61.6508 307.346C74.0154 308.234 86.286 304.637 96.2144 297.214L117.804 281.074Z" {...styles.chair} />
      <path d="M40.1944 117.834L43.7644 108.884L46.8244 102.474L50.2344 96.2341L53.9844 90.2041L58.0644 84.3841L62.4644 78.8042L67.1644 73.4742L72.1544 68.4141L77.4144 63.6441L82.9344 59.1641L88.6944 55.0042L94.6744 51.1741L100.864 47.6741L107.234 44.5341L117.804 40.2341L96.2144 24.0841C86.286 16.6612 74.0154 13.0642 61.6508 13.9523C49.2862 14.8404 37.6555 20.154 28.8899 28.9197C20.1243 37.6853 14.8106 49.3159 13.9225 61.6805C13.0345 74.0452 16.6314 86.3158 24.0544 96.2441L40.1944 117.834Z" {...styles.chair} />

      <path d="M281.034 203.464L283.514 195.724L285.274 188.844L286.644 181.874L287.634 174.834L288.224 167.754L288.424 160.654L288.224 153.544L287.634 146.464L286.644 139.434L285.274 132.454L283.514 125.574L281.034 117.834M281.034 203.464L278.864 209.144L275.984 215.644L272.754 221.974L269.174 228.104L265.254 234.034L261.014 239.734L256.464 245.194L251.614 250.394L246.484 255.314L241.094 259.934L235.454 264.254L229.574 268.254L223.494 271.924L217.214 275.244L210.754 278.214L203.434 281.074M281.034 203.464L297.184 225.054C304.607 234.983 308.204 247.253 307.316 259.618C306.428 271.982 301.115 283.613 292.349 292.379C283.583 301.144 271.953 306.458 259.588 307.346C247.223 308.234 234.953 304.637 225.024 297.214L203.434 281.074M203.434 281.074L197.394 283.044L190.544 284.904L183.584 286.374L176.564 287.454L169.494 288.144L162.394 288.444L155.294 288.344L148.204 287.854L141.154 286.964L134.164 285.684L127.254 284.024L117.804 281.074M117.804 281.074L107.234 276.774L100.864 273.624L94.6744 270.124L88.6944 266.294L82.9344 262.134L77.4144 257.664L72.1544 252.884L67.1644 247.824L62.4644 242.494L58.0644 236.914L53.9844 231.104L50.2344 225.064L46.8244 218.834L43.7644 212.414L40.1944 203.464M117.804 281.074L96.2144 297.214C86.286 304.637 74.0154 308.234 61.6508 307.346C49.2862 306.458 37.6555 301.144 28.8899 292.379C20.1243 283.613 14.8106 271.982 13.9225 259.618C13.0345 247.253 16.6314 234.983 24.0544 225.054L40.1944 203.464M40.1944 203.464L36.7944 192.294L35.2244 185.364L34.0444 178.354L33.2544 171.294L32.8644 164.204V157.094L33.2544 150.004L34.0444 142.944L35.2244 135.934L36.7944 129.004L40.1944 117.834M40.1944 117.834L43.7644 108.884L46.8244 102.474L50.2344 96.2341L53.9844 90.2041L58.0644 84.3841L62.4644 78.8042L67.1644 73.4742L72.1544 68.4141L77.4144 63.6441L82.9344 59.1641L88.6944 55.0042L94.6744 51.1741L100.864 47.6741L107.234 44.5341L117.804 40.2341M40.1944 117.834L24.0544 96.2441C16.6314 86.3158 13.0345 74.0452 13.9225 61.6805C14.8106 49.3159 20.1243 37.6853 28.8899 28.9197C37.6555 20.154 49.2862 14.8404 61.6508 13.9523C74.0154 13.0642 86.286 16.6612 96.2144 24.0841M117.804 40.2341L127.254 37.2741L134.164 35.6142L141.154 34.3342L148.204 33.4541L155.294 32.9541L162.394 32.8541L169.494 33.1541L176.564 33.8441L183.584 34.9241L190.544 36.3941L197.394 38.2542L203.434 40.2341M117.804 40.2341C109.373 33.9272 104.646 30.3911 96.2144 24.0841M117.804 40.2341L96.2144 24.0841M203.434 40.2341L210.754 43.0941L217.214 46.0542L223.494 49.3841L229.574 53.0441L235.454 57.0441L241.094 61.3642L246.484 65.9941L251.614 70.9141L256.464 76.1041L261.014 81.5641L265.254 87.2641L269.174 93.1942L272.754 99.3342L275.984 105.654L278.864 112.154L281.034 117.834M203.434 40.2341L225.024 24.0842C234.953 16.6612 247.223 13.0642 259.588 13.9523C271.953 14.8404 283.583 20.154 292.349 28.9197C301.115 37.6853 306.428 49.3159 307.316 61.6805C308.204 74.0452 304.607 86.3158 297.184 96.2441L281.034 117.834M302.304 100.074C310.656 88.9154 314.706 75.1201 313.711 61.2176C312.716 47.3151 306.743 34.2371 296.887 24.3814C287.031 14.5257 273.953 8.55282 260.051 7.55784C246.148 6.56285 232.353 10.6124 221.194 18.9641L217.364 13.8441C229.754 4.56366 245.074 0.0613957 260.514 1.16328C275.954 2.26517 290.48 8.89732 301.425 19.8431C312.371 30.7888 319.003 45.3142 320.105 60.7546C321.207 76.195 316.705 91.515 307.424 103.904L302.304 100.074ZM100.044 18.9641C88.8856 10.6124 75.0903 6.56285 61.1878 7.55784C47.2853 8.55282 34.2073 14.5257 24.3517 24.3814C14.496 34.2371 8.52305 47.3151 7.52807 61.2176C6.53308 75.1201 10.5827 88.9154 18.9344 100.074L13.8144 103.904C4.54858 91.5146 0.057821 76.201 1.16506 60.7696C2.27229 45.3382 8.90336 30.8226 19.8431 19.8828C30.7828 8.94313 45.2984 2.31206 60.7298 1.20482C76.1613 0.0975854 91.4749 4.58834 103.864 13.8541L100.044 18.9641ZM221.194 302.334C232.353 310.686 246.148 314.735 260.051 313.74C273.953 312.745 287.031 306.773 296.887 296.917C306.743 287.061 312.716 273.983 313.711 260.081C314.706 246.178 310.656 232.383 302.304 221.224L307.424 217.404C316.697 229.794 321.192 245.111 320.087 260.547C318.982 275.983 312.349 290.503 301.406 301.445C290.463 312.387 275.942 319.018 260.506 320.122C245.07 321.225 229.753 316.728 217.364 307.454L221.194 302.334ZM18.9344 221.224C10.5827 232.383 6.53308 246.178 7.52807 260.081C8.52305 273.983 14.496 287.061 24.3517 296.917C34.2073 306.773 47.2853 312.745 61.1878 313.74C75.0903 314.735 88.8856 310.686 100.044 302.334L103.864 307.454C91.4749 316.72 76.1613 321.211 60.7298 320.103C45.2984 318.996 30.7828 312.365 19.8431 301.425C8.90336 290.486 2.27229 275.97 1.16506 260.539C0.057821 245.107 4.54858 229.794 13.8144 217.404L18.9344 221.224Z" fill="none" stroke="black" />
    </Icon>
  );
});

// rectangle
const IconFurnitureTableRectangleSeat6Version1 = React.forwardRef((props: any, ref) => {
  const {
    color = '#F5EED6',

    ...other
  } = props;

  const styles = {
    table: {
      color
    },

    chair: {
      fill: lighten(color, 0.4)
    }
  };

  return (
    <Icon
      ref={ref}

      name='FurnitureTableRectangleSeat6Version1'

      short_name='FurnitureTableRectangleSeat6Version1'

      viewBox='0 0 402 287'

      {...other}
    >
      <path d="M91.598 62.5698H62.5364V107.031V179.709V224.17H91.598H164.247H237.753H310.402H339.464V179.709V107.031V62.5609L237.753 62.5641L164.247 62.5665L91.598 62.5698Z" {...styles.table} />

      <path d="M237.111 4.85146L242.877 16.3969H305.269L311.044 4.85146H237.111Z" {...styles.chair} />
      <path d="M237.111 1V4.85146H311.044V1H237.111Z" {...styles.chair} />
      <path d="M164.889 4.85146V1H90.9563V4.85146H164.889Z" {...styles.chair} />
      <path d="M159.114 16.3969L164.889 4.85146H90.9563L96.7223 16.3969H159.114Z" {...styles.chair} />
      <path d="M385.618 112.157L339.464 107.031V179.709L385.618 174.574V112.157Z" {...styles.chair} />
      <path d="M397.15 106.389L385.618 112.157V174.574L397.15 180.342V106.389Z" {...styles.chair} />
      <path d="M401 106.389H397.15V180.342H401V106.389Z" {...styles.chair} />
      <path d="M16.3819 112.157L4.84101 106.389V180.351L16.3819 174.574V112.157Z" {...styles.chair} />
      <path d="M4.84101 106.389H1V180.351H4.84101V106.389Z" {...styles.chair} />
      <path d="M62.5364 107.031L16.3819 112.157V174.574L62.5364 179.709V107.031Z" {...styles.chair} />
      <path d="M159.123 270.343L164.247 224.17H91.598L96.7223 270.343H159.123Z" {...styles.chair} />
      <path d="M164.889 281.88L159.123 270.343H96.7223L90.9563 281.88H164.889Z" {...styles.chair} />
      <path d="M164.889 285.731V281.88H90.9563V285.731H164.889Z" {...styles.chair} />
      <path d="M237.753 224.17L242.877 270.343H305.269L310.402 224.17H237.753Z" {...styles.chair} />
      <path d="M242.877 270.343L237.111 281.88H311.044L305.269 270.343H242.877Z" {...styles.chair} />
      <path d="M237.111 281.88V285.731H311.044V281.88H237.111Z" {...styles.chair} />
      <path d="M96.7223 16.3969L91.598 62.5698L164.247 62.5665L159.114 16.3969H96.7223Z" {...styles.chair} />
      <path d="M242.877 16.3913L237.753 62.5641L310.402 62.5609L305.269 16.3913H242.877Z" {...styles.chair} />

      <path d="M339.464 107.031L385.618 112.157M339.464 107.031V179.709M339.464 107.031V62.5609M385.618 112.157L397.15 106.389M385.618 112.157V174.574M397.15 106.389H401V180.342H397.15M397.15 106.389V180.342M397.15 180.342L385.618 174.574M385.618 174.574L339.464 179.709M339.464 179.709V224.17M164.247 224.17L159.123 270.343M164.247 224.17H91.598M164.247 224.17H237.753M159.123 270.343L164.889 281.88M159.123 270.343H96.7223M164.889 281.88V285.731H90.9563V281.88M164.889 281.88H90.9563M90.9563 281.88L96.7223 270.343M96.7223 270.343L91.598 224.17M91.598 224.17H62.5364M62.5364 107.031L16.3819 112.157M62.5364 107.031V62.5698M62.5364 107.031V179.709M16.3819 112.157L4.84101 106.389M16.3819 112.157V174.574M4.84101 106.389H1V180.351H4.84101M4.84101 106.389V180.351M4.84101 180.351L16.3819 174.574M16.3819 174.574L62.5364 179.709M62.5364 179.709V224.17M164.247 62.5698L164.247 62.5665M159.114 16.3969L164.889 4.85146M159.114 16.3969H96.7223M159.114 16.3969L164.247 62.5665M164.889 4.85146V1H90.9563V4.85146M164.889 4.85146H90.9563M90.9563 4.85146L96.7223 16.3969M96.7223 16.3969L91.598 62.5698M91.598 62.5698H62.5364M91.598 62.5698L164.247 62.5665M237.753 224.17L242.877 270.343M237.753 224.17H310.402M242.877 270.343L237.111 281.88M242.877 270.343H305.269M237.111 281.88V285.731H311.044V281.88M237.111 281.88H311.044M311.044 281.88L305.269 270.343M305.269 270.343L310.402 224.17M310.402 224.17H339.464M62.5364 62.5698V224.17M62.5364 62.5698L164.247 62.5665M339.464 62.5609V224.17M339.464 62.5609L237.753 62.5641M339.464 224.17H62.5364M237.753 62.5698L237.753 62.5641M242.877 16.3969L237.111 4.85146M242.877 16.3969H305.269M242.877 16.3969L237.753 62.5641M237.111 4.85146V1H311.044V4.85146M237.111 4.85146H311.044M311.044 4.85146L305.269 16.3969M305.269 16.3969L310.402 62.5609M310.402 62.5609L237.753 62.5641M310.402 62.5609L305.269 16.3913H242.877L237.753 62.5641M237.753 62.5641L164.247 62.5665" fill="none" stroke="black" />
    </Icon>
  );
});

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    border: '1px solid #ccc'
  },

  actionsStart: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    zIndex: 14
  },

  actionsEnd: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    zIndex: 14
  },

  item: {
    position: 'absolute',
    width: 'auto'
  },

  itemSelected: {
    outline: `3px solid ${theme.methods.palette.color.alpha(theme.palette.color.info.main, 0.7)}`
  },

  metaName: {
    position: 'absolute',
    top: '-26px',
    background: theme.palette.background.default.primary,
    padding: '0px 4px',
    borderRadius: 2,
    transformOrigin: 'bottom left',
    whiteSpace: 'nowrap',
    cursor: 'default',
    userSelect: 'none'
  },

  meteSize: {
    position: 'absolute',
    bottom: '-26px',
    background: theme.palette.background.default.primary,
    padding: '0px 4px',
    borderRadius: 2,
    transformOrigin: 'top left',
    whiteSpace: 'nowrap',
    cursor: 'default',
    userSelect: 'none'
  },

  navigation: {
    width: '100vw',
    maxWidth: 270
  },

  navigationHeader: {
    padding: '8px 16px'
  },

  navigationHeaderItemOpen: {
    padding: '8px 8px'
  },

  menu: {
    height: '100vw',
    maxHeight: 340
  },

  menuHeader: {
    padding: '8px 16px'
  },

  menuMain: {
    padding: '0px 16px'
  },

  list: {
    height: 0,
    flex: '1 1 auto',
    overflow: 'hidden auto'
  },

  mainSidebar: {
    padding: '0px 16px',
    flex: '1 1 auto',
    height: 0,
    overflow: 'hidden auto',
    userSelect: 'none'
  },

  navigationDrawerNavigation: {
    '& .amaui-Modal-surface': {
      boxShadow: '4px 0px 24px rgba(0, 0, 0, 0.04)'
    }
  },

  navigationDrawerMenu: {
    '& .amaui-Modal-surface': {
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)'
    }
  },

  main: {
    minHeight: 154,
    overflowY: 'hidden',
    overflowX: 'auto'
  },

  element: {
    width: 114,
    overflow: 'hidden',
    cursor: 'pointer',
    userSelect: 'none',
    transition: theme.methods.transitions.make('transform'),

    '& > .amaui-thumb': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
      borderRadius: 24,
      width: 114,
      height: 'auto'
    },

    '& > p': {

    },

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  elementImage: {
    width: 114,
    height: 114
  },

  accordion: {
    '&.amaui-Accordion-root': {
      '& .amaui-Accordion-wrapper-header': {
        paddingInline: 16
      },

      '& .amaui-Accordion-header': {
        '& .amaui-Type-root': {
          ...theme.typography.values.l2
        }
      },

      '& .amaui-Accordion-main': {
        '& > *': {
          margin: 0,
          gap: 0,
          paddingInlineStart: 16
        }
      }
    }
  },

  select: {
    '& .amaui-Select-input': {
      borderRadius: 0
    }
  },

  disabled: {
    pointerEvents: 'none',
    opacity: 0.54,
    cursor: 'default'
  }
}), { name: 'amaui-Space' });

export interface ISpace extends IBaseElement {
  unitDefault?: 'm' | 'px';

  size?: ISize;

  minSize?: number;

  maxSize?: number;

  defaults?: {
    color?: {
      table?: string;
    }
  };

  floors?: Array<{
    name: string;
    value: string;
    url: string;
  }>;

  disabled?: boolean;

  IconAdd?: any;

  IconMenu?: any;

  IconCloseNavigation?: any;

  IconCloseMenu?: any;

  IconArrowBack?: any;

  IconSettings?: any;

  IconArrowUp?: any;

  IconArrowDown?: any;

  IconToFront?: any;

  IconToBack?: any;

  IconMakeCopy?: any;

  IconGroup?: any;

  IconUngroup?: any;

  IconGroupSelect?: any;

  Component?: any;
}

const Space: React.FC<ISpace> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSpace?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Checkbox = React.useMemo(() => theme?.elements?.Checkbox || CheckboxElement, [theme]);

  const ColorTextField = React.useMemo(() => theme?.elements?.ColorTextField || ColorTextFieldElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const Fab = React.useMemo(() => theme?.elements?.Fab || FabElement, [theme]);

  const Form = React.useMemo(() => theme?.elements?.Form || FormElement, [theme]);

  const FormRow = React.useMemo(() => theme?.elements?.FormRow || FormRowElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Label = React.useMemo(() => theme?.elements?.Label || LabelElement, [theme]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const NavigationDrawer = React.useMemo(() => theme?.elements?.NavigationDrawer || NavigationDrawerElement, [theme]);

  const NumericTextField = React.useMemo(() => theme?.elements?.NumericTextField || NumericTextFieldElement, [theme]);

  const Select = React.useMemo(() => theme?.elements?.Select || SelectElement, [theme]);

  const Slider = React.useMemo(() => theme?.elements?.Slider || SliderElement, [theme]);

  const SmartTextField = React.useMemo(() => theme?.elements?.SmartTextField || SmartTextFieldElement, [theme]);

  const Switch = React.useMemo(() => theme?.elements?.Switch || SwitchElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const HTMLCanvas = React.useMemo(() => theme?.elements?.HTMLCanvas || HTMLCanvasElement, [theme]);

  const {
    size = 'regular',

    minSize = 0.0001,

    maxSize = 240_000,

    unitDefault = 'px',

    floors = [
      { name: 'Floor 1', value: 'floor-1', url: '/assets/svg/space/floor/floor-1.svg' },
      { name: 'Floor 2', value: 'floor-2', url: '/assets/svg/space/floor/floor-2.svg' },
      { name: 'Floor 3', value: 'floor-3', url: '/assets/svg/space/floor/floor-3.svg' },
      { name: 'Floor 4', value: 'floor-4', url: '/assets/svg/space/floor/floor-4.svg' }
    ],

    defaults = {
      color: {
        table: '#F5EED6'
      }
    },

    disabled,

    IconAdd = IconMaterialAddRounded,
    IconMenu = IconMaterialMenuOpenRounded,
    IconCloseNavigation = IconMaterialCloseRounded,
    IconCloseMenu = IconMaterialKeyboardArrowDownRounded,
    IconArrowBack = IconMaterialKeyboardArrowLeftRounded,
    IconSettings = IconMaterialSettingsRounded,
    IconArrowUp = IconMaterialKeyboardArrowUpRounded,
    IconArrowDown = IconMaterialKeyboardArrowDownRounded,
    IconToFront = IconMaterialFlipToFrontRounded,
    IconToBack = IconMaterialFlipToBackRounded,
    IconMakeCopy = IconMaterialContentCopyRounded,
    IconGroup = IconMaterialAdGroupRounded,
    IconUngroup = IconMaterialUngroupRounded,
    IconGroupSelect = IconMaterialCheckCircleRounded,

    Component = Line,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [items, setItems] = React.useState<any>([]);
  const [elementSearch, setElementSearch] = React.useState('');
  const [selected, setSelected] = React.useState<any>();
  const [selectedGroup, setSelectedGroup] = React.useState<any>();
  const [positions, setPositions] = React.useState<IHTMLCanvasOnChangeValue>({} as any);
  const [itemOpen, setItemOpen] = React.useState<any>();
  const [keepAspectRatio, setKeepAspectRatio] = React.useState(true);
  const [openOptions, setOpenOptions] = React.useState(false);
  const [unit, setUnit] = React.useState(unitDefault || 'px');
  const [guidelines, setGuidelines] = React.useState<'lines' | 'dots'>('dots');
  const [itemsSelected, setItemsSelected] = React.useState<any>({});

  const refs = {
    root: React.useRef<HTMLElement>(),
    container: React.useRef<HTMLElement>(),
    items: React.useRef(items),
    unit: React.useRef(unit),
    itemOpen: React.useRef(itemOpen),
    itemsSelected: React.useRef(itemsSelected),
    positions: React.useRef(positions),
    selected: React.useRef(selected),
    selectedGroup: React.useRef(selectedGroup),
    mouseDown: React.useRef<any>(),
    keyDown: React.useRef<any>(),
    previousMouseEvent: React.useRef<any>(),
    methods: React.useRef<any>({}),
    keepAspectRatio: React.useRef(keepAspectRatio),
    units: React.useRef({
      px: 1,
      m: 40
    }),
    groupCounter: React.useRef(1),
    minSize: React.useRef(minSize),
    maxSize: React.useRef(maxSize),
    floors: React.useRef(floors),
    defaults: React.useRef(defaults),
    disabled: React.useRef(disabled)
  };

  refs.items.current = items;

  refs.unit.current = unit;

  refs.itemOpen.current = itemOpen;

  refs.itemsSelected.current = itemsSelected;

  refs.positions.current = positions;

  refs.selected.current = selected;

  refs.selectedGroup.current = selectedGroup;

  refs.keepAspectRatio.current = keepAspectRatio;

  refs.minSize.current = minSize;

  refs.maxSize.current = maxSize;

  refs.floors.current = floors;

  refs.defaults.current = defaults;

  refs.disabled.current = disabled;

  const onItemsResolve = React.useCallback((items_: any) => {
    // sort
    items_.sort((a: any, b: any) => a.order - b.order);

    return items_;
  }, []);

  const onGroupSelect = React.useCallback((item: any, event: MouseEvent) => {
    event.stopPropagation();

    setSelectedGroup(item === refs.selectedGroup.current ? null : item);

    // reset
    setSelected(null);
  }, []);

  const onItemSelect = React.useCallback((item: any) => {
    const itemsSelectedNew: any = { ...refs.itemsSelected.current };

    const exists = itemsSelectedNew[item.id];

    if (exists) delete itemsSelectedNew[item.id];
    else itemsSelectedNew[item.id] = item;

    setItemsSelected(itemsSelectedNew);
  }, []);

  const onItemsGroup = React.useCallback(() => {
    let itemsNew = [...refs.items.current];

    const group = `Group ${refs.groupCounter.current++}`;

    let minOrder = Number.MAX_SAFE_INTEGER;

    const itemsGroup: any = [];
    const ordersGroup: any = [];

    itemsNew.forEach(item => {
      if (refs.itemsSelected.current[item.id]) {
        item.group = group;

        itemsGroup.push(item);

        ordersGroup.push(item.order);

        minOrder = Math.min(minOrder, item.order);
      }
    });

    const start = itemsNew.filter((item_: any) => item_.order < minOrder);

    const end = itemsNew.filter((item_: any) => item_.order > minOrder && !ordersGroup.includes(item_.order));

    itemsNew = [...start, ...itemsGroup, ...end].map((item_: any, index: number) => {
      item_.order = index + 1;

      return item_;
    });

    setItems(onItemsResolve(itemsNew));

    setItemsSelected([]);
  }, []);

  const onItemsUngroup = React.useCallback((group: string) => {
    const itemsNew = [...refs.items.current];

    itemsNew.forEach(item => {
      if (item.group === group) delete item.group;
    });

    setItems(itemsNew);
  }, []);

  const onItemMakeCopy = React.useCallback((item: any = refs.itemOpen.current) => {
    const itemNew = {
      ...copy(item),

      id: getID(),

      name: `${item.name} copy`
    };

    itemNew.props['data-element'] = true;
    itemNew.props['data-id'] = itemNew.id;
    itemNew.props['data-name'] = itemNew.name;

    itemNew.props.style.left -= itemNew.props.style.width + 40;

    const itemsNew = [...refs.items.current];

    itemsNew.push(itemNew);

    setItems(onItemsResolve(itemsNew));
  }, []);

  const onItemMove = React.useCallback((item: any, orderPrevious: number, orderNew: number, event?: MouseEvent) => {
    event?.preventDefault();
    event?.stopPropagation();

    const itemsPrevious = refs.items.current;

    let itemsNew: any = [];

    let itemNew = itemsPrevious.find((item_: any) => item_.order === orderNew);

    const up = orderNew < orderPrevious;

    if (itemNew.group || item.isGroup) {
      const partTo: any = itemNew.group ? itemsPrevious.filter((item_: any) => item_.group === itemNew.group) : [itemNew];

      const partFrom: any = item.isGroup ? itemsPrevious.filter((item_: any) => item_.group === item.group) : [item];

      if (up) itemsNew.push(...partFrom, ...partTo);
      else itemsNew.push(...partTo, ...partFrom);

      // start, end order
      const orderSmallest = Math.min(...itemsNew.map((item_: any) => item_.order));

      const orderLargest = Math.max(...itemsNew.map((item_: any) => item_.order));

      const start = itemsPrevious.filter((item_: any) => item_.order < orderSmallest);

      const end = itemsPrevious.filter((item_: any) => item_.order > orderLargest);

      itemsNew = [...start, ...itemsNew, ...end].map((item_: any, index: number) => {
        item_.order = index + 1;

        return item_;
      });
    }
    else {
      let itemPrevious: any;

      itemsPrevious.forEach((item_: any) => {
        if (item_.order === orderPrevious) itemPrevious = item_;

        if (item_.order === orderNew) itemNew = item_;
      });

      itemPrevious.order = orderNew;

      itemNew.order = orderPrevious;

      itemsNew = [...itemsPrevious];
    }

    setItems(onItemsResolve(itemsNew));
  }, []);

  const onUpdateGuidelines = React.useCallback((valueNew: any) => {
    setGuidelines(valueNew);
  }, []);

  const onUpdateUnit = React.useCallback((valueNew: any) => {
    setUnit(valueNew);
  }, []);

  const onOpenOpenOptions = React.useCallback(() => {
    setItemOpen(false);
    setOpenOptions(true);
  }, []);

  const onCloseOpenOptions = React.useCallback(() => {
    setOpenOptions(false);
  }, []);

  const onChangeKeepAspectRatio = React.useCallback((valueNew: any) => {
    setKeepAspectRatio(valueNew);
  }, []);

  const getUnitValue = React.useCallback((valueNew_: any) => {
    if (['', ' ', '+', '-', 'e', 'e+', 'e-', undefined, null].includes(valueNew_)) return valueNew_;

    let valueNew = +valueNew_;

    const unit_ = refs.unit.current;

    if (!valueNew) valueNew = clamp(+valueNew_, refs.minSize.current, refs.maxSize.current);

    valueNew = unit_ === 'px' ? +valueNew : +valueNew / refs.units.current.m;

    valueNew = clamp(+valueNew % 1 > 0 ? +(valueNew).toFixed(4) : valueNew, refs.minSize.current, refs.maxSize.current);

    if ((String(valueNew_).startsWith('-0') || String(valueNew_).includes('.')) && clamp(+valueNew_, refs.minSize.current, refs.maxSize.current) === +valueNew_) return valueNew_;

    return !valueNew ? clamp(+valueNew, refs.minSize.current, refs.maxSize.current) : valueNew;
  }, []);

  const toUnitValue = React.useCallback((valueNew_: any, raw = false) => {
    if (['', ' ', '+', '-', 'e', 'e+', 'e-', undefined, null].includes(valueNew_)) return valueNew_;

    let valueNew = valueNew_;

    const unit_ = refs.unit.current;

    if (!valueNew) valueNew = clamp(+valueNew_, refs.minSize.current, refs.maxSize.current);

    valueNew = unit_ === 'px' ? +valueNew : +valueNew * refs.units.current.m;

    valueNew = clamp(+valueNew % 1 > 0 ? +(valueNew).toFixed(4) : valueNew, refs.minSize.current, refs.maxSize.current);

    if (raw && (String(valueNew_).startsWith('-0') || String(valueNew_).includes('.')) && clamp(+valueNew_, refs.minSize.current, refs.maxSize.current) === +valueNew_) return valueNew_;

    return valueNew;
  }, []);

  const onItemCenter = React.useCallback((item: any) => {
    const root = refs.root.current as HTMLElement;
    const positions_ = refs.positions.current;

    const style_ = item.props.style;

    const {
      left,
      top,
      width,
      height
    } = style_;

    const valueNew = {
      ...refs.positions.current,

      left: (left * positions_.zoom * -1) + (root.clientWidth / 2) - ((width * positions_.zoom) / 2),
      top: (top * positions_.zoom * -1) + (root.clientHeight / 2) - ((height * positions_.zoom) / 2)
    };

    refs.methods.current.updatePositions(valueNew);
  }, []);

  const onItemOpen = React.useCallback((item: any) => {
    setSelected(item?.id);

    setItemOpen(item);

    // center
    onItemCenter(item);

    // reset
    setSelectedGroup(null);
  }, []);

  const onItemClose = React.useCallback(() => {
    setItemOpen(null);
  }, []);

  const onElementSearch = React.useCallback((value: string) => {
    setElementSearch(value);
  }, []);

  const onElementSearchClear = React.useCallback(() => {
    setElementSearch('');
  }, []);

  const onItemRemove = React.useCallback((id: string) => {
    const item = refs.items.current.find((item_: any) => item_.id === id);

    if (item) setItems((previous: any) => onItemsResolve(previous.filter((item_: any) => !(item_.id === id || (refs.selectedGroup.current && refs.selectedGroup.current === item.group && item.group && item_.group === item.group)))));

    if (refs.itemOpen.current?.id === id) {
      setItemOpen(null);
    }
  }, []);

  const onKeyUp = React.useCallback(() => {
    refs.keyDown.current = null;

    refs.previousMouseEvent.current = undefined;
  }, []);

  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      const activeElement = window.document.activeElement?.nodeName;

      if (
        refs.selected.current &&
        !(activeElement && ['input', 'h4'].includes(activeElement.toLowerCase()))
      ) onItemRemove(refs.selected.current);
    }

    refs.keyDown.current = event.key;
  }, []);

  const onMouseUp = React.useCallback(() => {
    refs.mouseDown.current = null;

    refs.previousMouseEvent.current = undefined;
  }, []);

  const onMouseDown = React.useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const element = target.closest('[data-element]') as HTMLElement;

    if (element) {
      const item = refs.items.current.find((item_: any) => item_.id === element.dataset.id) as any;

      if (item) {
        refs.mouseDown.current = {
          id: item.id,
          item,
          element
        };
      }
    }
  }, []);

  const onTouchStart = React.useCallback((event: TouchEvent) => {
    const target = event.target as HTMLElement;

    const element = target.closest('[data-element]') as HTMLElement;

    if (element) {
      refs.mouseDown.current = {
        id: element.dataset.id,
        element
      };
    }
  }, []);

  const onMoveItem = React.useCallback((x: number, y: number) => {
    const mouseDown = refs.mouseDown.current;

    if (mouseDown) {
      setItems((previous: any) => {
        const id = mouseDown.id;

        const item: any = previous.find((item_: any) => item_.id === id);

        let updated = 0;

        const itemsNew: any = [...previous].map((item_: any) => {
          if ((item_.id === id || (refs.selectedGroup.current && refs.selectedGroup.current === item.group && item.group && item_.group === item.group))) {
            item_.props.style.left += x;

            item_.props.style.top += y;

            updated++;
          }

          return item_;
        });

        if (!!updated) return itemsNew;

        return previous;
      });
    }
  }, []);

  const onMove = React.useCallback((x_: number, y_: number, event: MouseEvent) => {
    if (refs.mouseDown.current && refs.previousMouseEvent.current && !refs.disabled.current) {
      const { clientX: xPrevious, clientY: yPrevious } = refs.previousMouseEvent.current as any;

      const zoomAdjusted = (1 / refs.positions.current.zoom);

      const x = (x_ - xPrevious) * zoomAdjusted;

      const y = (y_ - yPrevious) * zoomAdjusted;

      onMoveItem(x, y);
    }
  }, []);

  const onMouseMove = React.useCallback((event: MouseEvent) => {
    if (!refs.keyDown.current && refs.mouseDown.current && !refs.disabled.current) {
      const { clientY, clientX } = event;

      onMove(clientX, clientY, event);

      refs.previousMouseEvent.current = event;
    }
  }, []);

  const onTouchMove = React.useCallback((event: TouchEvent) => {
    if (!refs.keyDown.current && refs.mouseDown.current && !refs.disabled.current) {
      const { clientY, clientX } = event.touches[0];

      onMove(clientX, clientY, event as any);

      refs.previousMouseEvent.current = event;

      // Normalize for use as a mouseDown value
      (refs.previousMouseEvent.current as any).clientY = clientY;

      (refs.previousMouseEvent.current as any).clientX = clientX;
    }
  }, []);

  React.useEffect(() => {
    onElementSearchClear();

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument?.addEventListener('keyup', onKeyUp);

    rootDocument?.addEventListener('keydown', onKeyDown);

    rootDocument!.addEventListener('mousemove', onMouseMove);

    rootDocument!.addEventListener('touchmove', onTouchMove, { passive: true });

    rootDocument!.addEventListener('mouseup', onMouseUp);

    rootDocument!.addEventListener('touchend', onMouseUp);

    return () => {
      rootDocument!.removeEventListener('keyup', onKeyUp);

      rootDocument!.removeEventListener('keydown', onKeyDown);

      rootDocument!.removeEventListener('mousemove', onMouseMove);

      rootDocument!.removeEventListener('touchmove', onTouchMove);

      rootDocument!.removeEventListener('mouseup', onMouseUp);

      rootDocument!.removeEventListener('touchend', onMouseUp);
    };
  }, []);

  const onOpenNavigation = React.useCallback(() => {
    setOpenOptions(false);
    setItemOpen(false);
    setOpenNavigation(true);
  }, []);

  const onCloseNavigation = React.useCallback(() => {
    setOpenNavigation(false);

    setTimeout(() => {
      setItemOpen(null);
    }, 140);
  }, []);

  const onOpenMenu = React.useCallback(() => {
    setOpenMenu(true);
  }, []);

  const onCloseMenu = React.useCallback(() => {
    setOpenMenu(false);
  }, []);

  const onChangeHTMLCanvas = React.useCallback((valueNew: any) => {
    setPositions(valueNew);

    refs.positions.current = valueNew;
  }, []);

  const onClickSpace = React.useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const element = target.closest('[data-element]') as HTMLElement;

    if (element) {
      const id = element.dataset.id;

      if (refs.selected.current !== id) {
        const item = refs.items.current.find((item_: any) => item_.id === id);

        setSelected(id);

        if (refs.itemOpen.current) setItemOpen(item);

        // reset
        if (item.group !== refs.selectedGroup.current) setSelectedGroup(null);
      }
    }
    else {
      setSelected(null);
      setSelectedGroup(null);
    }
  }, []);

  const onItemClick = React.useCallback((item: any, event: MouseEvent) => {
    if (event.detail === 2) {
      setSelected(item.id);
      setItemOpen(item);
      setOpenNavigation(true);
      setOpenMenu(false);

      // reset
      if (item.group !== refs.selectedGroup.current) setSelectedGroup(null);
    }
  }, []);

  const onItemUpdate = React.useCallback((valueNew: any, item = refs.itemOpen.current) => {
    const itemsNew = [...refs.items.current];

    const index = itemsNew.findIndex(item_ => item_.id === item.id);

    if (index > -1) {
      const itemToUpdate = itemsNew[index];

      const ratio = itemToUpdate.props.style.width / itemToUpdate.props.style.height;

      if (valueNew.name !== undefined) itemToUpdate.name = valueNew.name;

      if (valueNew.id_custom !== undefined) itemToUpdate.id_custom = valueNew.id_custom;

      if (valueNew.selectable !== undefined) itemToUpdate.selectable = valueNew.selectable;

      if (valueNew.description !== undefined) itemToUpdate.description = valueNew.description;

      if (valueNew.width !== undefined) itemToUpdate.width = valueNew.width;

      if (valueNew.height !== undefined) itemToUpdate.height = valueNew.height;

      if (valueNew.backgroundImage !== undefined) itemToUpdate.backgroundImage = valueNew.backgroundImage;

      if (valueNew.props?.color !== undefined) itemToUpdate.props.color = valueNew.props.color;

      const backgroundImage = valueNew.backgroundImage !== undefined ? valueNew.backgroundImage : item.backgroundImage !== undefined ? item.backgroundImage : null;

      if (backgroundImage) {
        itemToUpdate.props.style.backgroundImage = `url(/assets/svg/space/floor/${backgroundImage}.svg)`;
        itemToUpdate.props.style.backgroundSize = 70;
      }
      else {
        itemToUpdate.props.style.backgroundImage = itemToUpdate.props.style.backgroundSize = null;
      }

      if (valueNew.rotate !== undefined) itemToUpdate.rotate = valueNew.rotate;

      itemToUpdate.props.style.transform = `rotate(${valueNew.rotate !== undefined ? valueNew.rotate : item.rotate !== undefined ? item.rotate : 0}deg)`;

      itemToUpdate.props.style = {
        ...itemToUpdate.props.style,

        ...valueNew.props?.style
      };

      if (!['icon'].includes(item.type) && refs.keepAspectRatio.current) {
        if (valueNew.props?.style?.width) {
          let valueHeight = valueNew.props?.style?.width / ratio;

          valueHeight = clamp(+valueHeight, refs.minSize.current, refs.maxSize.current);

          itemToUpdate.props.style.height = itemToUpdate.height = valueHeight % 1 > 0 ? +(valueHeight).toFixed(4) : valueHeight;

          if (Number.isNaN(itemToUpdate.props.style.height)) itemToUpdate.props.style.height = itemToUpdate.height = valueNew.props?.style?.width;
        }

        if (valueNew.props?.style?.height) {
          let valueWidth = valueNew.props?.style?.height * ratio;

          valueWidth = clamp(+valueWidth, refs.minSize.current, refs.maxSize.current);

          itemToUpdate.props.style.width = itemToUpdate.width = valueWidth % 1 > 0 ? +(valueWidth).toFixed(4) : valueWidth;

          if (Number.isNaN(itemToUpdate.props.style.width)) itemToUpdate.props.style.width = itemToUpdate.width = valueNew.props?.style?.height;
        }
      }

      setItems(onItemsResolve(itemsNew));
    }
  }, []);

  const optionsMenu = React.useMemo(() => {

    return [
      // 1) furniture
      // 1.1) table
      // 1.1.1) oval
      {
        version: 'table-oval-seat-4-1',
        type: 'icon',
        name: 'Table oval seat 4, 1',
        tags: ['inside', 'furniture', 'oval', 'table', 'seats-4'],
        props: {
          color: refs.defaults.current?.color?.table,

          style: {
            width: 120,
            height: 'auto'
          }
        }
      },
      // 1.1.2) rectangle
      {
        version: 'table-rectangle-seat-6-1',
        type: 'icon',
        name: 'Table rectangle seat 6, 1',
        tags: ['inside', 'furniture', 'rectangle', 'table', 'seats-6'],
        props: {
          color: refs.defaults.current?.color?.table,

          style: {
            width: 160,
            height: 'auto'
          }
        }
      },

      // simple
      // shape
      // rectangle
      {
        version: 'rectangle',
        type: 'shape',
        name: 'Rectangle',
        tags: ['simple', 'rectangle'],
        props: {
          style: {
            width: 240,
            height: 240,
            borderWidth: 1.5,
            borderStyle: 'solid',
            borderColor: 'rgb(255, 195, 66)',
            backgroundColor: 'rgba(245, 245, 220, 0.54)'
          }
        }
      },

      // oval
      {
        version: 'oval',
        type: 'shape',
        name: 'Oval',
        tags: ['simple', 'oval'],
        props: {
          style: {
            width: 240,
            height: 240,
            borderWidth: 1.5,
            borderStyle: 'solid',
            borderColor: 'rgb(255, 195, 66)',
            backgroundColor: 'rgba(245, 245, 220, 0.54)',
            borderRadius: 240_000
          }
        }
      }
    ];
  }, []);

  const elementsMenu = React.useMemo(() => {
    const valueNew = [...optionsMenu].filter(item => item.name.toLowerCase().includes(elementSearch.toLowerCase()));

    return valueNew;
  }, [optionsMenu, elementSearch]);

  const getElement = React.useCallback((item: any) => {
    const otherElementProps = {
      onMouseDown,
      onTouchStart,
      onClick: (event: MouseEvent) => onItemClick(item, event)
    };

    const positions_ = refs.positions.current;

    const textZoomAdjusted = 1 / positions_.zoom;

    const isSelected = selected === item.id || (refs.selectedGroup.current && (refs.selectedGroup.current === item.group));

    const textOtherProps = {
      style: {
        transform: `scale(${textZoomAdjusted})`,
        // transform: `scale(${textZoomAdjusted}) rotate(-${item.rotate}deg)`
      }
    };

    const rootStyle = {
      ...item.props?.style
    };

    let rootElement = null;

    const styleIcon = {
      transform: 'unset'
    };

    if (item.version === 'table-oval-seat-4-1') {
      rootElement = (
        <IconFurnitureTableOvalSeat4Version1
          color={item.props.color}

          style={{
            ...item.props.style,

            ...styleIcon
          }}
        />
      );
    }

    if (item.version === 'table-rectangle-seat-6-1') {
      rootElement = (
        <IconFurnitureTableRectangleSeat6Version1
          color={item.props.color}

          style={{
            ...item.props.style,

            ...styleIcon
          }}
        />
      );
    }

    if (['icon'].includes(item.type)) {
      delete rootStyle.width;
      delete rootStyle.height;
    }

    const widthText = `${item.props.style.width % 1 > 0 ? getUnitValue(item.props.style.width) : numberWithCommas(getUnitValue(item.props.style.width))}${refs.unit.current}`;

    const heightText = `${item.props.style.height % 1 > 0 ? getUnitValue(item.props.style.height) : numberWithCommas(getUnitValue(item.props.style.height))}${refs.unit.current}`;

    return (
      <Line
        key={item.id}

        {...item.props}

        {...otherElementProps}

        className={classNames([
          item.props?.className,
          isSelected && classes.itemSelected
        ])}

        style={{
          ...rootStyle
        }}
      >
        {rootElement}

        {isSelected && <>
          <Type
            version='b3'

            align='center'

            color='info'

            className={classes.metaName}

            {...textOtherProps}

            dangerouslySetInnerHTML={{
              __html: textToInnerHTML(item.name)
            }}
          />

          <Type
            version='b3'

            align='center'

            color='info'

            className={classes.meteSize}

            {...textOtherProps}
          >
            {['shape'].includes(item.type) && <>{widthText} x {heightText}</>}

            {['icon'].includes(item.type) && <>Width: {widthText}</>}
          </Type>
        </>}
      </Line>
    );
  }, [selected, onMouseDown, onTouchStart]);

  const getThumbnail = React.useCallback((item: any) => {
    let element: any = null;

    if (['rectangle', 'oval'].includes(item.version)) {
      element = (
        <Line
          style={{
            ...item.props.style,

            width: '100%',
            height: '100%'
          }}
        />
      );
    }

    const styleIcon = {
      maxWidth: '100%',
      maxHeight: '100%',
      height: '100%',
      width: '100%'
    };

    if (item.version === 'table-oval-seat-4-1') {
      element = (
        <IconFurnitureTableOvalSeat4Version1
          style={{
            ...item.props.style,
            ...styleIcon
          }}
        />
      );
    }

    if (item.version === 'table-rectangle-seat-6-1') {
      element = (
        <IconFurnitureTableRectangleSeat6Version1
          style={{
            ...item.props.style,
            ...styleIcon
          }}
        />
      );
    }

    return (
      <Line
        align='center'

        justify='center'

        className={classes.elementImage}
      >
        {element}
      </Line>
    );
  }, []);

  const onAdd = React.useCallback((item: any) => {
    const itemToAdd = copy(item);

    itemToAdd.name = `${itemToAdd.name} ${refs.items.current.length ? refs.items.current.length + 1 : ''}`.trim();

    const {
      zoom = 1,
      left = 0,
      top = 0
    } = refs.positions.current;

    setItems((previous: any) => {
      const id = getID();

      const width = itemToAdd.props.style.width;
      const height = itemToAdd.props.style.height;

      const object = {
        id,

        ...itemToAdd,

        width,
        height,
        rotate: 0,

        order: (previous[previous.length - 1]?.order || 0) + 1,

        props: {
          ...itemToAdd.props,

          'data-amaui': true,
          'data-element': true,
          'data-id': id,
          'data-name': itemToAdd.name,

          className: classNames([
            itemToAdd.props?.className,
            classes.item
          ]),

          style: {
            ...itemToAdd.props.style,

            width,
            height,
            left: Math.abs(left) / zoom,
            top: Math.abs(top) / zoom
          }
        }
      };

      return onItemsResolve([
        ...previous,

        object
      ]) as any;
    });
  }, []);

  const optionsBackgroundImage = React.useMemo(() => {
    const options = refs.floors.current;

    return options.map(item => ({
      ...item,

      name: (
        <div
          style={{
            width: 20,
            height: 20,
            backgroundImage: `url(${item.url})`,
            bacgkroundSize: '17px'
          }}
        />
      )
    }));
  }, []);

  const onStopPropagation = React.useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  const indexItemOpen = itemOpen && items.findIndex((item_: any) => item_ === itemOpen);

  const formRowProps: any = {
    fullWidth: true,

    MainProps: {
      gap: 1.5
    }
  };

  const itemsPrepared = React.useMemo(() => {
    const result: any = {
      '': {
        index: Number.MAX_SAFE_INTEGER,
        items: []
      }
    };

    items.forEach((item: any) => {
      const group = item.group || '';

      if (!result[group]) result[group] = {
        index: Number.MAX_SAFE_INTEGER,
        items: []
      };

      result[group].items.push(item);
    });

    Object.values(result).forEach((item: any) => {
      item.index = Math.min(...item.items.map((item_: any) => item_.index));

      item.items.sort((a: any, b: any) => b.index - a.index);
    });

    const mainItems = [...result[''].items];

    Object.keys(result).forEach(key => {
      if (key) {
        mainItems.push({
          isGroup: true,

          group: key,

          order: result[key].items[0].order,

          ...result[key]
        });
      }
    });

    mainItems.sort((a: any, b: any) => a.order - b.order);

    return mainItems;
  }, [items, selectedGroup, selected]);

  const itemOpenType = itemOpen?.type;

  const elements: any = {
    list: (
      <List
        size='small'

        paddingVertical='none'

        noBackground

        className={classes.list}
      >
        {itemsPrepared.map((item: any, index: number) => {
          const groupSelected = refs.selectedGroup.current === item.group;

          const someSelected = groupSelected || (item.isGroup && item.items.some((item_: any) => item_.id === refs.selected.current));

          let orderStart = index;

          let orderEnd = index;

          if (item.isGroup) {
            orderStart = item.items[0].order;

            orderEnd = item.items[item.items.length - 1].order;
          }

          return item.isGroup ? (
            <Form
              key={index}

              name={item.group}

              openDefault={someSelected}

              end={(
                <Line
                  gap={0}

                  direction='row'

                  align='center'
                >
                  <Tooltip
                    name='Move in front'
                  >
                    <IconButton
                      onClick={(event: MouseEvent) => onItemMove(item, orderEnd, orderEnd + 1, event)}

                      size='small'

                      disabled={orderEnd >= items.length}
                    >
                      <IconArrowDown />
                    </IconButton>
                  </Tooltip>

                  <Tooltip
                    name='Move behind'
                  >
                    <IconButton
                      onClick={(event: MouseEvent) => onItemMove(item, orderStart, orderStart - 1, event)}

                      size='small'

                      disabled={orderStart <= 1}
                    >
                      <IconArrowUp />
                    </IconButton>
                  </Tooltip>

                  <Tooltip
                    name='Ungroup'
                  >
                    <IconButton
                      size='small'

                      onClick={() => onItemsUngroup(item.group)}
                    >
                      <IconUngroup />
                    </IconButton>
                  </Tooltip>

                  <Tooltip
                    name={`${groupSelected ? 'Unselect' : 'Select'} group`}
                  >
                    <IconButton
                      size='small'

                      onClick={(event: MouseEvent) => onGroupSelect(item.group, event)}

                      color={groupSelected ? 'success' : 'default'}

                      selected={groupSelected}
                    >
                      <IconGroupSelect />
                    </IconButton>
                  </Tooltip>
                </Line>
              )}

              AccordionProps={{
                noExpandButton: true
              }}

              size='small'

              wrapper

              accordion

              className={classes.accordion}
            >
              {item.items.map((itemGroup: any, indexItemGroup: number) => {
                return (
                  <ListItem
                    key={itemGroup.id}

                    primary={(
                      <Type
                        version='b2'

                        dangerouslySetInnerHTML={{
                          __html: textToInnerHTML(itemGroup.name)
                        }}
                      />
                    )}

                    end={(
                      <Line
                        gap={0}

                        direction='row'

                        align='center'
                      >
                        <Tooltip
                          name='Move in front'
                        >
                          <IconButton
                            onClick={(event: MouseEvent) => onItemMove(itemGroup, itemGroup.order, itemGroup.order + 1, event)}

                            size='small'

                            disabled={indexItemGroup >= item.items.length - 1}
                          >
                            <IconArrowDown />
                          </IconButton>
                        </Tooltip>

                        <Tooltip
                          name='Move behind'
                        >
                          <IconButton
                            onClick={(event: MouseEvent) => onItemMove(itemGroup, itemGroup.order, itemGroup.order - 1, event)}

                            size='small'

                            disabled={!indexItemGroup}
                          >
                            <IconArrowUp />
                          </IconButton>
                        </Tooltip>
                      </Line>
                    )}

                    onClick={() => onItemOpen(itemGroup)}

                    selected={itemGroup.id === refs.selected.current}

                    size='small'

                    button

                    noBackground
                  />
                );
              })}
            </Form>
          ) : (
            <ListItem
              key={item.id}

              start={!item.group && !item.isGroup && (
                <Checkbox
                  value={!!itemsSelected[item.id]}

                  onChange={() => onItemSelect(item)}

                  onClick={onStopPropagation}

                  size='small'
                />
              )}

              primary={(
                <Type
                  version='b2'

                  dangerouslySetInnerHTML={{
                    __html: textToInnerHTML(item.name)
                  }}
                />
              )}

              end={(
                <Line
                  gap={0}

                  direction='row'

                  align='center'
                >
                  <Tooltip
                    name='Move in front'
                  >
                    <IconButton
                      onClick={(event: MouseEvent) => onItemMove(item, item.order, item.order + 1, event)}

                      size='small'

                      disabled={index >= items.length - 1}
                    >
                      <IconArrowDown />
                    </IconButton>
                  </Tooltip>

                  <Tooltip
                    name='Move behind'
                  >
                    <IconButton
                      onClick={(event: MouseEvent) => onItemMove(item, item.order, item.order - 1, event)}

                      size='small'

                      disabled={!index}
                    >
                      <IconArrowUp />
                    </IconButton>
                  </Tooltip>
                </Line>
              )}

              onClick={() => onItemOpen(item)}

              selected={item.id === refs.selected.current}

              size='small'

              button

              noBackground
            />
          );
        })}
      </List>
    ),

    itemOpen: itemOpen && (
      <Line
        gap={2}

        flex

        fullWidth

        className={classNames([
          classes.mainSidebar
        ])}
      >
        <FormRow
          name={cleanValue(itemOpen.version, { capitalize: true })}

          fullWidth

          end={(
            <Line
              gap={0}

              direction='row'

              align='center'
            >
              <Tooltip
                name='Make a copy'
              >
                <IconButton
                  onClick={() => onItemMakeCopy()}
                >
                  <IconMakeCopy />
                </IconButton>
              </Tooltip>

              <Tooltip
                name='Move to front'
              >
                <IconButton
                  onClick={() => onItemMove(itemOpen, itemOpen.order, items.length)}

                  disabled={indexItemOpen >= items.length - 1}
                >
                  <IconToFront />
                </IconButton>
              </Tooltip>

              <Tooltip
                name='Move to back'
              >
                <IconButton
                  onClick={() => onItemMove(itemOpen, itemOpen.order, 1)}

                  disabled={!indexItemOpen}
                >
                  <IconToBack />
                </IconButton>
              </Tooltip>
            </Line>
          )}

          MainProps={{
            gap: 1.5,

            style: {
              paddingBottom: 40
            }
          }}
        >
          <FormRow
            {...formRowProps}
          >
            {itemOpen.group && (
              <Type
                version='b2'

                priority='secondary'
              >
                {itemOpen.group}
              </Type>
            )}

            <Label
              value={itemOpen?.selectable}

              onChange={(valueNew: any) => onItemUpdate({ selectable: valueNew })}
            >
              <Checkbox />

              Selectable
            </Label>

            <TextField
              name='Custom ID'

              value={itemOpen?.id_custom || ''}

              onChange={(valueNew: any) => onItemUpdate({ id_custom: valueNew })}

              size='small'

              fullWidth
            />

            <SmartTextField
              name='Description'

              valueDefault={textToInnerHTML(itemOpen?.description) || ''}

              onChange={(valueNew: any) => onItemUpdate({ description: valueNew })}

              minRows={4}

              multiline

              edit

              style={{
                marginTop: 0
              }}
            />
          </FormRow>

          <Divider />

          <FormRow
            name='Size'

            {...formRowProps}
          >
            <NumericTextField
              name='Width'

              value={getUnitValue(itemOpen.width)}

              onChange={(valueNew: any) => onItemUpdate({ width: toUnitValue(valueNew, true), props: { style: { width: toUnitValue(valueNew) } } })}

              min={minSize}

              max={maxSize}

              sufix={refs.unit.current}

              size='small'
            />

            {['shape'].includes(itemOpenType) && <>
              <NumericTextField
                name='Height'

                value={getUnitValue(itemOpen.height)}

                onChange={(valueNew: any) => onItemUpdate({ height: toUnitValue(valueNew, true), props: { style: { height: toUnitValue(valueNew) } } })}

                min={minSize}

                max={maxSize}

                sufix={refs.unit.current}

                size='small'
              />

              <Label
                value={keepAspectRatio}

                onChange={onChangeKeepAspectRatio}

                size='small'
              >
                <Switch />

                Keep aspect ratio
              </Label>
            </>}
          </FormRow>

          <Divider />

          <FormRow
            name='Rotate'

            description={`${(itemOpen.rotate || 0).toFixed(0)} deg`}

            style={{
              paddingBottom: 16
            }}

            {...formRowProps}
          >
            <Slider
              value={itemOpen.rotate || 0}

              onChange={(valueNew: any) => onItemUpdate({ rotate: valueNew })}

              min={0}

              max={360}

              marks={[
                { value: 0, label: '0' },
                { value: 360, label: '360' }
              ]}

              labels

              tooltip

              style={{
                maxWidth: 'unset',
                width: 'calc(100% - 8px)',
                margin: '12px 4px 16px'
              }}
            />
          </FormRow>

          <Divider />

          <FormRow
            name='Style'

            size='regular'

            {...formRowProps}

            MainProps={{
              gap: 2.5
            }}
          >
            {['icon'].includes(itemOpenType) && <>
              <FormRow
                name='Color'

                size='small'

                {...formRowProps}
              >
                <ColorTextField
                  name='Color'

                  value={itemOpen?.props?.color}

                  onChange={(valueNew: any) => onItemUpdate({ props: { color: valueNew } })}
                />
              </FormRow>
            </>}

            {['shape'].includes(itemOpenType) && <>
              <FormRow
                name='Background'

                size='small'

                {...formRowProps}
              >
                <Select
                  name='Texture'

                  value={itemOpen?.backgroundImage}

                  onChange={(valueNew: any) => onItemUpdate({ backgroundImage: valueNew })}

                  fullWidth

                  className={classes.select}
                >
                  {optionsBackgroundImage.map(item => (
                    <ListItem
                      key={item.value}

                      primary={item.name}

                      value={item.value}

                      button

                      size='small'
                    />
                  ))}
                </Select>

                <ColorTextField
                  name='Color'

                  value={itemOpen?.props?.style?.backgroundColor}

                  onChange={(valueNew: any) => onItemUpdate({ props: { style: { backgroundColor: valueNew } } })}

                  opacity
                />
              </FormRow>

              <FormRow
                name='Border'

                size='small'

                {...formRowProps}
              >
                <NumericTextField
                  name='Width'

                  value={getUnitValue(itemOpen?.props?.style?.borderWidth)}

                  onChange={(valueNew: any) => onItemUpdate({ props: { style: { borderWidth: toUnitValue(valueNew) } } })}

                  min={0}

                  max={1e4}

                  sufix={refs.unit.current}

                  size='small'
                />

                <Select
                  name='Style'

                  value={itemOpen?.props?.style?.borderStyle}

                  onChange={(valueNew: any) => onItemUpdate({ props: { style: { borderStyle: valueNew } } })}

                  options={['solid', 'dashed', 'dotted', 'double', 'groove', 'inset', 'outset', 'ridge', 'none'].map(item => ({
                    name: cleanValue(item, { capitalize: true }),
                    value: item
                  }))}

                  fullWidth
                />

                <ColorTextField
                  name='Color'

                  value={itemOpen?.props?.style?.borderColor}

                  onChange={(valueNew: any) => onItemUpdate({ props: { style: { borderColor: valueNew } } })}

                  opacity
                />
              </FormRow>
            </>}
          </FormRow>
        </FormRow>
      </Line>
    ),

    options: (
      <Line
        flex

        fullWidth

        className={classNames([
          classes.mainSidebar
        ])}
      >
        <FormRow
          name='Unit'

          description='Unit that equals some amount of pixels on the screen'

          {...formRowProps}
        >
          <Select
            name='Unit'

            value={unit}

            onChange={onUpdateUnit}

            fullWidth
          >
            <ListItem
              primary={(
                <Type
                  version='b2'
                >
                  Pixels
                </Type>
              )}

              secondary={(
                <Type
                  version='b3'
                >
                  1 pixel equals 1 pixel
                </Type>
              )}

              value='px'

              button
            />

            <ListItem
              primary={(
                <Type
                  version='b2'
                >
                  Meters
                </Type>
              )}

              secondary={(
                <Type
                  version='b3'
                >
                  1 meter equals 40 pixels
                </Type>
              )}

              value='m'

              button
            />
          </Select>
        </FormRow>

        <FormRow
          name='Guidelines'

          {...formRowProps}
        >
          <Select
            name='Guidelines'

            value={guidelines}

            onChange={onUpdateGuidelines}

            options={[
              { name: 'Dots', value: 'dots' },
              { name: 'Lines', value: 'lines' }
            ]}

            fullWidth
          />
        </FormRow>
      </Line>
    )
  };

  return (
    <Surface
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          ref.current = item;
        }

        refs.root.current = item;
      }}

      color='default'

      gap={0}

      align='unset'

      justify='unset'

      flex

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('Space', theme) && [
          'amaui-Space-root'
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}
    >
      <Line
        direction='row'

        justify='flex-start'

        className={classes.actionsStart}
      >
        <Tooltip
          name='Open navigation'
        >
          <IconButton
            version='filled'

            color='default'

            elevation={false}

            size={size}

            onClick={onOpenNavigation}
          >
            <IconMenu />
          </IconButton>
        </Tooltip>
      </Line>

      <HTMLCanvas
        size={size}

        onChange={onChangeHTMLCanvas}

        guidelines={guidelines}

        showGuidelinesDefault

        methods={refs.methods.current}

        ContainerProps={{
          ref: refs.container,
          onClick: onClickSpace
        }}
      >
        {items.map((item: any) => getElement(item))}
      </HTMLCanvas>

      <Line
        direction='row'

        justify='flex-end'

        className={classes.actionsEnd}
      >
        <Tooltip
          name='Add room'
        >
          <Fab
            tonal

            color='primary'

            size={size}

            onClick={onOpenMenu}
          >
            <IconAdd />
          </Fab>
        </Tooltip>
      </Line>

      <NavigationDrawer
        open={openNavigation}

        onClose={onCloseNavigation}

        position='absolute'

        direction='left'

        background={false}

        className={classes.navigationDrawerNavigation}
      >
        <Line
          gap={0}

          flex

          fullWidth

          className={classes.navigation}
        >
          <Line
            gap={1}

            direction='row'

            align='center'

            justify='space-between'

            className={classNames([
              classes.navigationHeader
            ])}

            fullWidth
          >
            <Line
              gap={0.5}

              direction='row'

              align='center'
            >
              {(itemOpen || openOptions) && (
                <Tooltip
                  name='Back'
                >
                  <IconButton
                    size={size}

                    onClick={itemOpen ? onItemClose : onCloseOpenOptions}
                  >
                    <IconArrowBack />
                  </IconButton>
                </Tooltip>
              )}

              {itemOpen ? (
                <SmartTextField
                  placeholder='Name'

                  value={textToInnerHTML(itemOpen.name)}

                  onChange={(valueNew: any) => onItemUpdate({ name: valueNew })}

                  additional={{
                    version: 't3'
                  }}

                  style={{
                    whiteSpace: 'normal'
                  }}
                />
              ) : (
                <Type
                  version='t3'
                >
                  {openOptions ? 'Options' : 'Navigation'}
                </Type>
              )}
            </Line>

            <Line
              gap={0.25}

              direction='row'

              align='center'
            >
              {!(itemOpen || openOptions) && Object.keys(itemsSelected).length > 1 && (
                <Tooltip
                  name='Group'
                >
                  <IconButton
                    size={size}

                    onClick={onItemsGroup}
                  >
                    <IconGroup />
                  </IconButton>
                </Tooltip>
              )}

              {!(itemOpen || openOptions) && (
                <Tooltip
                  name='Settings'
                >
                  <IconButton
                    size={size}

                    onClick={onOpenOpenOptions}
                  >
                    <IconSettings />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip
                name='Close'
              >
                <IconButton
                  size={size}

                  onClick={onCloseNavigation}
                >
                  <IconCloseNavigation />
                </IconButton>
              </Tooltip>
            </Line>
          </Line>

          <Line
            flex

            fullWidth
          >
            {itemOpen ? elements.itemOpen : openOptions ? elements.options : elements.list}
          </Line>
        </Line>
      </NavigationDrawer>

      <NavigationDrawer
        open={openMenu}

        onClose={onCloseMenu}

        position='absolute'

        direction='bottom'

        background={false}

        className={classes.navigationDrawerMenu}
      >
        <Line
          gap={0}

          fullWidth

          className={classes.menu}
        >
          <Line
            direction='row'

            align='center'

            justify='space-between'

            className={classes.menuHeader}

            fullWidth
          >
            <Type
              version='t3'
            >
              Menu
            </Type>

            <Tooltip
              name='Close'
            >
              <IconButton
                size={size}

                onClick={onCloseMenu}
              >
                <IconCloseMenu />
              </IconButton>
            </Tooltip>
          </Line>

          <Line
            fullWidth

            className={classes.menuMain}
          >
            <FormRow
              gap={3.5}

              start={(
                <TextField
                  placeholder='Search'

                  value={elementSearch}

                  onChange={onElementSearch}

                  clear
                />
              )}

              className={classes.elements}

              HeaderProps={{
                align: 'center',

                style: {
                  marginBottom: -4
                }
              }}

              MainProps={{
                direction: 'row',
                align: 'flex-start',
                className: classes.main
              }}

              fullWidth
            >
              {elementsMenu?.map((item: any, index: number) => (
                <Line
                  key={index}

                  gap={1.4}

                  align='center'

                  onClick={() => onAdd(item)}

                  className={classes.element}
                >
                  {getThumbnail(item)}

                  <Type
                    version='b3'

                    align='center'
                  >
                    {item.name}
                  </Type>
                </Line>
              ))}
            </FormRow>
          </Line>
        </Line>
      </NavigationDrawer>
    </Surface>
  );
});

Space.displayName = 'amaui-Space';

export default Space;
