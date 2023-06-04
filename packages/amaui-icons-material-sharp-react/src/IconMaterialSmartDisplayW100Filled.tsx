import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartDisplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayW100Filled'

      short_name='SmartDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 15.3 15.3 12l-5.15-3.3ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayW100Filled.displayName = 'AmauiIconMaterialSmartDisplayW100Filled';

export default IconMaterialSmartDisplayW100Filled;
