import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImportantDevicesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportantDevicesSharpFilled'
      short_name='ImportantDevices'

      {...props}
    >
      <path d="M8.7 13.75 11 12 13.3 13.75 12.45 10.9 14.75 9.05H11.9L11 6.25L10.1 9.05H7.25L9.55 10.9ZM16 21V11H22V21ZM17 19H21V13H17ZM8 21V19H10V17H2V3H20V10H15V17H12V19H14V21Z"/>
    </Icon>
  );
});

IconMaterialImportantDevicesSharpFilled.displayName = 'AmauiIconMaterialImportantDevicesSharpFilled';

export default IconMaterialImportantDevicesSharpFilled;
