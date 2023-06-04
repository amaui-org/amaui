import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackupTable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTable'

      short_name='BackupTable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16h5v-5H8Zm0-7h12V4H8Zm7 7h5v-5h-5Zm-9 2V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialBackupTable.displayName = 'AmauiIconMaterialBackupTable';

export default IconMaterialBackupTable;
