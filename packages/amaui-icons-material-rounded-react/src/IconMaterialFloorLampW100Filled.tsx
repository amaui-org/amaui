import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampW100Filled'

      short_name='FloorLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-.15 0-.25-.1t-.1-.25V11H7.425q-.375 0-.613-.312-.237-.313-.112-.663L8.075 5.65q.15-.5.55-.775T9.5 4.6h5q.5 0 .887.275.388.275.538.775l1.375 4.375q.125.35-.112.663-.238.312-.613.312H12.35v7.65q0 .15-.1.25T12 19Zm-3 1.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T9 20h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFloorLampW100Filled.displayName = 'AmauiIconMaterialFloorLampW100Filled';

export default IconMaterialFloorLampW100Filled;
