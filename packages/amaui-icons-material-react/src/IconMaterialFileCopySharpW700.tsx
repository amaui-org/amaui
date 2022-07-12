import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopySharpW700'
      short_name='FileCopy'

      {...props}
    >
      <path d="M6.2 18.625V0.225H16L22.5 6.725V18.625ZM14.35 8.375V3.375H9.35V15.475H19.35V8.375ZM1.05 23.775V6.925H4.2V20.625H15.425V23.775ZM9.35 15.475V3.375V8.375V3.375V8.375V15.475Z"/>
    </Icon>
  )
});

export default IconMaterialFileCopySharpW700;
