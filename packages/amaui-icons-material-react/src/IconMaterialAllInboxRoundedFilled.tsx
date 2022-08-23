import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInboxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxRoundedFilled'
      short_name='AllInbox'

      {...props}
    >
      <path d="M14 13Q14.825 13 15.3 12.525Q15.775 12.05 15.9 11.625Q15.975 11.375 16.238 11.188Q16.5 11 16.85 11H20V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4V11H11.15Q11.5 11 11.762 11.2Q12.025 11.4 12.1 11.625Q12.225 12.05 12.7 12.525Q13.175 13 14 13ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialAllInboxRoundedFilled.displayName = 'AmauiIconMaterialAllInboxRoundedFilled';

export default IconMaterialAllInboxRoundedFilled;
