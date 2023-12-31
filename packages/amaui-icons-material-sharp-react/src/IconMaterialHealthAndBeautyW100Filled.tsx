import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthAndBeautyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndBeautyW100Filled'

      short_name='HealthAndBeauty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M642-132v-28h160v-120H642v-28h160v-120H642v-28h160v-120H642v-28h160v-120H642v-28h216v620H642Zm-408 0L102-498l188-112v-218h56v218l188 112-132 366H234Z"/>
    </Icon>
  );
});

IconMaterialHealthAndBeautyW100Filled.displayName = 'AmauiIconMaterialHealthAndBeautyW100Filled';

export default IconMaterialHealthAndBeautyW100Filled;
