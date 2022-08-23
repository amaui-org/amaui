import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalSharp'
      short_name='Approval'

      {...props}
    >
      <path d="M4 22V14H20V22ZM6 18H18V16H6ZM12 14 7 7Q7 4.925 8.463 3.463Q9.925 2 12 2Q14.075 2 15.538 3.463Q17 4.925 17 7ZM12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11ZM12 11 15 7Q15 5.75 14.125 4.875Q13.25 4 12 4Q10.75 4 9.875 4.875Q9 5.75 9 7Z"/>
    </Icon>
  );
});

IconMaterialApprovalSharp.displayName = 'AmauiIconMaterialApprovalSharp';

export default IconMaterialApprovalSharp;
