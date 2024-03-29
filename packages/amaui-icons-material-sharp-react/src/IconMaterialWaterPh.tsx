import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPh'

      short_name='WaterPh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21.95q-3.05-.35-5.025-2.625Q2 17.05 2 13.8q0-2.5 1.988-5.437Q5.975 5.425 10 2q4.025 3.425 6.012 6.363Q18 11.3 18 13.8v.2h-2v-.2q0-1.825-1.512-4.125Q12.975 7.375 10 4.65 7.025 7.375 5.513 9.675 4 11.975 4 13.8q0 2.425 1.4 4.1 1.4 1.675 3.6 2.025Zm1-9.675ZM11 22v-6h5v4h-3.5v2Zm6 0v-6h1.5v2h2v-2H22v6h-1.5v-2.5h-2V22Zm-4.5-3.5h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialWaterPh.displayName = 'AmauiIconMaterialWaterPh';

export default IconMaterialWaterPh;
