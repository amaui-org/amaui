import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoOutlinedW700Filled'
      short_name='Tornado'

      {...props}
    >
      <path d="M2.975 7.425 0.125 2.5H23.875L21.025 7.425ZM5.875 12.425 4.8 10.575H19.2L18.125 12.425ZM12 23 7.7 15.575H16.3Z"/>
    </Icon>
  )
});

export default IconMaterialTornadoOutlinedW700Filled;
