import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlowsheetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlowsheetFilled'

      short_name='Flowsheet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 11h5V9H6Zm-4 9V4h19.9v1.375q-.425-.2-.912-.287Q20.5 5 20 5q-2.075 0-3.538 1.463Q15 7.925 15 10q0 .55.1 1.05t.3.95H11v1H6v2h5v1q-.95.675-1.475 1.712Q9 18.75 9 20Zm12 1q.425 0 .713-.288Q15 20.425 15 20t-.287-.712Q14.425 19 14 19t-.712.288Q13 19.575 13 20t.288.712Q13.575 21 14 21Zm6-10q.425 0 .712-.288Q21 10.425 21 10t-.288-.713Q20.425 9 20 9t-.712.287Q19 9.575 19 10t.288.712Q19.575 11 20 11Zm-6 12q-1.25 0-2.125-.875T11 20q0-.975.562-1.75.563-.775 1.438-1.075V14h6v-1.175q-.875-.3-1.438-1.075Q17 10.975 17 10q0-1.25.875-2.125T20 7q1.25 0 2.125.875T23 10q0 .975-.562 1.75-.563.775-1.438 1.075V16h-6v1.175q.875.3 1.438 1.075Q17 19.025 17 20q0 1.25-.875 2.125T14 23Z"/>
    </Icon>
  );
});

IconMaterialFlowsheetFilled.displayName = 'AmauiIconMaterialFlowsheetFilled';

export default IconMaterialFlowsheetFilled;
