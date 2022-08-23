import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipSharpW100Filled'
      short_name='CardMembership'

      {...props}
    >
      <path d="M9.4 19.75V15.7H3.3V3.3H20.7V15.7H14.6V19.75L12 18.45ZM4 12.45H20V10.55H4Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipSharpW100Filled.displayName = 'AmauiIconMaterialCardMembershipSharpW100Filled';

export default IconMaterialCardMembershipSharpW100Filled;
