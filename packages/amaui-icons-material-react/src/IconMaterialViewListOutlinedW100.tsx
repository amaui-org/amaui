import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewListOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListOutlinedW100'
      short_name='ViewList'

      {...props}
    >
      <path d="M4.3 17.2V6.45H19.7V17.2ZM5 9.8H7.65V7.15H5ZM8.35 9.8H19V7.15H8.35ZM8.35 13.15H19V10.5H8.35ZM8.35 16.5H19V13.85H8.35ZM5 16.5H7.65V13.85H5ZM5 13.15H7.65V10.5H5Z"/>
    </Icon>
  )
});

export default IconMaterialViewListOutlinedW100;
