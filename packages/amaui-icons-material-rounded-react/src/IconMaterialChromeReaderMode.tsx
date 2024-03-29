import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeReaderMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderMode'

      short_name='ChromeReaderMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm7-2V6H4v12Zm2 0h7V6h-7Zm1.75-8h3.525q.3 0 .513-.225Q19 9.55 19 9.25q0-.325-.212-.538-.213-.212-.538-.212h-3.525q-.3 0-.512.225Q14 8.95 14 9.25q0 .325.213.537.212.213.537.213Zm0 2.5h3.525q.3 0 .513-.225.212-.225.212-.525 0-.325-.212-.538Q18.575 11 18.25 11h-3.525q-.3 0-.512.225-.213.225-.213.525 0 .325.213.537.212.213.537.213Zm0 2.5h3.525q.3 0 .513-.225.212-.225.212-.525 0-.325-.212-.538-.213-.212-.538-.212h-3.525q-.3 0-.512.225-.213.225-.213.525 0 .325.213.537.212.213.537.213ZM4 18V6Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderMode.displayName = 'AmauiIconMaterialChromeReaderMode';

export default IconMaterialChromeReaderMode;
