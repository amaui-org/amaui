import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReader = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReader'

      short_name='SmartCardReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-200h800v200H80Zm80-80h640v-40H160v40Zm40-180v-540h560v540h-80v-460H280v460h-80Zm120-60h23q44 0 70.5-44T440-560q0-72-26.5-116T343-720h-23v320Zm240-80q33 0 56.5-23.5T640-560q0-33-23.5-56.5T560-640q-33 0-56.5 23.5T480-560q0 33 23.5 56.5T560-480Zm-80 320Zm0-410Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReader.displayName = 'AmauiIconMaterialSmartCardReader';

export default IconMaterialSmartCardReader;
