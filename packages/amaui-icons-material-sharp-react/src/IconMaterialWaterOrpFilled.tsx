import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterOrpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrpFilled'

      short_name='WaterOrp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 22v-6H11v6ZM8 20.5h1.5v-3H8Zm4 1.5v-6h5v3.9h-.9L17 22h-1.5l-.85-2H13.5v2Zm6 0v-6h5v4h-3.5v2Zm-4.5-3.5h2v-1h-2Zm6 0h2v-1h-2Zm-15 1.35q-1.175-1.125-1.837-2.675Q2 15.625 2 13.8q0-2.5 1.988-5.437Q5.975 5.425 10 2q4.025 3.425 6.012 6.363Q18 11.3 18 13.8v.2H4.5Z"/>
    </Icon>
  );
});

IconMaterialWaterOrpFilled.displayName = 'AmauiIconMaterialWaterOrpFilled';

export default IconMaterialWaterOrpFilled;
