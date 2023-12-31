import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableAddW100'

      short_name='VariableAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-332H202q-12.75 0-21.375-8.511-8.625-8.51-8.625-21.091v-236.817q0-12.581 8.625-21.081T202-628h556q12.75 0 21.375 8.625T788-598v38h-28v-40H200v240h360v28Zm-360-28v-240 240Zm560 28H654q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106v-106q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T903.975-336q-4.025 4-9.975 4H788v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T764-216.025q-4-4.025-4-9.975v-106Z"/>
    </Icon>
  );
});

IconMaterialVariableAddW100.displayName = 'AmauiIconMaterialVariableAddW100';

export default IconMaterialVariableAddW100;
