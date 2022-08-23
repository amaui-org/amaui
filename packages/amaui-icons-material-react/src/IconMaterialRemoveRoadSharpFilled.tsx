import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveRoadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoadSharpFilled'
      short_name='RemoveRoad'

      {...props}
    >
      <path d="M18 13V4H20V13ZM4 20V4H6V20ZM11 8V4H13V8ZM11 14V10H13V14ZM11 20V16H13V20ZM15.425 20.575 17.55 18.45 15.425 16.35 16.85 14.925 18.975 17.05 21.1 14.925 22.5 16.35 20.375 18.475 22.475 20.6 21.1 22 18.95 19.875 16.825 22Z"/>
    </Icon>
  );
});

IconMaterialRemoveRoadSharpFilled.displayName = 'AmauiIconMaterialRemoveRoadSharpFilled';

export default IconMaterialRemoveRoadSharpFilled;
