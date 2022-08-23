import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareSharpW100'
      short_name='Hardware'

      {...props}
    >
      <path d="M10.65 19.7V6.7H5.9Q6.275 5.6 7.225 4.95Q8.175 4.3 9.35 4.3H14.05V7.15L16.9 4.3H17.6V10.7H16.9L14.05 7.85V19.7ZM13.35 12ZM11.35 19H13.35V12.35H11.35ZM11.35 11.65H13.35V5H9.35Q8.7 5 8.113 5.25Q7.525 5.5 7.1 6H11.35ZM13.35 11.65V6Q13.35 5.5 13.35 5.25Q13.35 5 13.35 5V11.65ZM13.35 19V12.35V19Z"/>
    </Icon>
  );
});

IconMaterialHardwareSharpW100.displayName = 'AmauiIconMaterialHardwareSharpW100';

export default IconMaterialHardwareSharpW100;
