import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewListOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListOutlined'
      short_name='ViewList'

      {...props}
    >
      <path d="M3 19V5H21V19ZM5 9H7V7H5ZM9 9H19V7H9ZM9 13H19V11H9ZM9 17H19V15H9ZM5 17H7V15H5ZM5 13H7V11H5Z"/>
    </Icon>
  )
});

export default IconMaterialViewListOutlined;
