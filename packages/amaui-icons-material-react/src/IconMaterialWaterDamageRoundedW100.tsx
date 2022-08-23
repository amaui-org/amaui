import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageRoundedW100'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M7.05 18.7Q6.725 18.7 6.513 18.487Q6.3 18.275 6.3 17.95V10.95H6.175Q5.9 10.95 5.8 10.7Q5.7 10.45 5.9 10.25L11.5 5.2Q11.7 5 12 5Q12.3 5 12.5 5.2L18.1 10.25Q18.3 10.45 18.2 10.7Q18.1 10.95 17.825 10.95H17.7V17.95Q17.7 18.275 17.488 18.487Q17.275 18.7 16.95 18.7ZM7 18H17V10.2L12 5.7L7 10.2ZM12 11.85ZM12 15.35Q12.575 15.35 12.963 14.962Q13.35 14.575 13.35 14Q13.35 13.65 13.188 13.275Q13.025 12.9 12.425 12.025Q12.325 11.9 12.225 11.837Q12.125 11.775 12 11.775Q11.875 11.775 11.775 11.837Q11.675 11.9 11.575 12.025Q10.925 12.95 10.788 13.275Q10.65 13.6 10.65 14Q10.65 14.575 11.038 14.962Q11.425 15.35 12 15.35Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageRoundedW100.displayName = 'AmauiIconMaterialWaterDamageRoundedW100';

export default IconMaterialWaterDamageRoundedW100;
