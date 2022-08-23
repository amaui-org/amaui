import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderDeleteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteSharpW100Filled'
      short_name='FolderDelete'

      {...props}
    >
      <path d="M13.15 16.6H17.85V10.6H18.6V9.9H16.35V9.4H14.65V9.9H12.4V10.6H13.15ZM13.85 15.9V10.6H17.15V15.9ZM3.3 18.7V6.3H11L12 7.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteSharpW100Filled.displayName = 'AmauiIconMaterialFolderDeleteSharpW100Filled';

export default IconMaterialFolderDeleteSharpW100Filled;
