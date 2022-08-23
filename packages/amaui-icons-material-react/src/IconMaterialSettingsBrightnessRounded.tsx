import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessRounded'
      short_name='SettingsBrightness'

      {...props}
    >
      <path d="M10.5 16 11.3 16.8Q11.6 17.1 12 17.1Q12.4 17.1 12.7 16.8L13.5 16H15Q15.425 16 15.713 15.712Q16 15.425 16 15V13.5L16.8 12.7Q17.1 12.4 17.1 12Q17.1 11.6 16.8 11.3L16 10.5V9Q16 8.575 15.713 8.287Q15.425 8 15 8H13.5L12.7 7.2Q12.4 6.9 12 6.9Q11.6 6.9 11.3 7.2L10.5 8H9Q8.575 8 8.288 8.287Q8 8.575 8 9V10.5L7.2 11.3Q6.9 11.6 6.9 12Q6.9 12.4 7.2 12.7L8 13.5V15Q8 15.425 8.288 15.712Q8.575 16 9 16ZM12 15V9Q13.25 9 14.125 9.875Q15 10.75 15 12Q15 13.25 14.125 14.125Q13.25 15 12 15ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessRounded.displayName = 'AmauiIconMaterialSettingsBrightnessRounded';

export default IconMaterialSettingsBrightnessRounded;
