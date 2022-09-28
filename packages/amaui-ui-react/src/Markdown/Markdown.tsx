import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiMarkdown' });

// to do

// Make a markdown method

// all items are made into jsx and added into an array, and then
// rendered within the root item value y

// a map of className and/or style, for every element type

// a render method for rendering every tag name, with it's value + with map className and/or style above as 3 and 4th arguments

const Markdown = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMarkdown?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    version = 'html',

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [value, setValue] = React.useState([]);
  const [valueHTML, setValueHTML] = React.useState('');

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const make = (value_: string) => {
    let valueNew: any = [];

    // Markdown

    // version string
    // add to the root programatically
    // in this version style can only be added as string not an object

    // version react
    // in this version style can only be added as object not as a string

    if (version === 'html') setValueHTML(valueNew)
    else if (version === 'react') setValue(valueNew);
  };

  React.useEffect(() => {
    make(children);
  }, [children]);

  React.useEffect(() => {
    if (refs.root.current) refs.root.current.innerHTML = valueHTML;
  }, [valueHTML]);

  return (
    <Component
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('Markdown', theme) && [
          'AmauiMarkdown-root'
        ],

        className,
        classes.root
      ])}

      dangerouse

      {...other}
    >
      {value.map((item: any, index: number) => (
        React.cloneElement(item, {
          key: index
        })
      ))}
    </Component>
  );
});

Markdown.displayName = 'AmauiMarkdown';

export default Markdown;
