import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipOutlinedW100Filled'
      short_name='CardMembership'

      {...props}
    >
      <path d="M4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V14.2Q20.7 14.85 20.275 15.275Q19.85 15.7 19.2 15.7H14.6V19.75L12 18.45L9.4 19.75V15.7H4.8Q4.15 15.7 3.725 15.275Q3.3 14.85 3.3 14.2V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3ZM4 12.45H20V10.55H4Z"/>
    </Icon>
  )
});

export default IconMaterialCardMembershipOutlinedW100Filled;
