import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeDownAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltW100'

      short_name='VolumeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 13.7v-3.4h3.25l3.15-3.15v9.7L9.55 13.7Zm9.4 1.4V8.85q.725.525 1.112 1.362.388.838.388 1.788 0 .95-.388 1.762-.387.813-1.112 1.338ZM12 8.85 9.85 11H7v2h2.85L12 15.15ZM9.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownAltW100.displayName = 'AmauiIconMaterialVolumeDownAltW100';

export default IconMaterialVolumeDownAltW100;
