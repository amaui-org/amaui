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
      <path d="M556 836q11 0 19.5-8.5T584 808q0-11-8.5-19.5T556 780q-11 0-19.5 8.5T528 808q0 11 8.5 19.5T556 836Zm116 0q11 0 19.5-8.5T700 808q0-11-8.5-19.5T672 780q-11 0-19.5 8.5T644 808q0 11 8.5 19.5T672 836ZM172 642V288q0-26 17-43t43-17h496q26 0 43 17t17 43v354h-28V288q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v354h-28Zm28 28v194q0 12 10 22t22 10h496q12 0 22-10t10-22V670H200Zm32 254q-26 0-43-17t-17-43V642h616v222q0 26-17 43t-43 17H232Zm-32-282h560-560Zm0 28h560-560Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2W100.displayName = 'AmauiIconMaterialHardDrive2W100';

export default IconMaterialHardDrive2W100;
