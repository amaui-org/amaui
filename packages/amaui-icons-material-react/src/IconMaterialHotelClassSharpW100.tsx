import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelClassSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassSharpW100'
      short_name='HotelClass'

      {...props}
    >
      <path d="M11 12.775ZM7.25 18.55 8.65 13.9 5.05 11.3H9.525L11 6.5L12.475 11.3H16.95L13.35 13.9L14.75 18.55L11 15.7ZM8.6 16.65 11 14.825 13.4 16.65 12.5 13.6 14.775 12H11.95L11 8.9L10.05 12H7.225L9.5 13.6ZM17.575 18.55 16.625 17.825 15.675 14.675 18.175 12.875H19.375L16.5 14.95ZM13.95 9.3 13.625 8.25 14.15 6.5 15 9.3Z"/>
    </Icon>
  );
});

IconMaterialHotelClassSharpW100.displayName = 'AmauiIconMaterialHotelClassSharpW100';

export default IconMaterialHotelClassSharpW100;
