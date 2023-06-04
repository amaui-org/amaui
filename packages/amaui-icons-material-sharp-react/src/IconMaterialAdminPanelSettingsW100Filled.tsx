import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdminPanelSettingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminPanelSettingsW100Filled'

      short_name='AdminPanelSettings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.65q-.35-.125-.812-.188-.463-.062-.888-.062-2.375 0-4.037 1.662Q11.3 14.625 11.3 17q0 .875.275 1.775.275.9.9 1.7-.125.05-.237.087-.113.038-.238.088Zm5 .05q-1.55 0-2.625-1.075T13.3 17q0-1.55 1.075-2.625T17 13.3q1.55 0 2.625 1.075T20.7 17q0 1.55-1.075 2.625T17 20.7Zm0-.7q.8 0 1.438-.35.637-.35 1.062-.95-.575-.35-1.2-.525Q17.675 18 17 18t-1.3.175q-.625.175-1.2.525.425.6 1.062.95Q16.2 20 17 20Zm0-3q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q17.625 14 17 14t-1.062.438q-.438.437-.438 1.062t.438 1.062Q16.375 17 17 17Z"/>
    </Icon>
  );
});

IconMaterialAdminPanelSettingsW100Filled.displayName = 'AmauiIconMaterialAdminPanelSettingsW100Filled';

export default IconMaterialAdminPanelSettingsW100Filled;
