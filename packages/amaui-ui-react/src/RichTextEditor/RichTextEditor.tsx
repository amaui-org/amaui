import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiRichTextEditor' });

const RichTextEditor = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRichTextEditor?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    Component = 'div',

    className,

    children,

    ...other
  } = props;

  return (
    <Line
      ref={ref}

      Component={Component}

      className={classNames([
        staticClassName('RichTextEditor', theme) && [
          'AmauiRichTextEditor-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Line>
  );
});

RichTextEditor.displayName = 'AmauiRichTextEditor';

export default RichTextEditor;
