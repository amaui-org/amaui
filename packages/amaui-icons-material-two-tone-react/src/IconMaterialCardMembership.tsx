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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 4h16v6H4zm0 9h16v2H4z" opacity=".3"/><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"/>
    </Icon>
  );
});

IconMaterialCardMembership.displayName = 'AmauiIconMaterialCardMembership';

export default IconMaterialCardMembership;
