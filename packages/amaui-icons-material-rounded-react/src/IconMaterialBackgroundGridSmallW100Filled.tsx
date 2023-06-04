import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackgroundGridSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundGridSmallW100Filled'

      short_name='BackgroundGridSmall'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884h73V751H172v73q0 24.75 17.625 42.375T232 884Zm101 0h133V751H333v133Zm161 0h133V751H494v133Zm161 0h73q24.75 0 42.375-17.625T788 824v-73H655v133ZM172 401h133V268h-73q-24.75 0-42.375 17.625T172 328v73Zm0 161h133V429H172v133Zm0 161h133V590H172v133Zm161-322h133V268H333v133Zm0 161h133V429H333v133Zm0 161h133V590H333v133Zm161-322h133V268H494v133Zm0 161h133V429H494v133Zm0 161h133V590H494v133Zm161-322h133v-73q0-24.75-17.625-42.375T728 268h-73v133Zm0 161h133V429H655v133Zm0 161h133V590H655v133Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmallW100Filled.displayName = 'AmauiIconMaterialBackgroundGridSmallW100Filled';

export default IconMaterialBackgroundGridSmallW100Filled;
