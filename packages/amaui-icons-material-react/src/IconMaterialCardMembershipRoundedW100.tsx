import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardMembershipRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipRoundedW100'
      short_name='CardMembership'

      {...props}
    >
      <path d="M4 12.45V14.2Q4 14.55 4.225 14.775Q4.45 15 4.8 15H19.2Q19.55 15 19.775 14.775Q20 14.55 20 14.2V12.45ZM10.475 19.2Q10.1 19.4 9.75 19.175Q9.4 18.95 9.4 18.525V15.7H4.8Q4.175 15.7 3.737 15.262Q3.3 14.825 3.3 14.2V4.8Q3.3 4.175 3.737 3.737Q4.175 3.3 4.8 3.3H19.2Q19.825 3.3 20.263 3.737Q20.7 4.175 20.7 4.8V14.2Q20.7 14.825 20.263 15.262Q19.825 15.7 19.2 15.7H14.6V18.525Q14.6 18.95 14.25 19.175Q13.9 19.4 13.525 19.2L12 18.45ZM4 10.55H20V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8ZM4 14.2V4.8Q4 4.45 4 4.225Q4 4 4 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8V14.2Q4 14.55 4.225 14.775Q4.45 15 4.8 15H4Q4 15 4 14.775Q4 14.55 4 14.2Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipRoundedW100.displayName = 'AmauiIconMaterialCardMembershipRoundedW100';

export default IconMaterialCardMembershipRoundedW100;
