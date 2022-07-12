import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoOutlinedFilled'
      short_name='Tornado'

      {...props}
    >
      <path d="M3.9 8 1 3H23L20.1 8ZM6.8 13 5.05 10H18.95L17.2 13ZM12 22 7.95 15H16.05Z"/>
    </Icon>
  )
});

export default IconMaterialTornadoOutlinedFilled;
