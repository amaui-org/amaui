import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipRoundedW100Filled'
      short_name='CardMembership'

      {...props}
    >
      <path d="M10.475 19.2Q10.1 19.4 9.75 19.175Q9.4 18.95 9.4 18.525V15.7H4.8Q4.175 15.7 3.737 15.262Q3.3 14.825 3.3 14.2V4.8Q3.3 4.175 3.737 3.737Q4.175 3.3 4.8 3.3H19.2Q19.825 3.3 20.263 3.737Q20.7 4.175 20.7 4.8V14.2Q20.7 14.825 20.263 15.262Q19.825 15.7 19.2 15.7H14.6V18.525Q14.6 18.95 14.25 19.175Q13.9 19.4 13.525 19.2L12 18.45ZM4 12.45H20V10.55H4Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipRoundedW100Filled.displayName = 'AmauiIconMaterialCardMembershipRoundedW100Filled';

export default IconMaterialCardMembershipRoundedW100Filled;
