import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaymentsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsRounded'
      short_name='Payments'

      {...props}
    >
      <path d="M14 13Q12.75 13 11.875 12.125Q11 11.25 11 10Q11 8.75 11.875 7.875Q12.75 7 14 7Q15.25 7 16.125 7.875Q17 8.75 17 10Q17 11.25 16.125 12.125Q15.25 13 14 13ZM7 16Q6.175 16 5.588 15.412Q5 14.825 5 14V6Q5 5.175 5.588 4.588Q6.175 4 7 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V14Q23 14.825 22.413 15.412Q21.825 16 21 16ZM9 14H19Q19 13.175 19.587 12.587Q20.175 12 21 12V8Q20.175 8 19.587 7.412Q19 6.825 19 6H9Q9 6.825 8.412 7.412Q7.825 8 7 8V12Q7.825 12 8.412 12.587Q9 13.175 9 14ZM3 20Q2.175 20 1.588 19.413Q1 18.825 1 18V8Q1 7.575 1.288 7.287Q1.575 7 2 7Q2.425 7 2.713 7.287Q3 7.575 3 8V18Q3 18 3 18Q3 18 3 18H19Q19.425 18 19.712 18.288Q20 18.575 20 19Q20 19.425 19.712 19.712Q19.425 20 19 20ZM7 14Q7 14 7 14Q7 14 7 14V6Q7 6 7 6Q7 6 7 6Q7 6 7 6Q7 6 7 6V14Q7 14 7 14Q7 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialPaymentsRounded.displayName = 'AmauiIconMaterialPaymentsRounded';

export default IconMaterialPaymentsRounded;
