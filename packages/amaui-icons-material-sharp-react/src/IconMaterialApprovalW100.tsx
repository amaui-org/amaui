import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApprovalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalW100'

      short_name='Approval'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19v-5.4h13.4V19Zm.7-2.7h12v-2H6Zm6-2.7L8.3 8.65V8.4q0-1.55 1.075-2.625T12 4.7q1.55 0 2.625 1.075T15.7 8.4v.25Zm0-1.175L15 8.4q0-1.25-.875-2.125T12 5.4q-1.25 0-2.125.875T9 8.4Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialApprovalW100.displayName = 'AmauiIconMaterialApprovalW100';

export default IconMaterialApprovalW100;
