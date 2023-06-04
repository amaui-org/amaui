import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardMembershipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipW100Filled'

      short_name='CardMembership'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 19.75V15.7H3.3V3.3h17.4v12.4h-6.1v4.05l-2.6-1.3ZM4 12.45h16v-1.9H4Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipW100Filled.displayName = 'AmauiIconMaterialCardMembershipW100Filled';

export default IconMaterialCardMembershipW100Filled;
