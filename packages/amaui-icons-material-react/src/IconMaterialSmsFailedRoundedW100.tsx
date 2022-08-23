import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmsFailedRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedRoundedW100'
      short_name='SmsFailed'

      {...props}
    >
      <path d="M11.65 5.85V11.25Q11.65 11.4 11.75 11.5Q11.85 11.6 12 11.6Q12.15 11.6 12.25 11.5Q12.35 11.4 12.35 11.25V5.85Q12.35 5.7 12.25 5.6Q12.15 5.5 12 5.5Q11.85 5.5 11.75 5.6Q11.65 5.7 11.65 5.85ZM12 14.25Q12.225 14.25 12.363 14.113Q12.5 13.975 12.5 13.75Q12.5 13.525 12.363 13.387Q12.225 13.25 12 13.25Q11.775 13.25 11.637 13.387Q11.5 13.525 11.5 13.75Q11.5 13.975 11.637 14.113Q11.775 14.25 12 14.25ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7ZM4 17.8 5.8 16H19.2Q19.55 16 19.775 15.775Q20 15.55 20 15.2V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8ZM4 4.8Q4 4.45 4 4.225Q4 4 4 4Q4 4 4 4.225Q4 4.45 4 4.8V15.2Q4 15.55 4 15.775Q4 16 4 16V17.8Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedRoundedW100.displayName = 'AmauiIconMaterialSmsFailedRoundedW100';

export default IconMaterialSmsFailedRoundedW100;
