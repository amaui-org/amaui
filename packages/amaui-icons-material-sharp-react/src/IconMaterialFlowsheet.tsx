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
      <path d="M4 12v6V6v6Zm10 9q.425 0 .713-.288Q15 20.425 15 20t-.287-.712Q14.425 19 14 19t-.712.288Q13 19.575 13 20t.288.712Q13.575 21 14 21Zm6-10q.425 0 .712-.288Q21 10.425 21 10t-.288-.713Q20.425 9 20 9t-.712.287Q19 9.575 19 10t.288.712Q19.575 11 20 11ZM6 11h5V9H6Zm0 4h5v-2H6Zm-4 5V4h20v2H4v12h5v2Zm12 3q-1.25 0-2.125-.875T11 20q0-.975.562-1.75.563-.775 1.438-1.075V14h6v-1.175q-.875-.3-1.438-1.075Q17 10.975 17 10q0-1.25.875-2.125T20 7q1.25 0 2.125.875T23 10q0 .975-.562 1.75-.563.775-1.438 1.075V16h-6v1.175q.875.3 1.438 1.075Q17 19.025 17 20q0 1.25-.875 2.125T14 23Z"/>
    </Icon>
  );
});

IconMaterialFlowsheet.displayName = 'AmauiIconMaterialFlowsheet';

export default IconMaterialFlowsheet;
