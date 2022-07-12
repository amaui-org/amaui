import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampTwoTone'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M10.5 18.9v-7.975H6.1q-.775 0-1.225-.613-.45-.612-.2-1.337L6.45 3.2q.3-.95 1.088-1.55.787-.6 1.812-.6h5.325q1 0 1.8.6T17.55 3.2l1.8 5.775q.225.725-.225 1.337-.45.613-1.225.613h-4.375V18.9Zm-3 4.15v-3.025h9.025v3.025Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampTwoTone;
