import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsTimelapseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsTimelapseW100Filled'

      short_name='SettingsTimelapse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m416-132-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5v14H565q1-4 1-7v-7q0-37-25.5-62.5T478-568q-37 0-62.5 25.5T390-480q0 26 13.5 47.5T440-400v268h-24Zm284-42v-192l160 96-160 96Zm-160 0v-192l160 96-160 96Z"/>
    </Icon>
  );
});

IconMaterialSettingsTimelapseW100Filled.displayName = 'AmauiIconMaterialSettingsTimelapseW100Filled';

export default IconMaterialSettingsTimelapseW100Filled;
