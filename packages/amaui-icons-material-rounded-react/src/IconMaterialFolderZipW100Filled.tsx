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
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM14 18h2v-2h2v-2h-2v-2h2v-2h-2V8h-2v2h2v2h-2v2h2v2h-2Z"/>
    </Icon>
  );
});

IconMaterialFolderZipW100Filled.displayName = 'AmauiIconMaterialFolderZipW100Filled';

export default IconMaterialFolderZipW100Filled;
