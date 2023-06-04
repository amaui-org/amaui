import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPhW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPhW100Filled'

      short_name='WaterPh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.55 20.7v-5.2h4.2v3.3h-3.5v1.9Zm6.1 0v-5.2h.7v2h2.8v-2h.7v5.2h-.7v-2.5h-2.8v2.5Zm-5.4-2.6h2.8v-1.85h-2.8Zm-2.7 2.575q-2.7-.175-4.475-2.113Q3.3 16.625 3.3 13.8q0-2.05 1.663-4.563Q6.625 6.725 10 3.7q3.25 2.925 4.912 5.35 1.663 2.425 1.788 4.45H9.55Z"/>
    </Icon>
  );
});

IconMaterialWaterPhW100Filled.displayName = 'AmauiIconMaterialWaterPhW100Filled';

export default IconMaterialWaterPhW100Filled;
