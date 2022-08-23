import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElectricMopedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMopedSharp'
      short_name='ElectricMoped'

      {...props}
    >
      <path d="M7 17Q5.75 17 4.875 16.125Q4 15.25 4 14H2V7H10V12H13.5L17 7.65V5H14V3H19V8.35L14.5 14H10Q10 15.25 9.125 16.125Q8.25 17 7 17ZM7 15Q7.425 15 7.713 14.712Q8 14.425 8 14H6Q6 14.425 6.287 14.712Q6.575 15 7 15ZM5 6V4H10V6ZM19 17Q17.75 17 16.875 16.125Q16 15.25 16 14Q16 12.75 16.875 11.875Q17.75 11 19 11Q20.25 11 21.125 11.875Q22 12.75 22 14Q22 15.25 21.125 16.125Q20.25 17 19 17ZM19 15Q19.425 15 19.712 14.712Q20 14.425 20 14Q20 13.575 19.712 13.287Q19.425 13 19 13Q18.575 13 18.288 13.287Q18 13.575 18 14Q18 14.425 18.288 14.712Q18.575 15 19 15ZM13 23 7 20H11V18L17 21H13ZM8 12ZM4 12H8V9H4Z"/>
    </Icon>
  );
});

IconMaterialElectricMopedSharp.displayName = 'AmauiIconMaterialElectricMopedSharp';

export default IconMaterialElectricMopedSharp;
