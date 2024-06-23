import React from 'react';

import { is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import IconElement from '../Icon';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny, ISize } from '../types';

const IconMaterialStop = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Stop'

      short_name='Stop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 8v8Zm0 10q-.825 0-1.412-.587Q6 16.825 6 16V8q0-.825.588-1.412Q7.175 6 8 6h8q.825 0 1.413.588Q18 7.175 18 8v8q0 .825-.587 1.413Q16.825 18 16 18Zm0-2h8V8H8Z" />
    </IconElement>
  );
});

const IconMaterialSpeechToText = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='SpeechToText'

      short_name='SpeechToText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 10q-.825 0-1.412-.575Q15 8.85 15 8V4q0-.85.588-1.425Q16.175 2 17 2q.85 0 1.425.575Q19 3.15 19 4v4q0 .85-.575 1.425Q17.85 10 17 10ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V4q0-.825.587-1.413Q4.175 2 5 2h8v2H5v16h11v-2h2v2q0 .825-.587 1.413Q16.825 22 16 22Zm2-4v-2h7v2Zm0-3v-2h5v2Zm11 1h-2v-2.6q-1.925-.35-3.212-1.863Q11.5 10.025 11.5 8h2q0 1.45 1.025 2.475Q15.55 11.5 17 11.5q1.475 0 2.488-1.025Q20.5 9.45 20.5 8h2q0 2.025-1.275 3.537Q19.95 13.05 18 13.4Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  },

  iconButton: {
    '&.amaui-IconButton-root': {
      transition: theme.methods.transitions.make('transform'),

      '&:active': {
        transform: 'scale(0.94)'
      }
    }
  }
}), { name: 'amaui-SpeechToText' });

export interface ISpeechToText extends ILine {
  size?: ISize;

  SpeechRecognition?: any;

  continuous?: boolean;
  grammars?: any;
  interimResults?: boolean;
  language?: string;
  maxAlternatives?: number;
  join?: string;

  loading?: any;
  disabled?: any;

  Icon?: IElementReference;
  IconStop?: IElementReference;

  onListen?: (event: React.MouseEvent<any>) => any;
  onListenStop?: (event: React.MouseEvent<any>) => any;
  onChange?: (value: string) => any;
  onData?: (value: string) => any;
  onStart?: (event: React.MouseEvent<any>) => any;
  onStop?: (event: React.MouseEvent<any>) => any;
  onError?: (error: Error) => any;

  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const SpeechToText: React.FC<ISpeechToText> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSpeechToText?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    size = 'regular',

    SpeechRecognition: SpeechRecognition_,

    continuous = true,
    interimResults = true,
    grammars,
    language = 'en-US',
    maxAlternatives = 1,
    join = '. ',

    loading,
    disabled,

    Icon: Icon_ = IconMaterialSpeechToText,
    IconStop = IconMaterialStop,

    onChange,
    onData: onData_,
    onListen: onListen_,
    onListenStop: onListenStop_,
    onStart: onStart_,
    onStop: onStop_,
    onError: onError_,

    TooltipProps,
    IconButtonProps,
    IconProps,

    className,

    ...other
  } = props;

  const [status, setStatus] = React.useState('initial');

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(),
    recognition: React.useRef<any>(),
    value: React.useRef(''),
    result: React.useRef<string[]>([]),
    status: React.useRef(status)
  };

  refs.status.current = status;

  const supported = isEnvironment('browser') && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  const onData = React.useCallback((event: any) => {
    const value = Array.from(event.results || []).map((item: any) => item[0]?.transcript || '').join('');

    refs.value.current = value;

    if (!value) {
      refs.result.current.push(value);
    }

    if (is('function', onData_)) onData_!(value);
  }, [onData_]);

  const onStart = React.useCallback(async (event: React.MouseEvent<any>) => {
    setStatus('started');

    if (is('function', onStart_)) onStart_!(event);
  }, [onStart_]);

  const onEnd = React.useCallback((event: any) => {
    setStatus('initial');

    // result
    refs.result.current.push(refs.value.current);

    const response = refs.result.current.join(join);

    if (is('function', onChange)) onChange!(response);
  }, [onChange, join]);

  const onError = React.useCallback((event: any) => {
    if (is('function', onError_)) onError_!(event);
  }, [onError_]);

  React.useEffect(() => {
    // previous clean up
    if (refs.recognition.current) {
      refs.recognition.current.abort();
    }

    // make a new instance
    if (supported) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const SpeechRecognitionClass = SpeechRecognition_ || (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognitionClass) {
        refs.recognition.current = new SpeechRecognitionClass();

        // options
        if (continuous !== undefined) refs.recognition.current.continuous = continuous;

        if (interimResults !== undefined) refs.recognition.current.interimResults = interimResults;

        if (grammars !== undefined) refs.recognition.current.grammars = grammars;

        if (language !== undefined) refs.recognition.current.lang = language;

        if (maxAlternatives !== undefined) refs.recognition.current.maxAlternatives = maxAlternatives;

        // events
        // result
        refs.recognition.current.addEventListener('start', onStart);
        refs.recognition.current.addEventListener('end', onEnd);
        refs.recognition.current.addEventListener('result', onData);
        refs.recognition.current.addEventListener('error', onError);
      }
    }

    return () => {
      // Clean up
      if (refs.recognition.current) {
        refs.recognition.current.removeEventListener('start', onStart);
        refs.recognition.current.removeEventListener('end', onEnd);
        refs.recognition.current.removeEventListener('result', onData);
        refs.recognition.current.removeEventListener('error', onError);
      }
    };
  }, [SpeechRecognition_, supported, continuous, interimResults, grammars, language, maxAlternatives]);

  const onCleanUp = React.useCallback(() => {
    refs.result.current = [];
    refs.value.current = '';
  }, []);

  const onListen = React.useCallback(async (event: React.MouseEvent<any>) => {
    if (refs.recognition.current) {
      // Clean up
      onCleanUp();

      refs.recognition.current.start();

      if (is('function', onListen_)) onListen_!(event);
    }
  }, [onListen_]);

  const onListenStop = React.useCallback(async (event: React.MouseEvent<any>) => {
    if (refs.recognition.current) {
      refs.recognition.current.stop();

      if (is('function', onListenStop_)) onListenStop_!(event);
    }
  }, [onListenStop_]);

  const iconProps = {
    size,

    ...IconProps
  };

  const iconButtonProps = {
    size,
    loading,
    disabled,

    ...IconButtonProps
  };

  if (!supported) return null;

  let IconToUse = Icon_;
  let name = 'Speech to text';

  if (status === 'started') {
    IconToUse = IconStop;
    name = 'Stop';
  }

  return (
    <Line
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={1}

      direction='row'

      align='center'

      className={classNames([
        staticClassName('SpeechToText', theme) && [
          `amaui-SpeechToText-root`,
          `amaui-SpeechToText-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Tooltip
        name={name}

        {...TooltipProps}
      >
        <IconButton
          onClick={status === 'started' ? onListenStop : onListen}

          {...iconButtonProps}

          selected={status === 'started'}

          disabled={disabled !== undefined ? disabled : !supported}

          className={classNames([
            staticClassName('SpeechToText', theme) && [
              `amaui-SpeechToText-iconButton`
            ],

            classes.iconButton
          ])}
        >
          <IconToUse
            {...iconProps}
          />
        </IconButton>
      </Tooltip>
    </Line>
  );
});

SpeechToText.displayName = 'amaui-SpeechToText';

export default SpeechToText;
