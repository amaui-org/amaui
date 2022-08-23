import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerSettingsNewSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewSharpFilled'
      short_name='PowerSettingsNew'

      {...props}
    >
      <path d="M11 13V3H13V13ZM12 21Q10.15 21 8.512 20.288Q6.875 19.575 5.65 18.35Q4.425 17.125 3.712 15.488Q3 13.85 3 12Q3 10 3.825 8.225Q4.65 6.45 6.15 5.15L7.6 6.6Q6.35 7.55 5.675 8.975Q5 10.4 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19Q14.925 19 16.962 16.95Q19 14.9 19 12Q19 10.4 18.337 8.975Q17.675 7.55 16.4 6.6L17.85 5.15Q19.35 6.45 20.175 8.225Q21 10 21 12Q21 13.85 20.288 15.488Q19.575 17.125 18.363 18.35Q17.15 19.575 15.513 20.288Q13.875 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewSharpFilled.displayName = 'AmauiIconMaterialPowerSettingsNewSharpFilled';

export default IconMaterialPowerSettingsNewSharpFilled;
