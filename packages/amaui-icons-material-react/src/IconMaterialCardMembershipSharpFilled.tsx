import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipSharpFilled'
      short_name='CardMembership'

      {...props}
    >
      <path d="M8 22V17H2V2H22V17H16V22L12 20ZM4 13H20V10H4Z"/>
    </Icon>
  )
});

export default IconMaterialCardMembershipSharpFilled;
