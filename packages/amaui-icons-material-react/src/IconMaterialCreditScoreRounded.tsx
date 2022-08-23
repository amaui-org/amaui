import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreRounded'
      short_name='CreditScore'

      {...props}
    >
      <path d="M4 8H20V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6ZM2 6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V12H4V18Q4 18 4 18Q4 18 4 18H6.15Q6.575 18 6.85 18.288Q7.125 18.575 7.125 19Q7.125 19.425 6.825 19.712Q6.525 20 6.1 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18ZM14.95 19.15 19.9 14.2Q20.175 13.925 20.587 13.925Q21 13.925 21.3 14.225Q21.6 14.525 21.588 14.95Q21.575 15.375 21.275 15.675L15.65 21.3Q15.35 21.6 14.95 21.6Q14.55 21.6 14.25 21.3L11.375 18.425Q11.1 18.15 11.1 17.75Q11.1 17.35 11.4 17.05Q11.675 16.775 12.088 16.775Q12.5 16.775 12.8 17.05ZM4 6V18Q4 18 4 18Q4 18 4 18Q4 18 4 17.25Q4 16.5 4 15.625Q4 14.75 4 14.75Q4 14.75 4 15.625V16.325V12V8V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreRounded.displayName = 'AmauiIconMaterialCreditScoreRounded';

export default IconMaterialCreditScoreRounded;
