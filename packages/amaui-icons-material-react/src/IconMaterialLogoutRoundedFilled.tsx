import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLogoutRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LogoutRoundedFilled'
      short_name='Logout'

      {...props}
    >
      <path d="M15.325 16.275Q15.05 15.95 15.05 15.537Q15.05 15.125 15.325 14.85L17.175 13H10Q9.575 13 9.288 12.712Q9 12.425 9 12Q9 11.575 9.288 11.287Q9.575 11 10 11H17.175L15.325 9.15Q15.025 8.85 15.025 8.438Q15.025 8.025 15.325 7.725Q15.6 7.425 16.013 7.425Q16.425 7.425 16.7 7.7L20.3 11.3Q20.45 11.45 20.513 11.625Q20.575 11.8 20.575 12Q20.575 12.2 20.513 12.375Q20.45 12.55 20.3 12.7L16.7 16.3Q16.375 16.625 15.988 16.587Q15.6 16.55 15.325 16.275ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H11Q11.425 3 11.713 3.287Q12 3.575 12 4Q12 4.425 11.713 4.712Q11.425 5 11 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H11Q11.425 19 11.713 19.288Q12 19.575 12 20Q12 20.425 11.713 20.712Q11.425 21 11 21Z"/>
    </Icon>
  );
});

IconMaterialLogoutRoundedFilled.displayName = 'AmauiIconMaterialLogoutRoundedFilled';

export default IconMaterialLogoutRoundedFilled;
