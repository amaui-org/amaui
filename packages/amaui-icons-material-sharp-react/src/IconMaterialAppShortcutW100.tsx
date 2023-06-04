import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppShortcutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutW100'

      short_name='AppShortcut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21 10.35-.425-.925L19.65 9l.925-.425L21 7.65l.425.925.925.425-.925.425Zm-5 4.7-.95-2.1-2.1-.95 2.1-.95.95-2.1.95 2.1 2.1.95-2.1.95Zm5 1.3-.425-.925L19.65 15l.925-.425.425-.925.425.925.925.425-.925.425ZM7 21h10v-1.65H7ZM7 4.65h10V3H7ZM6.3 21.7V2.3h11.4v4.6H17V5.35H7v13.3h10V17.1h.7v4.6ZM7 4.65V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialAppShortcutW100.displayName = 'AmauiIconMaterialAppShortcutW100';

export default IconMaterialAppShortcutW100;
