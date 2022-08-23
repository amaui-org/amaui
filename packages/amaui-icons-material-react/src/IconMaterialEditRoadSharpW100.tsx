import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditRoadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoadSharpW100'
      short_name='EditRoad'

      {...props}
    >
      <path d="M17.35 14.05V4.65H18.05V13.35ZM5.95 19.65V4.65H6.65V19.65ZM11.65 7.65V4.65H12.35V7.65ZM11.65 13.65V10.65H12.35V13.65ZM11.65 19.65V16.65H12.35V19.65ZM21.275 13.95 20.775 13.45 21.575 12.65 22.075 13.15ZM15.075 19.65V19.15L20.075 14.15L20.575 14.65L15.575 19.65Z"/>
    </Icon>
  );
});

IconMaterialEditRoadSharpW100.displayName = 'AmauiIconMaterialEditRoadSharpW100';

export default IconMaterialEditRoadSharpW100;
