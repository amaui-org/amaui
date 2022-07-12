import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerSharpFilled'
      short_name='Computer'

      {...props}
    >
      <path d="M2 18V3H22V18ZM1 21V19H23V21Z"/>
    </Icon>
  )
});

export default IconMaterialComputerSharpFilled;
