import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAdW100Filled'

      short_name='AddAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M730-192v-120H610v-28h120v-120h28v120h120v28H758v120h-28ZM82-172v-616h616v228h-28v-112H110v472h520v28H82Z"/>
    </Icon>
  );
});

IconMaterialAddAdW100Filled.displayName = 'AmauiIconMaterialAddAdW100Filled';

export default IconMaterialAddAdW100Filled;
