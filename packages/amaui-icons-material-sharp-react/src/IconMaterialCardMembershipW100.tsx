import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardMembershipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipW100'

      short_name='CardMembership'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 12.45V15h16v-2.55Zm5.4 7.3V15.7H3.3V3.3h17.4v12.4h-6.1v4.05l-2.6-1.3ZM4 10.55h16V4H4ZM4 15V4v11Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipW100.displayName = 'AmauiIconMaterialCardMembershipW100';

export default IconMaterialCardMembershipW100;
