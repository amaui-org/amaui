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
      <path d="M794 930 688 824H212v-52q0-22 13.5-41.5T262 700q55-26 109.5-39T480 648h16.5q8.5 0 16.5 1L126 262l20-20 668 668-20 20ZM480 796h180L545 681q-17-2-32.5-3.5T480 676v120Zm240-85ZM541 525l-20-20q18-11 28.5-29.5T560 436q0-33-23.5-56.5T480 356v108l-89-89q15-23 38.5-35t50.5-12q45 0 76.5 31.5T588 436q0 27-12 50.5T541 525Z"/>
    </Icon>
  );
});

IconMaterialPortraitLightingOffW100Filled.displayName = 'AmauiIconMaterialPortraitLightingOffW100Filled';

export default IconMaterialPortraitLightingOffW100Filled;
