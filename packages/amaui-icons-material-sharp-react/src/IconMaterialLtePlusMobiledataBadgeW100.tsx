import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLtePlusMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledataBadgeW100'

      short_name='LtePlusMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 856V296v560Zm748-454h-28V296H120v560h720V750h28v134H92V268h776v134ZM220 710h118v-28h-90V442h-28v268Zm188 0h28V470h70v-28H338v28h70v240Zm144 0h128v-28H580v-92h80v-28h-80v-92h100v-28H552v268Zm228-60h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60Z"/>
    </Icon>
  );
});

IconMaterialLtePlusMobiledataBadgeW100.displayName = 'AmauiIconMaterialLtePlusMobiledataBadgeW100';

export default IconMaterialLtePlusMobiledataBadgeW100;
