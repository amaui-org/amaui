import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkHistoryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryRoundedFilled'
      short_name='WorkHistory'

      {...props}
    >
      <path d="M11 18Q11 18.775 11.163 19.538Q11.325 20.3 11.675 21H4Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V12.275Q21.125 11.65 20.1 11.325Q19.075 11 18 11Q15.1 11 13.05 13.05Q11 15.1 11 18ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM19.65 20.35 20.35 19.65 18.5 17.8V15H17.5V18.2Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryRoundedFilled.displayName = 'AmauiIconMaterialWorkHistoryRoundedFilled';

export default IconMaterialWorkHistoryRoundedFilled;
