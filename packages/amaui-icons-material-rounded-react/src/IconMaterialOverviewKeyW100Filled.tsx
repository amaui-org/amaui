import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOverviewKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyW100Filled'

      short_name='OverviewKey'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M140 804q-26 0-43-17t-17-43V408q0-26 17-43t43-17h336q26 0 43 17t17 43v336q0 26-17 43t-43 17H140Zm553.965 0Q688 804 684 799.975T680 790V362q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v428q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm172 0Q860 804 856 799.975T852 790V362q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v428q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyW100Filled.displayName = 'AmauiIconMaterialOverviewKeyW100Filled';

export default IconMaterialOverviewKeyW100Filled;
