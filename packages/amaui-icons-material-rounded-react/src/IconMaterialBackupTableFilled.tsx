import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackupTableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTableFilled'

      short_name='BackupTable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16h5v-5H8v5Zm0-7h12V4H8Zm7 7h5v-5h-5Zm-7 2q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialBackupTableFilled.displayName = 'AmauiIconMaterialBackupTableFilled';

export default IconMaterialBackupTableFilled;
