import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLtePlusMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledataBadgeW100Filled'

      short_name='LtePlusMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M220 710h118v-28h-90V442h-28v268Zm188 0h28V470h70v-28H338v28h70v240Zm144 0h128v-28H580v-92h80v-28h-80v-92h100v-28H552v268ZM92 884V268h776v294h-60v-60h-28v60h-60v28h60v60h28v-60h60v294H92Z"/>
    </Icon>
  );
});

IconMaterialLtePlusMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialLtePlusMobiledataBadgeW100Filled';

export default IconMaterialLtePlusMobiledataBadgeW100Filled;
