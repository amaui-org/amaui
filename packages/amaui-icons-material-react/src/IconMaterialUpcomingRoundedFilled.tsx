import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpcomingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingRoundedFilled'
      short_name='Upcoming'

      {...props}
    >
      <path d="M16.9 10.1Q16.625 9.825 16.625 9.4Q16.625 8.975 16.9 8.7L19.075 6.525Q19.35 6.25 19.75 6.25Q20.15 6.25 20.45 6.55Q20.725 6.825 20.725 7.25Q20.725 7.675 20.45 7.95L18.275 10.125Q18 10.4 17.6 10.4Q17.2 10.4 16.9 10.1ZM12 8Q11.575 8 11.288 7.713Q11 7.425 11 7V4Q11 3.575 11.288 3.287Q11.575 3 12 3Q12.425 3 12.713 3.287Q13 3.575 13 4V7Q13 7.425 12.713 7.713Q12.425 8 12 8ZM5.7 10.1 3.525 7.925Q3.25 7.65 3.25 7.25Q3.25 6.85 3.55 6.55Q3.825 6.275 4.25 6.275Q4.675 6.275 4.95 6.55L7.125 8.725Q7.4 9 7.4 9.4Q7.4 9.8 7.1 10.1Q6.825 10.375 6.4 10.375Q5.975 10.375 5.7 10.1ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V14Q2 13.175 2.588 12.587Q3.175 12 4 12H7.4Q7.975 12 8.513 12.325Q9.05 12.65 9.25 13.175Q9.575 13.975 10.35 14.488Q11.125 15 12 15Q12.875 15 13.65 14.488Q14.425 13.975 14.75 13.175Q14.95 12.65 15.488 12.325Q16.025 12 16.6 12H20Q20.825 12 21.413 12.587Q22 13.175 22 14V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialUpcomingRoundedFilled.displayName = 'AmauiIconMaterialUpcomingRoundedFilled';

export default IconMaterialUpcomingRoundedFilled;
