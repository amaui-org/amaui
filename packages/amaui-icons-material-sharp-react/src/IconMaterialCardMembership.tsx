import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardMembership = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembership'

      short_name='CardMembership'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13v2h16v-2Zm4 9v-5H2V2h20v15h-6v5l-4-2ZM4 10h16V4H4Zm0 5V4v11Z"/>
    </Icon>
  );
});

IconMaterialCardMembership.displayName = 'AmauiIconMaterialCardMembership';

export default IconMaterialCardMembership;
