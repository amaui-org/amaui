import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipRounded'
      short_name='CardMembership'

      {...props}
    >
      <path d="M4 13V15Q4 15 4 15Q4 15 4 15H20Q20 15 20 15Q20 15 20 15V13ZM9.45 21.275Q8.95 21.525 8.475 21.237Q8 20.95 8 20.375V17H4Q3.175 17 2.588 16.413Q2 15.825 2 15V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V15Q22 15.825 21.413 16.413Q20.825 17 20 17H16V20.375Q16 20.95 15.525 21.237Q15.05 21.525 14.55 21.275L12 20ZM4 10H20V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 15V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V15Q4 15 4 15Q4 15 4 15Q4 15 4 15Q4 15 4 15Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipRounded.displayName = 'AmauiIconMaterialCardMembershipRounded';

export default IconMaterialCardMembershipRounded;
