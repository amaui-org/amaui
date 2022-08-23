import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8kRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kRoundedW100Filled'
      short_name='8k'

      {...props}
    >
      <path d="M13.2 14.6Q13.35 14.6 13.45 14.5Q13.55 14.4 13.55 14.25V12.2L15.925 14.525Q15.975 14.575 16.038 14.587Q16.1 14.6 16.15 14.6Q16.425 14.6 16.5 14.387Q16.575 14.175 16.4 14L14.3 11.95L16.45 10Q16.625 9.825 16.55 9.612Q16.475 9.4 16.2 9.4Q16.125 9.4 16.062 9.425Q16 9.45 15.95 9.5L13.55 11.75V9.725Q13.55 9.6 13.45 9.5Q13.35 9.4 13.2 9.4Q13.05 9.4 12.95 9.5Q12.85 9.6 12.85 9.75V14.275Q12.85 14.4 12.95 14.5Q13.05 14.6 13.2 14.6ZM7.7 14.6H10Q10.3 14.6 10.5 14.4Q10.7 14.2 10.7 13.9V10.1Q10.7 9.8 10.5 9.6Q10.3 9.4 10 9.4H7.7Q7.4 9.4 7.2 9.6Q7 9.8 7 10.1V13.9Q7 14.2 7.2 14.4Q7.4 14.6 7.7 14.6ZM7.7 11.65V10.1H10V11.65ZM7.7 13.9V12.35H10V13.9ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterial8kRoundedW100Filled.displayName = 'AmauiIconMaterial8kRoundedW100Filled';

export default IconMaterial8kRoundedW100Filled;
