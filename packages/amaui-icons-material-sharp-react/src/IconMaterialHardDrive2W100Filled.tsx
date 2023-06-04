import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardDrive2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDrive2W100Filled'

      short_name='HardDrive2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M556 836q11 0 19.5-8.5T584 808q0-11-8.5-19.5T556 780q-11 0-19.5 8.5T528 808q0 11 8.5 19.5T556 836Zm116 0q11 0 19.5-8.5T700 808q0-11-8.5-19.5T672 780q-11 0-19.5 8.5T644 808q0 11 8.5 19.5T672 836ZM172 642V228h616v414H172Zm0 282V670h616v254H172Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2W100Filled.displayName = 'AmauiIconMaterialHardDrive2W100Filled';

export default IconMaterialHardDrive2W100Filled;
