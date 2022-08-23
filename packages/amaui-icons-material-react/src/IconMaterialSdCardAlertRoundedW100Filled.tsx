import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardAlertRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertRoundedW100Filled'
      short_name='SdCardAlert'

      {...props}
    >
      <path d="M12 13.55Q12.15 13.55 12.25 13.45Q12.35 13.35 12.35 13.2V9.35Q12.35 9.2 12.25 9.1Q12.15 9 12 9Q11.85 9 11.75 9.1Q11.65 9.2 11.65 9.35V13.2Q11.65 13.35 11.75 13.45Q11.85 13.55 12 13.55ZM12 16Q12.275 16 12.438 15.812Q12.6 15.625 12.6 15.4Q12.6 15.175 12.438 14.987Q12.275 14.8 12 14.8Q11.725 14.8 11.562 14.987Q11.4 15.175 11.4 15.4Q11.4 15.625 11.562 15.812Q11.725 16 12 16ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V9.175Q5.3 8.875 5.413 8.6Q5.525 8.325 5.75 8.1L10.1 3.75Q10.325 3.525 10.6 3.412Q10.875 3.3 11.175 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertRoundedW100Filled.displayName = 'AmauiIconMaterialSdCardAlertRoundedW100Filled';

export default IconMaterialSdCardAlertRoundedW100Filled;
