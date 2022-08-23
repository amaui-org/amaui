import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackupTableRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTableRoundedFilled'
      short_name='BackupTable'

      {...props}
    >
      <path d="M8 16H13V11H8V16Q8 16 8 16Q8 16 8 16ZM8 9H20V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4ZM15 16H20Q20 16 20 16Q20 16 20 16V11H15ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialBackupTableRoundedFilled.displayName = 'AmauiIconMaterialBackupTableRoundedFilled';

export default IconMaterialBackupTableRoundedFilled;
