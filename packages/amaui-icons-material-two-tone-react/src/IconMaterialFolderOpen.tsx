import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpen'

      short_name='FolderOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h16v10H4z" opacity=".3"/><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
    </Icon>
  );
});

IconMaterialFolderOpen.displayName = 'AmauiIconMaterialFolderOpen';

export default IconMaterialFolderOpen;
