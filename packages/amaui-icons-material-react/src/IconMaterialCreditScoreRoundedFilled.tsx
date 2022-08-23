import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreRoundedFilled'
      short_name='CreditScore'

      {...props}
    >
      <path d="M14.25 21.3 11.375 18.425Q11.1 18.15 11.1 17.75Q11.1 17.35 11.4 17.05Q11.675 16.775 12.1 16.762Q12.525 16.75 12.8 17.05L14.95 19.15L19.9 14.2Q20.175 13.925 20.587 13.925Q21 13.925 21.3 14.225Q21.6 14.525 21.588 14.95Q21.575 15.375 21.275 15.675L15.65 21.3Q15.375 21.575 14.95 21.575Q14.525 21.575 14.25 21.3ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V12H19.275L14.95 16.325L14.25 15.625Q13.375 14.75 12.125 14.75Q10.875 14.75 10 15.625Q9.125 16.5 9.113 17.738Q9.1 18.975 9.975 19.85L10.125 20ZM4 12H20V8H4Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreRoundedFilled.displayName = 'AmauiIconMaterialCreditScoreRoundedFilled';

export default IconMaterialCreditScoreRoundedFilled;
