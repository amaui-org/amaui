import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddRoadTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadTwoTone'
      short_name='AddRoad'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"/><rect height="9" width="2" x="18" y="4"/><rect height="16" width="2" x="4" y="4"/><rect height="4" width="2" x="11" y="4"/><rect height="4" width="2" x="11" y="10"/><rect height="4" width="2" x="11" y="16"/></g></g>
    </Icon>
  );
});

IconMaterialAddRoadTwoTone.displayName = 'AmauiIconMaterialAddRoadTwoTone';

export default IconMaterialAddRoadTwoTone;
