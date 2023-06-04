import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightShelterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelterW100Filled'

      short_name='NightShelter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.575l6.7 5.075V19.7ZM8 17.3h.8v-1.2h6.4v1.2h.8v-3.2q0-.65-.475-1.125T14.4 12.5h-2.8v2.8H8.8v-3.6H8Zm2.2-2.4q.425 0 .713-.287.287-.288.287-.713t-.287-.712q-.288-.288-.713-.288t-.712.288q-.288.287-.288.712t.288.713q.287.287.712.287Z"/>
    </Icon>
  );
});

IconMaterialNightShelterW100Filled.displayName = 'AmauiIconMaterialNightShelterW100Filled';

export default IconMaterialNightShelterW100Filled;
