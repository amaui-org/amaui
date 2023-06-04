import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRightW100'

      short_name='DockToRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856h120V296H200v560Zm148 0h412V296H348v560Zm-28 0H200h120Zm-148 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDockToRightW100.displayName = 'AmauiIconMaterialDockToRightW100';

export default IconMaterialDockToRightW100;
