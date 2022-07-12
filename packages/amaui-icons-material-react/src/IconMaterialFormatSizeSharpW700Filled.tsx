import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatSizeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeSharpW700Filled'
      short_name='FormatSize'

      {...props}
    >
      <path d="M14 20.775V7H9V3.225H22.775V7H17.775V20.775ZM4.225 20.775V12.775H1.225V9H11V12.775H8V20.775Z"/>
    </Icon>
  )
});

export default IconMaterialFormatSizeSharpW700Filled;
