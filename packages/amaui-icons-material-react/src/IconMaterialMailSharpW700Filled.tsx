import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailSharpW700Filled'
      short_name='Mail'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM12 14.075 19.7 9.075V6.3L12 11.3L4.3 6.3V9.075Z"/>
    </Icon>
  )
});

export default IconMaterialMailSharpW700Filled;
