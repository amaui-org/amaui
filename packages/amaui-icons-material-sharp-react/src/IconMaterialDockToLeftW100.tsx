import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToLeftW100'

      short_name='DockToLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 856h120V296H640v560Zm-440 0h412V296H200v560Zm440 0h120-120Zm-468 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDockToLeftW100.displayName = 'AmauiIconMaterialDockToLeftW100';

export default IconMaterialDockToLeftW100;
