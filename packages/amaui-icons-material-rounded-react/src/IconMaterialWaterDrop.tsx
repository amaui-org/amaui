import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDrop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDrop'

      short_name='WaterDrop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.375 1.8-5.15 1.8-2.775 5.45-6 .15-.125.35-.2.2-.075.4-.075t.4.075q.2.075.35.2 3.65 3.225 5.45 6Q20 11.425 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Zm0-2q2.525 0 4.262-1.725Q18 16.55 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.75 1.737 4.475Q9.475 20 12 20Zm0-6.2Zm.275 5.2q.3-.025.513-.237.212-.213.212-.513 0-.35-.225-.562-.225-.213-.575-.188-1.025.075-2.175-.562-1.15-.638-1.45-2.313-.05-.275-.263-.45Q8.1 14 7.825 14q-.35 0-.575.262-.225.263-.15.613.425 2.275 2 3.25 1.575.975 3.175.875Z"/>
    </Icon>
  );
});

IconMaterialWaterDrop.displayName = 'AmauiIconMaterialWaterDrop';

export default IconMaterialWaterDrop;
