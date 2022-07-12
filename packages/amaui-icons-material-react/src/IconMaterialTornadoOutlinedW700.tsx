import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoOutlinedW700'
      short_name='Tornado'

      {...props}
    >
      <path d="M0.125 2.5H23.875L12 23ZM5.6 5.65 6.625 7.425H17.375L18.4 5.65ZM8.45 10.575 9.525 12.425H14.475L15.55 10.575ZM11.35 15.575 12 16.7 12.65 15.575Z"/>
    </Icon>
  )
});

export default IconMaterialTornadoOutlinedW700;
