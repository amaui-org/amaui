import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnarchiveRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveRoundedFilled'
      short_name='Unarchive'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V6.5Q3 6.15 3.125 5.837Q3.25 5.525 3.45 5.25L4.85 3.55Q5.05 3.275 5.35 3.137Q5.65 3 6 3H18Q18.35 3 18.65 3.137Q18.95 3.275 19.15 3.55L20.55 5.25Q20.75 5.525 20.875 5.837Q21 6.15 21 6.5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5.4 6H18.6L17.75 5H6.25ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V12.8L13.9 13.7Q14.175 13.975 14.6 13.975Q15.025 13.975 15.3 13.7Q15.575 13.425 15.575 13Q15.575 12.575 15.3 12.3L12.7 9.7Q12.55 9.55 12.375 9.487Q12.2 9.425 12 9.425Q11.8 9.425 11.625 9.487Q11.45 9.55 11.3 9.7L8.7 12.3Q8.425 12.575 8.425 13Q8.425 13.425 8.7 13.7Q8.975 13.975 9.4 13.975Q9.825 13.975 10.1 13.7L11 12.8V16Q11 16.425 11.288 16.712Q11.575 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveRoundedFilled.displayName = 'AmauiIconMaterialUnarchiveRoundedFilled';

export default IconMaterialUnarchiveRoundedFilled;
