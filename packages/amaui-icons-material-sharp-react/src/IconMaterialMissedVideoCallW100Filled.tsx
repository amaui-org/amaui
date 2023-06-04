import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMissedVideoCallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallW100Filled'

      short_name='MissedVideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.375 15.1 3.6-3.65-.5-.5-3.1 3.15-3.8-3.8h2.5v-.7h-3.7v3.7h.7v-2.5Zm-7.45 3.6V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallW100Filled.displayName = 'AmauiIconMaterialMissedVideoCallW100Filled';

export default IconMaterialMissedVideoCallW100Filled;
