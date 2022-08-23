import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalRoundedFilled'
      short_name='Approval'

      {...props}
    >
      <path d="M18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V16Q4 15.175 4.588 14.587Q5.175 14 6 14H18Q18.825 14 19.413 14.587Q20 15.175 20 16V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM17 18Q17.425 18 17.712 17.712Q18 17.425 18 17Q18 16.575 17.712 16.288Q17.425 16 17 16H7Q6.575 16 6.287 16.288Q6 16.575 6 17Q6 17.425 6.287 17.712Q6.575 18 7 18ZM16.575 7.6 12.825 12.85Q12.675 13.05 12.45 13.162Q12.225 13.275 12 13.275Q11.775 13.275 11.55 13.162Q11.325 13.05 11.175 12.85L7.425 7.6Q7.225 7.325 7.113 6.925Q7 6.525 7.05 6.25Q7.325 4.45 8.725 3.225Q10.125 2 12 2Q13.875 2 15.275 3.225Q16.675 4.45 16.95 6.25Q17 6.525 16.888 6.925Q16.775 7.325 16.575 7.6Z"/>
    </Icon>
  );
});

IconMaterialApprovalRoundedFilled.displayName = 'AmauiIconMaterialApprovalRoundedFilled';

export default IconMaterialApprovalRoundedFilled;
