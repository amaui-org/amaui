import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSpecialSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialSharpW100Filled'
      short_name='FolderSpecial'

      {...props}
    >
      <path d="M13.15 15.925 14.9 14.575 16.65 15.925 16 13.75 17.775 12.3H15.6L14.9 10.175L14.2 12.3H12.025L13.8 13.75ZM3.3 18.7V6.3H11L12 7.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialSharpW100Filled.displayName = 'AmauiIconMaterialFolderSpecialSharpW100Filled';

export default IconMaterialFolderSpecialSharpW100Filled;
