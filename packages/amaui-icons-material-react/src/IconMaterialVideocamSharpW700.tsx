import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamSharpW700'
      short_name='Videocam'

      {...props}
    >
      <path d="M1.15 20.85V3.15H18.85V10.5L22.85 6.5V17.5L18.85 13.5V20.85ZM4.3 17.7H15.7V6.3H4.3ZM4.3 6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialVideocamSharpW700;
