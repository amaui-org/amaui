import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartDisplay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplay'

      short_name='SmartDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 16.5 7-4.5-7-4.5ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplay.displayName = 'AmauiIconMaterialSmartDisplay';

export default IconMaterialSmartDisplay;
