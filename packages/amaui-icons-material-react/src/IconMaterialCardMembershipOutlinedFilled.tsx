import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipOutlinedFilled'
      short_name='CardMembership'

      {...props}
    >
      <path d="M4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V15Q22 15.825 21.413 16.413Q20.825 17 20 17H16V22L12 20L8 22V17H4Q3.175 17 2.588 16.413Q2 15.825 2 15V4Q2 3.175 2.588 2.587Q3.175 2 4 2ZM4 13H20V10H4Z"/>
    </Icon>
  )
});

export default IconMaterialCardMembershipOutlinedFilled;
