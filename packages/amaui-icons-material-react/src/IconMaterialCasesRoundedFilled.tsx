import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCasesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesRoundedFilled'
      short_name='Cases'

      {...props}
    >
      <path d="M3 22Q2.175 22 1.588 21.413Q1 20.825 1 20V10Q1 9.575 1.288 9.287Q1.575 9 2 9Q2.425 9 2.713 9.287Q3 9.575 3 10V20Q3 20 3 20Q3 20 3 20H19Q19.425 20 19.712 20.288Q20 20.575 20 21Q20 21.425 19.712 21.712Q19.425 22 19 22ZM7 18Q6.175 18 5.588 17.413Q5 16.825 5 16V7Q5 6.175 5.588 5.588Q6.175 5 7 5H10V3Q10 2.175 10.588 1.587Q11.175 1 12 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V5H21Q21.825 5 22.413 5.588Q23 6.175 23 7V16Q23 16.825 22.413 17.413Q21.825 18 21 18ZM12 5H16V3Q16 3 16 3Q16 3 16 3H12Q12 3 12 3Q12 3 12 3Z"/>
    </Icon>
  );
});

IconMaterialCasesRoundedFilled.displayName = 'AmauiIconMaterialCasesRoundedFilled';

export default IconMaterialCasesRoundedFilled;
