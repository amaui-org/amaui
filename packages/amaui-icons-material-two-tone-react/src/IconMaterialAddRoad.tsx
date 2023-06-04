import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoad'

      short_name='AddRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"/><rect height="9" width="2" x="18" y="4"/><rect height="16" width="2" x="4" y="4"/><rect height="4" width="2" x="11" y="4"/><rect height="4" width="2" x="11" y="10"/><rect height="4" width="2" x="11" y="16"/></g></g>
    </Icon>
  );
});

IconMaterialAddRoad.displayName = 'AmauiIconMaterialAddRoad';

export default IconMaterialAddRoad;
