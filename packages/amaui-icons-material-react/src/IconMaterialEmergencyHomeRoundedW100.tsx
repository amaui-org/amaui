import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyHomeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeRoundedW100'
      short_name='EmergencyHome'

      {...props}
    >
      <path d="M13.05 19.95q-.225.225-.5.338-.275.112-.55.112t-.55-.112q-.275-.113-.5-.338l-6.9-6.9q-.225-.225-.337-.5Q3.6 12.275 3.6 12t.113-.55q.112-.275.337-.5l6.9-6.9q.225-.225.5-.338.275-.112.55-.112t.55.112q.275.113.5.338l6.9 6.9q.225.225.338.5.112.275.112.55t-.112.55q-.113.275-.338.5Zm-.475-.5 6.875-6.875q.25-.25.25-.575 0-.325-.25-.575L12.575 4.55q-.25-.25-.575-.25-.325 0-.575.25L4.55 11.425q-.25.25-.25.575 0 .325.25.575l6.875 6.875q.25.25.575.25.325 0 .575-.25ZM12 13.225q.15 0 .25-.1t.1-.25v-4.3q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.3q0 .15.1.25t.25.1Zm0 2q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.362-.138-.138-.363-.138-.2 0-.35.138-.15.137-.15.362 0 .2.15.35.15.15.35.15ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHomeRoundedW100.displayName = 'AmauiIconMaterialEmergencyHomeRoundedW100';

export default IconMaterialEmergencyHomeRoundedW100;
