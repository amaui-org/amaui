import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  h1: {
    ...theme.typography.values.h1,
    margin: '24px 0 16px'
  },

  h2: {
    ...theme.typography.values.h2,
    margin: '24px 0 16px'
  },

  h3: {
    ...theme.typography.values.h3,
    margin: '24px 0 16px'
  },

  h4: {
    ...theme.typography.values.t1,
    margin: '24px 0 16px'
  },

  h5: {
    ...theme.typography.values.t2,
    margin: '24px 0 16px'
  },

  h6: {
    ...theme.typography.values.t3,
    margin: '24px 0 16px'
  },

  p: {
    marginBottom: '16px'
  },

  em: {},

  strong: {},

  del: {},

}), { name: 'AmauiMarkdown' });

const Markdown = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMarkdown?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    value,

    elementClassNames,
    elementStyles,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const make = (value_: string) => {
    let valueNew: any = '';

    const addClassName = (name: string) => {
      let valueClass = classes[name];

      if (elementClassNames?.[name]) valueClass += `, ${elementClassNames[name]}`;

      return ` class='${valueClass}'`;
    };

    const addStyle = (name: string) => {
      if (elementStyles?.[name]) return ` style='${elementStyles[name]}'`;

      return '';
    };

    // Markdown
    if (is('string', value_)) {
      // version string
      // add to the root programatically
      // in this version style can only be added as string not an object
      valueNew = value_
        // h1
        .replace(/^# (.*)$/gmi, `<h1${addClassName('h1')}${addStyle('h1')}>$1</h1>`)
        // h1
        .replace(/^(.*)[\r\n]=+$/gmi, `<h1${addClassName('h1')}${addStyle('h1')}>$1</h1>`)
        // h2
        .replace(/^## (.*)$/gmi, `<h2${addClassName('h2')}${addStyle('h2')}>$1</h2>`)
        // h2
        .replace(/^(.*)[\r\n]-+$/gmi, `<h2${addClassName('h2')}${addStyle('h2')}>$1</h2>`)
        // h3
        .replace(/^### (.*)$/gmi, `<h3${addClassName('h3')}${addStyle('h3')}>$1</h3>`)
        // h4
        .replace(/^#### (.*)$/gmi, `<h4${addClassName('h4')}${addStyle('h4')}>$1</h4>`)
        // h5
        .replace(/^##### (.*)$/gmi, `<h5${addClassName('h5')}${addStyle('h5')}>$1</h5>`)
        // h6
        .replace(/^###### (.*)$/gmi, `<h6${addClassName('h6')}${addStyle('h6')}>$1</h6>`)
        // p
        .replace(/^([A-Za-z].*(\n[A-Za-z].*|[0-9]+[^\.]*)*)/gmi, `<p${addClassName('p')}${addStyle('p')}>$1</p>`)
        .replace(/^([0-9]+[^\.]*(\n[A-Za-z].*|[0-9]+[^\.]*)*)/gmi, `<p${addClassName('p')}${addStyle('p')}>$1</p>`)
        // bold
        .replace(/\_\_(.*)\_\_/gi, `<strong${addClassName('strong')}${addStyle('strong')}>$1</strong>`)
        .replace(/\*\*(.*)\*\*/gi, `<strong${addClassName('strong')}${addStyle('strong')}>$1</strong>`)
        // italic
        .replace(/\_(.*)\_/gi, `<em${addClassName('em')}${addStyle('em')}>$1</em>`)
        .replace(/\*(.*)\*/gi, `<em${addClassName('em')}${addStyle('em')}>$1</em>`)
        // del
        .replace(/\~\~(.*)\~\~/gi, `<del${addClassName('del')}${addStyle('del')}>$1</del>`)
        // other
        .trim();
    }

    return valueNew;
  };

  React.useEffect(() => {
    if (refs.root.current) refs.root.current.innerHTML = make(value);
  }, [value]);

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

      {...other}
    />
  );
});

Markdown.displayName = 'AmauiMarkdown';

export default Markdown;
