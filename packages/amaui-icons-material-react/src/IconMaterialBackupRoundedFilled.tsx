import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackupRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupRoundedFilled'
      short_name='Backup'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.875 6.85 7.75 5.425Q9.625 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20H13V12.85L13.9 13.725Q14.175 14 14.588 14Q15 14 15.3 13.7Q15.575 13.425 15.575 13Q15.575 12.575 15.3 12.3L12.7 9.7Q12.4 9.4 12 9.4Q11.6 9.4 11.3 9.7L8.7 12.3Q8.425 12.575 8.413 12.987Q8.4 13.4 8.7 13.7Q8.975 13.975 9.387 13.988Q9.8 14 10.1 13.725L11 12.85V20Z"/>
    </Icon>
  );
});

IconMaterialBackupRoundedFilled.displayName = 'AmauiIconMaterialBackupRoundedFilled';

export default IconMaterialBackupRoundedFilled;
