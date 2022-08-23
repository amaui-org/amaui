import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreRoundedW100Filled'
      short_name='CreditScore'

      {...props}
    >
      <path d="M14.025 19.575 11.425 16.975Q11.325 16.875 11.325 16.75Q11.325 16.625 11.45 16.5Q11.575 16.375 11.7 16.375Q11.825 16.375 11.95 16.5L14.55 19.1L20.025 13.625Q20.125 13.525 20.25 13.525Q20.375 13.525 20.5 13.65Q20.625 13.775 20.625 13.9Q20.625 14.025 20.5 14.15L15.075 19.575Q14.85 19.8 14.55 19.8Q14.25 19.8 14.025 19.575ZM4.8 18.7Q4.175 18.7 3.737 18.262Q3.3 17.825 3.3 17.2V6.8Q3.3 6.175 3.737 5.738Q4.175 5.3 4.8 5.3H19.2Q19.825 5.3 20.263 5.738Q20.7 6.175 20.7 6.8V10.95H19.875L14.55 16.275L13.375 15.075Q12.675 14.4 11.7 14.4Q10.725 14.4 10.05 15.075Q9.325 15.8 9.325 16.75Q9.325 17.7 10.025 18.4L10.325 18.7ZM4 10.95H20V9.05H4Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreRoundedW100Filled.displayName = 'AmauiIconMaterialCreditScoreRoundedW100Filled';

export default IconMaterialCreditScoreRoundedW100Filled;
