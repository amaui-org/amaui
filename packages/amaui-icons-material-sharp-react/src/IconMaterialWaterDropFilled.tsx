import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDropFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropFilled'

      short_name='WaterDrop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.5 1.988-5.437Q7.975 5.425 12 2q4.025 3.425 6.013 6.363Q20 11.3 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Zm.275-3q.3-.025.513-.237.212-.213.212-.513 0-.35-.225-.562-.225-.213-.575-.188-1.025.075-2.175-.562-1.15-.638-1.45-2.313-.05-.275-.263-.45Q8.1 14 7.825 14q-.35 0-.575.262-.225.263-.15.613.425 2.275 2 3.25 1.575.975 3.175.875Z"/>
    </Icon>
  );
});

IconMaterialWaterDropFilled.displayName = 'AmauiIconMaterialWaterDropFilled';

export default IconMaterialWaterDropFilled;
