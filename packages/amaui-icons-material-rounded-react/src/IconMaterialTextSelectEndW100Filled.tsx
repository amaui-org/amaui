import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectEndW100Filled'

      short_name='TextSelectEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 296v-28h80v28h-80Zm0 588v-28h80v28h-80ZM280 296v-28h80v28h-80Zm0 588v-28h80v28h-80ZM172 446v-80h28v80h-28Zm0 170v-80h28v80h-28Zm0 170v-80h28v80h-28Zm442 98q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h66V296h-66q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h160q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 292q-4.025 4-9.975 4h-66v560h66q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 880q-4.025 4-9.975 4H614Zm-414 0q-11.55 0-19.775-8.225Q172 867.55 172 856h28v28Zm-28-588q0-11.55 8.225-19.775Q188.45 268 200 268v28h-28Z"/>
    </Icon>
  );
});

IconMaterialTextSelectEndW100Filled.displayName = 'AmauiIconMaterialTextSelectEndW100Filled';

export default IconMaterialTextSelectEndW100Filled;
