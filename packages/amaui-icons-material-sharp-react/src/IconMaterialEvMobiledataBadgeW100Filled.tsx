import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvMobiledataBadgeW100Filled'

      short_name='EvMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M246 750h182v-28H274V590h114v-28H274V430h154v-28H246v348Zm354 0h32l110-348h-30l-96 304-96-304h-30l110 348ZM92 884V268h776v616H92Z"/>
    </Icon>
  );
});

IconMaterialEvMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialEvMobiledataBadgeW100Filled';

export default IconMaterialEvMobiledataBadgeW100Filled;
