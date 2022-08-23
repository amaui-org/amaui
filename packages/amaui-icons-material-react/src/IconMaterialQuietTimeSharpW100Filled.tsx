import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeSharpW100Filled'
      short_name='QuietTime'

      {...props}
    >
      <path d="M13.1 21.7q-1.825 0-3.425-.688-1.6-.687-2.8-1.887-1.2-1.2-1.887-2.8-.688-1.6-.688-3.425 0-2.7 1.487-4.913 1.488-2.212 3.988-3.212 0 2.3.85 4.4.85 2.1 2.475 3.725t3.725 2.475q2.1.85 4.4.85-1 2.5-3.212 3.987Q15.8 21.7 13.1 21.7Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeSharpW100Filled.displayName = 'AmauiIconMaterialQuietTimeSharpW100Filled';

export default IconMaterialQuietTimeSharpW100Filled;
