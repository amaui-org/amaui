import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMissedVideoCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallW100'

      short_name='MissedVideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.375 15.1 3.6-3.65-.5-.5-3.1 3.15-3.8-3.8h2.5v-.7h-3.7v3.7h.7v-2.5Zm-7.45 3.6V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Zm.7-.7h12V6h-12Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallW100.displayName = 'AmauiIconMaterialMissedVideoCallW100';

export default IconMaterialMissedVideoCallW100;
