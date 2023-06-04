import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxW100'

      short_name='AllInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.35 16h12v-3.5h-3.1q-.275.95-1.087 1.475-.813.525-1.813.525t-1.812-.525q-.813-.525-1.088-1.475h-3.1Zm6-2.2q.925 0 1.625-.563.7-.562.7-1.437h3.675V4h-12v7.8h3.675q0 .875.7 1.437.7.563 1.625.563Zm-6.7 2.9V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Zm3.4-3.4h12Z"/>
    </Icon>
  );
});

IconMaterialAllInboxW100.displayName = 'AmauiIconMaterialAllInboxW100';

export default IconMaterialAllInboxW100;
