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
      <path d="M17.2 19H6.8q-.625 0-1.062-.438Q5.3 18.125 5.3 17.5v-2.4q0-.65.425-1.075Q6.15 13.6 6.8 13.6h10.4q.65 0 1.075.425.425.425.425 1.075v2.4q0 .625-.438 1.062Q17.825 19 17.2 19Zm0-2.7q.35 0 .575-.225Q18 15.85 18 15.5v-.4q0-.35-.225-.575-.225-.225-.575-.225H6.8q-.35 0-.575.225Q6 14.75 6 15.1v.4q0 .35.225.575.225.225.575.225Zm-1.85-7.2-2.75 3.7q-.125.15-.275.225-.15.075-.325.075-.175 0-.325-.075-.15-.075-.275-.225L8.65 9.1q-.15-.2-.237-.438-.088-.237-.088-.512 0-1.475 1.088-2.462Q10.5 4.7 12 4.7q1.5 0 2.6.988 1.1.987 1.1 2.462 0 .275-.1.512-.1.238-.25.438ZM12 12.4l3-4q0-1.25-.875-2.125T12 5.4q-1.25 0-2.125.875T9 8.4Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialApprovalW100.displayName = 'AmauiIconMaterialApprovalW100';

export default IconMaterialApprovalW100;
