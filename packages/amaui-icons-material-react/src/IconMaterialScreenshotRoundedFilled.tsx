import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotRoundedFilled'
      short_name='Screenshot'

      {...props}
    >
      <path d="M8.75 11Q8.425 11 8.213 10.787Q8 10.575 8 10.25V7.75Q8 7.425 8.213 7.213Q8.425 7 8.75 7H11.25Q11.575 7 11.788 7.213Q12 7.425 12 7.75Q12 8.075 11.788 8.287Q11.575 8.5 11.25 8.5H9.5V10.25Q9.5 10.575 9.288 10.787Q9.075 11 8.75 11ZM12.75 17Q12.425 17 12.213 16.788Q12 16.575 12 16.25Q12 15.925 12.213 15.712Q12.425 15.5 12.75 15.5H14.5V13.75Q14.5 13.425 14.713 13.212Q14.925 13 15.25 13Q15.575 13 15.788 13.212Q16 13.425 16 13.75V16.25Q16 16.575 15.788 16.788Q15.575 17 15.25 17ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialScreenshotRoundedFilled.displayName = 'AmauiIconMaterialScreenshotRoundedFilled';

export default IconMaterialScreenshotRoundedFilled;
