import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendSharpW700Filled'
      short_name='Send'

      {...props}
    >
      <path d="M2.225 20.8V14.7L11.375 12L2.225 9.3V3.2L23 12Z"/>
    </Icon>
  )
});

export default IconMaterialSendSharpW700Filled;
