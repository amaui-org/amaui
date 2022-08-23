import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalSharpW100Filled'
      short_name='Approval'

      {...props}
    >
      <path d="M5.3 19V13.6H18.7V19ZM6 16.3H18V14.3H6ZM12 13.6 8.3 8.65V8.4Q8.3 6.7 9.438 5.7Q10.575 4.7 12 4.7Q13.425 4.7 14.562 5.7Q15.7 6.7 15.7 8.4V8.65Z"/>
    </Icon>
  );
});

IconMaterialApprovalSharpW100Filled.displayName = 'AmauiIconMaterialApprovalSharpW100Filled';

export default IconMaterialApprovalSharpW100Filled;
