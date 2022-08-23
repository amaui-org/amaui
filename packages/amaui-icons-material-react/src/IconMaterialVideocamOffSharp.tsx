import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffSharp'
      short_name='VideocamOff'

      {...props}
    >
      <path d="M22 17.5 18 13.5V15.175L16 13.175V6H8.825L6.825 4H18V10.5L22 6.5ZM2 20V4.8L0.65 3.45L2.05 2.05L21.95 21.95L20.55 23.35L17.2 20ZM4 18H15.15L4 6.85ZM12.45 9.625ZM9.55 12.4Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffSharp.displayName = 'AmauiIconMaterialVideocamOffSharp';

export default IconMaterialVideocamOffSharp;
