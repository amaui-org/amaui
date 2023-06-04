import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupW100Filled'

      short_name='Backup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 18.7H6.5q-1.75 0-2.975-1.225T2.3 14.5q0-1.65 1.175-2.925T6.35 10.3q.25-2.15 1.863-3.575Q9.825 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.925 2.275-.925.925-2.275.925h-6.15v-7.5l2.25 2.25.5-.475-3.1-3.1-3.1 3.1.5.475 2.25-2.25Z"/>
    </Icon>
  );
});

IconMaterialBackupW100Filled.displayName = 'AmauiIconMaterialBackupW100Filled';

export default IconMaterialBackupW100Filled;
