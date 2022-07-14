import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipSharp'
      short_name='CardMembership'

      {...props}
    >
      <path d="M4 13V15H20V13ZM8 22V17H2V2H22V17H16V22L12 20ZM4 10H20V4H4ZM4 15V4V15Z"/>
    </Icon>
  );
});

export default IconMaterialCardMembershipSharp;
