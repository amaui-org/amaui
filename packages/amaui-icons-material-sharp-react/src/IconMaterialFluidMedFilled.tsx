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
      <path d="M19 22q-.825 0-1.413-.587Q17 20.825 17 20v-1.1q-1.725-.35-2.863-1.712Q13 15.825 13 14V7h10v7q0 1.825-1.137 3.188Q20.725 18.55 19 18.9V20h3v2Zm.75-9H21V9h-6v2h.75q.825 0 1.562.375.738.375 1.238 1.025.2.3.525.45.325.15.675.15ZM8 22.5 6 21v-4H5q-.825 0-1.413-.587Q3 15.825 3 15V7.5H2v-2h4V4H4.5V2h5v2H8v1.5h4v2h-1V15q0 .825-.587 1.413Q9.825 17 9 17H8ZM5 15h4v-1.5H6.5V12H9v-1.5H6.5V9H9V7.5H5V15Z"/>
    </Icon>
  );
});

IconMaterialFluidMedFilled.displayName = 'AmauiIconMaterialFluidMedFilled';

export default IconMaterialFluidMedFilled;
