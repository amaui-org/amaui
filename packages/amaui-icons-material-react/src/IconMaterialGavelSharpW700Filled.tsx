import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGavelSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelSharpW700Filled'
      short_name='Gavel'

      {...props}
    >
      <path d="M2.8 22.525V20.15H15.95V22.525ZM9.125 17.675 2.65 11.225 5.575 8.275 12.075 14.725ZM16.525 10.25 10.075 3.75 13.025 0.85 19.5 7.3ZM20.6 21 6.75 7.15 8.95 4.925 22.8 18.8Z"/>
    </Icon>
  )
});

export default IconMaterialGavelSharpW700Filled;
