import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJamboardKiosk = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JamboardKiosk'

      short_name='JamboardKiosk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80h200v-120H80v-520h800v520H520v120h200v80H240Zm-80-280h640v-360H160v360Zm0 0v-360 360Z"/>
    </Icon>
  );
});

IconMaterialJamboardKiosk.displayName = 'AmauiIconMaterialJamboardKiosk';

export default IconMaterialJamboardKiosk;
