import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSweepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SweepW100Filled'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-266q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h160q5.95 0 9.975 4.035 4.025 4.035 4.025 10T609.975-270q-4.025 4-9.975 4H440Zm-198-50 356-356q4-4 9.5-4.5T618-672q5 5 5 10t-5 10L263-297q-9 9-21 9t-21-9L62-456q-4-4-4.5-9.5T62-476q5-5 10-5t10 5l160 160Zm358-110q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h160q5.95 0 9.975 4.035 4.025 4.035 4.025 10T769.975-430q-4.025 4-9.975 4H600Zm160-160q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h160q5.95 0 9.975 4.035 4.025 4.035 4.025 10T929.975-590q-4.025 4-9.975 4H760Z"/>
    </Icon>
  );
});

IconMaterialSweepW100Filled.displayName = 'AmauiIconMaterialSweepW100Filled';

export default IconMaterialSweepW100Filled;
