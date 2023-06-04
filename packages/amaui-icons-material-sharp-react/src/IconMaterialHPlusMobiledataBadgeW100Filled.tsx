import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataBadgeW100Filled'

      short_name='HPlusMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M222 750h28V590h192v160h28V402h-28v160H250V402h-28v348Zm408-80h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80ZM92 884V268h776v616H92Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialHPlusMobiledataBadgeW100Filled';

export default IconMaterialHPlusMobiledataBadgeW100Filled;
