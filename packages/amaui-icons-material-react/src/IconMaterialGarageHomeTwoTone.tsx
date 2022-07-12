import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageHomeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeTwoTone'
      short_name='GarageHome'

      {...props}
    >
      <path d="M3.375 21.625V8.65L12 2.175l8.625 6.475v12.975H16.65V10.6H7.375v11.025Zm6.65-2.65H14v-1.55h-3.975Zm0-4.2H14v-1.55h-3.975Z"/>
    </Icon>
  )
});

export default IconMaterialGarageHomeTwoTone;
