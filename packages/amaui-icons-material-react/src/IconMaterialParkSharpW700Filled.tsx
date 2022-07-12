import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkSharpW700Filled'
      short_name='Park'

      {...props}
    >
      <path d="M14.375 22.85H9.625V18.85H1.425L5.425 12.85H3.4L12 0.55L20.6 12.85H18.575L22.575 18.85H14.375Z"/>
    </Icon>
  )
});

export default IconMaterialParkSharpW700Filled;
