import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailLockSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockSharpW100'
      short_name='MailLock'

      {...props}
    >
      <path d="M4 18H15.5V18.7H3.3V5.3H20.7V9H20.35H20V6.55L12 11.85L4 6.55ZM12 11 19.6 6H4.4ZM4 18V13.975Q4 11.925 4 10.462Q4 9 4 9V6.55V6V6.55ZM17.5 18.7V14H18.5V12.85Q18.5 12.075 19.038 11.537Q19.575 11 20.35 11Q21.125 11 21.663 11.537Q22.2 12.075 22.2 12.85V14H23.2V18.7ZM19.2 14H21.5V12.85Q21.5 12.375 21.163 12.037Q20.825 11.7 20.35 11.7Q19.875 11.7 19.538 12.037Q19.2 12.375 19.2 12.85Z"/>
    </Icon>
  );
});

IconMaterialMailLockSharpW100.displayName = 'AmauiIconMaterialMailLockSharpW100';

export default IconMaterialMailLockSharpW100;
