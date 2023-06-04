import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardDrive2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDrive2W100'

      short_name='HardDrive2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M556 836q11 0 19.5-8.5T584 808q0-11-8.5-19.5T556 780q-11 0-19.5 8.5T528 808q0 11 8.5 19.5T556 836Zm116 0q11 0 19.5-8.5T700 808q0-11-8.5-19.5T672 780q-11 0-19.5 8.5T644 808q0 11 8.5 19.5T672 836ZM172 642V228h616v414h-28V256H200v386h-28Zm28 28v226h560V670H200Zm-28 254V642h616v282H172Zm28-282h560-560Zm0 28h560-560Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2W100.displayName = 'AmauiIconMaterialHardDrive2W100';

export default IconMaterialHardDrive2W100;
