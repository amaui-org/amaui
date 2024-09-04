import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrafficJamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrafficJamFilled'

      short_name='TrafficJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80H40v-360l100-240h440l100 240v360H560v-80H160v80Zm-8-440h415l-33-80H186l-34 80Zm68 240q25 0 42.5-17.5T280-340q0-25-17.5-42.5T220-400q-25 0-42.5 17.5T160-340q0 25 17.5 42.5T220-280Zm280 0q25 0 42.5-17.5T560-340q0-25-17.5-42.5T500-400q-25 0-42.5 17.5T440-340q0 25 17.5 42.5T500-280Zm220 80v-344l-73-176H227l33-80h440l100 240v360h-80Zm120-120v-344l-73-176H347l33-80h440l100 240v360h-80Z"/>
    </Icon>
  );
});

IconMaterialTrafficJamFilled.displayName = 'AmauiIconMaterialTrafficJamFilled';

export default IconMaterialTrafficJamFilled;
