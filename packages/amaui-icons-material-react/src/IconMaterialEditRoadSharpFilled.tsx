import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditRoadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoadSharpFilled'
      short_name='EditRoad'

      {...props}
    >
      <path d="M16 13.05V4H18V11.05ZM4 20V4H6V20ZM10 8V4H12V8ZM10 14V10H12V14ZM10 20V16H12V20ZM22.125 14 20 11.875 21.425 10.45 23.55 12.575ZM14 20V17.875L19.3 12.575L21.425 14.7L16.125 20Z"/>
    </Icon>
  );
});

IconMaterialEditRoadSharpFilled.displayName = 'AmauiIconMaterialEditRoadSharpFilled';

export default IconMaterialEditRoadSharpFilled;
