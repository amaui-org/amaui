import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageSharp'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M5 20V12H2L12 3L22 12H19V20ZM7 18H17V10.2L12 5.7L7 10.2ZM12 16Q12.825 16 13.413 15.412Q14 14.825 14 14Q14 13.325 13.625 12.562Q13.25 11.8 12 10Q10.75 11.8 10.375 12.562Q10 13.325 10 14Q10 14.825 10.588 15.412Q11.175 16 12 16ZM12 11.85Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageSharp.displayName = 'AmauiIconMaterialWaterDamageSharp';

export default IconMaterialWaterDamageSharp;
