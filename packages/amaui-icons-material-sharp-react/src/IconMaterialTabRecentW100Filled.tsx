import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabRecentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentW100Filled'

      short_name='TabRecent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m786 902 20-20-72-71.613V702h-28v120l80 80ZM560 446h240V336H560v110Zm160 518q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM132 844V308h696v305q-23-13-51-19t-54-6q-95.211 0-162.106 66.5Q494 721 492 816v14.115Q492 837 493 844H132Z"/>
    </Icon>
  );
});

IconMaterialTabRecentW100Filled.displayName = 'AmauiIconMaterialTabRecentW100Filled';

export default IconMaterialTabRecentW100Filled;
