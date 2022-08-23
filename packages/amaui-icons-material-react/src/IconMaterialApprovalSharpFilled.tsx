import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalSharpFilled'
      short_name='Approval'

      {...props}
    >
      <path d="M4 22V14H20V22ZM6 18H18V16H6ZM12 14 7 7Q7 4.925 8.463 3.463Q9.925 2 12 2Q14.075 2 15.538 3.463Q17 4.925 17 7Z"/>
    </Icon>
  );
});

IconMaterialApprovalSharpFilled.displayName = 'AmauiIconMaterialApprovalSharpFilled';

export default IconMaterialApprovalSharpFilled;
