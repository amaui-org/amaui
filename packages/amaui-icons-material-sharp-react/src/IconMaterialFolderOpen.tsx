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
      <path d="M2 20V4h8l2 2h10v2H11.175l-2-2H4v12l2.4-8h17.1l-3 10Zm4.1-2H19l1.8-6H7.9Zm0 0 1.8-6-1.8 6ZM4 8V6v2Z"/>
    </Icon>
  );
});

IconMaterialFolderOpen.displayName = 'AmauiIconMaterialFolderOpen';

export default IconMaterialFolderOpen;
