import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiChannel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiChannel'

      short_name='WifiChannel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21q.35-2.9.85-5.287.5-2.388 1.138-4.101.637-1.712 1.4-2.662Q7.15 8 8 8q1 0 1.975 1.425.975 1.425 1.625 4.15.325-2.55.75-4.525.425-1.975.975-3.325t1.213-2.037Q15.2 3 16 3q1.075 0 1.925 1.275.85 1.275 1.475 3.625.625 2.35 1.025 5.675.4 3.325.575 7.425h-2q-.45-2.2-1.4-4.1Q16.65 15 16 15q-.65 0-1.612 1.9Q13.425 18.8 13 21h-2q-.2-1.775-.537-3.538-.338-1.762-.75-3.237-.413-1.475-.85-2.563-.438-1.087-.863-1.537-.4.45-.85 1.525-.45 1.075-.863 2.55-.412 1.475-.75 3.238Q5.2 19.2 5 21Zm10.5-6.5q.575-.725 1.2-1.113Q15.325 13 16 13t1.3.387q.625.388 1.2 1.113-.45-3.8-1.125-6.338Q16.7 5.625 16 5.05q-.7.575-1.375 3.112Q13.95 10.7 13.5 14.5Z"/>
    </Icon>
  );
});

IconMaterialWifiChannel.displayName = 'AmauiIconMaterialWifiChannel';

export default IconMaterialWifiChannel;
