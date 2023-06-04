import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenW100Filled'

      short_name='FolderOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V6.3H11l1 1h8.475V8H4v9.95h.5L6.875 10h15.95l-2.6 8.7Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenW100Filled.displayName = 'AmauiIconMaterialFolderOpenW100Filled';

export default IconMaterialFolderOpenW100Filled;
