import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeDownAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltW100Filled'

      short_name='VolumeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 16.85 9.55 13.7H6.3v-3.4h3.25l3.15-3.15Zm3-1.75V8.85q.725.525 1.112 1.362.388.838.388 1.788 0 .95-.388 1.762-.387.813-1.112 1.338Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownAltW100Filled.displayName = 'AmauiIconMaterialVolumeDownAltW100Filled';

export default IconMaterialVolumeDownAltW100Filled;
