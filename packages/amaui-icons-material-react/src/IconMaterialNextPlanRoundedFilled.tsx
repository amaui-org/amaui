import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNextPlanRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlanRoundedFilled'
      short_name='NextPlan'

      {...props}
    >
      <path d="M11.65 10.5Q12.55 10.5 13.325 10.912Q14.1 11.325 14.6 12H14Q13.575 12 13.288 12.287Q13 12.575 13 13Q13 13.425 13.288 13.712Q13.575 14 14 14H17Q17.425 14 17.712 13.712Q18 13.425 18 13V10Q18 9.575 17.712 9.287Q17.425 9 17 9Q16.575 9 16.288 9.287Q16 9.575 16 10V10.55Q15.2 9.6 14.088 9.05Q12.975 8.5 11.65 8.5Q9.575 8.5 8.062 9.738Q6.55 10.975 6.125 12.85Q6.025 13.3 6.3 13.65Q6.575 14 7 14Q7.375 14 7.688 13.775Q8 13.55 8.1 13.2Q8.375 12.025 9.363 11.262Q10.35 10.5 11.65 10.5ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNextPlanRoundedFilled.displayName = 'AmauiIconMaterialNextPlanRoundedFilled';

export default IconMaterialNextPlanRoundedFilled;
