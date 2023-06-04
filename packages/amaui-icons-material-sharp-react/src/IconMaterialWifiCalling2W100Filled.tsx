import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCalling2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCalling2W100Filled'

      short_name='WifiCalling2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 11.6q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213ZM14 8.9l-.45-.5q.65-.5 1.4-.8.75-.3 1.55-.3t1.55.3q.75.3 1.4.8l-.45.5q-.55-.425-1.188-.662Q17.175 8 16.5 8t-1.312.238Q14.55 8.475 14 8.9Zm-2.1-2.15-.5-.5q1.05-.95 2.363-1.45 1.312-.5 2.737-.5t2.738.5q1.312.5 2.362 1.45l-.5.5q-.95-.85-2.137-1.3Q17.775 5 16.5 5q-1.275 0-2.462.45-1.188.45-2.138 1.3Zm6.725 12.8q-2.425.025-4.963-1.275-2.537-1.3-4.612-3.362-2.075-2.063-3.387-4.601Q4.35 7.775 4.35 5.35q0-.25.013-.525.012-.275.062-.525h3.95L9.2 8.075 6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012Z"/>
    </Icon>
  );
});

IconMaterialWifiCalling2W100Filled.displayName = 'AmauiIconMaterialWifiCalling2W100Filled';

export default IconMaterialWifiCalling2W100Filled;
