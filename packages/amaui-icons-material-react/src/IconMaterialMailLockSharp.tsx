import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailLockSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockSharp'
      short_name='MailLock'

      {...props}
    >
      <path d="M4 18H16V20H2V4H22V10H21H20V8L12 13L4 8ZM12 11 20 6H4ZM4 18V15Q4 12.925 4 11.462Q4 10 4 10V8V6V8ZM18 20V15H19V14Q19 13.175 19.587 12.587Q20.175 12 21 12Q21.825 12 22.413 12.587Q23 13.175 23 14V15H24V20ZM20 15H22V14Q22 13.575 21.712 13.287Q21.425 13 21 13Q20.575 13 20.288 13.287Q20 13.575 20 14Z"/>
    </Icon>
  );
});

IconMaterialMailLockSharp.displayName = 'AmauiIconMaterialMailLockSharp';

export default IconMaterialMailLockSharp;
