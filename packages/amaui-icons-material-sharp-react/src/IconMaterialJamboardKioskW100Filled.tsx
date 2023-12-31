import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJamboardKioskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JamboardKioskW100Filled'

      short_name='JamboardKiosk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-172v-28h174v-120H132v-468h696v468H494v120h174v28H292Z"/>
    </Icon>
  );
});

IconMaterialJamboardKioskW100Filled.displayName = 'AmauiIconMaterialJamboardKioskW100Filled';

export default IconMaterialJamboardKioskW100Filled;
