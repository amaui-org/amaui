import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPhFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPhFilled'

      short_name='WaterPh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-6h5v4h-3.5v2Zm6 0v-6h1.5v2h2v-2H22v6h-1.5v-2.5h-2V22Zm-4.5-3.5h2v-1h-2ZM9 21.95q-3.05-.35-5.025-2.625Q2 17.05 2 13.8q0-2.5 1.988-5.437Q5.975 5.425 10 2q4.025 3.425 6.012 6.363Q18 11.3 18 13.8v.2H9Z"/>
    </Icon>
  );
});

IconMaterialWaterPhFilled.displayName = 'AmauiIconMaterialWaterPhFilled';

export default IconMaterialWaterPhFilled;
