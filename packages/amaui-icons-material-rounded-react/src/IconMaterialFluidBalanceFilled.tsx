import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidBalanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalanceFilled'

      short_name='FluidBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6h-7q-1.65 0-2.825 1.175Q11 8.35 11 10v5q0 1.425.525 2.725T13.075 20Zm15 3q-.825 0-1.413-.587Q17 21.825 17 21v-1.1q-1.725-.35-2.863-1.712Q13 16.825 13 15v-5q0-.825.575-1.413Q14.15 8 15 8h6q.825 0 1.413.587Q23 9.175 23 10v5q0 1.825-1.137 3.188Q20.725 19.55 19 19.9V21h2q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 23 21 23Zm.75-9H21v-4h-6v2h.75q.825 0 1.562.375.738.375 1.238 1.025.2.3.525.45.325.15.675.15ZM10 11q.425 0 .713-.288Q11 10.425 11 10t-.287-.713Q10.425 9 10 9H7q-.425 0-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0 4q.425 0 .713-.288Q11 14.425 11 14t-.287-.713Q10.425 13 10 13H7q-.425 0-.713.287Q6 13.575 6 14t.287.712Q6.575 15 7 15Z"/>
    </Icon>
  );
});

IconMaterialFluidBalanceFilled.displayName = 'AmauiIconMaterialFluidBalanceFilled';

export default IconMaterialFluidBalanceFilled;
