import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirPurifier = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifier'

      short_name='AirPurifier'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-560q0-66 47-113t113-47h280q66 0 113 47t47 113v40h-80v-40q0-33-23.5-56.5T560-760H280q-33 0-56.5 23.5T200-680v480h440v-80h80v160H120Zm300-200q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T340-480q0-33 23.5-56.5T420-560q33 0 56.5 23.5T500-480q0 33-23.5 56.5T420-400Zm260-80v-80h36q9 0 16-4.5t12-13.5q15-29 41.5-45.5T844-640h36v80h-36q-9 0-16 4.5T816-542q-15 29-41.5 45.5T716-480h-36Zm0 160v-80h36q9 0 16-4.5t12-13.5q15-29 41.5-45.5T844-480h36v80h-36q-9 0-16 4.5T816-382q-15 29-41.5 45.5T716-320h-36Zm-40 120H200h440Z"/>
    </Icon>
  );
});

IconMaterialAirPurifier.displayName = 'AmauiIconMaterialAirPurifier';

export default IconMaterialAirPurifier;
