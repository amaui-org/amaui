import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListW100Filled'

      short_name='ViewList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 9.8V6.45h3.35V9.8Zm3.8 0V6.45h11.6V9.8Zm0 3.6v-3.15h11.6v3.15Zm0 3.8v-3.35h11.6v3.35Zm-3.8 0v-3.35h3.35v3.35Zm0-3.8v-3.15h3.35v3.15Z"/>
    </Icon>
  );
});

IconMaterialViewListW100Filled.displayName = 'AmauiIconMaterialViewListW100Filled';

export default IconMaterialViewListW100Filled;
