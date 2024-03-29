import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHearingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingFilled'

      short_name='Hearing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22q-1.55 0-2.537-.775-.988-.775-1.513-2.275-.425-1.25-.813-1.75-.387-.5-1.787-1.6-1.55-1.25-2.45-2.825Q7 11.2 7 9q0-2.975 2.012-4.988Q11.025 2 14 2q2.975 0 4.988 2.012Q21 6.025 21 9h-2q0-2.125-1.438-3.562Q16.125 4 14 4t-3.562 1.438Q9 6.875 9 9q0 1.7.675 2.9t1.925 2.15q1.3.95 2.025 1.85.725.9 1.075 1.95.35 1.1.838 1.625Q16.025 20 17 20q.825 0 1.413-.587Q19 18.825 19 18h2q0 1.65-1.175 2.825Q18.65 22 17 22ZM6.2 16.75q-1.475-1.5-2.337-3.488Q3 11.275 3 9q0-2.3.863-4.3.862-2 2.337-3.5l1.45 1.4Q6.4 3.85 5.7 5.487 5 7.125 5 9q0 1.85.7 3.475t1.95 2.875ZM14 11.5q-1.05 0-1.775-.738Q11.5 10.025 11.5 9q0-1.05.725-1.775Q12.95 6.5 14 6.5q1.05 0 1.775.725Q16.5 7.95 16.5 9q0 1.025-.725 1.762-.725.738-1.775.738Z"/>
    </Icon>
  );
});

IconMaterialHearingFilled.displayName = 'AmauiIconMaterialHearingFilled';

export default IconMaterialHearingFilled;
