import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupFilled'

      short_name='Backup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20H6.5q-2.275 0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25 9.15q.625-2.3 2.5-3.725Q9.625 4 12 4q2.925 0 4.962 2.037Q19 8.075 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20H13v-7.15l1.6 1.55L16 13l-4-4-4 4 1.4 1.4 1.6-1.55Z"/>
    </Icon>
  );
});

IconMaterialBackupFilled.displayName = 'AmauiIconMaterialBackupFilled';

export default IconMaterialBackupFilled;
