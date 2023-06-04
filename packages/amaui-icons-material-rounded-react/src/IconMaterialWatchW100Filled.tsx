import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchW100Filled'

      short_name='Watch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.1 19.65q-.5 0-.912-.3-.413-.3-.538-.8l-.45-1.6q-1.275-.675-2.087-2Q6.3 13.625 6.3 12q0-1.625.813-2.95.812-1.325 2.087-2l.45-1.6q.125-.5.538-.8.412-.3.912-.3h1.8q.5 0 .912.3.413.3.538.8l.45 1.6q1.275.675 2.087 2 .813 1.325.813 2.95 0 1.625-.813 2.95-.812 1.325-2.087 2l-.45 1.6q-.125.5-.538.8-.412.3-.912.3ZM12 17q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialWatchW100Filled.displayName = 'AmauiIconMaterialWatchW100Filled';

export default IconMaterialWatchW100Filled;
