import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffSharpFilled'
      short_name='VideocamOff'

      {...props}
    >
      <path d="M20.55 23.35 17.2 20H2V4.8L0.65 3.45L2.05 2.05L21.95 21.95ZM22 17.5 18 13.5V15.175L6.825 4H18V10.5L22 6.5Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffSharpFilled.displayName = 'AmauiIconMaterialVideocamOffSharpFilled';

export default IconMaterialVideocamOffSharpFilled;
