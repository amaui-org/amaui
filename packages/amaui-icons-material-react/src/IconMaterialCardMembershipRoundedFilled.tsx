import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipRoundedFilled'
      short_name='CardMembership'

      {...props}
    >
      <path d="M9.45 21.275Q8.95 21.525 8.475 21.237Q8 20.95 8 20.375V17H4Q3.175 17 2.588 16.413Q2 15.825 2 15V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V15Q22 15.825 21.413 16.413Q20.825 17 20 17H16V20.375Q16 20.95 15.525 21.237Q15.05 21.525 14.55 21.275L12 20ZM4 13H20V10H4Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipRoundedFilled.displayName = 'AmauiIconMaterialCardMembershipRoundedFilled';

export default IconMaterialCardMembershipRoundedFilled;
