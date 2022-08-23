import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDamageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageSharpW100'
      short_name='WaterDamage'

      {...props}
    >
      <path d="M6.3 18.7V10.7H5.4L12 4.75L18.6 10.7H17.7V18.7ZM7 18H17V10.2L12 5.7L7 10.2ZM12 15.35Q12.575 15.35 12.963 14.962Q13.35 14.575 13.35 14Q13.35 13.575 13.113 13.125Q12.875 12.675 12 11.4Q11.075 12.75 10.863 13.15Q10.65 13.55 10.65 14Q10.65 14.575 11.038 14.962Q11.425 15.35 12 15.35ZM12 11.85Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageSharpW100.displayName = 'AmauiIconMaterialWaterDamageSharpW100';

export default IconMaterialWaterDamageSharpW100;
