import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchesW100'

      short_name='Switches'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-332q-62 0-105-43t-43-105q0-62 43-105t105-43q43.511 0 78.756 22Q414-584 432-548h308q29 0 48.5 19.5T808-480q0 29-19.5 48.5T740-412H432q-18 36-53.244 58-35.245 22-78.756 22Zm0-148Zm142 40h298q17 0 28.5-11.5T780-480q0-17-11.5-28.5T740-520H442q3 9 4.5 20t1.5 20q0 9-1.5 20t-4.5 20Zm-142 80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialSwitchesW100.displayName = 'AmauiIconMaterialSwitchesW100';

export default IconMaterialSwitchesW100;
