import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsVideoCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVideoCameraW100Filled'

      short_name='SettingsVideoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-132v-248h248v93l62-62v186l-62-62v93H540Zm-124 0-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5H566q0-37-25.5-62.5T478-568q-37 0-62.5 25.5T390-480q0 27 13.5 48t36.5 32v268h-24Z"/>
    </Icon>
  );
});

IconMaterialSettingsVideoCameraW100Filled.displayName = 'AmauiIconMaterialSettingsVideoCameraW100Filled';

export default IconMaterialSettingsVideoCameraW100Filled;
