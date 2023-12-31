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
      <path d="M300-332q-62 0-105-43t-43-105q0-62 43-105t105-43q44 0 79 22t53 58h308q29 0 48.5 19.5T808-480q0 29-19.5 48.5T740-412H432q-18 36-53 58t-79 22Zm142-108h298q17 0 28.5-11.5T780-480q0-17-11.5-28.5T740-520H442q3 9 4.5 20t1.5 20q0 9-1.5 20t-4.5 20Z"/>
    </Icon>
  );
});

IconMaterialSwitchesW100Filled.displayName = 'AmauiIconMaterialSwitchesW100Filled';

export default IconMaterialSwitchesW100Filled;
