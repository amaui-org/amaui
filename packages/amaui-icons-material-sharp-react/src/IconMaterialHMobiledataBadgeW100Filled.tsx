import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadgeW100Filled'

      short_name='HMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M356 750h28V590h192v160h28V402h-28v160H384V402h-28v348ZM172 884V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialHMobiledataBadgeW100Filled';

export default IconMaterialHMobiledataBadgeW100Filled;
