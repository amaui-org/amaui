import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatSizeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeOutlinedW700'
      short_name='FormatSize'

      {...props}
    >
      <path d="M14 20.775V7H9V3.225H22.775V7H17.775V20.775ZM4.225 20.775V12.775H1.225V9H11V12.775H8V20.775Z"/>
    </Icon>
  )
});

export default IconMaterialFormatSizeOutlinedW700;
