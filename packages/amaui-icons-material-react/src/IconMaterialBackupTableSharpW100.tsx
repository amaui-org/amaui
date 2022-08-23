import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackupTableSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTableSharpW100'
      short_name='BackupTable'

      {...props}
    >
      <path d="M7.35 16H13V10.35H7.35ZM7.35 9.65H19.35V4H7.35ZM13.7 16H19.35V10.35H13.7ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  );
});

IconMaterialBackupTableSharpW100.displayName = 'AmauiIconMaterialBackupTableSharpW100';

export default IconMaterialBackupTableSharpW100;
