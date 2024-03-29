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
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19v-7H3.3q-.35 0-.475-.325t.15-.55l8.35-7.525q.275-.275.675-.275t.675.275l8.35 7.525q.275.225.15.55Q21.05 12 20.7 12H19v7q0 .425-.288.712Q18.425 20 18 20Zm6-4q.825 0 1.413-.588Q14 14.825 14 14q0-.675-.375-1.438Q13.25 11.8 12 10q-1.25 1.8-1.625 2.562Q10 13.325 10 14q0 .825.588 1.412Q11.175 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageFilled.displayName = 'AmauiIconMaterialWaterDamageFilled';

export default IconMaterialWaterDamageFilled;
