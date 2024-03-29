import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeW100'

      short_name='EmergencyHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.05 19.95q-.45.45-1.05.45-.6 0-1.05-.45l-6.9-6.9Q3.6 12.6 3.6 12q0-.6.45-1.05l6.9-6.9Q11.4 3.6 12 3.6q.6 0 1.05.45l6.9 6.9q.45.45.45 1.05 0 .6-.45 1.05Zm-.475-.5 6.875-6.875q.2-.2.2-.575 0-.375-.2-.575L12.575 4.55q-.2-.2-.575-.2-.375 0-.575.2L4.55 11.425q-.2.2-.2.575 0 .375.2.575l6.875 6.875q.2.2.575.2.375 0 .575-.2Zm-.925-6.225h.7v-5h-.7Zm.35 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHomeW100.displayName = 'AmauiIconMaterialEmergencyHomeW100';

export default IconMaterialEmergencyHomeW100;
