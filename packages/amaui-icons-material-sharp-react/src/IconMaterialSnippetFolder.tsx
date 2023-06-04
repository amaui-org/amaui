import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnippetFolder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolder'

      short_name='SnippetFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 15.5v-5h1.375l1.625 1.625V15.5ZM13 17h6v-5.5L16.5 9H13ZM2 4h8l2 2h10v14H2Zm2 2v12h16V8h-8.825l-2-2Zm0 12V6v12Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolder.displayName = 'AmauiIconMaterialSnippetFolder';

export default IconMaterialSnippetFolder;
