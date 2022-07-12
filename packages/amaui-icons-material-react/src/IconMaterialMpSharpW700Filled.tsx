import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMpSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpSharpW700Filled'
      short_name='Mp'

      {...props}
    >
      <path d="M13.425 15H14.925V13.5H17.925V9H13.425ZM14.925 12V10.5H16.425V12ZM6.075 15H7.575V10.5H8.575V13.5H10.075V10.5H11.075V15H12.575V9H6.075ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialMpSharpW700Filled;
