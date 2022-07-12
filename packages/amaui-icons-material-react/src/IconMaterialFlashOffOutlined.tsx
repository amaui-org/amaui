import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffOutlined'
      short_name='FlashOff'

      {...props}
    >
      <path d="M15.85 13 13.85 11H17ZM13.25 10.4 7 4.15V2H17ZM10 23V14H7V9.85L1.4 4.2L2.8 2.8L21.2 21.2L19.8 22.6L13.75 16.6Z"/>
    </Icon>
  )
});

export default IconMaterialFlashOffOutlined;
