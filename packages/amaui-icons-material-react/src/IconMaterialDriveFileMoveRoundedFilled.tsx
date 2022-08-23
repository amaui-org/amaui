import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFileMoveRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveRoundedFilled'
      short_name='DriveFileMove'

      {...props}
    >
      <path d="M12.2 14 11.275 14.925Q11 15.2 11 15.625Q11 16.05 11.275 16.325Q11.55 16.6 11.975 16.6Q12.4 16.6 12.675 16.325L15.3 13.7Q15.575 13.425 15.575 13Q15.575 12.575 15.3 12.3L12.675 9.675Q12.4 9.4 11.975 9.4Q11.55 9.4 11.275 9.675Q11 9.95 11 10.375Q11 10.8 11.275 11.075L12.2 12H9Q8.575 12 8.288 12.287Q8 12.575 8 13Q8 13.425 8.288 13.712Q8.575 14 9 14ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveRoundedFilled.displayName = 'AmauiIconMaterialDriveFileMoveRoundedFilled';

export default IconMaterialDriveFileMoveRoundedFilled;
