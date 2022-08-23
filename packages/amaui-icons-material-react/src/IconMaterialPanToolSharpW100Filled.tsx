import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolSharpW100Filled'
      short_name='PanTool'

      {...props}
    >
      <path d="M11.2 22 4.25 15 5.675 13.725 10.1 16.075V4.1H12.25V12H12.95V1.8H15.1V12H15.8V2.7H17.95V12H18.65V5.45H20.8V22Z"/>
    </Icon>
  );
});

IconMaterialPanToolSharpW100Filled.displayName = 'AmauiIconMaterialPanToolSharpW100Filled';

export default IconMaterialPanToolSharpW100Filled;
