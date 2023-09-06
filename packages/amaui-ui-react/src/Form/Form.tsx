import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Accordion from '../Accordion';
import Type from '../Type';

import { IBaseElement, TElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  root_accordion: {
    '&.amaui-Surface-root': {
      background: 'transparent'
    }
  },

  divider: {
    position: 'relative',
    paddingBottom: '32px',

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

  form_accordion: {
    marginTop: '32px'
  }
}), { name: 'amaui-Form' });

export interface IForm extends IBaseElement {
  accordion?: boolean;

  divider?: boolean;

  name?: string | TElement;
  description?: string | TElement;

  footer?: TElement;
}

const Form = React.forwardRef((props_: IForm, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiForm?.props?.default, ...props_ }), [props_]);

  const {
    accordion,

    divider = true,

    name,
    description,

    footer,

    Component = Line,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const elements = {
    name: name && (is('string', name) ? (
      <Type
        version='t2'
      >
        {name}
      </Type>
    ) : name),

    description: description && (is('string', description) ? (
      <Type
        version='b2'
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

        className={classNames([
          staticClassName('Form', theme) && [
            'amaui-Form-root'
          ],

          className,
          classes.root,
          classes.root_accordion,
          divider && classes.divider
        ])}

        {...other}
      >
        <Line
          ref={ref}

          gap={4}

          direction='column'

          justify='unset'

          align='flex-start'

          Component='form'

          fullWidth

          className={classes.form_accordion}
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

      gap={4}

      direction='column'

      justify='unset'

      align='flex-start'

      Component='form'

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
      {(name || description) && (
        <Line
          gap={0.5}

          direction='column'

          fullWidth
        >
          {elements.name}

          {elements.description}
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
