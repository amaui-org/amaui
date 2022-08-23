import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenShareRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareRoundedFilled'
      short_name='ScreenShare'

      {...props}
    >
      <path d="M9 14Q9.425 14 9.713 13.712Q10 13.425 10 13V12Q10 11.575 10.288 11.287Q10.575 11 11 11H13V11.8Q13 12.15 13.3 12.275Q13.6 12.4 13.85 12.15L15.65 10.35Q15.7 10.3 15.8 10Q15.8 9.95 15.65 9.65L13.85 7.85Q13.6 7.6 13.3 7.725Q13 7.85 13 8.2V9H11Q9.75 9 8.875 9.875Q8 10.75 8 12V13Q8 13.425 8.288 13.712Q8.575 14 9 14ZM4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM2 21Q1.575 21 1.288 20.712Q1 20.425 1 20Q1 19.575 1.288 19.288Q1.575 19 2 19H22Q22.425 19 22.712 19.288Q23 19.575 23 20Q23 20.425 22.712 20.712Q22.425 21 22 21Z"/>
    </Icon>
  );
});

IconMaterialScreenShareRoundedFilled.displayName = 'AmauiIconMaterialScreenShareRoundedFilled';

export default IconMaterialScreenShareRoundedFilled;
