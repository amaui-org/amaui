import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopPortraitW100'

      short_name='DesktopPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-260h112q13 0 21.5-8.5T620-290v-272q0-13-8.5-21.5T590-592H478q-13 0-21.5 8.5T448-562v272q0 13 8.5 21.5T478-260ZM354-360q6 0 10-4t4-10v-268q0-13 8.5-21.5T398-672h96q6 0 10-4t4-10q0-6-4-10t-10-4h-96q-23 0-40.5 17.5T340-642v268q0 6 4 10t10 4Zm394 168q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Zm-28 0v-576q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22Zm0-608H240h480Z"/>
    </Icon>
  );
});

IconMaterialDesktopPortraitW100.displayName = 'AmauiIconMaterialDesktopPortraitW100';

export default IconMaterialDesktopPortraitW100;
