import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightSightAutoOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoOffW100Filled'

      short_name='NightSightAutoOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20.35q-3.075 0-5.212-2.138Q3.65 16.075 3.65 13q0-1.4.5-2.65t1.3-2.175l.5.5q-.75.925-1.175 1.987Q4.35 11.725 4.35 13q0 2.75 1.95 4.7 1.95 1.95 4.7 1.95 1.05 0 2.2-.375 1.15-.375 2.1-1.25l.525.525q-.925.85-2.188 1.325-1.262.475-2.637.475Zm10.3.85L2.2 2.1l.5-.5 4.875 4.875q.525-.275 1.288-.5.762-.225 1.362-.275-.375.6-.575 1.263-.2.662-.25 1.312l7.3 7.325q.325-.025.625-.088.3-.062.625-.162-.125.275-.212.525-.088.25-.213.525l4.275 4.3Zm-6.575-10.525 2.75-8.35h1.05l2.75 8.35h-.725l-.675-2h-3.75l-.65 2Zm1.625-2.7h3.3L18 2.95Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoOffW100Filled.displayName = 'AmauiIconMaterialNightSightAutoOffW100Filled';

export default IconMaterialNightSightAutoOffW100Filled;
