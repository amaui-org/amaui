import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpenW100Filled'

      short_name='LeftPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M495 459v234l118-117-118-117ZM348 856h412V296H348v560Zm-176 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpenW100Filled.displayName = 'AmauiIconMaterialLeftPanelOpenW100Filled';

export default IconMaterialLeftPanelOpenW100Filled;
