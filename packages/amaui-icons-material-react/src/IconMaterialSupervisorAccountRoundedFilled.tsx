import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSupervisorAccountRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccountRoundedFilled'
      short_name='SupervisorAccount'

      {...props}
    >
      <path d="M17 15Q15.95 15 15.225 14.275Q14.5 13.55 14.5 12.5Q14.5 11.45 15.225 10.725Q15.95 10 17 10Q18.05 10 18.775 10.725Q19.5 11.45 19.5 12.5Q19.5 13.55 18.775 14.275Q18.05 15 17 15ZM13 20Q12.575 20 12.288 19.712Q12 19.425 12 19V18.6Q12 18 12.312 17.488Q12.625 16.975 13.2 16.75Q14.1 16.375 15.063 16.188Q16.025 16 17 16Q17.975 16 18.938 16.188Q19.9 16.375 20.8 16.75Q21.375 16.975 21.688 17.488Q22 18 22 18.6V19Q22 19.425 21.712 19.712Q21.425 20 21 20ZM10 12Q8.35 12 7.175 10.825Q6 9.65 6 8Q6 6.35 7.175 5.175Q8.35 4 10 4Q11.65 4 12.825 5.175Q14 6.35 14 8Q14 9.65 12.825 10.825Q11.65 12 10 12ZM3 20Q2.575 20 2.288 19.712Q2 19.425 2 19V17Q2 16.35 2.45 15.713Q2.9 15.075 3.775 14.6Q5.125 13.875 6.725 13.438Q8.325 13 10 13Q10.675 13 11.438 13.1Q12.2 13.2 13 13.4V14.7Q12.65 14.825 12.4 14.95Q12.15 15.075 11.875 15.225Q10.95 15.75 10.475 16.6Q10 17.45 10 18V20Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccountRoundedFilled.displayName = 'AmauiIconMaterialSupervisorAccountRoundedFilled';

export default IconMaterialSupervisorAccountRoundedFilled;
