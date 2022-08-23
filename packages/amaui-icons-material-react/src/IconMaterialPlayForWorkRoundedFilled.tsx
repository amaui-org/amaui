import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayForWorkRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkRoundedFilled'
      short_name='PlayForWork'

      {...props}
    >
      <path d="M12 20Q9.775 20 8.125 18.613Q6.475 17.225 6.1 15.1Q6.025 14.675 6.325 14.337Q6.625 14 7.125 14Q7.475 14 7.738 14.25Q8 14.5 8.1 14.875Q8.4 16.225 9.488 17.113Q10.575 18 12 18Q13.425 18 14.513 17.113Q15.6 16.225 15.9 14.875Q16 14.5 16.275 14.25Q16.55 14 16.9 14Q17.375 14 17.675 14.337Q17.975 14.675 17.9 15.1Q17.525 17.225 15.875 18.613Q14.225 20 12 20ZM12 14.55Q11.8 14.55 11.625 14.487Q11.45 14.425 11.3 14.275L8.7 11.675Q8.4 11.375 8.4 10.975Q8.4 10.575 8.7 10.275Q9 9.975 9.413 9.975Q9.825 9.975 10.125 10.275L11 11.15V6Q11 5.575 11.288 5.287Q11.575 5 12 5Q12.425 5 12.713 5.287Q13 5.575 13 6V11.15L13.9 10.25Q14.175 9.975 14.6 9.975Q15.025 9.975 15.3 10.275Q15.6 10.55 15.588 10.975Q15.575 11.4 15.3 11.675L12.7 14.275Q12.55 14.425 12.375 14.487Q12.2 14.55 12 14.55Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkRoundedFilled.displayName = 'AmauiIconMaterialPlayForWorkRoundedFilled';

export default IconMaterialPlayForWorkRoundedFilled;
