import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsSharp'
      short_name='Sms'

      {...props}
    >
      <path d="M8 11Q8.425 11 8.713 10.712Q9 10.425 9 10Q9 9.575 8.713 9.287Q8.425 9 8 9Q7.575 9 7.287 9.287Q7 9.575 7 10Q7 10.425 7.287 10.712Q7.575 11 8 11ZM12 11Q12.425 11 12.713 10.712Q13 10.425 13 10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10Q11 10.425 11.288 10.712Q11.575 11 12 11ZM16 11Q16.425 11 16.712 10.712Q17 10.425 17 10Q17 9.575 16.712 9.287Q16.425 9 16 9Q15.575 9 15.288 9.287Q15 9.575 15 10Q15 10.425 15.288 10.712Q15.575 11 16 11ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  );
});

IconMaterialSmsSharp.displayName = 'AmauiIconMaterialSmsSharp';

export default IconMaterialSmsSharp;
