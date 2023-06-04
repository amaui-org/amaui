import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDamageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageW100Filled'

      short_name='WaterDamage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 18.7q-.325 0-.537-.213-.213-.212-.213-.537v-7h-.125q-.275 0-.375-.25-.1-.25.1-.45l5.6-5.05q.2-.2.5-.2t.5.2l5.6 5.05q.2.2.1.45t-.375.25H17.7v7q0 .325-.212.537-.213.213-.538.213ZM12 15.35q.575 0 .963-.388.387-.387.387-.962 0-.425-.237-.875-.238-.45-1.113-1.725-.925 1.35-1.137 1.75-.213.4-.213.85 0 .575.388.962.387.388.962.388Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageW100Filled.displayName = 'AmauiIconMaterialWaterDamageW100Filled';

export default IconMaterialWaterDamageW100Filled;
