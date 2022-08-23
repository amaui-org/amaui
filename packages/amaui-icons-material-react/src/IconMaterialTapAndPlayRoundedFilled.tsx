import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapAndPlayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayRoundedFilled'
      short_name='TapAndPlay'

      {...props}
    >
      <path d="M16 23V21H17Q17 21 17 21Q17 21 17 21V6H7V12H5V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM5 23V21Q5.825 21 6.412 21.587Q7 22.175 7 23ZM10 23Q9.625 23 9.312 22.725Q9 22.45 8.875 22.025Q8.6 20.95 7.825 20.175Q7.05 19.4 5.975 19.125Q5.55 19 5.275 18.7Q5 18.4 5 18Q5 17.575 5.287 17.3Q5.575 17.025 5.975 17.075Q7.875 17.4 9.238 18.762Q10.6 20.125 10.925 22.025Q10.975 22.425 10.7 22.712Q10.425 23 10 23ZM14 23Q13.6 23 13.3 22.712Q13 22.425 12.95 22Q12.6 19.275 10.663 17.337Q8.725 15.4 6 15.05Q5.575 15 5.287 14.712Q5 14.425 5 14Q5 13.575 5.3 13.287Q5.6 13 6 13.05Q9.575 13.4 12.088 15.912Q14.6 18.425 14.95 22Q15 22.4 14.713 22.7Q14.425 23 14 23Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayRoundedFilled.displayName = 'AmauiIconMaterialTapAndPlayRoundedFilled';

export default IconMaterialTapAndPlayRoundedFilled;
