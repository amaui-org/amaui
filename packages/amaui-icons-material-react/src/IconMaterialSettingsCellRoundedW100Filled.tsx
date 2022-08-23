import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsCellRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCellRoundedW100Filled'
      short_name='SettingsCell'

      {...props}
    >
      <path d="M8.55 18.7Q7.9 18.7 7.475 18.275Q7.05 17.85 7.05 17.2V2.8Q7.05 2.15 7.475 1.725Q7.9 1.3 8.55 1.3H15.45Q16.1 1.3 16.525 1.725Q16.95 2.15 16.95 2.8V17.2Q16.95 17.85 16.525 18.275Q16.1 18.7 15.45 18.7ZM7.75 15.65H16.25V4.35H7.75ZM8 23.7Q7.725 23.7 7.513 23.487Q7.3 23.275 7.3 23Q7.3 22.725 7.513 22.513Q7.725 22.3 8 22.3Q8.275 22.3 8.488 22.513Q8.7 22.725 8.7 23Q8.7 23.275 8.488 23.487Q8.275 23.7 8 23.7ZM12 23.7Q11.725 23.7 11.513 23.487Q11.3 23.275 11.3 23Q11.3 22.725 11.513 22.513Q11.725 22.3 12 22.3Q12.275 22.3 12.488 22.513Q12.7 22.725 12.7 23Q12.7 23.275 12.488 23.487Q12.275 23.7 12 23.7ZM16 23.7Q15.725 23.7 15.513 23.487Q15.3 23.275 15.3 23Q15.3 22.725 15.513 22.513Q15.725 22.3 16 22.3Q16.275 22.3 16.488 22.513Q16.7 22.725 16.7 23Q16.7 23.275 16.488 23.487Q16.275 23.7 16 23.7Z"/>
    </Icon>
  );
});

IconMaterialSettingsCellRoundedW100Filled.displayName = 'AmauiIconMaterialSettingsCellRoundedW100Filled';

export default IconMaterialSettingsCellRoundedW100Filled;
