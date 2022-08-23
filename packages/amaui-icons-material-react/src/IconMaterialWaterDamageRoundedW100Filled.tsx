import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageRoundedW100Filled'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M7.05 18.7Q6.725 18.7 6.513 18.487Q6.3 18.275 6.3 17.95V10.95H6.175Q5.9 10.95 5.8 10.7Q5.7 10.45 5.9 10.25L11.5 5.2Q11.7 5 12 5Q12.3 5 12.5 5.2L18.1 10.25Q18.3 10.45 18.2 10.7Q18.1 10.95 17.825 10.95H17.7V17.95Q17.7 18.275 17.488 18.487Q17.275 18.7 16.95 18.7ZM12 15.35Q12.575 15.35 12.963 14.962Q13.35 14.575 13.35 14Q13.35 13.575 13.113 13.125Q12.875 12.675 12 11.4Q11.075 12.75 10.863 13.15Q10.65 13.55 10.65 14Q10.65 14.575 11.038 14.962Q11.425 15.35 12 15.35Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageRoundedW100Filled.displayName = 'AmauiIconMaterialWaterDamageRoundedW100Filled';

export default IconMaterialWaterDamageRoundedW100Filled;
