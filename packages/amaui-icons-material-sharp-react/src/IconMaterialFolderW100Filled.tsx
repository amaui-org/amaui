import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderW100Filled'

      short_name='Folder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 6.3H11l1 1h8.7v11.4H3.3Z"/>
    </Icon>
  );
});

IconMaterialFolderW100Filled.displayName = 'AmauiIconMaterialFolderW100Filled';

export default IconMaterialFolderW100Filled;
