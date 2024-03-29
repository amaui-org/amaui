import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOff'

      short_name='WifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.9 11.1q-1.925-1.925-4.462-3.013Q14.9 7 12 7q-.525 0-1.012.037-.488.038-.988.113L7.45 4.6q1.1-.3 2.238-.45Q10.825 4 12 4q3.55 0 6.625 1.325T24 8.95Zm-4 3.95-.725-.725-.725-.725-3.6-3.6q2.025.2 3.788 1.025 1.762.825 3.112 2.175Zm1.85 7.55-9.4-9.45q-1.175.275-2.187.825-1.013.55-1.813 1.375l-2.1-2.15q.8-.8 1.725-1.4.925-.6 1.975-1.05L5.7 8.5q-1.025.525-1.912 1.162Q2.9 10.3 2.1 11.1L0 8.95q.8-.8 1.663-1.438Q2.525 6.875 3.5 6.3L1.4 4.2l1.4-1.4 18.4 18.4ZM12 21l-3.525-3.55q.675-.675 1.575-1.063Q10.95 16 12 16q1.05 0 1.95.387.9.388 1.575 1.063Z"/>
    </Icon>
  );
});

IconMaterialWifiOff.displayName = 'AmauiIconMaterialWifiOff';

export default IconMaterialWifiOff;
