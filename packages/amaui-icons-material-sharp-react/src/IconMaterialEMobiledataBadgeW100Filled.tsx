import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadgeW100Filled'

      short_name='EMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M366 750h228v-28H394V590h160v-28H394V430h200v-28H366v348ZM172 884V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialEMobiledataBadgeW100Filled';

export default IconMaterialEMobiledataBadgeW100Filled;
