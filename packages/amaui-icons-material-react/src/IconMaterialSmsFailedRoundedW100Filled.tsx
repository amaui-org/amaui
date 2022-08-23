import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsFailedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedRoundedW100Filled'
      short_name='SmsFailed'

      {...props}
    >
      <path d="M11.65 5.85V11.25Q11.65 11.4 11.75 11.5Q11.85 11.6 12 11.6Q12.15 11.6 12.25 11.5Q12.35 11.4 12.35 11.25V5.85Q12.35 5.7 12.25 5.6Q12.15 5.5 12 5.5Q11.85 5.5 11.75 5.6Q11.65 5.7 11.65 5.85ZM12 14.25Q12.225 14.25 12.363 14.1Q12.5 13.95 12.5 13.75Q12.5 13.525 12.363 13.387Q12.225 13.25 12 13.25Q11.8 13.25 11.65 13.387Q11.5 13.525 11.5 13.75Q11.5 13.95 11.65 14.1Q11.8 14.25 12 14.25ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedRoundedW100Filled.displayName = 'AmauiIconMaterialSmsFailedRoundedW100Filled';

export default IconMaterialSmsFailedRoundedW100Filled;
