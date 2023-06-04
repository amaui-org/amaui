import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCallingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingW100Filled'

      short_name='WifiCalling'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.5 9.8-4.15-4.15q.825-.6 1.9-1.025Q15.325 4.2 16.5 4.2t2.25.425q1.075.425 1.9 1.025Zm2.125 9.75q-2.425.025-4.963-1.275-2.537-1.3-4.612-3.362-2.075-2.063-3.387-4.601Q4.35 7.775 4.35 5.35q0-.25.013-.525.012-.275.062-.525h3.95L9.2 8.075 6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingW100Filled.displayName = 'AmauiIconMaterialWifiCallingW100Filled';

export default IconMaterialWifiCallingW100Filled;
