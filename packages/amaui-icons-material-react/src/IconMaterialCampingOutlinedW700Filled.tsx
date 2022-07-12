import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampingOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingOutlinedW700Filled'
      short_name='Camping'

      {...props}
    >
      <path d="M1.675 22.575v-5.2l8.35-11.25L8.175 3.6 10.7 1.725l1.3 1.75 1.275-1.725 2.55 1.85-1.85 2.525 8.35 11.25v5.2Zm6.95-3.15h6.725l-3.35-4.7Z"/>
    </Icon>
  )
});

export default IconMaterialCampingOutlinedW700Filled;
