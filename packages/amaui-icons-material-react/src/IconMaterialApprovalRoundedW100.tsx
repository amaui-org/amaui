import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalRoundedW100'
      short_name='Approval'

      {...props}
    >
      <path d="M17.2 19H6.8Q6.175 19 5.738 18.562Q5.3 18.125 5.3 17.5V15.1Q5.3 14.45 5.725 14.025Q6.15 13.6 6.8 13.6H17.2Q17.85 13.6 18.275 14.025Q18.7 14.45 18.7 15.1V17.5Q18.7 18.125 18.262 18.562Q17.825 19 17.2 19ZM17.2 16.3Q17.55 16.3 17.775 16.075Q18 15.85 18 15.5V15.1Q18 14.75 17.775 14.525Q17.55 14.3 17.2 14.3H6.8Q6.45 14.3 6.225 14.525Q6 14.75 6 15.1V15.5Q6 15.85 6.225 16.075Q6.45 16.3 6.8 16.3ZM15.35 9.1 12.6 12.8Q12.475 12.95 12.325 13.025Q12.175 13.1 12 13.1Q11.825 13.1 11.675 13.025Q11.525 12.95 11.4 12.8L8.65 9.1Q8.5 8.9 8.4 8.6Q8.3 8.3 8.325 8.075Q8.525 6.35 9.6 5.525Q10.675 4.7 12 4.7Q13.325 4.7 14.4 5.525Q15.475 6.35 15.675 8.075Q15.7 8.3 15.6 8.6Q15.5 8.9 15.35 9.1ZM12 12.4 15 8.4Q15 7.15 14.125 6.275Q13.25 5.4 12 5.4Q10.75 5.4 9.875 6.275Q9 7.15 9 8.4ZM12 8.9Q12 8.9 12 8.9Q12 8.9 12 8.9Q12 8.9 12 8.9Q12 8.9 12 8.9Z"/>
    </Icon>
  );
});

IconMaterialApprovalRoundedW100.displayName = 'AmauiIconMaterialApprovalRoundedW100';

export default IconMaterialApprovalRoundedW100;
