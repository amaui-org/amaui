import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelClassSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassSharp'
      short_name='HotelClass'

      {...props}
    >
      <path d="M11 12.775ZM4.825 22 7.15 14.4 1 10H8.6L11 2L13.4 10H21L14.85 14.4L17.175 22L11 17.3ZM8.6 16.65 11 14.8 13.4 16.65 12.5 13.6 14.75 12H11.95L11 8.9L10.05 12H7.25L9.5 13.6ZM21.35 22 18.625 19.925 17.15 15.2 20.25 13H23.675L19.5 16ZM14.9 8 14.15 5.45 15.175 2 17 8Z"/>
    </Icon>
  );
});

IconMaterialHotelClassSharp.displayName = 'AmauiIconMaterialHotelClassSharp';

export default IconMaterialHotelClassSharp;
