import React from 'react';

import { is } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import TypeElement from '../Type';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  aside: {
    flex: '0 0 auto'
  },

  row: {
    '& > *': {
      flex: '1 1 auto'
    },

    '& .amaui-TextField-root, & .amaui-TextField-wrapper': {
      width: '100%'
    }
  },

  footer: {
    marginTop: '8px'
  }
}), { name: 'amaui-FormRow' });

export interface IFormRow extends ILine {
  name?: string | IElement;
  description?: string | IElement;

  start?: any;
  end?: any;

  row?: boolean;
  footer?: IElement;

  HeaderProps?: any;
  MainProps?: any;
  TextProps?: any;
  AsideProps?: any;
  StartProps?: any;
  EndProps?: any;
}

const FormRow: React.FC<IFormRow> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiFormRow?.props?.default, ...props_ }), [props_]);

  const {
    name,
    description,

    start,
    end,

    row,
    footer,

    Component = Line,

    HeaderProps,
    MainProps,
    TextProps,
    AsideProps,
    StartProps,
    EndProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const text = (name || description);

  const actions = (start || end);

  const header = text || actions;

  let justify = 'unset';

  if (start && end && !text) justify = 'space-between';

  if (!start && !text && end) justify = 'flex-end';

  return (
    <Component
      ref={ref}

      gap={1}

      direction='column'

      justify='unset'

      align='unset'

      fullWidth

      className={classNames([
        staticClassName('FormRow', theme) && [
          'amaui-FormRow-root'
        ],

        className,
        classes.root
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
              gap={0.5}

              direction='column'

              flex

              {...TextProps}
            >
              {name && (is('string', name) ? (
                <Type
                  version='l2'
                >
                  {name}
                </Type>
              ) : name)}

              {description && (is('string', description) ? (
                <Type
                  version='b3'
                >
                  {description}
                </Type>
              ) : description)}
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

      <Line
        gap={2}

        direction={row ? 'row' : 'column'}

        fullWidth

        className={classNames([
          staticClassName('FormRow', theme) && [
            'amaui-FormRow-main'
          ],

          MainProps?.className,
          row && classes.row
        ])}

        {...MainProps}
      >
        {children}
      </Line>

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

FormRow.displayName = 'amaui-FormRow';

export default FormRow;
