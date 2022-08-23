import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorFrontRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFrontRoundedFilled'
      short_name='DoorFront'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H5V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM14 13Q14.425 13 14.713 12.712Q15 12.425 15 12Q15 11.575 14.713 11.287Q14.425 11 14 11Q13.575 11 13.288 11.287Q13 11.575 13 12Q13 12.425 13.288 12.712Q13.575 13 14 13Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontRoundedFilled.displayName = 'AmauiIconMaterialDoorFrontRoundedFilled';

export default IconMaterialDoorFrontRoundedFilled;
