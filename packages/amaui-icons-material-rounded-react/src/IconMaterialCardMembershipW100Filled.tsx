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
      <path d="M10.475 19.2q-.375.2-.725-.025t-.35-.65V15.7H4.8q-.625 0-1.063-.438Q3.3 14.825 3.3 14.2V4.8q0-.625.437-1.063Q4.175 3.3 4.8 3.3h14.4q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.062-.438.438-1.063.438h-4.6v2.825q0 .425-.35.65-.35.225-.725.025L12 18.45ZM4 12.45h16v-1.9H4Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipW100Filled.displayName = 'AmauiIconMaterialCardMembershipW100Filled';

export default IconMaterialCardMembershipW100Filled;
