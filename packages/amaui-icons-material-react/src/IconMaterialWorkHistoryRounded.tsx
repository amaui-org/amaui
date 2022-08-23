import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkHistoryRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryRounded'
      short_name='WorkHistory'

      {...props}
    >
      <path d="M4 19Q4 19 4 19Q4 19 4 19V8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 11.875 4 14.037Q4 16.2 4 17.262Q4 18.325 4 18.6Q4 18.875 4 19ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V12.275Q21.55 11.95 21.05 11.712Q20.55 11.475 20 11.3V8Q20 8 20 8Q20 8 20 8H4Q4 8 4 8Q4 8 4 8V19Q4 19 4 19Q4 19 4 19H11.075Q11.15 19.525 11.3 20.025Q11.45 20.525 11.675 21ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM19.65 20.35 20.35 19.65 18.5 17.8V15H17.5V18.2Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryRounded.displayName = 'AmauiIconMaterialWorkHistoryRounded';

export default IconMaterialWorkHistoryRounded;
