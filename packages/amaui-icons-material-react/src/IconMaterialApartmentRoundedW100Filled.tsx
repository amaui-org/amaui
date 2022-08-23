import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApartmentRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApartmentRoundedW100Filled'
      short_name='Apartment'

      {...props}
    >
      <path d="M4.35 19.9Q4.075 19.9 3.863 19.688Q3.65 19.475 3.65 19.2V7.9Q3.65 7.625 3.863 7.412Q4.075 7.2 4.35 7.2H7.65V3.9Q7.65 3.625 7.863 3.412Q8.075 3.2 8.35 3.2H15.65Q15.925 3.2 16.138 3.412Q16.35 3.625 16.35 3.9V11.2H19.65Q19.925 11.2 20.138 11.412Q20.35 11.625 20.35 11.9V19.2Q20.35 19.475 20.138 19.688Q19.925 19.9 19.65 19.9H13.65V15.9H10.35V19.9ZM4.35 19.2H7.65V15.9H4.35ZM4.35 15.2H7.65V11.9H4.35ZM4.35 11.2H7.65V7.9H4.35ZM8.35 15.2H11.65V11.9H8.35ZM8.35 11.2H11.65V7.9H8.35ZM8.35 7.2H11.65V3.9H8.35ZM12.35 15.2H15.65V11.9H12.35ZM12.35 11.2H15.65V7.9H12.35ZM12.35 7.2H15.65V3.9H12.35ZM16.35 19.2H19.65V15.9H16.35ZM16.35 15.2H19.65V11.9H16.35Z"/>
    </Icon>
  );
});

IconMaterialApartmentRoundedW100Filled.displayName = 'AmauiIconMaterialApartmentRoundedW100Filled';

export default IconMaterialApartmentRoundedW100Filled;
