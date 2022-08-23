import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter4RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4RoundedFilled'
      short_name='Filter4'

      {...props}
    >
      <path d="M16 15Q16.425 15 16.712 14.712Q17 14.425 17 14V5.975Q17 5.55 16.712 5.275Q16.425 5 16 5Q15.575 5 15.288 5.287Q15 5.575 15 6V9H13V5.975Q13 5.55 12.713 5.275Q12.425 5 12 5Q11.575 5 11.288 5.287Q11 5.575 11 6V10Q11 10.425 11.288 10.712Q11.575 11 12 11H15V14.025Q15 14.45 15.288 14.725Q15.575 15 16 15ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6.975Q2 6.55 2.288 6.275Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17.025Q17.45 20 17.725 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialFilter4RoundedFilled.displayName = 'AmauiIconMaterialFilter4RoundedFilled';

export default IconMaterialFilter4RoundedFilled;
