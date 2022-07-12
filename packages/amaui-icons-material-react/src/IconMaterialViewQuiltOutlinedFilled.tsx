import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewQuiltOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltOutlinedFilled'
      short_name='ViewQuilt'

      {...props}
    >
      <path d="M9.825 11.5V5H21V11.5ZM15.925 19V12.5H21V19ZM9.825 19V12.5H14.925V19ZM3 19V5H8.825V19Z"/>
    </Icon>
  )
});

export default IconMaterialViewQuiltOutlinedFilled;
