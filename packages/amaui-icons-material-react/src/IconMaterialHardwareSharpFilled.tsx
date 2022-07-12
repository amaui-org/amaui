import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareSharpFilled'
      short_name='Hardware'

      {...props}
    >
      <path d="M18 11 15 8V11H9V8H4Q4 5.925 5.463 4.463Q6.925 3 9 3H15V6L18 3H20V11ZM9 21V13H15V21Z"/>
    </Icon>
  )
});

export default IconMaterialHardwareSharpFilled;
