import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupW100'

      short_name='Backup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.725 1.238-2.963Q4.775 10.3 6.35 10.3q.25-2.15 1.863-3.575Q9.825 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.9 2.275-.9.925-2.25.925h-5.4q-.65 0-1.075-.425-.425-.425-.425-1.075v-6L9.4 13.45l-.5-.475 3.1-3.1 3.1 3.1-.5.475-2.25-2.25v6q0 .3.25.55.25.25.55.25h5.35q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6 9.925 6 8.463 7.462 7 8.925 7 11h-.55q-1.375 0-2.413 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18H9v.7Zm5.5-6.35Z"/>
    </Icon>
  );
});

IconMaterialBackupW100.displayName = 'AmauiIconMaterialBackupW100';

export default IconMaterialBackupW100;
