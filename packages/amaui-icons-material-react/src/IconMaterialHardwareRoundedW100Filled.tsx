import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareRoundedW100Filled'
      short_name='Hardware'

      {...props}
    >
      <path d="M11.35 19.7Q11.075 19.7 10.863 19.487Q10.65 19.275 10.65 19V12.35H14.05V19Q14.05 19.275 13.838 19.487Q13.625 19.7 13.35 19.7ZM17.175 10.7Q17.05 10.7 16.913 10.637Q16.775 10.575 16.7 10.5L14.05 7.85V11.65H10.65V6.7H5.9Q6.275 5.6 7.225 4.95Q8.175 4.3 9.35 4.3H12.55Q13.175 4.3 13.613 4.737Q14.05 5.175 14.05 5.8V7.15L16.7 4.5Q16.775 4.425 16.913 4.362Q17.05 4.3 17.175 4.3Q17.35 4.3 17.475 4.425Q17.6 4.55 17.6 4.725V10.275Q17.6 10.45 17.488 10.575Q17.375 10.7 17.175 10.7Z"/>
    </Icon>
  );
});

IconMaterialHardwareRoundedW100Filled.displayName = 'AmauiIconMaterialHardwareRoundedW100Filled';

export default IconMaterialHardwareRoundedW100Filled;
