import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardTravelSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelSharpFilled'
      short_name='CardTravel'

      {...props}
    >
      <path d="M2 21V6H7V2H17V6H22V21ZM9 6H15V4H9ZM4 17H20V14H4Z"/>
    </Icon>
  );
});

export default IconMaterialCardTravelSharpFilled;
