import React from 'react';

import { is } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Type from '../Type';

import { IBaseElement, TElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

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

export interface IFormRow extends IBaseElement {
  name?: string | TElement;
  description?: string | TElement;

  row?: boolean;
  footer?: TElement;
}

const FormRow = React.forwardRef((props_: IFormRow, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiFormRow?.props?.default, ...props_ }), [props_]);

  const {
    name,
    description,

    row,
    footer,

    Component = Line,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Component
      ref={ref}

      gap={2}

      direction='column'

      justify='unset'

      align='unset'

      fullWidth

      className={classNames([
        staticClassName('FormRow', theme) && [
          'amaui-FormRow-root'
        ],

        className,
        classes.root,
        row && classes.row
      ])}

      {...other}
    >
      {(name || description) && (
        <Line
          gap={0.5}

          direction='column'

          fullWidth
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

FormRow.displayName = 'amaui-FormRow';

export default FormRow;
