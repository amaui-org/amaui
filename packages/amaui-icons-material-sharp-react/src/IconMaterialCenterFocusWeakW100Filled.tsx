import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCenterFocusWeakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusWeakW100Filled'

      short_name='CenterFocusWeak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.7q-1.125 0-1.912-.788Q9.3 13.125 9.3 12t.788-1.913Q10.875 9.3 12 9.3t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788ZM4.3 9V4.3H9V5H5v4ZM9 19.7H4.3V15H5v4h4Zm6 0V19h4v-4h.7v4.7ZM19 9V5h-4v-.7h4.7V9Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusWeakW100Filled.displayName = 'AmauiIconMaterialCenterFocusWeakW100Filled';

export default IconMaterialCenterFocusWeakW100Filled;
