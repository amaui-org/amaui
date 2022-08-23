import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUsbSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbSharp'
      short_name='Usb'

      {...props}
    >
      <path d="M12 22Q11.175 22 10.588 21.413Q10 20.825 10 20Q10 19.475 10.275 19.025Q10.55 18.575 11 18.3V16H8Q7.175 16 6.588 15.412Q6 14.825 6 14V11.7Q5.55 11.475 5.275 11.025Q5 10.575 5 10Q5 9.175 5.588 8.587Q6.175 8 7 8Q7.825 8 8.412 8.587Q9 9.175 9 10Q9 10.575 8.725 11Q8.45 11.425 8 11.7V14Q8 14 8 14Q8 14 8 14H11V6H9L12 2L15 6H13V14H16Q16 14 16 14Q16 14 16 14V12H15V8H19V12H18V14Q18 14.825 17.413 15.412Q16.825 16 16 16H13V18.3Q13.475 18.55 13.738 19Q14 19.45 14 20Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialUsbSharp.displayName = 'AmauiIconMaterialUsbSharp';

export default IconMaterialUsbSharp;
