import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccessShortcutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcutW100Filled'

      short_name='SwitchAccessShortcut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5 14.35-.425-.925L3.65 13l.925-.425L5 11.65l.425.925.925.425-.925.425Zm3 5.7-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65Zm0-10-.65-1.4L5.95 8l1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM18.35 21q-2.55-1.3-4.125-3.75Q12.65 14.8 12.65 12q0-2.2 1.213-4.45 1.212-2.25 3.162-4.2H12.55v-.7h5.8v5.8h-.7V3.725q-1.95 1.9-3.125 4.075Q13.35 9.975 13.35 12q0 2.575 1.4 4.775t3.6 3.45Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcutW100Filled.displayName = 'AmauiIconMaterialSwitchAccessShortcutW100Filled';

export default IconMaterialSwitchAccessShortcutW100Filled;
