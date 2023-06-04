import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPediatricsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PediatricsW100Filled'

      short_name='Pediatrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M340 406q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h126v-96q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v96h126q5.95 0 9.975 4.035 4.025 4.035 4.025 10T629.975 402q-4.025 4-9.975 4H340Zm52 496q-24.75 0-42.375-17.625T332 842v-83h108q5.95 0 9.975-4.035 4.025-4.035 4.025-10T449.975 735q-4.025-4-9.975-4H332V617h108q5.95 0 9.975-4.035 4.025-4.035 4.025-10T449.975 593q-4.025-4-9.975-4H332v-53q0-37.5 26.25-63.75T422 446h116q37.5 0 63.75 26.25T628 536v306q0 24.75-17.625 42.375T568 902H392Z"/>
    </Icon>
  );
});

IconMaterialPediatricsW100Filled.displayName = 'AmauiIconMaterialPediatricsW100Filled';

export default IconMaterialPediatricsW100Filled;
