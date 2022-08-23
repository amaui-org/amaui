import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledSharpW100Filled'
      short_name='PhoneEnabled'

      {...props}
    >
      <path d="M5.375 19.55Q5.15 19.55 4.863 19.538Q4.575 19.525 4.35 19.475V15.575L7.7 14.875L10.25 17.55Q12.6 16.25 14.325 14.55Q16.05 12.85 17.45 10.5L14.8 8.075L15.625 4.3H19.575Q19.625 4.55 19.638 4.825Q19.65 5.1 19.65 5.35Q19.65 7.775 18.338 10.312Q17.025 12.85 14.95 14.913Q12.875 16.975 10.35 18.275Q7.825 19.575 5.375 19.55Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledSharpW100Filled.displayName = 'AmauiIconMaterialPhoneEnabledSharpW100Filled';

export default IconMaterialPhoneEnabledSharpW100Filled;
