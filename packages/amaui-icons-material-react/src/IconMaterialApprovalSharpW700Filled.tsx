import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApprovalSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalSharpW700Filled'
      short_name='Approval'

      {...props}
    >
      <path d="M2.85 23.525V14.525H21.15V23.525ZM5.625 18.925H18.375V17.3H5.625ZM12 14.525 6.2 6.475Q6.2 3.9 7.875 2.187Q9.55 0.475 12 0.475Q14.45 0.475 16.125 2.2Q17.8 3.925 17.8 6.475Z"/>
    </Icon>
  )
});

export default IconMaterialApprovalSharpW700Filled;
