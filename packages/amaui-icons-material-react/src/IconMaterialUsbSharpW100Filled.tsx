import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUsbSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbSharpW100Filled'
      short_name='Usb'

      {...props}
    >
      <path d="M12 20.85Q11.425 20.85 11.038 20.462Q10.65 20.075 10.65 19.5Q10.65 19.05 10.925 18.688Q11.2 18.325 11.65 18.2V15.35H8.65Q8 15.35 7.575 14.925Q7.15 14.5 7.15 13.85V11.8Q6.725 11.675 6.438 11.337Q6.15 11 6.15 10.5Q6.15 9.925 6.538 9.537Q6.925 9.15 7.5 9.15Q8.075 9.15 8.463 9.537Q8.85 9.925 8.85 10.5Q8.85 11 8.562 11.337Q8.275 11.675 7.85 11.8V13.85Q7.85 14.15 8.1 14.4Q8.35 14.65 8.65 14.65H11.65V6.35H10.3L12 4.1L13.7 6.35H12.35V14.65H15.35Q15.65 14.65 15.9 14.4Q16.15 14.15 16.15 13.85V11.85H15.15V9.15H17.85V11.85H16.85V13.85Q16.85 14.5 16.425 14.925Q16 15.35 15.35 15.35H12.35V18.2Q12.8 18.325 13.075 18.688Q13.35 19.05 13.35 19.5Q13.35 20.075 12.963 20.462Q12.575 20.85 12 20.85Z"/>
    </Icon>
  );
});

IconMaterialUsbSharpW100Filled.displayName = 'AmauiIconMaterialUsbSharpW100Filled';

export default IconMaterialUsbSharpW100Filled;
