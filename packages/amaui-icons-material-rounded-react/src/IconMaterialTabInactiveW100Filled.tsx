import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabInactiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabInactiveW100Filled'

      short_name='TabInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-132q-26 0-43-17t-17-43v-88h-88q-26 0-43-17t-17-43v-50q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v50q0 14 9 23t23 9h88v-312q0-26 17-43t43-17h312v-88q0-14-9-23t-23-9h-50q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h50q26 0 43 17t17 43v88h88q26 0 43 17t17 43v428q0 26-17 43t-43 17H340ZM145.96-503q-5.96 0-9.96-4.02-4-4.03-4-9.98v-73q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v73q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm0-200q-5.96 0-9.96-4.03-4-4.02-4-9.97v-51q0-26 17-43t43-17h51q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-51q-14 0-23 9t-9 23v51q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM370-800q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h73q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-73Z"/>
    </Icon>
  );
});

IconMaterialTabInactiveW100Filled.displayName = 'AmauiIconMaterialTabInactiveW100Filled';

export default IconMaterialTabInactiveW100Filled;
