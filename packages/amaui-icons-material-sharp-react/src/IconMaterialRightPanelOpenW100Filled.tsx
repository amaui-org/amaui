import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpenW100Filled'

      short_name='RightPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M465 693V459L347 576l118 117ZM200 856h412V296H200v560Zm-28 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpenW100Filled.displayName = 'AmauiIconMaterialRightPanelOpenW100Filled';

export default IconMaterialRightPanelOpenW100Filled;
