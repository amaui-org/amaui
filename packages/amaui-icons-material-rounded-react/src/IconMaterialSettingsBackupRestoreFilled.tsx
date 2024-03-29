import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBackupRestoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBackupRestoreFilled'

      short_name='SettingsBackupRestore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0 7q-3.125 0-5.525-1.875Q4.075 17.25 3.3 14.3q-.125-.525.163-.913Q3.75 13 4.25 13q.35 0 .638.25.287.25.387.6.575 2.275 2.45 3.712Q9.6 19 12 19q2.925 0 4.962-2.038Q19 14.925 19 12t-2.038-4.963Q14.925 5 12 5q-1.725 0-3.225.8T6.25 8H8q.425 0 .713.287Q9 8.575 9 9t-.287.712Q8.425 10 8 10H4q-.425 0-.712-.288Q3 9.425 3 9V5q0-.425.288-.713Q3.575 4 4 4t.713.287Q5 4.575 5 5v1.35q1.275-1.6 3.113-2.475Q9.95 3 12 3q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q21 10.125 21 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialSettingsBackupRestoreFilled.displayName = 'AmauiIconMaterialSettingsBackupRestoreFilled';

export default IconMaterialSettingsBackupRestoreFilled;
