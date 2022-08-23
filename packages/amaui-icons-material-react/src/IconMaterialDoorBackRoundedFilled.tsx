import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorBackRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackRoundedFilled'
      short_name='DoorBack'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H5V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM10 13Q10.425 13 10.713 12.712Q11 12.425 11 12Q11 11.575 10.713 11.287Q10.425 11 10 11Q9.575 11 9.288 11.287Q9 11.575 9 12Q9 12.425 9.288 12.712Q9.575 13 10 13Z"/>
    </Icon>
  );
});

IconMaterialDoorBackRoundedFilled.displayName = 'AmauiIconMaterialDoorBackRoundedFilled';

export default IconMaterialDoorBackRoundedFilled;
