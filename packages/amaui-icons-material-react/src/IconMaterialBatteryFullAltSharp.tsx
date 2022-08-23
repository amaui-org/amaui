import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryFullAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullAltSharp'
      short_name='BatteryFullAlt'

      {...props}
    >
      <path d="M2 14V10H4V8.35Q4 7.775 4.388 7.387Q4.775 7 5.35 7H20.65Q21.225 7 21.613 7.387Q22 7.775 22 8.35V15.65Q22 16.225 21.613 16.613Q21.225 17 20.65 17H5.35Q4.775 17 4.388 16.613Q4 16.225 4 15.65V14Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullAltSharp.displayName = 'AmauiIconMaterialBatteryFullAltSharp';

export default IconMaterialBatteryFullAltSharp;
