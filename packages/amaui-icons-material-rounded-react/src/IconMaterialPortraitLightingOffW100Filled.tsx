import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPortraitLightingOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PortraitLightingOffW100Filled'

      short_name='PortraitLightingOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m784 920-96-96H242q-13 0-21.5-8.5T212 794v-22q0-22 13.5-41.5T262 700q55-26 109.5-39T480 648h16.5q8.5 0 16.5 1L136 272q-4-4-4.5-9.5T136 252q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804 920q-5 5-10 5t-10-5ZM480 796h180L545 681q-17-2-32.5-3.5T480 676v120Zm240-85ZM541 525l-20-20q18-11 28.5-29.5T560 436q0-33-23.5-56.5T480 356v108l-89-89q15-23 38.5-35t50.5-12q45 0 76.5 31.5T588 436q0 27-12 50.5T541 525Z"/>
    </Icon>
  );
});

IconMaterialPortraitLightingOffW100Filled.displayName = 'AmauiIconMaterialPortraitLightingOffW100Filled';

export default IconMaterialPortraitLightingOffW100Filled;
