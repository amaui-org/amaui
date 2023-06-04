import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorLampFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampFilled'

      short_name='FloorLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19v-8H4.65l2.775-9h9.15l2.775 9H13v8Zm-3 3v-2h8v2Z"/>
    </Icon>
  );
});

IconMaterialFloorLampFilled.displayName = 'AmauiIconMaterialFloorLampFilled';

export default IconMaterialFloorLampFilled;
