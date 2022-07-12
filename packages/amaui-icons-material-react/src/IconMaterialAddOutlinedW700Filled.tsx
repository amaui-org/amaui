import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddOutlinedW700Filled'
      short_name='Add'

      {...props}
    >
      <path d="M10.425 19.575V13.575H4.425V10.425H10.425V4.425H13.575V10.425H19.575V13.575H13.575V19.575Z"/>
    </Icon>
  )
});

export default IconMaterialAddOutlinedW700Filled;
