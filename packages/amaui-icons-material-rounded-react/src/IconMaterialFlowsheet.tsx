import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlowsheet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flowsheet'

      short_name='Flowsheet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 12v6V6v6Zm10 9q.425 0 .713-.288Q15 20.425 15 20t-.287-.712Q14.425 19 14 19t-.712.288Q13 19.575 13 20t.288.712Q13.575 21 14 21Zm6-10q.425 0 .712-.288Q21 10.425 21 10t-.288-.713Q20.425 9 20 9t-.712.287Q19 9.575 19 10t.288.712Q19.575 11 20 11Zm-10 0q.425 0 .713-.288Q11 10.425 11 10t-.287-.713Q10.425 9 10 9H7q-.425 0-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0 4q.425 0 .713-.288Q11 14.425 11 14t-.287-.713Q10.425 13 10 13H7q-.425 0-.713.287Q6 13.575 6 14t.287.712Q6.575 15 7 15Zm-6 5q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6H4v12h5v2Zm10 3q-1.25 0-2.125-.875T11 20q0-.975.562-1.75.563-.775 1.438-1.075V15q0-.425.288-.713Q13.575 14 14 14h5v-1.175q-.875-.3-1.438-1.075Q17 10.975 17 10q0-1.25.875-2.125T20 7q1.25 0 2.125.875T23 10q0 .975-.562 1.75-.563.775-1.438 1.075V15q0 .425-.288.712Q20.425 16 20 16h-5v1.175q.875.3 1.438 1.075Q17 19.025 17 20q0 1.25-.875 2.125T14 23Z"/>
    </Icon>
  );
});

IconMaterialFlowsheet.displayName = 'AmauiIconMaterialFlowsheet';

export default IconMaterialFlowsheet;
