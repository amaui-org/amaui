import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { IBaseElement, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',

    '& dt': {
      marginTop: '16px',
      fontWeight: '500'
    },

    '& dd': {
      paddingInlineStart: '16px',
      marginBottom: '16px'
    }
  },

  h1: {
    ...theme.typography.values.h1,
    margin: '40px 0 16px'
  },

  h2: {
    ...theme.typography.values.h2,
    margin: '40px 0 16px'
  },

  h3: {
    ...theme.typography.values.h3,
    margin: '40px 0 16px'
  },

  h4: {
    ...theme.typography.values.t1,
    margin: '40px 0 16px'
  },

  h5: {
    ...theme.typography.values.t2,
    margin: '40px 0 16px'
  },

  h6: {
    ...theme.typography.values.t3,
    margin: '40px 0 16px'
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
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.1),

    '& span': {
      whiteSpace: 'nowrap'
    }
  },

  pre: {
    margin: '16px 0',
    padding: '16px',
    borderRadius: '8px',
    color: theme.palette.text.default.primary,
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.1),

    '& code': {
      padding: '0px',
      background: 'transparent'
    }
  },

  hr: {
    height: '1px',
    width: '100%',
    margin: '24px 0',
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.2)
  },

  blockquote: {
    margin: '16px 0',
    marginInlineStart: '16px',
    padding: '20px 16px',
    borderInlineStart: `4px solid ${theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.04 : 0.2)}`,
    background: theme.methods.palette.color.colorToRgb(theme.palette.text.default.primary, theme.palette.light ? 0.02 : 0.14),

    '& > *': {
      margin: '0px'
    },

    '& > $blockquote': {
      marginBlock: '16px'
    }
  },

  ol: {
    paddingInlineStart: '16px',
    marginBottom: '16px'
  },

  ul: {
    paddingInlineStart: '16px',
    marginBottom: '16px'
  },

  li: {
    marginBottom: '10px',

    '&:last-of-type': {
      marginBottom: '0px'
    },

    '& p:last-of-type': {
      marginBottom: '0px'
    }
  },

  table: {
    margin: '16px 0',
    borderCollapse: 'collapse',
    border: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`,

    '& th,td': {
      ...theme.typography.values.b2,
      padding: '12px 16px',
      borderBottom: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`,
      borderRight: `1px solid ${theme.palette.light ? theme.palette.color.neutral[80] : theme.palette.color.neutral[30]}`
    },

    '& th': {
      fontWeight: '500',
      borderBottom: `1px solid ${theme.palette.light ? theme.palette.color.neutral[50] : theme.palette.color.neutral[50]}`
    }
  }

}), { name: 'amaui-Markdown' });

const escapeRegExp = (value: string) => value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

export interface IMarkdown extends IBaseElement {
  value?: string;

  render?: (element: string, className: string, style: string, ...args: any[]) => string;

  elementClassNames?: Record<string, string>;

  elementStyles?: Record<string, string>;

  onUpdate: () => any;

  onStart: () => any;
}

const Markdown = React.forwardRef((props_: IMarkdown, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMarkdown?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    value,

    render,

    elementClassNames,

    elementStyles,

    onUpdate,

    onStart,

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

    const addClassName = (name: string, ...args: string[]) => {
      let valueClass = classes[name];

      if (elementClassNames?.[name]) valueClass += ` ${elementClassNames[name]}`;

      // Add additional values
      args.forEach(arg => valueClass += ` ${arg}`);

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
      const table = (valueTable_: string) => {
        const valueTable = valueTable_;

        const items = valueTable.split('\n').filter(Boolean).map(item_ => {
          let item = item_.trim();

          if (item.startsWith('|')) item = item.slice(1).trim();

          if (item.endsWith('|')) item = item.slice(0, -1).trim();

          return item;
        });

        const head = items[0].split('|').filter(Boolean).map(item => item.trim());

        const tdAttributes = {};

        items[1].split('|').filter(Boolean).map(item => item.trim()).forEach((item: string, index: number) => {
          if (item.startsWith(':') && item.endsWith(':')) tdAttributes[index] = ` align='center'`;
          else if (item.endsWith(':')) tdAttributes[index] = ` align='right'`;
          else tdAttributes[index] = '';
        });

        const rowsHead = head.reduce((result: string, item: string, index: number) => {
          result += `\n<th${tdAttributes[index] || ''}>${item}</th>`;

          return result;
        }, '');

        let rowsBody = '';

        items.slice(2).map(row_ => {
          const row = row_.split('|').filter(Boolean).map(item => item.trim());

          let tr = ``;

          row.forEach((item: string, index: number) => tr += `\n<td${tdAttributes[index] || ''}>${item}</td>`);

          rowsBody += `\n<tr>${tr}</tr>`;
        });

        return `<thead>
  <tr>
    ${rowsHead}
  </tr>
</thead>
<tbody>
  ${rowsBody}
</tbody>
`;
      };

      const method = (valueNew_: string) => {
        return valueNew_
          // hr
          .replace(/^ *\*{3}$/gm, (match, ...args) => {
            const valueRender = is('function', render) ? render('hr', classNames([classes['hr'], elementClassNames?.['hr']]), elementStyles?.['hr'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<hr${addClassName('hr')}${addStyle('hr')}/>`;
          })
          .replace(/^ *-{3}$/gm, (match, ...args) => {
            const valueRender = is('function', render) ? render('hr', classNames([classes['hr'], elementClassNames?.['hr']]), elementStyles?.['hr'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<hr${addClassName('hr')}${addStyle('hr')}/>`;
          })
          .replace(/^ *_{3}$/gm, (match, ...args) => {
            const valueRender = is('function', render) ? render('hr', classNames([classes['hr'], elementClassNames?.['hr']]), elementStyles?.['hr'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<hr${addClassName('hr')}${addStyle('hr')}/>`;
          })
          // h1
          .replace(/^ *# (.*)$/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('h1', classNames([classes['h1'], elementClassNames?.['h1']]), elementStyles?.['h1'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<h1${addClassName('h1')}${addStyle('h1')}>${a1}</h1>`;
          })
          .replace(/^ *(.*)[\r\n]=+$/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('h1', classNames([classes['h1'], elementClassNames?.['h1']]), elementStyles?.['h1'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<h1${addClassName('h1')}${addStyle('h1')}>${a1}</h1>`;
          })
          // h2
          .replace(/^ *## (.*)$/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('h2', classNames([classes['h2'], elementClassNames?.['h2']]), elementStyles?.['h2'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<h2${addClassName('h2')}${addStyle('h2')}>${a1}</h2>`;
          })
          .replace(/^ *(.*)[\r\n]-+$/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('h2', classNames([classes['h2'], elementClassNames?.['h2']]), elementStyles?.['h2'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<h2${addClassName('h2')}${addStyle('h2')}>${a1}</h2>`;
          })
          // h3
          .replace(/^ *### (.*)$/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('h3', classNames([classes['h3'], elementClassNames?.['h3']]), elementStyles?.['h3'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<h3${addClassName('h3')}${addStyle('h3')}>${a1}</h3>`;
          })
          // h4
          .replace(/^ *#### (.*)$/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('h4', classNames([classes['h4'], elementClassNames?.['h4']]), elementStyles?.['h4'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<h4${addClassName('h4')}${addStyle('h4')}>${a1}</h4>`;
          })
          // h5
          .replace(/^ *##### (.*)$/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('h5', classNames([classes['h5'], elementClassNames?.['h5']]), elementStyles?.['h5'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<h5${addClassName('h5')}${addStyle('h5')}>${a1}</h5>`;
          })
          // h6
          .replace(/^ *###### (.*)$/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('h6', classNames([classes['h6'], elementClassNames?.['h6']]), elementStyles?.['h6'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<h6${addClassName('h6')}${addStyle('h6')}>${a1}</h6>`;
          })
          // tables
          .replace(/ *\|?([^|\n]+(\|[^|\n]+)+ *\|?(\n *\|? *:?-{3,}:? *(\| *:?-{3,}:? *)+ *\|?)(\n *\|?([^|\n]+(\|[^|\n]+)+) *\|?)*)/g, (match, ...args) => {
            const valueRender = is('function', render) ? render('table', classNames([classes['table'], elementClassNames?.['table']]), elementStyles?.['table'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<table${addClassName('table')}${addStyle('table')}>${table(match)}</table>`;
          })
          // ol
          .replace(/^ *(\d+\. .*(\n+(\d+\. |\s{2}.*).*)*)/gm, (match, ...args) => {
            const valueRender = is('function', render) ? render('ol', classNames([classes['ol'], elementClassNames?.['ol']]), elementStyles?.['ol'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<ol${addClassName('ol')}${addStyle('ol')}>${list(match, `\\d\\.`)}</ol>`;
          })
          .replace(/^ *(\d+\) .*(\n+(\d+\) |\s{2}.*).*)*)/gm, (match, ...args) => {
            const valueRender = is('function', render) ? render('ol', classNames([classes['ol'], elementClassNames?.['ol']]), elementStyles?.['ol'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<ol${addClassName('ol')}${addStyle('ol')}>${list(match, `\\d\\)`)}</ol>`;
          })
          // ul
          .replace(/^ *(\* .*(\n+(\* |\s{2}.*).*)*)/gm, (match, ...args) => {
            const valueRender = is('function', render) ? render('ul', classNames([classes['ul'], elementClassNames?.['ul']]), elementStyles?.['ul'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<ul${addClassName('ul')}${addStyle('ul')}>${list(match, `\\*`)}</ul>`;
          })
          .replace(/^ *(- .*(\n+(- |\s{2}.*).*)*)/gm, (match, ...args) => {
            const valueRender = is('function', render) ? render('ul', classNames([classes['ul'], elementClassNames?.['ul']]), elementStyles?.['ul'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<ul${addClassName('ul')}${addStyle('ul')}>${list(match, `\\-`)}</ul>`;
          })
          .replace(/^ *(\+ .*(\n+(\+ |\s{2}.*).*)*)/gm, (match, ...args) => {
            const valueRender = is('function', render) ? render('ul', classNames([classes['ul'], elementClassNames?.['ul']]), elementStyles?.['ul'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<ul${addClassName('ul')}${addStyle('ul')}>${list(match, `\\+`)}</ul>`;
          })
          // img
          .replace(/!\[(.*)\]\(([^\s]*)( "([^"]*)")?\)/g, (match, a1, a2, a3, a4, ...args) => {
            const valueRender = is('function', render) ? render('img', classNames([classes['img'], elementClassNames?.['img']]), elementStyles?.['img'], match, a1, a2, a3, a4, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<img${addClassName('img')}${addStyle('img')} alt='${a1}' src='${a2}' title='${a4 || ''}' />`;
          })
          // img ref
          .replace(/!\[(.*)\]\[(.*)\]/g, (match, a1, a2, offset, string) => {
            const url = string.match(new RegExp(`\\[${a2}\\]: ([^\\s]*)( "([^"]*)")?`)) || string.match(new RegExp(`\\[${a2.toLowerCase()}\\]: ([^\\s]*)( "([^"]*)")?`));

            const valueRender = is('function', render) ? render('img', classNames([classes['img'], elementClassNames?.['img']]), elementStyles?.['img'], url, match, a1, a2, offset, string) : undefined;

            if (valueRender !== undefined) return valueRender;

            if (!url) return '';

            return `<img${addClassName('img')}${addStyle('img')} alt='${a1}' src='${url[1]}' title='${url[3] || ''}' />`;
          })
          // a ref inline
          .replace(/(?:[^^]*)(\[([^\]]*)\])(?:[^:[(]*)/gm, (match, a1, a2, offset, string) => {
            const url = string.match(new RegExp(`\\[${a2}\\]: ([^\\s]*)( "([^"]*)")?`)) || string.match(new RegExp(`\\[${a2.toLowerCase()}\\]: ([^\\s]*)( "([^"]*)")?`));

            const valueRender = is('function', render) ? render('a', classNames([classes['a'], elementClassNames?.['a']]), elementStyles?.['a'], url, match, a1, a2, offset, string) : undefined;

            if (valueRender !== undefined) return valueRender;

            if (!url) return '';

            return match.replace(a1, `<a${addClassName('a')}${addStyle('a')} href='${url[1]}' title='${url[3] || ''}' ref='nofollow'>${a2}</a>`);
          })
          // a urls inline
          .replace(/(?:[^:][\n <])((?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+))(?:>)?/g, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('a', classNames([classes['a'], elementClassNames?.['a']]), elementStyles?.['a'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            let match_ = match;

            if (match_.includes(`<${a1}>`)) match_ = match_.replace(`<${a1}>`, a1);

            return match_.replace(a1, `<a${addClassName('a')}${addStyle('a')} href='${a1}' ref='nofollow'>${a1}</a>`);
          })
          // pre
          .replace(/([^`])`{3}(.*)\n([^`]*)`{3}([^`])/g, (match, a1, a2, a3, a4, ...args) => {
            const additionalClassNames = [a2, `language-${a2}`];

            const valueRender = is('function', render) ? render('pre', classNames([classes['pre'], classNames([classes['pre'], elementClassNames?.['pre']]), ...additionalClassNames]), elementStyles?.['pre'], match, a1, a2, a3, a4, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `${a1}<pre${addClassName('pre', ...additionalClassNames)}${addStyle('pre')}><code${addClassName('code')}${addStyle('code')}>${a3}</code></pre>${a4}`;
          })
          // blockquote
          .replace(/^ *(>+ (<(a|img|em|strong)|[A-Za-z0-9[\]()])*.*(\n *>+.*)*)/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('blockquote', classNames([classes['blockquote'], elementClassNames?.['blockquote']]), elementStyles?.['blockquote'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            const valueAdd = a1.replace(/^ *> */gm, ' ');

            return `<blockquote${addClassName('blockquote')}${addStyle('blockquote')}>${method(valueAdd)}</blockquote>`;
          })
          // p
          .replace(/^ *((<(a|img|em|strong)|[A-Za-z0-9[\]()]).*(\n *(<(a|img|em|strong)|[A-Za-z0-9[\]()]).*)*)/gm, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('p', classNames([classes['p'], elementClassNames?.['p']]), elementStyles?.['p'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            const string = args[6];

            if (!a1.trim()) return '';

            // ul
            const ul = string.match(new RegExp(`<ul|${escapeRegExp(a1)}|ul>`, 'g'));

            if (ul) {
              const index = ul.findIndex(item => item === a1);

              if (
                (ul[index - 1] === '<ul' && ul[index + 1] === 'ul>') ||
                (ul[index - 1] === '<ul' && a1.endsWith('</ul>'))
              ) return match;
            }

            // ol
            const ol = string.match(new RegExp(`<ol|${escapeRegExp(a1)}|ol>`, 'g'));

            if (ol) {
              const index = ol.findIndex(item => item === a1);

              if (
                (ol[index - 1] === '<ol' && ol[index + 1] === 'ol>') ||
                (ol[index - 1] === '<ol' && a1.endsWith('</ol>'))
              ) return match;
            }

            // p
            const p = string.match(new RegExp(`<p|${escapeRegExp(a1)}|p>`, 'g'));

            if (p) {
              const index = p.findIndex(item => item === a1);

              if (
                (p[index - 1] === '<p' && p[index + 1] === 'p>') ||
                (p[index - 1] === '<p' && a1.endsWith('</p>'))
              ) return match;
            }

            // pre
            const pre = string.match(new RegExp(`<pre|${escapeRegExp(a1)}|pre>`, 'g'));

            if (pre) {
              const index = pre.findIndex(item => item === a1);

              if (
                (pre[index - 1] === '<pre' && pre[index + 1] === 'pre>') ||
                (pre[index - 1] === '<pre' && a1.endsWith('</pre>'))
              ) return match;
            }

            // blockquote
            const blockquote = string.match(new RegExp(`<blockquote|${escapeRegExp(a1)}|blockquote>`, 'g'));

            if (blockquote) {
              const index = blockquote.find(item => item === a1);

              if (
                (blockquote[index - 1] === '<blockquote' && blockquote[index + 1] === 'blockquote>') ||
                (blockquote[index - 1] === '<blockquote' && a1.endsWith('</blockquote>'))
              ) return match;
            }

            // table
            const table_ = string.match(new RegExp(`<table|${escapeRegExp(a1)}|table>`, 'g'));

            if (table_) {
              const index = table_.findIndex(item => item === a1);

              if (
                (table_[index - 1] === '<table' && table_[index + 1] === 'table>') ||
                (table_[index - 1] === '<table' && a1.endsWith('</table>'))
              ) return match;
            }

            return `<p${addClassName('p')}${addStyle('p')}>${a1.trim().replace(/ +/g, ' ')}</p>`;
          })
          // a
          .replace(/\[(.*)\]\(([^\s]*)( "([^"]*)")?\)/g, (match, a1, a2, a3, a4, ...args) => {
            const valueRender = is('function', render) ? render('a', classNames([classes['a'], elementClassNames?.['a']]), elementStyles?.['a'], match, a1, a2, a3, a4, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<a${addClassName('a')}${addStyle('a')} href='${a2}' title='${a4 || ''}' ref='nofollow'>${a1}</a>`;
          })
          // a ref
          .replace(/\[(.*)\]\[(.*)\]/g, (match, a1, a2, offset, string) => {
            const url = string.match(new RegExp(`\\[${a2}\\]: ([^\\s]*)( "([^"]*)")?`)) || string.match(new RegExp(`\\[${a2.toLowerCase()}\\]: ([^\\s]*)( "([^"]*)")?`));

            const valueRender = is('function', render) ? render('a', classNames([classes['a'], elementClassNames?.['a']]), elementStyles?.['a'], url, match, a1, a2, offset, string) : undefined;

            if (valueRender !== undefined) return valueRender;

            if (!url) return '';

            return `<a${addClassName('a')}${addStyle('a')} href='${url[1]}' title='${url[3] || ''}' ref='nofollow'>${a1}</a>`;
          })
          // a clean up
          .replace(/(<a.*)(title='')([^<]*<\/a>)/g, '$1$3')
          // img clean up
          .replace(/(<img.*)(title='')([^<]*\/>)/g, '$1$3')
          // a refs clean up
          .replace(/<p.*>\[.*\]:[^<]*<\/p>/g, '')
          // bold
          .replace(/__([^_]*)__/g, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('strong', classNames([classes['strong'], elementClassNames?.['strong']]), elementStyles?.['strong'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<strong${addClassName('strong')}${addStyle('strong')}>${a1}</strong>`;
          })
          .replace(/\*\*([^*]*)\*\*/g, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('strong', classNames([classes['strong'], elementClassNames?.['strong']]), elementStyles?.['strong'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<strong${addClassName('strong')}${addStyle('strong')}>${a1}</strong>`;
          })
          // italic
          .replace(/_([^_]*)_/g, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('italic', classNames([classes['italic'], elementClassNames?.['italic']]), elementStyles?.['italic'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<em${addClassName('em')}${addStyle('em')}>${a1}</em>`;
          })
          .replace(/\*([^*]*)\*/g, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('italic', classNames([classes['italic'], elementClassNames?.['italic']]), elementStyles?.['italic'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<em${addClassName('em')}${addStyle('em')}>${a1}</em>`;
          })
          // del
          .replace(/~~([^~]*)~~/g, (match, a1, ...args) => {
            const valueRender = is('function', render) ? render('del', classNames([classes['del'], elementClassNames?.['del']]), elementStyles?.['del'], match, a1, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `<del${addClassName('del')}${addStyle('del')}>${a1}</del>`;
          })
          // inline code
          .replace(/([^`])`{1}([^`]*)`{1}([^`])/g, (match, a1, a2, a3, ...args) => {
            const valueRender = is('function', render) ? render('code', classNames([classes['code'], elementClassNames?.['code']]), elementStyles?.['code'], match, a1, a2, a3, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return `${a1}<code${addClassName('code')}${addStyle('code')}>${a2}</code>${a3}`;
          })
          // line break
          .replace(/\\/g, (match, ...args) => {
            const valueRender = is('function', render) ? render('br', classNames([classes['br'], elementClassNames?.['br']]), elementStyles?.['br'], match, ...args) : undefined;

            if (valueRender !== undefined) return valueRender;

            return '<br />';
          })
          // other
          .trim();
      };

      const listItem = (valueListItem_: string) => {
        const valueListItem = valueListItem_;

        const valueRender = is('function', render) ? render('li', classNames([classes['li'], elementClassNames?.['li']]), elementStyles?.['li'], valueListItem_) : undefined;

        if (valueRender !== undefined) return valueRender;

        return method(valueListItem);
      };

      const list = (valueList_: string, marker: string) => {
        const valueList = valueList_.replace(new RegExp(`(^ *(${marker} ?(.*))(\\n( +.*)?)*)`, 'gm'), (match, a1, a2, a3) => {
          const other_ = match.replace(a2, '');

          return `\n<li${addClassName('li')}${addStyle('li')}>
<p${addClassName('p')}${addStyle('p')}>${a3}</p>

${listItem(other_)}
</li>`;
        });

        return valueList;
      };

      valueNew = method(value_);
    }

    return valueNew;
  };

  React.useEffect(() => {
    if (refs.root.current) {
      if (is('function', onStart)) onStart();

      refs.root.current.innerHTML = make(value);

      if (is('function', onUpdate)) onUpdate();
    }
  }, [value, onStart, onUpdate]);

  return (
    <Component
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('Markdown', theme) && [
          'amaui-Markdown-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

Markdown.displayName = 'amaui-Markdown';

export default Markdown;
