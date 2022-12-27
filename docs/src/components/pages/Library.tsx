import React from 'react';

import { Markdown } from '@amaui/ui-react';
import { classNames, style as styleMethod } from '@amaui/style-react';
import AmauiRequest from '@amaui/request';

const useStyle = styleMethod(theme => ({
  root: {
    paddingInline: 40,
    marginTop: 40,
    maxWidth: 1024,
    marginInline: 'auto',

    '& code[class*=language-], & pre[class*=language-]': {
      ...theme.typography.values.m3,

      color: 'inherit',
      fontSize: '0.75rem',
      textShadow: 'none'
    },

    '& pre': {
      padding: '24px 26px',
      margin: '16px 0',
      background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.default.quaternary,
      boxShadow: theme.palette.light ? theme.shadows.values.default[12] : undefined
    },

    '& .operator': {
      background: 'transparent'
    }
  }
}), { name: 'library' });

export default function Library(props: any) {
  const { classes } = useStyle(props);

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState('');

  const refs = {
    id: React.useId()
  };

  const page = React.useCallback(async (url_: string) => {
    const url = url_?.split('/dev')[1];

    // page md
    const response = (await AmauiRequest.get(`./assets/md/dev${url}.md`, { response: { type: 'text' } }));

    if (response.status === 200) setValue(response.response);
    else setValue('');
  }, []);

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    // Get page details
    page(props.url);
  }, [props.url]);

  const onUpdate = React.useCallback(() => {
    const Prism = (window as any).Prism;

    Prism.highlightAllUnder(window.document.getElementById(refs.id) as HTMLElement);
  }, []);

  return (
    <div
      className={classNames([
        classes.root
      ])}

      id={refs.id}
    >
      {value && (
        <Markdown
          value={value}

          onUpdate={onUpdate}
        />
      )}
    </div>
  );
}
