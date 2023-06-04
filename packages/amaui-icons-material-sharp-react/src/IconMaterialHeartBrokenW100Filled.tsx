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
      <path d="M12.025 20.3q-2.5-2.5-4.175-4.275-1.675-1.775-2.687-3.113-1.013-1.337-1.438-2.375Q3.3 9.5 3.3 8.5q0-2.025 1.413-3.438Q6.125 3.65 8.15 3.65q.9 0 1.75.3t1.55.875L9.775 10.65h3.075l-.725 7.975L15.25 8.35H12.2l1.4-4.2q.5-.25 1.063-.375.562-.125 1.137-.125 2.025 0 3.438 1.412Q20.65 6.475 20.65 8.5q0 1.025-.462 2.1-.463 1.075-1.5 2.45-1.038 1.375-2.675 3.125-1.638 1.75-3.988 4.125Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenW100Filled.displayName = 'AmauiIconMaterialHeartBrokenW100Filled';

export default IconMaterialHeartBrokenW100Filled;
