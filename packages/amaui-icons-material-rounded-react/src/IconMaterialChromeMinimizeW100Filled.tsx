import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeMinimizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMinimizeW100Filled'

      short_name='ChromeMinimize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M226 844q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h508q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975 840q-4.025 4-9.975 4H226Z"/>
    </Icon>
  );
});

IconMaterialChromeMinimizeW100Filled.displayName = 'AmauiIconMaterialChromeMinimizeW100Filled';

export default IconMaterialChromeMinimizeW100Filled;
