import React from 'react';

import { elementToCanvas, is } from '@amaui/utils';
import { classNames, colors, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Select from '../Select';
import ListItem from '../ListItem';
import Surface from '../Surface';
import Tooltip from '../Tooltip';
import NumericTextField from '../NumericTextField';
import ClickListener from '../ClickListener';
import ToggleButtons from '../ToggleButtons';
import Divider from '../Divider';
import Type from '../Type';
import ToggleButton from '../ToggleButton';
import ColorTextField from '../ColorTextField';
import Button from '../Button';
import Append from '../Append';
import Fade from '../Fade';
import Line from '../Line';
import Icon from '../Icon';

import { staticClassName, TElement, TElementReference, TPropsAny, TRef } from '../utils';
import { ISurface } from '../Surface/Surface';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative'
  },

  methods: {
    position: 'absolute',
    right: '8px',
    bottom: '8px',
    padding: '4px 12px'
  },

  svg: {
    display: 'block',
    margin: '12px',
    cursor: 'none',
    touchAction: 'none',
    boxShadow: theme.shadows.values.default[1],
    background: theme.palette.color.neutral[100]
  },

  toolbars: {
    width: '100%'
  },

  toolbar: {
    width: '100%',
    overflowX: 'auto',
    padding: '8px'
  },

  modal: {
    padding: '12px',
    borderRadius: '8px',
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
  },

  divider: {
    '&.AmauiDivider-root': {
      margin: '0'
    }
  },

  divider_middle: {
    '&.AmauiDivider-root': {
      opacity: theme.palette.light ? '0.07' : '0.24'
    }
  },

  divider_end: {
    '&.AmauiDivider-root': {
      opacity: theme.palette.light ? '0.14' : '0.4'
    }
  },
}), { name: 'AmauiDrawing' });

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

const IconMaterialCropLandscapeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeRounded'
      short_name='CropLandscape'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z" />
    </Icon>
  );
});

const IconMaterialPaletteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaletteRounded'
      short_name='Palette'

      {...props}
    >
      <path d="M12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.812 8.1Q3.625 6.275 5.013 4.925Q6.4 3.575 8.25 2.787Q10.1 2 12.2 2Q14.2 2 15.975 2.688Q17.75 3.375 19.087 4.588Q20.425 5.8 21.212 7.463Q22 9.125 22 11.05Q22 13.925 20.25 15.462Q18.5 17 16 17H14.15Q13.925 17 13.838 17.125Q13.75 17.25 13.75 17.4Q13.75 17.7 14.125 18.262Q14.5 18.825 14.5 19.55Q14.5 20.8 13.812 21.4Q13.125 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM6.5 13Q7.15 13 7.575 12.575Q8 12.15 8 11.5Q8 10.85 7.575 10.425Q7.15 10 6.5 10Q5.85 10 5.425 10.425Q5 10.85 5 11.5Q5 12.15 5.425 12.575Q5.85 13 6.5 13ZM9.5 9Q10.15 9 10.575 8.575Q11 8.15 11 7.5Q11 6.85 10.575 6.425Q10.15 6 9.5 6Q8.85 6 8.425 6.425Q8 6.85 8 7.5Q8 8.15 8.425 8.575Q8.85 9 9.5 9ZM14.5 9Q15.15 9 15.575 8.575Q16 8.15 16 7.5Q16 6.85 15.575 6.425Q15.15 6 14.5 6Q13.85 6 13.425 6.425Q13 6.85 13 7.5Q13 8.15 13.425 8.575Q13.85 9 14.5 9ZM17.5 13Q18.15 13 18.575 12.575Q19 12.15 19 11.5Q19 10.85 18.575 10.425Q18.15 10 17.5 10Q16.85 10 16.425 10.425Q16 10.85 16 11.5Q16 12.15 16.425 12.575Q16.85 13 17.5 13ZM12 20Q12.225 20 12.363 19.875Q12.5 19.75 12.5 19.55Q12.5 19.2 12.125 18.725Q11.75 18.25 11.75 17.3Q11.75 16.25 12.475 15.625Q13.2 15 14.25 15H16Q17.65 15 18.825 14.037Q20 13.075 20 11.05Q20 8.025 17.688 6.012Q15.375 4 12.2 4Q8.8 4 6.4 6.325Q4 8.65 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
    </Icon>
  );
});

export type TDrawingValue = Array<{
  d?: string;
  stroke?: string;
  strokeWidth?: number;
}>;

export interface IDrawing extends ISurface {
  render?: (element: string, props: TPropsAny, value: TDrawingValue) => TElement;

  svgRef?: TRef;

  updates?: boolean;
  actions?: boolean;

  exclude?: Array<string>;

  downloadName?: string;
  downloadType?: string;
  downloadQuality?: number;

  viewBox?: string;

  strokeColor?: string;
  strokeWidth?: number;

  valueDefault?: TDrawingValue;
  value?: TDrawingValue;

  onChange?: (value: TDrawingValue) => any;

  onMouseDown?: (event: React.MouseEvent<any>) => any;

  onClear?: (event?: React.MouseEvent<any>) => any;
  onDownload?: (event?: React.MouseEvent<any>) => any;

  IconClear?: TElementReference;
  IconDownload?: TElementReference;
  IconSize?: TElementReference;
  IconStrokeColor?: TElementReference;

  IconProps?: TPropsAny;
  SizeProps?: TPropsAny;
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
  PaletteProps?: TPropsAny;
  IconButtonProps?: TPropsAny;
  ColorTextFieldProps?: TPropsAny;
}

const Drawing = React.forwardRef((props__: IDrawing, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiDrawing?.props?.default, ...props__ }), [props__]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'default',
    version = 'filled',

    render,

    updates = true,
    actions = true,

    exclude,

    downloadName = `amaui-drawing.png`,
    downloadType = 'image/png',
    downloadQuality = 1,

    viewBox = '0 0 340 140',

    strokeColor = '#000000',
    strokeWidth = 1,

    svgRef,

    valueDefault,
    value: value_,
    onChange,

    onMouseDown: onMouseDown_,

    onClear: onClear_,
    onDownload: onDownload_,

    IconClear = IconMaterialDeleteSweepRounded,
    IconDownload = IconMaterialDownloadRounded,
    IconSize = IconMaterialCropLandscapeRounded,
    IconStrokeColor = IconMaterialPaletteRounded,

    IconProps: IconProps_,
    SizeProps,
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
    PaletteProps,
    IconButtonProps,
    ColorTextFieldProps,

    Component = 'div',

    className,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || []);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [move, setMove] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const [inputValues, setInputValues] = React.useState<any>({
    viewBox: '0 0 340 140',
    width: 340,
    widthInput: 340,
    height: 140,
    heightInput: 140,
    strokeWidth: 1,
    strokeColor: '#000000'
  });
  const [open, setOpen] = React.useState<any>({});

  const refs = {
    root: React.useRef<any>(),
    inputValues: React.useRef<any>(),
    svg: React.useRef<any>(),
    value: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    props: React.useRef<any>(),
    move: React.useRef<any>(),
    download: React.useRef<any>(),
    open: React.useRef<any>(),
    elements: {
      size: React.useRef<any>(),
      strokeColor: React.useRef<any>()
    }
  };

  refs.value.current = value;

  refs.open.current = open;

  refs.props.current = props;

  refs.inputValues.current = inputValues;

  refs.download.current = {
    name: downloadName,
    type: downloadType,
    quality: downloadQuality
  };

  refs.mouseDown.current = mouseDown;

  refs.move.current = move;

  const updateValue = (valueNew: any) => {
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
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

  React.useEffect(() => {
    const onMouseUp = () => {
      if (refs.mouseDown.current) setMouseDown(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      const x: number = event.clientX;
      const y: number = event.clientY;

      const rect = refs.svg.current?.getBoundingClientRect();

      if (!rect) return;

      const { x: xRoot, y: yRoot } = rect;

      const valueMove = {
        x: x - xRoot,
        y: y - yRoot
      };

      update(valueMove);
    };

    const onTouchMove = (event: TouchEvent) => {
      const x: number = event.touches[0].clientX;
      const y: number = event.touches[0].clientY;

      const rect = refs.svg.current?.getBoundingClientRect();

      if (!rect) return;

      const { x: xRoot, y: yRoot } = rect;

      const valueMove = {
        x: x - xRoot,
        y: y - yRoot
      };

      update(valueMove);
    };

    const update = (valueNew: any) => {
      if (refs.mouseDown.current) {
        // Update
        // relative value from the previous one how much x and y moved
        const x = valueNew?.x;
        const y = valueNew?.y;

        const previous = refs.value.current?.[refs.value.current?.length - 1];

        if (previous) {
          if (!(x === 0 && y === 0)) {
            previous.d += ` ${x},${y}`;

            updateValue([...refs.value.current]);
          }
        }
      }

      setMove(valueNew);
    };

    window.document.addEventListener('mouseup', onMouseUp);
    window.document.addEventListener('mousemove', onMouseMove);
    window.document.addEventListener('touchend', onMouseUp, { passive: true });
    window.document.addEventListener('touchmove', onTouchMove);

    return () => {
      window.document.removeEventListener('mouseup', onMouseUp);
      window.document.removeEventListener('touchend', onMouseUp);
      window.document.removeEventListener('mousemove', onMouseMove);
      window.document.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  React.useEffect(() => {
    if (strokeColor !== undefined && strokeColor !== refs.inputValues.current.strokeColor) updateInputValues('strokeColor', strokeColor);

    if (strokeWidth !== undefined && strokeWidth !== refs.inputValues.current.strokeWidth) updateInputValues('strokeWidth', strokeWidth);
  }, [strokeColor, strokeWidth]);

  React.useEffect(() => {
    if (viewBox !== undefined && viewBox !== refs.inputValues.current.viewBox) {
      updateInputValues('viewBox', viewBox);

      updateInputValues('width', viewBox.split(' ')[2]);

      updateInputValues('height', viewBox.split(' ')[3]);
    }
  }, [viewBox]);

  const onMouseDown = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    setMouseDown(true);

    let x: number = (event as React.TouchEvent<any>).touches ? (event as React.TouchEvent<any>).touches[0].clientX : (event as React.MouseEvent<any>).clientX;
    let y: number = (event as React.TouchEvent<any>).touches ? (event as React.TouchEvent<any>).touches[0].clientY : (event as React.MouseEvent<any>).clientY;

    const rect = refs.svg.current.getBoundingClientRect();

    x -= rect.x;
    y -= rect.y;

    setMove({ x, y });

    // Create new value path
    updateValue([
      ...(refs.value.current || []),

      {
        d: `M ${x},${y} L ${x} ${y}`,
        stroke: refs.inputValues.current.strokeColor,
        strokeWidth: refs.inputValues.current.strokeWidth
      }
    ]);

    if (is('function', onMouseDown_)) onMouseDown_(event as any);
  }, []);

  const onClear = React.useCallback(() => {
    updateValue([]);

    if (is('function', onClear_)) onClear_();
  }, []);

  const onDownload = React.useCallback(async () => {
    const svg = refs.svg.current;

    const rect = svg.getBoundingClientRect();

    // Clean up
    const clone = svg.cloneNode(true);

    clone.style.margin = '0px';

    clone.style.boxShadow = 'none';

    if (refs.download.current.type?.includes('png')) {
      clone.style.background = 'transparent';
    }

    try {
      setLoading(true);

      await elementToCanvas(clone, {
        response: 'download',

        filter: ['.AmauiDrawing-pointer'],

        download: refs.download.current,

        width: rect.width,

        height: rect.height
      });
    }
    catch (error) { }

    setLoading(false);

    if (is('function', onDownload_)) onDownload_();
  }, []);

  const includes = (...args) => !is('array', exclude) || args.some(item => !exclude.includes(item));

  // updates toolbar
  const updateOptions = ['stroke-color', 'stroke-width', 'size'];

  const updates_ = updates && (!is('array', exclude) || includes(...updateOptions));

  // action toolbar
  const actions_ = actions && (!is('array', exclude) || includes('clear', 'download'));

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

      children,

      ...other_
    } = props_;

    return (
      <Tooltip
        open={open_ !== undefined ? open_ : undefined}

        label={label}

        {...TooltipProps}
      >
        {React.cloneElement(children, {
          ...other_,

          ...children.props
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

      children,

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
        {React.cloneElement(children, {
          ...other_,

          ...children.props
        })}
      </Append>
    );
  }, []);

  const PaletteItem = React.useCallback((props_: any) => {
    const {
      color: color_,

      ...other_
    } = props_;

    return (
      <span
        className={classNames([
          staticClassName('Drawing', theme) && [
            'AmauiDrawing-palette-item'
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

      onUpdate,
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
          staticClassName('Drawing', theme) && [
            'AmauiDrawing-palette'
          ],

          classes.palette
        ])}

        {...other_}
      >
        {/* Colors */}
        <Line
          gap={0.5}
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
                onUpdate('#000000');

                onClose();
              }}
            />

            <PaletteItem
              color='#ffffff'

              onClick={() => {
                onUpdate('#ffffff');

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
                    onUpdate(colors[item][item_]);

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
              staticClassName('Drawing', theme) && [
                'AmauiDrawing-text-field-color'
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
              onUpdate(refs.inputValues.current[version_]);

              onClose();
            }}
          >
            Apply
          </Button>
        </Line>
      </Line>
    );
  }), []);

  const valueNew_ = ((is('array', value) ? value : [value]) as any).filter(Boolean);

  const valueNewActive = mouseDown && valueNew_[valueNew_.length - 1];

  const circleStrokeWidth = +(valueNewActive ? valueNewActive.strokeWidth : refs.inputValues.current.strokeWidth);

  const stroke_width = [
    {
      label: (
        <Line
          direction='row'

          align='center'
        >
          <div
            style={{
              width: 14,
              height: 1,
              background: theme.palette.text.default.primary
            }}
          />

          <Type version='b2'>1</Type>
        </Line>
      ),
      value: 1
    },
    {
      label: (
        <Line
          direction='row'

          align='center'
        >
          <div
            style={{
              width: 14,
              height: 2,
              background: theme.palette.text.default.primary
            }}
          />

          <Type version='b2'>2</Type>
        </Line>
      ),
      value: 2
    },
    {
      label: (
        <Line
          direction='row'

          align='center'
        >
          <div
            style={{
              width: 14,
              height: 4,
              background: theme.palette.text.default.primary
            }}
          />

          <Type version='b2'>4</Type>
        </Line>
      ),
      value: 4
    },
    {
      label: (
        <Line
          direction='row'

          align='center'
        >
          <div
            style={{
              width: 14,
              height: 8,
              background: theme.palette.text.default.primary
            }}
          />

          <Type version='b2'>8</Type>
        </Line>
      ),
      value: 8
    }
  ];

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      version={version}

      Component={Component}

      className={classNames([
        staticClassName('Drawing', theme) && [
          'AmauiDrawing-root',
          updates && `AmauiDrawing-updates`,
          actions && `AmauiDrawing-actions`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {/* Methods */}
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
            staticClassName('Drawing', theme) && [
              'AmauiDrawing-toolbars'
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
                staticClassName('Drawing', theme) && [
                  'AmauiDrawing-toolbar'
                ],

                ToolbarUpdatesProps?.className,
                classes.toolbar,
                classes.toolbar_updates
              ])}
            >
              {includes('stroke-width') && (
                <Line
                  gap={1}

                  direction='row'

                  align='center'

                  justify='flex-start'
                >
                  {includes('stroke-width') && (
                    <Select
                      label='Stroke Width'

                      valueDefault={stroke_width.find(item => String(item.value).includes('1')).value}

                      value={inputValues['strokeWidth']}

                      onChange={(valueNew: string) => updateInputValues('strokeWidth', valueNew)}

                      {...SelectProps}

                      className={classNames([
                        staticClassName('Drawing', theme) && [
                          'AmauiDrawing-select'
                        ],

                        SelectProps?.className,
                        classes.select
                      ])}

                      style={{
                        minWidth: '90px'
                      }}
                    >
                      {stroke_width.map(item => (
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

              {includes('stroke-color') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('stroke-color') && (
                    <WrapperAppend
                      open={refs.open.current.strokeColor}

                      anchorElement={refs.elements.strokeColor.current}

                      element={(
                        <ClickListener
                          onClickOutside={() => updateOpen('strokeColor', false)}

                          include={[refs.elements.strokeColor, refs.elements.strokeColor.current]}
                        >
                          <Palette
                            onClose={() => updateOpen('strokeColor', false)}

                            onUpdate={(valueNew: any) => updateInputValues('strokeColor', valueNew)}

                            {...PaletteProps}
                          />
                        </ClickListener>
                      )}
                    >
                      <WrapperToggleButton
                        label='Stroke Color'

                        open={refs.open.current.strokeColor ? false : undefined}
                      >
                        {is('function', render) ? render('stroke-color', ToggleButtonProps, refs.value.current) : (
                          <ToggleButton
                            ref={refs.elements.strokeColor}

                            {...ToggleButtonProps}

                            selected={refs.open.current.strokeColor}

                            onClick={() => updateOpen('strokeColor', !refs.open.current.strokeColor)}
                          >
                            <IconStrokeColor {...IconProps} />
                          </ToggleButton>
                        )}
                      </WrapperToggleButton>
                    </WrapperAppend>
                  )}
                </ToggleButtons>
              )}

              {includes('size') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('size') && (
                    <WrapperAppend
                      open={refs.open.current.size}

                      anchorElement={refs.elements.size.current}

                      element={(
                        <ClickListener
                          onClickOutside={() => updateOpen('size', false)}

                          include={[refs.elements.size]}
                        >
                          <Line
                            gap={1}

                            tonal={tonal}

                            color={refs.props.current.color !== undefined ? refs.props.current.color : 'themed'}

                            Component={Surface}

                            className={classNames([
                              staticClassName('Drawing', theme) && [
                                'AmauiDrawing-modal'
                              ],

                              classes.modal
                            ])}

                            {...SizeProps}
                          >
                            <Line
                              gap={1}

                              direction='row'

                              align='center'

                              justify='center'
                            >
                              <NumericTextField
                                label='Width'

                                tonal={tonal}

                                color={color}

                                size='small'

                                version='outlined'

                                min={1}

                                increment={false}

                                decrement={false}

                                value={refs.inputValues.current.widthInput}

                                onChange={valueNew => updateInputValues('widthInput', !valueNew ? 1 : valueNew)}
                              />

                              ×

                              <NumericTextField
                                label='Height'

                                tonal={tonal}

                                color={color}

                                size='small'

                                version='outlined'

                                min={1}

                                increment={false}

                                decrement={false}

                                value={refs.inputValues.current.heightInput}

                                onChange={valueNew => updateInputValues('heightInput', !valueNew ? 1 : valueNew)}
                              />
                            </Line>

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
                                  const viewBox_ = refs.inputValues.current.viewBox?.split(' ');

                                  if (viewBox_) {
                                    viewBox_[2] = refs.inputValues.current.widthInput;

                                    viewBox_[3] = refs.inputValues.current.heightInput;
                                  }

                                  updateInputValues('viewBox', viewBox_.join(' '));

                                  updateInputValues('width', refs.inputValues.current.widthInput);

                                  updateInputValues('height', refs.inputValues.current.heightInput);

                                  updateOpen('size', false);
                                }}
                              >
                                Update
                              </Button>
                            </Line>
                          </Line>
                        </ClickListener>
                      )}
                    >
                      <WrapperToggleButton
                        label='Size'

                        open={refs.open.current.size ? false : undefined}
                      >
                        {is('function', render) ? render('size', ToggleButtonProps, refs.value.current) : (
                          <ToggleButton
                            ref={refs.elements.size}

                            {...ToggleButtonProps}

                            selected={refs.open.current.size}

                            onClick={() => updateOpen('size', !refs.open.current.size)}
                          >
                            <IconSize {...IconProps} />
                          </ToggleButton>
                        )}
                      </WrapperToggleButton>
                    </WrapperAppend>
                  )}
                </ToggleButtons>
              )}
            </Line>
          )}

          {(updates_ && actions_) && (
            <Divider
              {...DividerProps}

              className={classNames([
                staticClassName('Drawing', theme) && [
                  'AmauiDrawing-divider'
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
                staticClassName('Drawing', theme) && [
                  'AmauiDrawing-toolbar'
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
                  {includes('clear') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('clear') && (
                        <WrapperToggleButton
                          label='Clear'
                        >
                          {is('function', render) ? render('clear', ToggleButtonProps, refs.value.current) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              onClick={onClear}
                            >
                              <IconClear {...IconProps} />
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
                  {includes('download') && (
                    <ToggleButtons
                      {...ToggleButtonsProps}
                    >
                      {includes('download') && (
                        <WrapperToggleButton
                          label='Download'
                        >
                          {is('function', render) ? render('download', ToggleButtonProps, refs.value.current) : (
                            <ToggleButton
                              {...ToggleButtonProps}

                              loading={loading}

                              onClick={onDownload}
                            >
                              <IconDownload {...IconProps} />
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
              staticClassName('Drawing', theme) && [
                'AmauiDrawing-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes.divider_end
            ])}
          />
        </Line>
      )}

      <svg
        ref={item => {
          if (svgRef) svgRef.current = item;

          refs.svg.current = item;
        }}

        viewBox={refs.inputValues.current.viewBox}

        onMouseDown={onMouseDown}

        onTouchStart={onMouseDown}

        className={classNames([
          staticClassName('Drawing', theme) && [
            'AmauiDrawing-svg'
          ],

          classes.svg
        ])}

        style={{
          width: refs.inputValues.current.width,
          height: refs.inputValues.current.height
        }}
      >
        {valueNew_.map((item: any, index: number) => (
          <path
            key={index}

            fill='none'

            {...item}
          />
        ))}

        {/* Pointer  */}
        <circle
          className='AmauiDrawing-pointer'

          cx={move?.x}

          cy={move?.y}

          r={circleStrokeWidth + 1}

          fill={refs.inputValues.current.strokeColor}
        />
      </svg>
    </Surface>
  );
});

Drawing.displayName = 'AmauiDrawing';

export default Drawing;
