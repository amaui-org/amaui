import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyHomeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeSharpW100Filled'
      short_name='EmergencyHome'

      {...props}
    >
      <path d="M11.65 13.225h.7v-5h-.7Zm.35 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm1.05 4.725q-.45.45-1.05.45-.6 0-1.05-.45l-6.9-6.9Q3.6 12.6 3.6 12q0-.6.45-1.05l6.9-6.9Q11.4 3.6 12 3.6q.6 0 1.05.45l6.9 6.9q.45.45.45 1.05 0 .6-.45 1.05Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHomeSharpW100Filled.displayName = 'AmauiIconMaterialEmergencyHomeSharpW100Filled';

export default IconMaterialEmergencyHomeSharpW100Filled;
