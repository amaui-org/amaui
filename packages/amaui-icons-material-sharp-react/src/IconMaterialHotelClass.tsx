import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelClass = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClass'

      short_name='HotelClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 12.775ZM4.825 22l2.325-7.6L1 10h7.6L11 2l2.4 8H21l-6.15 4.4 2.325 7.6L11 17.3ZM8.6 16.65 11 14.8l2.4 1.85-.9-3.05 2.25-1.6h-2.8L11 8.9l-.95 3.1h-2.8l2.25 1.6ZM21.35 22l-2.725-2.075L17.15 15.2l3.1-2.2h3.425L19.5 16ZM14.9 8l-.75-2.55L15.175 2 17 8Z"/>
    </Icon>
  );
});

IconMaterialHotelClass.displayName = 'AmauiIconMaterialHotelClass';

export default IconMaterialHotelClass;
