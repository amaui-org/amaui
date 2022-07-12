import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInFullOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullOutlinedW700Filled'
      short_name='OpenInFull'

      {...props}
    >
      <path d="M2.425 21.575V12.425H5.575V16.2L16.2 5.575H12.425V2.425H21.575V11.575H18.425V7.8L7.8 18.425H11.575V21.575Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInFullOutlinedW700Filled;
