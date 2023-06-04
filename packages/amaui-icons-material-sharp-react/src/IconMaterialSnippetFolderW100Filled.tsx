import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnippetFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderW100Filled'

      short_name='SnippetFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.1 15.9v-5.8h1.95l1.85 1.85v3.95Zm-.7.7h5.2v-4.925L16.325 9.4H13.4ZM3.3 6.3H11l1 1h8.7v11.4H3.3Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolderW100Filled.displayName = 'AmauiIconMaterialSnippetFolderW100Filled';

export default IconMaterialSnippetFolderW100Filled;
