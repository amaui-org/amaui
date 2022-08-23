import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadsetMicRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMicRoundedFilled'
      short_name='HeadsetMic'

      {...props}
    >
      <path d="M13 23Q12.575 23 12.288 22.712Q12 22.425 12 22Q12 21.575 12.288 21.288Q12.575 21 13 21H19Q19 21 19 21Q19 21 19 21V20H17Q16.175 20 15.588 19.413Q15 18.825 15 18V14Q15 13.175 15.588 12.587Q16.175 12 17 12H19V11Q19 8.1 16.95 6.05Q14.9 4 12 4Q9.1 4 7.05 6.05Q5 8.1 5 11V12H7Q7.825 12 8.412 12.587Q9 13.175 9 14V18Q9 18.825 8.412 19.413Q7.825 20 7 20H5Q4.175 20 3.587 19.413Q3 18.825 3 18V11Q3 9.15 3.712 7.512Q4.425 5.875 5.65 4.65Q6.875 3.425 8.512 2.712Q10.15 2 12 2Q13.85 2 15.488 2.712Q17.125 3.425 18.35 4.65Q19.575 5.875 20.288 7.512Q21 9.15 21 11V21Q21 21.825 20.413 22.413Q19.825 23 19 23Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicRoundedFilled.displayName = 'AmauiIconMaterialHeadsetMicRoundedFilled';

export default IconMaterialHeadsetMicRoundedFilled;
