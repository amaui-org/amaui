import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScheduleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleRoundedW100Filled'
      short_name='Schedule'

      {...props}
    >
      <path d="M15.525 16.025Q15.625 16.125 15.75 16.125Q15.875 16.125 16 16Q16.125 15.875 16.125 15.75Q16.125 15.625 16 15.5L12.35 11.85V7.325Q12.35 7.2 12.25 7.1Q12.15 7 12 7Q11.85 7 11.75 7.1Q11.65 7.2 11.65 7.35V11.85Q11.65 12 11.7 12.125Q11.75 12.25 11.875 12.375ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialScheduleRoundedW100Filled.displayName = 'AmauiIconMaterialScheduleRoundedW100Filled';

export default IconMaterialScheduleRoundedW100Filled;
