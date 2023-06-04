import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorLamp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLamp'

      short_name='FloorLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19v-8H4.65l2.775-9h9.15l2.775 9H13v8ZM7.35 9h9.3L15.1 4H8.9ZM8 22v-2h8v2Zm4-15.5Z"/>
    </Icon>
  );
});

IconMaterialFloorLamp.displayName = 'AmauiIconMaterialFloorLamp';

export default IconMaterialFloorLamp;
