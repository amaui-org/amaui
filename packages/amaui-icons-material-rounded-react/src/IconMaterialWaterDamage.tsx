import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDamage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamage'

      short_name='WaterDamage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19v-7H3.3q-.35 0-.475-.325t.15-.55l8.35-7.525q.275-.275.675-.275t.675.275l8.35 7.525q.275.225.15.55Q21.05 12 20.7 12H19v7q0 .425-.288.712Q18.425 20 18 20Zm1-2h10v-7.8l-5-4.5-5 4.5Zm5-6.15ZM12 16q.825 0 1.413-.588Q14 14.825 14 14q0-.6-.275-1.225-.275-.625-1.15-1.95-.125-.175-.275-.263-.15-.087-.3-.087t-.3.087q-.15.088-.275.263-.875 1.325-1.15 1.95Q10 13.4 10 14q0 .825.588 1.412Q11.175 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialWaterDamage.displayName = 'AmauiIconMaterialWaterDamage';

export default IconMaterialWaterDamage;
