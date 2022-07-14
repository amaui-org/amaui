import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampSharpW100'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M11.65 19v-8H6.4l2-6.4h7.2l2 6.4h-5.25v8Zm-4.3-8.7h9.3l-1.55-5H8.9Zm1.3 10.4V20h6.7v.7ZM12 7.8Z"/>
    </Icon>
  );
});

export default IconMaterialFloorLampSharpW100;
