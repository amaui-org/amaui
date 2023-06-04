import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRightW100Filled'

      short_name='DockToRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M348 856h412V296H348v560Zm-176 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDockToRightW100Filled.displayName = 'AmauiIconMaterialDockToRightW100Filled';

export default IconMaterialDockToRightW100Filled;
