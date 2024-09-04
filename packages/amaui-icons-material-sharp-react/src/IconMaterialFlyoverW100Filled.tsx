import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlyoverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlyoverW100Filled'

      short_name='Flyover'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-429v-124q-20 4-40 8.5t-40 9.5v-29q85-23 172.5-31.5T480-604q88 0 175.5 8.5T828-564v29q-20-5-40-9l-40-8v123h-28v-128q-60-9.5-120-14.25T480-576q-60 0-120 4.2T240-558v129h-28Zm171-273 14.48-86H563l14 86q-24.06-1-48.47-2-24.4-1-48.47-1-24.06 0-48.56.5-24.5.5-48.5 2.5Zm-85 530 49-302q30-3 59.5-4.5T466-480v87h28v-87q30 0 60 1.5t60 4.5l48 302H494v-101h-28v101H298Z"/>
    </Icon>
  );
});

IconMaterialFlyoverW100Filled.displayName = 'AmauiIconMaterialFlyoverW100Filled';

export default IconMaterialFlyoverW100Filled;
