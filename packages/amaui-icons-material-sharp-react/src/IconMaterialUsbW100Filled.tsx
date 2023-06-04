import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUsbW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbW100Filled'

      short_name='Usb'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.85q-.575 0-.962-.388-.388-.387-.388-.962 0-.45.275-.812.275-.363.725-.488v-2.85h-3q-.65 0-1.075-.425-.425-.425-.425-1.075V11.8q-.425-.125-.712-.463Q6.15 11 6.15 10.5q0-.575.388-.963.387-.387.962-.387t.963.387q.387.388.387.963 0 .5-.288.837-.287.338-.712.463v2.05q0 .3.25.55.25.25.55.25h3v-8.3H10.3L12 4.1l1.7 2.25h-1.35v8.3h3q.3 0 .55-.25.25-.25.25-.55v-2h-1v-2.7h2.7v2.7h-1v2q0 .65-.425 1.075-.425.425-1.075.425h-3v2.85q.45.125.725.488.275.362.275.812 0 .575-.387.962-.388.388-.963.388Z"/>
    </Icon>
  );
});

IconMaterialUsbW100Filled.displayName = 'AmauiIconMaterialUsbW100Filled';

export default IconMaterialUsbW100Filled;
