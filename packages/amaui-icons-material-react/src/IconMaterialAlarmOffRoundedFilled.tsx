import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlarmOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffRoundedFilled'
      short_name='AlarmOff'

      {...props}
    >
      <path d="M19.8 22.7 17.35 20.25Q16.175 21.125 14.812 21.562Q13.45 22 12 22Q10.15 22 8.512 21.3Q6.875 20.6 5.65 19.4Q4.425 18.2 3.712 16.575Q3 14.95 3 13.1Q3 11.625 3.463 10.25Q3.925 8.875 4.8 7.7L3.95 6.85L3.425 7.375Q3.15 7.65 2.738 7.637Q2.325 7.625 2.05 7.35Q1.775 7.075 1.775 6.65Q1.775 6.225 2.05 5.95L2.55 5.45L1.375 4.275Q1.1 4 1.113 3.587Q1.125 3.175 1.4 2.9Q1.675 2.625 2.1 2.625Q2.525 2.625 2.8 2.9L21.225 21.325Q21.5 21.6 21.488 22.013Q21.475 22.425 21.2 22.7Q20.925 22.975 20.5 22.975Q20.075 22.975 19.8 22.7ZM19.95 17.25 7.85 5Q8.8 4.5 9.838 4.25Q10.875 4 12 4Q13.85 4 15.488 4.7Q17.125 5.4 18.35 6.637Q19.575 7.875 20.288 9.525Q21 11.175 21 13.1Q21 14.225 20.725 15.262Q20.45 16.3 19.95 17.25ZM20.55 7.3 17.675 4.425Q17.4 4.15 17.413 3.737Q17.425 3.325 17.7 3.05Q17.975 2.775 18.4 2.775Q18.825 2.775 19.1 3.05L21.975 5.925Q22.25 6.2 22.238 6.612Q22.225 7.025 21.95 7.3Q21.675 7.575 21.25 7.575Q20.825 7.575 20.55 7.3Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffRoundedFilled.displayName = 'AmauiIconMaterialAlarmOffRoundedFilled';

export default IconMaterialAlarmOffRoundedFilled;
