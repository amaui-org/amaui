import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermScanWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiW100Filled'

      short_name='PermScanWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.525q-.275 0-.562-.112-.288-.113-.488-.313L2.625 9.775q-.325-.325-.3-.75.025-.425.375-.7 2.025-1.5 4.4-2.263Q9.475 5.3 12 5.3q2.525 0 4.9.762 2.375.763 4.4 2.263.35.275.375.7.025.425-.3.75L13.05 18.1q-.2.2-.475.313-.275.112-.575.112ZM12 15q.15 0 .25-.1t.1-.25v-4.3q0-.15-.1-.25T12 10q-.15 0-.25.1t-.1.25v4.3q0 .15.1.25t.25.1Zm0-6.25q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiW100Filled.displayName = 'AmauiIconMaterialPermScanWifiW100Filled';

export default IconMaterialPermScanWifiW100Filled;
