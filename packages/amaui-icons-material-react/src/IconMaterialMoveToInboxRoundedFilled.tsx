import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoveToInboxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxRoundedFilled'
      short_name='MoveToInbox'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 16Q12.75 16 13.425 15.637Q14.1 15.275 14.575 14.5Q14.7 14.275 14.925 14.137Q15.15 14 15.45 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V14H8.55Q8.85 14 9.075 14.137Q9.3 14.275 9.425 14.5Q9.9 15.275 10.575 15.637Q11.25 16 12 16ZM12 13.575Q11.8 13.575 11.625 13.512Q11.45 13.45 11.3 13.3L8.7 10.7Q8.4 10.4 8.4 9.987Q8.4 9.575 8.7 9.275Q9 8.975 9.413 8.975Q9.825 8.975 10.125 9.275L11 10.15V7Q11 6.575 11.288 6.287Q11.575 6 12 6Q12.425 6 12.713 6.287Q13 6.575 13 7V10.15L13.9 9.25Q14.175 8.975 14.588 8.975Q15 8.975 15.3 9.275Q15.6 9.575 15.588 10Q15.575 10.425 15.275 10.725L12.7 13.3Q12.55 13.45 12.375 13.512Q12.2 13.575 12 13.575Z"/>
    </Icon>
  );
});

IconMaterialMoveToInboxRoundedFilled.displayName = 'AmauiIconMaterialMoveToInboxRoundedFilled';

export default IconMaterialMoveToInboxRoundedFilled;
