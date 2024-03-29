import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermScanWifiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiFilled'

      short_name='PermScanWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.175q-.375 0-.75-.15t-.675-.45l-9.15-9.15q-.6-.6-.587-1.438.012-.837.637-1.337 2.25-1.8 4.95-2.725T12 4q2.875 0 5.575.925t4.95 2.725q.625.5.638 1.337.012.838-.588 1.438l-9.15 9.15q-.3.3-.675.45-.375.15-.75.15ZM12 15q.425 0 .713-.288Q13 14.425 13 14v-3q0-.425-.287-.713Q12.425 10 12 10t-.712.287Q11 10.575 11 11v3q0 .425.288.712.287.288.712.288Zm0-6q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiFilled.displayName = 'AmauiIconMaterialPermScanWifiFilled';

export default IconMaterialPermScanWifiFilled;
