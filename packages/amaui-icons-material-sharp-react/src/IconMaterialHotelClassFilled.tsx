import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelClassFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassFilled'

      short_name='HotelClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.825 22 2.325-7.6L1 10h7.6L11 2l2.4 8H21l-6.15 4.4 2.325 7.6L11 17.3Zm16.525 0-2.725-2.075L17.15 15.2l3.1-2.2h3.425L19.5 16ZM14.9 8l-.75-2.55L15.175 2 17 8Z"/>
    </Icon>
  );
});

IconMaterialHotelClassFilled.displayName = 'AmauiIconMaterialHotelClassFilled';

export default IconMaterialHotelClassFilled;
