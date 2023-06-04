import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeekendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendW100Filled'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.725 0-1.212-.488Q2.3 17.025 2.3 16.3v-4.75q0-.525.4-.888.4-.362.95-.362.55 0 .95.362.4.363.4.888v3.1h14v-3.1q0-.525.4-.888.4-.362.95-.362.55 0 .95.362.4.363.4.888v4.75q0 .725-.487 1.212Q20.725 18 20 18Zm1.7-4.05V11.3q0-.725-.487-1.213Q4.725 9.6 4 9.6V8.1q0-.725.488-1.213Q4.975 6.4 5.7 6.4h12.6q.725 0 1.213.487Q20 7.375 20 8.1v1.5q-.725.025-1.212.513-.488.487-.488 1.187v2.65Z"/>
    </Icon>
  );
});

IconMaterialWeekendW100Filled.displayName = 'AmauiIconMaterialWeekendW100Filled';

export default IconMaterialWeekendW100Filled;
