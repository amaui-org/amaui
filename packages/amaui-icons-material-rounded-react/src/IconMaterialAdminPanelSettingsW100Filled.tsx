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
      <path d="M17 17q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q17.625 14 17 14t-1.062.438q-.438.437-.438 1.062t.438 1.062Q16.375 17 17 17Zm0 3q.8 0 1.438-.35.637-.35 1.062-.95-.575-.35-1.2-.525Q17.675 18 17 18t-1.3.175q-.625.175-1.2.525.425.6 1.062.95Q16.2 20 17 20Zm0 .7q-1.55 0-2.625-1.075T13.3 17q0-1.55 1.075-2.625T17 13.3q1.55 0 2.625 1.075T20.7 17q0 1.55-1.075 2.625T17 20.7Zm-5-.125h-.188q-.087 0-.187-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.6q-.5-.125-.85-.188-.35-.062-.85-.062-2.375 0-4.037 1.662Q11.3 14.625 11.3 17q0 .95.3 1.837.3.888.875 1.638-.125.05-.237.075-.113.025-.238.025Z"/>
    </Icon>
  );
});

IconMaterialAdminPanelSettingsW100Filled.displayName = 'AmauiIconMaterialAdminPanelSettingsW100Filled';

export default IconMaterialAdminPanelSettingsW100Filled;
