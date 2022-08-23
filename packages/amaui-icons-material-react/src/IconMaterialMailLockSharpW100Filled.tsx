import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailLockSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockSharpW100Filled'
      short_name='MailLock'

      {...props}
    >
      <path d="M12 11 4.4 6 4 6.55 12 11.85 20 6.55 19.6 6ZM17.5 18.7V14H18.5V12.85Q18.5 12.075 19.038 11.537Q19.575 11 20.35 11Q21.125 11 21.663 11.537Q22.2 12.075 22.2 12.85V14H23.2V18.7ZM19.2 14H21.5V12.85Q21.5 12.375 21.163 12.037Q20.825 11.7 20.35 11.7Q19.875 11.7 19.538 12.037Q19.2 12.375 19.2 12.85ZM3.3 18.7V5.3H20.7V9H20.35Q18.325 9 16.913 10.462Q15.5 11.925 15.5 13.975V18.7Z"/>
    </Icon>
  );
});

IconMaterialMailLockSharpW100Filled.displayName = 'AmauiIconMaterialMailLockSharpW100Filled';

export default IconMaterialMailLockSharpW100Filled;
