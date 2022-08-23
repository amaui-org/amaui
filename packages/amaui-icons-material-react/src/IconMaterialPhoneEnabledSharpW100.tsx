import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledSharpW100'
      short_name='PhoneEnabled'

      {...props}
    >
      <path d="M5.375 19.55Q5.15 19.55 4.863 19.538Q4.575 19.525 4.35 19.475V15.575L7.7 14.875L10.25 17.55Q12.6 16.25 14.325 14.55Q16.05 12.85 17.45 10.5L14.8 8.075L15.625 4.3H19.575Q19.625 4.55 19.638 4.825Q19.65 5.1 19.65 5.35Q19.65 7.775 18.338 10.312Q17.025 12.85 14.95 14.913Q12.875 16.975 10.35 18.275Q7.825 19.575 5.375 19.55ZM17.8 9.85Q18.3 8.75 18.663 7.475Q19.025 6.2 18.925 5H16.2L15.575 7.85ZM9.6 17.85 7.45 15.65 5.05 16.125V18.825Q6.025 18.95 7.375 18.625Q8.725 18.3 9.6 17.85ZM17.8 9.85Q17.8 9.85 17.8 9.85Q17.8 9.85 17.8 9.85ZM9.6 17.85Q9.6 17.85 9.6 17.85Q9.6 17.85 9.6 17.85Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledSharpW100.displayName = 'AmauiIconMaterialPhoneEnabledSharpW100';

export default IconMaterialPhoneEnabledSharpW100;
