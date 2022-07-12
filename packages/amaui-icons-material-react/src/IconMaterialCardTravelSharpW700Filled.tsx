import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardTravelSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelSharpW700Filled'
      short_name='CardTravel'

      {...props}
    >
      <path d="M1.15 21.85V5.15H6.625V0.4H17.375V5.15H22.85V21.85ZM9.775 5.15H14.225V3.55H9.775ZM4.3 17.075H19.7V13.3H4.3Z"/>
    </Icon>
  )
});

export default IconMaterialCardTravelSharpW700Filled;
