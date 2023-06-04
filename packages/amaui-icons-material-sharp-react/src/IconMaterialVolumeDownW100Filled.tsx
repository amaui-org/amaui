import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownW100Filled'

      short_name='VolumeDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 16.85 9.55 13.7H6.3v-3.4h3.25l3.15-3.15Zm3-1.75V8.85q.725.525 1.112 1.362.388.838.388 1.788 0 .95-.388 1.762-.387.813-1.112 1.338Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownW100Filled.displayName = 'AmauiIconMaterialVolumeDownW100Filled';

export default IconMaterialVolumeDownW100Filled;
