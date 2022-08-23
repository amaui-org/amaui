import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalSharpW100'
      short_name='Approval'

      {...props}
    >
      <path d="M5.3 19V13.6H18.7V19ZM6 16.3H18V14.3H6ZM12 13.6 8.3 8.65V8.4Q8.3 6.7 9.438 5.7Q10.575 4.7 12 4.7Q13.425 4.7 14.562 5.7Q15.7 6.7 15.7 8.4V8.65ZM12 12.4Q12 12.4 12 12.4Q12 12.4 12 12.4Q12 12.4 12 12.4Q12 12.4 12 12.4ZM12 12.4 15 8.4Q15 7.15 14.125 6.275Q13.25 5.4 12 5.4Q10.75 5.4 9.875 6.275Q9 7.15 9 8.4Z"/>
    </Icon>
  );
});

IconMaterialApprovalSharpW100.displayName = 'AmauiIconMaterialApprovalSharpW100';

export default IconMaterialApprovalSharpW100;
