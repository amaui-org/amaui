import React from 'react';

import { is } from '@amaui/utils';
import { AmauiDate, format } from '@amaui/date';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Surface from '../Surface';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  version_regular: {
    padding: '24px 40px',
    borderRadius: theme.methods.shape.radius.value('rg')
  }
}), { name: 'AmauiWatch' });

const Watch = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiWatch?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    // regular, analog, google, apple
    version = 'regular',

    timeVisible = true,
    dateVisible = true,

    timeFormatString = `hh:mm:ss`,
    dateFormatString = `DD.MM.YYYY`,

    renderTime,
    renderDate,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const refs = {
    value: React.useRef<any>(),
    animationFrame: React.useRef<any>()
  };

  const [value, setValue] = React.useState(AmauiDate.milliseconds);

  const update = () => {
    setValue(AmauiDate.milliseconds);

    refs.animationFrame.current = requestAnimationFrame(update);
  };

  const clear = () => {
    cancelAnimationFrame(refs.animationFrame.current);
  };

  React.useEffect(() => {
    // Update
    update();

    return () => {
      // Clean up
      clear();
    };
  }, []);

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Watch', theme) && [
          'AmauiWatch-root',
          `AmauiWatch-version-${version}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {/* Regular  */}
      {version === 'regular' && (
        <Line
          tonal={tonal}

          color={color}

          direction='column'

          align='center'

          justify='center'

          Component={Surface}

          className={classNames([
            staticClassName('Watch', theme) && [
              'AmauiWatch-version-regular'
            ],

            classes.version_regular
          ])}
        >
          {timeVisible && (
            is('function', renderTime) ? renderTime(value) : (
              <Type
                version='h1'
              >
                {format(new AmauiDate(value), timeFormatString)}
              </Type>
            )
          )}

          {dateVisible && (
            is('function', renderDate) ? renderDate(value) : (
              <Type
                version='h3'

                color='secondary'
              >
                {format(new AmauiDate(value), dateFormatString)}
              </Type>
            )
          )}
        </Line>
      )}
    </Component>
  );
});

Watch.displayName = 'AmauiWatch';

export default Watch;
