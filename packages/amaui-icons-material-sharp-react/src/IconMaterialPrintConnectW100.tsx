import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintConnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectW100'

      short_name='PrintConnect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M190 476h580-580Zm102 408V724H162V448h636v101l-14-2q-7-1-14-1v-70H190v220h102v-56h286q-5 7-9.5 13.5T560 668H320v188h223q2 8 5.5 14.5T555 884H292Zm426-18-77-76 20-20 57 57 141-141 20 19-161 161Zm-78-418V328H320v120h-28V300h376v148h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectW100.displayName = 'AmauiIconMaterialPrintConnectW100';

export default IconMaterialPrintConnectW100;
