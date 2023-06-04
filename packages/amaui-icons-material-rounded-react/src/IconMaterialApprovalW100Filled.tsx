import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApprovalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalW100Filled'

      short_name='Approval'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.2 19H6.8q-.625 0-1.062-.438Q5.3 18.125 5.3 17.5v-2.4q0-.65.425-1.075Q6.15 13.6 6.8 13.6h10.4q.625 0 1.062.437.438.438.438 1.063v2.4q0 .625-.438 1.062Q17.825 19 17.2 19Zm0-2.7q.35 0 .575-.225Q18 15.85 18 15.5v-.4q0-.35-.225-.575-.225-.225-.575-.225H6.8q-.35 0-.575.225Q6 14.75 6 15.1v.4q0 .35.225.575.225.225.575.225Zm-1.85-7.2-2.75 3.7q-.125.15-.275.225-.15.075-.325.075-.175 0-.325-.075-.15-.075-.275-.225L8.65 9.1q-.175-.225-.263-.487Q8.3 8.35 8.3 8.075q0-1.45 1.1-2.413Q10.5 4.7 12 4.7t2.6.962q1.1.963 1.1 2.413 0 .275-.087.538-.088.262-.263.487Z"/>
    </Icon>
  );
});

IconMaterialApprovalW100Filled.displayName = 'AmauiIconMaterialApprovalW100Filled';

export default IconMaterialApprovalW100Filled;
