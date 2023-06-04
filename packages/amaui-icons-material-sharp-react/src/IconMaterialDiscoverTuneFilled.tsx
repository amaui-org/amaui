import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiscoverTuneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscoverTuneFilled'

      short_name='DiscoverTune'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 9V7h3V3h2v4h3v2Zm3 12V11h2v10ZM6 21v-4H3v-2h8v2H8v4Zm0-8V3h2v10Z"/>
    </Icon>
  );
});

IconMaterialDiscoverTuneFilled.displayName = 'AmauiIconMaterialDiscoverTuneFilled';

export default IconMaterialDiscoverTuneFilled;
