import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessRoundedFilled'
      short_name='SettingsBrightness'

      {...props}
    >
      <path d="M10.5 16 11.3 16.8Q11.575 17.075 12 17.075Q12.425 17.075 12.7 16.8L13.5 16H15Q15.425 16 15.713 15.712Q16 15.425 16 15V13.5L16.8 12.7Q17.075 12.425 17.075 12Q17.075 11.575 16.8 11.3L16 10.5V9Q16 8.575 15.713 8.287Q15.425 8 15 8H13.5L12.7 7.2Q12.425 6.925 12 6.925Q11.575 6.925 11.3 7.2L10.5 8H9Q8.575 8 8.288 8.287Q8 8.575 8 9V10.5L7.2 11.3Q6.925 11.575 6.925 12Q6.925 12.425 7.2 12.7L8 13.5V15Q8 15.425 8.288 15.712Q8.575 16 9 16ZM12 15V9Q13.25 9 14.125 9.875Q15 10.75 15 12Q15 13.25 14.125 14.125Q13.25 15 12 15ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessRoundedFilled.displayName = 'AmauiIconMaterialSettingsBrightnessRoundedFilled';

export default IconMaterialSettingsBrightnessRoundedFilled;
