import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFunctionsOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsOutlinedW700Filled'
      short_name='Functions'

      {...props}
    >
      <path d="M5.225 20.775V17.65L11.4 12L5.225 6.35V3.225H18.775V7.775H12.75L17.1 12L12.75 16.225H18.775V20.775Z"/>
    </Icon>
  )
});

export default IconMaterialFunctionsOutlinedW700Filled;
