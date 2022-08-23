import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNextWeekRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekRoundedFilled'
      short_name='NextWeek'

      {...props}
    >
      <path d="M11.7 16.8 14.3 14.2Q14.6 13.9 14.6 13.5Q14.6 13.1 14.3 12.8L11.7 10.2Q11.425 9.925 11 9.925Q10.575 9.925 10.3 10.2Q10.025 10.475 10.025 10.9Q10.025 11.325 10.3 11.6L12.2 13.5L10.3 15.4Q10.025 15.675 10.025 16.1Q10.025 16.525 10.3 16.8Q10.575 17.075 11 17.075Q11.425 17.075 11.7 16.8ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4Z"/>
    </Icon>
  );
});

IconMaterialNextWeekRoundedFilled.displayName = 'AmauiIconMaterialNextWeekRoundedFilled';

export default IconMaterialNextWeekRoundedFilled;
