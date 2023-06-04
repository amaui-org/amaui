import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterOrpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrpW100'

      short_name='WaterOrp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 3.7q3.25 2.925 4.912 5.35 1.663 2.425 1.788 4.45H16q-.125-1.8-1.625-4.025Q12.875 7.25 10 4.65 7.025 7.375 5.513 9.675 4 11.975 4 13.8q0 .95.238 1.8.237.85.662 1.575v1.175q-.75-.9-1.175-2.05-.425-1.15-.425-2.5 0-2.05 1.663-4.563Q6.625 6.725 10 3.7Zm0 7.225ZM6.9 20.7v-5.2h3.7v5.2Zm.7-.7h2.3v-3.8H7.6Zm4.8.7v-5.2h4.2v3.2h-1.075l.875 2h-.775l-.85-2H13.1v2Zm6 0v-5.2h4.2v3.2h-3.5v2ZM13.1 18h2.8v-1.8h-2.8Zm6 0h2.8v-1.8h-2.8Z"/>
    </Icon>
  );
});

IconMaterialWaterOrpW100.displayName = 'AmauiIconMaterialWaterOrpW100';

export default IconMaterialWaterOrpW100;
