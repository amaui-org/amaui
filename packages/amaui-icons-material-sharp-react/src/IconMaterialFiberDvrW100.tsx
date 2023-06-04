import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberDvrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberDvrW100'

      short_name='FiberDvr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.4 14.6h.7v-2h1.7l.85 2h.75l-.85-2.05h1.05V9.4h-4.2Zm.7-2.7v-1.8h2.8v1.8Zm-4.5 2.7h.9l1.65-5.2h-.65l-1.45 4.5-1.45-4.5h-.65Zm-7 0h3.1q.45 0 .775-.325T8.8 13.5v-3q0-.45-.325-.775T7.7 9.4H4.6Zm.7-.7v-3.8h2.4q.15 0 .275.125.125.125.125.275v3q0 .15-.125.275-.125.125-.275.125Zm-3 4.8V5.3h19.4v13.4ZM3 18h18V6H3Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialFiberDvrW100.displayName = 'AmauiIconMaterialFiberDvrW100';

export default IconMaterialFiberDvrW100;
