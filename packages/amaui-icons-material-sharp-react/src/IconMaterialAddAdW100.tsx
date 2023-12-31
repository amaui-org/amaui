import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAdW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAdW100'

      short_name='AddAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M730-192v-120H610v-28h120v-120h28v120h120v28H758v120h-28ZM82-172v-616h616v228h-28v-112H110v472h520v28H82Zm28-528h560v-60H110v60Zm0 0v-60 60Z"/>
    </Icon>
  );
});

IconMaterialAddAdW100.displayName = 'AmauiIconMaterialAddAdW100';

export default IconMaterialAddAdW100;
