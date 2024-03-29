import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApprovalDelegation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalDelegation'

      short_name='ApprovalDelegation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.925 11.05 8.675 6.8 10.1 5.4l2.825 2.825 5.675-5.65 1.4 1.4ZM14 22.5l-7-1.95V22H1V11h7.95l6.2 2.3q.825.3 1.338 1.05Q17 15.1 17 16h2q1.25 0 2.125.825T22 19v1ZM3 20h2v-7H3Zm10.95.4 5.95-1.85q-.075-.275-.338-.413Q19.3 18 19 18h-4.8q-.775 0-1.4-.1-.625-.1-1.35-.35l-1.725-.6.575-1.9 2 .65q.45.15 1.05.225.6.075 1.65.075 0-.275-.162-.525-.163-.25-.388-.325L8.6 13H7v5.5ZM5 16.5Zm10-.5Zm-10 .5Zm2 0Z"/>
    </Icon>
  );
});

IconMaterialApprovalDelegation.displayName = 'AmauiIconMaterialApprovalDelegation';

export default IconMaterialApprovalDelegation;
