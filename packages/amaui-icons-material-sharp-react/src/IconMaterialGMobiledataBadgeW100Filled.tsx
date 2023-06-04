import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataBadgeW100Filled'

      short_name='GMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M346 750h268V562h-88v28h60v132H374V430h240v-28H346v348ZM172 884V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialGMobiledataBadgeW100Filled';

export default IconMaterialGMobiledataBadgeW100Filled;
