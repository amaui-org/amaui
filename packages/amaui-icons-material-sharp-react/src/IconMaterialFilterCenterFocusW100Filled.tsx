import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterCenterFocusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocusW100Filled'

      short_name='FilterCenterFocus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.7q-.725 0-1.212-.488Q10.3 12.725 10.3 12t.488-1.213Q11.275 10.3 12 10.3t1.213.487q.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488ZM4.3 9V4.3H9V5H5v4ZM9 19.7H4.3V15H5v4h4Zm6 0V19h4v-4h.7v4.7ZM19 9V5h-4v-.7h4.7V9Z"/>
    </Icon>
  );
});

IconMaterialFilterCenterFocusW100Filled.displayName = 'AmauiIconMaterialFilterCenterFocusW100Filled';

export default IconMaterialFilterCenterFocusW100Filled;
