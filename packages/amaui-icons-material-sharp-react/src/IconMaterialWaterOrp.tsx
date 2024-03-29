import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterOrp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrp'

      short_name='WaterOrp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 2q4.025 3.425 6.012 6.363Q18 11.3 18 13.8v.2h-2v-.2q0-1.825-1.512-4.125Q12.975 7.375 10 4.65 7.025 7.375 5.513 9.675 4 11.975 4 13.8q0 .7.125 1.35.125.65.375 1.225v3.475q-1.175-1.125-1.837-2.675Q2 15.625 2 13.8q0-2.5 1.988-5.437Q5.975 5.425 10 2Zm0 8.525ZM6.5 22v-6H11v6ZM8 20.5h1.5v-3H8Zm4 1.5v-6h5v3.9h-.9L17 22h-1.5l-.85-2H13.5v2Zm6 0v-6h5v4h-3.5v2Zm-4.5-3.5h2v-1h-2Zm6 0h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialWaterOrp.displayName = 'AmauiIconMaterialWaterOrp';

export default IconMaterialWaterOrp;
