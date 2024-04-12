import React from 'react';

import { canvasCrop, download, is, isEnvironment, isOS, wait } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Tooltip from '../Tooltip';
import Surface from '../Surface';
import TextField from '../TextField';
import IconButton from '../IconButton';
import ImageCrop from '../ImageCrop';
import Portal from '../Portal';
import Line from '../Line';
import Icon from '../Icon';
import useMediaQuery from '../useMediaQuery';
import { IconDoneAnimated } from '../Buttons/Buttons';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    padding: `${theme.methods.space.value(2.5, 'px')} ${theme.methods.space.value(5, 'px')} ${theme.methods.space.value(3, 'px')}`,
    borderRadius: theme.methods.shape.radius.value('rg', 'px')
  },

  wrapper: {
    inset: '0',
    position: 'fixed',
    background: '#000',
    zIndex: theme.z_index.tooltip + 4
  }
}), { name: 'amaui-ScreenCapture' });

const IconMaterialFitScreenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenRounded'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6Q20 6 20 6Q20 6 20 6H17V4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V9ZM2 9V6Q2 5.175 2.588 4.588Q3.175 4 4 4H7V6H4Q4 6 4 6Q4 6 4 6V9ZM17 20V18H20Q20 18 20 18Q20 18 20 18V15H22V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V15H4V18Q4 18 4 18Q4 18 4 18H7V20ZM16 16H8Q7.175 16 6.588 15.412Q6 14.825 6 14V10Q6 9.175 6.588 8.587Q7.175 8 8 8H16Q16.825 8 17.413 8.587Q18 9.175 18 10V14Q18 14.825 17.413 15.412Q16.825 16 16 16ZM8 14H16Q16 14 16 14Q16 14 16 14V10Q16 10 16 10Q16 10 16 10H8Q8 10 8 10Q8 10 8 10V14Q8 14 8 14Q8 14 8 14ZM8 14Q8 14 8 14Q8 14 8 14V10Q8 10 8 10Q8 10 8 10Q8 10 8 10Q8 10 8 10V14Q8 14 8 14Q8 14 8 14Z" />
    </Icon>
  );
});

const IconMaterialDocumentScannerRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerRounded'
      short_name='DocumentScanner'

      {...props}
    >
      <path d="M3 6Q2.575 6 2.288 5.713Q2 5.425 2 5V2Q2 1.575 2.288 1.287Q2.575 1 3 1H6Q6.425 1 6.713 1.287Q7 1.575 7 2Q7 2.425 6.713 2.712Q6.425 3 6 3H4V5Q4 5.425 3.713 5.713Q3.425 6 3 6ZM21 6Q20.575 6 20.288 5.713Q20 5.425 20 5V3H18Q17.575 3 17.288 2.712Q17 2.425 17 2Q17 1.575 17.288 1.287Q17.575 1 18 1H21Q21.425 1 21.712 1.287Q22 1.575 22 2V5Q22 5.425 21.712 5.713Q21.425 6 21 6ZM3 23Q2.575 23 2.288 22.712Q2 22.425 2 22V19Q2 18.575 2.288 18.288Q2.575 18 3 18Q3.425 18 3.713 18.288Q4 18.575 4 19V21H6Q6.425 21 6.713 21.288Q7 21.575 7 22Q7 22.425 6.713 22.712Q6.425 23 6 23ZM18 23Q17.575 23 17.288 22.712Q17 22.425 17 22Q17 21.575 17.288 21.288Q17.575 21 18 21H20V19Q20 18.575 20.288 18.288Q20.575 18 21 18Q21.425 18 21.712 18.288Q22 18.575 22 19V22Q22 22.425 21.712 22.712Q21.425 23 21 23ZM7 18Q7 18 7 18Q7 18 7 18H17Q17 18 17 18Q17 18 17 18V6Q17 6 17 6Q17 6 17 6H7Q7 6 7 6Q7 6 7 6ZM7 20Q6.175 20 5.588 19.413Q5 18.825 5 18V6Q5 5.175 5.588 4.588Q6.175 4 7 4H17Q17.825 4 18.413 4.588Q19 5.175 19 6V18Q19 18.825 18.413 19.413Q17.825 20 17 20ZM10 10H14Q14.425 10 14.713 9.712Q15 9.425 15 9Q15 8.575 14.713 8.287Q14.425 8 14 8H10Q9.575 8 9.288 8.287Q9 8.575 9 9Q9 9.425 9.288 9.712Q9.575 10 10 10ZM10 13H14Q14.425 13 14.713 12.712Q15 12.425 15 12Q15 11.575 14.713 11.287Q14.425 11 14 11H10Q9.575 11 9.288 11.287Q9 11.575 9 12Q9 12.425 9.288 12.712Q9.575 13 10 13ZM10 16H14Q14.425 16 14.713 15.712Q15 15.425 15 15Q15 14.575 14.713 14.287Q14.425 14 14 14H10Q9.575 14 9.288 14.287Q9 14.575 9 15Q9 15.425 9.288 15.712Q9.575 16 10 16ZM7 18V6Q7 6 7 6Q7 6 7 6Q7 6 7 6Q7 6 7 6V18Q7 18 7 18Q7 18 7 18Q7 18 7 18Q7 18 7 18Z" />
    </Icon>
  );
});

const IconMaterialCropFreeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeRounded'
      short_name='CropFree'

      {...props}
    >
      <path d="M4 9Q3.575 9 3.288 8.712Q3 8.425 3 8V5Q3 4.175 3.587 3.587Q4.175 3 5 3H8Q8.425 3 8.713 3.287Q9 3.575 9 4Q9 4.425 8.713 4.712Q8.425 5 8 5H5Q5 5 5 5Q5 5 5 5V8Q5 8.425 4.713 8.712Q4.425 9 4 9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V16Q3 15.575 3.288 15.287Q3.575 15 4 15Q4.425 15 4.713 15.287Q5 15.575 5 16V19Q5 19 5 19Q5 19 5 19H8Q8.425 19 8.713 19.288Q9 19.575 9 20Q9 20.425 8.713 20.712Q8.425 21 8 21ZM16 21Q15.575 21 15.288 20.712Q15 20.425 15 20Q15 19.575 15.288 19.288Q15.575 19 16 19H19Q19 19 19 19Q19 19 19 19V16Q19 15.575 19.288 15.287Q19.575 15 20 15Q20.425 15 20.712 15.287Q21 15.575 21 16V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM20 9Q19.575 9 19.288 8.712Q19 8.425 19 8V5Q19 5 19 5Q19 5 19 5H16Q15.575 5 15.288 4.712Q15 4.425 15 4Q15 3.575 15.288 3.287Q15.575 3 16 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V8Q21 8.425 20.712 8.712Q20.425 9 20 9Z" />
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

export type TTrackValueVersion = 'image' | 'canvas';

export interface IScreenCapture extends ISurface {
  nameDefault?: string;
  name?: string;

  onChangeName?: (value: string) => any;

  view?: boolean;
  entirePage?: boolean;
  free?: boolean;

  type?: string;
  quality?: number;

  onInit?: (supported: boolean) => any;
  onView?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
  onEntirePage?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
  onFree?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
  onFreeSave?: (event: React.MouseEvent<any> | KeyboardEvent) => any;
  onFreeClose?: (event: React.MouseEvent<any> | KeyboardEvent) => any;

  IconView?: IElementReference;
  IconEntirePage?: IElementReference;
  IconFree?: IElementReference;
  IconDownload?: IElementReference;

  TextFieldProps?: IPropsAny;
  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  ImageCropProps?: IPropsAny;
}

const ScreenCapture: React.FC<IScreenCapture> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiScreenCapture?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    tonal = true,
    color = 'primary',

    nameDefault,
    name: name_ = `amaui-screenshot.${props.type !== undefined ? props.type.split('/')[1] : 'png'}`,

    onChangeName,

    view = true,
    entirePage = true,
    free = true,

    type = `image/png`,
    quality = 1,

    onInit: onInit_,
    onView: onView_,
    onEntirePage: onEntirePage_,
    onFree: onFree_,
    onFreeSave: onFreeSave_,
    onFreeClose: onFreeClose_,

    IconView = IconMaterialFitScreenRounded,
    IconEntirePage = IconMaterialDocumentScannerRounded,
    IconFree = IconMaterialCropFreeRounded,
    IconDownload = IconMaterialDownloadRounded,

    TextFieldProps,
    TooltipProps,
    IconButtonProps,
    ImageCropProps = {
      type: `image/png`,
      quality: 1
    },

    Component = 'div',

    className,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [name, setName] = React.useState(nameDefault !== undefined ? nameDefault : name_);
  const [loading, setLoading] = React.useState([]);
  const [done, setDone] = React.useState([]);
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement>();
  const [canvasSelectorValue, setCanvasSelectorValue] = React.useState<any>();
  const [supported, setSupported] = React.useState(true);

  const refs = {
    root: React.useRef<any>(),
    canvas: React.useRef<any>(),
    canvasSelectorValue: React.useRef<any>(),
    element: React.useRef<HTMLVideoElement>()
  };

  const touch = useMediaQuery('(pointer: coarse)', { element: refs.root.current });

  refs.canvas.current = canvas;

  refs.canvasSelectorValue.current = canvasSelectorValue;

  const onInit = React.useCallback(() => {
    const value = !(touch || isOS('mobile'));

    setInit(true);

    setSupported(value);

    if (is('function', onInit_)) onInit_(value);
  }, [touch, onInit_]);

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const method = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'V':
        case 'v':
          if (event.metaKey && event.shiftKey) onView(event as any);

          break;

        // case 'E':
        // case 'e':
        //   if (event.metaKey && event.shiftKey) onEntirePage(event as any);

        //   break;

        case 'F':
        case 'f':
          if (event.metaKey && event.shiftKey) onFree(event as any);

          break;

        case 'S':
        case 's':
          if (event.metaKey) {
            if (refs.canvas.current) onFreeSave(event as any);
          }

          break;

        case 'Enter':
          if (refs.canvas.current) onFreeSave(event as any);

          break;

        case 'Escape':
          if (refs.canvas.current) onFreeClose(event as any);

          break;

        default:
          break;
      }
    };

    rootDocument.addEventListener('keydown', method);

    onInit();

    return () => {
      // Clean up
      rootDocument.removeEventListener('keydown', method);

      if (refs.canvas.current) {
        setCanvas('' as any);

        if (rootDocument.body.style.overflow === 'hidden') rootDocument.body.style.removeProperty('overflow');
      }
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (name_ !== name) setName(name_);
    }
  }, [name_]);

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    if (canvas) {
      rootDocument.body.style.overflow = 'hidden';
    }
    else {
      setCanvasSelectorValue(false);

      if (rootDocument.body.style.overflow === 'hidden') rootDocument.body.style.removeProperty('overflow');
    }
  }, [canvas]);

  const onChange = (value_: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setName(value_);

    if (is('function', onChangeName)) onChangeName(value_);
  };

  const trackToValue = React.useCallback(async (track: MediaStreamTrack, version: TTrackValueVersion = 'canvas') => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const canvasElement = document.createElement('canvas');

    const { width, height } = track.getSettings();

    canvasElement.width = width || window.innerWidth;
    canvasElement.height = height || window.innerHeight;

    // Hide elements
    const elements = Array.from(rootDocument.body.querySelectorAll('.amaui-ScreenCapture-root')).map((element: HTMLElement) => {
      if (element.parentElement.classList.contains('amaui-Move-root')) return element.parentElement;

      return element;
    });

    elements.forEach((item: HTMLElement) => item.style.visibility = 'hidden');

    // Wait for media options window to hide
    await wait(414);

    // Draw the frame
    canvasElement.getContext('2d').drawImage(refs.element.current, 0, 0);

    // Unhide the elements
    elements.forEach((item: HTMLElement) => item.style.removeProperty('visibility'));

    if (version === 'canvas') return canvasElement;

    const image = canvasElement.toDataURL(type, quality);

    return image;
  }, [type, quality]);

  const make = React.useCallback(async (version: TTrackValueVersion = 'image', options: any = {}) => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    refs.element.current = rootDocument.createElement('video');

    let tracks: MediaStreamTrack[];

    const cleanUp = () => {
      // Stop tracks
      (tracks || []).forEach(item => item.stop());

      // Unload the element
      refs.element.current = undefined;
    };

    try {
      refs.element.current.srcObject = await window.navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true, ...options });

      const mediaStream = refs.element.current.srcObject;

      if (!mediaStream) throw new Error('No media stream');

      // Required to work
      await refs.element.current.play();

      tracks = mediaStream.getVideoTracks();

      const track = tracks[0];

      const value = await trackToValue(track, version);

      // Clean up
      cleanUp();

      return value;
    }
    catch (error) {
      console.log('ScreenCapture make', error);

      // Clean up
      cleanUp();
    }
  }, []);

  const onView = React.useCallback(async (event: React.MouseEvent<any>) => {
    setLoading(items => [...items, 'view']);

    try {
      const image = await make();

      download(name, image);
    }
    catch (error) {
      console.log('onView', error);
    }

    setLoading(items => items.filter(item => item !== 'view'));

    setDone(items => [...items, 'view']);

    setTimeout(() => {
      setDone(items => items.filter(item => item !== 'view'));
    }, 1400);

    if (is('function', onView_)) onView_(event);
  }, [name, make]);

  // const onEntirePage = async (event: React.MouseEvent<any>) => {
  //   setLoading(items => [...items, 'entirePage']);

  //   try {
  //     const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

  //     await elementToCanvas(rootDocument.body, {
  //       response: 'download',

  //       filter: ['.amaui-Widgets-root', '#amaui-screen-capture'],

  //       download: {
  //         name,
  //         type,
  //         quality
  //       }
  //     });
  //   }
  //   catch (error) {
  //     console.log('onEntirePage', error);
  //   }

  //   setLoading(items => items.filter(item => item !== 'entirePage'));

  //   setDone(items => [...items, 'entirePage']);

  //   setTimeout(() => {
  //     setDone(items => items.filter(item => item !== 'entirePage'));
  //   }, 1400);

  //   if (is('function', onEntirePage_)) onEntirePage_(event);
  // };

  const onFree = async (event: React.MouseEvent<any>) => {
    setLoading(items => [...items, 'free']);

    // Update canvas
    try {
      const valueCanvas = await make('canvas') as HTMLCanvasElement;

      setCanvas(valueCanvas);
    }
    catch (error) {
      console.log('onFree', error);
    }

    setLoading(items => items.filter(item => item !== 'free'));

    if (is('function', onFree_)) onFree_(event);
  };

  const onFreeSave = (event: React.MouseEvent<any>) => {
    // Crop the canvas
    const valueCanvas = canvasCrop(refs.canvas.current, refs.canvasSelectorValue.current.left, refs.canvasSelectorValue.current.top, refs.canvasSelectorValue.current.width, refs.canvasSelectorValue.current.height);

    // Download the image from canvas datauri
    // of the image type and quality, name
    const uri = valueCanvas.toDataURL(type, quality);

    download(name, uri, type);

    // Clear the image
    setCanvas('' as any);

    setDone(items => [...items, 'free']);

    setTimeout(() => {
      setDone(items => items.filter(item => item !== 'free'));
    }, 1400);

    if (is('function', onFreeSave_)) onFreeSave_(event);
  };

  const onFreeClose = (event: React.MouseEvent<any>) => {
    // Clear the image
    setCanvas('' as any);

    if (is('function', onFreeClose_)) onFreeClose_(event);
  };

  const onImageCropSelectorChange = React.useCallback((values: any) => {
    setCanvasSelectorValue(values);
  }, []);

  const iconButtonProps: any = {
    tonal,
    color: 'inherit',
    elevation: false
  };

  const textFieldProps: any = {
    tonal,
    color: 'inherit',
    version: 'text',
    size: 'small',
    fullWidth: true
  };

  const tooltipProps: any = {
    position: 'top',
    portal: false,
    interactive: false
  };

  if (!supported) return null;

  const rootDocumentElement = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      id='amaui-screen-capture'

      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      Component={Line}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('ScreenCapture', theme) && [
          'amaui-ScreenCapture-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={1}

        direction='row'

        align='center'

        justify='center'
      >
        {view && (
          <Tooltip
            label='View'

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={onView}

              loading={loading.includes('view')}

              disabled={done.includes('view')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('view') ? <IconDoneAnimated add in /> : <IconView />}
            </IconButton>
          </Tooltip>
        )}

        {/* {entirePage && (
          <Tooltip
            label='Entire page'

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={onEntirePage}

              loading={loading.includes('entirePage')}

              disabled={done.includes('entirePage')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('entirePage') ? <IconDoneAnimated add in /> : <IconEntirePage />}
            </IconButton>
          </Tooltip>
        )} */}

        {free && (
          <Tooltip
            label={canvas ? 'Save' : 'Free form'}

            {...tooltipProps}

            {...TooltipProps}
          >
            <IconButton
              onClick={(event: React.MouseEvent<any>) => canvas ? onFreeSave(event) : onFree(event)}

              loading={loading.includes('free')}

              disabled={done.includes('free')}

              {...iconButtonProps}

              {...IconButtonProps}
            >
              {done.includes('free') ? <IconDoneAnimated add in /> : canvas ? <IconDownload /> : <IconFree />}
            </IconButton>
          </Tooltip>
        )}
      </Line>

      <TextField
        label='Name'

        value={name}

        onChange={onChange}

        {...textFieldProps}

        {...TextFieldProps}
      />

      {canvas && (
        <Portal
          element={rootDocumentElement.body}
        >
          <div
            className={classNames([
              staticClassName('ScreenCapture', theme) && [
                'amaui-ScreenCapture-image-wrapper'
              ],

              classes.wrapper
            ])}
          >
            <ImageCrop
              image={canvas}

              onSelectorChange={onImageCropSelectorChange}

              TooltipProps={{
                portal: false
              }}

              {...ImageCropProps}
            />
          </div>
        </Portal>
      )}
    </Surface>
  );
});

ScreenCapture.displayName = 'amaui-ScreenCapture';

export default ScreenCapture;
