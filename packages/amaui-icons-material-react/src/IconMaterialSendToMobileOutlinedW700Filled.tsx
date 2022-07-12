import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendToMobileOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileOutlinedW700Filled'
      short_name='SendToMobile'

      {...props}
    >
      <path d="M17 16 15.6 14.6 17.15 13H12V11H17.15L15.6 9.4L17 8L21 12ZM7.375 23.775Q6.075 23.775 5.15 22.85Q4.225 21.925 4.225 20.625V3.375Q4.225 2.075 5.15 1.15Q6.075 0.225 7.375 0.225H16.625Q17.925 0.225 18.85 1.15Q19.775 2.075 19.775 3.375V7H16.625V6.375H7.375V17.625H16.625V17H19.775V20.625Q19.775 21.925 18.85 22.85Q17.925 23.775 16.625 23.775Z"/>
    </Icon>
  )
});

export default IconMaterialSendToMobileOutlinedW700Filled;
