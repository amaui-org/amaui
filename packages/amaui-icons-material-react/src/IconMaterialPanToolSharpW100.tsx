import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolSharpW100'
      short_name='PanTool'

      {...props}
    >
      <path d="M11.2 22H20.8V5.45H18.2V2.7H15.65V1.8H12.9V4.1H10.4V16.25L5.675 13.725L4.25 15ZM11.45 21.3 5.25 15.05 5.8 14.6 11.1 17.4V4.8H12.3V12H13.7V2.5H14.9V12H16.3V3.4H17.5V12H18.9V6.15H20.1V21.3Z"/>
    </Icon>
  );
});

IconMaterialPanToolSharpW100.displayName = 'AmauiIconMaterialPanToolSharpW100';

export default IconMaterialPanToolSharpW100;
