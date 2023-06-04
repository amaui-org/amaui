import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPhW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPhW100'

      short_name='WaterPh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 20.675q-2.7-.175-4.475-2.113Q3.3 16.625 3.3 13.8q0-2.05 1.663-4.563Q6.625 6.725 10 3.7q3.25 2.925 4.912 5.35 1.663 2.425 1.788 4.45H16q-.125-1.8-1.625-4.025Q12.875 7.25 10 4.65 7.025 7.375 5.513 9.675 4 11.975 4 13.8q0 2.575 1.562 4.287Q7.125 19.8 9.55 19.975Zm.45-8.35Zm1.55 8.375v-5.2h4.2v3.3h-3.5v1.9Zm6.1 0v-5.2h.7v2h2.8v-2h.7v5.2h-.7v-2.5h-2.8v2.5Zm-5.4-2.6h2.8v-1.85h-2.8Z"/>
    </Icon>
  );
});

IconMaterialWaterPhW100.displayName = 'AmauiIconMaterialWaterPhW100';

export default IconMaterialWaterPhW100;
