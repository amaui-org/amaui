import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnippetFolderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderFilled'

      short_name='SnippetFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 15.5v-5h1.375l1.625 1.625V15.5ZM13 17h6v-5.5L16.5 9H13ZM2 4h8l2 2h10v14H2Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolderFilled.displayName = 'AmauiIconMaterialSnippetFolderFilled';

export default IconMaterialSnippetFolderFilled;
