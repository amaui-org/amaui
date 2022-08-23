import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopScreenShareRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareRoundedFilled'
      short_name='StopScreenShare'

      {...props}
    >
      <path d="M20.7 17.85 14.425 11.575 15.65 10.35Q15.7 10.3 15.8 10Q15.8 9.9 15.763 9.812Q15.725 9.725 15.65 9.65L13.85 7.85Q13.6 7.6 13.3 7.725Q13 7.85 13 8.2V9H11.85L5.85 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.65 21.638 17.137Q21.275 17.625 20.7 17.85ZM19.8 22.6 18.2 21H2Q1.575 21 1.288 20.712Q1 20.425 1 20Q1 19.575 1.288 19.288Q1.575 19 2 19H16.175L15.175 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4.85Q2 4.85 2 4.85Q2 4.85 2 4.85L1.375 4.2Q1.1 3.9 1.1 3.5Q1.1 3.1 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.475 21.9Q21.475 22.325 21.2 22.6Q20.925 22.875 20.5 22.875Q20.075 22.875 19.8 22.6ZM9 14Q9.425 14 9.713 13.712Q10 13.425 10 13V12.825Q10 12.825 10 12.825Q10 12.825 10 12.825L8.175 11Q8.05 11.225 8.025 11.475Q8 11.725 8 12V13Q8 13.425 8.288 13.712Q8.575 14 9 14Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareRoundedFilled.displayName = 'AmauiIconMaterialStopScreenShareRoundedFilled';

export default IconMaterialStopScreenShareRoundedFilled;
