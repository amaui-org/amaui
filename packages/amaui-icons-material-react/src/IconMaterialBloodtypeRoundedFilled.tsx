import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBloodtypeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeRoundedFilled'
      short_name='Bloodtype'

      {...props}
    >
      <path d="M10 18H14Q14.425 18 14.713 17.712Q15 17.425 15 17Q15 16.575 14.713 16.288Q14.425 16 14 16H10Q9.575 16 9.288 16.288Q9 16.575 9 17Q9 17.425 9.288 17.712Q9.575 18 10 18ZM12 15Q12.425 15 12.713 14.712Q13 14.425 13 14V13H14Q14.425 13 14.713 12.712Q15 12.425 15 12Q15 11.575 14.713 11.287Q14.425 11 14 11H13V10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10V11H10Q9.575 11 9.288 11.287Q9 11.575 9 12Q9 12.425 9.288 12.712Q9.575 13 10 13H11V14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM12 22Q8.825 22 6.413 19.788Q4 17.575 4 13.8Q4 11.425 5.8 8.65Q7.6 5.875 11.25 2.65Q11.4 2.525 11.6 2.45Q11.8 2.375 12 2.375Q12.2 2.375 12.4 2.45Q12.6 2.525 12.75 2.65Q16.4 5.875 18.2 8.65Q20 11.425 20 13.8Q20 17.575 17.587 19.788Q15.175 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeRoundedFilled.displayName = 'AmauiIconMaterialBloodtypeRoundedFilled';

export default IconMaterialBloodtypeRoundedFilled;
