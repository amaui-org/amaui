import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccessShortcutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcutW100'

      short_name='SwitchAccessShortcut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 10.05-.65-1.4L5.95 8l1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65Zm0 10-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65Zm-3-5.7-.425-.925L3.65 13l.925-.425L5 11.65l.425.925.925.425-.925.425Zm12.775 6.325q-2.3-1.375-3.713-3.7Q12.65 14.65 12.65 12q0-2.2 1.213-4.45 1.212-2.25 3.162-4.2H12.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.7q.325 0 .538.212.212.213.212.538v4.7q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V3.725q-1.95 1.9-3.125 4.075Q13.35 9.975 13.35 12q0 2.575 1.375 4.737Q16.1 18.9 18.25 20.175q.05.025.075.062.025.038.025.088 0 .275-.175.375-.175.1-.4-.025Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcutW100.displayName = 'AmauiIconMaterialSwitchAccessShortcutW100';

export default IconMaterialSwitchAccessShortcutW100;
