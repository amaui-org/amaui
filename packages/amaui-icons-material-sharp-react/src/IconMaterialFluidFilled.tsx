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
      <path d="M19 23h-8v-4.075q-2.575-.35-4.287-2.312Q5 14.65 5 12V1h14v11q0 2.65-1.712 4.613-1.713 1.962-4.288 2.312V21h6Zm-5.25-10h3.15q.05-.25.075-.488Q17 12.275 17 12v-1h-4V9h4V7h-5V5h5V3H7v8h2.75q.825 0 1.562.375.738.375 1.238 1.025.2.275.525.437.325.163.675.163Z"/>
    </Icon>
  );
});

IconMaterialFluidFilled.displayName = 'AmauiIconMaterialFluidFilled';

export default IconMaterialFluidFilled;
