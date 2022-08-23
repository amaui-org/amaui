import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUsbOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbOffSharp'
      short_name='UsbOff'

      {...props}
    >
      <path d="M19.775 22.625 13.15 16H13V18.3Q13.475 18.55 13.738 19Q14 19.45 14 20Q14 20.825 13.413 21.413Q12.825 22 12 22Q11.175 22 10.588 21.413Q10 20.825 10 20Q10 19.475 10.275 19.025Q10.55 18.575 11 18.3V16H8Q7.175 16 6.588 15.412Q6 14.825 6 14V11.7Q5.55 11.475 5.275 11.025Q5 10.575 5 10Q5 9.55 5.175 9.175Q5.35 8.8 5.675 8.525L1.375 4.225L2.8 2.8L21.2 21.2ZM17.775 14.925 16 13.15V12H15V8H19V12H18V14Q18 14.25 17.95 14.488Q17.9 14.725 17.775 14.925ZM8 14H11V13.85L8.475 11.325Q8.375 11.45 8.25 11.537Q8.125 11.625 8 11.7V14Q8 14 8 14Q8 14 8 14ZM13 10.15 11 8.15V6H9L12 2L15 6H13Z"/>
    </Icon>
  );
});

IconMaterialUsbOffSharp.displayName = 'AmauiIconMaterialUsbOffSharp';

export default IconMaterialUsbOffSharp;
