import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddSharpFilled'
      short_name='Add'

      {...props}
    >
      <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19Z"/>
    </Icon>
  )
});

export default IconMaterialAddSharpFilled;
