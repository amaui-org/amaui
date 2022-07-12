import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewSharpFilled'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M3 21V3H12V5H5V19H19V12H21V21ZM9.7 15.7 8.3 14.3 17.6 5H14V3H21V10H19V6.4Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInNewSharpFilled;
