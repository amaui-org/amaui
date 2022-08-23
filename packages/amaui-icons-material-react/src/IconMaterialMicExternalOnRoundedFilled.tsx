import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicExternalOnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOnRoundedFilled'
      short_name='MicExternalOn'

      {...props}
    >
      <path d="M4.8 7Q4.425 6.575 4.213 6.075Q4 5.575 4 5Q4 3.75 4.875 2.875Q5.75 2 7 2Q8.25 2 9.125 2.875Q10 3.75 10 5Q10 5.575 9.788 6.075Q9.575 6.575 9.2 7ZM10 22Q8.35 22 7.175 20.825Q6 19.65 6 18H5.45Q5.25 18 5.113 17.875Q4.975 17.75 4.95 17.55L4.1 9.1Q4.05 8.65 4.35 8.325Q4.65 8 5.1 8H8.9Q9.35 8 9.65 8.325Q9.95 8.65 9.9 9.1L9.05 17.55Q9.025 17.75 8.887 17.875Q8.75 18 8.55 18H8Q8 18.825 8.588 19.413Q9.175 20 10 20Q10.825 20 11.413 19.413Q12 18.825 12 18V6Q12 4.35 13.175 3.175Q14.35 2 16 2Q17.65 2 18.825 3.175Q20 4.35 20 6V21Q20 21.425 19.712 21.712Q19.425 22 19 22Q18.575 22 18.288 21.712Q18 21.425 18 21V6Q18 5.175 17.413 4.588Q16.825 4 16 4Q15.175 4 14.588 4.588Q14 5.175 14 6V18Q14 19.65 12.825 20.825Q11.65 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOnRoundedFilled.displayName = 'AmauiIconMaterialMicExternalOnRoundedFilled';

export default IconMaterialMicExternalOnRoundedFilled;
