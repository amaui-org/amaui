import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsFailedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedRoundedFilled'
      short_name='SmsFailed'

      {...props}
    >
      <path d="M11 6V10Q11 10.425 11.288 10.712Q11.575 11 12 11Q12.425 11 12.713 10.712Q13 10.425 13 10V6Q13 5.575 12.713 5.287Q12.425 5 12 5Q11.575 5 11.288 5.287Q11 5.575 11 6ZM12 15Q12.425 15 12.713 14.712Q13 14.425 13 14Q13 13.575 12.713 13.287Q12.425 13 12 13Q11.575 13 11.288 13.287Q11 13.575 11 14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedRoundedFilled.displayName = 'AmauiIconMaterialSmsFailedRoundedFilled';

export default IconMaterialSmsFailedRoundedFilled;
