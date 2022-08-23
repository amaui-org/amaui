import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAppShortcutSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutSharpW100Filled'
      short_name='AppShortcut'

      {...props}
    >
      <path d="M21 10.35 20.575 9.425 19.65 9 20.575 8.575 21 7.65 21.425 8.575 22.35 9 21.425 9.425ZM16 15.05 15.05 12.95 12.95 12 15.05 11.05 16 8.95 16.95 11.05 19.05 12 16.95 12.95ZM21 16.35 20.575 15.425 19.65 15 20.575 14.575 21 13.65 21.425 14.575 22.35 15 21.425 15.425ZM6.3 21.7V2.3H17.7V6.9H17V5.35H7V18.65H17V17.1H17.7V21.7Z"/>
    </Icon>
  );
});

IconMaterialAppShortcutSharpW100Filled.displayName = 'AmauiIconMaterialAppShortcutSharpW100Filled';

export default IconMaterialAppShortcutSharpW100Filled;
