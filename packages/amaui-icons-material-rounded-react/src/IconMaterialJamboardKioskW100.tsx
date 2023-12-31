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
      <path d="M306-172q-6 0-10-4t-4-10q0-6 4-10t10-4h160v-120H192q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h576q26 0 43 17t17 43v348q0 26-17 43t-43 17H494v120h160q6 0 10 4t4 10q0 6-4 10t-10 4H306ZM160-380q0 12 10 22t22 10h576q12 0 22-10t10-22v-348q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v348Zm0 0v-380 412-32Z"/>
    </Icon>
  );
});

IconMaterialJamboardKioskW100.displayName = 'AmauiIconMaterialJamboardKioskW100';

export default IconMaterialJamboardKioskW100;
