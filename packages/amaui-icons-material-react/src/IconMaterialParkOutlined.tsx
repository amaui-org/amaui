import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkOutlined'
      short_name='Park'

      {...props}
    >
      <path d="M13.95 22H10.05V18H3L7 12H5L12 2L19 12H17L21 18H13.95ZM6.75 16H10.75H8.85H12H15.15H13.25H17.25ZM6.75 16H17.25L13.25 10H15.15L12 5.5L8.85 10H10.75Z"/>
    </Icon>
  )
});

export default IconMaterialParkOutlined;
