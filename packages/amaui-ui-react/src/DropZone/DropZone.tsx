import React from 'react';

import { is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import FileChooseElement from '../FileChoose';
import SurfaceElement from '../Surface';
import TypeElement from '../Type';
import LineElement from '../Line';
import IconElement from '../Icon';
import InteractionElement from '../Interaction';
import { IFileChoose } from '../FileChoose/FileChoose';
import { staticClassName } from '../utils';
import { IElement, IVersion } from '../types';

const IconMaterialCloudUploadRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='CloudUploadRounded'
      short_name='CloudUpload'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.875 6.85 7.75 5.425Q9.625 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20H13Q12.175 20 11.588 19.413Q11 18.825 11 18V12.8L10.1 13.7Q9.825 13.975 9.4 13.975Q8.975 13.975 8.7 13.7Q8.425 13.425 8.425 13Q8.425 12.575 8.7 12.3L11.3 9.7Q11.45 9.55 11.625 9.487Q11.8 9.425 12 9.425Q12.2 9.425 12.375 9.487Q12.55 9.55 12.7 9.7L15.3 12.3Q15.575 12.575 15.575 13Q15.575 13.425 15.3 13.7Q15.025 13.975 14.6 13.975Q14.175 13.975 13.9 13.7L13 12.8V18Q13 18 13 18Q13 18 13 18H18.5Q19.55 18 20.275 17.275Q21 16.55 21 15.5Q21 14.45 20.275 13.725Q19.55 13 18.5 13H17V11Q17 8.925 15.538 7.462Q14.075 6 12 6Q9.925 6 8.463 7.462Q7 8.925 7 11H6.5Q5.05 11 4.025 12.025Q3 13.05 3 14.5Q3 15.95 4.025 16.975Q5.05 18 6.5 18H8Q8.425 18 8.713 18.288Q9 18.575 9 19Q9 19.425 8.713 19.712Q8.425 20 8 20ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  },

  wrapperText: {
    width: '100%',
    height: '100%',
    userSelect: 'none',
    pointerEvents: 'none'
  },

  wrapper: {
    width: '100%'
  },

  label: {
    position: 'relative',

    '&.amaui-Surface-root': {
      width: '100%',
      height: '174px',
      outlineStyle: 'dashed',
      outlineWidth: '3px',
      borderRadius: theme.methods.shape.radius.value('lg', 'px'),
      cursor: 'pointer'
    }
  },

  disabled: {
    opacity: '0.4',
    cursor: 'default',
    pointerEvents: 'none'
  }
}), { name: 'amaui-DropZone' });

export interface IDropZone extends IFileChoose {
  version?: IVersion;

  start?: IElement;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;

  onDrop?: (event: React.DragEvent<any>) => any;
  onDragOver?: (event: React.DragEvent<any>) => any;
  onDragEnter?: (event: React.DragEvent<any>) => any;
  onDragLeave?: (event: React.DragEvent<any>) => any;
}

const DropZone: React.FC<IDropZone> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiDropZone?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const FileChoose = React.useMemo(() => theme?.elements?.FileChoose || FileChooseElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Interaction = React.useMemo(() => theme?.elements?.Interaction || InteractionElement, [theme]);

  const {
    tonal = true,
    color = 'default',
    version,

    start,

    files,

    multiple,

    max,
    allowedTypes,

    valueDefault,
    value: value_,

    onChange: onChange_,

    IconStart = IconMaterialCloudUploadRounded,

    onFocus: onFocus_,
    onBlur: onBlur_,

    onDrop: onDrop_,
    onDragOver: onDragOver_,
    onDragEnter: onDragEnter_,
    onDragLeave: onDragLeave_,

    disabled,

    children,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [dragOver, setDragOver] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>(),
    label: React.useRef<any>(),
    input: React.useRef<HTMLInputElement>(),
    focus: React.useRef<any>(),
    allowedTypes: React.useRef<any>(),
    max: React.useRef<any>()
  };

  refs.value.current = value;

  refs.focus.current = focus;

  refs.max.current = max;

  refs.allowedTypes.current = allowedTypes;

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          if (refs.focus.current) refs.input.current.click();

          break;

        default:
          break;
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', method);

    setInit(true);

    return () => {
      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== refs.value.current) setValue(value_);
    }
  }, [value_]);

  const onChange = React.useCallback((valueNew_: any[]) => {
    let valueNew = valueNew_;

    // Allowed types
    if (is('array', refs.allowedTypes.current)) valueNew = valueNew.map((item: File) => refs.allowedTypes.current.includes(item.name));

    // Max
    if (refs.max.current) valueNew = valueNew.slice(0, refs.max.current);

    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, [onFocus_]);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, [onBlur_]);

  const onDrop = React.useCallback((event: React.DragEvent<any>) => {
    event.preventDefault();

    setDragOver(false);

    const valueNew = Array.from(event.dataTransfer.files);

    onChange(valueNew);

    if (is('function', onDrop_)) onDrop_(event);
  }, []);

  const onDragEnter = React.useCallback((event: React.DragEvent<any>) => {
    event.preventDefault();

    setDragOver(true);

    if (is('function', onDragEnter_)) onDragEnter_(event);
  }, []);

  const onDragLeave = React.useCallback((event: React.DragEvent<any>) => {
    event.preventDefault();

    setDragOver(false);

    if (is('function', onDragLeave_)) onDragLeave_(event);
  }, []);

  const onDragOver = React.useCallback((event: React.DragEvent<any>) => {
    event.preventDefault();

    if (is('function', onDragOver_)) onDragOver_(event);
  }, []);

  other.onDrop = onDrop;

  other.onDragEnter = onDragEnter;

  other.onDragLeave = onDragLeave;

  other.onDragOver = onDragOver;

  const custom = !!children;

  let WrapperProps: any = {};

  let ComponentProps: any = {};

  if (files) {
    WrapperProps = {
      ...WrapperProps,

      ...other
    };
  }
  else {
    ComponentProps = {
      ...ComponentProps,

      ...other
    };
  }

  return (
    <FileChoose
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      inputRef={refs.input}

      valueDefault={valueDefault}

      value={value}

      tonal={tonal}

      color={color}

      version='text'

      files={files}

      multiple={multiple}

      max={max}

      allowedTypes={allowedTypes}

      start={undefined}

      onChange={onChange}

      Component={Surface}

      className={classNames([
        staticClassName('DropZone', theme) && [
          'amaui-DropZone-root'
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      ComponentProps={{
        tabIndex: 0,

        onFocus,

        onBlur,

        ...ComponentProps,

        className: classNames([
          staticClassName('DropZone', theme) && [
            'amaui-DropZone-label'
          ],

          ComponentProps?.className,
          !custom && classes.label
        ])
      }}

      WrapperProps={{
        ...WrapperProps,

        className: classNames([
          staticClassName('DropZone', theme) && [
            'amaui-DropZone-wrapper'
          ],

          WrapperProps?.className,
          classes.wrapper
        ])
      }}
    >
      <Interaction
        pulse={focus || dragOver}
      />

      {children}

      {!custom && (
        <Line
          direction='row'

          align='center'

          justify='center'

          className={classNames([
            staticClassName('DropZone', theme) && [
              'amaui-DropZone-wrapper-text'
            ],

            classes.wrapperText
          ])}
        >
          <IconStart />

          <Type
            version='t1'
          >
            Drop files here
          </Type>
        </Line>
      )}
    </FileChoose>
  );
});

DropZone.displayName = 'amaui-DropZone';

export default DropZone;
