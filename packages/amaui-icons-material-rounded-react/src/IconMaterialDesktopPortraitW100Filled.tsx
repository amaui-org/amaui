import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopPortraitW100Filled'

      short_name='DesktopPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-260h112q13 0 21.5-8.5T620-290v-272q0-13-8.5-21.5T590-592H478q-13 0-21.5 8.5T448-562v272q0 13 8.5 21.5T478-260ZM354-360q6 0 10-4t4-10v-268q0-13 8.5-21.5T398-672h96q6 0 10-4t4-10q0-6-4-10t-10-4h-96q-23 0-40.5 17.5T340-642v268q0 6 4 10t10 4Zm394 168q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Z"/>
    </Icon>
  );
});

IconMaterialDesktopPortraitW100Filled.displayName = 'AmauiIconMaterialDesktopPortraitW100Filled';

export default IconMaterialDesktopPortraitW100Filled;
