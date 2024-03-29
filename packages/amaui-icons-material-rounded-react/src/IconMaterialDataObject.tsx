import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataObject = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObject'

      short_name='DataObject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20q-.425 0-.712-.288Q14 19.425 14 19t.288-.712Q14.575 18 15 18h2q.425 0 .712-.288Q18 17.425 18 17v-2q0-.95.55-1.725.55-.775 1.45-1.1v-.35q-.9-.325-1.45-1.1Q18 9.95 18 9V7q0-.425-.288-.713Q17.425 6 17 6h-2q-.425 0-.712-.287Q14 5.425 14 5t.288-.713Q14.575 4 15 4h2q1.25 0 2.125.875T20 7v2q0 .425.288.712.287.288.712.288t.712.287Q22 10.575 22 11v2q0 .425-.288.712Q21.425 14 21 14t-.712.287Q20 14.575 20 15v2q0 1.25-.875 2.125T17 20Zm-8 0q-1.25 0-2.125-.875T4 17v-2q0-.425-.287-.713Q3.425 14 3 14t-.712-.288Q2 13.425 2 13v-2q0-.425.288-.713Q2.575 10 3 10t.713-.288Q4 9.425 4 9V7q0-1.25.875-2.125T7 4h2q.425 0 .713.287Q10 4.575 10 5t-.287.713Q9.425 6 9 6H7q-.425 0-.713.287Q6 6.575 6 7v2q0 .95-.55 1.725-.55.775-1.45 1.1v.35q.9.325 1.45 1.1Q6 14.05 6 15v2q0 .425.287.712Q6.575 18 7 18h2q.425 0 .713.288.287.287.287.712t-.287.712Q9.425 20 9 20Z"/>
    </Icon>
  );
});

IconMaterialDataObject.displayName = 'AmauiIconMaterialDataObject';

export default IconMaterialDataObject;
