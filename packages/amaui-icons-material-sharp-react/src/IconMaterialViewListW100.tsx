import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListW100'

      short_name='ViewList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 17.2V6.45h15.4V17.2ZM5 9.8h2.65V7.15H5Zm3.35 0H19V7.15H8.35Zm0 3.35H19V10.5H8.35Zm0 3.35H19v-2.65H8.35ZM5 16.5h2.65v-2.65H5Zm0-3.35h2.65V10.5H5Z"/>
    </Icon>
  );
});

IconMaterialViewListW100.displayName = 'AmauiIconMaterialViewListW100';

export default IconMaterialViewListW100;
