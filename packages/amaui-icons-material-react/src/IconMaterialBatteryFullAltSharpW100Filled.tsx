import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryFullAltSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullAltSharpW100Filled'
      short_name='BatteryFullAlt'

      {...props}
    >
      <path d="M2.65 13.35V10.65H4.65V8.8Q4.65 8.325 4.988 7.987Q5.325 7.65 5.8 7.65H20.2Q20.675 7.65 21.013 7.987Q21.35 8.325 21.35 8.8V15.2Q21.35 15.675 21.013 16.012Q20.675 16.35 20.2 16.35H5.8Q5.325 16.35 4.988 16.012Q4.65 15.675 4.65 15.2V13.35Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryFullAltSharpW100Filled;
