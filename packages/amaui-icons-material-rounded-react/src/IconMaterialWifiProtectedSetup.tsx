import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiProtectedSetup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProtectedSetup'

      short_name='WifiProtectedSetup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.4 16.625.1-.75q.05-.375.05-.75 0-2-.875-3.663Q14.8 9.8 13.3 8.7l-1.45 1.45q-.25.25-.55.125-.3-.125-.3-.475V3.5q0-.2.15-.35.15-.15.35-.15h6.3q.35 0 .475.3t-.125.55L16.7 5.3q1.3 1.175 2.075 2.8.775 1.625.775 3.525 0 1.575-.525 2.95-.525 1.375-1.45 2.5-.425.5-.85.325t-.325-.775ZM6.2 21q-.35 0-.475-.3t.125-.55L7.3 18.7q-1.325-1.175-2.087-2.8-.763-1.625-.763-3.525 0-1.575.525-2.95.525-1.375 1.475-2.5.425-.5.85-.325t.3.775q-.075.35-.112.725-.038.375-.038.775 0 2 .888 3.662Q9.225 14.2 10.7 15.3l1.45-1.45q.25-.25.55-.125.3.125.3.475v6.3q0 .2-.15.35-.15.15-.35.15Z"/>
    </Icon>
  );
});

IconMaterialWifiProtectedSetup.displayName = 'AmauiIconMaterialWifiProtectedSetup';

export default IconMaterialWifiProtectedSetup;
