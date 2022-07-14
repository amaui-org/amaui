import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowSharp'
      short_name='EdgesensorLow'

      {...props}
    >
      <path d="M6 22V2H18V22ZM8 17H16V7H8ZM8 5H16V4H8ZM8 20H16V19H8ZM2 14V7H4V14ZM20 17V10H22V17ZM8 5V4V5ZM8 20V19V20Z"/>
    </Icon>
  );
});

export default IconMaterialEdgesensorLowSharp;
