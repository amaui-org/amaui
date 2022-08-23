import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApartmentSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApartmentSharpW100Filled'
      short_name='Apartment'

      {...props}
    >
      <path d="M3.65 19.9V7.2H7.65V3.2H16.35V11.2H20.35V19.9H13.65V15.9H10.35V19.9ZM4.35 19.2H7.65V15.9H4.35ZM4.35 15.2H7.65V11.9H4.35ZM4.35 11.2H7.65V7.9H4.35ZM8.35 15.2H11.65V11.9H8.35ZM8.35 11.2H11.65V7.9H8.35ZM8.35 7.2H11.65V3.9H8.35ZM12.35 15.2H15.65V11.9H12.35ZM12.35 11.2H15.65V7.9H12.35ZM12.35 7.2H15.65V3.9H12.35ZM16.35 19.2H19.65V15.9H16.35ZM16.35 15.2H19.65V11.9H16.35Z"/>
    </Icon>
  );
});

IconMaterialApartmentSharpW100Filled.displayName = 'AmauiIconMaterialApartmentSharpW100Filled';

export default IconMaterialApartmentSharpW100Filled;
