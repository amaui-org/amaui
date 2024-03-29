import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApprovalDelegationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalDelegationFilled'

      short_name='ApprovalDelegation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.925 11.05 8.675 6.8 10.1 5.4l2.825 2.825 5.675-5.65 1.4 1.4ZM14 22.5l-7-1.95V11h1.95l6.2 2.3q.825.3 1.338 1.05Q17 15.1 17 16h-2q-1.05 0-1.65-.075-.6-.075-1.05-.225l-2-.65-.3.95 1.575.575q.7.275 1.275.35.575.075 1.35.075H19q1.65 0 2.325.538Q22 18.075 22 19v1ZM1 22V11h4v11Z"/>
    </Icon>
  );
});

IconMaterialApprovalDelegationFilled.displayName = 'AmauiIconMaterialApprovalDelegationFilled';

export default IconMaterialApprovalDelegationFilled;
