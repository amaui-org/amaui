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
      <path d="M556 836q11 0 19.5-8.5T584 808q0-11-8.5-19.5T556 780q-11 0-19.5 8.5T528 808q0 11 8.5 19.5T556 836Zm116 0q11 0 19.5-8.5T700 808q0-11-8.5-19.5T672 780q-11 0-19.5 8.5T644 808q0 11 8.5 19.5T672 836ZM172 642V288q0-26 17-43t43-17h496q26 0 43 17t17 43v354H172Zm60 282q-26 0-43-17t-17-43V670h616v194q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2W100Filled.displayName = 'AmauiIconMaterialHardDrive2W100Filled';

export default IconMaterialHardDrive2W100Filled;
