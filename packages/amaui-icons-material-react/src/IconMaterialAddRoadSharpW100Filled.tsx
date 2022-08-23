import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddRoadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadSharpW100Filled'
      short_name='AddRoad'

      {...props}
    >
      <path d="M17.35 22.65V19.65H14.35V18.95H17.35V15.95H18.05V18.95H21.05V19.65H18.05V22.65ZM17.35 12.95V4.65H18.05V12.95ZM5.95 19.65V4.65H6.65V19.65ZM11.65 7.65V4.65H12.35V7.65ZM11.65 13.65V10.65H12.35V13.65ZM11.65 19.65V16.65H12.35V19.65Z"/>
    </Icon>
  );
});

IconMaterialAddRoadSharpW100Filled.displayName = 'AmauiIconMaterialAddRoadSharpW100Filled';

export default IconMaterialAddRoadSharpW100Filled;
