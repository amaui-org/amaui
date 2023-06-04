import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardMembershipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipFilled'

      short_name='CardMembership'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22v-5H2V2h20v15h-6v5l-4-2Zm-4-9h16v-3H4Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipFilled.displayName = 'AmauiIconMaterialCardMembershipFilled';

export default IconMaterialCardMembershipFilled;
