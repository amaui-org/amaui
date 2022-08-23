import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessRoundedW100Filled'
      short_name='SettingsBrightness'

      {...props}
    >
      <path d="M11.05 14.7 11.475 15.125Q11.7 15.35 12 15.35Q12.3 15.35 12.525 15.125L12.95 14.7H13.95Q14.275 14.7 14.488 14.487Q14.7 14.275 14.7 13.95V12.95L15.125 12.525Q15.35 12.3 15.35 12Q15.35 11.7 15.125 11.475L14.7 11.05V10.05Q14.7 9.725 14.488 9.512Q14.275 9.3 13.95 9.3H12.95L12.525 8.875Q12.3 8.65 12 8.65Q11.7 8.65 11.475 8.875L11.05 9.3H10.05Q9.725 9.3 9.513 9.512Q9.3 9.725 9.3 10.05V11.05L8.875 11.475Q8.65 11.7 8.65 12Q8.65 12.3 8.875 12.525L9.3 12.95V13.95Q9.3 14.275 9.513 14.487Q9.725 14.7 10.05 14.7ZM12 14.35V9.65Q12.975 9.65 13.663 10.337Q14.35 11.025 14.35 12Q14.35 12.975 13.663 13.662Q12.975 14.35 12 14.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessRoundedW100Filled.displayName = 'AmauiIconMaterialSettingsBrightnessRoundedW100Filled';

export default IconMaterialSettingsBrightnessRoundedW100Filled;
