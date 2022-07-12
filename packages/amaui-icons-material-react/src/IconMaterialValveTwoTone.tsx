import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialValveTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ValveTwoTone'
      short_name='Valve'

      {...props}
    >
      <path d="M10.5 7.725v-3h-4V1.7h11.025v3.025h-4v3Zm-7.775 15.3V12.85H5.75v1h1.975v-1.975h-1V8.85h10.55v3.025h-1v1.975h1.975v-1h3.025v10.175H18.25v-1H5.75v1Z"/>
    </Icon>
  )
});

export default IconMaterialValveTwoTone;
