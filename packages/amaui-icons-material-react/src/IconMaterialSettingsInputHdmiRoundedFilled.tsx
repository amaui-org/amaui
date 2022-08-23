import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmiRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiRoundedFilled'
      short_name='SettingsInputHdmi'

      {...props}
    >
      <path d="M8 19 5 13V7.975Q5 7.55 5.287 7.275Q5.575 7 6 7V4Q6 3.175 6.588 2.587Q7.175 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V7Q18.425 7 18.712 7.275Q19 7.55 19 7.975V13L16 19V21Q16 21.425 15.713 21.712Q15.425 22 15 22H9Q8.575 22 8.288 21.712Q8 21.425 8 21ZM8 7H10V5.475Q10 5.275 10.15 5.137Q10.3 5 10.5 5Q10.7 5 10.85 5.15Q11 5.3 11 5.5V7H13V5.475Q13 5.275 13.15 5.137Q13.3 5 13.5 5Q13.7 5 13.85 5.15Q14 5.3 14 5.5V7H16V4Q16 4 16 4Q16 4 16 4H8Q8 4 8 4Q8 4 8 4Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiRoundedFilled.displayName = 'AmauiIconMaterialSettingsInputHdmiRoundedFilled';

export default IconMaterialSettingsInputHdmiRoundedFilled;
