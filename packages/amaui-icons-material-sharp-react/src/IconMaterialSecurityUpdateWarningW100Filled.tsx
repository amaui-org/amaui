import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateWarningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateWarningW100Filled'

      short_name='SecurityUpdateWarning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.65v-6.1h.7v6.1ZM12 16.3q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.362.15-.138.35-.138.225 0 .363.138.137.137.137.362 0 .2-.137.35-.138.15-.363.15Zm-5.7 5.4V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningW100Filled.displayName = 'AmauiIconMaterialSecurityUpdateWarningW100Filled';

export default IconMaterialSecurityUpdateWarningW100Filled;
