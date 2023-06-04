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
      <path d="M4 12.45v1.75q0 .35.225.575Q4.45 15 4.8 15h14.4q.35 0 .575-.225Q20 14.55 20 14.2v-1.75Zm6.475 6.75q-.375.2-.725-.025t-.35-.65V15.7H4.8q-.625 0-1.063-.438Q3.3 14.825 3.3 14.2V4.8q0-.625.437-1.063Q4.175 3.3 4.8 3.3h14.4q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.062-.438.438-1.063.438h-4.6v2.825q0 .425-.35.65-.35.225-.725.025L12 18.45ZM4 10.55h16V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0 3.65V4h.8q-.35 0-.575.225Q4 4.45 4 4.8v9.4q0 .35.225.575Q4.45 15 4.8 15H4V14.2Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipW100.displayName = 'AmauiIconMaterialCardMembershipW100';

export default IconMaterialCardMembershipW100;
