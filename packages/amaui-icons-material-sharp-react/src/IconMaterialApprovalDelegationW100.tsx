import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApprovalDelegationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalDelegationW100'

      short_name='ApprovalDelegation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.925 11.05 9.6 7.725l.5-.475 2.825 2.825 5.675-5.65.475.475Zm.625 9.6-7.8-2.3v1.25h-3.4v-7.3h5.9l6 2.2q.45.175.8.637.35.463.35 1.263h3.3q.8 0 1.175.575t.375 1.525v.05ZM3.05 18.9h2V13h-2Zm10.45 1 6-1.85q0-.425-.212-.687-.213-.263-.588-.263h-4.65q-.65 0-1.325-.087-.675-.088-1.175-.263l-2-.65.3-.7 1.85.65q.525.2 1.175.275.65.075 1.825.075 0-.525-.175-.825-.175-.3-.525-.425L8.15 13h-2.4v4.6Zm-8.45-3.95Zm9.65.45Zm-9.65-.45Zm.7 0Z"/>
    </Icon>
  );
});

IconMaterialApprovalDelegationW100.displayName = 'AmauiIconMaterialApprovalDelegationW100';

export default IconMaterialApprovalDelegationW100;
