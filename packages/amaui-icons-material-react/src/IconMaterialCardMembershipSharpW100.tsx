import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipSharpW100'
      short_name='CardMembership'

      {...props}
    >
      <path d="M4 12.45V15H20V12.45ZM9.4 19.75V15.7H3.3V3.3H20.7V15.7H14.6V19.75L12 18.45ZM4 10.55H20V4H4ZM4 15V4V15Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipSharpW100.displayName = 'AmauiIconMaterialCardMembershipSharpW100';

export default IconMaterialCardMembershipSharpW100;
