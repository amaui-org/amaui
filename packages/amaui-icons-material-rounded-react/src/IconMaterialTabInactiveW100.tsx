import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabInactiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabInactiveW100'

      short_name='TabInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-132q-26 0-43-17t-17-43v-88h-88q-26 0-43-17t-17-43v-50q0-6 4-10t10-4q6 0 10 4t4 10v50q0 14 9 23t23 9h88v-312q0-26 17-43t43-17h312v-88q0-14-9-23t-23-9h-50q-6 0-10-4t-4-10q0-6 4-10t10-4h50q26 0 43 17t17 43v88h88q26 0 43 17t17 43v428q0 26-17 43t-43 17H340Zm0-28h428q12 0 22-10t10-22v-428q0-12-10-22t-22-10H340q-12 0-22 10t-10 22v428q0 12 10 22t22 10ZM146-503q-6 0-10-4t-4-10v-73q0-6 4-10t10-4q6 0 10 4t4 10v73q0 6-4 10t-10 4Zm0-200q-6 0-10-4t-4-10v-51q0-26 17-43t43-17h51q6 0 10 4t4 10q0 6-4 10t-10 4h-51q-14 0-23 9t-9 23v51q0 6-4 10t-10 4Zm224-97q-6 0-10-4t-4-10q0-6 4-10t10-4h73q6 0 10 4t4 10q0 6-4 10t-10 4h-73Zm-62 640v-492 492Z"/>
    </Icon>
  );
});

IconMaterialTabInactiveW100.displayName = 'AmauiIconMaterialTabInactiveW100';

export default IconMaterialTabInactiveW100;
