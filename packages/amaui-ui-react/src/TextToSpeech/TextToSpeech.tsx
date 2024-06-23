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

const IconMaterialPause = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Pause'

      short_name='Pause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 19q-.825 0-1.412-.587Q13 17.825 13 17V7q0-.825.588-1.412Q14.175 5 15 5h2q.825 0 1.413.588Q19 6.175 19 7v10q0 .825-.587 1.413Q17.825 19 17 19Zm-8 0q-.825 0-1.412-.587Q5 17.825 5 17V7q0-.825.588-1.412Q6.175 5 7 5h2q.825 0 1.413.588Q11 6.175 11 7v10q0 .825-.587 1.413Q9.825 19 9 19Zm8-2h2V7h-2Zm-8 0h2V7H7ZM7 7v10Zm8 0v10Z" />
    </IconElement>
  );
});

const IconMaterialTextToSpeech = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='TextToSpeech'

      short_name='TextToSpeech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h9l-2 2H4v16h11v-3h2v3q0 .825-.587 1.413Q15.825 22 15 22Zm2-4v-2h7v2Zm0-3v-2h5v2Zm9 0-4-4H8V6h3l4-4Zm2-3.05v-6.9q.9.525 1.45 1.425.55.9.55 2.025t-.55 2.025q-.55.9-1.45 1.425Zm0 4.3v-2.1q1.75-.625 2.875-2.163Q21 10.45 21 8.5q0-1.95-1.125-3.488Q18.75 3.475 17 2.85V.75q2.6.675 4.3 2.812Q23 5.7 23 8.5t-1.7 4.938q-1.7 2.137-4.3 2.812Z" />
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
}), { name: 'amaui-TextToSpeech' });

export interface ITextToSpeech extends ILine {
  size?: ISize;

  read?: string;

  speechSynthesisUtterance?: any;

  loading?: any;
  disabled?: any;

  Icon?: IElementReference;
  IconPause?: IElementReference;

  onStart?: (event?: SpeechSynthesisEvent) => any;
  onPause?: (event?: SpeechSynthesisEvent) => any;
  onResume?: (event?: SpeechSynthesisEvent) => any;
  onEnd?: (event?: SpeechSynthesisEvent) => any;

  TooltipProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  IconProps?: IPropsAny;
}

const TextToSpeech: React.FC<ITextToSpeech> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTextToSpeech?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    size = 'regular',

    read,

    speechSynthesisUtterance,

    loading,
    disabled,

    Icon: Icon_ = IconMaterialTextToSpeech,
    IconPause = IconMaterialPause,

    onStart: onStart_,
    onPause: onPause_,
    onResume: onResume_,
    onEnd: onEnd_,

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
    status: React.useRef(status)
  };

  refs.status.current = status;

  const supported = isEnvironment('browser') && ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window);

  const onPause = React.useCallback(async (event?: SpeechSynthesisEvent) => {
    setStatus('paused');

    if (is('function', onPause_)) onPause_!(event);
  }, [onPause_]);

  const onResume = React.useCallback(async (event?: SpeechSynthesisEvent) => {
    setStatus('resumed');

    if (is('function', onResume_)) onResume_!(event);
  }, [onResume_]);

  const onEnd = React.useCallback((event?: SpeechSynthesisEvent) => {
    setStatus('initial');

    if (is('function', onEnd_)) onEnd_!(event);
  }, [onEnd_]);

  React.useEffect(() => {
    // Clean up previous utterance
    // if there was any
    if (supported) {
      window.speechSynthesis.cancel();
    }
  }, [supported]);

  const onStart = React.useCallback(async (event?: SpeechSynthesisEvent) => {
    if (supported && is('string', read)) {
      setStatus('started');

      const utterance = new SpeechSynthesisUtterance(read);

      speechSynthesis.speak(utterance);

      // events
      utterance.onpause = onPause;
      utterance.onresume = onResume;
      utterance.onend = onEnd;

      if (is('function', onStart_)) onStart_!(event);
    }
  }, [read, supported, onStart_, onPause, onResume, onEnd]);

  const onClick = React.useCallback(async () => {
    const status_ = refs.status.current;

    if (['started', 'resumed'].includes(status_)) window.speechSynthesis.pause();
    else if (status_ === 'paused') window.speechSynthesis.resume();
    else if (status_ === 'initial') onStart();
  }, []);

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
  let name = 'Text to speech';

  if (['started', 'resumed'].includes(status)) {
    IconToUse = IconPause;
    name = 'Pause';
  }

  if (status === 'paused') name = 'Resume';

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
        staticClassName('TextToSpeech', theme) && [
          `amaui-TextToSpeech-root`,
          `amaui-TextToSpeech-size-${size}`
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
          onClick={onClick}

          {...iconButtonProps}

          selected={status === 'started'}

          disabled={disabled !== undefined ? disabled : !supported}

          className={classNames([
            staticClassName('TextToSpeech', theme) && [
              `amaui-TextToSpeech-iconButton`
            ],

            classes.iconButton
          ])}
        >
          <IconToUse {...iconProps} />
        </IconButton>
      </Tooltip>
    </Line>
  );
});

TextToSpeech.displayName = 'amaui-TextToSpeech';

export default TextToSpeech;
