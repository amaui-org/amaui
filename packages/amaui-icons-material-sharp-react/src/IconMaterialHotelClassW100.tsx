import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelClassW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassW100'

      short_name='HotelClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 12.775ZM7.25 18.55l1.4-4.65-3.6-2.6h4.475L11 6.5l1.475 4.8h4.475l-3.6 2.6 1.4 4.65L11 15.7Zm1.35-1.9 2.4-1.825 2.4 1.825-.9-3.05 2.275-1.6H11.95L11 8.9l-.95 3.1H7.225L9.5 13.6Zm8.975 1.9-.95-.725-.95-3.15 2.5-1.8h1.2L16.5 14.95ZM13.95 9.3l-.325-1.05.525-1.75.85 2.8Z"/>
    </Icon>
  );
});

IconMaterialHotelClassW100.displayName = 'AmauiIconMaterialHotelClassW100';

export default IconMaterialHotelClassW100;
