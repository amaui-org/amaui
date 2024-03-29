import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLock'

      short_name='WifiLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575q-.2 0-.375-.063-.175-.062-.325-.212L.7 9.7q-.3-.3-.287-.713.012-.412.312-.687Q3.05 6.2 5.95 5.1 8.85 4 12 4t6.05 1.1q2.9 1.1 5.225 3.2.3.275.313.687.012.413-.288.713L22 11h-3q-1.65 0-2.825 1.188Q15 13.375 15 15v3l-2.3 2.3q-.15.15-.325.212-.175.063-.375.063Zm5.85.425q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H18v-1q0-.825.587-1.413Q19.175 13 20 13q.825 0 1.413.587Q22 14.175 22 15v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25ZM19 16h2v-1q0-.425-.288-.713Q20.425 14 20 14t-.712.287Q19 14.575 19 15Z"/>
    </Icon>
  );
});

IconMaterialWifiLock.displayName = 'AmauiIconMaterialWifiLock';

export default IconMaterialWifiLock;
