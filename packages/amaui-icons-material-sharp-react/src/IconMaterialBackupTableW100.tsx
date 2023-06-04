import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackupTableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTableW100'

      short_name='BackupTable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.35 16H13v-5.65H7.35Zm0-6.35h12V4h-12ZM13.7 16h5.65v-5.65H13.7Zm-7.05.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialBackupTableW100.displayName = 'AmauiIconMaterialBackupTableW100';

export default IconMaterialBackupTableW100;
