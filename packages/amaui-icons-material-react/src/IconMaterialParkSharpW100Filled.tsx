import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkSharpW100Filled'
      short_name='Park'

      {...props}
    >
      <path d="M12.7 20.7H11.3V16.7H5.45L9.45 10.7H7.5L12 4.25L16.5 10.7H14.55L18.55 16.7H12.7Z"/>
    </Icon>
  );
});

IconMaterialParkSharpW100Filled.displayName = 'AmauiIconMaterialParkSharpW100Filled';

export default IconMaterialParkSharpW100Filled;
