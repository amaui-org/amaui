import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamiliarFaceAndZone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamiliarFaceAndZone'

      short_name='FamiliarFaceAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q3.35 0 5.675 2.325Q20 8.65 20 12q0 3.35-2.325 5.675Q15.35 20 12 20Zm0-2q2.5 0 4.25-1.75T18 12q0-.425-.062-.838-.063-.412-.188-.812-.375.075-.75.112-.375.038-.75.038-1.575 0-3-.6T10.7 8.15q-.7 1.425-1.925 2.475T6 12.15q.075 2.45 1.812 4.15Q9.55 18 12 18ZM6.4 9.85q1.1-.575 1.675-1.338Q8.65 7.75 9.2 6.7q-.95.5-1.675 1.312Q6.8 8.825 6.4 9.85ZM9.5 14q-.425 0-.712-.288Q8.5 13.425 8.5 13t.288-.713Q9.075 12 9.5 12t.713.287q.287.288.287.713t-.287.712Q9.925 14 9.5 14Zm6.75-5.5h.3q.15 0 .3-.025-.825-1.125-2.087-1.8Q13.5 6 12 6h-.3q-.15 0-.275.025.975 1.125 2.063 1.8 1.087.675 2.762.675ZM14.5 14q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q14.075 12 14.5 12t.713.287q.287.288.287.713t-.287.712Q14.925 14 14.5 14ZM1 6V1h5v2H3v3Zm5 17H1v-5h2v3h3Zm12 0v-2h3v-3h2v5Zm3-17V3h-3V1h5v5Zm-9.575.025ZM9.2 6.7Z"/>
    </Icon>
  );
});

IconMaterialFamiliarFaceAndZone.displayName = 'AmauiIconMaterialFamiliarFaceAndZone';

export default IconMaterialFamiliarFaceAndZone;
