import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderZipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipW100Filled'

      short_name='FolderZip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V6.3H11l1 1h8.7v11.4ZM14 18h2v-2h2v-2h-2v-2h2v-2h-2V8h-2v2h2v2h-2v2h2v2h-2Z"/>
    </Icon>
  );
});

IconMaterialFolderZipW100Filled.displayName = 'AmauiIconMaterialFolderZipW100Filled';

export default IconMaterialFolderZipW100Filled;
