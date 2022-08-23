import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOnRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnRoundedW100Filled'
      short_name='FlashlightOn'

      {...props}
    >
      <path d="M10.8 20.7Q10.175 20.7 9.738 20.262Q9.3 19.825 9.3 19.2V10.6L7.3 7.6V6.35H16.7V7.6L14.7 10.6V19.2Q14.7 19.825 14.263 20.262Q13.825 20.7 13.2 20.7ZM12 14.85Q12.35 14.85 12.6 14.6Q12.85 14.35 12.85 14Q12.85 13.65 12.6 13.4Q12.35 13.15 12 13.15Q11.65 13.15 11.4 13.4Q11.15 13.65 11.15 14Q11.15 14.35 11.4 14.6Q11.65 14.85 12 14.85ZM7.3 5.65V4.8Q7.3 4.175 7.738 3.737Q8.175 3.3 8.8 3.3H15.2Q15.825 3.3 16.262 3.737Q16.7 4.175 16.7 4.8V5.65Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnRoundedW100Filled.displayName = 'AmauiIconMaterialFlashlightOnRoundedW100Filled';

export default IconMaterialFlashlightOnRoundedW100Filled;
