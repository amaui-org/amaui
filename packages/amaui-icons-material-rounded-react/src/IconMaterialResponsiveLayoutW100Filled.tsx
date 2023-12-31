import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResponsiveLayoutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResponsiveLayoutW100Filled'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M618-172q-12.75 0-21.375-8.625T588-202v-326q0-24.75-17.625-42.375T528-588H410q-12.75 0-21.375-8.625T380-618v-140q0-12.75 8.625-21.375T410-788h348q12.75 0 21.375 8.625T788-758v556q0 12.75-8.625 21.375T758-172H618Zm-208 0q-12.75 0-21.375-8.625T380-202v-328q0-12.75 8.625-21.375T410-560h120q12.75 0 21.375 8.625T560-530v328q0 12.75-8.625 21.375T530-172H410Zm-208 0q-12.75 0-21.375-8.625T172-202v-328q0-12.75 8.625-21.375T202-560h120q12.75 0 21.375 8.625T352-530v328q0 12.75-8.625 21.375T322-172H202Z"/>
    </Icon>
  );
});

IconMaterialResponsiveLayoutW100Filled.displayName = 'AmauiIconMaterialResponsiveLayoutW100Filled';

export default IconMaterialResponsiveLayoutW100Filled;
