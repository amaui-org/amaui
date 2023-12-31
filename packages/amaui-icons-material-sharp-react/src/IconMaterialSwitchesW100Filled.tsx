import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchesW100Filled'

      short_name='Switches'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-332q-62 0-105-43t-43-105q0-62 43-105t105-43q44 0 79 22t53 58h376v136H432q-18 36-53 58t-79 22Zm142-108h338v-80H442q3 9 4.5 20t1.5 20q0 9-1.5 20t-4.5 20Z"/>
    </Icon>
  );
});

IconMaterialSwitchesW100Filled.displayName = 'AmauiIconMaterialSwitchesW100Filled';

export default IconMaterialSwitchesW100Filled;
