import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessSharpW100'
      short_name='SettingsBrightness'

      {...props}
    >
      <path d="M12 15.65 12.95 14.7H14.7V12.95L15.65 12L14.7 11.05V9.3H12.95L12 8.35L11.05 9.3H9.3V11.05L8.35 12L9.3 12.95V14.7H11.05ZM12 14.35V9.65Q12.975 9.65 13.663 10.337Q14.35 11.025 14.35 12Q14.35 12.975 13.663 13.662Q12.975 14.35 12 14.35ZM3.3 18.7V5.3H20.7V18.7ZM4 18V6ZM4 18H20V6H4Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsBrightnessSharpW100;
