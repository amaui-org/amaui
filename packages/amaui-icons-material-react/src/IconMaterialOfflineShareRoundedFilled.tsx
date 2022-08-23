import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOfflineShareRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareRoundedFilled'
      short_name='OfflineShare'

      {...props}
    >
      <path d="M10 19Q9.175 19 8.588 18.413Q8 17.825 8 17V3Q8 2.175 8.588 1.587Q9.175 1 10 1H18Q18.825 1 19.413 1.587Q20 2.175 20 3V17Q20 17.825 19.413 18.413Q18.825 19 18 19ZM18 6H10V14H18ZM6 23Q5.175 23 4.588 22.413Q4 21.825 4 21V6Q4 5.575 4.287 5.287Q4.575 5 5 5Q5.425 5 5.713 5.287Q6 5.575 6 6V21Q6 21 6 21Q6 21 6 21H15Q15.425 21 15.713 21.288Q16 21.575 16 22Q16 22.425 15.713 22.712Q15.425 23 15 23ZM11.75 12Q11.425 12 11.213 11.787Q11 11.575 11 11.25V9.75Q11 9.325 11.288 9.037Q11.575 8.75 12 8.75H14.15L13.975 8.575Q13.75 8.35 13.75 8.05Q13.75 7.75 13.975 7.525Q14.2 7.3 14.5 7.3Q14.8 7.3 15.025 7.525L16.3 8.8Q16.45 8.95 16.512 9.125Q16.575 9.3 16.575 9.5Q16.575 9.7 16.512 9.875Q16.45 10.05 16.3 10.2L15.025 11.475Q14.8 11.7 14.5 11.7Q14.2 11.7 13.975 11.475Q13.75 11.25 13.75 10.95Q13.75 10.65 13.975 10.425L14.15 10.25H12.5V11.25Q12.5 11.575 12.288 11.787Q12.075 12 11.75 12Z"/>
    </Icon>
  );
});

IconMaterialOfflineShareRoundedFilled.displayName = 'AmauiIconMaterialOfflineShareRoundedFilled';

export default IconMaterialOfflineShareRoundedFilled;
