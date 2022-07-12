import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsSharpW700Filled'
      short_name='Mms'

      {...props}
    >
      <path d="M5.375 14.225H18.625L14.25 8.425L11.25 12.425L9 9.425ZM1.15 22.85V1.15H22.85V18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialMmsSharpW700Filled;
