import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImagesearchRollerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRollerRoundedFilled'
      short_name='ImagesearchRoller'

      {...props}
    >
      <path d="M15 23H11Q10.575 23 10.288 22.712Q10 22.425 10 22V16Q10 15.575 10.288 15.287Q10.575 15 11 15H12V12Q12 12 12 12Q12 12 12 12H4Q3.175 12 2.588 11.412Q2 10.825 2 10V6Q2 5.175 2.588 4.588Q3.175 4 4 4H6V3Q6 2.575 6.287 2.287Q6.575 2 7 2H19Q19.425 2 19.712 2.287Q20 2.575 20 3V7Q20 7.425 19.712 7.713Q19.425 8 19 8H7Q6.575 8 6.287 7.713Q6 7.425 6 7V6H4Q4 6 4 6Q4 6 4 6V10Q4 10 4 10Q4 10 4 10H12Q12.825 10 13.413 10.587Q14 11.175 14 12V15H15Q15.425 15 15.713 15.287Q16 15.575 16 16V22Q16 22.425 15.713 22.712Q15.425 23 15 23Z"/>
    </Icon>
  );
});

IconMaterialImagesearchRollerRoundedFilled.displayName = 'AmauiIconMaterialImagesearchRollerRoundedFilled';

export default IconMaterialImagesearchRollerRoundedFilled;
