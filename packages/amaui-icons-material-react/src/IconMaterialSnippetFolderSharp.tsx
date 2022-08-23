import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnippetFolderSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderSharp'
      short_name='SnippetFolder'

      {...props}
    >
      <path d="M14.5 15.5V10.5H15.875L17.5 12.125V15.5ZM13 17H19V11.5L16.5 9H13ZM2 4H10L12 6H22V20H2ZM4 6V18H20V8H11.175L9.175 6ZM4 18V6V8V18Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolderSharp.displayName = 'AmauiIconMaterialSnippetFolderSharp';

export default IconMaterialSnippetFolderSharp;
