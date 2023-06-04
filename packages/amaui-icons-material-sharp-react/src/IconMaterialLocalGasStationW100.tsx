import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalGasStationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalGasStationW100'

      short_name='LocalGasStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V4.3h7.4v7.2h2.4V19h2.8v-8.1q-.225.15-.475.225-.25.075-.525.075-.725 0-1.212-.488-.488-.487-.488-1.212 0-.65.4-1.137.4-.488 1.05-.563l-2.5-2.5.5-.5L18 8.15q.275.275.438.625.162.35.162.725v10.2h-4.2v-7.5h-1.7v7.5Zm.7-9.05h6V5H6Zm10.9-.15q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q17.325 8.5 16.9 8.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM6 19h6v-7.65H6Zm6 0H6h6Z"/>
    </Icon>
  );
});

IconMaterialLocalGasStationW100.displayName = 'AmauiIconMaterialLocalGasStationW100';

export default IconMaterialLocalGasStationW100;
