import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendToMobileRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileRoundedW100Filled'
      short_name='SendToMobile'

      {...props}
    >
      <path d="M16.75 14.85Q16.625 14.725 16.625 14.6Q16.625 14.475 16.75 14.35L18.75 12.35H13Q12.85 12.35 12.75 12.25Q12.65 12.15 12.65 12Q12.65 11.85 12.75 11.75Q12.85 11.65 13 11.65H18.75L16.75 9.65Q16.65 9.55 16.638 9.412Q16.625 9.275 16.75 9.15Q16.875 9.025 17 9.025Q17.125 9.025 17.25 9.15L19.575 11.475Q19.7 11.6 19.75 11.725Q19.8 11.85 19.8 12Q19.8 12.15 19.75 12.275Q19.7 12.4 19.575 12.525L17.25 14.85Q17.15 14.95 17.013 14.962Q16.875 14.975 16.75 14.85ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V6.9H17V5.35H7V18.65H17V17.1H17.7V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileRoundedW100Filled.displayName = 'AmauiIconMaterialSendToMobileRoundedW100Filled';

export default IconMaterialSendToMobileRoundedW100Filled;
