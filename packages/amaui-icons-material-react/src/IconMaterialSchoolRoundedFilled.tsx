import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolRoundedFilled'
      short_name='School'

      {...props}
    >
      <path d="M22 17Q21.575 17 21.288 16.712Q21 16.425 21 16V10.1L12.975 14.475Q12.75 14.6 12.512 14.662Q12.275 14.725 12 14.725Q11.725 14.725 11.488 14.662Q11.25 14.6 11.025 14.475L2.6 9.875Q2.35 9.75 2.213 9.512Q2.075 9.275 2.075 9Q2.075 8.725 2.213 8.488Q2.35 8.25 2.6 8.125L11.05 3.525Q11.275 3.4 11.512 3.337Q11.75 3.275 12 3.275Q12.25 3.275 12.488 3.337Q12.725 3.4 12.95 3.525L22.475 8.725Q22.725 8.85 22.863 9.087Q23 9.325 23 9.6V16Q23 16.425 22.712 16.712Q22.425 17 22 17ZM12 20.725Q11.75 20.725 11.512 20.663Q11.275 20.6 11.05 20.475L6.05 17.775Q5.55 17.5 5.275 17.038Q5 16.575 5 16V12.2L10.675 15.275Q11 15.45 11.325 15.587Q11.65 15.725 12 15.725Q12.35 15.725 12.688 15.575Q13.025 15.425 13.35 15.25L19 12.2V16Q19 16.575 18.725 17.038Q18.45 17.5 17.95 17.775L12.95 20.475Q12.725 20.6 12.488 20.663Q12.25 20.725 12 20.725Z"/>
    </Icon>
  );
});

IconMaterialSchoolRoundedFilled.displayName = 'AmauiIconMaterialSchoolRoundedFilled';

export default IconMaterialSchoolRoundedFilled;
