import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecentActorsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsRoundedFilled'
      short_name='RecentActors'

      {...props}
    >
      <path d="M3 19Q2.175 19 1.588 18.413Q1 17.825 1 17V7Q1 6.175 1.588 5.588Q2.175 5 3 5H13Q13.825 5 14.413 5.588Q15 6.175 15 7V17Q15 17.825 14.413 18.413Q13.825 19 13 19ZM18 19Q17.575 19 17.288 18.712Q17 18.425 17 18V6Q17 5.575 17.288 5.287Q17.575 5 18 5Q18.425 5 18.712 5.287Q19 5.575 19 6V18Q19 18.425 18.712 18.712Q18.425 19 18 19ZM22 19Q21.575 19 21.288 18.712Q21 18.425 21 18V6Q21 5.575 21.288 5.287Q21.575 5 22 5Q22.425 5 22.712 5.287Q23 5.575 23 6V18Q23 18.425 22.712 18.712Q22.425 19 22 19ZM3 15.35Q4.1 14.7 5.35 14.35Q6.6 14 8 14Q9.4 14 10.65 14.35Q11.9 14.7 13 15.35V7H3ZM8 13.25Q6.85 13.25 6.05 12.45Q5.25 11.65 5.25 10.5Q5.25 9.35 6.05 8.55Q6.85 7.75 8 7.75Q9.15 7.75 9.95 8.55Q10.75 9.35 10.75 10.5Q10.75 11.65 9.95 12.45Q9.15 13.25 8 13.25Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsRoundedFilled.displayName = 'AmauiIconMaterialRecentActorsRoundedFilled';

export default IconMaterialRecentActorsRoundedFilled;
