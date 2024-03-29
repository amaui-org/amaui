import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiFilled'

      short_name='NetworkWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575q-.2 0-.375-.063-.175-.062-.325-.212L.7 9.7q-.3-.3-.287-.713.012-.412.312-.687 2.35-2.125 5.238-3.212Q8.85 4 12 4q3.175 0 6.062 1.088Q20.95 6.175 23.275 8.3q.3.275.313.687.012.413-.288.713L12.7 20.3q-.15.15-.325.212-.175.063-.375.063ZM4.35 10.5q1.625-1.175 3.563-1.838Q9.85 8 12 8q2.15 0 4.088.662 1.937.663 3.562 1.838l1.45-1.45q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiFilled.displayName = 'AmauiIconMaterialNetworkWifiFilled';

export default IconMaterialNetworkWifiFilled;
