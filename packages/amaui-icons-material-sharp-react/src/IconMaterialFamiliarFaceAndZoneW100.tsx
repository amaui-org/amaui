import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamiliarFaceAndZoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamiliarFaceAndZoneW100'

      short_name='FamiliarFaceAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.7q-2.8 0-4.75-1.95Q5.3 14.8 5.3 12t1.95-4.75Q9.2 5.3 12 5.3t4.75 1.95Q18.7 9.2 18.7 12t-1.95 4.75Q14.8 18.7 12 18.7Zm0-.7q2.5 0 4.25-1.75T18 12q0-.45-.062-.875-.063-.425-.188-.825-.4.1-.8.15-.4.05-.825.05-1.7 0-3.212-.738-1.513-.737-2.588-2.037-.6 1.45-1.712 2.537Q7.5 11.35 6 11.875q0 2.5 1.75 4.313Q9.5 18 12 18Zm-5.9-6.925q1.175-.5 2.388-1.7Q9.7 8.175 9.9 6.35q-1.55.575-2.55 1.825-1 1.25-1.25 2.9Zm3.65 2.6q-.4 0-.662-.263-.263-.262-.263-.662t.263-.688q.262-.287.662-.287t.688.287q.287.288.287.688 0 .4-.287.662-.288.263-.688.263ZM16.125 9.8q.375 0 .712-.038.338-.037.688-.137-.725-1.7-2.237-2.662Q13.775 6 12 6q-.5 0-.912.05-.413.05-.838.175.925 1.875 2.613 2.725 1.687.85 3.262.85Zm-1.875 3.875q-.4 0-.662-.263-.263-.262-.263-.662t.263-.688q.262-.287.662-.287t.688.287q.287.288.287.688 0 .4-.287.662-.288.263-.688.263ZM2.3 6V2.3H6V3H3v3ZM6 21.7H2.3V18H3v3h3Zm12 0V21h3v-3h.7v3.7ZM21 6V3h-3v-.7h3.7V6Zm-10.75.225Zm-.35.125Z"/>
    </Icon>
  );
});

IconMaterialFamiliarFaceAndZoneW100.displayName = 'AmauiIconMaterialFamiliarFaceAndZoneW100';

export default IconMaterialFamiliarFaceAndZoneW100;
