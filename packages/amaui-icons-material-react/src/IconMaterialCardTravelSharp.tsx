import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardTravelSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelSharp'
      short_name='CardTravel'

      {...props}
    >
      <path d="M4 17V19H20V17ZM7 6V2H17V6H22V21H2V6ZM4 14H20V8H17V10H15V8H9V10H7V8H4ZM9 6H15V4H9ZM4 19V8V10V8V10V8V19Z"/>
    </Icon>
  );
});

export default IconMaterialCardTravelSharp;
