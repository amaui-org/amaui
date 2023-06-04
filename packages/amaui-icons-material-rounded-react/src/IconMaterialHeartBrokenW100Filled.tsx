import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartBrokenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBrokenW100Filled'

      short_name='HeartBroken'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.85 19.125q-2.15-2.175-3.6-3.738-1.45-1.562-2.325-2.775-.875-1.212-1.25-2.187Q3.3 9.45 3.3 8.5q0-2.025 1.413-3.438Q6.125 3.65 8.15 3.65q.9 0 1.75.3t1.55.875L10.125 9.45q-.125.425.075.812.2.388.6.388h2.05l-.525 5.85q-.025.2.163.225.187.025.237-.15L14.9 9.55q.125-.425-.062-.812-.188-.388-.588-.388H12.2l1.4-4.2q.5-.25 1.063-.375.562-.125 1.137-.125 2.025 0 3.438 1.412Q20.65 6.475 20.65 8.5q0 .95-.412 1.962-.413 1.013-1.313 2.25-.9 1.238-2.312 2.788-1.413 1.55-3.438 3.625-.475.5-1.15.5-.675 0-1.175-.5Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenW100Filled.displayName = 'AmauiIconMaterialHeartBrokenW100Filled';

export default IconMaterialHeartBrokenW100Filled;
