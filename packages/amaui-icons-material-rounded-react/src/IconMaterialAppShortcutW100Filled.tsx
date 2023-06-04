import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppShortcutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutW100Filled'

      short_name='AppShortcut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.75 9.875-.2-.425-.425-.2q-.175-.075-.175-.25t.175-.25l.425-.2.2-.425q.075-.175.25-.175t.25.175l.2.425.425.2q.175.075.175.25t-.175.25l-.425.2-.2.425q-.075.175-.25.175t-.25-.175Zm-5.125 4.375-.575-1.3-1.3-.575q-.25-.125-.25-.375t.25-.375l1.3-.575.575-1.3q.125-.25.375-.25t.375.25l.575 1.3 1.3.575q.25.125.25.375t-.25.375l-1.3.575-.575 1.3q-.125.25-.375.25t-.375-.25Zm5.125 1.625-.2-.425-.425-.2q-.175-.075-.175-.25t.175-.25l.425-.2.2-.425q.075-.175.25-.175t.25.175l.2.425.425.2q.175.075.175.25t-.175.25l-.425.2-.2.425q-.075.175-.25.175t-.25-.175ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v3.1H17V5.35H7v13.3h10V17.1h.7v3.1q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialAppShortcutW100Filled.displayName = 'AmauiIconMaterialAppShortcutW100Filled';

export default IconMaterialAppShortcutW100Filled;
