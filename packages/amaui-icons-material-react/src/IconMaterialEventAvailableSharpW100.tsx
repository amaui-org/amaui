import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventAvailableSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailableSharpW100'
      short_name='EventAvailable'

      {...props}
    >
      <path d="M10.95 17.4 8.3 14.75 8.8 14.25 10.95 16.4 15.2 12.15 15.7 12.65ZM4.3 20.7V5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H19.7V20.7ZM5 20H19V10.8H5ZM5 10.1H19V6H5ZM5 10.1V6V10.1Z"/>
    </Icon>
  );
});

IconMaterialEventAvailableSharpW100.displayName = 'AmauiIconMaterialEventAvailableSharpW100';

export default IconMaterialEventAvailableSharpW100;
