import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadgeW100Filled'

      short_name='EMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm348-134q5.95 0 9.975-4.035 4.025-4.035 4.025-10T589.975 726q-4.025-4-9.975-4H394V590h146q5.95 0 9.975-4.035 4.025-4.035 4.025-10T549.975 566q-4.025-4-9.975-4H394V430h186q5.95 0 9.975-4.035 4.025-4.035 4.025-10T589.975 406q-4.025-4-9.975-4H396.031Q383 402 374.5 410.625 366 419.25 366 432v288q0 12.75 8.625 21.375T396 750h184Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialEMobiledataBadgeW100Filled';

export default IconMaterialEMobiledataBadgeW100Filled;
