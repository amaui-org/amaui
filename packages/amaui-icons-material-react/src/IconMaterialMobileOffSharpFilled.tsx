import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffSharpFilled'
      short_name='MobileOff'

      {...props}
    >
      <path d="M20.5 23.3 0.7 3.5 2.1 2.1 21.9 21.9ZM5 6.425 7 8.425V18H16.6L19 20.4V23H5ZM19 1V16.15L17 14.15V6H8.825L5.15 2.3V1Z"/>
    </Icon>
  )
});

export default IconMaterialMobileOffSharpFilled;
