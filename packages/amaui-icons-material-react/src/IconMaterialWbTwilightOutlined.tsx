import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbTwilightOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilightOutlined'
      short_name='WbTwilight'

      {...props}
    >
      <path d="M18.35 10.1 16.95 8.65 19.1 6.55 20.5 7.95ZM2 20V18H22V20ZM11 7V4H13V7ZM5.65 10.05 3.55 7.9 4.95 6.5 7.1 8.65ZM5 16Q5 13.075 7.038 11.037Q9.075 9 12 9Q14.925 9 16.962 11.037Q19 13.075 19 16Z"/>
    </Icon>
  )
});

export default IconMaterialWbTwilightOutlined;
