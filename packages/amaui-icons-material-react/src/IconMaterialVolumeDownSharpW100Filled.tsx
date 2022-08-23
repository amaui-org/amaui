import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownSharpW100Filled'
      short_name='VolumeDown'

      {...props}
    >
      <path d="M12.7 16.85 9.55 13.7H6.3V10.3H9.55L12.7 7.15ZM15.7 15.1V8.85Q16.425 9.375 16.812 10.212Q17.2 11.05 17.2 12Q17.2 12.95 16.812 13.762Q16.425 14.575 15.7 15.1Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownSharpW100Filled.displayName = 'AmauiIconMaterialVolumeDownSharpW100Filled';

export default IconMaterialVolumeDownSharpW100Filled;
