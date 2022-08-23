import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNextWeekRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekRoundedW100Filled'
      short_name='NextWeek'

      {...props}
    >
      <path d="M11.25 16.35 13.575 14.025Q13.8 13.8 13.8 13.5Q13.8 13.2 13.575 12.975L11.25 10.65Q11.15 10.55 11.012 10.537Q10.875 10.525 10.75 10.65Q10.625 10.775 10.625 10.9Q10.625 11.025 10.75 11.15L13.1 13.5L10.75 15.85Q10.65 15.95 10.637 16.087Q10.625 16.225 10.75 16.35Q10.875 16.475 11 16.475Q11.125 16.475 11.25 16.35ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V8.8Q3.3 8.15 3.725 7.725Q4.15 7.3 4.8 7.3H9.3V6.1Q9.3 5.45 9.725 5.025Q10.15 4.6 10.8 4.6H13.2Q13.85 4.6 14.275 5.025Q14.7 5.45 14.7 6.1V7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7ZM10 7.3H14V6.1Q14 5.75 13.775 5.525Q13.55 5.3 13.2 5.3H10.8Q10.45 5.3 10.225 5.525Q10 5.75 10 6.1Z"/>
    </Icon>
  );
});

IconMaterialNextWeekRoundedW100Filled.displayName = 'AmauiIconMaterialNextWeekRoundedW100Filled';

export default IconMaterialNextWeekRoundedW100Filled;
