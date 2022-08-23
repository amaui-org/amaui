import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageSharpW100Filled'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M6.3 18.7V10.7H5.4L12 4.75L18.6 10.7H17.7V18.7ZM12 15.35Q12.575 15.35 12.963 14.962Q13.35 14.575 13.35 14Q13.35 13.65 13.188 13.275Q13.025 12.9 12.425 12.025Q12.325 11.9 12.225 11.837Q12.125 11.775 12 11.775Q11.875 11.775 11.775 11.837Q11.675 11.9 11.575 12.025Q10.925 12.95 10.788 13.275Q10.65 13.6 10.65 14Q10.65 14.575 11.038 14.962Q11.425 15.35 12 15.35Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageSharpW100Filled.displayName = 'AmauiIconMaterialWaterDamageSharpW100Filled';

export default IconMaterialWaterDamageSharpW100Filled;
