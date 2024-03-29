import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamiliarFaceAndZoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamiliarFaceAndZoneFilled'

      short_name='FamiliarFaceAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q3.35 0 5.675 2.325Q20 8.65 20 12q0 3.35-2.325 5.675Q15.35 20 12 20Zm0-2q2.5 0 4.25-1.75T18 12q0-.425-.062-.838-.063-.412-.188-.812-.375.075-.75.112-.375.038-.75.038-1.575 0-3-.6T10.7 8.15q-.7 1.425-1.925 2.475T6 12.15q.075 2.45 1.812 4.15Q9.55 18 12 18Zm-2.5-4q-.425 0-.712-.288Q8.5 13.425 8.5 13t.288-.713Q9.075 12 9.5 12t.713.287q.287.288.287.713t-.287.712Q9.925 14 9.5 14Zm5 0q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q14.075 12 14.5 12t.713.287q.287.288.287.713t-.287.712Q14.925 14 14.5 14ZM1 6V1h5v2H3v3Zm5 17H1v-5h2v3h3Zm12 0v-2h3v-3h2v5Zm3-17V3h-3V1h5v5Z"/>
    </Icon>
  );
});

IconMaterialFamiliarFaceAndZoneFilled.displayName = 'AmauiIconMaterialFamiliarFaceAndZoneFilled';

export default IconMaterialFamiliarFaceAndZoneFilled;
