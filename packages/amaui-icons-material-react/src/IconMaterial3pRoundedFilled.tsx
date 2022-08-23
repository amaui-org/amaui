import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3pRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3pRoundedFilled'
      short_name='3p'

      {...props}
    >
      <path d="M8 14H16V13.45Q16 12.35 14.9 11.675Q13.8 11 12 11Q10.2 11 9.1 11.675Q8 12.35 8 13.45ZM12 10Q12.825 10 13.413 9.412Q14 8.825 14 8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8Q10 8.825 10.588 9.412Q11.175 10 12 10ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterial3pRoundedFilled.displayName = 'AmauiIconMaterial3pRoundedFilled';

export default IconMaterial3pRoundedFilled;
