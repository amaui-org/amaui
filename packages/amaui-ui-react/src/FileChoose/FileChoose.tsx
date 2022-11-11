import React from 'react';

import { is, to } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Button from '../Button';
import IconButton from '../IconButton';
import Tree from '../Tree';
import Line from '../Line';
import Icon from '../Icon';

import { IBaseElement, staticClassName, TColor, TElementReference, TPropsAny, TRef, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative'
  },

  input: {
    position: 'absolute',
    width: '0px',
    height: '0px',
    visibility: 'hidden'
  },

  files: {
    width: '340px',
    maxWidth: '100%'
  },

  file: {
    maxWidth: '174px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}), { name: 'AmauiFileChoose' });

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

const IconMaterialDraftRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftRounded'
      short_name='Draft'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V9H14Q13.575 9 13.288 8.712Q13 8.425 13 8V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20ZM6 20Q6 20 6 20Q6 20 6 20V9V4Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20Z" />
    </Icon>
  );
});

const IconMaterialCloudUploadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudUploadRounded'
      short_name='CloudUpload'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.875 6.85 7.75 5.425Q9.625 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20H13Q12.175 20 11.588 19.413Q11 18.825 11 18V12.8L10.1 13.7Q9.825 13.975 9.4 13.975Q8.975 13.975 8.7 13.7Q8.425 13.425 8.425 13Q8.425 12.575 8.7 12.3L11.3 9.7Q11.45 9.55 11.625 9.487Q11.8 9.425 12 9.425Q12.2 9.425 12.375 9.487Q12.55 9.55 12.7 9.7L15.3 12.3Q15.575 12.575 15.575 13Q15.575 13.425 15.3 13.7Q15.025 13.975 14.6 13.975Q14.175 13.975 13.9 13.7L13 12.8V18Q13 18 13 18Q13 18 13 18H18.5Q19.55 18 20.275 17.275Q21 16.55 21 15.5Q21 14.45 20.275 13.725Q19.55 13 18.5 13H17V11Q17 8.925 15.538 7.462Q14.075 6 12 6Q9.925 6 8.463 7.462Q7 8.925 7 11H6.5Q5.05 11 4.025 12.025Q3 13.05 3 14.5Q3 15.95 4.025 16.975Q5.05 18 6.5 18H8Q8.425 18 8.713 18.288Q9 18.575 9 19Q9 19.425 8.713 19.712Q8.425 20 8 20ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z" />
    </Icon>
  );
});

const IconMaterialFolderRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderRounded'
      short_name='Folder'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6Q9.175 6 9.175 6Q9.175 6 9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z" />
    </Icon>
  );
});

const IconMaterialFolderOpenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenRounded'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18L5.975 11.425Q6.175 10.775 6.713 10.387Q7.25 10 7.9 10H20.8Q21.825 10 22.413 10.812Q23 11.625 22.725 12.575L20.925 18.575Q20.725 19.225 20.188 19.613Q19.65 20 19 20ZM6.1 18H19L20.8 12H7.9ZM6.1 18 7.9 12 6.1 18ZM4 10V6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8.587Q4 9.175 4 10Z" />
    </Icon>
  );
});

export type TFileChooseValue = File | Array<File>;

export interface IFileChoose extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;

  inputRef?: TRef;

  max?: number;
  allowedTypes?: Array<string>;

  files?: Array<File>;

  valueDefault?: TFileChooseValue;
  value?: TFileChooseValue;

  multiple?: boolean;
  accept?: string;
  capture?: boolean | 'user' | 'environment';

  remove?: boolean;

  renderFiles?: (value: TFileChooseValue, onRemove: (index: number) => any) => any;

  onClick?: (event: React.MouseEvent<any>) => any;

  onChange?: (value: TFileChooseValue) => any;

  IconStart?: TElementReference;

  inputProps?: TPropsAny;
  WrapperProps?: TPropsAny;
  ComponentProps?: TPropsAny;
}

const FileChoose = React.forwardRef((props_: IFileChoose, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiFileChoose?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'default',

    inputRef,

    max,
    allowedTypes,

    files,

    valueDefault,
    value: value_,

    multiple,
    accept,
    capture,

    remove = true,

    renderFiles,

    onClick,
    onChange: onChange_,

    IconStart = IconMaterialCloudUploadRounded,

    inputProps,
    WrapperProps: WrapperProps_,
    ComponentProps: ComponentProps_,

    Component = Button,

    className,
    style,

    children = 'Choose file',

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    value: React.useRef<any>(),
    input: React.useRef<HTMLInputElement>(),
    allowedTypes: React.useRef<any>(),
    max: React.useRef<any>()
  };

  refs.value.current = value;

  refs.max.current = max;

  refs.allowedTypes.current = allowedTypes;

  React.useEffect(() => {
    setInit(true);
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

  const onChangeMethod = React.useCallback((event: React.ChangeEvent<any>) => {
    const valueNew = Array.from(refs.input.current.files);

    onChange(valueNew);
  }, []);

  const onRemove = (index: number) => {
    const valueNew = [...(value as any)];

    valueNew.splice(index, 1);

    onChange(valueNew);
  };

  const onReset = (event: React.MouseEvent<any>) => {
    if (refs.input.current) refs.input.current.value = '';

    if (is('function', onClick)) onClick(event);
  };

  const Wrapper = files ? Line : React.Fragment;

  const WrapperProps = files ? {
    ref,

    direction: 'column',

    ...WrapperProps_,

    className: classNames([
      staticClassName('FileChoose', theme) && [
        'AmauiFileChoose-root',
        multiple && `AmauiFileChoose-multiple`,
        remove && `AmauiFileChoose-remove`
      ],

      WrapperProps_?.className,
      className,
      classes.root
    ]),

    ...other
  } : undefined;

  let ComponentProps = {
    ...ComponentProps_,
  };

  if (!files) {
    ComponentProps = {
      ...ComponentProps,

      ref,

      className: classNames([
        staticClassName('FileChoose', theme) && [
          'AmauiFileChoose-root',
          multiple && `AmauiFileChoose-multiple`,
          remove && `AmauiFileChoose-remove`
        ],

        ComponentProps_?.className,
        className,
        classes.root
      ]),

      ...other
    };
  }

  return (
    <Wrapper
      {...WrapperProps}
    >
      <Component
        Component='label'

        tonal={tonal}

        color={color}

        version='outlined'

        start={(
          <IconStart />
        )}

        onClick={onReset}

        {...ComponentProps}
      >
        <input
          ref={item => {
            if (inputRef) inputRef.current = item;

            refs.input.current = item;
          }}

          type='file'

          accept={accept}

          multiple={multiple}

          capture={capture}

          onChange={onChangeMethod}

          {...inputProps}

          className={classNames([
            staticClassName('FileChoose', theme) && [
              'AmauiFileChoose-input'
            ],

            inputProps?.className,
            classes.input
          ])}
        />

        {children}
      </Component>

      {files && !!(value as any)?.length && (
        is('function', renderFiles) ? renderFiles(value, onRemove) : (
          <Tree
            openDefault

            icon={<IconMaterialFolderRounded size='small' />}
            iconOpen={<IconMaterialFolderOpenRounded size='small' />}

            middle='Files'

            indicator

            indicatorPosition='end'

            className={classNames([
              staticClassName('FileChoose', theme) && [
                'AmauiFileChoose-files'
              ],

              classes.files
            ])}
          >
            {(value as any).map((item: any, index: number) => (
              <Tree
                key={index}

                icon={<IconMaterialDraftRounded size='small' />}

                end={remove && (
                  <IconButton
                    tonal

                    color='default'

                    size={20}

                    fontSize={17}

                    onClick={() => onRemove(index)}
                  >
                    <IconMaterialCloseRounded />
                  </IconButton>
                )}

                middle={(
                  <Line
                    gap={1}

                    direction='row'

                    align='center'
                  >
                    <Type
                      version='b2'

                      className={classNames([
                        staticClassName('FileChoose', theme) && [
                          'AmauiFileChoose-file'
                        ],

                        classes.file
                      ])}
                    >
                      {item.name}
                    </Type>

                    <Type
                      version='b3'

                      color='secondary'
                    >
                      {to(item.size, 'size-format')}
                    </Type>
                  </Line>
                )}
              />
            ))}
          </Tree>
        )
      )}
    </Wrapper>
  );
});

FileChoose.displayName = 'AmauiFileChoose';

export default FileChoose;
