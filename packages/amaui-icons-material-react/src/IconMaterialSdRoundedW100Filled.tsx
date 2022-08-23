import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdRoundedW100Filled'
      short_name='Sd'

      {...props}
    >
      <path d="M7.4 14.6H10.4Q10.675 14.6 10.838 14.438Q11 14.275 11 14V12.25Q11 11.975 10.838 11.812Q10.675 11.65 10.4 11.65H7.5V10.1H10.3V10.6H11V10Q11 9.725 10.838 9.562Q10.675 9.4 10.4 9.4H7.4Q7.125 9.4 6.963 9.562Q6.8 9.725 6.8 10V11.75Q6.8 12.025 6.963 12.188Q7.125 12.35 7.4 12.35H10.3V13.9H7.5V13.4H6.8V14Q6.8 14.275 6.963 14.438Q7.125 14.6 7.4 14.6ZM13 14.6H16.1Q16.55 14.6 16.875 14.275Q17.2 13.95 17.2 13.5V10.5Q17.2 10.05 16.875 9.725Q16.55 9.4 16.1 9.4H13ZM13.7 13.9H16.1Q16.25 13.9 16.375 13.775Q16.5 13.65 16.5 13.5V10.5Q16.5 10.35 16.375 10.225Q16.25 10.1 16.1 10.1H13.7ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialSdRoundedW100Filled.displayName = 'AmauiIconMaterialSdRoundedW100Filled';

export default IconMaterialSdRoundedW100Filled;
