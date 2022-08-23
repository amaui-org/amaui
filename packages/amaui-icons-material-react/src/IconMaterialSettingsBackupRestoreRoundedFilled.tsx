import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsBackupRestoreRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBackupRestoreRoundedFilled'
      short_name='SettingsBackupRestore'

      {...props}
    >
      <path d="M12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14ZM12 21Q8.875 21 6.475 19.125Q4.075 17.25 3.3 14.3Q3.175 13.775 3.463 13.387Q3.75 13 4.25 13Q4.6 13 4.888 13.25Q5.175 13.5 5.275 13.85Q5.85 16.125 7.725 17.562Q9.6 19 12 19Q14.925 19 16.962 16.962Q19 14.925 19 12Q19 9.075 16.962 7.037Q14.925 5 12 5Q10.275 5 8.775 5.8Q7.275 6.6 6.25 8H8Q8.425 8 8.713 8.287Q9 8.575 9 9Q9 9.425 8.713 9.712Q8.425 10 8 10H4Q3.575 10 3.288 9.712Q3 9.425 3 9V5Q3 4.575 3.288 4.287Q3.575 4 4 4Q4.425 4 4.713 4.287Q5 4.575 5 5V6.35Q6.275 4.75 8.113 3.875Q9.95 3 12 3Q13.875 3 15.513 3.712Q17.15 4.425 18.363 5.637Q19.575 6.85 20.288 8.487Q21 10.125 21 12Q21 13.875 20.288 15.512Q19.575 17.15 18.363 18.362Q17.15 19.575 15.513 20.288Q13.875 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialSettingsBackupRestoreRoundedFilled.displayName = 'AmauiIconMaterialSettingsBackupRestoreRoundedFilled';

export default IconMaterialSettingsBackupRestoreRoundedFilled;
