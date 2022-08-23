import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter9RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9RoundedFilled'
      short_name='Filter9'

      {...props}
    >
      <path d="M13 15H15Q15.825 15 16.413 14.412Q17 13.825 17 13V7Q17 6.175 16.413 5.588Q15.825 5 15 5H13Q12.175 5 11.588 5.588Q11 6.175 11 7V9Q11 9.825 11.588 10.412Q12.175 11 13 11H15V13Q15 13 15 13Q15 13 15 13H12.975Q12.55 13 12.275 13.287Q12 13.575 12 14Q12 14.425 12.288 14.712Q12.575 15 13 15ZM15 9H13Q13 9 13 9Q13 9 13 9V7Q13 7 13 7Q13 7 13 7H15Q15 7 15 7Q15 7 15 7ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6.975Q2 6.55 2.288 6.275Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17.025Q17.45 20 17.725 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialFilter9RoundedFilled.displayName = 'AmauiIconMaterialFilter9RoundedFilled';

export default IconMaterialFilter9RoundedFilled;
