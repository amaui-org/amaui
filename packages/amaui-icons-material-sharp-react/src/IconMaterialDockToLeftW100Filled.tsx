import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToLeftW100Filled'

      short_name='DockToLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856h412V296H200v560Zm-28 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDockToLeftW100Filled.displayName = 'AmauiIconMaterialDockToLeftW100Filled';

export default IconMaterialDockToLeftW100Filled;
