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
      <path d="M5 20v-8H2l10-9 10 9h-3v8Zm2-2h10v-7.8l-5-4.5-5 4.5Zm5-2q.825 0 1.413-.588Q14 14.825 14 14q0-.675-.375-1.438Q13.25 11.8 12 10q-1.25 1.8-1.625 2.562Q10 13.325 10 14q0 .825.588 1.412Q11.175 16 12 16Zm0-4.15Z"/>
    </Icon>
  );
});

IconMaterialWaterDamage.displayName = 'AmauiIconMaterialWaterDamage';

export default IconMaterialWaterDamage;
