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
      <rect fill="none" height="24" width="24"/><path d="M12,5.69l-5,4.5V18h10v-7.81L12,5.69z M12,16c-1.1,0-2-0.9-2-2c0-1.1,2-4,2-4s2,2.9,2,4 C14,15.1,13.1,16,12,16z" opacity=".3"/><path d="M12,3L2,12h3v8h14v-8h3L12,3z M7,18v-7.81l5-4.5l5,4.5V18H7z M14,14c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,2-4,2-4 S14,12.9,14,14z"/>
    </Icon>
  );
});

IconMaterialWaterDamage.displayName = 'AmauiIconMaterialWaterDamage';

export default IconMaterialWaterDamage;
