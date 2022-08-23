import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageRounded'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M6 20Q5.575 20 5.287 19.712Q5 19.425 5 19V12H3.3Q2.95 12 2.825 11.675Q2.7 11.35 2.975 11.125L11.325 3.6Q11.6 3.325 12 3.325Q12.4 3.325 12.675 3.6L21.025 11.125Q21.3 11.35 21.175 11.675Q21.05 12 20.7 12H19V19Q19 19.425 18.712 19.712Q18.425 20 18 20ZM7 18H17V10.2L12 5.7L7 10.2ZM12 11.85ZM12 16Q12.825 16 13.413 15.412Q14 14.825 14 14Q14 13.4 13.725 12.775Q13.45 12.15 12.575 10.825Q12.45 10.65 12.3 10.562Q12.15 10.475 12 10.475Q11.85 10.475 11.7 10.562Q11.55 10.65 11.425 10.825Q10.55 12.15 10.275 12.775Q10 13.4 10 14Q10 14.825 10.588 15.412Q11.175 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageRounded.displayName = 'AmauiIconMaterialWaterDamageRounded';

export default IconMaterialWaterDamageRounded;
