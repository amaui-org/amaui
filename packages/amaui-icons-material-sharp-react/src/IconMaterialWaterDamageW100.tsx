import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDamageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageW100'

      short_name='WaterDamage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 18.7v-8h-.9L12 4.75l6.6 5.95h-.9v8ZM7 18h10v-7.8l-5-4.5-5 4.5Zm5-2.65q.575 0 .963-.388.387-.387.387-.962 0-.425-.237-.875-.238-.45-1.113-1.725-.925 1.35-1.137 1.75-.213.4-.213.85 0 .575.388.962.387.388.962.388Zm0-3.5Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageW100.displayName = 'AmauiIconMaterialWaterDamageW100';

export default IconMaterialWaterDamageW100;
