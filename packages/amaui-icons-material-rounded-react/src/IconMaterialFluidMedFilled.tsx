import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidMedFilled'

      short_name='FluidMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 22q-.825 0-1.413-.587Q17 20.825 17 20v-1.1q-1.725-.35-2.863-1.712Q13 15.825 13 14V9q0-.825.575-1.413Q14.15 7 15 7h6q.825 0 1.413.587Q23 8.175 23 9v5q0 1.825-1.137 3.188Q20.725 18.55 19 18.9V20h2q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 22 21 22Zm.75-9H21V9h-6v2h.75q.825 0 1.562.375.738.375 1.238 1.025.2.3.525.45.325.15.675.15ZM6 17H5q-.825 0-1.413-.587Q3 15.825 3 15V7.5q-.425 0-.712-.287Q2 6.925 2 6.5t.288-.713Q2.575 5.5 3 5.5h3V4h-.5q-.425 0-.713-.288Q4.5 3.425 4.5 3t.287-.713Q5.075 2 5.5 2h3q.425 0 .713.287.287.288.287.713t-.287.712Q8.925 4 8.5 4H8v1.5h3q.425 0 .713.287.287.288.287.713t-.287.713Q11.425 7.5 11 7.5V15q0 .825-.587 1.413Q9.825 17 9 17H8v4.5q0 .3-.275.45-.275.15-.525-.05l-.8-.6q-.2-.15-.3-.35-.1-.2-.1-.45Zm-1-2h4v-1.5H7.25q-.3 0-.525-.225-.225-.225-.225-.525 0-.3.225-.525Q6.95 12 7.25 12H9v-1.5H7.25q-.3 0-.525-.225Q6.5 10.05 6.5 9.75q0-.3.225-.525Q6.95 9 7.25 9H9V7.5H5V15Z"/>
    </Icon>
  );
});

IconMaterialFluidMedFilled.displayName = 'AmauiIconMaterialFluidMedFilled';

export default IconMaterialFluidMedFilled;
