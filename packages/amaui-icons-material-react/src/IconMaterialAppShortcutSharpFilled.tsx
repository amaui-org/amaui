import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAppShortcutSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutSharpFilled'
      short_name='AppShortcut'

      {...props}
    >
      <path d="M21 11 20.375 9.625 19 9 20.375 8.375 21 7 21.625 8.375 23 9 21.625 9.625ZM16 16 14.75 13.25 12 12 14.75 10.75 16 8 17.25 10.75 20 12 17.25 13.25ZM21 17 20.375 15.625 19 15 20.375 14.375 21 13 21.625 14.375 23 15 21.625 15.625ZM5 23V1H19V7H17V6H7V18H17V17H19V23Z"/>
    </Icon>
  );
});

IconMaterialAppShortcutSharpFilled.displayName = 'AmauiIconMaterialAppShortcutSharpFilled';

export default IconMaterialAppShortcutSharpFilled;
