import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLauncherAssistantOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LauncherAssistantOnW100'

      short_name='LauncherAssistantOn'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM480 816q100 0 170-70t70-170q0-100-70-170t-170.497-70Q380 336 310 406q-70 70-70 170.497Q240 676 310 746q70 70 170 70Zm0 80q134.4 0 227.2-92.8Q800 710.4 800 576q0-134.4-92.8-227.2Q614.4 256 480 256q-134.4 0-227.2 92.8Q160 441.6 160 576q0 134.4 92.8 227.2Q345.6 896 480 896Z"/>
    </Icon>
  );
});

IconMaterialLauncherAssistantOnW100.displayName = 'AmauiIconMaterialLauncherAssistantOnW100';

export default IconMaterialLauncherAssistantOnW100;
