import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageSharpFilled'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M5 20V12H2L12 3L22 12H19V20ZM12 16Q12.825 16 13.413 15.412Q14 14.825 14 14Q14 13.4 13.725 12.775Q13.45 12.15 12.575 10.825Q12.45 10.65 12.3 10.562Q12.15 10.475 12 10.475Q11.85 10.475 11.7 10.562Q11.55 10.65 11.425 10.825Q10.55 12.15 10.275 12.775Q10 13.4 10 14Q10 14.825 10.588 15.412Q11.175 16 12 16Z"/>
    </Icon>
  );
});

export default IconMaterialWaterDamageSharpFilled;
