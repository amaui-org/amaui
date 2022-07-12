import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthOutlinedW700'
      short_name='North'

      {...props}
    >
      <path d="M10.425 22.575V7.175L6.35 11.275L4.15 9.05L12 1.2L19.875 9.05L17.65 11.275L13.575 7.175V22.575Z"/>
    </Icon>
  )
});

export default IconMaterialNorthOutlinedW700;
