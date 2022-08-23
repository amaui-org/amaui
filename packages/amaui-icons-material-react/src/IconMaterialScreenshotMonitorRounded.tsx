import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotMonitorRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorRounded'
      short_name='ScreenshotMonitor'

      {...props}
    >
      <path d="M6.5 7.5H8.25Q8.575 7.5 8.788 7.287Q9 7.075 9 6.75Q9 6.425 8.788 6.213Q8.575 6 8.25 6H6Q5.575 6 5.287 6.287Q5 6.575 5 7V9.25Q5 9.575 5.213 9.787Q5.425 10 5.75 10Q6.075 10 6.287 9.787Q6.5 9.575 6.5 9.25ZM17.5 14.5H15.75Q15.425 14.5 15.213 14.712Q15 14.925 15 15.25Q15 15.575 15.213 15.787Q15.425 16 15.75 16H18Q18.425 16 18.712 15.712Q19 15.425 19 15V12.75Q19 12.425 18.788 12.212Q18.575 12 18.25 12Q17.925 12 17.712 12.212Q17.5 12.425 17.5 12.75ZM9 21Q8.575 21 8.288 20.712Q8 20.425 8 20V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V20Q16 20.425 15.713 20.712Q15.425 21 15 21ZM4 17H20Q20 17 20 17Q20 17 20 17V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17ZM4 17Q4 17 4 17Q4 17 4 17V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitorRounded.displayName = 'AmauiIconMaterialScreenshotMonitorRounded';

export default IconMaterialScreenshotMonitorRounded;
