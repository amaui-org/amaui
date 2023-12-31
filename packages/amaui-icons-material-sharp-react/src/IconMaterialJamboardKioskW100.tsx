import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJamboardKioskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JamboardKioskW100'

      short_name='JamboardKiosk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-172v-28h174v-120H132v-468h696v468H494v120h174v28H292ZM160-348h640v-412H160v412Zm0 0v-412 412Z"/>
    </Icon>
  );
});

IconMaterialJamboardKioskW100.displayName = 'AmauiIconMaterialJamboardKioskW100';

export default IconMaterialJamboardKioskW100;
