import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareRoundedW100'
      short_name='Hardware'

      {...props}
    >
      <path d="M11.35 19.7Q11.075 19.7 10.863 19.487Q10.65 19.275 10.65 19V6.7H5.9Q6.275 5.6 7.225 4.95Q8.175 4.3 9.35 4.3H12.55Q13.175 4.3 13.613 4.737Q14.05 5.175 14.05 5.8V7.15L16.7 4.5Q16.775 4.425 16.913 4.362Q17.05 4.3 17.175 4.3Q17.35 4.3 17.475 4.425Q17.6 4.55 17.6 4.725V10.275Q17.6 10.45 17.488 10.575Q17.375 10.7 17.175 10.7Q17.05 10.7 16.913 10.637Q16.775 10.575 16.7 10.5L14.05 7.85V19Q14.05 19.275 13.838 19.487Q13.625 19.7 13.35 19.7ZM13.35 12ZM11.35 19H13.35V12.35H11.35ZM11.35 11.65H13.35V5.8Q13.35 5.45 13.125 5.225Q12.9 5 12.55 5H9.35Q8.7 5 8.113 5.25Q7.525 5.5 7.1 6H11.35ZM13.35 11.65V6Q13.35 5.5 13.35 5.25Q13.35 5 13.35 5Q13.35 5 13.35 5.225Q13.35 5.45 13.35 5.8V11.65ZM13.35 19V12.35V19Z"/>
    </Icon>
  );
});

IconMaterialHardwareRoundedW100.displayName = 'AmauiIconMaterialHardwareRoundedW100';

export default IconMaterialHardwareRoundedW100;
