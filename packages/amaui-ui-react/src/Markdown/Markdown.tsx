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

  a: {
    color: theme.palette.color.primary.main,
    textDecoration: 'underline'
  },

  code: {
    padding: '2px 4px',
    borderRadius: '4px',
    color: theme.palette.text.default.primary,
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.1)
  },

  pre: {
    margin: '16px 0',
    padding: '16px',
    borderRadius: '8px',
    color: theme.palette.text.default.primary,
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.1),

    '& code': {
      padding: '0px',
      background: 'none'
    }
  },

  hr: {
    height: '4px',
    width: '100%',
    margin: '24px 0',
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.2)
  },

  blockquote: {
    margin: '16px 0',
    paddingBlock: '4px',
    paddingLeft: '16px',
    borderLeft: `4px solid ${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.2)}`,

    '& > *': {
      margin: '0px'
    }
  }
}), { name: 'AmauiMarkdown' });

const escapeRegExp = (value: string) => value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

// to do

// add render method for every value

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
        // hr
        .replace(/^\*{3}$/gm, `<hr${addClassName('hr')}${addStyle('hr')}/>`)
        .replace(/^\-{3}$/gm, `<hr${addClassName('hr')}${addStyle('hr')}/>`)
        .replace(/^\_{3}$/gm, `<hr${addClassName('hr')}${addStyle('hr')}/>`)
        // h1
        .replace(/^# (.*)$/gm, `<h1${addClassName('h1')}${addStyle('h1')}>$1</h1>`)
        // h1
        .replace(/^(.*)[\r\n]=+$/gm, `<h1${addClassName('h1')}${addStyle('h1')}>$1</h1>`)
        // h2
        .replace(/^## (.*)$/gm, `<h2${addClassName('h2')}${addStyle('h2')}>$1</h2>`)
        // h2
        .replace(/^(.*)[\r\n]-+$/gm, `<h2${addClassName('h2')}${addStyle('h2')}>$1</h2>`)
        // h3
        .replace(/^### (.*)$/gm, `<h3${addClassName('h3')}${addStyle('h3')}>$1</h3>`)
        // h4
        .replace(/^#### (.*)$/gm, `<h4${addClassName('h4')}${addStyle('h4')}>$1</h4>`)
        // h5
        .replace(/^##### (.*)$/gm, `<h5${addClassName('h5')}${addStyle('h5')}>$1</h5>`)
        // h6
        .replace(/^###### (.*)$/gm, `<h6${addClassName('h6')}${addStyle('h6')}>$1</h6>`)
        // img
        .replace(/!\[(.*)\]\(([^\s]*)( "([^"]*)")?\)/g, `<img${addClassName('a')}${addStyle('a')} alt='$1' src='$2' title="$4" />`)
        // img ref
        .replace(/!\[(.*)\]\[(.*)\]/g, (match, a1, a2, offset, string) => {
          const url = string.match(new RegExp(`\\[${a2}\\]: ([^\\s]*)( "([^"]*)")?`)) || string.match(new RegExp(`\\[${a2.toLowerCase()}\\]: ([^\\s]*)( "([^"]*)")?`));

          if (!url) return '';

          return `<img${addClassName('a')}${addStyle('a')} alt='${a1}' src='${url[1]}' title='${url[3] || ''}' />`;
        })
        // a ref inline
        .replace(/(?:[^^]*)(\[([^\]]*)\])(?:[^:\[\(]*)/gm, (match, a1, a2, offset, string) => {
          const url = string.match(new RegExp(`\\[${a2}\\]: ([^\\s]*)( "([^"]*)")?`)) || string.match(new RegExp(`\\[${a2.toLowerCase()}\\]: ([^\\s]*)( "([^"]*)")?`));

          if (!url) return '';

          return match.replace(a1, `<a${addClassName('a')}${addStyle('a')} href='${url[1]}' title='${url[3] || ''}' ref='nofollow'>${a2}</a>`);
        })
        // a urls inline
        .replace(/(?:[^:][\n <])((?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+))(?:>)?/g, (match, a1) => {
          let match_ = match;

          if (match_.includes(`<${a1}>`)) match_ = match_.replace(`<${a1}>`, a1);

          return match_.replace(a1, `<a${addClassName('a')}${addStyle('a')} href='${a1}' ref='nofollow'>${a1}</a>`);
        })
        // pre
        .replace(/([^`])`{3}(.*)\n([^`]*)`{3}([^`])/g, `$1<pre${addClassName('pre')}${addStyle('pre')}><code${addClassName('code')}${addStyle('code')}>$3</code></pre>$4`)
        // blockquote
        .replace(/^(> (<(a|img)|[A-Za-z0-9\[]).*(\n> (<(a|img)|[A-Za-z0-9\[]).*)*)/gm, (match, a1, ...args) => {
          const valueAdd = a1.replace(/(^|\n)> /g, '$1');

          return `<blockquote${addClassName('blockquote')}${addStyle('blockquote')}><p${addClassName('p')}${addStyle('p')}>${valueAdd}</p></blockquote>`;
        })
        // p
        .replace(/^((<(a|img)|[A-Za-z0-9\[]).*(\n(<(a|img)|[A-Za-z0-9\[]).*)*)/gm, (match, a1, ...args) => {
          const string = args[6];

          if (!a1.trim()) return '';

          // pre
          const pre = string.match(new RegExp(`<pre|${escapeRegExp(a1)}|pre>`, 'g'));

          if (pre) {
            const index = pre.findIndex(item => item === a1);

            if (pre[index - 1] === '<pre' && pre[index + 1] === 'pre>') return match;
          }

          // blockquote
          const blockquote = string.match(new RegExp(`<blockquote|${escapeRegExp(a1)}|blockquote>`, 'g'));

          if (blockquote) {
            const index = blockquote.find(item => item === a1);

            if (blockquote[index - 1] === '<blockquote' && blockquote[index + 1] === 'blockquote>') return match;
          }

          return `<p${addClassName('p')}${addStyle('p')}>${a1}</p>`;
        })
        // a
        .replace(/\[(.*)\]\(([^\s]*)( "([^"]*)")?\)/g, `<a${addClassName('a')}${addStyle('a')} href='$2' title="$4" ref='nofollow'>$1</a>`)
        // a ref
        .replace(/\[(.*)\]\[(.*)\]/g, (match, a1, a2, offset, string) => {
          const url = string.match(new RegExp(`\\[${a2}\\]: ([^\\s]*)( "([^"]*)")?`)) || string.match(new RegExp(`\\[${a2.toLowerCase()}\\]: ([^\\s]*)( "([^"]*)")?`));

          if (!url) return '';

          return `<a${addClassName('a')}${addStyle('a')} href='${url[1]}' title='${url[3] || ''}' ref='nofollow'>${a1}</a>`;
        })
        // a clean up
        .replace(/(<a.*)(title="")([^<]*<\/a>)/g, '$1$3')
        // img clean up
        .replace(/(<img.*)(title="")([^<]*\/>)/g, '$1$3')
        // a refs clean up
        .replace(/<p.*>\[.*\]:[^<]*<\/p>/g, '')
        // bold
        .replace(/\_\_([^_]*)\_\_/g, `<strong${addClassName('strong')}${addStyle('strong')}>$1</strong>`)
        .replace(/\*\*([^\*]*)\*\*/g, `<strong${addClassName('strong')}${addStyle('strong')}>$1</strong>`)
        // italic
        .replace(/\_([^_]*)\_/g, `<em${addClassName('em')}${addStyle('em')}>$1</em>`)
        .replace(/\*([^\*]*)\*/g, `<em${addClassName('em')}${addStyle('em')}>$1</em>`)
        // del
        .replace(/\~\~([^~]*)\~\~/g, `<del${addClassName('del')}${addStyle('del')}>$1</del>`)
        // code
        .replace(/([^`])`{1}([^`]*)`{1}([^`])/g, `$1<code${addClassName('code')}${addStyle('code')}>$2</code>$3`)
        // line break
        .replace(/\\/g, `<br />`)
        // other
        .trim();
    }

    console.log('value', valueNew);

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
