import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCardTravelSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelSharpW100'
      short_name='CardTravel'

      {...props}
    >
      <path d="M4 16.45V19H20V16.45ZM8.3 7.3V4.3H15.7V7.3H20.7V19.7H3.3V7.3ZM4 14.55H20V8H15.7V9.5H15V8H9V9.5H8.3V8H4ZM9 7.3H15V5H9ZM4 19V8V9.5V8V9.5V8V19Z"/>
    </Icon>
  );
});

IconMaterialCardTravelSharpW100.displayName = 'AmauiIconMaterialCardTravelSharpW100';

export default IconMaterialCardTravelSharpW100;
