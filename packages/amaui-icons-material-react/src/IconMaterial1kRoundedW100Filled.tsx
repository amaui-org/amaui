import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kRoundedW100Filled'
      short_name='1k'

      {...props}
    >
      <path d="M13.05 14.6Q13.2 14.6 13.3 14.5Q13.4 14.4 13.4 14.25V12.2L15.775 14.525Q15.825 14.575 15.888 14.587Q15.95 14.6 16 14.6Q16.275 14.6 16.35 14.387Q16.425 14.175 16.25 14L14.15 11.95L16.3 10Q16.475 9.825 16.4 9.612Q16.325 9.4 16.05 9.4Q15.975 9.4 15.913 9.425Q15.85 9.45 15.8 9.5L13.4 11.75V9.725Q13.4 9.6 13.3 9.5Q13.2 9.4 13.05 9.4Q12.9 9.4 12.8 9.5Q12.7 9.6 12.7 9.75V14.275Q12.7 14.4 12.8 14.5Q12.9 14.6 13.05 14.6ZM9.25 14.6Q9.4 14.6 9.5 14.5Q9.6 14.4 9.6 14.25V9.75Q9.6 9.6 9.5 9.5Q9.4 9.4 9.25 9.4H7.725Q7.6 9.4 7.5 9.5Q7.4 9.6 7.4 9.75Q7.4 9.9 7.5 10Q7.6 10.1 7.75 10.1H8.9V14.275Q8.9 14.4 9 14.5Q9.1 14.6 9.25 14.6ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterial1kRoundedW100Filled.displayName = 'AmauiIconMaterial1kRoundedW100Filled';

export default IconMaterial1kRoundedW100Filled;
