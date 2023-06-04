import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamiliarFaceAndZoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamiliarFaceAndZoneW100Filled'

      short_name='FamiliarFaceAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.7q-2.8 0-4.75-1.95Q5.3 14.8 5.3 12t1.95-4.75Q9.2 5.3 12 5.3t4.75 1.95Q18.7 9.2 18.7 12t-1.95 4.75Q14.8 18.7 12 18.7Zm0-.7q2.5 0 4.25-1.75T18 12q0-.45-.062-.875-.063-.425-.188-.825-.4.1-.8.15-.4.05-.825.05-1.7 0-3.212-.738-1.513-.737-2.588-2.037-.6 1.45-1.712 2.537Q7.5 11.35 6 11.875q0 2.5 1.75 4.313Q9.5 18 12 18Zm-2.25-4.325q-.4 0-.662-.263-.263-.262-.263-.662t.263-.688q.262-.287.662-.287t.688.287q.287.288.287.688 0 .4-.287.662-.288.263-.688.263Zm4.5 0q-.4 0-.662-.263-.263-.262-.263-.662t.263-.688q.262-.287.662-.287t.688.287q.287.288.287.688 0 .4-.287.662-.288.263-.688.263ZM2.3 6V2.3H6V3H3v3ZM6 21.7H2.3V18H3v3h3Zm12 0V21h3v-3h.7v3.7ZM21 6V3h-3v-.7h3.7V6Z"/>
    </Icon>
  );
});

IconMaterialFamiliarFaceAndZoneW100Filled.displayName = 'AmauiIconMaterialFamiliarFaceAndZoneW100Filled';

export default IconMaterialFamiliarFaceAndZoneW100Filled;
