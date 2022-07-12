import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardTravelSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelSharpW100Filled'
      short_name='CardTravel'

      {...props}
    >
      <path d="M3.3 19.7V7.3H8.3V4.3H15.7V7.3H20.7V19.7ZM9 7.3H15V5H9ZM4 16.45H20V14.55H4Z"/>
    </Icon>
  )
});

export default IconMaterialCardTravelSharpW100Filled;
