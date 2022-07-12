import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffOutlined'
      short_name='FlashlightOff'

      {...props}
    >
      <path d="M19.8 22.6 16 18.8V22H8V10.8L1.4 4.2L2.8 2.8L21.2 21.2ZM10 20H12H14V16.8L10 12.8ZM16 13.15 14 11.15V10.4L16 7.4V7H9.85L7.85 5H16V4H6.85L6 3.15V2H18V8L16 11ZM12 14.8ZM12 9.15Z"/>
    </Icon>
  )
});

export default IconMaterialFlashlightOffOutlined;
