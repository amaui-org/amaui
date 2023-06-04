import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDamageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageFilled'

      short_name='WaterDamage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-8H2l10-9 10 9h-3v8Zm7-4q.825 0 1.413-.588Q14 14.825 14 14q0-.6-.275-1.225-.275-.625-1.15-1.95-.125-.175-.275-.263-.15-.087-.3-.087t-.3.087q-.15.088-.275.263-.875 1.325-1.15 1.95Q10 13.4 10 14q0 .825.588 1.412Q11.175 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageFilled.displayName = 'AmauiIconMaterialWaterDamageFilled';

export default IconMaterialWaterDamageFilled;
