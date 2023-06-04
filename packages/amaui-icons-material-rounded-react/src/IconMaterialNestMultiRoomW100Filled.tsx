import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestMultiRoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoomW100Filled'

      short_name='NestMultiRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 9.65 12 4.625l6.7 5.025Zm0 10.05h8.35v-4.325H5.3Zm9.05 0h4.35v-4.325h-4.35ZM5.3 14.675h4.35V10.35H5.3Zm5.05 0h8.35V10.35h-8.35Z"/>
    </Icon>
  );
});

IconMaterialNestMultiRoomW100Filled.displayName = 'AmauiIconMaterialNestMultiRoomW100Filled';

export default IconMaterialNestMultiRoomW100Filled;
