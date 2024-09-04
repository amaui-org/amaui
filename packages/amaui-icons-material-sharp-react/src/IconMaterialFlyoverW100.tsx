import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlyoverW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlyoverW100'

      short_name='Flyover'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-535v-29q85-23 172.5-31.5T480-604q88 0 175.5 8.5T828-564v29q-20-5-40-9l-40-8v123h-28v-128q-60-10-120-14.5T480-576q-60 0-120 4t-120 14v129h-28v-124q-20 4-40 8.5t-40 9.5Zm166 363 49-302q14-2 14-1.5t14-.5l-49 304h-28Zm99-616h28l-13 83q-15 1-14.5 1t-14.5 2l14-86Zm69 616h28v-101h-28v101Zm0-221h28v-83h-28v83Zm69-395h28l14 86q-14-1-14-1.5t-14-1.5l-14-83Zm99 616-49-304q14 2 14.5 1t14.5 1l48 302h-28Z"/>
    </Icon>
  );
});

IconMaterialFlyoverW100.displayName = 'AmauiIconMaterialFlyoverW100';

export default IconMaterialFlyoverW100;
