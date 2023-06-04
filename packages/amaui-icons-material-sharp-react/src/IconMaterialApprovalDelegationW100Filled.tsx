import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApprovalDelegationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalDelegationW100Filled'

      short_name='ApprovalDelegation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.925 11.05 9.6 7.725l.5-.475 2.825 2.825 5.675-5.65.475.475Zm.625 9.6-7.8-2.3V12.3h2.5l6 2.2q.45.175.8.637.35.463.35 1.263h-.7q-.95 0-1.712-.075-.763-.075-1.288-.275l-1.85-.65-.3.7 2 .65q.5.175 1.188.263.687.087 1.312.087h4.65q.75 0 1.15.438.4.437.4.962v.05ZM2.35 19.6v-7.3h2.7v7.3Z"/>
    </Icon>
  );
});

IconMaterialApprovalDelegationW100Filled.displayName = 'AmauiIconMaterialApprovalDelegationW100Filled';

export default IconMaterialApprovalDelegationW100Filled;
