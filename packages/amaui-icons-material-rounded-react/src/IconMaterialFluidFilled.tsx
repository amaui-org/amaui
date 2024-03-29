import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidFilled'

      short_name='Fluid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 23q-.825 0-1.412-.587Q11 21.825 11 21v-2.075q-2.575-.35-4.287-2.312Q5 14.65 5 12V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v9q0 2.65-1.712 4.613-1.713 1.962-4.288 2.312V21h5q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 23 18 23Zm.75-10h3.15q.05-.25.075-.488Q17 12.275 17 12v-1h-3q-.425 0-.712-.288Q13 10.425 13 10t.288-.713Q13.575 9 14 9h3V7h-4q-.425 0-.712-.287Q12 6.425 12 6t.288-.713Q12.575 5 13 5h4V3H7v8h2.75q.825 0 1.562.375.738.375 1.238 1.025.2.275.525.437.325.163.675.163Z"/>
    </Icon>
  );
});

IconMaterialFluidFilled.displayName = 'AmauiIconMaterialFluidFilled';

export default IconMaterialFluidFilled;
