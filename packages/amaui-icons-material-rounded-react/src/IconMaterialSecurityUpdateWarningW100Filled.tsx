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
      <path d="M12 13.65q-.15 0-.25-.1t-.1-.25V7.9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5.4q0 .15-.1.25t-.25.1Zm0 2.65q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.362.15-.138.35-.138.225 0 .363.138.137.137.137.362 0 .2-.137.35-.138.15-.363.15Zm-4.2 5.4q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 18.65h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningW100Filled.displayName = 'AmauiIconMaterialSecurityUpdateWarningW100Filled';

export default IconMaterialSecurityUpdateWarningW100Filled;
