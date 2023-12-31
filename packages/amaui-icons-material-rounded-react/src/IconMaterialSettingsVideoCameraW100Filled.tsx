import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsVideoCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVideoCameraW100Filled'

      short_name='SettingsVideoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M757-132H571q-13 0-22-9t-9-22v-186q0-13 9-22t22-9h186q13 0 22 9t9 22v62l49-49q4-4 8.5-2t4.5 7v150q0 5-4.5 7t-8.5-2l-49-49v62q0 13-9 22t-22 9Zm-317 0q-11 0-18-6.5t-9-17.5l-11-88q-21-6-46.5-20T313-294l-78 34q-11 5-21.5 1T197-273l-38-66q-5-10-3-21t11-18l68-51q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-68-51q-9-7-11.5-18t3.5-21l38-64q6-10 16-14t21 1l78 33q20-17 43.5-30.5T401-716l12-86q2-11 10-18.5t19-7.5h75q11 0 19.5 7.5T547-802l11 87q26 9 45.5 20.5T644-665l82-33q11-5 21-1.5t16 13.5l38 65q6 10 3.5 21T793-582l-72 54q4 14 4.5 25.5t.5 22.5H566q0-37-25.5-62.5T478-568q-37 0-62.5 25.5T390-480q0 27 13.5 48t36.5 32v268Z"/>
    </Icon>
  );
});

IconMaterialSettingsVideoCameraW100Filled.displayName = 'AmauiIconMaterialSettingsVideoCameraW100Filled';

export default IconMaterialSettingsVideoCameraW100Filled;
