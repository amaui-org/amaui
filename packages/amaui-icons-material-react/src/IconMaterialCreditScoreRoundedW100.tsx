import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreRoundedW100'
      short_name='CreditScore'

      {...props}
    >
      <path d="M4 9.05H20V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8ZM3.3 6.8Q3.3 6.175 3.737 5.738Q4.175 5.3 4.8 5.3H19.2Q19.825 5.3 20.263 5.738Q20.7 6.175 20.7 6.8V10.95H4V17.25Q4 17.6 4.225 17.8Q4.45 18 4.8 18H9.3Q9.425 18 9.525 18.1Q9.625 18.2 9.625 18.35Q9.625 18.5 9.525 18.6Q9.425 18.7 9.275 18.7H4.8Q4.175 18.7 3.737 18.262Q3.3 17.825 3.3 17.2ZM14.55 19.1 20.025 13.625Q20.125 13.525 20.25 13.525Q20.375 13.525 20.5 13.65Q20.625 13.775 20.625 13.9Q20.625 14.025 20.5 14.15L15.075 19.575Q14.85 19.8 14.55 19.8Q14.25 19.8 14.025 19.575L11.425 16.975Q11.325 16.875 11.325 16.75Q11.325 16.625 11.45 16.5Q11.575 16.375 11.7 16.375Q11.825 16.375 11.95 16.5ZM4 6.8V17.25Q4 17.25 4 17.25Q4 17.25 4 17.25Q4 17.25 4 16.525Q4 15.8 4 15.075Q4 14.4 4 14.4Q4 14.4 4 15.075V16.275V10.95V9.05V6.8Q4 6.45 4 6.225Q4 6 4 6Q4 6 4 6.225Q4 6.45 4 6.8Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreRoundedW100.displayName = 'AmauiIconMaterialCreditScoreRoundedW100';

export default IconMaterialCreditScoreRoundedW100;
