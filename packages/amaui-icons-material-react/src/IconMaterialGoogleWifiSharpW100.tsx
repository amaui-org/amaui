import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGoogleWifiSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleWifiSharpW100'
      short_name='GoogleWifi'

      {...props}
    >
      <path d="m6.4 18.4-.25-.8h-.425q-.7 0-1.175-.5-.475-.5-.425-1.2L4.7 7.1q.05-.65.5-1.075.45-.425 1.1-.425h11.4q.65 0 1.1.425.45.425.5 1.075l.575 8.8q.05.7-.425 1.2t-1.175.5h-.425l-.25.8Zm-.325-8h11.85L17.7 7.2H6.3Zm-.1 1.6-.25 4h12.55l-.25-4ZM12 11.6Z"/>
    </Icon>
  );
});

IconMaterialGoogleWifiSharpW100.displayName = 'AmauiIconMaterialGoogleWifiSharpW100';

export default IconMaterialGoogleWifiSharpW100;
