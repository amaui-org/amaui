import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermScanWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiW100'

      short_name='PermScanWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.525q-.275 0-.562-.112-.288-.113-.488-.313L2.625 9.775q-.325-.325-.3-.75.025-.425.375-.7 2.025-1.5 4.4-2.263Q9.475 5.3 12 5.3q2.525 0 4.9.762 2.375.763 4.4 2.263.35.275.375.7.025.425-.3.75L13.05 18.1q-.2.2-.475.313-.275.112-.575.112Zm-.575-.95q.25.25.575.25.325 0 .575-.25l8.35-8.35Q21 9.15 21 9.05q0-.1-.1-.15-1.95-1.425-4.212-2.163Q14.425 6 12 6t-4.687.737Q5.05 7.475 3.1 8.9q-.1.05-.1.15 0 .1.075.175ZM12 15q.15 0 .25-.1t.1-.25v-4.3q0-.15-.1-.25T12 10q-.15 0-.25.1t-.1.25v4.3q0 .15.1.25t.25.1Zm0-6.25q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 9.15Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiW100.displayName = 'AmauiIconMaterialPermScanWifiW100';

export default IconMaterialPermScanWifiW100;
