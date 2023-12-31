import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextAdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextAdW100Filled'

      short_name='TextAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm60-126h456q5.95 0 9.975-4.035 4.025-4.035 4.025-10T717.975-362q-4.025-4-9.975-4H252q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0-128h456q5.95 0 9.975-4.035 4.025-4.035 4.025-10T717.975-490q-4.025-4-9.975-4H252q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0-128h308q5.95 0 9.975-4.035 4.025-4.035 4.025-10T569.975-618q-4.025-4-9.975-4H252q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Z"/>
    </Icon>
  );
});

IconMaterialTextAdW100Filled.displayName = 'AmauiIconMaterialTextAdW100Filled';

export default IconMaterialTextAdW100Filled;
