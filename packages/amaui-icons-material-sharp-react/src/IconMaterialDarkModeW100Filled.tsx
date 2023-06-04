import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDarkModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeW100Filled'

      short_name='DarkMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.075 19.7q-3.2 0-5.45-2.25T4.375 12q0-2.825 1.787-4.938Q7.95 4.95 10.625 4.425q-.35.7-.55 1.475-.2.775-.2 1.6 0 2.8 1.95 4.75 1.95 1.95 4.75 1.95.825 0 1.6-.2.775-.2 1.45-.55-.5 2.675-2.613 4.463Q14.9 19.7 12.075 19.7Z"/>
    </Icon>
  );
});

IconMaterialDarkModeW100Filled.displayName = 'AmauiIconMaterialDarkModeW100Filled';

export default IconMaterialDarkModeW100Filled;
