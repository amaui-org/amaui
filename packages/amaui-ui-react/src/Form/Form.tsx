import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import Accordion from '../Accordion';
import TypeElement from '../Type';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElement, ISize } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  root_accordion: {
    '&.amaui-Surface-root': {
      background: 'transparent'
    }
  },

  aside: {
    flex: '0 0 auto'
  },

  divider: {
    position: 'relative',
    paddingBottom: theme.methods.space.value(4, 'px'),

    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: '0px',
      width: '100%',
      height: '1px',
      background: theme.palette.text.default.primary,
      opacity: theme.palette.light ? '0.07' : '0.1'
    },

    '&:last-child': {
      paddingBottom: 0,

      '&::after': {
        display: 'none'
      }
    }
  },

  size_small_form_accordion: {
    marginTop: '16px'
  },

  size_regular_form_accordion: {
    marginTop: '24px'
  },

  size_large_form_accordion: {
    marginTop: '32px'
  }
}), { name: 'amaui-Form' });

export interface IForm extends ILine {
  accordion?: boolean;

  divider?: boolean;

  name?: string | IElement;
  description?: string | IElement;

  size?: ISize;

  start?: any;
  end?: any;

  footer?: IElement;

  onSubmit?: (event: SubmitEvent) => any;

  ComponentForm?: any;

  wrapper?: any;

  HeaderProps?: any;
  TextProps?: any;
  AsideProps?: any;
  StartProps?: any;
  EndProps?: any;
  AccordionProps?: any;
  AccordionMainProps?: any;
}

const Form: React.FC<IForm> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiForm?.props?.default, ...props_ }), [props_]);

  const {
    accordion,

    divider,

    name,
    description,

    size = 'regular',

    start,
    end,

    footer,

    onSubmit: onSubmit_,

    Component = Line,

    ComponentForm: ComponentForm_,

    HeaderProps,
    TextProps,
    AsideProps,
    StartProps,
    EndProps,
    AccordionProps,
    AccordionMainProps,

    wrapper,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const ComponentForm = ComponentForm_ !== undefined ? ComponentForm_ : wrapper ? 'div' : 'form';

  const text = (name || description);

  const actions = (start || end);

  const header = text || actions;

  let justify = 'unset';

  if (start && end && !text) justify = 'space-between';

  if (!start && !text && end) justify = 'flex-end';

  const onSubmit = ComponentForm === 'form' ? onSubmit_ || React.useCallback((event: SubmitEvent) => {
    event.preventDefault();
  }, []) : undefined;

  const elements = {
    name: name && (is('string', name) ? (
      <Type
        version={size === 'large' ? 't1' : size === 'regular' ? 'l1' : 'l2'}
      >
        {name}
      </Type>
    ) : name),

    description: description && (is('string', description) ? (
      <Type
        version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}
      >
        {description}
      </Type>
    ) : description)
  };

  if (accordion) {
    return (
      <Accordion
        tonal

        color='primary'

        primary={elements.name}

        secondary={elements.description}

        expandedMarginVertical='none'

        expandedHeaderPaddingVertical='none'

        headerPaddingVertical='none'

        headerPaddingHorizontal='none'

        mainPaddingVertical='none'

        mainPaddingHorizontal='none'

        start={start}

        end={end}

        HeaderProps={{
          direction: 'column',
          gap: size === 'large' ? 1 : size === 'regular' ? 0.5 : 0.5
        }}

        {...AccordionProps}

        className={classNames([
          staticClassName('Form', theme) && [
            'amaui-Form-root'
          ],

          AccordionProps?.className,
          className,
          classes.root,
          classes.root_accordion,
          divider && classes.divider
        ])}

        {...other}
      >
        <Line
          ref={ref}

          gap={size === 'large' ? 3 : size === 'regular' ? 2.5 : 2}

          direction='column'

          justify='unset'

          align='flex-start'

          Component={ComponentForm}

          onSubmit={onSubmit}

          fullWidth

          {...AccordionMainProps}

          className={classNames([
            AccordionMainProps?.className,
            classes[`size_${size}_form_accordion`]
          ])}
        >
          {children}

          {footer && (
            <Line
              direction='row'

              justify='flex-end'

              fullWidth

              className={classes.footer}
            >
              {footer}
            </Line>
          )}
        </Line>
      </Accordion>
    );
  }

  return (
    <Component
      ref={ref}

      gap={size === 'large' ? 3 : size === 'regular' ? 2.5 : 2}

      direction='column'

      justify='unset'

      align='flex-start'

      Component={ComponentForm}

      onSubmit={onSubmit}

      fullWidth

      className={classNames([
        staticClassName('Form', theme) && [
          'amaui-Form-root'
        ],

        className,
        classes.root,
        divider && classes.divider
      ])}

      {...other}
    >
      {header && (
        <Line
          direction='row'

          align='center'

          justify={justify}

          fullWidth

          {...HeaderProps}
        >
          {start && (
            <Line
              {...AsideProps}

              {...StartProps}

              className={classNames([
                AsideProps?.className,
                StartProps?.className,
                classes.aside
              ])}
            >
              {start}
            </Line>
          )}

          {text && (
            <Line
              gap={size === 'large' ? 1 : size === 'regular' ? 0.5 : 0.5}

              direction='column'

              flex

              {...TextProps}
            >
              {elements.name}

              {elements.description}
            </Line>
          )}

          {end && (
            <Line
              gap={0}

              direction='row'

              align='center'

              {...AsideProps}

              {...EndProps}

              className={classNames([
                AsideProps?.className,
                EndProps?.className,
                classes.aside
              ])}
            >
              {end}
            </Line>
          )}
        </Line>
      )}

      {children}

      {footer && (
        <Line
          direction='row'

          justify='flex-end'

          fullWidth

          className={classes.footer}
        >
          {footer}
        </Line>
      )}
    </Component>
  );
});

Form.displayName = 'amaui-Form';

export default Form;
