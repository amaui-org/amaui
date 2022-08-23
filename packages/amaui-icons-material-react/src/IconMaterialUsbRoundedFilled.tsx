import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUsbRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbRoundedFilled'
      short_name='Usb'

      {...props}
    >
      <path d="M12 22Q11.175 22 10.588 21.413Q10 20.825 10 20Q10 19.475 10.275 19.025Q10.55 18.575 11 18.3V16H8Q7.175 16 6.588 15.412Q6 14.825 6 14V11.7Q5.55 11.475 5.275 11.025Q5 10.575 5 10Q5 9.175 5.588 8.587Q6.175 8 7 8Q7.825 8 8.412 8.587Q9 9.175 9 10Q9 10.575 8.725 11Q8.45 11.425 8 11.7V14Q8 14 8 14Q8 14 8 14H11V6H10Q9.7 6 9.55 5.725Q9.4 5.45 9.6 5.2L11.6 2.525Q11.65 2.475 12 2.325Q12.125 2.325 12.225 2.375Q12.325 2.425 12.4 2.525L14.4 5.2Q14.6 5.45 14.45 5.725Q14.3 6 14 6H13V14H16Q16 14 16 14Q16 14 16 14V12H15.5Q15.3 12 15.15 11.85Q15 11.7 15 11.5V8.5Q15 8.3 15.15 8.15Q15.3 8 15.5 8H18.5Q18.7 8 18.85 8.15Q19 8.3 19 8.5V11.5Q19 11.7 18.85 11.85Q18.7 12 18.5 12H18V14Q18 14.825 17.413 15.412Q16.825 16 16 16H13V18.3Q13.475 18.55 13.738 19Q14 19.45 14 20Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialUsbRoundedFilled.displayName = 'AmauiIconMaterialUsbRoundedFilled';

export default IconMaterialUsbRoundedFilled;
