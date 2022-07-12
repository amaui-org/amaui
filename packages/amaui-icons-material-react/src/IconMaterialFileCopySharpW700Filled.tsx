import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopySharpW700Filled'
      short_name='FileCopy'

      {...props}
    >
      <path d="M6.2 18.625V0.225H16L22.5 6.725V18.625ZM1.05 23.775V6.925H4.2V20.625H15.425V23.775ZM14.35 8.375H19.35L14.35 3.375Z"/>
    </Icon>
  )
});

export default IconMaterialFileCopySharpW700Filled;
