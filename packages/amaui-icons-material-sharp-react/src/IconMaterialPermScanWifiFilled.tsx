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
      <path d="M12 21 0 9q2.375-2.425 5.487-3.713Q8.6 4 12 4t6.512 1.287Q21.625 6.575 24 9Zm-1-6h2v-5h-2Zm1-6q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiFilled.displayName = 'AmauiIconMaterialPermScanWifiFilled';

export default IconMaterialPermScanWifiFilled;
