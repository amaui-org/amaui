import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Section, { ISection } from '../Section/Section';
import Button from '../Button';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-SectionAction' });

export interface ISectionAction extends ISection {
  text?: string;

  link?: string;

  to?: string;

  ButtonProps?: IPropsAny;
}

const Element: React.FC<ISectionAction> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionAction?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    size = 'regular',

    text,

    link,

    to,

    ButtonProps,

    className,

    ...other
  } = props;

  const navigate = isEnvironment('browser') && useNavigate();

  const refs = {
    root: React.useRef<any>()
  };

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('SectionAction', theme) && [
          'amaui-SectionAction-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Button
        tonal

        version='filled'

        size={size === 'large' ? 'regular' : size === 'regular' ? 'small' : 'small'}

        onClick={(to || link) ? () => to ? navigate(to) : window.open(link, 'blank') : undefined}

        {...ButtonProps}

        className={classNames([
          staticClassName('SectionAction', theme) && [
            'amaui-SectionAction-item-button'
          ],

          ButtonProps?.className,
          classes.button
        ])}
      >
        {text || 'Click here'}
      </Button>
    </Section>
  );
});

Element.displayName = 'amaui-SectionAction';

export default Element;
