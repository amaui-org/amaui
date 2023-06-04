import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelClassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassW100Filled'

      short_name='HotelClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.25 18.55 1.4-4.65-3.6-2.6h4.475L11 6.5l1.475 4.8h4.475l-3.6 2.6 1.4 4.65L11 15.7Zm10.325 0-.95-.725-.95-3.15 2.5-1.8h1.2L16.5 14.95ZM13.95 9.3l-.325-1.05.525-1.75.85 2.8Z"/>
    </Icon>
  );
});

IconMaterialHotelClassW100Filled.displayName = 'AmauiIconMaterialHotelClassW100Filled';

export default IconMaterialHotelClassW100Filled;
