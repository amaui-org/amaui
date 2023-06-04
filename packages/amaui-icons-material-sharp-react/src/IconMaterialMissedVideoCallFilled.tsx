import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMissedVideoCallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallFilled'

      short_name='MissedVideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.7 16 4.5-4.55-1.4-1.4-3.1 3.1L8.5 11H10V9H5v5h2v-1.7ZM2 20V4h16v6.5l4-4v11l-4-4V20Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallFilled.displayName = 'AmauiIconMaterialMissedVideoCallFilled';

export default IconMaterialMissedVideoCallFilled;
