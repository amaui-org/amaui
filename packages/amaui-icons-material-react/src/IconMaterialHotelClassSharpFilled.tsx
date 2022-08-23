import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelClassSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassSharpFilled'
      short_name='HotelClass'

      {...props}
    >
      <path d="M4.825 22 7.15 14.4 1 10H8.6L11 2L13.4 10H21L14.85 14.4L17.175 22L11 17.3ZM21.35 22 18.625 19.925 17.15 15.2 20.25 13H23.675L19.5 16ZM14.9 8 14.15 5.45 15.175 2 17 8Z"/>
    </Icon>
  );
});

IconMaterialHotelClassSharpFilled.displayName = 'AmauiIconMaterialHotelClassSharpFilled';

export default IconMaterialHotelClassSharpFilled;
