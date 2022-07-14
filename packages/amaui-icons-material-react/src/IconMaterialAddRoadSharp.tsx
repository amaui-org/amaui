import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddRoadSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadSharp'
      short_name='AddRoad'

      {...props}
    >
      <path d="M18 23V20H15V18H18V15H20V18H23V20H20V23ZM18 13V4H20V13ZM4 20V4H6V20ZM11 8V4H13V8ZM11 14V10H13V14ZM11 20V16H13V20Z"/>
    </Icon>
  );
});

export default IconMaterialAddRoadSharp;
