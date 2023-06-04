import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteW100Filled'

      short_name='FolderDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.15 16.6h4.7v-6h.75v-.7h-2.25v-.5h-1.7v.5H12.4v.7h.75Zm.7-.7v-5.3h3.3v5.3ZM3.3 18.7V6.3H11l1 1h8.7v11.4Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteW100Filled.displayName = 'AmauiIconMaterialFolderDeleteW100Filled';

export default IconMaterialFolderDeleteW100Filled;
