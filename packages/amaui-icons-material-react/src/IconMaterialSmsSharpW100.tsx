import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsSharpW100'
      short_name='Sms'

      {...props}
    >
      <path d="M8 10.7Q8.275 10.7 8.488 10.487Q8.7 10.275 8.7 10Q8.7 9.725 8.488 9.512Q8.275 9.3 8 9.3Q7.725 9.3 7.513 9.512Q7.3 9.725 7.3 10Q7.3 10.275 7.513 10.487Q7.725 10.7 8 10.7ZM12 10.7Q12.275 10.7 12.488 10.487Q12.7 10.275 12.7 10Q12.7 9.725 12.488 9.512Q12.275 9.3 12 9.3Q11.725 9.3 11.513 9.512Q11.3 9.725 11.3 10Q11.3 10.275 11.513 10.487Q11.725 10.7 12 10.7ZM16 10.7Q16.275 10.7 16.488 10.487Q16.7 10.275 16.7 10Q16.7 9.725 16.488 9.512Q16.275 9.3 16 9.3Q15.725 9.3 15.513 9.512Q15.3 9.725 15.3 10Q15.3 10.275 15.513 10.487Q15.725 10.7 16 10.7ZM3.3 19.5V3.3H20.7V16.7H6.1ZM4 17.8 5.8 16H20V4H4ZM4 17.8V4V16Z"/>
    </Icon>
  );
});

IconMaterialSmsSharpW100.displayName = 'AmauiIconMaterialSmsSharpW100';

export default IconMaterialSmsSharpW100;
