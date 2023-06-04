import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorLampW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampW100'

      short_name='FloorLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19v-8H6.4l2-6.4h7.2l2 6.4h-5.25v8Zm-4.3-8.7h9.3l-1.55-5H8.9Zm1.3 10.4V20h6.7v.7ZM12 7.8Z"/>
    </Icon>
  );
});

IconMaterialFloorLampW100.displayName = 'AmauiIconMaterialFloorLampW100';

export default IconMaterialFloorLampW100;
