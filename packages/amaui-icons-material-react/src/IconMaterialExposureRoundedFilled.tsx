import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureRoundedFilled'
      short_name='Exposure'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM6.75 8.5H10.25Q10.575 8.5 10.788 8.287Q11 8.075 11 7.75Q11 7.425 10.788 7.213Q10.575 7 10.25 7H6.75Q6.425 7 6.213 7.213Q6 7.425 6 7.75Q6 8.075 6.213 8.287Q6.425 8.5 6.75 8.5ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5L5 19Q5 19 5 19Q5 19 5 19ZM15.25 18Q14.925 18 14.713 17.788Q14.5 17.575 14.5 17.25V16H13.25Q12.925 16 12.713 15.787Q12.5 15.575 12.5 15.25Q12.5 14.925 12.713 14.712Q12.925 14.5 13.25 14.5H14.5V13.25Q14.5 12.925 14.713 12.712Q14.925 12.5 15.25 12.5Q15.575 12.5 15.788 12.712Q16 12.925 16 13.25V14.5H17.25Q17.575 14.5 17.788 14.712Q18 14.925 18 15.25Q18 15.575 17.788 15.787Q17.575 16 17.25 16H16V17.25Q16 17.575 15.788 17.788Q15.575 18 15.25 18Z"/>
    </Icon>
  );
});

IconMaterialExposureRoundedFilled.displayName = 'AmauiIconMaterialExposureRoundedFilled';

export default IconMaterialExposureRoundedFilled;
