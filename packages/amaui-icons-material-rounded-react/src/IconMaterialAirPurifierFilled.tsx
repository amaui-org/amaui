import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirPurifierFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierFilled'

      short_name='AirPurifier'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T340-480q0-33 23.5-56.5T420-560q33 0 56.5 23.5T500-480q0 33-23.5 56.5T420-400Zm296-80q-17 0-29-11.5T675-520q0-17 12-28.5t29-11.5q9 0 16-4.5t12-13.5q15-29 42-45.5t59-16.5q17 0 28.5 11.5T885-600q0 17-11.5 28.5T845-560q-10 0-17 4.5T816-542q-15 29-41.5 45.5T716-480Zm0 160q-17 0-29-11.5T675-360q0-17 12-28.5t29-11.5q9 0 16-4.5t12-13.5q15-29 41.5-45.5T844-480q17 0 29 11.5t12 28.5q0 17-12 28.5T844-400q-9 0-16 4.5T816-382q-15 29-41.5 45.5T716-320ZM200-120q-33 0-56.5-23.5T120-200v-480q0-66 47-113t113-47h280q66 0 113 47t47 113v40h-50q-17 0-28.5 11.5T630-600v280q0 17 11.5 28.5T670-280h50v80q0 33-23.5 56.5T640-120H200Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierFilled.displayName = 'AmauiIconMaterialAirPurifierFilled';

export default IconMaterialAirPurifierFilled;
