import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUsbOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbOffW100Filled'

      short_name='UsbOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.7 21.35-6-6h-1.35v2.85q.45.125.725.488.275.362.275.812 0 .575-.387.962-.388.388-.963.388t-.962-.388q-.388-.387-.388-.962 0-.45.275-.812.275-.363.725-.488v-2.85h-3q-.65 0-1.075-.425-.425-.425-.425-1.075V11.8q-.425-.125-.712-.463Q6.15 11 6.15 10.5q0-.575.388-.963.387-.387.962-.387L3 4.65l.5-.5 16.7 16.7Zm-3-6.8-.55-.575V11.85h-1v-2.7h2.7v2.7h-1v2q0 .2-.038.362-.037.163-.112.338Zm-8.05.1h3V13.3l-2.8-2.8q0 .5-.288.837-.287.338-.712.463v2.05q0 .3.25.55.25.25.55.25Zm3.7-4.45-.7-.7V6.35H10.3L12 4.1l1.7 2.25h-1.35Z"/>
    </Icon>
  );
});

IconMaterialUsbOffW100Filled.displayName = 'AmauiIconMaterialUsbOffW100Filled';

export default IconMaterialUsbOffW100Filled;
