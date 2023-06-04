import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintConnectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectW100Filled'

      short_name='PrintConnect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m718 866-77-76 20-20 57 57 141-141 20 19-161 161Zm-426 18V724H162V448h636v101q-8-1-16.5-2t-16.5-1q-65 0-119.5 32.5T560 668H320v188h223q2 8 5.5 14.5T555 884H292Zm0-464V300h376v120H292Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectW100Filled.displayName = 'AmauiIconMaterialPrintConnectW100Filled';

export default IconMaterialPrintConnectW100Filled;
