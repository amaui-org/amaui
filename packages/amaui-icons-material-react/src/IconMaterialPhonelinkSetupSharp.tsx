import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkSetupSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkSetupSharp'
      short_name='PhonelinkSetup'

      {...props}
    >
      <path d="M7 21H17V20H7ZM7 4H17V3H7ZM5 23V1H19V7H17V6H7V18H17V17H19V23ZM17 16 16.85 14.75Q16.65 14.675 16.5 14.587Q16.35 14.5 16.2 14.35L15.05 14.85L14.05 13.1L15.05 12.35Q15 12.15 15 11.975Q15 11.8 15.05 11.6L14.05 10.85L15.1 9.15L16.2 9.6Q16.35 9.475 16.5 9.4Q16.65 9.325 16.85 9.25L17 8H19L19.15 9.25Q19.35 9.325 19.5 9.4Q19.65 9.475 19.8 9.6L20.9 9.15L21.95 10.85L20.95 11.6Q21 11.8 21 11.975Q21 12.15 20.95 12.35L21.95 13.1L20.95 14.85L19.8 14.35Q19.65 14.5 19.5 14.587Q19.35 14.675 19.15 14.75L19 16ZM18 13.5Q18.65 13.5 19.075 13.075Q19.5 12.65 19.5 12Q19.5 11.35 19.075 10.925Q18.65 10.5 18 10.5Q17.35 10.5 16.925 10.925Q16.5 11.35 16.5 12Q16.5 12.65 16.925 13.075Q17.35 13.5 18 13.5ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkSetupSharp.displayName = 'AmauiIconMaterialPhonelinkSetupSharp';

export default IconMaterialPhonelinkSetupSharp;
