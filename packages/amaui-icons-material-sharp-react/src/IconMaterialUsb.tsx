import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUsb = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Usb'

      short_name='Usb'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.825 0-1.412-.587Q10 20.825 10 20q0-.525.275-.975.275-.45.725-.725V16H8q-.825 0-1.412-.588Q6 14.825 6 14v-2.3q-.45-.225-.725-.675Q5 10.575 5 10q0-.825.588-1.413Q6.175 8 7 8t1.412.587Q9 9.175 9 10q0 .575-.275 1-.275.425-.725.7V14h3V6H9l3-4 3 4h-2v8h3v-2h-1V8h4v4h-1v2q0 .825-.587 1.412Q16.825 16 16 16h-3v2.3q.475.25.738.7.262.45.262 1 0 .825-.587 1.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialUsb.displayName = 'AmauiIconMaterialUsb';

export default IconMaterialUsb;
