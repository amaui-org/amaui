import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartDisplayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayW100'

      short_name='SmartDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 15.3 15.3 12l-5.15-3.3ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayW100.displayName = 'AmauiIconMaterialSmartDisplayW100';

export default IconMaterialSmartDisplayW100;
