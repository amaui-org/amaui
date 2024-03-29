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
      <path d="M15.675 18.75q.425-.825.65-1.737.225-.913.225-1.888 0-2-.875-3.663Q14.8 9.8 13.3 8.7L11 11V3h8l-2.3 2.3q1.3 1.175 2.075 2.8.775 1.625.775 3.525 0 2.275-1.062 4.125-1.063 1.85-2.813 3ZM5 21l2.3-2.3q-1.325-1.175-2.087-2.8-.763-1.625-.763-3.525 0-2.275 1.063-4.125 1.062-1.85 2.837-3-.425.825-.662 1.737-.238.913-.238 1.888 0 2 .888 3.662Q9.225 14.2 10.7 15.3L13 13v8Z"/>
    </Icon>
  );
});

IconMaterialWifiProtectedSetup.displayName = 'AmauiIconMaterialWifiProtectedSetup';

export default IconMaterialWifiProtectedSetup;
