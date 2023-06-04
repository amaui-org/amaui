import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGoogleWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleWifiW100Filled'

      short_name='GoogleWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.4 18.4-.25-.8h-.425q-.7 0-1.175-.5-.475-.5-.425-1.2l.25-3.9h15.25l.25 3.9q.05.7-.425 1.2t-1.175.5h-.425l-.25.8Zm-1.925-8L4.7 7.1q.05-.65.5-1.075.45-.425 1.1-.425h11.4q.65 0 1.1.425.45.425.5 1.075l.225 3.3Z"/>
    </Icon>
  );
});

IconMaterialGoogleWifiW100Filled.displayName = 'AmauiIconMaterialGoogleWifiW100Filled';

export default IconMaterialGoogleWifiW100Filled;
