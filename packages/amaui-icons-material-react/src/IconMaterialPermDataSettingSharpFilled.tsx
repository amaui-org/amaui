import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermDataSettingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDataSettingSharpFilled'
      short_name='PermDataSetting'

      {...props}
    >
      <path d="M17.025 23 16.725 21.5Q16.425 21.375 16.163 21.238Q15.9 21.1 15.625 20.9L14.175 21.35L13.175 19.65L14.325 18.65Q14.275 18.35 14.275 18Q14.275 17.65 14.325 17.35L13.175 16.35L14.175 14.65L15.625 15.1Q15.9 14.9 16.163 14.762Q16.425 14.625 16.725 14.5L17.025 13H19.025L19.325 14.5Q19.625 14.625 19.888 14.762Q20.15 14.9 20.425 15.1L21.875 14.65L22.875 16.35L21.725 17.35Q21.775 17.65 21.775 18Q21.775 18.35 21.725 18.65L22.875 19.65L21.875 21.35L20.425 20.9Q20.15 21.1 19.888 21.238Q19.625 21.375 19.325 21.5L19.025 23ZM18.025 20Q18.85 20 19.438 19.413Q20.025 18.825 20.025 18Q20.025 17.175 19.438 16.587Q18.85 16 18.025 16Q17.2 16 16.613 16.587Q16.025 17.175 16.025 18Q16.025 18.825 16.613 19.413Q17.2 20 18.025 20ZM0.025 20 20.025 0V11H18.025Q15.075 11 13.125 13.025Q11.175 15.05 11.175 18V20Z"/>
    </Icon>
  );
});

IconMaterialPermDataSettingSharpFilled.displayName = 'AmauiIconMaterialPermDataSettingSharpFilled';

export default IconMaterialPermDataSettingSharpFilled;
