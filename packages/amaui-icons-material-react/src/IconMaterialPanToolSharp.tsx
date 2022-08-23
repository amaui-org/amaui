import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolSharp'
      short_name='PanTool'

      {...props}
    >
      <path d="M9.5 24H22V3.65H19V0.9H15.55V0H11V2.3H8V14.4L4.1 12.425L1 15.15ZM10.325 22 3.9 15.3 4.4 14.8 10 17.65V4.3H11V12H13V2H14V12H16V2.9H17V12H19V5.65H20V22Z"/>
    </Icon>
  );
});

IconMaterialPanToolSharp.displayName = 'AmauiIconMaterialPanToolSharp';

export default IconMaterialPanToolSharp;
